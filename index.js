// Choices
const rockSelection = document.querySelector(".rock");
const paperSelection = document.querySelector(".paper");
const scissorsSelection = document.querySelector(".scissors");

// Entire Select Screen
const selectScreen = document.querySelector(".select-screen");

// All bot choices
// let randomNum = Math.floor(Math.random() * 3)
const botChoices = ['rock', 'paper', 'scissors'];

rockSelection.addEventListener('click', () => {
    console.log(botChoices[randomNum]);
})

paperSelection.addEventListener('click', () => {
    console.log("Paper picked");
})

scissorsSelection.addEventListener('click', () => {
    console.log("Scissors picked");
})