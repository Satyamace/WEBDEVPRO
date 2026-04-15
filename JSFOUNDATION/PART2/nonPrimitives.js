const username = {
    "derive name": "Striker",
  firstname: "Satyam",
  isLoggedin: true,
};
// Despite being a const keyword it is changed because the memory space is reserved only, whereas the value inside it are mutable.
username.firstname = "Mr. S";
username.lastname = "Trivedi";

// console.log(username.firstname);
// console.log(username.lastname);
// console.log(username);
// console.log(typeof username);

//If there is space in datatype declaration like "derive name" it could be accessed using [], other datatypes also can be accessed through this.

// console.log(username["derive name"])

let today = new Date()
// console.log(today.getDate());

//Arrays

let heroes = ["Ironman", "Spiderman", "Thor", "Hulk"]

// console.log(heroes[0]);

let isValue = "2abc"
console.log(Number(isValue) + 1);
console.log(1 + "1");
console.log(1 -  "1");

console.log(Number(null));



