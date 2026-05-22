// Base Data with Deep-Dive Narrative Texts and specific MP3 filenames
const defaultActivities = [
    {
        id: "voc", title: "History & VOC", subtitle: "The 17th Century Economic Boom", icon: "fa-solid fa-ship",
        image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=1000",
        audioFile: "VOC.mp3",
        text: [
            "Welcome to Amsterdam, a city with 750 years of rich history! Our journey begins in its early days as a humble fishing village. Over the centuries, Amsterdam blossomed into the wealthiest city in the world, particularly during the 17th century, thanks to the thriving spice trade brought in by the Dutch East India Company.",
            "Officially founded in 1275, Amsterdam started small, focusing on herring fishing. The city's fortunes changed when Floris V, Count of Holland, granted it toll privileges, allowing Amsterdam to operate without paying taxes to the Count. By 1306, Amsterdam received its city rights, enabling it to establish its own justice system. These privileges gave Amsterdam a significant edge over other trading cities, fostering its liberal ethos where anyone with skills or goods was welcomed.",
            "As the city grew, so too did its population. This expansion was particularly swift after the fall of Antwerp, Mechelen, and Brussels to Spanish rule in 1585, which resulted in Amsterdam's population tripling. The city's appeal lay in its relative political and religious freedoms. To accommodate this growth, the first segment of the canal belt was developed in 1613, resulting in the creation of the Herengracht, Keizersgracht, and Prinsengracht, which extended to the Leidsegracht.",
            "The Dutch East India Company, known as the VOC, played a vital role in Amsterdam's prosperity. As both a military and financial powerhouse, the VOC contributed significantly to the city's wealth and influence. When the Spanish took over Portugal, Amsterdam's usual spice imports were disrupted, prompting the VOC to venture directly to Asia. They strategically aligned with local rulers, often using their military might to secure profitable spice contracts, bringing highly sought-after spices like pepper, cinnamon, and nutmeg to Europe. Today, the term 'peperduur,' meaning 'as expensive as pepper,' still reminds us of the once priceless value of these spices.",
            "Now have a closer look at the beautiful canal houses. As you cycle through the city, you might notice something curious—almost every canal house has a hook at the top.",
            "Can you see them? Do you know what they are for? They are very important, it's because Amsterdam’s houses are tall, narrow, and have steep staircases—too tight for moving furniture! Instead of struggling inside, people use the hooks to hoist everything up through the windows. Even today, you might see a sofa or fridge dangling from a rope, swinging up the façade like it’s 1625!",
            "But why are the houses so narrow you might ask? That’s where taxes come in! In the past, property taxes were based on the width of the house, so people built them as narrow as possible—but deep and tall to maximize space."
        ]
    },
    {
        id: "dam-square", title: "Dam Square", subtitle: "The Heart of Amsterdam", icon: "fa-solid fa-landmark",
        image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=1000",
        audioFile: "Damsquare.mp3",
        text: [
            "You have arrived at Dam Square, the historical, political, and cultural epicenter of Amsterdam. To your right stands the magnificent Royal Palace, originally built during the Dutch Golden Age in the 17th century. What makes this structure truly remarkable is what lies beneath it: the entire massive stone building rests on 13,659 wooden piles driven deep into the marshy Amsterdam soil.",
            "Directly opposite the palace is the National Monument, a towering white pillar erected in 1956 to memorialize the victims of World War II. During the 1960s and 70s, this monument became a famous gathering place for hippies traveling across Europe, who would routinely sleep on its steps, much to the dismay of local authorities.",
            "Today, the square is flanked by the Nieuwe Kerk (New Church) and acts as the central hub connecting the major shopping streets of the city. Take a moment to park your bike and take it all in."
        ]
    },
    {
        id: "canals", title: "The Grachtengordel", subtitle: "Urban Planning & Expansion", icon: "fa-solid fa-water",
        image: "https://images.unsplash.com/photo-1558000143-a60269f88bd3?auto=format&fit=crop&q=80&w=1000",
        audioFile: "grachtengordel.mp3",
        text: [
            "You are now looking at the Grachtengordel, the famous concentric canal ring of Amsterdam. It is not just a beautiful backdrop for photos; it is a 17th-century masterpiece of urban planning and hydraulic engineering that was designated as a UNESCO World Heritage site in 2010.",
            "In 1613, Amsterdam was bursting at the seams. Refugees and merchants were flooding into the city, creating a severe housing crisis. The city council devised a radical, highly organized expansion plan. They ordered the simultaneous digging of three massive, parallel residential canals: the Herengracht, the Keizersgracht, and the Prinsengracht.",
            "These three waterways were deeply tied to the city's social hierarchy. The Herengracht, or 'Patricians' Canal,' was strictly reserved for the wealthiest merchants, mayors, and bankers. If you cycle down it today, you'll still notice that the houses are wider and far more opulent than anywhere else in the city.",
            "The canals weren't just for prestige; they were the logistical lifeblood of Amsterdam. In an era before trucks, waterways were the highways. Bulk goods brought in by the VOC ships were transferred onto smaller barges, which floated directly down these canals to be hoisted into the very attics of the merchant houses you see around you.",
            "However, life on the canals wasn't always as romantic as it looks today. For centuries, the canals served as the city's open sewer. Until the late 19th century, the stench during the summer months was reportedly unbearable. Today, a sophisticated system of locks flushes the canals with fresh water from the nearby lakes every single night, keeping them clean enough to swim in!"
        ]
    },
    {
        id: "houseboats", title: "House Boats", subtitle: "From Shortage to Luxury", icon: "fa-solid fa-anchor",
        image: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&q=80&w=1000",
        audioFile: "houseboats.mp3",
        text: [
            "As you follow the water, you can't miss the floating homes permanently moored along the banks. Amsterdam is currently home to approximately 2,500 legal houseboats. But if you think living on one has always been a symbol of bohemian luxury, you are in for a surprise.",
            "The houseboat phenomenon was born out of sheer desperation. After World War II, Amsterdam faced a crippling housing shortage. At the same time, the Dutch shipping industry was modernizing, rendering hundreds of old wooden and steel cargo ships completely obsolete. Creative, cash-strapped residents bought these retired vessels for practically nothing and dragged them into the city center.",
            "In the 1950s and 60s, living on a houseboat was a gritty existence. It was seen as a marker of poverty. These early boats had no electricity, no running water, and definitely no plumbing—meaning everything went straight into the canal beneath them. They were damp, cold, and heavily romanticized by the 1970s hippie movement, who embraced the off-grid lifestyle.",
            "Today, the situation has dramatically reversed. The city government eventually intervened, laying down strict zoning laws and halting the issuance of any new mooring permits. Because the supply is permanently capped, securing a spot on the water today costs an absolute fortune.",
            "Take a close look at the boats you pass. The modern ones, known as 'woonarken' (living arks), are essentially floating concrete villas. They are fully connected to the municipal sewage and power grids, featuring underfloor heating, rooftop gardens, and massive floor-to-ceiling windows. What started as post-war survival has become one of the most exclusive ways to live in the Netherlands."
        ]
    },
    {
        id: "dancing", title: "Dancing Houses", subtitle: "Subsidence & Architecture", icon: "fa-solid fa-building",
        image: "https://images.unsplash.com/photo-1574519914755-90117dcf49b3?auto=format&fit=crop&q=80&w=1000",
        audioFile: "dancing_houses.mp3",
        text: [
            "Take your eyes off the cycle path for a moment and look straight down the street. Notice how the buildings seem to be leaning on each other like tired friends after a long night out? Locals affectionately call these the 'Dancing Houses.'",
            "Earlier, we talked about why the houses lean forward intentionally—to hoist up furniture. But many of these houses are also leaning wildly to the side, and that is definitely not on purpose. The reason lies deep underground. Amsterdam is built on a massive, unstable peat swamp.",
            "To build anything here, you have to dig through 11 meters of wet mud just to hit a solid layer of sand. For centuries, builders achieved this by driving massive wooden poles—usually imported Norway pine trees—straight down into the mud to act as foundation stilts. The Royal Palace on Dam Square alone is balancing on 13,659 of these wooden logs!",
            "As long as those wooden poles stay entirely submerged in groundwater, they will last forever. But if the water level drops, exposing the wood to oxygen, the poles begin to rot. This is known locally as 'paalrot' (pole rot).",
            "When the wooden foundations rot or shift in the mud, the houses slowly sink on one side. The only reason they don't completely collapse into the canals is that they are wedged so tightly together, literally holding each other up. Look closely at the brickwork between the buildings, and you'll see massive iron wall anchors tying the facades together, desperately trying to keep the city upright."
        ]
    },
    {
        id: "anne-frank", title: "Anne Frank House", subtitle: "Prinsengracht 263", icon: "fa-solid fa-book",
        image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80&w=1000",
        audioFile: "anne_frank.mp3",
        text: [
            "We are now standing outside Prinsengracht 263. This traditional 17th-century canal house is arguably one of the most famous, and heartbreaking, historical landmarks on the planet: The Anne Frank House.",
            "Originally built in 1635 as a private residence, the building later served as a warehouse. In 1940, a man named Otto Frank moved his business, Opekta—a company that manufactured pectin for making jam—into this very building.",
            "Just two years later, in July 1942, to escape the brutal Nazi persecution of Jews, Otto, his family, and four others went into hiding in the rear extension of the building, known as the 'Achterhuis' or Secret Annex. The entrance to their hiding space was famously concealed behind a movable bookcase, custom-built by the warehouse staff to evade Gestapo raids.",
            "For 761 agonizing days, the eight people inside lived in total silence during business hours, terrified that the warehouse workers below would hear them. It was in these confined, darkened rooms that a teenage Anne Frank wrote her diary, documenting the claustrophobia, her coming of age, and her enduring, tragic hope for humanity.",
            "Following an anonymous betrayal, the Annex was raided in August 1944. Otto Frank was the only one of the eight to survive the concentration camps. When he returned to Amsterdam, a loyal employee who had helped hide them, Miep Gies, handed him Anne's diary, which she had rescued from the floor after the raid.",
            "Incredibly, in the 1950s, this building was slated for demolition by developers. It was only saved by a fierce public outcry, eventually opening as a museum in 1960. Today, it stands as a permanent, powerful warning against hatred and discrimination."
        ]
    },
    {
        id: "jordaan", title: "The Jordaan", subtitle: "Working-Class History", icon: "fa-solid fa-map",
        image: "https://images.unsplash.com/photo-1616057053531-10c0b8deef1e?auto=format&fit=crop&q=80&w=1000",
        audioFile: "jordaan.mp3",
        text: [
            "You have just crossed into the Jordaan. Immediately, you'll notice the vibe changes. The grand, sweeping canals of the wealthy merchants are gone, replaced by narrow, chaotic streets and tiny, crooked houses.",
            "When Amsterdam expanded in 1612, this district was built strictly as a working-class enclave to house the laborers, artisans, and immigrants who kept the wealthy parts of the city running. Unlike the rest of the city, which was mathematically planned, the Jordaan's streets simply followed the old, diagonal agricultural ditches that were already there.",
            "The area became a melting pot for refugees, including French Huguenots and Spanish Jews. In fact, many historians believe the name 'Jordaan' is a corruption of the French word 'Jardin' (garden), because nearly all the streets and canals here are named after flowers and trees.",
            "For centuries, the Jordaan was a tough place to live. By the 19th century, it was an overcrowded slum with open sewers and rampant disease. It was also a hotbed of political radicalism and rebellion. The residents here were famous for their dark humor, deep community ties, and a specific genre of dramatic folk music known as the 'Levenslied'—the Dutch blues.",
            "In the 1970s, the city planned to demolish large parts of the Jordaan to build modern housing. Massive protests stopped the bulldozers. Instead, the area underwent extreme gentrification. Today, those tiny former slum houses are highly coveted million-euro homes, packed with cozy brown cafes, art galleries, and hidden courtyards called 'Hofjes' waiting to be discovered."
        ]
    },
    {
        id: "westerkerk", title: "Westerkerk", subtitle: "17th Century Protestant Architecture", icon: "fa-solid fa-church",
        image: "https://images.unsplash.com/photo-1596700720496-ec619cdfb780?auto=format&fit=crop&q=80&w=1000",
        audioFile: "westerkerk.mp3",
        text: [
            "Look up, and you can't miss the Westerkerk, or Western Church. Constructed between 1620 and 1631 by the famous architect Hendrick de Keyser, it holds a special place in history as the first major purpose-built Protestant church in Amsterdam following the Reformation.",
            "Its most striking feature is the Westertoren, the massive church tower. Standing at exactly 87 meters, it remains the highest tower in the entire city. But look closely at the very top. You'll see a bright blue and gold crown.",
            "That is the Imperial Crown of Maximilian I of Austria. Why does a Dutch church feature an Austrian emperor's crown? In 1489, Amsterdam loaned a massive sum of money to Maximilian to help him fight his wars. In gratitude, he granted the city the right to use his royal crown in its coat of arms forever.",
            "The church is deeply woven into the fabric of the city's stories. In 1669, the legendary Dutch master painter Rembrandt van Rijn died penniless and was buried here in an unmarked pauper's grave. To this day, no one knows exactly where under the stone floor his bones lie.",
            "The church's bells also carry a profound emotional weight. If you remember the Anne Frank House just down the street—Anne frequently wrote in her diary about how hearing the carillon of the Westerkerk ring every quarter-hour brought her comfort and felt like a faithful friend while she was trapped in hiding."
        ]
    },
    {
        id: "leidseplein", title: "Leidse Square", subtitle: "From Tollgate to Transit Hub", icon: "fa-solid fa-ticket",
        image: "https://images.unsplash.com/photo-1600623307567-932d0ff10a0e?auto=format&fit=crop&q=80&w=1000",
        audioFile: "leidseplein.mp3",
        text: [
            "Welcome to the chaotic, vibrant energy of Leidseplein, or Leiden Square. If you're looking for street performers, nightlife, or to catch a tram, this is ground zero. But its origins were entirely practical.",
            "In the 17th century, this area marked the very edge of the city. It served as a massive tollgate and a 'wagenplein'—a wagon square. Farmers and merchants traveling from the nearby city of Leiden would arrive here, unhitch their horses, and park their heavy carts before walking into the delicate inner city to sell their goods.",
            "By the late 19th century, the city expanded past this point, and the square's function dramatically shifted from agriculture to entertainment. Dominating the square is the Stadsschouwburg, the City Theatre. This imposing, neo-Renaissance brick building opened in 1894 and has been the beating heart of Dutch theatre ever since.",
            "Just across the square sits the American Hotel, a stunning masterpiece of Art Deco architecture that has hosted rock stars, spies, and royalty since the 1900s. Take a look at its intricate brickwork and the famous café on the ground floor.",
            "Leidseplein is also a testament to modern urban planning. In the 1970s, this entire square was a congested, exhaust-filled traffic intersection for cars. Today, it has been entirely given back to pedestrians, bicycles, and the iconic blue-and-white trams that snake through the crowds."
        ]
    },
    {
        id: "vondelpark", title: "Vondelpark", subtitle: "19th Century Landscape Engineering", icon: "fa-solid fa-tree",
        image: "https://images.unsplash.com/photo-1524047934617-cb782c24e5f3?auto=format&fit=crop&q=80&w=1000",
        audioFile: "vondelpark.mp3",
        text: [
            "Cycle through the wrought-iron gates and take a deep breath. You are now inside Vondelpark, the most famous and heavily visited park in the Netherlands. But unlike the ancient city center, this green oasis is relatively new.",
            "The park opened in 1865, originally called simply the 'Nieuwe Park' (New Park). It wasn't built by the city government, but by a private association of wealthy citizens who wanted an elegant space to ride their horses and escape the cramped, smelly streets.",
            "The design is a classic example of the 'English Landscape' style. Instead of the rigid, mathematical gardens favored by the French, the architect Jan David Zocher designed Vondelpark to look wild and romantic, filled with meandering paths, irregular lakes, and sweeping vistas.",
            "Creating this 'natural' look was actually a massive feat of extreme engineering. The land here was originally a muddy, useless peat dump. To stop the park from sinking into the swamp, engineers had to import an immense volume of sand to compress the ground before planting a single tree.",
            "In 1867, a statue of the famous 17th-century Dutch poet, Joost van den Vondel, was placed inside the park. The locals immediately started calling it the Vondelpark, and the name stuck forever. In the 1970s, the park became a global hippie paradise where the city legally allowed thousands of backpackers to sleep in tents on the grass. Today, it remains the ultimate backyard for all Amsterdammers."
        ]
    },
    {
        id: "museumplein", title: "Museum Square", subtitle: "The Cultural Quarter", icon: "fa-solid fa-building-columns",
        image: "https://images.unsplash.com/photo-1578500213812-706b83f3ee8b?auto=format&fit=crop&q=80&w=1000",
        audioFile: "museumplein.mp3",
        text: [
            "As you enter Museumplein, or Museum Square, you are standing in the undisputed cultural heavyweight champion of the Netherlands. The vast, open lawn stretching out before you is framed by three world-renowned institutions, each representing a totally different era of architecture.",
            "At the head of the square sits the colossal Rijksmuseum. Completed in 1885 by architect Pierre Cuypers, its gothic-renaissance style was hugely controversial at the time. Protestant Amsterdammers complained it looked far too much like a Catholic cathedral! Inside, it houses the nation's greatest treasures, including Rembrandt's The Night Watch.",
            "To your right, you'll see the 1895 red-brick neo-renaissance Stedelijk Museum, and nestled next to it, the sleek, modernist lines of the Van Gogh Museum, which opened in 1973. Together, they hold some of the most valuable art collections in human history.",
            "But the square you are cycling across has a wild history of its own. It was originally a marshy meadow that housed a wax candle factory. In the 20th century, it was paved over. For decades, the space between these priceless museums was sliced in half by a massive, ugly four-lane highway and used as a giant parking lot for tour buses.",
            "It wasn't until 1999 that a landscape architect finally buried the parking garage underground and restored the surface into the uninterrupted, pedestrian-friendly 'donkey ear' lawn you see today. It is now the city's favorite spot to gather, protest, and soak up the sun."
        ]
    },
    {
        id: "bicycles", title: "Bicycle Infrastructure", subtitle: "Urban Mobility Revolution", icon: "fa-solid fa-bicycle",
        image: "https://images.unsplash.com/photo-1563290616-e41c4da9cb1f?auto=format&fit=crop&q=80&w=1000",
        audioFile: "bicycles.mp3",
        text: [
            "Take a look at the red asphalt beneath your wheels. Amsterdam is globally famous as the undisputed bicycle capital of the world. Today, there are an estimated 881,000 bicycles in the city—which is actually more bikes than there are people!",
            "But this two-wheeled utopia was not an accident, and it certainly wasn't the historical default. It is the result of fierce protests and aggressive urban policy. During the economic boom of the 1950s and 60s, Amsterdam was actually destroying its history to make way for the automobile. Historic neighborhoods were being leveled to build multi-lane highways right through the city center.",
            "As the cars took over, traffic fatalities skyrocketed. In 1971 alone, over 3,000 people were killed by cars in the Netherlands, including 400 children. The Dutch public had had enough.",
            "This gruesome death toll sparked a massive, nationwide protest movement called 'Stop de Kindermoord' (Stop the Child Murder). Activists blocked streets, staged die-ins, and demanded safe spaces. Combined with the global oil crisis of 1973, the government realized relying entirely on cars was a deadly mistake.",
            "They fundamentally reversed their urban planning philosophy overnight. They slashed speed limits, removed car lanes, and began investing heavily in the physically separated, ultra-safe cycling infrastructure you are riding on right now. It is proof that a city can always change its mind."
        ]
    },
    {
        id: "three-crosses", title: "The Three Crosses", subtitle: "The Coat of Arms (XXX)", icon: "fa-solid fa-shield-halved",
        image: "https://images.unsplash.com/photo-1616428613437-01ed58c14f48?auto=format&fit=crop&q=80&w=1000",
        audioFile: "three_crosses.mp3",
        text: [
            "As you travel through the city, you will see a specific symbol absolutely everywhere. Look at the brown metal poles separating the sidewalk from the street, look at the municipal trash cans, or the flags hanging from government buildings. You will see three bold 'X's in a row: XXX.",
            "Because Amsterdam has a famous red-light district, many tourists naturally assume the XXX is a cheeky reference to adult entertainment. Another pervasive, romantic urban myth claims the three crosses represent the three historical plagues that threatened the city: fire, floods, and the Black Death.",
            "The truth is a lot older, and a lot more aristocratic. The symbol has nothing to do with danger or red lights. The crosses are known in heraldry as St. Andrew's Crosses, and they come directly from the medieval coat of arms of the Persijn family.",
            "In the 13th century, Jan Persijn was a prominent nobleman who owned massive tracts of land along the Amstel river, exactly where the city was founded. His family's shield was a black stripe down the middle containing three white crosses on a red background. The city simply adopted their landlord's logo.",
            "By 1419, the XXX was officially the city's coat of arms. After World War II, Queen Wilhelmina added a motto underneath the crosses to honor the city's resistance against the occupation: 'Heldhaftig, Vastberaden, Barmhartig', which means Valiant, Steadfast, and Compassionate."
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
        // Pass true to autoplay
        card.addEventListener('click', () => openPlayer(act, true));
        activityList.appendChild(card);
    });
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
openAdminBtn.addEventListener('click', () => adminPortal.classList.add('active'));
closeAdminBtn.addEventListener('click', () => adminPortal.classList.remove('active'));

adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newActivity = {
        id: "custom-" + Date.now(),
        title: document.getElementById('admin-title').value,
        subtitle: document.getElementById('admin-subtitle').value,
        icon: "fa-solid fa-star", // Default icon for custom
        image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=1000",
        audioFile: null, // Will default to TTS since no API is connected
        text: document.getElementById('admin-text').value.split('\n').filter(p => p.trim() !== '')
    };

    activities.push(newActivity);
    localStorage.setItem('flagshipActivities', JSON.stringify(activities));
    
    adminForm.reset();
    adminPortal.classList.remove('active');
    renderList();
    alert("Activity Added! Since you do not have an MP3, the system will read it using Text-to-Speech.");
});

resetDataBtn.addEventListener('click', () => {
    localStorage.removeItem('flagshipActivities');
    activities = defaultActivities;
    renderList();
    adminPortal.classList.remove('active');
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