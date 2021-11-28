// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please give your project a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project and what it does. (Required)',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log('Please enter a brief description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please describe the requirements and steps to install your project? (Required)',
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
            message: 'How do you use your projects application? (Required)',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log('Please enter instructions for usage!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a lisense from the list:',
            choices: ['none', 'Apache', 'Boost', 'BSD 2', 'BSD 3', 'Eclipse', 'GPLv3', 'GPL v2', 'AGPL v3', 'LGPL v3', 'FDL v1.3', 'Hippocratic License 2.1', 'Hippocratic License 3.0', 'IBM', 'ISC', 'MIT', 'Mozilla', 'ODC BY', 'ODbl', 'PDDL', 'Perl', 'Artistic 2.0', 'Sil', 'Unlicense', 'WTFPL', 'Zlib']
        },
        {
            type: 'input',
            name: 'contributing',
            message: "Please provide guidelines for how to contribute to your project. (Required)",
            validate: contrib => {
                if (contrib) {
                    return true;
                } else {
                    console.log('Please provide guidelines for contributing!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'repo',
            message: "Please provide your project's Github repository. (Required)",
            validate: repo => {
                if (repo) {
                    return true;
                } else {
                    console.log('Please enter a repository!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide instructions for how to test your program. (Required)',
            validate: tests => {
                if (tests) {
                    return true;
                } else {
                    console.log('If there is no testing available, enter none!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide a contact email? (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please provide an email!');
                    return false;
                }
            }
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(data) { // WHY does it pass a fileName arg into the function?
    return new Promise((resolve, reject) => {
        fs.writeFile(`./README.md`, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'File created!'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(data => {
            return generateMarkdown(data);
        })
        .then(markdown => {
            return writeToFile(markdown);
        })
        .catch(err => {
            console.log(err)
        })
}

// Function call to initialize app
init();

