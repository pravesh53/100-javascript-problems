// q28 - Write a program to find the product of all natural numbers from 1 to n (factorial of n).

let input = prompt("Enter a number:");
let factorial = 1;

for (let i = 1; i <= input; i++) {
    factorial = factorial * i;
    console.log(i);
}
console.log(factorial);
