var prompt = require('prompt-sync')();

// Player start with $1000 dollars
// They're buying items at a store before adventure.
// They have to spend as much money as possible (Spend all money).


/* Pseudocode: player's money equals 1000
Use an array with Strings to store the items that the player bought
until player runs out of money: Ask them what they want to buy. and Subtract price from their money. 
*/

var money = 1000;
var items = [];

// Condition is while player has money
while(money > 0) {
    console.log("You have $" + money + " left. A tent is $100. Used Yeezys are $500.");
    var answer = prompt("Which item do you wnat to buy?");
    if (answer === "tent") {
        money-=100;
        items.push("tent");
        console.log("you bought a tent!");
        } else if (answer == "Used Yeezys") {
            money-=500;
            items.push("Used Yeezys");
            console.log("You bought Used Yeezys");
            } else {
                console.log("I didn't understand your answer. Try again!");
            }

}
console.log("You are out of money")