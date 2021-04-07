// ReadME Generator

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMd = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = []

// Call Functions
// Function call to initialize app
init();



// Function Definitions
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

function promptQuestions(){
    inquirer.prompt([
        {
            type:"input",
            name:"title",
            message:"What is the title of your project?",

        },
        {
            type:"input",
            name:"description",
            message:"Describe your project.",
        },
        {
            type:"list",
            name:"tableOfContents",
            message:"Enter the table of contents headings.",
            choices: ['Description','']
        },
        
           
        

    


    ])

.then((data) => {
    
    console.log(data);
});


}


// TODO: Create a function to initialize app
function init() {
    promptQuestions();
}

