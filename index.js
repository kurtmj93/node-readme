// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'filename',
        message: 'What would you like to name the README file? Note: the output will append "-README.md"'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your app:'
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    var filename = `${data.filename}-README.md`;
    fs.writeFile(filename, data, (err) =>{
        if (err) {
            console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
        writeToFile(generateMarkdown(answers));
        });
};

// Function call to initialize app
init();