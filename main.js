const domselector = {
    history: document.getElementById("history"),
    box: document.getElementById("box")  
}
function game() {
    let counter = 0;
    const history = [];

    while (true) {
        const player = prompt("Choose rock, paper, or scissors (history or exit): ");

        if (player.toLowerCase() === "exit") {
            domselector.box.innerHTML = ``
            domselector.box.innerHTML = `User has quit`
            console.log("Goodbye");
            break;
        } else if (player.toLowerCase() === "history") {
            domselector.history.innerHTML = ``
            domselector.history.innerHTML = `${history}`
            console.log(history);
            continue;
        }

        counter++;
        console.log('Game number: ' + counter);
        const options = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * options.length);
        const computer = options[random];
        console.log(computer);

        function stat() {
            domselector.box.innerHTML = ``
            domselector.box.innerHTML = `🤖 Computer had: ${computer}`
            domselector.box.innerHTML = `😊 You had: ${player.toLowerCase()}`
            console.log("🤖 Computer had: " + computer);
            console.log("😊 You had: " + player.toLowerCase());
        }

        if (player.toLowerCase() === computer) {
            console.log("Results: draw");
            domselector.box.innerHTML = ``
            domselector.box.innerHTML = `Draw 🏳`
            const result = 'Draw 🏳';
            history.push(result);
            stat();
        } else if (
            (player.toLowerCase() === "scissors" && computer === "rock") ||
            (player.toLowerCase() === "paper" && computer === "scissors") ||
            (player.toLowerCase() === "rock" && computer === "paper")
        ) {
            console.log("Results: lost");
            domselector.box.innerHTML = ``
            domselector.box.innerHTML = `Lost ✖`
            const result = 'Lost ✖';
            history.push(result);
            stat();
        } else if (
            (player.toLowerCase() === "paper" && computer === "rock") ||
            (player.toLowerCase() === "rock" && computer === "scissors") ||
            (player.toLowerCase() === "scissors" && computer === "paper")
        ) {
            console.log("Results: Won");
            domselector.box.innerHTML = ``
            domselector.box.innerHTML = `Won ✔`
            const result = 'Won ✔';
            history.push(result);
            stat();
        } else {
            console.log("Try again");
            continue;
        }
    }
}
game()