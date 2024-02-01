const arr = [];
function printresults(message) {
    document.getElementById("results").innerHTML = ''
    document.getElementById("results").innerHTML = `<p>${message}</p>`;
}
function printhistory() {
    const history = document.getElementById("history");
    history.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        history.insertAdjacentHTML('beforeend', `<div>Game ${i + 1}: ${arr[i]}</div>`);
    }
}
function play(player) {
    if (player === "reset") {
        printresults("History Reset");
        arr.length = 0; 
        printhistory(); 
        return;
    }
    if (player === "historybtn") {
        printhistory();
        return;
    }
    const options = ["rock", "paper", "scissors"];
    const computer = options[Math.floor(Math.random() * options.length)];
    const result = compare(player, computer);
    printresults(result);
    arr.push(`YOU: ${player} vs COMPUTER: ${computer} = ${result}`);
}
function compare(player, computer) {
    if (player === computer) {
        return "It's a draw! 🏳";
    } else if (
        (player === "scissors" && computer === "rock") ||
        (player === "paper" && computer === "scissors") ||
        (player === "rock" && computer === "paper")
    ) {
        return "You lost! ✖";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return "You won! ✔";
    } else {
        return "Try Again! 😒";
    }
}
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        play(button.id);
    });
});