// q100 - Write a program to display a menu that lets the user repeatedly choose any of the above tasks until they choose to exit.


let choice;

do {
    console.log("===== MENU =====");
    console.log("1. Decimal to Binary");
    console.log("2. Binary to Decimal");
    console.log("3. Exit");

    choice = Number(prompt("Enter your choice:"));

    switch (choice) {
        case 1:
            console.log("Decimal to Binary");
            break;

        case 2:
            console.log("Binary to Decimal");
            break;

        case 3:
            console.log("Program Exit");
            break;

        default:
            console.log("Invalid choice");
    }

} while (choice !== 3);