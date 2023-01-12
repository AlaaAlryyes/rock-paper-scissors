const buttons = document.getElementById("options")
const options = ["rock", "paper", "scissors"]
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const resetBtn = document.getElementById("reset")
const resultContainer = document.getElementById("result")
const roundsElem = document.getElementById("round")
const rockIcon = document.createElement("i")
const paperIcon = document.createElement("i")
const scissorsIcon = document.createElement("i")
var computerChoice = document.getElementById("computer-choice")
var computerChoiceVal = document.getElementById("computer-choice-val")
var playerChoiceVal = document.getElementById("player-choice-val")
const imgs = {
    "rock": rockIcon,
    "paper": paperIcon,
    "scissors": scissorsIcon
}

var rounds = 0
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
    let choice = generateRandomChoice()
    computerChoice.innerHTML = ""
    computerChoice.appendChild(imgs[choice])
    return choice;
}

function initListeners() {
    resetBtn.addEventListener("click", (e) => { 
        rounds=0;
        computerChoice.innerHTML=""
    })
    rockBtn.addEventListener("click", (e) => {
        playerChoiceVal.innerText = "Your choice: " + "rock"
        determineWinner("rock", setComputerChoice())
    })
    paperBtn.addEventListener("click", (e) => {
        playerChoiceVal.innerText = "Your choice: " + "paper"
        determineWinner("paper", setComputerChoice())
    })
    scissorsBtn.addEventListener("click", (e) => {
        playerChoiceVal.innerText = "Your choice: " + "scissors"
        determineWinner("scissors", setComputerChoice())
    })
}

function generateRandomChoice() {
    let c = Math.floor(Math.random() * 3);
    computerChoiceVal.innerText = "Computer choice :" + options[c];
    return options[c];
}

function determineWinner(playerChoice, computerChoice) {
    rounds++
    roundsElem.innerText = "Rounds: "+rounds
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

    switch (result) {
        case 0:
            resultContainer.innerHTML = "Draw!!"

            break;
        case 1:
            resultContainer.innerHTML = "You Won!!"

            break;
        case -1:
            resultContainer.innerHTML = "You lost!!"

            break;
    }

}

function reset() {
    computerPoints = 0;
    playerPoints = 0;
}

setIconsContent()
initListeners()
setComputerChoice() 
