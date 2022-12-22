let name = "linda"
let greeting = "Hi there"


const greet = () => {
    console.log(greeting + " " + name)
}

greet()

//practicing increment
// created a fn that adds 3
// created another fn that takes 1
// created a last fn that calls the first 2
let myPoints = 3 

function add3Points(){
    myPoints += 3;
}

function remove1Point(){
    myPoints  -= 1;
}

const counter = () => {
    add3Points()
    add3Points()
    add3Points()
    console.log(myPoints)

    remove1Point()
    console.log(myPoints)
}

counter()


// randering error Message
let error_message = "sorry you do not have enough funds to make purchase"
const error = () => {
    
    document.getElementById('error').innerText = error_message

} 