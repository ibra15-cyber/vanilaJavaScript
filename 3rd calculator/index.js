// we declare variables to hold values
let num1 = 8
let num2 = 2

//we display those values
document.getElementById('first-num').innerText = num1
document.getElementById('second-num').innerText = num2
// let first_num = document.getElementById('first-num').innerText
// let second_num = document.getElementById('second-num').innerText
// console.log(first_num+ ", " + second_num)

function add(){
    let add = (num1 + num2) //to solve issues with string addition do the addition first
    document.getElementById('sum').innerText = 'Sum:'  + add
}

const subtract = () => {
    let sub = num1 - num2 
    document.getElementById('sum').innerText = 'Sub:' + sub

}

const multiply = () => {
    document.getElementById('sum').innerText = (num1 * num2)

}

const divide = () => {
    document.getElementById('sum').innerText = num1 / num2

}