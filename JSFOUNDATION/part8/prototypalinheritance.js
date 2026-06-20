function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
let sat = new Person("Satyam");
sat.greet();

//Object inherit property from other objects via protype chain //
