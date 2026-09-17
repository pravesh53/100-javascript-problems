// q69 - Write a program to count the number of vowels & consonants in a string.

let str = prompt("Enter a string");
console.log(str);
console.log(str.length);

let vowels = 0;
let consonants = 0;

for (let char of str) {

    if (char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
    ) {
        vowels++;
    }
    else if (
        char >= "a" && char <= "z"
    ) {
        consonants++;
    }
}


console.log("Number of vowels = ", vowels);
console.log("Number of consonants = ", consonants);