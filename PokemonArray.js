var myPokemonRoster = ["Raquaza", "Charizard", "Swampert", "Electivire", "Tyranitar" ];
var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];
var returnToPCBox = myPokemonRoster.pop();
myPokemonRoster.push("Mew");
var rosterSize = myPokemonRoster.push("Mewtwo");
console.log(rosterSize);
rosterSize = myPokemonRoster.length;



if (myPokemonRoster.length >= 5) {
    for(var i = 0; i < myPokemonRoster.length; i++) {
        var j = i + 1;
        console.log("Pokemon number " + j + " is " + myPokemonRoster[i] + ".");
    }
    for(var i = myPokemonRoster.length - 1; i > -1; i--) {
        var j = i + 1;
        console.log("Pokemon number " + j + " is " + myPokemonRoster[i] + ".");
    }  
} else {
    console.log("Not enough pokemon in the party");
}

myPokemonRoster = ["Pikachu"];
console.log("New party is " + myPokemonRoster);
if (myPokemonRoster.length >= 5) {
    for(var i = 0; i < myPokemonRoster.length; i++) {
        var j = i + 1;
        console.log("Pokemon number " + j + " is " + myPokemonRoster[i] + ".");
    }
    for(var i = myPokemonRoster.length - 1; i > -1; i--) {
        var j = i + 1;
        console.log("Pokemon number " + j + " is " + myPokemonRoster[i] + ".");
    }  
} else {
    console.log("Not enough pokemon in the party");
}
