function* numberGenerator(){
    yield 1
    yield 2
    yield 3
}

let gen = numberGenerator() //This is generator object.
let gen2 = numberGenerator() 


console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);

//next() is iterator it keeps tracks of all the things. There are only 3 yeilds so for the fourth one it gives the undefined.