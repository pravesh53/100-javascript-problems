// q27 - Write a program to find the sum of all odd numbers from 1 to n.

let input = prompt("Enter a number:");

let sum = 0;
for (let i = 0; i <= input; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        // sum = sum + i;
        sum += i;

    }
    // sum = sum + i;
}
// sum = sum + i;

console.log(sum);
