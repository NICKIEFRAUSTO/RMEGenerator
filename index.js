// ReadME Generator

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMd = require("./generateMarkdown");


// Call Functions
// Function call to initialize app
init();



// Function Definitions
// TODO: Create a function to write README file
function writeToFile(data) {
let fileName="README.md"
let licenseBadge= renderLicenseBadge(data.license)  
let fileString=`# Title: ${data.title}
##Table of Contents:${data.TableOfContents}
-Description
-Installation
-Usage
-License
-Contributing
-Tests
-Questions
##Description:${data.description}
##Installation:${data.installation}
##Usage:${data.usage}
##License:${data.license}
##Contributing:${data.contributing}
##Tests:${data.tests}
##Questions:${data.questions}
`

    fs.writeFile(fileName, fileString, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
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
            type:"input",
            name:"installation",
            message:"List the installation requirements.",
            
        },
        {
            type:"input",
            name:"usage",
            message:""
        }
    
        
           
        

    


    ])

.then((data) => {
    writeToFile(data);
    
});


}


// TODO: Create a function to initialize app
function init() {
    promptQuestions();
}

