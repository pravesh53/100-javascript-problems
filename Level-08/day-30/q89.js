// q89 - Write a program to sort an array in ascending order (bubble sort).

let arr = [50, 20, 40, 10, 30];

for (let i = 0; i < arr.length - 1; i++) {

    for (let j = 0; j < arr.length - 1 - i; j++) {

        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);