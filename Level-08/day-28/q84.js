// q84- Write a program to search for an element in an array (linear search).

let arr = [10, 25, 30, 45, 50];

let search = Number(prompt("Enter element to search:"));
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
        found = true;
        break;
    }
}

if (found) {
    console.log("Element found");
} else {
    console.log("Element not found");
}