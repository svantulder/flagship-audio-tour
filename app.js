// Data Array with fact-checked, academic content
const activities = [
    {
        id: "voc",
        title: "History & VOC",
        subtitle: "The 17th Century Economic Boom",
        audioFile: "VOC.mp3",
        icon: "fa-solid fa-ship",
        text: [
            "Welcome to Amsterdam, a city with 750 years of rich history. Officially founded in 1275, Amsterdam started small, focusing on herring fishing. The city's fortunes changed when Floris V, Count of Holland, granted it toll privileges, allowing Amsterdam to operate without paying taxes to the Count. By 1306, Amsterdam received its city rights, enabling it to establish its own justice system.",
            "The Dutch East India Company, known as the VOC (Vereenigde Oostindische Compagnie), founded in 1602, played a vital role in Amsterdam's prosperity. As the world's first formally listed public company, it acted as both a military and financial powerhouse. When the Spanish took over Portugal, Amsterdam's usual spice imports were disrupted, prompting the VOC to venture directly to Asia.",
            "They strategically aligned with local rulers, often using their military might to secure profitable spice contracts, bringing highly sought-after spices like pepper, cinnamon, and nutmeg to Europe. Today, the Dutch term 'peperduur,' meaning 'as expensive as pepper,' still reminds us of the once priceless value of these commodities."
        ]
    },
    {
        id: "canals",
        title: "The Grachtengordel",
        subtitle: "Urban Planning & Expansion",
        icon: "fa-solid fa-water",
        text: [
            "The concentric canal ring of Amsterdam, known as the Grachtengordel, is a masterpiece of urban planning and hydraulic engineering. Designated as a UNESCO World Heritage site in 2010, the network comprises 165 canals spanning over 100 kilometers.",
            "The major expansion began in 1613 to accommodate a rapidly growing population, fueled by the influx of merchants and refugees following the fall of Antwerp in 1585. The three primary residential canals—the Herengracht, Keizersgracht, and Prinsengracht—were dug simultaneously.",
            "The canals served three primary functions: water management in a marshy delta, defensive boundaries, and vital logistical arteries for moving bulk goods from ships directly to the warehouses of merchants."
        ]
    },
    {
        id: "houseboats",
        title: "House Boats",
        subtitle: "From Shortage to Luxury",
        icon: "fa-solid fa-anchor",
        text: [
            "Amsterdam is home to approximately 2,500 legally moored houseboats. The phenomenon began not as a luxury, but out of strict necessity. Following World War II, Amsterdam faced a severe housing shortage. Concurrently, the modernization of the Dutch shipping industry rendered many old wooden and steel cargo ships obsolete.",
            "Residents bought these decommissioned vessels and docked them along the canals. Initially, living on a houseboat was considered a marker of poverty and lacked basic amenities.",
            "Today, the situation has entirely reversed. Strict zoning laws mean no new mooring permits are issued, driving the value of existing houseboat locations to premium levels. Modern houseboats, or 'woonarken,' are now fully connected to the municipal electricity grid and sewage systems."
        ]
    },
    {
        id: "dancing",
        title: "Dancing Houses",
        subtitle: "Subsidence & Architecture",
        icon: "fa-solid fa-building",
        text: [
            "Many of the canal houses in Amsterdam appear to lean forward or tilt sideways, earning them the moniker 'Dancing Houses.' The forward lean, known as 'op de vlucht gebouwd,' was an intentional architectural choice.",
            "Because taxes were historically assessed based on the width of the facade, properties were built incredibly narrow but deep and tall. The steep, narrow staircases made moving furniture impossible. A forward tilt allowed goods to be hoisted via an exterior hook without colliding with the windows or the facade.",
            "The sideways tilting, however, is a result of soil subsidence. Amsterdam is built on a peat swamp. Buildings are supported by millions of wooden piles driven into a stable sand layer deep underground. When groundwater levels fluctuate or wooden piles rot, the foundations settle unevenly, causing the dramatic leaning visible today."
        ]
    },
    {
        id: "anne-frank",
        title: "Anne Frank House",
        subtitle: "Prinsengracht 263",
        icon: "fa-solid fa-book",
        text: [
            "The building at Prinsengracht 263, constructed in 1635, is globally recognized as the hiding place of Anne Frank. Originally serving as a private residence and later a warehouse, it became the premises for Otto Frank’s business, Opekta, in 1940.",
            "For 761 days, Otto Frank, his family, and four other Jewish individuals hid in the 'Achterhuis' (Secret Annex) to escape Nazi persecution. The entrance was concealed by a specialized movable bookcase. During this period of intense claustrophobia, Anne wrote her diary, which stands today as a vital primary source documenting the Holocaust.",
            "Following the betrayal and arrest of the occupants in August 1944, the building was nearly demolished in the 1950s. Due to public outcry, it was preserved and opened as a museum in 1960."
        ]
    },
    {
        id: "jordaan",
        title: "The Jordaan",
        subtitle: "Working-Class History",
        icon: "fa-solid fa-map",
        text: [
            "The Jordaan district was constructed in 1612 during the first major urban expansion. Unlike the affluent Grachtengordel, the Jordaan was designed as a working-class enclave to house laborers and artisans. The urban layout followed the pre-existing, irregular agricultural ditches, resulting in its uniquely narrow streets and tightly packed housing.",
            "For centuries, the area was characterized by severe overcrowding, open sewers, and political radicalism. The living conditions deteriorated significantly during the 19th century.",
            "In the 1970s, the district underwent massive gentrification. The dilapidated slums were renovated into high-end apartments, boutique shops, and galleries. Today, it is one of the most expensive and desirable residential areas in the Netherlands."
        ]
    },
    {
        id: "damsquare",
        title: "The Dam Square",
        subtitle: "Historical Center",
        icon: "fa-solid fa-monument",
        audioFile: "Damsquare.mp3",
        text: [
            "Dam Square is the heart of Amsterdam and one of the most recognizable landmarks in the city. It has been the center of political, economic, and social life for centuries.",
            "The square was originally a tidal creek, but it was filled in during the 13th century to create a marketplace. Over time, it became the focal point of the city's development.",
            "Today, Dam Square is surrounded by historic buildings, including the Royal Palace and the National Monument. It is a popular gathering place for events and celebrations."
        ]
    }
];

// DOM Elements
const activityList = document.getElementById('activity-list');
const playerDrawer = document.getElementById('player-drawer');
const drawerBackdrop = document.getElementById('drawer-backdrop');
const closeDrawerBtn = document.getElementById('close-drawer-btn');
const audioToggleBtn = document.getElementById('audio-toggle-btn');
const audioCurrent = document.getElementById('audio-current');
const audioDuration = document.getElementById('audio-duration');
const audioSlider = document.getElementById('audio-slider');

// Audio State
let audioTimer, isPlaying = false, currentAudioTime = 0, estimatedDuration = 0, fullScriptToRead = "", speechSynthesisActive = false;
let nativeAudio = new Audio(); 
let currentActivityHasMp3 = false; 

// Initialize List
function renderList() {
    activities.forEach(act => {
        const card = document.createElement('div');
        card.className = 'activity-card';
        card.innerHTML = `
            <div class="icon-circle"><i class="${act.icon}"></i></div>
            <div class="activity-info">
                <div class="activity-title">${act.title}</div>
                <div class="activity-subtitle">${act.subtitle}</div>
            </div>
            <button class="play-action"><i class="fa-solid fa-play"></i></button>
        `;
        card.addEventListener('click', () => openPlayer(act));
        activityList.appendChild(card);
    });
}

function initAudio() {
    if (!speechSynthesisActive && 'speechSynthesis' in window) {
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(""));
        speechSynthesisActive = true;
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60); const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function stopAudio() {
    window.speechSynthesis.cancel(); 
    nativeAudio.pause(); nativeAudio.currentTime = 0; 
    clearInterval(audioTimer); isPlaying = false; currentAudioTime = 0;
    audioToggleBtn.innerHTML = '<i class="fa-solid fa-play"></i>'; audioSlider.value = 0; audioCurrent.innerText = "0:00";
}

function toggleAudio() {
    initAudio();
    if (isPlaying) {
        currentActivityHasMp3 ? nativeAudio.pause() : window.speechSynthesis.pause();
        clearInterval(audioTimer); isPlaying = false;
        audioToggleBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        if (currentActivityHasMp3) {
            nativeAudio.play();
            nativeAudio.onended = () => stopAudio();
        } else {
            if (currentAudioTime === 0) {
                const utterance = new SpeechSynthesisUtterance(fullScriptToRead);
                utterance.lang = 'en-US'; utterance.rate = 0.9; utterance.onend = () => stopAudio();
                window.speechSynthesis.speak(utterance);
            } else { window.speechSynthesis.resume(); }
        }

        isPlaying = true; audioToggleBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        audioTimer = setInterval(() => {
            currentAudioTime = currentActivityHasMp3 ? nativeAudio.currentTime : currentAudioTime + 0.1;
            audioCurrent.innerText = formatTime(currentAudioTime);
            audioSlider.value = (currentAudioTime / estimatedDuration) * 100;
            if (!currentActivityHasMp3 && currentAudioTime >= estimatedDuration) stopAudio();
        }, 100);
    }
}

function openPlayer(activity) {
    stopAudio();
    
    // Populate Data
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

    if (activity.audioFile) {
        currentActivityHasMp3 = true;
        nativeAudio.src = activity.audioFile;
        nativeAudio.onloadedmetadata = () => {
            estimatedDuration = nativeAudio.duration;
            audioDuration.innerText = formatTime(estimatedDuration);
        };
    } else {
        currentActivityHasMp3 = false;
        const wordCount = fullScriptToRead.split(' ').length;
        estimatedDuration = (wordCount / 130) * 60; 
        audioDuration.innerText = formatTime(estimatedDuration);
    }

    playerDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
}

function closeDrawer() {
    playerDrawer.classList.remove('active'); drawerBackdrop.classList.remove('active'); stopAudio();
}

// Event Listeners
audioToggleBtn.addEventListener('click', toggleAudio);
closeDrawerBtn.addEventListener('click', closeDrawer);
drawerBackdrop.addEventListener('click', closeDrawer);

// Run
document.addEventListener('DOMContentLoaded', () => {
    // Requires a click anywhere to unlock iOS audio context reliably
    document.body.addEventListener('click', initAudio, { once: true });
    renderList();
});