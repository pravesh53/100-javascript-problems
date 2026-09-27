// q92 - Write a program to check whether a number is prime, using a function/method.

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

let n = Number(prompt("Enter a number:"));

if (isPrime(n)) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
}


