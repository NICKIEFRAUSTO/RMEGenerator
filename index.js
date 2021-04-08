// ReadME Generator

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMd = require("./generateMarkdown");
const licenseList = ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"];

// Call Functions
// Function call to initialize app
init();



// Function Definitions
// TODO: Create a function to write README file
function writeToFile(data) {
    let fileName="README.md"
    // let licenseBadge= renderLicenseBadge(data.license)  
    let fileString=`# ${data.title}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#contributing)

* [Questions](#questions)

#### Description
${data.description}
#### Installation
${data.installation}
#### Usage
${data.usage}
#### License
${data.license}
#### Contributing
${data.contributing}
#### Tests
${data.tests}
#### Questions
${data.questions}
`

    fs.writeFile(fileName, fileString, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  }
// function renderLicenseBadge(license) {
//     if (license===) {
        
//     }
    
// }

function promptQuestions()
{
   return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project.",
        },
        {
            type: "input",
            name: "installation",
            message: "List the installation requirements.",
        },
        
        {
            type: "input",
            name: "usage",
            message: "Describe how to use the application.",
        },   
        {
            type: "list",
            name: "license",
            message: "Select a license",
            choices: licenseList,
        }, 
        {
            type: "input",
            name: "contributing",
            message:"Who were the contributing developers",
        },
        {
            type: "input",
            name: "tests",
            message: "To test the application, enter node index.js and answer the prompts",
        },  
        {
            type:"input",
            name:"questions",
            message:"For questions or comments contact me on [GitHub](https://github.com/NICKIEFRAUSTO)"
        }
      
    ])


 }





// TODO: Create a function to initialize app
function init() 
{
promptQuestions().then((data) => 
{
writeToFile(data);
}
)}
