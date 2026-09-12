// q56 - Write a program to find the LCM of two numbers.

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

let lcm = a > b ? a : b;

while (true) {

    if (lcm % a === 0 && lcm % b === 0) {
        break;
    }

    lcm++;
}

console.log("LCM:", lcm);