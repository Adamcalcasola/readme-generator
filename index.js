// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe what your project does. (Required)',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log('Please enter a brief description of your project!');
                    return false;
                }
            }
        }
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?',
            validate: installation => {
                if (installation) {
                    return true;
                } else {
                    console.log('Please enter instructions for installation!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your projects application?',
            when: ({usage}) => {
                if (usage) {
                    return true;
                } else {
                    console.log('Please enter instructions for usage!');
                    return false;
                }
            }
        }
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators.',
            when: ({credits}) => {
                if (credits) {
                    return true;
                } else {
                    console.log('Please enter instructions for usage!');
                    return false;
                }
            }
        }
    ]) 
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
