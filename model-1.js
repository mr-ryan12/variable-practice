var name = 'Cat Stevens';
var color = 'Brown';
var size = 'Large';

var age = 2;
var numOfToys = 3;
var howManyLives = 1;

var isFluffy = true;
var isEatingMyCouch = true;
var isHungry = false;

var toys = ['squeeky fish', 'a big rope', 'sticks n stuff'];
var food = ['treats', 'chicken thigs', 'all natural crunchies'];
var hobbies = ['napping', 'eating', 'barking at squirrels']

var dog = {
    name: 'Cat Stevens',
    color: 'Brown',
    size: 'Large',
    breed: 'Airedale Terrier',
    age: 2,
    numOfToys: 3,
    numOfLives: 1,
    isFluffy: true,
    isEatingMyCouch: true,
    isHungry: false,
    toys: ['squeeky fish', 'a big rope', 'sticks n stuff'],

    bark() {
        console.log('Bark!!');
    }
};

var cat = {
    name: 'Dwight Schrute',
    color: 'black and white',
    size: 'tiny',
    breed: 'mix',
    age: 6,
    numOfToys: 3,
    numOfLives: 9,
    isFluffy: false,
    isEatingMyCouch: false,
    isHungry: true,
    toys: ['bugs', 'other cats', 'some shiny thing on the end of a string'],

    meow() {
        console.log('meow!');
    },

    eatFood(food) {
        if (food) {
            console.log('Time to eat!');
        } else {
            console.log('Nah, I\'m good');
        }
    }
}

var car = {
    make: 'Dodge',
    model: 'Ram',
    color: 'Beige',
    year: 2006,
    miles: 143000,
    isTurnedOn: false,
    needsOilChange: false,
    issues: ['slow leak in passenger front tire', 'paint peeling', 'cracked windsheild', 'dents everywhere', 'cd player broken'],
    isPathetic: true,

    turnEngineOn(engine) {
        if (engine) {
            console.log('Floor it!');
        } else {
            console.log('Need to crank it first!');
        }
    },

    timeToTradeItIn(condition) {
        if (condition) {
            console.log('Time to get a new car you slob.');
        } else {
            console.log('Sure, keep driving a clunker.');
        }
    }
};

dog.bark();
cat.meow();
cat.eatFood(cat.isHungry);
car.turnEngineOn(car.isTurnedOn);
car.timeToTradeItIn(car.isPathetic);