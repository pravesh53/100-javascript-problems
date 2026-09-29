// q98 - Write a program to convert a decimal number into its binary equivalent.


function decimalToBinary(n) {
    let binary = "";

    while (n > 0) {
        let remainder = n % 2;
        binary = remainder + binary;
        n = Math.floor(n / 2);
    }

    return binary;
}

let n = Number(prompt("Enter a decimal number:"));

console.log(decimalToBinary(n));