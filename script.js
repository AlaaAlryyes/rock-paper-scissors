const buttons = document.getElementById("options")
const options = ["rock", "paper", "scissors"]
const imgs = {
    "rock": "",
    "paper": "",
    "scissors": ""
}

function buildOptionsButtons() {
    let btn = document.createElement("div")
    btn.className = "option-btn"
    for (o in options) {
        buttons.appendChild(btn)
    }
}

function generateRandomChoice() {

}

function determineWinner(playerChoice, computerChoice) {

}

