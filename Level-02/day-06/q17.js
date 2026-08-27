// Write a program to read a character & check whether it is an alphabet, digit or special symbole.


//_________This is my thought but this wasn't working.________
// let alphabet = "u";
// let digit = 4;
// let special_sym = "$";

// if (alphabet === "p" ) {
// console.log("This is a Alphabet.");
// } else if (digit === 4) {
//     console.log("This is a Digit.");
// } else {
//     console.log("This is a Special symbole.")
// }



//________This is a simple way________

// let char = "";
// if (
//     char === "0" ||
//     char === "1" ||
//     char === "2" ||
//     char === "3" ||
//     char === "4" ||
//     char === "5" ||
//     char === "6" ||
//     char === "7" ||
//     char === "8" ||
//     char === "9"
// ) {
//     console.log("Digit");
// } else {
//     console.log("Not a Digit");
// }



//________Best way________
let char = "8";

if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
    console.log("Alphabet");
} else if (char >= "0" && char <= "9") {
    console.log("Digit");
} else {
    console.log("Special Symbol");
}