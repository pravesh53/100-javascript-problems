// q30 - Write a program to display all multipes of a number m up to n terms.

let m = 25;
// let m = Number(prompt("Enter the number m:"));
let n = Number(prompt("Enter the number of terms n:"));

for (let i = 1; i <= n; i++) {
    console.log(m * i);
}