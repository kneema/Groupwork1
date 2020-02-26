// player 1 has rock or paper or scissors
// player 2 has rock or paper or scissors

let player1 = "scissors";
let player2 = "paper";
let result = "";

if (player1 === player2) {
    result = "It is a draw";

} else {

    if (player1 === "rock") {
        if (player2 === "scissors") {
            result = "You win";
        } else {
            result = "You Lose";
        }
    }

    if (player1 === "scissors") {
        if (player2 === "paper") {
            result = "You win";
        } else {
            result = "You Lose";
        }
    }

    if (player1 === "paper") {
        if (player2 === "rock") {
            result = "You win";
        } else {
            result = "You Lose";
        }
    }
}

console.log(result)