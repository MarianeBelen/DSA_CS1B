//Name: BELEN, Mariane I.      Activity No:LQ1
//Price Inquiry

//Create consoles storing the given items.
console.log('A. PepsiCola');
console.log('B. Coca Cola');
console.log('C. Apple(per kg)');
console.log('D. Orange(per kg)');
console.log('E. Hotdogs(per kg)');

//Create let variable item_Choice & use promt to ask.
let item_Choice = prompt('Pick an item (A, B, C, D, E): ');
//Create let variable qty & use prompt converted to number for the quantity storage.
let qty = Number(prompt('Please enter quantity: '));

//Create an empty string let variable item to be access with the switch.
let item = "";
//Create another let variable Tot_price & make it = 0 to br access in the switch
let Tot_price = 0;

//Create the switch with thw cases and variables
switch(item_Choice.toUpperCase()){
    case 'A':
        item = 'Pepsi Cola'; 
        Tot_price = 12 * qty; //12 x the quantity that was input Ex: 12 x 3 = 36
        //display the item and the quantity using the console.log, backticks, $, and {}.
        console.log(`The Total Price of the order ${item_Choice} x ${qty}: ${Tot_price}`)
        break;  //Use break so that it won't display everything.
    case 'B':
        item = 'Coca Cola';
        Tot_price = 14 * qty;  //14 x the quantity that was input Ex: 14 x 3 = 42
        //display the item and the quantity using the console.log, backticks, $, and {}.
        console.log(`The Total Price of the order ${item_Choice} x ${qty}: ${Tot_price}`)
        break;  //Use break so that it won't display everything.
    case 'C':
        item = 'Apple (per kg)';
        Tot_price = 100 * qty;  //100 x the quantity that was input Ex: 100 x 3 = 300
        //display the item and the quantity using the console.log, backticks, $, and {}.
        console.log(`The Total Price of the order ${item_Choice} x ${qty}: ${Tot_price}`)
        break;  //Use break so that it won't display everything.
    case 'D':
        item = 'Orange (per kg)';
        Tot_price = 100 * qty;  //100 x the quantity that was input Ex: 100 x 3 = 300
        //display the item and the quantity using the console.log, backticks, $, and {}.
        console.log(`The Total Price of the order ${item_Choice} x ${qty}: ${Tot_price}`)
        break;  //Use break so that it won't display everything.
    case 'E':
        item = 'Hotdogs (per kg)';
        Tot_price = 120 * qty;  //120 x the quantity that was input Ex: 120 x 3 = 360
        //display the item and the quantity using the console.log, backticks, $, and {}.
        console.log(`The Total Price of the order ${item_Choice} x ${qty}: ${Tot_price}`)
        break;  //Use break so that it won't display everything.
    default:    //if none of the above are true then it will execute the defaul.
        alert('No matching item!Try to re run the Program.');
}