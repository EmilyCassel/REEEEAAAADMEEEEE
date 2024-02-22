// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utilities/generateMarkdown")
const fs = require("fs")


// TODO: Create an array of questions for user input
    let question = [
        //name 
        {
            type: "input", 
            message: "What is the title of your project?",
            name: "title"
        },

        //description 
        {
            type: "input", 
            message: "What problem did you solve?",
            name: "description"
        },
        {
            type: "input", 
            message: "What was your motivation?",
            name: "description"
        },
        {
            type: "input", 
            message: "What did you learn?",
            name: "description"
        },


        //installation 
        {
            type: "input", 
            message: "What installations did you use?",
            name: "installation"
        },


        //usage 
        {
            type: "input", 
            message: "What is the title of your project?",//what asking 
            name: "usage"
        },

        //contributing 
        {
            type: "input", 
            message: "What is the title of your project?", 
            name: "contributing"
        },

        //license 
        {
            type: "list", 
            message: "What license do you want to use?",
            name: "license",
            choices: [
                "MIT",
                "BSD", 
                "Apache",
                "GPL",
                "none"
            ]
        }, 
        //Tests
        {
            type: "input", 
            message: "What tests did you run?",
            name: "tests"
        },
        //questions 
        {
            type: "input", 
            message: "Anything else about this application you would like to add?", 
            name: "questions"
        },    
        {
            type: "input", 
            message: "What is your email address?",
            name: "contact information"
        },   
        
    ];

/*
function askQuestion(){
    let answer = [];

    for (var i = 0; i < question.length; i++){
        let questionAnswer = prompt(question[i]); 
        answer.push(answer);
    }
    return answer;
}

let userIdea = askQuestion();

for( var i =0; i <userIdea.length; i++)
*/

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let markdownInformation = generateMarkdown(data);

    fs.writeFile(fileName, markdownInformation, (err) => {
        if (err){
            return console.log(err)
        } 
        console.log("Success")
    })
}
 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(question)
    .then(function (data){
        let readMeFile = "README.md"
        writeToFile(readMeFile, data);
    })
}

// Function call to initialize app
init();