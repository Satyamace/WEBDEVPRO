let car = {
  brand: "Tata",
  model: "Safari",
  year: 2001,
  start: function () {
    return `${this.brand} started making ${this.model} in year ${this.year}.`;
  },
};
// console.log(car.start());
// we can't have more copies, so we need constructor function for making more objects.//

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let satyam = new Person("satyam", 25);
// console.log(satyam.name, satyam.age);

/*
Prototyple chain:- we can access the whole prototyple chain and can inject our methods.
*/

function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} bark.`;
};
let dog = new Animal("Dog");
// console.log(dog.speak());

// or

Array.prototype.satyam = function () {
  return `Custom method ${this}`;
};
let myArray = [1, 2, 3];
// console.log(myArray.satyam());
// output:- Custom method 1, 2, 3
let myNewarray = [1, 2, 3, 4, 5];
// console.log(myNewarray.satyam());
/*
prototyple chain effectively uses the memory and each object gets the same function 
*/

class vehicle {
  constructor(make, model) {
    //class has special method constructor,used when we need new keyword.
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}
// functions became methods inside class, without the function keyword
// extend used for inheritance as Car has access of methods from vehicle
class Car extends vehicle {
  drive() {
    return `${this.make}: This is an inherited property. (Inheritance example) `;
  }
}

let myCar = new Car("TATA", "Safari");
// console.log(myCar.start());
// console.log(myCar.drive());

// Encapsulation

class BankAccount {
  #balance = 0; //# is used for encapsulating data.It cant be accessed outside the class.

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    //A custom method is used to access #balance outside class.
    return `Rs. ${this.#balance}`;
  }
}
let account = new BankAccount();
//  console.log(account.deposit(2022));
//  console.log(account.getBalance());
// output:- 2022
// output:- Rs. 2022
//
//Abstraction

/*we can get the only functionalities that we want skipping the other processes, like database calling other complex calculation.*/
class CoffeeMachine {
  start() {
    //call db
    //filter value
    return `starting the machine ...`;
  }
  brewCoffee() {
    //complex calculation
    return `Brewing coffee`;
  }
  pressButton() {
    let Bone = this.start();
    let Btwo = this.brewCoffee();
    return `${Bone} ${Btwo}`;
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
/*we can do this both process of start and brewCoffee from one button for that we have make another method and store these two in it.*/
// console.log(myMachine.pressButton());
// output:-starting the machine ... Brewing coffee

// Polymorphism

class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguin can't fly..`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());
/*output:-Flying....
          Penguin can't fly..
Here method's are of same name but the behaviour is different.
*/

// static method

class Calculator {
  static add(a, b) {
    //static are method only be called by class itself.
    return a + b;
  }
}
// let Calc = new Calculator() ->we can't do it here as Calc.add is not fun.
// console.log(Calc.add(2, 3));->this will work without `static` keyword.
//if we want to use it directly call the class like below:->
// console.log(Calculator.add(2, 457));
// output:- 459

// Getters and setters

class Employee {
  constructor(name, salary) {
    this._salary = salary;
  }

  get salary() {
    //A getter is simply:A function that runs when we read a value.
    return this._salary;
  }

  set salary(value) {
    if (value < 0) {
      console.log("Invalid salary"); //A setter is simply:A function that runs when we assign a value.
    } else {
      this._salary = value;
    }
  }
}

let emp = new Employee("Nikhil", 50000); //used for getter

// console.log(emp.salary);

emp.salary = 60000; //used for setter

// console.log(emp.salary);

/* Now use of encapsulation `#`.
 */

class employee {
  #salary;

  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    /*If you actually want to see the real private salary through the getter, change the getter to:
    get salary() {
  return this.#salary;
} */
    return "Access denied";
  }

  set salary(value) {
    if (value >= 0) {
      this.#salary = value;
      console.log("Salary updated successfully");
    } else {
      console.log("Invalid salary");
    }
  }
}

let Emp = new employee("Nikhil", 50000);

// GETTER
console.log(Emp.salary);

// SETTER
Emp.salary = 60000;

// SETTER with invalid value
Emp.salary = -1000;