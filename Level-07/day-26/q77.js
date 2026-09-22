// q77 - Write a program to find the first non-repeating character in a string.

let str = prompt("Enter a string:");

let frequency = {};

for (let char of str) {
    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}

for (let char of str) {
    if (frequency[char] === 1) {
        console.log("First non-repeating character =", char);
        break;
    }
}