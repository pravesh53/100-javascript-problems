// q66 - Write a program to print a number triangle(row i contains numbers 1 to i).

let n = Number(prompt("Enter number:"));

for(let i = 1; i<=n; i++) {
    let row = "";

    for(let j = 1; j<=i; j++) {
        row = row + j;
    }

    console.log(row);
}