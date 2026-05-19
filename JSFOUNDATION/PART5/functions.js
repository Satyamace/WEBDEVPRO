/*
1. Write a function named 'makeTea' that takes one parameter, 'typeOfTea', and returns a string like '"Making green tea"' when called with '"green tea"'. Store the result in a variable named teaOrder.
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");
console.log(teaOrder);

/*
2. Create a function named orderTea that takes one parameter, teaType. Inside this function create another function named confirmOrder that return a message like "Order confirmed for chai". Call confirmOrder from within orderTea and return the result.
*/
function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);

/*
3. Write an arrow function named `calculateTotal` that takes two parameter: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

const calculateTotal = (price, quantity) => {
  return price * quantity;
};
let totalCost = calculateTotal(300 * 500);

//const calculateTotal = (price, quantity) =>  price * quantity;
// if code is one liner and the parameter are in arrow line, it does not need return and curly braces.
//let totalCost = calculateTotal(300 * 500);

/*
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`.
Return the result of calling `makeTea`.
*/
function makeTea(typeOfTea){
    return `makeTea: ${typeOfTea}`
}

function processTeaOrder(teaFunction){
   return teaFunction("earl grey")
}

let order = processTeaOrder(makeTea)
console.log(order);

/* Here a function is accepting other function as argument and is called higher-order function, even its returning a function it is a higher order function, In this code processTeaOrder(makeTea) with argument makeTea, is assigned to order now parameter of processTeaOrder teaFunction becomes makeTea which is being returned with argument "earl grey". Now makeTea parameter typeOfTea becomes earl grey and is returned, which will be printed through order variable.*/


/* 
5. Write a function named `createTeaMaker` that returns another function . The returned function should take one parameter, `teaType` , and return a message like `"Making green tea"`.
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/
 
function createTeaMaker(){
const score = 100
    return function satyam(teaType){
        return `Making ${teaType} ${score}`
    }
}
let teaMaker = createTeaMaker()
//console.log(teaMaker("green tea")); or
let result = teaMaker("green tea")
console.log(result);

/*
if we gave parameter to createTeaMaker called name and pass an argument as Satyam then we can access it inside createTeaMaker returned function liker return `Making ${teaType} ${name}`
this will give an output like :- Making green tea Satyam or we can make a varibale let score =200 inside the createTeaMaker and still access it similary. Even if there is another function inside the functionn it will behave same this is called 'LEXICAL SCOPE'.
*/




