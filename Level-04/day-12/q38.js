// q38 - Write a program to find the largest digit in a number n.


let n = Number(prompt("Enter digits:"));

let largest = 0;

while (n > 0) {
    let digit = n % 10;

    if (digit > largest) {
        largest = digit;
    }

    n = Math.floor(n / 10);
}

console.log("Largest digit:", largest);