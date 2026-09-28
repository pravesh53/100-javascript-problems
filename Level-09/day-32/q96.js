// q96 - Write a program to check whether a number is a palindrome & a prime at the same time.

function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function isPalindrome(n) {
    let original = n;
    let reverse = 0;

    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = Math.floor(n / 10);
    }

    return original === reverse;
}

let n = Number(prompt("Enter a number:"));

if (isPalindrome(n) && isPrime(n)) {
    console.log("Palindrome and Prime");
} else {
    console.log("Not Palindrome and Prime");
}