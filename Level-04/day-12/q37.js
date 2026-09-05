// q37 - Write a program to reverse a number n.

let n = Number(prompt("Enter digits:"));

let reverse = 0;

while (n > 0) {
    let digit = n % 10;

    reverse = reverse * 10 + digit;

    n = Math.floor(n / 10);
}

console.log("Reverse:", reverse);