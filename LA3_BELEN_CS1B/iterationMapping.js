/*
Name: BELEN, Mariane I.
Couse&Year: BSCS 1B
Activity No: LA3
file: iterationMapping.js
*/
//Create let variable max_limit & use prompt to ask the limit for the double loop.
let max_limit = parseInt(prompt('Please enter the limit of the double loop: '));

console.log('Result:') //log 'Result' for just highlight or title
//Create the double loop & initialize to compare max limit into 0
for(let i = 0; i <= max_limit; i++){
    for (let j = 0; j <= max_limit; j++){
        //Create let variable sum to add values of the counters of each iterators
        let sum = i + j;
        //log using backticks & ${}
        console.log(`[${i}] [${j}] Added value is ${sum}`)
    }
}