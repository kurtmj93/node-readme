// Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs'); // allows writing to file system (fs)

// Array of inquirer questions for user input
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
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide any usage instructions:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide any installation instructions:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide any guidelines for contributors:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any test instructions:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide any credits & thank-yous, here:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Under what license is this project?',
        choices: [ // all of the options from GitHub new repo
            'None', 
            'Apache 2.0', 
            'GNU General Public v3.0', 
            'MIT', 
            'BSD 2-Clause Simplified', 
            'BSD 3-Clause New', 
            'Boost Software', 
            'Creative Commons Zero v1.0 Universal', 
            'Eclipse Public 2.0', 
            'GNU Affero General Public v3.0', 
            'GNU General Pubic v2.0', 
            'GNU Lesser General Public v2.1', 
            'Mozilla Public 2.0', 
            'The Unlicense' ]
    }
];

// Function to write the README file
function writeToFile(fileName, data) {
    var file = `${fileName}-README.md`;
    fs.writeFile(file, data, (err) =>{
        if (err) {
            console.log(err);
        } // simple err callback
    });
}

// Function to initialize app
function init() {
    //inquirer package makes this function simple & elegant
    inquirer
        .prompt(questions)
        .then((answers) => {
        writeToFile(answers.title.split(" ").join(""), generateMarkdown(answers)); // .split(" ").join("") ensures spaces are eliminated from title for use as a filename
        });
};

// initialize app
init();