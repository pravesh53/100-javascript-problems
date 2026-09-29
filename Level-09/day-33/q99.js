// q99 - Write a program to convert a binary number into its decimal equivalent.

function binaryToDecimal(binary) {
    let decimal = 0;
    let power = 0;

    while (binary > 0) {
        let digit = binary % 10;

        decimal = decimal + digit * Math.pow(2, power);

        binary = Math.floor(binary / 10);
        power++;
    }

    return decimal;
}

let n = Number(prompt("Enter a binary number:"));

console.log(binaryToDecimal(n));