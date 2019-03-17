/*
Write a function called fizzbuzz that accepts a single argument n. 
fizzbuzz should return "Fizz" if n is a multiple of 3, "Buzz" if n is a multiple of 5,
“FizzBuzz” if n is a multiple of both 3 and 5, 
and n if n is a multiple of neither 3 nor 5.
*/

function fizzBuzz(n){
    if (n >=3){
        return "Fizz"
    }
    if (n >=5){
        return "Buzz"
    } 
    if (n>=3 && n>=5){
        return "FuzzyBuzzy"
    }
    if (n>= 5 || n>=3){
        return n
    }
}
console.log(fizzBuzz(23))