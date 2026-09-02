// q32 - Write a program to display all numbers from 1 to n that are divisible by 3 or 5.

let input = Number(prompt("Enter a number:"));

for (let i = 1; i<= input; i++) {
    if( i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}