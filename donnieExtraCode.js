/* Math.random(); gives a random number between 0 and 1
To get a random number between 0 and 6 you multiply 6*Math.random();
*/
// Task: We make a rand() function. rand() returns a random integer between 0 and that number.

//PSEUDOCODE
// multiply math.Random() by the given number
// remove decimal
// Return the integer

//Parameters: num
function rand(num) {
    // returns random integer between 0 and num
    return Math.floor(num*Math.random());
}

for (var i = 0; i < 3; i++) {

     console.log(rand(64));
}
