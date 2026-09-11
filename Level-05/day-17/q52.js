// q52 - Write a program to check whether a number is a Harshed(Niven) number.

let n = Number(prompt("Enter number:"));

let original = n;
let sum = 0;

while (n > 0) {

    let digit = n % 10;

    sum = sum + digit;

    n = Math.floor(n / 10);
}

if (original % sum === 0) {
    console.log("Harshad Number");
} else {
    console.log("Not a Harshad Number");
}