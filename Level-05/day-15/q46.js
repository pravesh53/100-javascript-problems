// q46 - Write a program to display the first n prime numbers.

let n = Number(prompt("Enter how many prime numbers:"));

let count = 0;
let num = 2;

while (count < n) {

    let isPrime = true;

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            isPrime = false;
            break;
        }

    }

    if (isPrime) {
        console.log(num);
        count++;
    }

    num++;
}