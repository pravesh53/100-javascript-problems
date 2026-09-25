// q87 - Write a program to count the frequency of each element in an array.


let arr = [10, 20, 10, 30, 20, 10];

let frequency = {};

for (let char of arr) {
    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}

console.log(frequency);