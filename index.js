// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function (edible) {
  if (this.stomach.length < 10) {
    this.stomach.push(edible);
  }
};
Person.prototype.poop = function () {
  this.stomach = [];
};
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

const Jesus = new Person("Jesus", 50);
console.log(Jesus.toString());
Jesus.eat("bread");
console.log(Jesus.stomach);
Jesus.poop();
console.log(Jesus.stomach);
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, mpg) {
  this.model = model;
  this.milesPerGallon = mpg;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function (gallons) {
  this.tank = this.tank + gallons;
};
Car.prototype.drive = function (dist) {
  const driveableMiles = this.tank * this.milesPerGallon;
  if (dist <= driveableMiles) {
    this.odometer = this.odometer + dist;
    this.tank = this.tank - dist / this.milesPerGallon;
  } else {
    this.odometer = this.odometer + driveableMiles;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles`;
  }
};

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  
  1. Window Binding - In the global scope, the value of 'this' will be the window/console Object;
  
  2. Implicit Binding - When a function is called by a preceding dot, the object to the left is 'this'. (object?, not key?)
  
  3. Explicit Binding - Whenever .call, .apply, or .bind is used, 'this' is explicitly defined.
  
  4. New Binding - When a constructor function is used, 'this' refers to the specific instance of the object that is created and returned by the constructor function.
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
  console.log("its working!");
  return "bar";
}
foo();
module.exports = {
  foo,
  Person,
  Car,
  Baby,
};
