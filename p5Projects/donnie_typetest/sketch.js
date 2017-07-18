const STRINGONE = "Born_alone,_die_alone;_no_crew_to_keep_my_crown_or_throne.";
const STRINGTWO = "Cupid's_too_busy_in_the_club._At _the _bar _Rolling _Up.";
const STRINGTHREE = "Your_time_will_come_if_you_wait_for_it,_if_you_wait_for_it.";
const STRINGFOUR = "Howling_at_the_moon,_what's_a_pack_of_hungry_babies."
const STRINGFIVE =  "I_really_think_the_War_on_Terror_is_a_bunch_of_bullshit."
const DIRECTIONS = "Please type the sentence below:"
const POINTS = "Current Points: "

function setup() {
    createCanvas(600, 400);
    background(170);
    text(DIRECTIONS, 65, 50);
    text(POINTS, 65, 250);
    
    
}

function chooseString() {
    var rand = random(1,6);
    if (rand < 2) {
        return STRINGONE;
    } else if (rand < 3 && rand >=2) {
        return STRINGTWO;
        } else if (rand < 4 && rand >= 3) {
            return STRINGTHREE;
            } else if (rand < 5 && rand >= 4) {
                return STRINGFOUR;
                } else {
                    return STRINGFIVE;
                    }
}

function setNumber(str) {
    if (str == STRINGONE) {
        return 1;
    } else if (str == STRINGTWO) {
        return 2;
    } else if (str == STRINGTHREE) {
        return 3;
    } else if (str == STRINGFOUR) {
        return 4;
    } else { 
       return 5; 
    }

}

var answer = "";
var prompt;
var restart = true;
var Num = 0;

function draw() {
    if (restart == true) {
        var str = chooseString();
        Num = setNumber(str);
        restart = false;
        prompt = text("New word: " + str, 65, 150);
    }
  
    
    if (answer[answer.length-1] == "$") {
        var bool = StringChecker(answer, Num);
        if (bool == true) {
            restart = true;
            answer = "";
            console.log("Good Job.");
        } else {
            answer = "";
            console.log("Nice Try. Your answer has been cleared. Try Again");
        }
    } 
}

function keyTyped() {
    if (key === '*') {
        console.log("Here is what your answer looks like " + answer);
    } else if (key === "@") {
        answer = "";
        console.log("Your answer has been deleted. Proof:" + answer + ".");
    } else {
        answer = answer + key;
    }  
}

function keyPressed() {
    if (keyCode === ENTER) {
        answer = answer + "$";
    }
}


// A number must be inputted.
function ScoreUpdater(num) {
    num = num + 10;
    return POINTS + num.toString();
}




// Works with this program.
function StringChecker(str, number) {
    if (number == 1) {
        if (str == STRINGONE) {
            return true;
        } else {
            return false;
        }

    } else if (number == 2) {
        if (str == STRINGTWO) {
            return true;
        } else {
            return false;
        }

      } else if (number == 3) {
           if (str == STRINGTHREE) {
                return true;
            } else {
                return false;
            }

        } else if (number == 4) {
             if (str == STRINGFOUR) {
                return true;
            } else {
                return false;
            }
          } else {
                if (str == STRINGFIVE) {
                    return true;
                } else {
                    return false;
                }
            }
}
