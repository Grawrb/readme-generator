// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like to name your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of what you hope to accomplish with this project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps must be taken to install your project, i.e. required software and packages, necessary CLI commands?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the proper usage for your project, i.e. steps to run application, available commands and their expected outputs?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will this project be using?',
        choices: ['MIT', 'Apache License 2.0', 'GPLv2', 'GPLv3', 'LGPLv2.1', 'LGPLv3', 'Mozilla Public License 2.0(MPL 2.0)']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'List your contribution guidelines'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'List all necessary steps for proper testing of your project'
    },
    {
        type: 'input',
        name: 'user',
        message: 'Enter your GitHub user name'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
