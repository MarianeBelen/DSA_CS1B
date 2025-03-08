//Name: BELEN, Mariane I.
//Conditional statement

//create let variable for username & use prompt to ask the username.
let user_name = prompt("What's your UserName?");
//create let variable user_password & use prompt to ask for the user's password.
let user_password = prompt("Please enter your password?");
//create another let variable to store the password
let password = 'bscs123';

//use if else condition to check if password is correct
if(user_password === password){  //if TRUE then it will display the alert
    alert(`Welcome ${user_name}`); // use alert() to display if the condition is satisfied
} else {     // else statement if its FALSE & will display the alert
    alert("Maybe Username or Password is Invalid or Does not Match");
}