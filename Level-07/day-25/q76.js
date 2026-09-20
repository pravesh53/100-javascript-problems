// q76 - Write a program to check whether two strings are anagrams of each other.

let str1 = prompt("Enter first string:");
let str2 = prompt("Enter second string:");

let frequency1 = {};
let frequency2 = {};

for (let char of str1) {
    if (frequency1[char]) {
        frequency1[char]++;
    } else {
        frequency1[char] = 1;
    }
}

for (let char of str2) {
    if (frequency2[char]) {
        frequency2[char]++;
    } else {
        frequency2[char] = 1;
    }
}

let isAnagram = true;

if (str1.length !== str2.length) {
    isAnagram = false;
} else {
    for (let char of str1) {
        if (frequency1[char] !== frequency2[char]) {
            isAnagram = false;
            break;
        }
    }
}

if (isAnagram) {
    console.log("Anagram");
} else {
    console.log("Not anagram");
}