// let firstCard = 14
// let secondCard = 11

// let sum = firstCard + secondCard

// console.log(sum)

// if (sum < 21){
//     console.log("do you want to dreaw a new card?")
// } else if (sum===21){
//     console.log("hurry you won you got a blackjack!")
// } else {
//     console.log("You're are out of the game")
// }


// let age = 22

// if (age < 21) console.log("you are too young")
// else console.log("you are welcome")

// let age = 16565
// if (age < 100) console.log("not eligible")
// else if (age === 100) console.log("come for your card")
// else console.log("you have already enjoyed your birthday")


//BEfore 
// let firstCard = getRandomCard()
// let secondCard = getRandomCard() 
// let sum = firstCard + secondCard
// let newcard = getRandomCard() 
let sum = 0
// let cardsList = [firstCard, secondCard]
let cardsList = []

let hasBlackJack = false
// let isAlive = true 
let isAlive = false
let message = ''

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum')

// let cardsStr = cardsList[0] + ", " + cardsList[1] // the for loop replaces this
// let cardsEl = document.getElementById('cards')
let cardsEl = document.querySelector('#cards')

//implenting objectsbg
let player = {
    name : "Per",
    chips : 145 
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips


const renderGame = () => {
    
    sumEl.textContent = sum

    //render our two cards when we click start game
    //add the next when we click new card and display all item 
    cardsEl.textContent = cardsList

    // cardsEl.textContent = cardsStr
    if (sum <= 20) {
        console.log("do you wish to draw another card")
        message = "Do you wish to draw another card"
        messageEl.textContent = message
    }else if (sum === 21) {
        console.log('yes you won')
        message = "yes you won"
        hasBlackJack = true
        messageEl.textContent = message
    }else {
        console.log("you are out")
        isAlive = false
        message = "we are logging you out; you lost"
        // console.log(message)
        messageEl.textContent = message
    }




console.log("is blackjacket :" , hasBlackJack)
console.log("is he alive: ", isAlive)
}

function newCard(){
    if (isAlive && !hasBlackJack) { //we we havent passed 21 and havent won continue to generate new card
        let newcard = getRandomCard()
        sum += newcard //update sum and recall the fn 
        cardsList.push(newcard)
        
        // if we dont want to iterate our list and wish to forward the complete list 
        // we can catch it in render card, thos is part is redundant
        //becasue after pusing our card has a new value, so calling render adds it
        for (let i in cardsList) {
            cardsEl.textContent += cardsList[i] + ' '
        }
        renderGame()
    }
    
}

//start game calling renderGame, initialize the game; will stop working wehen isalive changes
function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard() 
    cardsList = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true //starting the game
    renderGame()
}

//generates our random nums for the 3 variables
function getRandomCard() {
    let rand = Math.floor(Math.random() * 13) + 1 //0 - 0.999 ie 0 - 12 + 1  means start from one when you get 0
    // let rand = Math.round (Math.random() * 13) //0 - 0.99 0-12.999 round
    if( rand == 1){
        return 11
    } else if (rand == 11 || rand == 12 || rand == 13){
        return 10
    }
    return rand //else return rand
}