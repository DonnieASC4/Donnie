
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function rand(num) {
    // returns random integer between 0 and num
    return Math.floor(num*Math.random());
}
function randLetter() {
    return letterArray[rand(letterArray.length)];
}
const TEN = 10;
console.log(randLetter());

function randWord() {
    var randSize = rand(TEN)
    var randWord = "";
    for (var i = 0; i < randSize; i++) {
        randWord = randWord + randLetter();
    }
    return randWord;
}

function randSentence() {
    var randSize = rand(TEN);
    var randSentence = "";
     for (var i = 0; i < randSize; i++) {
         if (i != randSize - 1) {
            randSentence = randSentence + randWord() + " ";
         } else {
             randSentence = randSentence + randWord();
         }
     }
     randSentence = randSentence + ".";
     return randSentence;
}

// Array [pkmn name, HP, speed, attackName, damage]
var PokemonOne = ["Dialga", 150, 120, "Roar of Time", 130];
var PokemonTwo = ["Aggron", 160, 110, "Earthquake", 140];
var PokemonThree = ["Kingdra", 140, 170, "Hydro Pump", 125];
var PokemonFour = ["Mamoswine", 147, 127, "Blizzard", 135];

// This looks at the speeds of the pokemon and then makes a decision who goes first and that pokemon attacks.
function pokeAttackAdvanced(PkmnOne, PkmnTwo) {
    console.log(PkmnOne[0] + " is battling " + PkmnTwo[0] + ".");
    // Checks if one pokemon is faster than another.
   if (PkmnOne[2] > PkmnTwo[2]) {
       var FinalHP = pokeAttack(PkmnOne, PkmnTwo);
       console.log(PkmnTwo[0] + " now has " + FinalHP  + "HP.");
   } else {
      var FinalHP = pokeAttack(PkmnTwo, PkmnOne);
        console.log(PkmnOne[0] + " now has " + FinalHP  + "HP.");
   }
   
}

function pokeAttack(PokeOne, PokeTwo) {
    return PokeTwo[1] - PokeOne[5];
}
console.log()
console.log()