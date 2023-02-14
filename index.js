// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(data) {
    var filename = `${data.filename}-README.md`;
    fs.writeFile(filename, data);
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