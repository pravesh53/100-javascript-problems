// q58 - Write a program to find the sum of the first n terms of the Fibonacci series.

let n = Number(prompt("Enter number of terms:"));

let a = 0;
let b = 1;

let sum = 0;

for (let i = 1; i <= n; i++) {
    console.log(a);
    sum = sum + a;

    let next = a + b;
    a = b;
    b = next;
}

console.log("Sum:", sum);