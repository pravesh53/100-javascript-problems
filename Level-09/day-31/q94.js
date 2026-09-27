// q94 - Write a program to find the sum of digits of a number repeatedly until a single digit remains.

function singleDigit(n) {

    while (n >= 10) {
        let sum = 0;

        while (n > 0) {
            let digit = n % 10;
            sum = sum + digit;
            n = Math.floor(n / 10);
        }

        n = sum;
    }

    return n;
}

let n = Number(prompt("Enter a number:"));

console.log(singleDigit(n));