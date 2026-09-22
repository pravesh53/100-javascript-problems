// q78 - Write a program to replace all occurrences of a character with another character in a string.

let str = prompt("Enter a string:");
let oldChar = prompt("Enter character to replace:");
let newChar = prompt("Enter new character:");

let result = "";

for (let char of str) {
    if (char === oldChar) {
        result += newChar;
    } else {
        result += char;
    }
}

console.log("New string =", result);