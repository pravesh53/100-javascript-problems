// q63 - Write a program to print a right-angled triangle pattern of stars of height n.

let n = Number(prompt("Enter height:"));

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row = row + "*";
    }

    console.log(row);
}