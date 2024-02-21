// TODO: Include packages needed for this application
const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
    let question = [
        ""
    ];


function askQuestion(){
    let answer = [];

    for (var i = 0; i < question.length; i++){
        let questionAnswer = prompt(questions[i]); 
        answer.push(answer);
    }
    return answer;
}

let userIdea = askQuestion();

for( var i =0; i <userIdea.length i++)


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();