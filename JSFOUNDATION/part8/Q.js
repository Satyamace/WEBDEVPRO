/**
 * Asynchronous JavaScript with Event Loop
Task 1: Simulating Asynchronous Behavior

Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.

Use setTimeout to simulate this behaviour.
*/

function simulateAsyncTask() {
  console.log("Task started");
  setTimeout(function () {
    console.log("Task finished");
  }, 2000);
}
// simulateAsyncTask();

/**Task 2: Simulate Multiple Async Tasks with Different Delays

Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).

Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.
 */

function simulateMultipleTasks() {
  setTimeout(function () {
    console.log("Task 1 finished");
  }, 1000);
  setTimeout(function () {
    console.log("Task 2 finished");
  }, 2000);
  setTimeout(function () {
    console.log("Task 3 finished");
  }, 3000);
}
// simulateMultipleTasks()

/*
Task 3: Async Task with Callback Function

Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).

Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.
 */

// function fetchDataWithCallback(callback) {

// console.log("Hello");

//   setTimeout(function () {
//     callback("Fetched data");
//   }, 2000);
// }

// function check(msg) {
//   console.log("Hi");
//   console.log(msg);
// }

// fetchDataWithCallback(check)

// output:
//  Hello
//  Hi
// Fetched data

function fetchDataWithCallback(callback) {
  console.log("A");

  setTimeout(function () {
    callback("Fetched data");
  }, 2000);

  console.log("B");
  console.log("C");
}

// console.log("D");

function check(msg) {
  console.log("E");
  console.log(msg);
}

// console.log("F");
// fetchDataWithCallback(check);
// console.log("G");

/**
 * Task 1: Creating a Counter Using Closures

Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.
 */
function createCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
let now = createCounter();
console.log(now());
console.log(now());
console.log(now());
console.log(now());

/**
 * 
 * Task 2: Rate Limiter Function

Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".
 */

function rateLimiter(fn, limit) {
  let lastcall = 0;
  return function (...args) {
    let currentTime = Date.now();
    if (currentTime - lastcall >= limit) {
      lastcall = currentTime;
      return fn(...args);
    }
    return `Rate limit exceeded`;
  };
}

function greet(name) {
  return `Hello ${name}`;
}

const limitedGreet = rateLimiter(greet, 3000);
console.log(limitedGreet("Satyam"));
console.log(limitedGreet("Nikhil"));

setTimeout(() => {
  console.log(limitedGreet("Nikhil"));
}, 3000);

/*
### Quick Note: Rate Limiter, Closures & Execution Flow

A **rate limiter** is a higher-order function that takes a function (`fn`) and a time limit (`limit`) and returns a new function that controls how often `fn` can run. When `rateLimiter(greet, 3000)` is executed, `rateLimiter` runs **once**, creates `lastCalled = 0`, and returns a new function. This returned function is stored in `limitedGreet`, and `rateLimiter` immediately finishes after the `return` statement. However, the returned function still remembers `fn` and `lastCalled` through a **closure**.

⭐ **Execution Flow (Important):**

1. JavaScript creates `rateLimiter` and `greet` in memory.
2. `const limitedGreet = rateLimiter(greet, 3000)` executes.
3. Inside `rateLimiter`: `fn = greet`, `lastCalled = 0`.
4. `rateLimiter` returns a new function and finishes.
5. `limitedGreet` now holds the returned function.
6. `limitedGreet("Satyam")` calls the returned function (not `rateLimiter`).
7. The returned function remembers `fn` and `lastCalled` via closure.
8. It checks the time limit and eventually executes `fn(...args)`, which becomes `greet("Satyam")`.

**Key takeaway:** `let A = B()` means "execute `B()`, take whatever it returns, and store that returned value in `A`." In this case, `limitedGreet` stores the function returned by `rateLimiter`, not the result of calling `greet`.
*/

//Task 3: Memoization Function
//Ans:-Memoization is a technique where a function remembers the results of previous calculations. If the function is called again with the same input, it returns the stored result instead of recalculating it.

// Question:-> Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log("Returning from cache");
      return cache[key];
    } else {
      console.log("Calculating result");

      const result = fn(...args);

      cache[key] = result;

      return result;
    }
  };
}

function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(10, 20));
console.log(memoizedAdd(10, 20));

/*

Task 1: Create Inheritance Using Prototypes

Create a constructor Animal with a method makeSound(). Then create a constructor Dog that inherits from Animal and adds a method bark()

*/

// Parent Constructor
function Animal() {}

// Parent Method
Animal.prototype.makeSound = function () {
  return "Animal sound";
};

// Child Constructor
function Dog() {
  Animal.call(this); // Calls the parent constructor
}

// Inherit Animal's methods
Dog.prototype = Object.create(Animal.prototype);

// Restore constructor
Dog.prototype.constructor = Dog;

// Dog's own method
Dog.prototype.bark = function () {
  return "Woof!";
};

// Create object
const dog1 = new Dog();

// Call methods
console.log(dog1.makeSound()); // Animal sound
console.log(dog1.bark()); // Woof!

/*

Task 2: Shape and Rectangle Inheritance

Create a constructor function Shape that takes color as a parameter and has a method getColor() that returns the color.

Create another constructor Rectangle that inherits from Shape and adds properties width and height. Add a method getArea() to Rectangle that returns the area of the rectangle.

*/

// Parent Constructor
function Shape(color) {
  this.color = color;
}

// Parent Method
Shape.prototype.getColor = function () {
  return this.color;
};

// Child Constructor
function Rectangle(color, width, height) {
  // Inherit properties from Shape
  Shape.call(this, color);

  // Rectangle's own properties
  this.width = width;
  this.height = height;
}

// Inherit Shape's methods
Rectangle.prototype = Object.create(Shape.prototype);

// Restore constructor
Rectangle.prototype.constructor = Rectangle;

// Rectangle's own method
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

// Create object
const rect1 = new Rectangle("Blue", 10, 5);

console.log(rect1.getColor()); // Blue
console.log(rect1.getArea()); // 50

/*
Question:- Create an object person with properties name and a method introduce(). Use the bind() method to ensure the method works correctly when passed to another function
*/

const person = {
  name: "Satyam",

  introduce: function () {
    console.log(`Hi, I am ${this.name}`);
  },
};

// Another function
function greet1(fn) {
  fn();
}

// Bind the method
const boundIntroduce = person.introduce.bind(person);

// Pass it to another function
greet1(boundIntroduce);

/*

Create a function sum() that accepts two numbers and uses this to access a multiplier value. Then, invoke sum() with different contexts using apply(), passing the numbers as an array

*/

function sum(a, b) {
  return (a + b) * this.multiplier;
}

const obj1 = {
  multiplier: 2,
};

const obj2 = {
  multiplier: 5,
};

console.log(sum.apply(obj1, [3, 4])); // 14
console.log(sum.apply(obj2, [3, 4])); // 35

/* Task1:=>
Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.

Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()
*/

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data");
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data");
    }, 1000);
  });
}

async function fetchAllData() {
  const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
  console.log(user);
  console.log(posts);
}
fetchAllData();

/* 

Task 2: Error Handling in Async/Await with Promise.all

Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second.

Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases

*/

// Task 2
function fetchSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  });
}

function fetchFailure() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Failure");
    }, 1000);
  });
}

async function handlePromises() {
  try {
    console.log("success will not get logged, as Promise.all will take one reject and make whole array a reject");
    
    const [success, failure] = await Promise.all([
      fetchSuccess(),
      fetchFailure(),
    ]);
    console.log(success);
  } catch (error) {
    console.log(error);
  }
}
handlePromises();


/*

Task 3: Timeout with Async/Await and Promise.race

Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded".



*/


function fetchWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Timeout exceeded");
    }, timeout);
  });

  return Promise.race([promise, timeoutPromise]);
}

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 5000);
  });
}

fetchWithTimeout(fetchData(), 10000).then((result) => {
  console.log(result);
});
