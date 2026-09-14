// q60 - Write a program to find the sum of the series 1^2 + 2^2 + 3^2 + ... + n^2.

let n = Number(prompt("Enter number:"));
let sum = 0;

for (let i = 0; i <= n; i++) {
    // let digit = i*i;
    // sum = sum + digit;
    sum = sum + i ** 2;    
}
console.log("Sum:", sum);
