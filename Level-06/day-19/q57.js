// q57 - Write a program to display the first n terms of the Fibonacci series.

let n = Number(prompt("Enter number of terms:"));

let a = 0;
let b = 1;

for (let i = 1; i <= n; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
}