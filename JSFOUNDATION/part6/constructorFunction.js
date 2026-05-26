function Person(name, age) { 
    this.name = name
    this.age = age
}
/*constructor function first letter always capital as it increases effective readablity, this.name is users varibale right hand sides are coming from parameteres.*/

function Car(company, model) {
    this.company = company
    this.model = model
}
let myCar = new Car("Toyota", "Camry")
// console.log(myCar);
let newCar = new Car("Tata", "Safari")
// console.log(newCar);
/* new keyword is important for making an object, both new made different objects.Behind the scene Car is same.this keyword refers to the newly created objects inside a constructor function.*/

function Tea(type) {
    this.type = type
    this.description = function(){
        return `This is a cup of ${this.type}`
    }
}
let lemonTea = new Tea("lemonTea")
// console.log(lemonTea.description());
// ouput: This is a cup of lemonTea

function Animal(species) {
    this.species = species
}
/* Now that we know that a cosntructor function `Animal` exists, we can take this function later on or import in any file later on*/

Animal.prototype.sound = function() {
    return `${this.species} makes a sound`
}
let dog = new Animal("Dog")
// console.log(dog.sound());

let cat = new Animal("cat ")
// console.log(cat.sound());    output: cat makes a sound

/*
Defining some errors
 */

function Book(language) {
    if (!new.target) {
        throw new Error("Book must be called with `new` keyword.");
        
    }
    this.language = language
}
let english = new Book("English")
let hindi = Book("Hindi")
