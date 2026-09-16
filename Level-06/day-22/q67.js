// q67 - Write a program to print Pascal's triangle for n rows.

let n = Number(prompt("Enter number of rows:"));

for (let i = 0; i < n; i++) {
    let row = 1;
    let output = "";

    for (let j = 0; j <= i; j++) {
        output = output + row + " ";

        row = row * (i - j) / (j + 1);
    }

    console.log(output);
}