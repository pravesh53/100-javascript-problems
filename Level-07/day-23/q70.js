// q70 - Write a program to count the number of words in a sentence.

let str = prompt("Enter a sentence:");

let words = 0;

for (let char of str) {
    if (char === " ") {
        words++;
    }
}

words++;

console.log("Number of words =", words); 