// q40 - Write a program to count the number of even and odd digits in a number n.

let n = Number(prompt("Enter digits:"));

let even = 0;
let odd = 0;

console.log(n);

while (n > 0) {
    let digit = n % 10;

    if (digit % 2 === 0) {
        even++;
    } else {
        odd++;
    }

    n = Math.floor(n / 10);
}

console.log("even digit:", even); 
console.log("odd digit:", odd); 