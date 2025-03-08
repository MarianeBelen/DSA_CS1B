//Name: BELEN, Mariane I.      Activity No:LQ1
//Matrix Printer

//create let variable asking the user if they want to create a matrix using prompt
let create_matrix = prompt('Do you want to create a Matrix? (YES/NO)');

//if the answer is YES then it will excute the if statement code and under it
if (create_matrix.toUpperCase() === 'YES'){
    // create 3 number variables for a nested loop asking with a prompt
    let limit1 = Number(prompt('Please enter limit for outer loop: '));
    let limit2 = Number(prompt('Please enter limit for the 2nd loop: '));
    let limit3 = Number(prompt('Please enter limit for inner loop: '));

    // create 3 string variables for a nested loop asking with a prompt
    let string1 = (prompt('Please enter 1st string (word, char, number, symbol): '));
    let string2 = (prompt('Please enter 2nd string (word, char, number, symbol): '));
    let string3 = (prompt('Please enter 3rd string (word, char, number, symbol): '));

    //Use nested for loop, for the first loop use the limit1 from the number variables
    for(let i = 0; i < limit1; i++){
        let firstLoop = ' ';      //create an empty string
        for(let j = 0; j < limit2; j++){  //for the 2nd loop use the limit2
            let secondLoop = ' ';    //create another empty string
            for(let k = 0; k < limit3; k++){  //for the inner ot 3rd loop use the limit3
                //use the empty string in the 2nd loop using += to append the string variables
                secondLoop += string1 + ' ' + string2 + ' ' + string3 + ' ';
            }
            firstLoop += secondLoop  //use the empty string in the 1st loop and append the seconfLoop
        }
        console.log(firstLoop);  //use console for displaying the firstLoop
    }
}else {   //else statement if the users answer will be NO then it will execute this code
    console.log('Thank you, re-run the program if you change your mind')
}