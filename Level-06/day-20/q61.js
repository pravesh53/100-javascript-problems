// q61 - Write a program to find the sum of the series 1 + 1/2 + 1/3 + ... + 1/n.

let n = Number(prompt("Enter number:"));
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + 1 / i;
   
}
console.log("Sum:", sum);
