/* 
Name: BELEN, Mariane I.
Course&Year: BSCS 1B
File: lq2_BELEN.js
*/

//III. Coding Problem
//Create let variables and use prompt to ask for their (Name, Address, Age, Class role, Course)
let name = prompt('Please enter your name: ');
let address = prompt('Please enter your address: ');
let age = Number(prompt('Please enter your age: ')); //Convert it to a number type
let classRole = prompt('Please enter your class role(Officer, Student, Teacher): ');
let course = prompt('Please enter your course(BSCS, BSM, BAEL): ');

//Use if else statement and identify if age is not a number or less than 0, if true then it display the alert(Invalid).
if (isNaN(age) || age < 0){
    alert('Invalid')
}
//identify if course are not BSCS, BSM, or BAEL. if true it will display the alert(Invalid)
else if (course !== 'BSCS' && course !== 'BSM' && course !== 'BAEL'){ 
        alert('Invalid course!');
//identify if the classRole are Officer, Student, or Teacher. If true it will display the alert(Invalid role)
}else if (classRole !== 'Officer' && classRole !== 'Student' && classRole !== 'Teacher'){
        alert('Invalid role!');
}else{
    //create let variable num and convet=rt it into integer and devide age into 4
    let num = parseInt(age / 4);
    //then display the times
    alert('Name: ' + num + ' times');

    //Create let variable num2 for the loop and = it to 0
    let num2 = 0;
    //Use while loop if num2 is less than num. if true it will increment and display the name
    while (num2 < num){
        console.log(name);
        num2++;
    }

    alert('Printing done!') //alert to the window to let the user know its done
}