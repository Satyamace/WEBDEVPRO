/*
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`.
    Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];

// OR
// let teaFl = new Array("great")

let firstTea = teaFlavors[0];

/*
2. Declare an array named `cities` containing "london", "Tokyo", "Paris", and "New York".
   Access the third element in the array and store it in a variable name 'favoriteCity'.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];

let favoriteCity = cities[2];

// 3. You have an array named "teaTypes" containing "herbal Tea", "White Tiger" and "masala chai".
//    Change the second element of the array to "jasmine tea".

let teaTypes = ["herbal tea", "white tea", "masala chai"];

teaTypes[1] = "jasmine tea";

/*
4. Declare an array named "citiesVisited" containing "Mumbai" and "Sydney".
  Add "Berlin" to the array using the "push method".
  */

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
// console.log(citiesVisited);`

/*
5. You have an array named 'teaOrder' with "chai" "iced tea" "matcha" and "earl grey".
   Remove the last element of the array using the "pop" method and store it in a variable named "lastOrder"
   */
let teaOrder = ["iced tea", "chai", "matcha", "earl grey"];
let lastOrder = teaOrder.pop();
// console.log(teaOrder);
// console.log(lastOrder);

/*
6. You have an array named "popularTeas" containing "green tea" "oolong tea", and "chai".
   Create a soft copy of this array named "softCopyTeas".
   */

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);

/*

7. You have an array named "topcities" containing "Berlin", "Singapore", and "Newyork".Create a hardcopy of this array named "hardcopycities".
*/

let topCities = ["Berline", "Singapore", "New York"];
let hardCopyCities = [...topCities];

// let hardCopyCities = topCities.slice()    /*-->> Another way*/
topCities.pop();
console.log(hardCopyCities);

/*
8. You have two arrays: "europeanCities" contain "Paris" and "Rome" and "asianCities" contains "Tokyo"
 and "Bangkok".
      Merge these two arrays into a new array named "worldCities".
*/
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);


/*
 9. You have an array named "teaMenu" containing "masalachai" "oolong tea" "green tea " "earl grey". 
   Find the length of array and store it in a variable name "menulength".
   */

   let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"]
   let menuLength = teaMenu.length
    
   /*
   10.You have an array named 'cityBucketList' contain "Kyoto", "london", 'CapeTown' and 'Vancouver'.
   Check if "london" is in the array and store the result in variable named "isLondonInList".
   */
let cityBucketList = ["Kyoto", "London", "CapeTown", "Vancouver"]
let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList);   