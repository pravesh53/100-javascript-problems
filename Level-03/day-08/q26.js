// q26 - Write a program to find the sum of all even numbers from 1 to n.

// let n = 10;
let input = prompt("Enter a number:");
let sum = 0;

for (let i = 0; i <= input; i++) {
    if (i % 2 === 0) {
        console.log(i);
        sum += i;

    }
}
console.log(sum);
