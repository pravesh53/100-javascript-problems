// q80 - Write a program to read n elements into an array & print them.

let n = Number(prompt("Enter number of elements:"));

let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt(`Enter element ${i + 1}:`));
}

console.log("Array elements:");

for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}