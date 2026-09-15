// q64 - Write a program to print an inverted right-angled triangle pattern of stars of height n.

let n = Number(prompt("Enter height:"));

for (let i = n; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row = row + "*";
    }

    console.log(row);
}