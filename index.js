// Choices
const rockSelection = document.querySelector(".rock");
const paperSelection = document.querySelector(".paper");
const scissorsSelection = document.querySelector(".scissors");

// Next Round Button
const nextRoundSelection = document.querySelector(".next-round-btn")

// Select Screen
const selectScreen = document.querySelector(".select-screen");

// Reset Button
const resetButton = document.querySelector(".reset-btn")
resetButton.style.display = 'none'

// Result Screen
const winnerScreen = document.querySelector(".winner-screen")
winnerScreen.style.display = 'none'

// Winner
const roundWinner = document.querySelector(".winner")

// Scores
const playerNum = document.querySelector(".player-score")
const botNum = document.querySelector(".bot-score")

// Set Over Text
const setOver = document.querySelector(".set-over")
setOver.style.display = 'none'

// All bot choices
const botChoices = ['rock', 'paper', 'scissors'];

// Scores
let playerScore = 0
let botScore = 0

function getBotResp() {
    return botChoices[Math.floor(Math.random() * 3)];
}

function playRound(player) {
    let bot = getBotResp()
    selectScreen.style.display = 'none'
    winnerScreen.style.display = 'block'
    if(player === bot) {
        console.log("Tie")
        roundWinner.textContent = "Tie!"
        nextRoundSelection.textContent = "Go again!"
    } else if ((player === "rock" && bot === "scissors") 
    || (player === "paper" && bot === "rock") 
    || (player === "scissors" && bot === "paper")) {
        console.log("You win!")
        roundWinner.textContent = "You win!"
        nextRoundSelection.textContent = "Next Round!"
        playerScore += 1
        playerNum.textContent = playerScore
    } else {
        console.log("Bot Win!")
        roundWinner.textContent = "The bot wins!"
        nextRoundSelection.textContent = "Next Round!"
        botScore += 1
        botNum.textContent = botScore
    }
    if(playerScore === 3 || botScore === 3) {
        setOver.style.display = 'block'
        nextRoundSelection.style.display = 'none'
        resetButton.style.display = 'block'
    }
}

function reset() {
    setOver.style.display = 'none'
    resetButton.style.display = 'none'
    nextRoundSelection.style.display = 'block'
    playerScore = 0
    botScore = 0
    playerNum.textContent = playerScore
    botNum.textContent = botScore
    winnerScreen.style.display = 'none'
    selectScreen.style.display = 'block'
}

rockSelection.addEventListener('click', () => {
    playRound('rock')
})

paperSelection.addEventListener('click', () => {
    playRound('paper')
})

scissorsSelection.addEventListener('click', () => {
    playRound('scissors')
})

nextRoundSelection.addEventListener('click', () => {
    winnerScreen.style.display = 'none'
    selectScreen.style.display = 'block'
})

resetButton.addEventListener('click', reset)