// q43 - Write a program to find the sum of the first & last digit of a number n.

// 2457
let n = Number(prompt("Enter digits:"));

let lastDigit = n % 10;

let temp = n;

while (temp >= 10) {
    temp = Math.floor(temp / 10);
}

let firstDigit = temp;

let sum = firstDigit + lastDigit;

console.log("sum:", sum);