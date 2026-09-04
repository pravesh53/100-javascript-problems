// q34 - Write a program to display all the digits of a number n (one per line). 

let n = Number(prompt("Enter digits:"));

while (n > 0) {
    let digit = n % 10;
    console.log(digit);

    n = Math.floor(n / 10);
}