// q88 - Write a program to remove duplicate elements from an array.

let arr = [10, 20, 10, 30, 20, 40];

let unique = [];

for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
            found = true;
            break;
        }
    }

    if (!found) {
        unique.push(arr[i]);
    }
}

console.log(unique);