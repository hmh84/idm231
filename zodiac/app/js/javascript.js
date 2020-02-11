//Welcome Screen

document.querySelector('#helpButton').addEventListener('click', () => {
    document.querySelector('#welcome').hidden = false;
});

document.querySelector('#closeWelcome').addEventListener('click', () => {
    document.querySelector('#welcome').hidden = true;
});

function parseYear() {
    const bdayValue = bdayInput.value;
    const bdayArray = bdayValue.split('-');

    const year = bdayArray[0];
    const month = bdayArray[1];
    const day = bdayArray[2];
    console.log('Year: ' + year + ' | ' + 'Month: ' + month + ' | ' + 'Day: ' + day);

    // Year int converter

    const yearCalc = (year - 4 - ((Math.round((year - 4) / 12)) * 12));

    //Sign Query

    if ((yearCalc == 0)) {
        sign = 'Rat';
    } else if ((yearCalc == 1)) {
        sign = 'Ox';
    } else if ((yearCalc == 2)) {
        sign = 'Tiger';
    } else if ((yearCalc == 3)) {
        sign = 'Rabbit';
    } else if ((yearCalc == 4)) {
        sign = 'Dragon';
    } else if ((yearCalc == 5)) {
        sign = 'Snake';
    } else if ((yearCalc == -6)) {
        sign = 'Gorse';
    } else if ((yearCalc == -5)) {
        sign = 'Goat';
    } else if ((yearCalc == -4)) {
        sign = 'Monkey';
    } else if ((yearCalc == -3)) {
        sign = 'Rooster';
    } else if ((yearCalc == -2)) {
        sign = 'Dog';
    } else if ((yearCalc == -1)) {
        sign = 'Pig';
    }
    console.log('Sign: ' + sign);
}

const bdayInput = document.querySelector('#bdayInput');

submit.addEventListener('click', (event) => {
    event.preventDefault();
    parseYear();
});

//Zodiac Info

const rat = {
    image: 'graphics/01_rat.svg',
    signName: "Rat",
    topline: "Quick-witted, resourceful, and versatile...",
    description1: "According to the Chinese zodiac story, in the competition held by the Jade Emperor to decide the zodiac animals, the quick-witted rat asked the diligent ox to take him on a ride to cross the river and jumped down before the ox crossed the finish line, so the rat won the race and became the first of the zodiac animals.",
    description2: "Rats are quick-witted, resourceful, and smart but lack courage. With rich imaginations and sharp observations, they can take advantage of various opportunities well. In Chinese culture, rats represent working diligently and thriftiness, so people born in a Rat year are thought to be wealthy and prosperous.",
    mostCompatible: "Ox, Rabbit, or Dragon",
    leaseCompatible: "Horse or Rooster",
    sound: 'sounds/01_rat.mp3',
};

const ox = {
    image: 'graphics/02_ox.svg',
    signName: "Ox",
    topline: "Diligent and dependable...",
    description1: "Oxen are known for diligence, dependability, strength and determination. Having an honest nature, Oxen are strongly patriotic, have ideals and ambitions for life, and attach importance to family and work. These reflect traditional conservative characteristics. Women Oxen are traditional, faithful wives, who attach great importance to their children's education. Having great patience and a desire to make progress, Oxen can achieve their goals by consistent effort. They are not much influenced by others or the environment, but persist in doing things according to their ideals and capabilities.",
    description2: "Before taking any action, Oxen will have a definite plan with detailed steps, to which they apply their strong faith and physical strength. As a result, people of the Ox zodiac sign often enjoy great success. Oxen are weakest in their communication skills. They are not good at communicating with others, and even think it is not worthwhile to exchange ideas with others. They are stubborn and stick to their own ways.",
    mostCompatible: "Rat, Monkey, or Rooster.",
    leaseCompatible: "Tiger, Dragon, Horse, or Goat.",
    sound: 'sounds/02_ox.mp3',
};

const tiger = {
    image: 'graphics/02_tiger.svg',
    signName: "Tiger",
    topline: "Brave and confident...",
    description1: "People born in a year of the Tiger are brave, competitive, unpredictable, and confident. They are very charming and well-liked by others. But sometimes they are likely to be impetuous, irritable, and overindulged.",
    description2: "With stubborn personalities and tough judgment, Tigers work actively and express themselves boldly, doing things in a high-handed manner. They are authoritative and never go back on what they have said. With great confidence and indomitable fortitude, they can be competent leaders. They will not make preparations for anything, but can handle anything that comes along.",
    mostCompatible: "Dragon, Horse, or Pig",
    leaseCompatible: "Ox, Tiger, Snake, or Monkey",
    sound: 'sounds/02_tiger.mp3',
};

const rabbit = {
    image: 'graphics/04_rabbit.svg',
    signName: "Rabbit",
    topline: "Quiet and elegant...",
    description1: "Rabbits tend to be gentle, quiet, elegant, and alert as well as quick, skillful, kind, patient, and very responsible. However, they might be superficial, stubborn, melancholy, and overly-discreet. Gentlemen who belong to the Rabbit zodiac sign always treat people politely, with a gentle smile that makes people feel that they are credible and sincere. ",
    description2: "when encountering tough difficulties, they are never discouraged but instead remain persistent in their endeavors to find solutions. This means they eventually achieve enviable success. Ladies belonging to the Rabbit zodiac sign, apart from having a pretty and demure appearance, have a pure heart. Rabbits are faithful to those around them but are reluctant to reveal their minds to others, and have a tendency to escape reality. They are too cautious and conservative, which means they miss good opportunities.",
    mostCompatible: "Rat, Goat, Monkey, Dog, or Pig",
    leaseCompatible: "Rooster or Snake.",
    sound: 'sounds/04_rabbit.mp3',
};

const dragon = {
    image: 'graphics/05_dragon.svg',
    signName: "Dragon",
    topline: "Confident and intelligent...",
    description1: "Among the Chinese zodiac animals, the dragon is the sole imaginary animal. The Chinese dragon is the most vital and powerful beast in the Chinese zodiac, although Dragons have an infamous reputation for being a hothead and possessing a sharp tongue. In ancient times, people thought that Dragons were best suited to be leaders of the world with their character traits of dominance and ambition.",
    description2: "Gifted with innate courage, tenacity, and intelligence, Dragons are enthusiastic and confident. They are not afraid of challenges, and willing to take risks. However, Dragons are sometimes regarded as aggressive, and angry Dragons are not open to criticism. They don't consider themselves irritating and arrogant. Instead of following tradition, they strive for a smooth future.",
    mostCompatible: "Rat, Tiger, or Snake",
    leaseCompatible: "Ox, Goat, or Dog",
    sound: 'sounds/05_dragon.mp3',
};

const snake = {
    image: 'graphics/06_snake.svg',
    signName: "Snake",
    topline: "Intelligent and wise...",
    description1: "In Chinese culture, the Snake is the most enigmatic animal among the 12 zodiac animals. People born in a year of the Snake are supposed to be the most intuitive. Snakes tend to act according to their own judgments while remaining private and reticent. They are determined to accomplish their goals and hate to fail. Snakes represent the symbol of wisdom. They are intelligent and wise. They are good at communication but say little. Snakes are usually regarded as great thinkers.",
    description2: "Snakes are materialistic and love keeping up with the Joneses. They love to possess the best of everything but they have no patience for shopping. Snake people prefer to work alone; therefore, they are easily stressed. If they seem unusually stressed, it is best to allow them their own space and time to return to normal.",
    mostCompatible: "Dragon or Rooster",
    leaseCompatible: "Tiger, Rabbit, Goat, or Pig",
    sound: 'sounds/06_snake.mp3',
};

const horse = {
    image: 'graphics/07_horse.svg',
    signName: "Horse",
    topline: "Active and energetic...",
    description1: "People born in a year of the Horse are extremely animated, active and energetic. Horses love to be in a crowd, and they can usually be seen on such occasions as concerts, theater performances, meetings, sporting events, and parties. With a deft sense of humor, Horses are masters of repartee. They love to take center stage and delight audiences everywhere.",
    description2: "Sometimes, the Horse is a little self-centered, but it doesn't mean that she/he ins't interested in others' problems. Horses are really more cunning than intelligent, and that is probably why most Horse people lack real confidence.",
    mostCompatible: "Goat or Tiger",
    leaseCompatible: "Rat, Ox, or Rooster",
    sound: 'sounds/07_horse.mp3',
};

const goat = {
    image: 'graphics/08_goat.svg',
    signName: "Goat",
    topline: "Calm and gentle...",
    description1: "People born in a year of the Goat are generally believed to be gentle, mild-mannered, shy, stable, sympathetic, amicable, and brimming with a strong sense of kindheartedness and justice. They have very delicate thoughts, strong creativity, and perseverance, and acquire professional skills well. Although they look gentle on the surface, they are tough on the inside, always insisting on their own opinions in their minds. They have strong inner resilience and excellent defensive instincts.",
    description2: "Although they prefer to be in groups, they do not want to be the center of attention. They are reserved and quiet, most likely because they like spending a lot of time in their own thoughts. Goats like to spend money on fashionable things that give them a first class appearance. Although Goats enjoy spending money on the finer things in life, they are not snobbish.",
    mostCompatible: "Rabbit, Horse, or Pig",
    leaseCompatible: "Ox, Dragon, Snake, or Dog",
    sound: 'sounds/08_goat.mp3',
};

const monkey = {
    image: 'graphics/09_monkey.svg',
    signName: "Monkey",
    topline: "Sharp, smart, but naughty...",
    description1: "People born in a year of the Monkey have magnetic personalities and are witty and intelligent. Personality traits like mischievousness, curiosity, and cleverness make them very naughty. Monkeys are masters of practical jokes, because they like playing most of the time. Although they don't have bad intentions, their pranks sometimes hurt other people's feelings.",
    description2: "Monkeys are fast learners and crafty opportunists. They have many interests and need partners who are capable of stimulating them. While some like the eccentric nature of Monkeys, others don't trust their sly, restless, and inquisitive nature.Although they are clever and creative, Monkeys can't always exhibit their talents properly. They like to accept challenges and prefer urban life to rural life.",
    mostCompatible: "Ox or Rabbit",
    leaseCompatible: "Tiger or Pig",
    sound: 'sounds/09_monkey.mp3',
};

const rooster = {
    image: 'graphics/10_rooster.svg',
    signName: "Rooster",
    topline: "Observant and hardworking...",
    description1: "Roosters are always active, amusing, and popular within a crowd. Roosters are talkative, outspoken, frank, open, honest, and loyal individuals. They like to be the center of attention and always appear attractive and beautiful. Roosters are happiest when they are surrounded by others, whether at a party or just a social gathering. They enjoy the spotlight and will exhibit their charm on any occasion.",
    description2: "Roosters expect others to listen to them while they speak, and can become agitated if they don't. Vain and boastful, Roosters like to brag about themselves and their accomplishments. Their behavior of continually seeking the unwavering attention of others annoys people around them at times.",
    mostCompatible: "Ox or Snake",
    leaseCompatible: "Rat, Rabbit, Horse, or Pig",
    sound: 'sounds/10_rooster.mp3',
};

const dog = {
    image: 'graphics/11_dog.svg',
    signName: "Dog",
    topline: "Loyal, honest, but not good at communication...",
    description1: "Dogs are loyal and honest, amiable and kind, cautious and prudent. Due to having a strong sense of loyalty and sincerity, Dogs will do everything for the person who they think is most important. As Dogs are not good at communication, it is difficult for them to convey their thoughts to others. Therefore, Dogs tend to leave others with the impression that they have a stubborn personality.",
    description2: "When thrown into doubt, Dogs think the world is evil and complicated. Then they criticize sharply when making comments, and infer that all things are according to their pessimistic point of view.",
    mostCompatible: "Rabbit",
    leaseCompatible: "Dragon, Goat, or Rooster",
    sound: 'sounds/11_dog.mp3',
};

const pig = {
    image: 'graphics/12_pig.svg',
    signName: "Pig",
    topline: "Diligent, compassionate, and realistic...",
    description1: "Pigs are diligent, compassionate, and generous. They have great concentration: once they set a goal, they will devote all their energy to achieving it. Though Pigs rarely seek help from others, they will not refuse to give others a hand. Pigs never suspect trickery, so they are easily fooled.",
    description2: "General speaking, Pigs are relatively calm when facing trouble. No matter how difficult the problems are Pigs encounter, they can handle things properly and carefully. They have a great sense of responsibility to finish what they are engaged in.",
    mostCompatible: "Goat, Tiger, or Rabbit",
    leaseCompatible: "Monkey or Snake",
    sound: 'sounds/12_dog.mp3',
};

function clearList() {
    for (let i = 0; i < asideList.length; i++) {
        asideList[i].setAttribute('id', '');
        asideList[i].childNodes[1].setAttribute('id', '');
    };
}

// List Listeners

const asideList = document.querySelectorAll('.asideList');

asideList[0].addEventListener('click', () => {
    clearList();
    asideList[0].setAttribute('id', 'asideSelected');
    asideList[0].childNodes[1].setAttribute('id', 'indicateSelected');
    sign = rat.signName;
});

asideList[1].addEventListener('click', () => {
    clearList();
    asideList[1].setAttribute('id', 'asideSelected');
    asideList[1].childNodes[1].setAttribute('id', 'indicateSelected');
    sign = ox.signName;
});

asideList[2].addEventListener('click', () => {
    clearList();
    asideList[2].setAttribute('id', 'asideSelected');
    asideList[2].childNodes[1].setAttribute('id', 'indicateSelected');
    sign = tiger.signName;
});

asideList[3].addEventListener('click', () => {
    clearList();
    asideList[3].setAttribute('id', 'asideSelected');
    asideList[3].childNodes[1].setAttribute('id', 'indicateSelected');
    sign = rabbit.signName;
});

asideList[4].addEventListener('click', () => {
    clearList();
    asideList[4].setAttribute('id', 'asideSelected');
    asideList[4].childNodes[1].setAttribute('id', 'indicateSelected');
    sign = dragon.signName;
});

asideList[5].addEventListener('click', () => {
    clearList();
    asideList[5].setAttribute('id', 'asideSelected');
    asideList[5].childNodes[1].setAttribute('id', 'indicateSelected');
    sign = snake.signName;
});

asideList[6].addEventListener('click', () => {
    clearList();
    asideList[6].setAttribute('id', 'asideSelected');
    asideList[6].childNodes[1].setAttribute('id', 'indicateSelected');
    sign = horse.signName;
});

asideList[7].addEventListener('click', () => {
    clearList();
    asideList[7].setAttribute('id', 'asideSelected');
    asideList[7].childNodes[1].setAttribute('id', 'indicateSelected');
    sign = goat.signName;
});

asideList[8].addEventListener('click', () => {
    clearList();
    asideList[8].setAttribute('id', 'asideSelected');
    asideList[8].childNodes[1].setAttribute('id', 'indicateSelected');
    sign = monkey.signName;
});

asideList[9].addEventListener('click', () => {
    clearList();
    asideList[9].setAttribute('id', 'asideSelected');
    asideList[9].childNodes[1].setAttribute('id', 'indicateSelected');
    sign = rooster.signName;
});

asideList[10].addEventListener('click', () => {
    clearList();
    asideList[10].setAttribute('id', 'asideSelected');
    asideList[10].childNodes[1].setAttribute('id', 'indicateSelected');
    sign = dog.signName;
});

asideList[11].addEventListener('click', () => {
    clearList();
    asideList[11].setAttribute('id', 'asideSelected');
    asideList[11].childNodes[1].setAttribute('id', 'indicateSelected');
    sign = pig.signName;
});

// Button Listeners

document.querySelector('#rat').addEventListener('click', () => {
    sign = (rat.signName);
});

document.querySelector('#ox').addEventListener('click', () => {
    sign = (ox.signName);
});

document.querySelector('#tiger').addEventListener('click', () => {
    sign = (tiger.signName);
});

document.querySelector('#rabbit').addEventListener('click', () => {
    sign = (rabbit.signName);
});

document.querySelector('#dragon').addEventListener('click', () => {
    sign = (dragon.signName);
});

document.querySelector('#snake').addEventListener('click', () => {
    sign = (snake.signName);
});

document.querySelector('#horse').addEventListener('click', () => {
    sign = (horse.signName);
});

document.querySelector('#goat').addEventListener('click', () => {
    sign = (goat.signName);
});

document.querySelector('#monkey').addEventListener('click', () => {
    sign = (monkey.signName);
});

document.querySelector('#rooster').addEventListener('click', () => {
    sign = (rooster.signName);
});

document.querySelector('#dog').addEventListener('click', () => {
    sign = (dog.signName);
});

document.querySelector('#pig').addEventListener('click', () => {
    sign = (pig.signName);
    signOutput();
    console.log(sign);
});

function signOutput() {
    const signOutput_image = document.querySelector('#image');
    const signOutput_signName = document.querySelector('#signName');
    const signOutput_topline = document.querySelector('#topline');
    const signOutput_description1 = document.querySelector('#description1');
    const signOutput_description2 = document.querySelector('#description2');
    const signOutput_mostCompatible = document.querySelector('#mostCompatible');
    const signOutput_leaseCompatible = document.querySelector('#leaseCompatible');

    signOutput_image.src = sign.image;
    signOutput_image.alt = sign.signName;
    signOutput_signName.nodeValue = sign.signName;
    console.log(signOutput_signName.nodeValue);
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed!";
}

const signOutput_signName = document.querySelector('#signName');
console.log(signOutput_signName.innerHTML);