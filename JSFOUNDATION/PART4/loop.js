/* 
1. Write a for loop that loops through the array [green tea, black tea , chai , oolong tea] and stops the loop when it finds chai.
    Store all teas before chai in a new array named selectedTeas.
*/

let Tea = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < Tea.length; i++) {
  if (Tea[i] == "chai") {
    break;
  }
  selectedTeas.push(Tea[i]);
}
// console.log(selectedTeas);

/*
2. Write a for loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris".
        Store the other cities in a new array named "visitedCities".
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris" || cities[i] === "paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

/*
3. Use a for-of loop to iterate through the array [1, 2, 3, 4, 5] and stop when the number 4 is found.
   Store the numbers before 4 in an array named smallNumbers.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

/*
4. Use a for of loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip herbal tea.
Store the other teas in an array named preferredTeas.
*/

let tea = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const teatype of tea) {
  if (teatype === "herbal tea") {
    continue;
  }
  preferredTeas.push(teatype);
}
// console.log(preferredTeas);

/*
6. Use a for-in loop to loop through an object containing city population.
   Stop the loop when the population of Berlin is found and store all previous cities populations in a new object named cityPopulations.
    
   let citiesPopulation = {
   "london": 8900000, "New York": 8400000, "Paris": 2200000, "Berlin": 3500000}
   Works for objects.
*/
let citiesPopulation = {
  london: 8900000,
  Berlin: 3500000,
  "New York": 8400000,
  Paris: 2200000,
};
let cityNewPopulations = {};
//  console.log(Object.keys(cityPopulation));
//  console.log(Object.values(cityPopulation));

for (const A in citiesPopulation) {
  if (A === "Berlin") {
    break;
  }

  cityNewPopulations[A] = citiesPopulation[A]; //object with square bracket key, access the value of the object.
}

// console.log(cityNewPopulations);

/*
6. Use a for-in loop to loop through an object containing city populations.
   Skip any city with a population below 3 million and store the rest in a new object named "largeCities".
   
   let worldCities = {
   "Sydney": 5000000,
   "Tokyo": 9000000,
   "Berlin": 3500000,
   "Paris": 2200000
   };

*/

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = {};

for (const B in worldCities) {
  if (worldCities[B] < 3000000) {
    continue;
  }
  largeCities[B] = worldCities[B];
}
// console.log(largeCities);

/*
7.Write a forEach loop that iterates through the array ["early grey", "green tea", "chai", "oolong tea"].
  Stop the loop when "chai" is found , and store all previous tea types in an arrays named 'availableTeas'.
  Works for arrays only.
*/

let teatypes = ["early grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teatypes.forEach(function (tea) {
  if (tea == "chai") {
    return;
  }
  availableTeas.push(tea);
});
console.log(availableTeas);



/*
8. Write a forEach loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"].
   Skip "Sydney" and store the other cities in a new array named 'traveledCities'.
*/

let oldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

oldCities.forEach(function (city) {
  if (city == "Sydney") {
    return;
  }
  traveledCities.push(city);
});
console.log(traveledCities);

/*
9. Write a for loop that iterates through the array [2, 5, 7, 9] .
   Skip the value '7' and multiply the rest by 2. Store the results in a new array named 'doubledNumbers'.
*/
 
let N = [2, 5, 7, 9];
let doubledNumbers = []

for (let j = 0; j < N.length; j++) {
  if (N[j] === 7) {
    continue
  }
  const newN = N[j] * 2;
  doubledNumbers.push(newN)
}
console.log(doubledNumbers);

/*
10. Use a for-of loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] and stop when the length of the current tea name is greater than 10. 
Store the tea iterated over in an array named shortTeas.
*/

let drink = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = []

for (const newDrink of drink) {
  if (newDrink.length > 10) {
    break
  }
  shortTeas.push(newDrink)
}
console.log(shortTeas);
//new