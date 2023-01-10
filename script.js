const buttons = document.getElementById("options")
const options = ["rock", "paper", "scissors"]
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const resetBtn = document.getElementById("reset")
const rockIcon = document.createElement("i")
const paperIcon = document.createElement("i")
const scissorsIcon = document.createElement("i")
var computerChoice = document.getElementById("computer-choice")
var computerChoice = ""
const imgs = {
    "rock": rockIcon,
    "paper": paperIcon,
    "scissors": scissorsIcon
}
var computerPoints = 0;
var playerPoints = 0;

function buildOptionsButtons() {
    let btn = document.createElement("div")
    btn.className = "option-btn"
    for (o in options) {
        buttons.appendChild(btn)
    }
}

function setIconsContent() {
    rockIcon.className = "fa-solid fa-solid fa-hand-back-fist fa-5x choice-btn"
    paperIcon.className = "fa-solid fa-hand fa-5x choice-btn"
    scissorsIcon.className = "fa-solid fa-hand-scissors fa-5x choice-btn"
}


function setComputerChoice() {
    let c = generateRandomChoice()
    computerChoice.appendChild(imgs.paper)
    computerChoice.removeChild(imgs.paper)
    computerChoice.appendChild(imgs[c])
}

function initListeners() {
    resetBtn.addEventListener("click", (e) => { })
    rockBtn.addEventListener("click", (e) => {
        generateRandomChoice()
    })
    paperBtn.addEventListener("click", (e) => {
        generateRandomChoice()
    })
    scissorsBtn.addEventListener("click", (e) => {
        generateRandomChoice()
    })
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

    // switch (result) {
    //     case 0:

    //         break;
    //     case 1:
    //         break;
    //     case -1:
    //         break;
    // }

}

function reset() {
    computerPoints = 0;
    playerPoints = 0;
}

setIconsContent()
initListeners()
setComputerChoice() 
