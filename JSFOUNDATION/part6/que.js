// ===============================
// PARENT CONSTRUCTOR
// ===============================

// Constructor function named Animal.
// It acts as a blueprint for creating Animal objects.
function Animal() {
  // Empty constructor.
  // If needed, properties could be initialized here:
  // this.type = "Animal";
}

// ===============================
// ANIMAL PROTOTYPE METHOD
// ===============================

// Every function automatically gets a prototype object.
//
// Here we add a method named "speak" to Animal.prototype.
//
// Storing methods on the prototype means:
// - One copy of the method is shared by all Animal objects.
// - Memory is saved because each object doesn't get its own copy.
Animal.prototype.speak = function () {
  return "Animal speaking";
};

// ===============================
// CHILD CONSTRUCTOR
// ===============================

// Constructor function named Dog.
// It will inherit from Animal.
function Dog() {
  // Execute the Animal constructor.
  //
  // call() is a METHOD available on functions.
  //
  // "this" refers to the new Dog object being created.
  //
  // If Animal had properties like:
  // this.type = "Animal";
  //
  // then those properties would be copied
  // onto the Dog object.
  Animal.call(this);
}

// ===============================
// PROTOTYPE INHERITANCE
// ===============================

// Create a brand-new object.
//
// That new object's prototype will be:
// Animal.prototype
//
// Then assign that object to Dog.prototype.
//
// Result:
//
// Dog.prototype
//        ↓
// Animal.prototype
//
// This is the line that creates inheritance.
Dog.prototype = Object.create(Animal.prototype);

// ===============================
// FIX CONSTRUCTOR PROPERTY
// ===============================

// After the previous line,
// Dog.prototype was replaced.
//
// Therefore Dog.prototype.constructor
// now incorrectly points to Animal.
//
// Fix it so that:
//
// Dog.prototype.constructor === Dog
Dog.prototype.constructor = Dog;

// ===============================
// DOG-SPECIFIC METHOD
// ===============================

// Add a method named bark to Dog.prototype.
//
// Every Dog object can use bark().
Dog.prototype.bark = function () {
  return "Woof!";
};

// ===============================
// CREATE OBJECT
// ===============================

// new Dog() performs several steps:
//
// 1. Creates an empty object.
// 2. Sets its prototype to Dog.prototype.
// 3. Executes Dog constructor.
// 4. Returns the object.
let dog = new Dog();

// ===============================
// METHOD LOOKUP: SPEAK
// ===============================

// JavaScript searches:
//
// dog
//  ↓
// Dog.prototype
//  ↓
// Animal.prototype   <-- found here
//
// speak() exists in Animal.prototype
// because Dog inherited from Animal.

/*



console.log(dog.speak());




*/
// Output:
// Animal speaking

// ===============================
// METHOD LOOKUP: BARK
// ===============================

// JavaScript searches:
//
// dog
//  ↓
// Dog.prototype   <-- found here
//
// bark() exists directly
// inside Dog.prototype.
/*   



console.log(dog.bark());



*/
// Output:
// Woof!

// =========================================
// FINAL PROTOTYPE CHAIN
// =========================================
//
// dog
//  ↓
// Dog.prototype
//      bark()
//      constructor
//  ↓
// Animal.prototype
//      speak()
//  ↓
// Object.prototype
//  ↓
// null
//
// =========================================


/*
Task 1: Create a Functional Constructor

Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".



Task 2: Handle Errors

Modify the Person constructor to throw an error if the age is not a positive number.

*/
function Person(name, age) {
  if (age <= 0) {
    throw new Error("Age must be a positive number");
  }
  this.age = age;
  this.name = name;
  this.greet = function () {
    return `Hello, my name is ${this.name}`;
  };
}
let Alice = new Person("Alice", 114)
// console.log( Alice.name);
// console.log(Alice.age);

/*
Task 1: Class Inheritance

Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".



Task 2: Method Overriding in Inheritance

Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".



Task 3: Static Methods in Classes

Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.
*/
// ===============================
// Parent Class
// ===============================
class Vehicle {

    // Runs when a Vehicle object is created
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // Returns vehicle details
    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }

    // Parent class method
    move() {
        return "The vehicle is moving";
    }

    // Static method belongs to Vehicle class itself,
    // not to Vehicle objects
    static isVehicle(obj) {

        // Checks whether obj is a Vehicle
        // or a class derived from Vehicle
        return obj instanceof Vehicle;
    }
}


// ===============================
// Child Class
// ===============================

// Car inherits everything from Vehicle
class Car extends Vehicle {

    // Overrides Vehicle's move() method
    move() {
        return "The car is driving";
    }

    // Car-specific method
    startEngine() {
        return "Engine started";
    }
}


// ===============================
// Create Object
// ===============================

// Car automatically gets Vehicle's constructor
let car = new Car("Toyota", "Camry");


// ===============================
// Using Inherited Methods
// ===============================

// Inherited from Vehicle
// console.log(car.getDetails());
// Output: Make: Toyota, Model: Camry

// Defined inside Car
// console.log(car.startEngine());
// Output: Engine started

// Car's version replaces Vehicle's version
// console.log(car.move());
// Output: The car is driving


// ===============================
// Static Method
// ===============================

// Call static method using class name
// console.log(Vehicle.isVehicle(car));
// Output: true

// Plain object is not a Vehicle
// console.log(Vehicle.isVehicle({}));
// Output: false



/* 
  Task 1: Encapsulation Using Getters and Setters

Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.


*/

class BankAccount {
  constructor(balance = 0) {
    if(balance < 0){
      throw new Error("Initial balance cannot be negative")
    }
    this._balance = balance;
  }
  get balance() {
    return this._balance;
  }
  set balance(value) {
    if (value < 0) {
      throw new Error("Balance cannot be negative");
    } else {
      this._balance = value;
    }
  }
  deposit(amount) {
    if(amount <= 0){
      throw new Error("Deposite amount must be positive")
    }else{
      this._balance += amount
      console.log(`Deposited: Rs.${amount}, New Balance: Rs.${this._balance}`);
      return this._balance
    }
  }
  withdraw(amount) {
    if(amount <= 0){
      throw new Error(`Withdraw amount must be positve`)
    }
    if (amount > this._balance) {
      throw new Error(`Insufficient funds, Current Balance: Rs.${this._balance}`);  
    } else {
      this._balance = this._balance - amount;
      console.log(`Withdrew: Rs.${amount}, New Balance: Rs.${this._balance}`);
      return this._balance
    }
  }
}
let account = new BankAccount(1000)
console.log(`Initial Balance: Rs.${account.balance}`);  //1000
account.deposit(5000)  //6000
account.withdraw(4000) //2000

// Using setter directly

account.balance = 6000
console.log(`After setter: Rs.${account.balance}`);
account.withdraw(700)

/*
Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.
*/
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();           //super() keyword is used, when there is constructor function in child class, so it calls parent class constructor.
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
  area() {
    return this.length * this.width;
  }
}
let circle = new Circle(5);
let rectangle = new Rectangle(5, 8);
console.log(circle.area());
console.log(rectangle.area());
