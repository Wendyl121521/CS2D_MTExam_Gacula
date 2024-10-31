
const favNumber = 15;
let guess;
while (guess !== favNumber) {
    guess = parseInt(prompt("Guess my favorite number:"));
    if (guess < favNumber) {
        console.log("Too low. Try again!");
    } else if (guess > favNumber) {
        console.log("Too high. Try again!");
    } else {
        console.log("Correct! My favorite number is " + favNumber + "!");
    }
}
