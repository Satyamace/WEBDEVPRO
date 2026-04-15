// Checking if a number is greater than another number:

let num1 = 5;
let num2 = 8;

console.log("I am regular upper code");

if (num1 < num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("Nope, num1 is NOT greater");
}

console.log("I am regular bottom code");

// Checking if a string is equal to another string:

let username = "Satyam";
let anotherUsername = "Satyam";

if (username == anotherUsername) {
  console.log("Pick another username");
} else {
  console.log("You can pick this username");
}

// Checking if a variable is number or not:

let score = 44;

if (typeof score === "number") {
  console.log("Yep, this is a number");
} else {
  console.log("No, this is not a number");
}

// Check if a boolean value is true or false:

let isTeReady = false;

if (isTeReady) {
  console.log("Tea is ready");
} else {
  console.log("Tea is NOT ready");
}

// Check if array is empty or not:

let items = ["item1"];

console.log(items.length);

if (items.length == 0) {
  console.log("array is empty");
} else {
  console.log("array is not empty");
}
