// q35 - Write a program to find the sum of all digits of a number n.

let n = Number(prompt("Enter digits:"));
let sum = 0;

while (n > 0) {
    let digit = n % 10;
    sum = sum + digit;
    
    n = Math.floor(n / 10);
}

console.log(sum);