// q54 - Write a program to count the number of factors of a number n.

let n = Number(prompt("Enter number:"));
let count = 0;

for(let i = 1; i<=n; i++) {
    if ( n % i === 0) {
        console.log(i);
        count++;
    }
}
console.log("The number of factors is :" , count);