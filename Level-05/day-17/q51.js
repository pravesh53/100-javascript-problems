// q51 - Write a program to check whether a number is an automorphic number.

let n = Number(prompt("Enter number:"));

let square = n * n;

let temp = n;
let divisor = 1;

while (temp > 0) {
    divisor = divisor * 10;
    temp = Math.floor(temp / 10);
}

let lastDigits = square % divisor;

if (lastDigits === n) {
    console.log("Automorphic Number");
} else {
    console.log("Not Automorphic Number");
}