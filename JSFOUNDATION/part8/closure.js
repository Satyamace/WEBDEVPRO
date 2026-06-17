function outer(){
    let counter = 4
    return function(){
        counter++
        return counter
    }
}
let increment = outer()
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())

/*
Closure is a function, they remember the environment in which they were created.
output:
5
6
7
8
9
*/