// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What do you want your README file to be named?',
        name: 'fileName'
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: 'input',
        message: 'What is your project about?',
        name: 'description'
    },
    {
        type: "list",
        message: "What kind of license is your project?",
        name: "license",
        choices: [
            {name: "MIT", value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"},
            {name: "Boost", value: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"},
            {name: "CC0", value: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"},
            {name: "None", value: false}
        ]
    },
    {
        type: "input",
        message: "How does one install your project?",
        name: 'installation'
    },
    {
        type: "input",
        message: 'How does one use your project in their benefit?',
        name: 'usage'
    },
    {
        type: "input",
        message: "How does one inquire support for using your project?",
        name: "support"
    },
    {
        type: "input",
        message: "Is this an open project & are people open to contribute to it?",
        name: "contributions"
    },
    {
        type: "input",
        message: "Enter your GitHub Username for Users to look you up and contact you regarding questions they might have.",
        name: "github"
    },
    {
        type: "input",
        message: "Enter your Email for Users to ask questions regarding your project",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            const md = generateMarkdown(response)
            writeToFile(`${response.fileName}.md`, md)
        })
}

// Function call to initialize app
init();
