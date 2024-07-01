//Importing readline for user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


// Getting the userinput, converting it to a number and calling the MarkChecker function
readline.question('Enter Mark?', mark=>{
    studentMarkChecker(Number(mark));
    readline.close();
})


// Function for checking if mark entered is within around range
let grade
function studentMarkChecker(mark){
       if(mark>0 && mark<=100){
            studentGradeGenerator(mark);
            console.log(`the grade is: ${grade}`)
        }else{
            console.log('Mark Entered should be between 0 and 100')

        }
}

function studentGradeGenerator(mark){
    if(mark<40) return grade = 'E'
    else if(mark<=49) return grade = 'D'
    else if(mark<=59) return grade = 'C'
    else if(mark<=79) return grade = 'B'
    else return grade = 'A'
}
