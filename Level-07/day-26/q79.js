// q79 - Write a program to toggle the case of each character in a string.

let str = prompt("Enter a string:");
let result = "";

for (let char of str) {
    let code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
        // Uppercase → lowercase
        result += String.fromCharCode(code + 32);
    } 
    else if (code >= 97 && code <= 122) {
        // Lowercase → uppercase
        result += String.fromCharCode(code - 32);
    } 
    else {
        // Space, number, symbol → same
        result += char;
    }
}

console.log("Toggled string =", result);