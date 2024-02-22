// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js")
const fs = require("fs")


// TODO: Create an array of questions for user input
    let question = [
        //name 
        {
            type: "input", 
            messsage: "What is the title of your project?",//what asking 
            name: "title"
        },

        //description 
        {
            type: "input", 
            messsage: "?",//what asking 
            name: "description"
        },
        {
            type: "input", 
            messsage: "?",//what asking 
            name: "description"
        },
        {
            type: "input", 
            messsage: "What is the title of your project?",//what asking 
            name: "description"
        },


        //installation 
        {
            type: "input", 
            messsage: "What is the title of your project?",//what asking 
            name: "installation"
        },


        //usage 
        {
            type: "input", 
            messsage: "What is the title of your project?",//what asking 
            name: "usage"
        },

        //contributing 
        {
            type: "input", 
            messsage: "What is the title of your project?",//what asking 
            name: "contributing"
        },

        //license 
        {
            type: "list", 
            messsage: "What license do you want to use?",//what asking 
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
            messsage: "What is the title of your project?",//what asking 
            name: "tests"
        },
        //questions 
        {
            type: "input", 
            messsage: "What is the title of your project?",//what asking 
            name: "questions"
        },









        
        
    ];


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


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let markdownInformation = generateMarkdown(data);

    fs.writefile(fileName, markdownInformation, (err) => {
        if (err){
            return console.log(err)
        } 
        console.log("Success")
    })
}


writeToFile();

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