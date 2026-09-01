// q29 - Write a program to display the multiplication table of a number n.

let input = Number(prompt("Enter a number:"));

console.log("The table of " + input + " :");

for(let i = 1; i<= 10; i++) {
    console.log(input + " X " + i + " = " + input * i);
}