// q50 - Write a program to check whether a number is a strong number (sum of factorials of its digits).

let n = Number(prompt("Enter number:"));

let original = n;
let total = 0;

while (n > 0) {
    let digit = n % 10;
    let factorial = 1;

    for (let i = 1; i <= digit; i++) {
        factorial = factorial * i;
    }
    total = total + factorial;

    n = Math.floor(n / 10);
}

if (original === total) {
    console.log("Strong Number");
} else {
    console.log("Not Strong Number");
}