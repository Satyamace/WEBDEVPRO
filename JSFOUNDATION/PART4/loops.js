/*
1. Write a while loop that calculates the sum of all number from 1 to 5 and stores the result in a variable named sum.
*/

let sum = 0;
let i = 1;
while (i <= 5) {
  sum = sum + i;
  i++;
}
// console.log(sum);

/*
3. Write a while loop that counts down from 5 to 1 and store the numbers in an named countdown.
*/

let countdown = [];
let j = 5;
while (j > 0) {
  countdown.push(j);
  j--;
}
// console.log(countdown);

/*
3. Write a do while loop that prompts a user  to enter their favorite tea type until they enter stop ..
   Store each tea type in an array named teacollection .
*/

let teacollection = [];
let tea = "abc";

// do {
//   tea = prompt(`Enter your favourite tea (type "stop" to finish)`);

//   if (tea != "stop") {
//     teacollection.push(tea);
//   }
// } while (tea != "stop");
 //done in console of web browser prompt not supported here in Vs code.

/*
4. Write a do while loop that adds number from 1 to 3 and stores the result in a variable named total.
*/

let total = 0;
let k = 1;

do {
  total = total + k;
  k++;
} while (k <= 3);
console.log(total); 

/*
5. Write a for loop that multiplies each element in the array [2,4,6] by 2 and stores the results in a new array named multipliedNumbers.
*/

let multipliedNumbers = []
let numbers = [2, 4, 6]
for (let l = 0; l < numbers.length; l++ ) {
  // takenumbers = numbers[l] * 2
  // multipliedNumbers.push(takenumbers)

  multipliedNumbers.push(numbers[l] * 2)
}
console.log(multipliedNumbers);

/*
6. Write a for loop that lists all the cities in the array [paris, new york, tokyo, london] and stores each city in a new array named citylist.
*/
 
let cityList = []
let cities = ["Paris", "New York", "London"]

for (let m = 0; m < cities.length; m++) {
  const myCities = cities[m];
  cityList.push(myCities)
  
}
console.log(cityList);

