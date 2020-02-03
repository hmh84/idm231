//Welcome Screen

function toggleWelcomeOff() {
    document.getElementById('welcome').hidden = true;
}

function toggleWelcomeOn() {
    document.getElementById('welcome').removeAttribute('hidden');
}

//Zodiac List

const signList = [
    rat,
    ox,
    tiger,
    rabbit,
    dragon,
    snake,
    horse,
    goat,
    monkey,
    dog,
    pig
];

//Zodiac Info

const rat = {
    signName: "Rat",
    topline: "Quick-witted, resourceful, and versatile...",
    description1: "According to the Chinese zodiac story, in the competition held by the Jade Emperor to decide the zodiac animals, the quick-witted rat asked the diligent ox to take him on a ride to cross the river and jumped down before the ox crossed the finish line, so the rat won the race and became the first of the zodiac animals.",
    description2: "Rats are quick-witted, resourceful, and smart but lack courage. With rich imaginations and sharp observations, they can take advantage of various opportunities well. In Chinese culture, rats represent working diligently and thriftiness, so people born in a Rat year are thought to be wealthy and prosperous.",
    mostCompatible: "Ox, Rabbit, Dragon",
    leaseCompatible: "Horse, Rooster",
};

const ox = {
    signName: "Ox",
    topline: "Diligent and dependable...",
    description1: "Oxen are known for diligence, dependability, strength and determination. Having an honest nature, Oxen are strongly patriotic, have ideals and ambitions for life, and attach importance to family and work. These reflect traditional conservative characteristics. Women Oxen are traditional, faithful wives, who attach great importance to their children's education. Having great patience and a desire to make progress, Oxen can achieve their goals by consistent effort. They are not much influenced by others or the environment, but persist in doing things according to their ideals and capabilities.",
    description2: "Before taking any action, Oxen will have a definite plan with detailed steps, to which they apply their strong faith and physical strength. As a result, people of the Ox zodiac sign often enjoy great success. Oxen are weakest in their communication skills. They are not good at communicating with others, and even think it is not worthwhile to exchange ideas with others. They are stubborn and stick to their own ways.",
    mostCompatible: "Rat, Monkey, or Rooster.",
    leaseCompatible: "Tiger, Dragon, Horse, or Goat.",
};

const tiger = {
    signName: "Tiger",
    topline: "Brave and confident...",
    description1: "People born in a year of the Tiger are brave, competitive, unpredictable, and confident. They are very charming and well-liked by others. But sometimes they are likely to be impetuous, irritable, and overindulged.",
    description2: "With stubborn personalities and tough judgment, Tigers work actively and express themselves boldly, doing things in a high-handed manner. They are authoritative and never go back on what they have said. With great confidence and indomitable fortitude, they can be competent leaders. They will not make preparations for anything, but can handle anything that comes along.",
    mostCompatible: "Dragon, Horse, or Pig",
    leaseCompatible: "Ox, Tiger, Snake, or Monkey",
};

const rabbit = {
    signName: "Rabbit",
    topline: "Quiet and elegant...",
    description1: "Rabbits tend to be gentle, quiet, elegant, and alert as well as quick, skillful, kind, patient, and very responsible. However, they might be superficial, stubborn, melancholy, and overly-discreet. Gentlemen who belong to the Rabbit zodiac sign always treat people politely, with a gentle smile that makes people feel that they are credible and sincere. ",
    description2: "when encountering tough difficulties, they are never discouraged but instead remain persistent in their endeavors to find solutions. This means they eventually achieve enviable success. Ladies belonging to the Rabbit zodiac sign, apart from having a pretty and demure appearance, have a pure heart. Rabbits are faithful to those around them but are reluctant to reveal their minds to others, and have a tendency to escape reality. They are too cautious and conservative, which means they miss good opportunities.",
    mostCompatible: "Rat, Goat, Monkey, Dog, Pig",
    leaseCompatible: "Rooster, Snake.",
};

const dragon = {
    signName: "Dragon",
    topline: "Confident and intelligent...",
    description1: "Among the Chinese zodiac animals, the dragon is the sole imaginary animal. The Chinese dragon is the most vital and powerful beast in the Chinese zodiac, although Dragons have an infamous reputation for being a hothead and possessing a sharp tongue. In ancient times, people thought that Dragons were best suited to be leaders of the world with their character traits of dominance and ambition.",
    description2: "Gifted with innate courage, tenacity, and intelligence, Dragons are enthusiastic and confident. They are not afraid of challenges, and willing to take risks. However, Dragons are sometimes regarded as aggressive, and angry Dragons are not open to criticism. They don't consider themselves irritating and arrogant. Instead of following tradition, they strive for a smooth future.",
    mostCompatible: "Rat, Tiger or Snake",
    leaseCompatible: "Ox, Goat or Dog",
};

const snake = {
    signName: "Snake",
    topline: "Intelligent and wise...",
    description1: "In Chinese culture, the Snake is the most enigmatic animal among the 12 zodiac animals. People born in a year of the Snake are supposed to be the most intuitive. Snakes tend to act according to their own judgments while remaining private and reticent. They are determined to accomplish their goals and hate to fail. Snakes represent the symbol of wisdom. They are intelligent and wise. They are good at communication but say little. Snakes are usually regarded as great thinkers.",
    description2: "Snakes are materialistic and love keeping up with the Joneses. They love to possess the best of everything but they have no patience for shopping. Snake people prefer to work alone; therefore, they are easily stressed. If they seem unusually stressed, it is best to allow them their own space and time to return to normal.",
    mostCompatible: "Dragon, Rooster",
    leaseCompatible: "Tiger, Rabbit, Goat, Pig",
};

const horse = {
    signName: "Horse",
    topline: "Active and energetic...",
    description1: "People born in a year of the Horse are extremely animated, active and energetic. Horses love to be in a crowd, and they can usually be seen on such occasions as concerts, theater performances, meetings, sporting events, and parties. With a deft sense of humor, Horses are masters of repartee. They love to take center stage and delight audiences everywhere.",
    description2: "Sometimes, the Horse is a little self-centered, but it doesn't mean that she/he ins't interested in others' problems. Horses are really more cunning than intelligent, and that is probably why most Horse people lack real confidence.",
    mostCompatible: "Goat or Tiger",
    leaseCompatible: "Rat, Ox, or Rooster",
};

const goat = {
    signName: "Goat",
    topline: "Calm and gentle...",
    description1: "People born in a year of the Goat are generally believed to be gentle, mild-mannered, shy, stable, sympathetic, amicable, and brimming with a strong sense of kindheartedness and justice. They have very delicate thoughts, strong creativity, and perseverance, and acquire professional skills well. Although they look gentle on the surface, they are tough on the inside, always insisting on their own opinions in their minds. They have strong inner resilience and excellent defensive instincts.",
    description2: "Although they prefer to be in groups, they do not want to be the center of attention. They are reserved and quiet, most likely because they like spending a lot of time in their own thoughts. Goats like to spend money on fashionable things that give them a first class appearance. Although Goats enjoy spending money on the finer things in life, they are not snobbish.",
    mostCompatible: "Rabbit, Horse, Pig",
    leaseCompatible: "Ox, Dragon, Snake, Dog",
};

const monkey = {
    signName: "Monkey",
    topline: "Sharp, smart, but naughty...",
    description1: "People born in a year of the Monkey have magnetic personalities and are witty and intelligent. Personality traits like mischievousness, curiosity, and cleverness make them very naughty. Monkeys are masters of practical jokes, because they like playing most of the time. Although they don't have bad intentions, their pranks sometimes hurt other people's feelings.",
    description2: "Monkeys are fast learners and crafty opportunists. They have many interests and need partners who are capable of stimulating them. While some like the eccentric nature of Monkeys, others don't trust their sly, restless, and inquisitive nature.Although they are clever and creative, Monkeys can't always exhibit their talents properly. They like to accept challenges and prefer urban life to rural life.",
    mostCompatible: "Ox or Rabbit",
    leaseCompatible: "Tiger or Pig",
};

const dog = {
    signName: "Dog",
    topline: "Loyal, honest, but not good at communication...",
    description1: "Dogs are loyal and honest, amiable and kind, cautious and prudent. Due to having a strong sense of loyalty and sincerity, Dogs will do everything for the person who they think is most important. As Dogs are not good at communication, it is difficult for them to convey their thoughts to others. Therefore, Dogs tend to leave others with the impression that they have a stubborn personality.",
    description2: "When thrown into doubt, Dogs think the world is evil and complicated. Then they criticize sharply when making comments, and infer that all things are according to their pessimistic point of view.",
    mostCompatible: "Rabbit",
    leaseCompatible: "Dragon, Goat, Rooster",
};

const pig = {
    signName: "Pig",
    topline: "Diligent, compassionate, and realistic...",
    description1: "Pigs are diligent, compassionate, and generous. They have great concentration: once they set a goal, they will devote all their energy to achieving it. Though Pigs rarely seek help from others, they will not refuse to give others a hand. Pigs never suspect trickery, so they are easily fooled.",
    description2: "General speaking, Pigs are relatively calm when facing trouble. No matter how difficult the problems are Pigs encounter, they can handle things properly and carefully. They have a great sense of responsibility to finish what they are engaged in.",
    mostCompatible: "Goat, Tiger, Rabbit",
    leaseCompatible: "Monkey, Snake",
};
