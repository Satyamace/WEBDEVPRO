//1.
let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer
};
let tomHardware = {};


console.log(`lenovo`,lenovo.__proto__,); /*double undersocre -> dunder prototype. Used to access any prototype for any object or anything*/

//2.
let genericCar = {tyres: 4}
let tesla = {
    driver: "AI"
}
// new way accessing the protypes of object considered the better way.
Object.setPrototypeOf(tesla, genericCar)
console.log(`tesla`, Object.getPrototypeOf(tesla) );
