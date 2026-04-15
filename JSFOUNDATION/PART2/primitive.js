//Every single primitve datatype can be converted to the adavance/object/non-primitive data-type.

// Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance)
// console.log(anotherBalance.valueOf())

// console.log(typeof balance);
// console.log(typeof anotherBalance)

//Boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// Null and Undefined

let firstname = null;
let lastname = undefined;
// console.log(firstname);
// console.log(lastname)

// String

let myString = "Hello";
let myString1 = "Hola";
let username = "Satyam";

let oldGreet = myString + " " + "Satyam";
console.log(oldGreet);

let greetMessage = `Hello ${myString1} !! @@ ##`;    //new way with BACKTICKS..
// console.log(greetMessage);
let demoOne = `Value is ${2 * 9}`
// console.log(demoOne)

// Symbol always unique

let sm1 = Symbol("satyam")
let sm2 = Symbol("satyam")

console.log(sm1 == sm2)



