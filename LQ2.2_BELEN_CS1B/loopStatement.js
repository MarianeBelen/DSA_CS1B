/*
BELEN, Mariane I.      Activity No:LQ1
BSCS 1B
*/
//Loop Statement

//Create let variable print_count & use Number(prompt()) to convert the promt to INT.
let print_count = Number(prompt("Enter any number"));
//create another let variable dog_breed, to store dog breed use prompt
let dog_breed = prompt("Enter the Dog Breed");

//Use for loop to make the dog breed repeated according to the print count.
for(let i = 0; i < print_count; i++){
    console.log(dog_breed);
}