// q25 - Write a program to find the sum of all natural numbers from 1 to n.

// let n = 3;
let input = prompt("Enter a number:")
let sum = 0;

for (let i = 0; i <= input; i++) {
    // console.log(i);
    // sum = sum + i;
    sum += i;
    // console.log(sum);
}
console.log(sum);
