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
            message: 'Describe what your project does. (Required)',
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
            type: 'input',
            name: 'credits',
            message: 'List your collaborators.',
            validate: credits => {
                if (credits) {
                    return true;
                } else {
                    console.log('Please enter instructions for usage!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What about the tests?',
            validate: tests => {
                if (tests) {
                    return true;
                } else {
                    console.log('Please tell us about the test!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What about the questions?',
            validate: questions => {
                if (questions) {
                    return true;
                } else {
                    console.log('No questions!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a lisense from the list:',
            choices: ['Apache', 'Boost', 'Eclipse', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Perl', 'Sil', 'Unlicense', 'Zlib']
        }
    ]) 
};

// TODO: Create a function to write README file
function writeToFile(data) { // WHY does it pass a fileName arg into the function?
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
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

