const person = {
    name: "Satyam",
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}
person.greet()//output:Hi, I am Satyam

const greetFunction = person.greet
greetFunction()// output: Hi, I am undefined. Because `this` is lost, there is no object before dot, and we cant use person.greetFunction() because greetFunction is not inside person..//

/**Use of bind */
const boundGreet = person.greet.bind({name: "John"})
boundGreet()// output: Hi, I am John

/**call() method
 * we can still use call() if there is only one object.like in previous ex. person.greet.call(person).
 * if function is outside of the object then greet.call(person).
 *if there are two objects one is : const person2 = { name: Rahul}, then person.greet.call(person2) will give Hi, I am Rahul because call() forces this to become person2.
 * Why was call() created then?
 Because sometimes a function is not inside an object, or you want the same function to work with different objects.
 One function , multiple objects.
*/


const person1 = {
  name: "Satyam",
  age: 24
};

const person2 = {
    name: 'Nikhil',
    age: 25
}

function introduce(city, state) {
    console.log(
        `My name is ${this.name}, I am ${this.age} years old, and I live in ${city}, ${state}`
    );
    
}

// introduce.call(person1, "Sheohar", "Bihar")
// introduce.call(person2, "Bhabhua", "Bihar")
introduce.apply(person1, ["Sheohar", "Bihar"]);
/**
 * apply() is similar to call() but in call we pass arguments one by one, but in apply arguments are passeda as an array..
 * introduce.apply(person1, ["Sheohar", "Bihar"]);
 */