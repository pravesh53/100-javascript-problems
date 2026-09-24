// q85 - Write a program to reverse the elements of an array.

let arr = [10, 20, 30, 40, 50];

let reverse = [];

for( let i = arr.length - 1; i>= 0; i--) {
    reverse.push(arr[i]);
}

console.log(reverse);