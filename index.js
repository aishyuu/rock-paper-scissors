const bot = ["rock", "paper", "scissors"]

function getPlayerResp() {
    let resp = prompt("Enter: 'rock', 'paper', 'scissors'")
    return resp.toLowerCase()
}

function getBotResp() {
    const random = Math.floor(Math.random() * bot.length)
    return bot[random]
}

function playRound() {
    let winner = ""

    while(true){
        let player = getPlayerResp()
        let bot = getBotResp()
        if(player === bot) {
            console.log("Tie!")
            continue
        } else if ((player === "rock" && bot === "scissors") 
        || (player === "paper" && bot === "rock") 
        || (player === "scissors" && bot === "paper")) {
            winner = "player"
            break
        } else {
            winner = "bot"
            break
        }
    }
    console.log("Round winner is " + winner)
    return winner
}

function playSet() {
    let player_count = 0
    let bot_count = 0

    while(player_count < 3 && bot_count < 3) {
        let winner = playRound()
        if(winner === "player") {
            player_count++
        } else {
            bot_count++
        }
    }

    if (player_count === 3) {
        console.log("Player Wins!")
    } else {
        console.log("Bot Wins")
    }
}

playSet()