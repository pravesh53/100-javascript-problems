// q45 - Write a program to display all prime numbers from 1 to n.

let n = Number(prompt("Enter a number:"));

for (let num = 2; num <= n; num++) {

    let isPrime = true;

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            isPrime = false;
            break;
        }

    }

    if (isPrime) {
        console.log(num);
    }
}