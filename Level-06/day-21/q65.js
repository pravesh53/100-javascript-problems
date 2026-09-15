// q65 - Write a program to print a pyramid pattern of stars of height n.

let n = Number(prompt("Enter height:"));

for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
        row = row + " ";
    }

    // stars
    for (let j = 1; j <= 2 * i - 1; j++) {
        row = row + "*";
    }

    console.log(row);
}