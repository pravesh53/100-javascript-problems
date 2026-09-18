// q72 - Write a program to check whether a sring is a palindrome.

let str = prompt("Enter a string:");
let reverse = "";

for (let char of str) {
    reverse = char + reverse;
}

// console.log(reverse);
if (str === reverse) {
    console.log("palindrome string");
} else {
    console.log("Not a palindrome");
}