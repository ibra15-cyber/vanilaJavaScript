//******************* december 4; didn't download the place mern project file so 
// i had to take this on 

//created a counter that was supposed to use increament i added decrement interms of error
// also i control decrement in case it goes beyond zero ie no zero count
//i added a total whihc i started as a separate button and id
//i made it into save.
//because i nneded the string i used span and gave it an id and output my id there


// document.getElementById("count").innerText = 5


// let count = 0

// console.log(count)

// //create a variable myage and add the value of your age an conosole log
// let myAge = 35;
// console.log("my age: " + myAge) //, + will do

// // mathematical operations using variables
// let firstBatch = 5
// let secondBatch = 7
// let count2 = firstBatch + secondBatch;
// console.log(count2)

// let myAge2 = 35
// let ratioDogAge = 7 

// console.log("Dog age is : " , myAge2*ratioDogAge)

// // increment 
// let count3 = 5
// count3 = count3 + 1
// console.log(count3)

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints += 50
// console.log(bonusPoints)
// bonusPoints -=75
// console.log(bonusPoints)
// bonusPoints +=45
// console.log(bonusPoints)

let count = 0;
let countStr; 
let total = 0


function increment(){
    count += 1
    document.getElementById("count-el").innerText = count
}

let decrement = () => {
    document.getElementById("count-el").innerText = count
    if (count == 0)
        return 
    else 
        count -= 1
}

const save = () => {
   
    countStr = count + " - "  //get our current count after increment and decre and contcat string - 
    
    document.getElementById('save-el').textContent += countStr //we already got a text there so concatenate this with this
    
    total += count //get the total 
    // i could have made the total here 
    document.getElementById('count-total').textContent = total
    // console.log(typeof(total))
    // console.log(total)

    document.getElementById("count-el").innerText = 0 //reset the innerText to 0
    count = 0 //make count value too as zero

  
}

const result = () => {
    
    document.getElementById('count-total').textContent += total
}

// strings 
// let name= 'karim'
// let greeting = ' Good morning'

// let myGreeting = name + greeting
// console.log(myGreeting)

