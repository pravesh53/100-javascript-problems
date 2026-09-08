// q44 - Write a program to read a number & check whether it is prime or not.

let n = Number(prompt("Enter a number:"));

let isPrime = true;

if (n <= 1) {
    isPrime = false;
}

for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
}