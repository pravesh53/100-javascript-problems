// q47 - Write a program to check whether a number is an Armstrong number.

let n = Number(prompt("Enter number : "));

let original = n;
let total = 0;

while (n > 0) {
    let digit = n % 10;
    let sum = digit * digit * digit;
    total = total + sum;

    n = Math.floor(n / 10);
}

if (original === total) {
    console.log("This is Armstrong number.");
} else {
    console.log("This is not Armstrong number.");

}