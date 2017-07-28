var rectangle;
var d;
var next;




// Returns the amount of damage the other pokemon recieves.
function AssignDamage(attackingPokemon, moveIndex, defendingPokemon) {
    var formulaPartOne = 0.75*1.5*1.25*1*random(0.85, 1.01)*1*superEffectiveRatio(attackingPokemon, defendingPokemon)*1*1;
    if (attackingPokemon.move[moveIndex].isSpecial == false) {
    return  ((((2*attackingPokemon.Level)/5 + 2)*attackingPokemon.move[moveIndex].attack*attackingPokemon.attack/defendingPokemon.defense)/50 + 2)*formulaPartOne;
    } else {
        return ((((2*attackingPokemon.Level)/5 + 2)*attackingPokemon.move[moveIndex].attack*attackingPokemon.specialattack/defendingPokemon.specialdefense)/50 + 2)*formulaPartOne;
    }
}



function mouseTest() {
    ellipse(100 + d, 100 + d, 30, 30 + d);
    d+=10;

}

// function draw() {
//     if (next == 1) {
//     ellipse(100 + d, 100 + d, 30, 30 + d);
//     next = 0;
//     }
    
// }

function NoFaints(pkmnOne, pkmnTwo) {
    if (pkmnOne.HP <= 0 || pkmnTwo.HP <= 0) {
        return false;
    } else {
        return true;
    }
}

var clicker = 0;

// Cl
// while(NoFaints()) {
//     if(clicker > 1) {
//         AssignMove();
//         DoDamage();
//         ChangeNumber();
//         AITurn();
//         ChooseRandomMOve();
//         DODamage();
//         ChangeNumber();
//         WaitUntilNextClick();
//     }
// }

