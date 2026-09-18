// q71 - Write a program to reverse a string.

let str = prompt("Enter a string:");
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}

console.log(reverse);