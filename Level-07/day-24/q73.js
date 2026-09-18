// q73 - Write a program to convert a string to uppercase & lowercase without inbuilt case functions.

let str = prompt("Enter a string:");

let uppercase = "";
let lowercase = "";

for (let char of str) {

    let code = char.charCodeAt(0);

    // lowercase → uppercase
    if (code >= 97 && code <= 122) {
        uppercase += String.fromCharCode(code - 32);
    } else {
        uppercase += char;
    }

    // uppercase → lowercase
    if (code >= 65 && code <= 90) {
        lowercase += String.fromCharCode(code + 32);
    } else {
        lowercase += char;
    }
}

console.log("Uppercase =", uppercase);
console.log("Lowercase =", lowercase);