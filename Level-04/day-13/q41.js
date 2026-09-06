// q41 - Write a program to check wether a number n is a palindrome (reads the same reversed).

let n = Number(prompt("Enter a number:"));

let original = n;
let reverse = 0;

while (n > 0) {
    let digit = n % 10;

    reverse = reverse * 10 + digit;

    n = Math.floor(n / 10);
}

if (original === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}