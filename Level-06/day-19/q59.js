// q59 - Write a program to find the sum of the series 1+2+3+...+n.

let n = Number(prompt("Enter number:"));

let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log("Sum:", sum);