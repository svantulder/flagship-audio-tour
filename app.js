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
const activeTourId = urlParams.get('tour');
const activeLang = urlParams.get('lang') || 'en';

let activities = [];


// --- 3. Database Fetching ---
async function fetchTourData() {
    if (!activeTourId) {
        renderErrorState("No tour selected. Please scan a valid QR code.");
        return;
    }

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
            .eq('tour_id', activeTourId)
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

        renderList();

    } catch (err) {
        console.error("Error fetching tour:", err);
        renderErrorState("Failed to load tour data. Check your connection.");
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

audioSlider.addEventListener('input', (e) => {
    const seekTime = (e.target.value / 100) * estimatedDuration;
    if (currentActivityHasMp3) {
        nativeAudio.currentTime = seekTime;
    } else {
        currentAudioTime = seekTime; 
    }
});

document.getElementById('skip-back-btn').addEventListener('click', () => {
    if (currentActivityHasMp3) nativeAudio.currentTime = Math.max(0, nativeAudio.currentTime - 5);
});

document.getElementById('skip-fwd-btn').addEventListener('click', () => {
    if (currentActivityHasMp3) nativeAudio.currentTime = Math.min(estimatedDuration, nativeAudio.currentTime + 5);
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
            audioCurrent.innerText = formatTime(currentAudioTime);
            audioSlider.value = (currentAudioTime / estimatedDuration) * 100;
            
            if (currentAudioTime >= estimatedDuration) {
                stopAudio();
                // markActivityComplete(); // Uncomment if you have this function defined
            }
        }, 100);
    }
}

function openPlayer(activity, autoplay = false) {
    stopAudio();
    document.getElementById('player-image').src = activity.image || "https://images.unsplash.com/photo-1524047934617-cb782c24e5f3?auto=format&fit=crop&q=80&w=1000";
    document.getElementById('player-icon').className = activity.icon;
    document.getElementById('player-title').innerText = activity.title;
    
    const descContainer = document.getElementById('player-description');
    descContainer.innerHTML = '';
    fullScriptToRead = "";
    
    activity.text.forEach(p => {
        const pEl = document.createElement('p'); pEl.innerText = p;
        descContainer.appendChild(pEl);
        fullScriptToRead += p + " ";
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

function fallbackToTTS(autoplay) {
    currentActivityHasMp3 = false;
    const wordCount = fullScriptToRead.split(' ').length;
    estimatedDuration = (wordCount / 130) * 60; 
    audioDuration.innerText = formatTime(estimatedDuration);
    if (autoplay) toggleAudio();
}

function closeDrawer() {
    playerDrawer.classList.remove('active'); drawerBackdrop.classList.remove('active'); stopAudio();
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