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
const activeLang = urlParams.get('lang') || 'en';

// Hardcode your single tour ID here (must match the ID in your Supabase 'stops' table)
const DEFAULT_TOUR_ID = 'your_tour_id_here';

let activities = [];


// --- 3. Database Fetching ---
async function fetchTourData() {
    // REMOVED: if (!activeTourId) { ... }

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
            .eq('tour_id', DEFAULT_TOUR_ID) // Now uses the hardcoded ID
            .eq('stop_translations.lang', activeLang)
            .order('order_index', { ascending: true });

        if (error) throw error;

        if (!data || data.length === 0) {
            renderErrorState("Tour or language not found.");
            return;
        }

        activities = data.map(stop => ({
            id: stop.id,
            title: stop.stop_translations[0].title,
            subtitle: stop.stop_translations[0].subtitle,
            icon: stop.icon,
            image: stop.image_url,
            audioFile: stop.stop_translations[0].audio_url,
            text: stop.stop_translations[0].script_text,
            completed: false
        }));

        // --- NEW LINE ADDED HERE ---
        cacheTourAssets(activities);
        
        renderList();

    } catch (err) {
        console.error("Error fetching tour:", err);
        renderErrorState("Failed to load tour data. Check your connection.");
    }
}

// --- NEW FUNCTION ADDED HERE ---
async function cacheTourAssets(tourActivities) {
    if (!('caches' in window)) return;
    
    try {
        const dynamicCache = await caches.open('flagship-dynamic-v1');
        
        const urlsToCache = tourActivities
            .flatMap(act => [act.image, act.audioFile])
            .filter(url => url && url !== "null" && url !== "");

        await dynamicCache.addAll(urlsToCache);
        console.log("Tour assets successfully cached for offline use.");
    } catch (err) {
        console.error("Failed to cache some dynamic assets:", err);
    }
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
            }
        }, 100);
    }
}

function openPlayer(activity, autoplay = false) {
    stopAudio();
    
    // Prevent background scrolling while drawer is open
    document.body.style.overflow = 'hidden';
    
    document.getElementById('player-image').src = activity.image || "https://images.unsplash.com/photo-1524047934617-cb782c24e5f3?auto=format&fit=crop&q=80&w=1000";
    document.getElementById('player-icon').className = activity.icon;
    document.getElementById('player-title').innerText = activity.title;
    
    const descContainer = document.getElementById('player-description');
    descContainer.innerHTML = '';
    fullScriptToRead = "";
    
    // Split the string by newlines to create an array of paragraphs
    const paragraphs = activity.text.split(/\r?\n+/);
    
    paragraphs.forEach(p => {
        if (p.trim() !== "") { // Ignore empty splits
            const pEl = document.createElement('p'); 
            pEl.innerText = p.trim();
            descContainer.appendChild(pEl);
            fullScriptToRead += p.trim() + " ";
        }
    });

    if (activity.audioFile && activity.audioFile !== "null") {
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

    playerDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
}

function closeDrawer() {
    // Restore background scrolling when drawer closes
    document.body.style.overflow = '';
    
    playerDrawer.classList.remove('active'); 
    drawerBackdrop.classList.remove('active'); 
    stopAudio();
}

audioToggleBtn.addEventListener('click', toggleAudio);
document.getElementById('close-drawer-btn').addEventListener('click', closeDrawer);
drawerBackdrop.addEventListener('click', closeDrawer);


// --- 6. Initialization ---
// ONLY ONE DOMContentLoaded LISTENER ALLOWED
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', initAudio, { once: true });
    fetchTourData(); 
});

// --- 7. Language Switcher Logic ---
const langPortal = document.getElementById('language-portal');
const openLangBtn = document.getElementById('open-lang-btn');
const closeLangBtn = document.getElementById('close-lang-btn');
const langItems = document.querySelectorAll('#language-selection-list li');

openLangBtn.addEventListener('click', () => {
    langPortal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeLangBtn.addEventListener('click', () => {
    langPortal.classList.remove('active');
    document.body.style.overflow = '';
});

langItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const selectedLang = e.currentTarget.getAttribute('data-lang');
        if (selectedLang === activeLang) {
            // If they pick the language they are already on, just close it
            closeLangBtn.click();
            return;
        }
        
        // Update URL parameter and reload
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('lang', selectedLang);
        window.location.href = currentUrl.toString();
    });
});