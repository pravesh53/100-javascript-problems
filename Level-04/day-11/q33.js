// q33 - Write a program to count the number of digits in a number n.

let n = Number(prompt("Enter digits:"));

let count = 0;

while (n > 0) {
    n = Math.floor(n / 10);
    count++;
}
console.log("Number of digits:", count);