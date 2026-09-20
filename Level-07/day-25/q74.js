// q74 - Write a program to count the frequency of each character in a string.

let str = prompt("Enter a string:");

let frequency = {};

for (let char of str) {
    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}

console.log(frequency);