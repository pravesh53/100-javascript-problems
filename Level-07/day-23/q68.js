// q68 - Write a program to find the lenght of a string without using an inbuilt function.

let str = prompt("Enter a string:");

console.log(str);

let length = 0;

for (let char of str) {
    length++;
}
console.log("Length =", length);