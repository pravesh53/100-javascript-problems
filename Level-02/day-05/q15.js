// write a program to read a year & check whether it is a leap year or not.

let year = 2026;

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}