/*
Name: Belen, Mariane I.
Course&Section: BSCS 1B     
Activity No: LA1 
File: string.js
*/

// Create let variable favActorFirstName & store their 1st name
let favActorFirstName = 'Angelina Jolie';
// Another let variable favActorLastName & store their last name
let favActorLastName = 'Voight';
// Use +"  "+ to combine the name is a let variable fullName
let fullName = favActorFirstName +"  "+ favActorLastName;
//Create let variable uppercase & use . toUpperCase to uppercase the full name
let uppercase = fullName.toUpperCase();
// let variable message using $ & `` to store the name
let message = `My Favorite Actor is [${uppercase}],`;
// Append more message 
message += `her best show is Mr. & Mrs. Smith.`;

console.log(favActorFirstName);
console.log(favActorLastName);
console.log(fullName);
console.log(uppercase);
console.log(message);