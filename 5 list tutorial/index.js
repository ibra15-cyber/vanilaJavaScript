// const person = {
//     'name': 'Karim',
//     'age' : 34,
//     'country': 'uk',
// }

// const logData = () => {
//     return person.name + " is " + person.age + " years old and lives in " + person.country
// }

// console.log(logData())

// let age = 66;

// if (age < 6){
//     console.log("free")
// } else if (age >= 6 && age <=17){
//     console.log("child discount")
// }else if (age >= 18 && age <=26){
//     console.log("student discount")
// }else if (age >= 27 && age <=66){
//     console.log("full price")
// }else {
//     console.log("senior citizen discount")
// }

// let age2 = 13
// if (age < 6){
//     console.log("free")
// } else if (age < 18){
//     console.log("child discount")
// }else if (age < 27){
//     console.log("student discount")
// }else if (age < 67){
//     console.log("full price")
// }else {
//     console.log("senior citizen discount")
// }

// console.log("88888888888888888888888888888888888888888888888888888888888888888888")
// let largeCountries = ["china", "india", "usa", "indonesia", "pakistan"]

// for (let i in largeCountries){
//     console.log(largeCountries[i])
// }

// console.log("*******************************************************************")
// for (let i  = 0; i< largeCountries.length; i++){
//     console.log(largeCountries[i])
// }

// console.log("******************************************************************")

// let largeCountries2 = ['Tuvalu', 'India', 'USA', 'Indonesia', "Monaco"]

// largeCountries2.shift() //removes the front element
// for (let i in largeCountries2){
//     console.log(largeCountries2[i])
// }
// largeCountries2.unshift("China")
// for (let i in largeCountries2){
//     console.log(largeCountries2[i])
// }

// largeCountries2.pop()
// largeCountries2.push("Pakistan")
// for (let i in largeCountries2){
//     console.log(largeCountries2[i])
// }

// console.log("**************************************************************************************")
// let dayOfMonth = 13;
// let weekDay = "Friday";

// if (dayOfMonth === 13 && weekDay === "Friday"){
//     console.log("it's friday")
// }

// let hands = ['rocks', 'paper', 'scissor']

// function returnRandom() {
//     let rand =  Math.floor(Math.random() * (hands.length)) //0-0.99 * 3 === 0 - 2.99; but we want the 2 hence floor
//     // for (rand; ; rand++){  no need to iterate
//         return hands[rand]
//     // }
// }

// console.log(returnRandom())

// sorting
let fruit = ['oranges', 'apple', 'oranges', 'apple'];

const sortfn = () => {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === 'apple') {
        console.log(fruit[i])
      document.getElementById('apple').textContent += fruit[i] + ', ';
      console.log('it gets here');
    } else if (fruit[i] === 'oranges') {
      console.log("code doesn't get here");
      document.getElementById('orange').textContent += fruit[i] + ', ';
    }
  }
};
