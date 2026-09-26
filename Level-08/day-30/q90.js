// q90 - Write a program to merge two arrays into one.


let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];

let merged = [];

for (let i = 0; i < arr1.length; i++) {
    merged.push(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
    merged.push(arr2[i]);
}

console.log(merged);