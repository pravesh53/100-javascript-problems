// q48 - Write a program to display all Armstrong numbers from 1 to n.

let n = Number(prompt("Enter number:"));

for (let i = 1; i <= n; i++) {

    let original = i;
    let num = i;
    let total = 0;

    while (num > 0) {

        let digit = num % 10;

        let sum = digit * digit * digit;

        total = total + sum;

        num = Math.floor(num / 10);
    }

    if (original === total) {
        console.log(original);
    }
}    