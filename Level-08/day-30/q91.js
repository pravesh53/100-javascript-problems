// q91 - Write a program to find the sum of all even-indexed & odd-indexed elements separately.

let arr = [10, 20, 30, 40, 50, 60];

let evenIndexSum = 0;
let oddIndexSum = 0;

for (let i = 0; i < arr.length; i++) {

    if (i % 2 === 0) {
        evenIndexSum += arr[i];
    } else {
        oddIndexSum += arr[i];
    }
}

console.log("Even index sum =", evenIndexSum);
console.log("Odd index sum =", oddIndexSum);