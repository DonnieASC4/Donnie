var prompt = require('prompt-sync')();
//var randomfunctions = require('./pokemonFunctions.js')();
var mashArray = ["Volcano", "Nuclear Aftermath", "Jungle", "Underwater Facility"];
var firstQuestion = [];
var yourHP = [];
var FinalSmashArray = [1,2,3,4,5,6,7,8,9,10]
var secondQuestion = ["Kirby", "Snake", "Ganondorf", "Mario", "Meta Knight"];

function rand(num) {
    // returns random integer between 0 and num
    return Math.floor(num*Math.random());
}



 while(true) {
     var place = mashArray[rand(mashArray.length)];
     console.log("Your battle Location has been chosen.");
    var opponent = secondQuestion[rand(secondQuestion.length)];
    console.log("Your opponent is " + opponent + ".");
    var strikeNumber = 0;
    var FinalSmashNumber = FinalSmashArray[rand(FinalSmashArray)]
    while(true) {
        do {
            strikeNumber = prompt("How many times do you want to attack " + opponent + ". Pick a number between 1 and 10");
        }
        while(strikeNumber > 10 || strikeNumber < 1);
        firstQuestion.push(strikeNumber);

    }
}




