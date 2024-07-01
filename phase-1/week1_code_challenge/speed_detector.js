//Importing readline for user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

// Getting the userinput, converting it to a number and calling the MarkChecker function
readline.question('Enter Speed?', speed=>{
    speedChecker(speed)
    readline.close();
})

let demeritPoints = 0
let speedLimit = 70
let overSpeedMeter = 5

const speedChecker = (speed)=>{
    if(speed>speedLimit){
        demeritPoints = Math.ceil((speed-speedLimit)/overSpeedMeter)
        console.log(`Your demerit points are:  ${demeritPoints}`)
    
        if(demeritPoints>12) console.log(`License suspended`)
    
    }else{
        console.log('Ok')
    }
    
}
