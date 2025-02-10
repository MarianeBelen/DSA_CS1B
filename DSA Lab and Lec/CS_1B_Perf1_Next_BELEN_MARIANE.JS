/* Name: Mariane Belen
BSCS 1B DATA STRUCTURES AND ALGORITHM
Activity No. Perf1 */

Const greetings = 'Hello!';
Let name = 'Mariane';
var age = 18;
age = 19

console.log(greetings)
console.log(name)
console.log(age)

/* const, let, and var has their differences. const canot be updated or re-declared,
neither can be reassign. If we look at the let variable in the console it was able to reassign,
and it is the same with our var variable. The let variable can be updated but cannot be re-declared.
The const cannot be update and  re-declare. While the var it can do both, it can be re-declared
and updated */

// 2. Falsy Values

/* Falsy values are considered false when ever we are considered false when ever we are 
encountering Boolea context. In rules of JavaScript, Boolean has the equevalent to either true
and false, where there comes the truthy and falsy value. 0, -0, false, null, undefined,
NaN, and empty strings, are all falsy values than these those are truty. Using emppty
structures is not is not applicable in Falsy, and bigInt 0 (On) is also falsy.*/

// Example 1
if (null){ // using a null
    console.log('Its a Truthy Value!')
}else{
    console.log('Its a Falsy Value')
}

// Example 2
let age; // using unidentified
if (age === unidentified){
    console.log('Age is unidentified')
}

// Example 3
if(''){ // using an empty string
    console.log('Truthy Value')
} else {
    console.log('Falsy Value')
}