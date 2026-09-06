// q39 - Write a program to find the smallest digit in a number n.

let n = Number(prompt("Enter digits:"));

let smallest = n % 10;
console.log(n);

while (n > 0) {
    let digit = n % 10;

    if (digit < smallest) {
        smallest = digit;
    }

    n = Math.floor(n / 10);
}

console.log("smallest digit:", smallest);