// q49 - Write a program to check whether a number is a perfect number.

let n = Number(prompt("Enter number:"));

let sum = 0;

for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
        sum = sum + i;
    }
}

if (sum === n) {
    console.log("Perfect Number");
} else {
    console.log("Not Perfect Number");
}