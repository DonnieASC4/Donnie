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
