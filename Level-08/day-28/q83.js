// q83 - Write a program to count the number of even & odd elements in an array.

let arr = [8, 9, 12, 15, 29];
let even = 0;
let odd = 0;


for (let e of arr) {
    if(e % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

console.log("even numbers:", even);
console.log("odd numbers:", odd);