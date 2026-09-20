// q75 - Write a program to remove all spaces from a string.

let str = prompt("Enter a string:");
let result = "";

for (let char of str) {
    if (char !== " ") {
        result += char;
    }
}

console.log(result);