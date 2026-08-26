// Write a program to read three numbers & find the smallest among them.

let x = 15;
let y = 10;
let z = 20;

if (x < y && x < z) {
    console.log("smallest:", x);
}else if (y < x && y < z) {
    console.log("smallest:", y);
} else {
    console.log("smallest:", z);
}