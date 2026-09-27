// q93 - Write a program to print all prime numbers between two given numbers a and b.

function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

let a = Number(prompt("Enter a:"));
let b = Number(prompt("Enter b:"));

for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}