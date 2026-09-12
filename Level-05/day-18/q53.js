// q53 - Write a program to find all factors(divisors) of a number n.

let n = Number(prompt("Enter number:"));

for(let i = 1; i<=n; i++) {
    if ( n % i === 0) {
        console.log(i);
    }
}