/*
Name: BELEN, Mariane I.
Couse&Year: BSCS 1B
Activity No: LA3
file: gradeAssignment_v2.js
*/
//Create let variable score & use prompt to ask their score
let score = parseInt(prompt('Please enter your score: '));

//Use Ternary condition statements
// if score is greater than or equal to 97 then it will display the ? log
(score >= 97) ? console.log('Your equivalent grade is "1.00" Excellent.') 
: (score >= 94 && score <= 96) ? console.log('Your equivalent grade is "1.25" Excellent.') //score is >= 94 & <= 96
: (score >= 91 && score <= 93) ? console.log('Your equivalent grade is "1.50" Above Average.') //score is >=91 & <= 93
: (score >= 88 && score <= 90) ? console.log('Your equivalent grade is "1.75" Above Average.') //score is >=88 & <= 90
: (score >= 85 && score <= 87) ? console.log('Your equivalent grade is "2.00" Average') //score is >=85 & <= 87
: (score >= 82 && score <= 84) ? console.log('Your equivalent grade is "2.25" Average.') //score is >=82 & <= 84
: (score >= 79 && score <= 81) ? console.log('Your equivalent grade is "2.50" Below Average.') //score is >=79 & <= 81
: (score >= 76 && score <= 78) ? console.log('Your equivalent grade is "2.75" Below Average.') //score is >=76 & <= 78
: (score === 75) ? console.log('Your equivalent grade is "3.00" Below Average.') //score is >= 75
: (score >= 72 && score <= 74) ? console.log('Your equivalent grade is "4.00" Poor.') //score is >=72 & <= 74
: console.log('Your equivalent grade is "5.00" Poor.'); //less than 71

//Use if else condition to identify if they passed or failed accoording to the given requirements
if (score >= 90){ //if greater then or equal to 90 it will display the log below it.
    console.log('HIGH PASS, Candidate for Cum Laude.');
} else if (score >= 80 && score <= 89){ //if >= 80 & <= 89 then it will display the log below it.
    console.log('AVERAGE PASS');
} else if (score >= 75 && score <= 79){ //if >= 75 & <= 79 then it will display the log below it.
    console.log('LOW PASS');
} else{ //else if failed
    console.log('FAILED');
}