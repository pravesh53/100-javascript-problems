// Write a program to display all even numbers from 1 to n. 


// let n = 40;
let n = prompt("Enter a number.");

for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}