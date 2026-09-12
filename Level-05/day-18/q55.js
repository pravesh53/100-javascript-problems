// q55 - Write a program to find the GCD(HCF) of two numbers.

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

let gcd = 1;

for (let i = 1; i <= a && i <= b; i++) {

    if (a % i === 0 && b % i === 0) {
        gcd = i;
    }
}

console.log("GCD/HCF:", gcd);