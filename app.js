// --- 1. Header Scroll Logic ---
let lastScrollTop = 0;
const header = document.querySelector('.app-header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop <= 0) {
        header.classList.remove('scroll-up');
        header.classList.remove('scroll-down');
        lastScrollTop = scrollTop;
        return;
    }
    if (scrollTop > lastScrollTop && scrollTop > 64) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScrollTop = scrollTop;
}, { passive: true });


// --- 2. Supabase Setup & Routing ---
const SUPABASE_URL = 'https://yevfkqblgovvnmueoufw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_9s6sR6tS6IkVg3hrmSgTzg_iHCF19OX';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const urlParams = new URLSearchParams(window.location.search);
// Check URL first, then LocalStorage. No hardcoded 'en' default.
let activeLang = urlParams.get('lang') || localStorage.getItem('selectedLang');

const langFlags = {
    'en': '🇬🇧', 'fr': '🇫🇷', 'it': '🇮🇹', 'de': '🇩🇪', 
    'es': '🇪🇸', 'zh-CN': '🇨🇳', 'zh-HK': '🇭🇰'
};

// Hardcode your single tour ID here (must match the ID in your Supabase 'stops' table)
const DEFAULT_TOUR_ID = 'city-center';

let activities = [];


// --- 3. Database Fetching ---
async function fetchTourData() {
    // Inject loader before the fetch begins
    document.getElementById('activity-list').innerHTML = '<div style="text-align:center; padding: 3rem; color: #4a5568;"><i class="fa-solid fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 1rem; color: #fa7c00;"></i><br>Loading tour...</div>';

    try {
        const { data, error } = await supabaseClient
            .from('stops')
            .select(`
                id,
                order_index,
                icon,
                image_url,
                stop_translations!inner(
                    title,
                    subtitle,
                    script_text,
                    audio_url
                )
            `)
            .eq('tour_id', 'city-center') // Now uses the hardcoded ID
            .eq('stop_translations.lang', activeLang)
            .order('order_index', { ascending: true });

        if (error) throw error;

        if (!data || data.length === 0) {
            renderErrorState("Tour or language not found.");
            return;
        }

        localStorage.setItem(`tourData_${activeLang}`, JSON.stringify(data));

        const completedIds = JSON.parse(localStorage.getItem('completedStops') || '[]');

        activities = data.map((stop, index) => ({
            id: stop.id,
            // Prefix index as number if it is not the first stop (Welcome)
            title: index === 0 ? stop.stop_translations[0].title : `${index}. ${stop.stop_translations[0].title}`,
            subtitle: stop.stop_translations[0].subtitle,
            icon: stop.icon,
            image: stop.image_url,
            audioFile: stop.stop_translations[0].audio_url,
            text: stop.stop_translations[0].script_text,
            completed: completedIds.includes(stop.id) // Check if ID is in storage
        }));

        cacheTourAssets(activities);
        renderList();

    } catch (err) {
        console.error("Error fetching tour:", err);
        const cachedData = localStorage.getItem(`tourData_${activeLang}`);
        
        if (cachedData) {
            console.log("Network failed. Falling back to cached tour data.");
            const data = JSON.parse(cachedData);
            
            // Re-fetch progress array so offline users keep their checkmarks
            const completedIds = JSON.parse(localStorage.getItem('completedStops') || '[]');

            activities = data.map((stop, index) => ({
            id: stop.id,
            // Prefix index as number if it is not the first stop (Welcome)
            title: index === 0 ? stop.stop_translations[0].title : `${index}. ${stop.stop_translations[0].title}`,
            subtitle: stop.stop_translations[0].subtitle,
            icon: stop.icon,
            image: stop.image_url,
            audioFile: stop.stop_translations[0].audio_url,
            text: stop.stop_translations[0].script_text,
            completed: completedIds.includes(stop.id)
        }));
            
            renderList();
        } else {
            // If there is no cache and the network fails, then show the error
            renderErrorState("Failed to load tour data. Check your connection.");
        }
    }
}

async function cacheTourAssets(tourActivities) {
    if (!('caches' in window)) return;
    
    // Ignore audio files for languages relying on device TTS
    const forceTTS = activeLang === 'zh-CN' || activeLang === 'zh-HK';
    
    const urlsToCache = tourActivities
        .flatMap(act => [
            act.image, 
            forceTTS ? null : act.audioFile
        ])
        .filter(url => url && url !== "null" && url !== "");;;;;;;

    if (urlsToCache.length === 0) return;

    const dynamicCache = await caches.open('flagship-dynamic-v1');
    const overlay = document.getElementById('download-overlay');
    const progressFill = document.getElementById('download-progress-fill');
    const statusText = document.getElementById('download-status-text');

    // Check if we actually need to download anything by looking at the cache keys
    const existingRequests = await dynamicCache.keys();
    const existingUrls = existingRequests.map(req => req.url);
    
    const missingUrls = urlsToCache.filter(url => !existingUrls.includes(url));

    // If everything is already cached, skip the download screen
    if (missingUrls.length === 0) {
        console.log("All assets already cached.");
        return;
    }

    // Show the overlay
    overlay.classList.add('active');
    
    let downloadedCount = 0;
    const totalFiles = missingUrls.length;

    // --- NEW: Pre-flight Storage Check ---
    if (navigator.storage && navigator.storage.estimate) {
        try {
            const estimation = await navigator.storage.estimate();
            const availableMB = (estimation.quota - estimation.usage) / (1024 * 1024);
            
            // If less than 50MB is available, warn the user immediately
            if (availableMB < 50) {
                statusText.innerText = "Warning: Device storage is almost full. Audio may not play offline.";
                statusText.style.color = "#ef4444"; // Red text for warning
                await new Promise(resolve => setTimeout(resolve, 3000)); // Pause so they read it
            }
        } catch (e) {
            console.warn("Storage estimation failed, proceeding blindly.");
        }
    }
    // -------------------------------------

    for (const url of missingUrls) {
        try {
            const response = await fetch(url, { mode: 'cors' });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            await dynamicCache.put(url, response.clone());
        } catch (err) {
            // --- NEW: Explicit Quota Handling ---
            if (err.name === 'QuotaExceededError') {
                console.warn('Storage quota exceeded. Halting downloads.');
                
                statusText.innerText = `Storage Full. Downloaded ${downloadedCount} of ${totalFiles} files.`;
                statusText.style.color = "#ef4444";
                
                // Keep the overlay open slightly longer so they understand the failure
                setTimeout(() => { overlay.classList.remove('active'); }, 4000);
                
                break; // Exit the loop entirely
            }
            // ------------------------------------
            
            console.error(`Failed to cache ${url}:`, err);
        } finally {
            downloadedCount++;
            if (overlay.classList.contains('active') && statusText.style.color !== "rgb(239, 68, 68)") {
                const percent = (downloadedCount / totalFiles) * 100;
                progressFill.style.width = `${percent}%`;
                statusText.innerText = `${downloadedCount} / ${totalFiles} Files`;
            }
        }
    }

    // Hide overlay after a brief pause so they see 100%
    setTimeout(() => {
        overlay.classList.remove('active');
    }, 800);
}


// --- 4. UI Rendering ---
const activityList = document.getElementById('activity-list');
const playerDrawer = document.getElementById('player-drawer');
const drawerBackdrop = document.getElementById('drawer-backdrop');

function renderList() {
    activityList.innerHTML = '';
    let completedCount = 0;

    activities.forEach(act => {
        if (act.completed) completedCount++;

        const card = document.createElement('div');
        card.className = `activity-card ${act.completed ? 'completed' : ''}`;
        card.innerHTML = `
            <div class="icon-circle"><i class="${act.icon}"></i></div>
            <div class="activity-info">
                <div class="activity-title">${act.title} ${act.completed ? '<i class="fa-solid fa-check-circle" style="color:#10b981; margin-left:8px;"></i>' : ''}</div>
                <div class="activity-subtitle">${act.subtitle}</div>
            </div>
            <button class="play-action"><i class="fa-solid ${act.completed ? 'fa-rotate-left' : 'fa-play'}"></i></button>
        `;
        card.addEventListener('click', () => openPlayer(act, true));
        activityList.appendChild(card);
    });

    const progressPercent = (completedCount / activities.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;
    document.getElementById('progress-text').innerText = `${completedCount} of ${activities.length} Stops Discovered`;
}

function renderErrorState(message) {
    if(activityList) activityList.innerHTML = `<div style="text-align:center; padding: 2rem; color: #4a5568;">${message}</div>`;
}


// --- 5. Audio Player Logic ---
const audioToggleBtn = document.getElementById('audio-toggle-btn');
const audioCurrent = document.getElementById('audio-current');
const audioDuration = document.getElementById('audio-duration');
const audioSlider = document.getElementById('audio-slider');

let audioTimer, isPlaying = false, currentAudioTime = 0, estimatedDuration = 0, fullScriptToRead = "", speechSynthesisActive = false;
let nativeAudio = new Audio();
let currentActivityHasMp3 = false;
let currentPlayingActivity = null;

function initAudio() {
    if (!speechSynthesisActive && 'speechSynthesis' in window) {
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(""));
        speechSynthesisActive = true;
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60); 
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function stopAudio() {
    currentActivityHasMp3 ? nativeAudio.pause() : window.speechSynthesis.cancel();
    nativeAudio.currentTime = 0;
    clearInterval(audioTimer); 
    isPlaying = false; 
    currentAudioTime = 0;
    audioToggleBtn.innerHTML = '<i class="fa-solid fa-play"></i>'; 
    audioSlider.value = 0; 
    audioCurrent.innerText = "0:00";
}

function fallbackToTTS(autoplay) {
    currentActivityHasMp3 = false;
    document.getElementById('audio-duration').innerText = "TTS";
    
    // Fix: Estimate reading duration so the interval timer doesn't instantly kill the audio.
    // Chinese characters are read at roughly 4.5 per second. Roman alphabets at roughly 14 per second.
    const charsPerSecond = (activeLang === 'zh-CN' || activeLang === 'zh-HK') ? 4.5 : 14;
    
    // Set duration with a minimum 5-second floor to prevent instant-cancels on very short strings
    estimatedDuration = Math.max(fullScriptToRead.length / charsPerSecond, 5); 
    
    if (autoplay) toggleAudio();
}

let isScrubbing = false;

// Stop timer from updating slider while user is dragging
audioSlider.addEventListener('mousedown', () => isScrubbing = true);
audioSlider.addEventListener('touchstart', () => isScrubbing = true, {passive: true});

// Only change the actual audio time when the user lets go
audioSlider.addEventListener('change', (e) => {
    isScrubbing = false;
    const seekTime = (e.target.value / 100) * estimatedDuration;
    if (currentActivityHasMp3) {
        nativeAudio.currentTime = seekTime;
    } else {
        currentAudioTime = seekTime; 
    }
});

// Update the text time immediately while dragging, but don't touch the audio yet
audioSlider.addEventListener('input', (e) => {
    const seekTime = (e.target.value / 100) * estimatedDuration;
    audioCurrent.innerText = formatTime(seekTime);
});

document.getElementById('skip-back-btn').addEventListener('click', () => {
    if (currentActivityHasMp3) nativeAudio.currentTime = Math.max(0, nativeAudio.currentTime - 15); // Changed to 15s for better UX
});

document.getElementById('skip-fwd-btn').addEventListener('click', () => {
    if (currentActivityHasMp3) nativeAudio.currentTime = Math.min(estimatedDuration, nativeAudio.currentTime + 15);
});

function toggleAudio() {
    initAudio();
    if (isPlaying) {
        currentActivityHasMp3 ? nativeAudio.pause() : window.speechSynthesis.pause();
        clearInterval(audioTimer); 
        isPlaying = false;
        audioToggleBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        if (currentActivityHasMp3) {
            nativeAudio.play();
        } else {
            if (currentAudioTime === 0) {
                const utterance = new SpeechSynthesisUtterance(fullScriptToRead);
                utterance.lang = activeLang; 
                utterance.rate = 0.9;
                window.speechSynthesis.speak(utterance);
            } else { window.speechSynthesis.resume(); }
        }

        isPlaying = true; 
        audioToggleBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        
        audioTimer = setInterval(() => {
            currentAudioTime = currentActivityHasMp3 ? nativeAudio.currentTime : currentAudioTime + 0.1;
            
            // Only update the UI if the user IS NOT actively dragging the slider
            if (!isScrubbing) {
                audioCurrent.innerText = formatTime(currentAudioTime);
                audioSlider.value = (currentAudioTime / estimatedDuration) * 100;
            }
            
            if (currentAudioTime >= estimatedDuration) {
                stopAudio();
                
                if (currentPlayingActivity && !currentPlayingActivity.completed) {
                    currentPlayingActivity.completed = true;
                    
                    const completedIds = JSON.parse(localStorage.getItem('completedStops') || '[]');
                    if (!completedIds.includes(currentPlayingActivity.id)) {
                        completedIds.push(currentPlayingActivity.id);
                        localStorage.setItem('completedStops', JSON.stringify(completedIds));
                    }
                    
                    renderList();
                }
            }
        }, 100);
    }
}

function openPlayer(activity, autoplay = false) {
    stopAudio();
    currentPlayingActivity = activity;
    
    document.body.style.overflow = 'hidden';
    
    document.getElementById('player-image').src = activity.image || "https://images.unsplash.com/photo-1524047934617-cb782c24e5f3?auto=format&fit=crop&q=80&w=1000";
    document.getElementById('player-icon').className = activity.icon;
    document.getElementById('player-title').innerText = activity.title;
    
    const descContainer = document.getElementById('player-description');
    descContainer.innerHTML = '';
    fullScriptToRead = "";
    
    const paragraphs = activity.text.split(/\r?\n+/);
    
    paragraphs.forEach(p => {
        if (p.trim() !== "") {
            const pEl = document.createElement('p'); 
            pEl.innerText = p.trim();
            descContainer.appendChild(pEl);
            fullScriptToRead += p.trim() + " ";
        }
    });

    // Force device TTS for Mandarin and Cantonese
    const forceTTS = activeLang === 'zh-CN' || activeLang === 'zh-HK';

    if (!forceTTS && activity.audioFile && activity.audioFile !== "null") {
        currentActivityHasMp3 = true;
        nativeAudio.src = activity.audioFile;
        nativeAudio.onloadedmetadata = () => {
            estimatedDuration = nativeAudio.duration;
            audioDuration.innerText = formatTime(estimatedDuration);
            if (autoplay) toggleAudio();
        };
        nativeAudio.onerror = () => {
            fallbackToTTS(autoplay);
        };
    } else {
        fallbackToTTS(autoplay);
    }

    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: activity.title,
            artist: 'Flagship Discovery Tour',
            artwork: [
                { src: activity.image || 'default-icon.png', sizes: '512x512', type: 'image/jpeg' }
            ]
        });

        navigator.mediaSession.setActionHandler('play', toggleAudio);
        navigator.mediaSession.setActionHandler('pause', toggleAudio);
        navigator.mediaSession.setActionHandler('seekbackward', () => {
            if (currentActivityHasMp3) nativeAudio.currentTime = Math.max(0, nativeAudio.currentTime - 15);
        });
        navigator.mediaSession.setActionHandler('seekforward', () => {
            if (currentActivityHasMp3) nativeAudio.currentTime = Math.min(estimatedDuration, nativeAudio.currentTime + 15);
        });
    }

    // --- NEW: Push History State ---
    history.pushState({ drawerOpen: true }, "", "#stop");

    playerDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
}

// --- NEW: Accept popstate parameter ---
function closeDrawer(isPopState = false) {
    document.body.style.overflow = '';
    playerDrawer.classList.remove('active'); 
    drawerBackdrop.classList.remove('active'); 
    stopAudio();

    // If closed via the UI X button or swipe, manually remove the hash
    if (!isPopState && window.location.hash === "#stop") {
        history.back();
    }
}

audioToggleBtn.addEventListener('click', toggleAudio);
document.getElementById('close-drawer-btn').addEventListener('click', () => closeDrawer(false));
drawerBackdrop.addEventListener('click', () => closeDrawer(false));

// --- NEW: Handle Browser Back Button ---
window.addEventListener('popstate', () => {
    if (playerDrawer.classList.contains('active')) {
        closeDrawer(true); 
    }
});

// --- NEW: Safe Swipe-to-Close on Image Header Only ---
const drawerHeader = document.querySelector('.drawer-image-header');
let touchStartY = 0;
let touchEndY = 0;

drawerHeader.addEventListener('touchstart', e => {
    touchStartY = e.changedTouches[0].screenY;
    // Reset any existing transitions so the drag feels 1:1
    playerDrawer.style.transition = 'none'; 
}, { passive: true });

drawerHeader.addEventListener('touchmove', e => {
    touchEndY = e.changedTouches[0].screenY;
    const deltaY = touchEndY - touchStartY;
    
    // Only allow dragging downwards
    if (deltaY > 0) {
        playerDrawer.style.transform = `translateY(${deltaY}px)`;
    }
}, { passive: true });

drawerHeader.addEventListener('touchend', e => {
    const deltaY = touchEndY - touchStartY;
    
    // Restore the CSS transition for smooth snapping/closing
    playerDrawer.style.transition = 'transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)';
    playerDrawer.style.transform = ''; 
    
    if (deltaY > 50) {
        closeDrawer(false);
    }
});


// --- 6. Initialization & Language Switcher Logic ---
const langPortal = document.getElementById('language-portal');
const openLangBtn = document.getElementById('open-lang-btn');
const closeLangBtn = document.getElementById('close-lang-btn');
const langItems = document.querySelectorAll('#language-selection-list li');

document.addEventListener('DOMContentLoaded', () => {
    if (!activeLang) {
        // First visit: No language selected. Force the modal open.
        langPortal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Note: fetchTourData() is NOT called yet.
    } else {
        // Return visit: Language exists. Start app normally.
        document.getElementById('current-lang-flag').innerText = langFlags[activeLang] || '🌍';
        document.body.addEventListener('click', initAudio, { once: true });
        fetchTourData(); 
    }
});

openLangBtn.addEventListener('click', () => {
    langPortal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeLangBtn.addEventListener('click', () => {
    // Prevent closing if they haven't picked a language yet on first load
    if (!activeLang) return; 
    langPortal.classList.remove('active');
    document.body.style.overflow = '';
});

langItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const selectedLang = e.currentTarget.getAttribute('data-lang');
        
        // Save the choice locally
        localStorage.setItem('selectedLang', selectedLang);

        if (selectedLang === activeLang) {
            closeLangBtn.click();
            return;
        }
        
        // Reload with new language
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('lang', selectedLang);
        window.location.href = currentUrl.toString();
    });
});

