// q42 - Write a program to replace all zeros in a number n with the digit 5.

// let n = Number(prompt("Enter digits:"));

// console.log(n);
// let reverse = 0;

// while(n > 0) {
//     let digit = n % 10;

//     if( digit === 0) {
//         digit = 5;
//     }

//      reverse = reverse * 10 + digit;

//     n = Math.floor(n / 10);
// }

// console.log(reverse);

//---------starting with first digit replacement

let n = Number(prompt("Enter digits:"));

let temp = n;
let divisor = 1;

// Highest place value find karo
while (temp >= 10) {
    temp = Math.floor(temp / 10);
    divisor = divisor * 10;
}

console.log(divisor);

let result = 0;

while (divisor >= 1) {
    let digit = Math.floor(n / divisor);

    if (digit === 0) {
        digit = 5;
    }

    result = result * 10 + digit;

    n = n % divisor;
    divisor = Math.floor(divisor / 10);
}

console.log(result);