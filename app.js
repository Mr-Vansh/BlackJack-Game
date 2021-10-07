let cards = []
let sum = 0
let hasBlackJAck = false
let isAlive = false
let message = ""
let messageEl= document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



function getRandomCard(){   // generating random numbers for the cards to draw
    let randomNumber = Math.floor(Math.random()*13) + 1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}


function startGame(){
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame(){

        sumEl.textContent = "Sum: " + sum   // displaying sum of cards with SUM word 
        cardsEl.textContent = "Cards: "     // displaying cards number with CARDS word
        for(let i=0 ; i<cards.length ; i++){  
            cardsEl.textContent += cards[i] + " "
        }

        if(sum <= 20){
            message = "Do you want to draw the new card ? "
        }else if(sum === 21){
            message = "You've got the Blackjack !"
            hasBlackJAck = true
        }else{
            message = "You're out of the game"
            isAlive = false
        }

        messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJAck === false){
        let card = getRandomCard()
        sum += card        // adding new card value to the sum
        cards.push(card)  // pushing new card into cards of array
        renderGame()       
    }
}