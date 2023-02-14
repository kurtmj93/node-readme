// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'email',
        validate: function(email) {
            // Regex email check test found on stackoverflow
            var valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            // alert via console.log if invalid
            if (valid !== true) {
                console.log("\n Please enter a valid email.");
                return;
            } else {
                return valid;
            }
        },
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your app:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide any installation instructions:'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var file = `${fileName}-README.md`;
    fs.writeFile(file, data, (err) =>{
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
        writeToFile(answers.title.split(" ").join(""), generateMarkdown(answers));
        });
};

// Function call to initialize app
init();