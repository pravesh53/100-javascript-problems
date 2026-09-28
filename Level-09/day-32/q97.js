// q97 - Write a program to find the largest & smallest number that can be formed using the digits of n.

function findLargestSmallest(n) {
    let digits = [];

    while (n > 0) {
        let digit = n % 10;
        digits.push(digit);
        n = Math.floor(n / 10);
    }

    digits.sort((a, b) => a - b);

    let smallest = Number(digits.join(""));
    
    digits.reverse();

    let largest = Number(digits.join(""));

    return [largest, smallest];
}

let n = Number(prompt("Enter a number:"));

let result = findLargestSmallest(n);

console.log("Largest:", result[0]);
console.log("Smallest:", result[1]);