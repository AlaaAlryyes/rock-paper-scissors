const buttons = document.getElementById("options")
const options = ["rock", "paper", "scissors"]
const imgs = {
    "rock": "",
    "paper": "",
    "scissors": ""
}
const icon = document.createElement("i")
icon.className = "fa-solid fa-solid fa-hand-back-fist fa-5x choice-btn"

document.body.appendChild(icon)

var computerPoints = 0;
var playerPoints = 0;

function buildOptionsButtons() {
    let btn = document.createElement("div")
    btn.className = "option-btn"
    for (o in options) {
        buttons.appendChild(btn)
    }
}

function generateRandomChoice() {
    let c = Math.floor(Math.random() * 4);
    return options[c];
}

function determineWinner(playerChoice, computerChoice) {
    let result = 0;
    switch (playerChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    result = 0;
                    break
                case "paper":
                    result = -1;
                    break
                case "scissors":
                    result = 1;
                    break
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    result = 1;
                    break
                case "paper":
                    result = 0;
                    break
                case "scissors":
                    result = -1;
                    break
            }
            break
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    result = -1;
                    break
                case "paper":
                    result = 1;
                    break
                case "scissors":
                    result = 0;
                    break
            }
            break
    }

}

function reset() {
    computerPoints = 0;
    playerPoints = 0;
}

