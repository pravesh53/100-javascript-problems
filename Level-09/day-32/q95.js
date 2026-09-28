// q95 - Write a program to count the number of prime digits present in a number n.

function isPrimeDigit(digit) {
    return digit === 2 || digit === 3 || digit === 5 || digit === 7;
}

function countPrimeDigits(n) {
    let count = 0;

    while (n > 0) {
        let digit = n % 10;

        if (isPrimeDigit(digit)) {
            count++;
        }

        n = Math.floor(n / 10);
    }

    return count;
}

let n = Number(prompt("Enter a number:"));

console.log(countPrimeDigits(n));