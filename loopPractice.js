for(var i = 0; i < 5; i++) {
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
}

// for(var i = 11; i > 10; i++) {
//     console.log(i);
// }
var myArray = ["aditya", "muhammad", "seti", "javen"];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

var j = 0;

do {
    console.log(myArray[j] + " " + j);
    j++
} while(j < myArray.length);
