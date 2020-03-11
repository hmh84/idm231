// Font

(function(d) {
    var config = {
        kitId: 'dgu3cib',
        scriptTimeout: 3000,
        async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

//Init

const closeButton1 = document.querySelector('#closeModal1');
const closeButton2 = document.querySelector('#closeModal2');
const helpButton = document.querySelector('#helpButton');
const opacityBackdrop = document.querySelector('#opacityBackdrop');
const modalWrap = document.querySelector('#modalWrap');
const welcomeMenu = document.querySelector('#welcomeMenu');
const signOutputDiv = document.querySelector('#signOutput');

closeButton1.addEventListener('click', closeModal);
closeButton2.addEventListener('click', closeModal);

function closeModal() {
    opacityBackdrop.hidden = true;
    modalWrap.hidden = true;
    welcomeMenu.hidden = true;
    signOutputDiv.hidden = true;
};

opacityBackdrop.addEventListener('click', () => {
    closeModal();
});

helpButton.addEventListener('click', openWelcome);

function openWelcome() {
    opacityBackdrop.hidden = false;
    modalWrap.hidden = false;
    welcomeMenu.hidden = false;
    welcomeMenu.scrollBy(0, -500);
};

function openSignOutput() {
    opacityBackdrop.hidden = false;
    modalWrap.hidden = false;
    signOutputDiv.hidden = false;
    signOutputDiv.scrollBy(0, -500);
};

let year;
let month;
let day;

function zodiacQuery() {

    const bdayinput = document.querySelector('#bdayinput').value;
    const bdayArray = bdayinput.split('-');

    const year = bdayArray[0];
    const month = bdayArray[1];
    const day = bdayArray[2];

// Year int converter

    const yearCalc = (year - 4 - ((Math.round((year - 4) / 12)) * 12));

//Sign Query

if ((yearCalc == 0 && month > 1) || (yearCalc == 1 && month == 1)) {
    sign = rat;
}
else if ((yearCalc == 1 && month > 1) || (yearCalc == 2 && month == 1)) {
    sign = ox;
}
else if ((yearCalc == 2 && month > 1) || (yearCalc == 3 && month == 1)) {
    sign = tiger;
}
else if ((yearCalc == 3 && month > 1) || (yearCalc == 4 && month == 1)) {
    sign = rabbit;
}
else if ((yearCalc == 4 && month > 1) || (yearCalc == 5 && month == 1)) {
    sign = dragon;
}
else if ((yearCalc == 5 && month > 1) || (yearCalc == -6 && month == 1)) {
    sign = snake;
}
else if ((yearCalc == -6 && month > 1) || (yearCalc == -5 && month == 1)) {
    sign = horse;
}
else if ((yearCalc == -5 && month > 1) || (yearCalc == -4 && month == 1)) {
    sign = goat;
}
else if ((yearCalc == -4 && month > 1) || (yearCalc == -3 && month == 1)) {
    sign = monkey;
}
else if ((yearCalc == -3 && month > 1) || (yearCalc == -2 && month == 1)) {
    sign = rooster;
}
else if ((yearCalc == -2 && month > 1) || (yearCalc == -1 && month == 1)) {
    sign = dog;
}
else if ((yearCalc == -1 && month > 1) || (yearCalc == 0 && month == 1)) {
    sign = pig;
}
    signOutput();
};

// Submit Listener

submit.addEventListener('click', (event) => {
    event.preventDefault();
    if (bdayinput.value == '') {
        alert('Enter a date to use this feature');
        return;
    }
    else {
    const yearInput = document.querySelector('#yearInput');
    zodiacQuery();
    }
});

// List Listener Loop

const signTitles = document.querySelectorAll('#signTitles button');

for (let i = 0; i < 12; i++) {

    signTitles[i].addEventListener('click', () => {
        sign = signs[i];
        signOutput();
    });
};

// Sign Buttons Listener Loop

const signButtons = document.querySelectorAll('#signButtons button');

for (let i = 0; i < 12; i++) {

    signButtons[i].addEventListener('click', () => {
        sign = signs[i];
        signOutput();
    });
};

/* 
var = anchorname
foreach i in signs {
    if signs[i].signname == anchorname
    sign = signs[i]
}
*/

// Arrow Listeners

const prevArrow = document.querySelector('#prevArrow');
const nextArrow = document.querySelector('#nextArrow');

    nextArrow.addEventListener('click', () => {
        if (sign === rat) {
            sign = ox;
            signOutput();
            return;
    }
        if (sign === ox) {
            sign = tiger;
            signOutput();
            return;
        }
        if (sign === tiger) {
            sign = rabbit;
            signOutput();
            return;
    }
        if (sign === rabbit) {
            sign = dragon;
            signOutput();
            return;
        }
        if (sign === dragon) {
            sign = snake;
            signOutput();
            return;
    }
        if (sign === snake) {
            sign = horse;
            signOutput();
            return;
        }
        if (sign === horse) {
            sign = goat;
            signOutput();
            return;
    }
        if (sign === goat) {
            sign = monkey;
            signOutput();
            return;
        }
        if (sign === monkey) {
            sign = rooster;
            signOutput();
            return;
    }
        if (sign === rooster) {
            sign = dog;
            signOutput();
            return;
        }
        if (sign === dog) {
            sign = pig;
            signOutput();
            return;
    }
        if (sign === pig) {
            sign = rat;
            signOutput();
            return;
        }
    });

    prevArrow.addEventListener('click', () => {
        if (sign === rat) {
            sign = pig;
            signOutput();
            return;
    }
        if (sign === pig) {
            sign = dog;
            signOutput();
            return;
        }
        if (sign === dog) {
            sign = rooster;
            signOutput();
            return;
    }
        if (sign === rooster) {
            sign = monkey;
            signOutput();
            return;
        }
        if (sign === monkey) {
            sign = goat;
            signOutput();
            return;
    }
        if (sign === goat) {
            sign = horse;
            signOutput();
            return;
        }
        if (sign === horse) {
            sign = snake;
            signOutput();
            return;
    }
        if (sign === snake) {
            sign = dragon;
            signOutput();
            return;
        }
        if (sign === dragon) {
            sign = rabbit;
            signOutput();
            return;
    }
        if (sign === rabbit) {
            sign = tiger;
            signOutput();
            return;
        }
        if (sign === tiger) {
            sign = ox;
            signOutput();
            return;
    }
        if (sign === ox) {
            sign = rat;
            signOutput();
            return;
        }
    });

// Output Function

const signOutput_image = document.querySelector('#image');
const signOutput_signName = document.querySelector('#signName');
const signOutput_topline = document.querySelector('#topline');
const signOutput_description1 = document.querySelector('#description1');
const signOutput_description2 = document.querySelector('#description2');
const signOutput_mostCompatible = document.querySelector('#mostCompatible');
const signOutput_leastCompatible = document.querySelector('#leastCompatible');
const speaker = document.querySelector('#speaker');

function signOutput() {
    signOutput_image.src = sign.image;
    signOutput_image.alt = sign.signName+' Icon';
    signOutput_signName.innerHTML = sign.signName;
    signOutput_topline.innerHTML = sign.topline;
    signOutput_description1.innerHTML = sign.description1;
    signOutput_description2.innerHTML = sign.description2;
    signOutput_mostCompatible.innerHTML = 'Most Compatible With: ' + sign.mostCompatible;
    signOutput_leastCompatible.innerHTML = 'Least Compatible With: ' + sign.leastCompatible;

    speaker.src = sign.sound;

    if (!mute) {
        speaker.play();
    };

    createSignLinks();

    openSignOutput();
};

function createSignLinks() {
    const signLinks = document.querySelectorAll('.signLinks');
    signLinks.forEach(signLink => {
        signLink.addEventListener('click', () => {
            event.preventDefault();
            let linkName = signLink.innerHTML;
            sign = signs.linkName;
            signOutput();
    })
    })
};

// KeyUp Events

document.onkeyup = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27 || evt.keyCode == 32) {
        // Keys (27 = ESC, 32 = SpaceBar)
            event.preventDefault();
            closeModal();
    }
    if (evt.keyCode == 37) {
        // Keys (37 = ArrowLeft)
        event.preventDefault();
            prevArrow.click();
    }
    if (evt.keyCode == 39) {
        // Keys (39 = ArrowRight)
        event.preventDefault();
        nextArrow.click();
    }
};

// KeyDown Events

document.onkeydown = function(evt) {
    if (evt.keyCode == 38) {
        // Keys (38: ArrowUp)
        event.preventDefault();
        welcomeMenu.scrollBy(0, -25);
        signOutputDiv.scrollBy(0, -25);
    }  
    if (evt.keyCode == 40) {
        // Keys (40: ArrowDown)
        event.preventDefault();
        welcomeMenu.scrollBy(0, 25);
        signOutputDiv.scrollBy(0, 25);
    }
};

// Zodiac Objects

const rat = {
    signName: "Rat",
    image: 'graphics/01_rat.svg',
    topline: "Quick-witted, resourceful, and versatile...",
    description1: "According to the Chinese zodiac story, in the competition held by the Jade Emperor to decide the zodiac animals, the quick-witted rat asked the diligent ox to take him on a ride to cross the river and jumped down before the ox crossed the finish line, so the rat won the race and became the first of the zodiac animals.",
    description2: "Rats are quick-witted, resourceful, and smart but lack courage. With rich imaginations and sharp observations, they can take advantage of various opportunities well. In Chinese culture, rats represent working diligently and thriftiness, so people born in a Rat year are thought to be wealthy and prosperous.",
    mostCompatible: "<p1 class='signLinks'>ox</p1>, <p1 class='signLinks'>rabbit</p1>, or <p1 class='signLinks'>dragon</p1>",
    leastCompatible: "<p1 class='signLinks'>horse</p1> or <p1 class='signLinks'>rooster</p1>",
    sound: 'sounds/01_rat.mp3',
};

const ox = {
    signName: "Ox",
    image: 'graphics/02_ox.svg',
    topline: "Diligent and dependable...",
    description1: "Oxen are known for diligence, dependability, strength and determination. Having an honest nature, Oxen are strongly patriotic, have ideals and ambitions for life, and attach importance to family and work. These reflect traditional conservative characteristics. Women Oxen are traditional, faithful wives, who attach great importance to their children's education. Having great patience and a desire to make progress, Oxen can achieve their goals by consistent effort. They are not much influenced by others or the environment, but persist in doing things according to their ideals and capabilities.",
    description2: "Before taking any action, Oxen will have a definite plan with detailed steps, to which they apply their strong faith and physical strength. As a result, people of the Ox zodiac sign often enjoy great success. Oxen are weakest in their communication skills. They are not good at communicating with others, and even think it is not worthwhile to exchange ideas with others. They are stubborn and stick to their own ways.",
    mostCompatible: "<p1 class='signLinks'>rat</p1>, <p1 class='signLinks'>monkey</p1>, or <p1 class='signLinks'>rooster</p1>",
    leastCompatible: "<p1 class='signLinks'>tiger</p1>, <p1 class='signLinks'>dragon</p1>, <p1 class='signLinks'>horse</p1>, or <p1 class='signLinks'>goat</p1>",
    sound: 'sounds/02_ox.mp3',
};

const tiger = {
    signName: "Tiger",
    image: 'graphics/03_tiger.svg',
    topline: "Brave and confident...",
    description1: "People born in a year of the Tiger are brave, competitive, unpredictable, and confident. They are very charming and well-liked by others. But sometimes they are likely to be impetuous, irritable, and overindulged.",
    description2: "With stubborn personalities and tough judgment, Tigers work actively and express themselves boldly, doing things in a high-handed manner. They are authoritative and never go back on what they have said. With great confidence and indomitable fortitude, they can be competent leaders. They will not make preparations for anything, but can handle anything that comes along.",
    mostCompatible: "<p1 class='signLinks'>dragon</p1>, <p1 class='signLinks'>horse</p1>, or <p1 class='signLinks'>pig</p1>",
    leastCompatible: "<p1 class='signLinks'>ox</p1>, <p1 class='signLinks'>tiger</p1>, <p1 class='signLinks'>snake</p1>, or <p1 class='signLinks'>monkey</p1>",
    sound: 'sounds/03_tiger.mp3',
};

const rabbit = {
    signName: "Rabbit",
    image: 'graphics/04_rabbit.svg',
    topline: "Quiet and elegant...",
    description1: "Rabbits tend to be gentle, quiet, elegant, and alert as well as quick, skillful, kind, patient, and very responsible. However, they might be superficial, stubborn, melancholy, and overly-discreet. Gentlemen who belong to the Rabbit zodiac sign always treat people politely, with a gentle smile that makes people feel that they are credible and sincere. ",
    description2: "When encountering tough difficulties, they are never discouraged but instead remain persistent in their endeavors to find solutions. This means they eventually achieve enviable success. Ladies belonging to the Rabbit zodiac sign, apart from having a pretty and demure appearance, have a pure heart. Rabbits are faithful to those around them but are reluctant to reveal their minds to others, and have a tendency to escape reality. They are too cautious and conservative, which means they miss good opportunities.",
    mostCompatible: "<p1 class='signLinks'>rat</p1>, <p1 class='signLinks'>goat</p1>, <p1 class='signLinks'>monkey</p1>, <p1 class='signLinks'>dog</p1>, or <p1 class='signLinks'>pig</p1>",
    leastCompatible: "<p1 class='signLinks'>rooster</p1> or <p1 class='signLinks'>snake</p1>",
    sound: 'sounds/04_rabbit.mp3',
};

const dragon = {
    signName: "Dragon",
    image: 'graphics/05_dragon.svg',
    topline: "Confident and intelligent...",
    description1: "Among the Chinese zodiac animals, the dragon is the sole imaginary animal. The Chinese dragon is the most vital and powerful beast in the Chinese zodiac, although Dragons have an infamous reputation for being a hothead and possessing a sharp tongue. In ancient times, people thought that Dragons were best suited to be leaders of the world with their character traits of dominance and ambition.",
    description2: "Gifted with innate courage, tenacity, and intelligence, Dragons are enthusiastic and confident. They are not afraid of challenges, and willing to take risks. However, Dragons are sometimes regarded as aggressive, and angry Dragons are not open to criticism. They don't consider themselves irritating and arrogant. Instead of following tradition, they strive for a smooth future.",
    mostCompatible: "<p1 class='signLinks'>rat</p1>, <p1 class='signLinks'>tiger</p1>, or <p1 class='signLinks'>snake</p1>",
    leastCompatible: "<p1 class='signLinks'>ox</p1>, <p1 class='signLinks'>goat</p1>, or <p1 class='signLinks'>dog</p1>",
    sound: 'sounds/05_dragon.mp3',
};

const snake = {
    signName: "Snake",
    image: 'graphics/06_snake.svg',
    topline: "Intelligent and wise...",
    description1: "In Chinese culture, the Snake is the most enigmatic animal among the 12 zodiac animals. People born in a year of the Snake are supposed to be the most intuitive. Snakes tend to act according to their own judgments while remaining private and reticent. They are determined to accomplish their goals and hate to fail. Snakes represent the symbol of wisdom. They are intelligent and wise. They are good at communication but say little. Snakes are usually regarded as great thinkers.",
    description2: "Snakes are materialistic and love keeping up with the Joneses. They love to possess the best of everything but they have no patience for shopping. Snake people prefer to work alone; therefore, they are easily stressed. If they seem unusually stressed, it is best to allow them their own space and time to return to normal.",
    mostCompatible: "<p1 class='signLinks'>dragon</p1> or <p1 class='signLinks'>rooster</p1>",
    leastCompatible: "<p1 class='signLinks'>tiger</p1>, <p1 class='signLinks'>rabbit</p1>, <p1 class='signLinks'>goat</p1>, or <p1 class='signLinks'>pig</p1>",
    sound: 'sounds/06_snake.mp3',
};

const horse = {
    signName: "Horse",
    image: 'graphics/07_horse.svg',
    topline: "Active and energetic...",
    description1: "People born in a year of the Horse are extremely animated, active and energetic. Horses love to be in a crowd, and they can usually be seen on such occasions as concerts, theater performances, meetings, sporting events, and parties. With a deft sense of humor, Horses are masters of repartee. They love to take center stage and delight audiences everywhere.",
    description2: "Sometimes, the Horse is a little self-centered, but it doesn't mean that she/he isn't interested in others' problems. Horses are really more cunning than intelligent, and that is probably why most Horse people lack real confidence.",
    mostCompatible: "<p1 class='signLinks'>goat</p1> or <p1 class='signLinks'>tiger</p1>",
    leastCompatible: "<p1 class='signLinks'>rat</p1>, <p1 class='signLinks'>ox</p1>, or <p1 class='signLinks'>rooster</p1>",
    sound: 'sounds/07_horse.mp3',
};

const goat = {
    signName: "Goat",
    image: 'graphics/08_goat.svg',
    topline: "Calm and gentle...",
    description1: "People born in a year of the Goat are generally believed to be gentle, mild-mannered, shy, stable, sympathetic, amicable, and brimming with a strong sense of kindheartedness and justice. They have very delicate thoughts, strong creativity, and perseverance, and acquire professional skills well. Although they look gentle on the surface, they are tough on the inside, always insisting on their own opinions in their minds. They have strong inner resilience and excellent defensive instincts.",
    description2: "Although they prefer to be in groups, they do not want to be the center of attention. They are reserved and quiet, most likely because they like spending a lot of time in their own thoughts. Goats like to spend money on fashionable things that give them a first class appearance. Although Goats enjoy spending money on the finer things in life, they are not snobbish.",
    mostCompatible: "<p1 class='signLinks'>rabbit</p1>, <p1 class='signLinks'>horse</p1>, or <p1 class='signLinks'>pig</p1>",
    leastCompatible: "<p1 class='signLinks'>ox</p1>, <p1 class='signLinks'>dragon</p1>, <p1 class='signLinks'>snake</p1>, or <p1 class='signLinks'>dog</p1>",
    sound: 'sounds/08_goat.mp3',
};

const monkey = {
    signName: "Monkey",
    image: 'graphics/09_monkey.svg',
    topline: "Sharp, smart, but naughty...",
    description1: "People born in a year of the Monkey have magnetic personalities and are witty and intelligent. Personality traits like mischievousness, curiosity, and cleverness make them very naughty. Monkeys are masters of practical jokes, because they like playing most of the time. Although they don't have bad intentions, their pranks sometimes hurt other people's feelings.",
    description2: "Monkeys are fast learners and crafty opportunists. They have many interests and need partners who are capable of stimulating them. While some like the eccentric nature of Monkeys, others don't trust their sly, restless, and inquisitive nature. Although they are clever and creative, Monkeys can't always exhibit their talents properly. They like to accept challenges and prefer urban life to rural life.",
    mostCompatible: "<p1 class='signLinks'>ox</p1> or <p1 class='signLinks'>rabbit</p1>",
    leastCompatible: "<p1 class='signLinks'>tiger</p1> or <p1 class='signLinks'>pig</p1>",
    sound: 'sounds/09_monkey.mp3',
};

const rooster = {
    signName: "Rooster",
    image: 'graphics/10_rooster.svg',
    topline: "Observant and hardworking...",
    description1: "Roosters are always active, amusing, and popular within a crowd. Roosters are talkative, outspoken, frank, open, honest, and loyal individuals. They like to be the center of attention and always appear attractive and beautiful. Roosters are happiest when they are surrounded by others, whether at a party or just a social gathering. They enjoy the spotlight and will exhibit their charm on any occasion.",
    description2: "Roosters expect others to listen to them while they speak, and can become agitated if they don't. Vain and boastful, Roosters like to brag about themselves and their accomplishments. Their behavior of continually seeking the unwavering attention of others annoys people around them at times.",
    mostCompatible: "<p1 class='signLinks'>ox</p1> or <p1 class='signLinks'>snake</p1>",
    leastCompatible: "<p1 class='signLinks'>rat</p1>, <p1 class='signLinks'>rabbit</p1>, <p1 class='signLinks'>horse</p1>, or <p1 class='signLinks'>pig</p1>",
    sound: 'sounds/10_rooster.mp3',
};

const dog = {
    signName: "Dog",
    image: 'graphics/11_dog.svg',
    topline: "Loyal, honest, but not good at communication...",
    description1: "Dogs are loyal and honest, amiable and kind, cautious and prudent. Due to having a strong sense of loyalty and sincerity, Dogs will do everything for the person who they think is most important. As Dogs are not good at communication, it is difficult for them to convey their thoughts to others. Therefore, Dogs tend to leave others with the impression that they have a stubborn personality.",
    description2: "When thrown into doubt, Dogs think the world is evil and complicated. Then they criticize sharply when making comments, and infer that all things are according to their pessimistic point of view.",
    mostCompatible: "<p1 class='signLinks'>rabbit</p1>",
    leastCompatible: "<p1 class='signLinks'>dragon</p1>, <p1 class='signLinks'>goat</p1>, or <p1 class='signLinks'>rooster</p1>",
    sound: 'sounds/11_dog.mp3',
};

const pig = {
    signName: "Pig",
    image: 'graphics/12_pig.svg',
    topline: "Diligent, compassionate, and realistic...",
    description1: "Pigs are diligent, compassionate, and generous. They have great concentration: once they set a goal, they will devote all their energy to achieving it. Though Pigs rarely seek help from others, they will not refuse to give others a hand. Pigs never suspect trickery, so they are easily fooled.",
    description2: "General speaking, Pigs are relatively calm when facing trouble. No matter how difficult the problems are Pigs encounter, they can handle things properly and carefully. They have a great sense of responsibility to finish what they are engaged in.",
    mostCompatible: "<p1 class='signLinks'>goat</p1>, <p1 class='signLinks'>tiger</p1>, or <p1 class='signLinks'>rabbit</p1>",
    leastCompatible: "<p1 class='signLinks'>monkey</p1> or <p1 class='signLinks'>snake</p1>",
    sound: 'sounds/12_pig.mp3',
};

const signs = [rat, ox, tiger, rabbit, dragon, snake, horse, goat, monkey, rooster, dog, pig];

const btnAudible = document.querySelector('#audible');
const btnMuted = document.querySelector('#muted');
const soundtrack = document.querySelector('#soundtrack');

let mute = false;

btnAudible.addEventListener('click', () => {
    btnAudible.hidden = true;
    btnMuted.hidden = false;
    speaker.pause();
    soundtrack.pause();
    mute = true;
});

btnMuted.addEventListener('click', () => {
    btnAudible.hidden = false;
    btnMuted.hidden = true;
    soundtrack.play();
    mute = false;
});

let sign;

setTimeout(function(){soundtrack.play();}, 2000);