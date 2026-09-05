// q36 - Write a program to find the product of all digits of a number n.

let n = Number(prompt("Enter digits:"));

let product = 1;

while (n > 0) {
    let digit = n % 10;
    product = product * digit;

    n = Math.floor(n / 10);
}

console.log(product);