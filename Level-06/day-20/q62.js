// q62 - Write a program to find the value of x raised to the power y without using inbuilt power.

let x = Number(prompt("Enter x:"));
let y = Number(prompt("Enter y:"));

let result = 1;

for (let i = 1; i <= y; i++) {
    result = result * x;
}

console.log("Result:", result);