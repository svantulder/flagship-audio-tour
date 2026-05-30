// Base Data with Deep-Dive Narrative Texts and specific MP3 filenames
// Base Data with Deep-Dive Narrative Texts, specific MP3 filenames, and accurate location photography
const defaultActivities = [
    {
        id: "intro", title: "Start of the Tour", subtitle: "Safety & Guidelines", icon: "fa-solid fa-flag-checkered", 
        image: "https://images.unsplash.com/photo-1527008102375-b3eb2225e365?auto=format&fit=crop&q=80&w=1000",
        audioFile: "intro.mp3", 
        completed: false,
        text: [
            "Hi everyone! Welcome to Flagship Bike Tours Amsterdam—I’m your guide for today’s adventure.", 
            "Over the next hour and a half, we’ll explore Amsterdam together in a way that’s fun, safe, and memorable. You’ll get to see the city from a local perspective, hear some great stories, learn about the history of Amsterdam and, most importantly, enjoy the ride.", 
            "Before we head out, let’s talk about a few important things to keep everyone safe: Hand signals for turning and stopping. Keep to the right side of the road and ride in a line. Stick together behind me. Be extra careful crossing tram tracks at an angle. No texting or taking calls while biking. Keep an eye out for other cyclists, cars and trams, and follow the traffic lights.", 
            "We’ll make plenty of stops for photos and stories, so you don’t have to worry about missing anything. Let’s hop on our bikes and explore Amsterdam together. Let’s ride!" 
        ]
    },
    {
        id: "voc", title: "History VOC", subtitle: "The 17th Century Economic Boom", icon: "fa-solid fa-ship", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Amsterdam_-_VOC-schip_Amsterdam.jpg/1024px-Amsterdam_-_VOC-schip_Amsterdam.jpg",
        audioFile: "VOC.mp3",
        completed: false,
        text: [
            "Welcome to Amsterdam, a city with 750 years of rich history! Our journey begins in its early days as a humble fishing village. Over the centuries, Amsterdam blossomed into the wealthiest city in the world, particularly during the 17th century, thanks to the thriving spice trade brought in by the Dutch East India Company.", 
            "Officially founded in 1275, Amsterdam started small, focusing on herring fishing. The city's fortunes changed when Floris V, Count of Holland, granted it toll privileges, allowing Amsterdam to operate without paying taxes to the Count. By 1306, Amsterdam received its city rights.", 
            "As the city grew, so too did its population. This expansion was particularly swift after the fall of Antwerp, Mechelen, and Brussels to Spanish rule in 1585, which resulted in Amsterdam's population tripling.", 
            "The Dutch East India Company, known as the VOC, played a vital role in Amsterdam's prosperity. When the Spanish took over Portugal, Amsterdam's usual spice imports were disrupted, prompting the VOC to venture directly to Asia.", 
            "Now have a closer look at the beautiful canal houses. As you cycle through the city, you might notice something curious—almost every canal house has a hook at the top.", 
            "They are very important, it's because Amsterdam’s houses are tall, narrow, and have steep staircases—too tight for moving furniture! Instead of struggling inside, people use the hooks to hoist everything up through the windows.", 
            "But why are the houses so narrow you might ask? That’s where taxes come in! In the past, property taxes were based on the width of the house, so people built them as narrow as possible." 
        ]
    },
    {
        id: "canals", title: "Canals", subtitle: "Amsterdam’s Historic Waterways", icon: "fa-solid fa-water", 
        image: "https://images.unsplash.com/photo-1517737841315-62d2ea7f6eb0?auto=format&fit=crop&q=80&w=1000",
        audioFile: "grachtengordel.mp3",
        completed: false,
        text: [
            "Welcome to Amsterdam’s Historic Canals! Amsterdam’s canals are more than just scenic waterways—they are the lifeblood of the city, shaping its history, economy, and daily life. With 165 canals stretching over 75 kilometers, they form one of the most iconic canal networks in the world.", 
            "The city's canals were dug in four phases, starting in the early 16th century. Their semi-circular design wasn’t just for beauty—it was a strategic choice to maximize defense and expansion.", 
            "Keizersgracht & Herengracht – Home to the wealthiest families. Prinsengracht – A bustling hub for merchants and traders.", 
            "Beyond expanding the city, the canals served three vital functions: Water Management to keep the city above water, Waste Disposal as a natural sewage system, and Transport & Trade where goods were moved efficiently by boat.", 
            "Amsterdam’s canals aren’t just historical—they are still essential today. Recognized as a UNESCO World Heritage Site, they continue to define the city's character." 
        ]
    },
    {
        id: "houseboats", title: "House Boats", subtitle: "Living on the Water", icon: "fa-solid fa-anchor", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Houseboats_in_Amsterdam_-_51759656111.jpg/1024px-Houseboats_in_Amsterdam_-_51759656111.jpg",
        audioFile: "houseboats.mp3",
        completed: false,
        text: [
            "Have a look at all these beautiful house boats lined up along the canal. Aren't they charming?", 
            "Living on a houseboat was initially a practical choice for those with limited means, as these cozy spaces often featured low ceilings and humid conditions. However, after World War II, houseboats became a creative and vital solution to the growing need for housing in Amsterdam.", 
            "To manage this increasing demand, the city introduced a permit system, known as 'ligplaats' in Dutch, allowing houseboat owners to moor in designated spots.", 
            "Today, Amsterdam proudly hosts about 2,500 houseboats, with around 750 nestled in the charming city center. These permits can be cherished family heirlooms, passed down through generations, or sold to new owners.", 
            "Having a permit connects you to essential services like sewage, gas, and electricity, and even grants you your very own zip code!" 
        ]
    },
    {
        id: "dancing", title: "Dancing Houses", subtitle: "Subsidence & Engineering", icon: "fa-solid fa-building", 
        image: "https://images.unsplash.com/photo-1574519914755-90117dcf49b3?auto=format&fit=crop&q=80&w=1000",
        audioFile: "dancing_houses.mp3",
        completed: false,
        text: [
            "Look closely at these tilted houses—they seem to lean, almost as if they’re dancing! But their unique tilt isn’t just for charm; it’s a result of Amsterdam’s marshy foundations.", 
            "The entire city was built on soft, swampy ground, meaning anything heavy tends to sink. To support these grand canal houses, builders used wooden poles to reach firmer layers underground. At first, these poles were about 7 meters long, but by the 1600s, they realized they needed to be much longer—at least twice as deep!", 
            "Today, the city rests on about 11 million wooden poles, with the Royal Palace on Dam Square alone supported by 13,681 of them—essentially sitting on its own hidden forest.", 
            "And here’s the real secret to keeping Amsterdam upright: water. As long as the groundwater stays high, the wooden poles remain submerged, preventing them from rotting. If the water drops too low, the poles dry out and decay, leading to serious structural issues." 
        ]
    },
    {
        id: "anne-frank", title: "Anne Frank House", subtitle: "A Story of Resilience", icon: "fa-solid fa-book", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Anne_Frank_House_-_Amsterdam.jpg/1024px-Anne_Frank_House_-_Amsterdam.jpg",
        audioFile: "anne_frank.mp3",
        completed: false,
        text: [
            "Welcome to the Anne Frank House. Across the canal, you can see the house where Anne Frank and her family lived before going into hiding.", 
            "Anne Frank was a young Jewish girl born in Germany in 1929, who fled with her family to the Netherlands when the Nazis rose to power. In 1942, as the Nazis began deporting Jews, her family went into hiding in a secret annex behind her father’s office in Amsterdam.", 
            "During their time in hiding, Anne wrote in her diary, which she called 'Kitty,' capturing her fears, hopes, and the struggles of adolescence.", 
            "In August 1944, their hiding place was betrayed, and the family was arrested by the Gestapo. They were transported to Auschwitz. Later, she and her sister Margot were sent to the Bergen-Belsen concentration camp, where both tragically died of typhus in early 1945.", 
            "Her father, Otto Frank, the sole survivor, returned to Amsterdam and discovered Anne’s diary. Deeply moved by her words, he decided to fulfill her wish of becoming a writer by publishing the diary in 1947.", 
            "Anne's story reminds the world of the horrors of hate, but also the enduring spirit of hope, even in the darkest times." 
        ]
    },
    {
        id: "jordaan", title: "Jordaan", subtitle: "Working-Class Roots", icon: "fa-solid fa-map", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jordaan%2C_Amsterdam%2C_Netherlands_-_panoramio_%2834%29.jpg/1024px-Jordaan%2C_Amsterdam%2C_Netherlands_-_panoramio_%2834%29.jpg",
        audioFile: "jordaan.mp3",
        completed: false,
        text: [
            "Welcome to the Jordaan Neighbourhood! The Jordaan, now one of Amsterdam’s most charming neighborhoods, has a rough-and-tumble origin dating back to the 17th century.", 
            "Built during the city’s Golden Age, it was designed as a working-class district for the laborers, immigrants, and craftsmen who kept the city’s thriving economy moving.", 
            "The name 'Jordaan' comes from the French word 'jardin' (garden), as many French Huguenots settled there after fleeing religious persecution.", 
            "Life in the Jordaan was anything but glamorous. Streets were overcrowded, and the area was known for its poverty and frequent public quarrels. Legend has it, you could walk across the rooftops from one end of a street to the other because the houses were so tightly packed.", 
            "Over the centuries, the Jordaan evolved, with gentrification and modernization slowly transforming it from a gritty working-class area to the bohemian, artistic neighborhood it is today." 
        ]
    },
    {
        id: "westerkerk", title: "Westerkerk", subtitle: "Amsterdam's Highest Tower", icon: "fa-solid fa-church", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Westerkerk_Amsterdam.jpg/1024px-Westerkerk_Amsterdam.jpg",
        audioFile: "westerkerk.mp3",
        completed: false,
        text: [
            "Look across the canal—there’s the beautiful tower of Westerkerk! Standing tall since 1631, it’s the highest church tower in Amsterdam, with 246 steps to the top.", 
            "It’s so famous that even Rembrandt was buried here—though no one knows exactly where!", 
            "But here’s a remarkable fact: the bells of Westerkerk were the soundtrack of Anne Frank’s life in hiding. In her diary, she wrote that their chimes brought her comfort.", 
            "And if you hear them ringing now, just imagine—they’ve been waking up Amsterdam for nearly 400 years! Not a bad alarm clock, right?" 
        ]
    },
    {
        id: "leidseplein", title: "Leidse Square", subtitle: "The Entertainment Epicenter", icon: "fa-solid fa-ticket", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Leidseplein_Amsterdam_2019.jpg/1024px-Leidseplein_Amsterdam_2019.jpg",
        audioFile: "leidseplein.mp3",
        completed: false,
        text: [
            "Welcome to the Leidseplein—Amsterdam’s epicenter of nightlife and excitement. Originally, this square was a gritty gateway into the city for travelers arriving from Leiden, a city to the south of Amsterdam.", 
            "Today, Leidseplein is a world away from those early days as a trading post. By day, it’s filled with cafes and street performers; by night, it transforms into one of Amsterdam’s liveliest nightlife spots.", 
            "Right across from the square is The Bulldog, a coffeeshop with an unbelievable history. This famous hangout wasn’t always about relaxing with a joint; it was once the neighborhood police station!", 
            "In the 1980s, officers would march Amsterdam’s rowdiest residents and travelers through its doors. Fast forward a few decades, and you can now sit back and smoke a joint in one of those very same holding cells." 
        ]
    },
    {
        id: "vondelpark", title: "Vondelpark", subtitle: "Amsterdam's Backyard", icon: "fa-solid fa-tree", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Vondelpark_Amsterdam.jpg/1024px-Vondelpark_Amsterdam.jpg",
        audioFile: "vondelpark.mp3",
        completed: false,
        text: [
            "Welcome to Vondelpark! Look around—this is Amsterdam’s backyard. People come here to bike, picnic, listen to music, or just escape the city’s chaos.", 
            "Imagine this: Amsterdam, 1864. The city is crowded, dirty, and there’s barely any green space. A group of wealthy Amsterdammers decides to buy land just outside the city to build a park. But they had just bought a swamp!", 
            "Instead of giving up, they drained it, planted trees, and in 1865, the park officially opened. Two years later, they placed a massive statue of Joost van den Vondel, a famous Dutch poet. And that was it—everyone just started calling it Vondelpark.", 
            "Today, around 10 million people visit this park annually! It’s also the only park in the Netherlands where it’s legal to smoke weed.", 
            "Do you know why Vondelpark is lower than the streets around it? The entire city of Amsterdam is built on wooden poles because the ground is too soft. But since there aren’t any buildings in Vondelpark, they didn’t put poles under it, causing the soft ground to sink lower over time." 
        ]
    },
    {
        id: "museumplein", title: "Museum Square", subtitle: "A Cultural Hub", icon: "fa-solid fa-building-columns", 
        image: "https://images.unsplash.com/photo-1578500213812-706b83f3ee8b?auto=format&fit=crop&q=80&w=1000",
        audioFile: "museumplein.mp3",
        completed: false,
        text: [
            "You're standing in one of the most cultural and historically rich areas of Amsterdam—Museumplein. Right in front of us is the Rijksmuseum. This iconic building opened in 1885 and houses over 8,000 objects of art and history, including Rembrandt’s The Night Watch.", 
            "Now, if you glance over to the right, that’s the Van Gogh Museum, home to the largest collection of paintings by Vincent van Gogh. Today, this museum attracts millions of visitors each year.", 
            "Just a bit farther on is the Stedelijk Museum, which focuses on modern and contemporary art and design. Its current building, added in 2012, is often referred to as 'the bathtub' due to its shape.", 
            "Here’s something interesting: this whole area, Museumplein, was once farmland. In the 19th century, as the city expanded, this space was transformed into what you see today." 
        ]
    },
    {
        id: "dam-square", title: "Dam Square", subtitle: "The Heart of the City", icon: "fa-solid fa-landmark", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Royal_Palace_of_Amsterdam.jpg/1024px-Royal_Palace_of_Amsterdam.jpg",
        audioFile: "Damsquare.mp3",
        completed: false,
        text: [
            "The Dam is the true heart of Amsterdam, and it's been the city’s main stage for centuries. Back in the 13th century, there was an actual dam here in the Amstel River, built to stop the city from turning into one big puddle—hence the name!", 
            "What started as a simple dam quickly turned into a bustling marketplace where locals traded everything from fish to fabrics.", 
            "Now, let’s talk about the Royal Palace, which wasn't always royal. In 1655, it was built as the city hall. But then, in the 19th century, King Louis Napoleon took one look at the building and turned it into his personal royal residence.", 
            "Today, the Dutch royal family uses the palace for state visits and official ceremonies." 
        ]
    },
    {
        id: "bicycles", title: "Bicycles", subtitle: "The Cycling Capital", icon: "fa-solid fa-bicycle", 
        image: "https://images.unsplash.com/photo-1563290616-e41c4da9cb1f?auto=format&fit=crop&q=80&w=1000",
        audioFile: "bicycles.mp3",
        completed: false,
        text: [
            "Amsterdam is the bicycle capital of the world. It’s true—Amsterdam is home to around 950,000 bicycles, while the city itself has only about 900,000 residents!", 
            "Bicycles have been a popular choice in Amsterdam since the 1880s. In the 1970s, with the growing presence of cars, there were numerous accidents, prompting Dutch citizens to advocate for better bicycle infrastructure.", 
            "During the Second World War, the number of bicycles in the Netherlands was drastically reduced from 8 million to 4 million. In 1942, owning a bike was prohibited, and many were confiscated and sent to Germany for industrial use.", 
            "Before this, the German occupiers imposed several new rules, such as banning biking hand in hand—a practice very much against Dutch biking culture." 
        ]
    },
    {
        id: "three-crosses", title: "The Three Crosses", subtitle: "Amsterdam's Coat of Arms (XXX)", icon: "fa-solid fa-shield-halved", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Amsterdammertje.jpg/1024px-Amsterdammertje.jpg",
        audioFile: "three_crosses.mp3",
        completed: false,
        text: [
            "Look around Amsterdam, and you’ll see them everywhere—on bridges, street poles, buildings, and even on the city's flag. The three white crosses on a black and red background are one of the most recognizable symbols of Amsterdam.", 
            "One of the most popular explanations is that the crosses stand for the three greatest threats Amsterdam faced in the past: Fire, Water, and Plague.", 
            "Another theory links the crosses to the Persijn family, a noble family that owned land near Amsterdam in the Middle Ages. Their coat of arms featured three St. Andrew’s crosses.", 
            "The third theory connects to Saint Andrew, a Christian martyr who was said to be crucified on a cross shaped like an 'X'.", 
            "No matter their original meaning, the three crosses have come to represent Amsterdam itself. Whether they stand for fire, water, and plague, or simply the resilience of Amsterdam, one thing is certain—when you see those three crosses, you know exactly where you are." 
        ]
    }
];

// Load from CMS (localStorage) or use defaults
let activities = JSON.parse(localStorage.getItem('flagshipActivities')) || defaultActivities;

// DOM Elements
const activityList = document.getElementById('activity-list');
const playerDrawer = document.getElementById('player-drawer');
const drawerBackdrop = document.getElementById('drawer-backdrop');
const closeDrawerBtn = document.getElementById('close-drawer-btn');
const audioToggleBtn = document.getElementById('audio-toggle-btn');
const audioCurrent = document.getElementById('audio-current');
const audioDuration = document.getElementById('audio-duration');
const audioSlider = document.getElementById('audio-slider');

// Admin Elements
const adminPortal = document.getElementById('admin-portal');
const openAdminBtn = document.getElementById('open-admin-btn');
const closeAdminBtn = document.getElementById('close-admin-btn');
const adminForm = document.getElementById('admin-form');
const resetDataBtn = document.getElementById('reset-data-btn');

// Audio State
let audioTimer, isPlaying = false, currentAudioTime = 0, estimatedDuration = 0, fullScriptToRead = "", speechSynthesisActive = false;
let nativeAudio = new Audio();
let currentActivityHasMp3 = false;

// Render List
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

    // Update Progress Bar
    const progressPercent = (completedCount / activities.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;
    document.getElementById('progress-text').innerText = `${completedCount} of ${activities.length} Stops Discovered`;
}

function evaluateBadges() {
    const completedIds = activities.filter(a => a.completed).map(a => a.id);
    
    const badges = [];
    if (completedIds.includes('voc') && completedIds.includes('anne-frank')) {
        badges.push("History Buff");
    }
    if (completedIds.includes('canals') && completedIds.includes('houseboats')) {
        badges.push("Canal Explorer");
    }

    // Output to a new UI element
    const badgeContainer = document.getElementById('badge-container');
    if (badgeContainer) {
        badgeContainer.innerHTML = badges.map(b => `<span class="badge">${b}</span>`).join('');
    }
}

// Audio System
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
    // Stop playback
    currentActivityHasMp3 ? nativeAudio.pause() : window.speechSynthesis.cancel();
    nativeAudio.currentTime = 0;
    
    // Reset UI and State
    clearInterval(audioTimer); 
    isPlaying = false; 
    currentAudioTime = 0;
    audioToggleBtn.innerHTML = '<i class="fa-solid fa-play"></i>'; 
    audioSlider.value = 0; 
    audioCurrent.innerText = "0:00";
}

// NEW: Scrubbing and Skipping Logic
audioSlider.addEventListener('input', (e) => {
    const seekTime = (e.target.value / 100) * estimatedDuration;
    if (currentActivityHasMp3) {
        nativeAudio.currentTime = seekTime;
    } else {
        currentAudioTime = seekTime; // TTS scrubbing is limited
    }
});

document.getElementById('skip-back-btn').addEventListener('click', () => {
    if (currentActivityHasMp3) nativeAudio.currentTime = Math.max(0, nativeAudio.currentTime - 5);
});

document.getElementById('skip-fwd-btn').addEventListener('click', () => {
    if (currentActivityHasMp3) nativeAudio.currentTime = Math.min(estimatedDuration, nativeAudio.currentTime + 5);
});

// FIX: Ensure toggleAudio respects the slider interaction
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
                utterance.lang = 'en-US'; utterance.rate = 0.9;
                window.speechSynthesis.speak(utterance);
            } else { window.speechSynthesis.resume(); }
        }

        isPlaying = true; 
        audioToggleBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        
        audioTimer = setInterval(() => {
            currentAudioTime = currentActivityHasMp3 ? nativeAudio.currentTime : currentAudioTime + 0.1;
            audioCurrent.innerText = formatTime(currentAudioTime);
            audioSlider.value = (currentAudioTime / estimatedDuration) * 100;
            
            // Auto-complete logic when file ends
            if (currentAudioTime >= estimatedDuration) {
                stopAudio();
                markActivityComplete();
            }
        }, 100);
    }
}

// Open Player & Autoplay Logic
function openPlayer(activity, autoplay = false) {
    stopAudio();
    
    // UI Population
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

    // Check for real MP3 vs TTS
    if (activity.audioFile) {
        currentActivityHasMp3 = true;
        nativeAudio.src = activity.audioFile;
        // Need to load metadata to get duration before playing
        nativeAudio.onloadedmetadata = () => {
            estimatedDuration = nativeAudio.duration;
            audioDuration.innerText = formatTime(estimatedDuration);
            if (autoplay) toggleAudio();
        };
        // Fallback if metadata fails
        nativeAudio.onerror = () => {
            console.warn("Audio file not found, falling back to TTS");
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

// --- CMS Admin Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const adminPortal = document.getElementById('admin-portal');
    const openAdminBtn = document.getElementById('open-admin-btn');
    const closeAdminBtn = document.getElementById('close-admin-btn');
    const adminForm = document.getElementById('admin-form');
    const resetDataBtn = document.getElementById('reset-data-btn');

    if (openAdminBtn) {
        openAdminBtn.addEventListener('click', () => {
            const password = prompt("Enter Admin Password:");
            if (password === "Lodewijk") {
                adminPortal.classList.add('active');
            } else {
                alert("Incorrect password.");
            }
        });
    }

    if (closeAdminBtn) {
        closeAdminBtn.addEventListener('click', () => {
            adminPortal.classList.remove('active');
        });
    }

    if (adminForm) {
        adminForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newActivity = {
                id: "custom-" + Date.now(),
                title: document.getElementById('admin-title').value,
                subtitle: document.getElementById('admin-subtitle').value,
                icon: "fa-solid fa-star",
                image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=1000",
                audioFile: null, 
                completed: false, // CRITICAL: Fixes progress tracker crash
                text: document.getElementById('admin-text').value.split('\n').filter(p => p.trim() !== '')
            };

            activities.push(newActivity);
            localStorage.setItem('flagshipActivities', JSON.stringify(activities));
            
            adminForm.reset();
            adminPortal.classList.remove('active');
            renderList();
            alert("Activity Added! Since you do not have an MP3, the system will read it using Text-to-Speech.");
        });
    }

    if (resetDataBtn) {
        resetDataBtn.addEventListener('click', () => {
            if(confirm("Are you sure you want to reset to default data?")) {
                localStorage.removeItem('flagshipActivities');
                activities = [...defaultActivities];
                renderList();
                adminPortal.classList.remove('active');
            }
        });
    }
});

// Event Listeners
audioToggleBtn.addEventListener('click', toggleAudio);
closeDrawerBtn.addEventListener('click', closeDrawer);
drawerBackdrop.addEventListener('click', closeDrawer);

// Run
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', initAudio, { once: true });
    renderList();
});

// Add a global language state (defaulting to English)
let currentLanguage = 'en-US'; 

// Update your fallbackToTTS function
function fallbackToTTS(autoplay) {
    currentActivityHasMp3 = false;
    const wordCount = fullScriptToRead.split(' ').length;
    estimatedDuration = (wordCount / 130) * 60; 
    audioDuration.innerText = formatTime(estimatedDuration);
    
    // Web Speech API language handling
    const utterance = new SpeechSynthesisUtterance(fullScriptToRead);
    utterance.lang = currentLanguage; 
    
    // Optional: Auto-translate text using a pre-mapped dictionary or external API here
    // before passing to the utterance if utilizing non-English voices.

    if (autoplay) toggleAudio();
}