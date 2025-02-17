//Belen_M_CS1B_LA2_A2
// Let's now create five variable 4 let variable and q const

let a = 25;   // integer
let b = 20;  // integer
let c = 12;   // integer
let d = "15";   // string
let e = 15;     // integer

// Add all of then and display 
let sum = a + b + c + Number(d)+ e;   // we used a (Number()) to convert our string to integer.
console.log(sum)

/* For the next step we will use the console.log to compare our d and e values
 with relational operators which returns true or false*/
console.log(d > e) // this is our greater than operator. It'll be asking if the d "15" is greater than e 15.
console.log(d < e)   //this operator ask if the value of d is lesser than e.
console.log(d >= e)   //this one will as if the value of d is greater or equal to e.
console.log(d <= e) //while this one will ask if d is lesser than or equal to e.
console.log(d === e)  // this one will check if both values have the same data types.

// Subtract all the values or the variables.
let subtract = a - b - c - Number(d) - e; 
// the same when we process when we add them but using a minus (-)also converting tge d to integer.
console.log(subtract)

// Next one is to multiply the variable a and c, then divide to e
let multiplyAndDivide = (a * c) / e; // put () so that the answer for the multiplication part will be dividen to e
console.log(multiplyAndDivide)

//Next is to exponentiate the const e to c
let exponent = e ** c;  // this will multiply the value of e 15 into c 12 times.
console.log(exponent)

// Reassign the c to e
c = e; // reassign it by declaring the c and then we = to e.
console.log(c)
