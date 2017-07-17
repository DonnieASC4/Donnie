var prompt = require('prompt-sync')();

function PokeTemplate(name, att, def, hp, legend, type) {
    this.name = name;
    this.attack = att;
    this.defense = def;
    this.hp = hp;
    this.legend = legend;
    this.Type = type;
    this.pokemonAttacked = function() {
        this.hp = this.hp - 10;
        console.log(this.name + "'s HP is now " + this.hp + ".")
    }
}

var Roster = [];
Roster[0] = new PokeTemplate("Snorlax", 250, 200, 510, false, "Normal");
Roster[1] = new PokeTemplate("Luxray", 270, 163, 300, false, "Electric");
Roster[2] = new PokeTemplate("Deoxys", 325, 375, 300,true, "Psychic" );
Roster[3] = new PokeTemplate("Umbreon", 250, 270, 350, false, "Dark");
Roster[4] = new PokeTemplate("Noivern", 262, 170, 350, false, "Dragon");
Roster[5] = new PokeTemplate("Beartic", 300, 199, 370, false,  "Ice");

function AfterAttack() {
    for(var i = 0; i< Roster.length; i++) {
        var instance = Roster[i];
        console.log(instance.name + " is attacked. " +  instance.name + "'s HP was " + instance.hp + ".");
        instance.pokemonAttacked();
    }
}

// In a real program Pokemon Name would have to be referenced with a text file with all the pokemon's name
// Pokemon Type would need to be referenced too.
function AddPokemon() {
    PokemonName = UserInput(true, false, false, false);
    PokemonStats = UserInput(false, true, false, false);
    PokemonIsLegend = UserInput(false, false, true, false);
    PokemonType = UserInput(false, false, false, true);
    console.log(PokemonName);
   console.log(PokemonStats);
console.log(PokemonIsLegend);
    console.log(PokemonType);

    //var arrayStats = PokemonStats.split(" ");

}

function UserInput(pokemon, number, boolean, type) {
    if (pokemon == true) {
       var pokemonName; 
       // The do while loop works.
       do { 
           var pokemonName = prompt("Give the name of the pokemon. Only put in letters: ");
       } while(HasANonLetter(pokemonName));
        return pokemonName;
    } else if (number == true) {
        // Works
        do { 
            var Stat = prompt("Give the stats of the pokemon in this order Attack Defense HP. Don't put any letters or symbols and put spaces between each stat: ");
        } while(HasANonNumber(Stat));
        return Stat;
    } else if (boolean == true) {
        do { 
       var bool = prompt("Enter true if the pokemon is a legendary. Otherwise enter false :");
        } while(bool != "false" && bool != "true");
        return bool;
    } else {
        // Do the array version later. This will only take in one Type.
        do { 
           var Type = prompt("Give the type of the pokemon. Only put in letters: ");
        } while(HasANonLetter(Type));
        return Type;
    }
}

function HasANonLetter(pkmnName) {
    for (var i = 0; i < pkmnName.length; i++) {
        var char = pkmnName[i].charCodeAt()
        if (!(char > 64 && char < 91) && !(char > 96 && char < 123)) {
            return true;
        }
    }
    return false;
}

function HasANonNumber(stat) {
     for (var i = 0; i < stat.length; i++) {
          var char = stat[i].charCodeAt();
        // buggy
        if (!(char > 47 && char < 58) && char != 32) {
            return true;
        }
     }
     return false;
}