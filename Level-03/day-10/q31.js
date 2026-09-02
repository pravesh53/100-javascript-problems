// q31 - Write a program to count how many numbers from 1 to n are divisible by 3.

let input = Number(prompt("Enter a number:"));
let count = 0;

for (let i = 1; i <= input; i++) {
    if (i % 3 === 0) {
        count++;
        console.log(i);
    }
}
console.log("total numbers : " + count);