// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generator = require ('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// title, project description, table of contents, installation instructions, usage,  license, contribution, test, github username, email, 
const questions = [
{
name: 'title',
type: 'input',
message: 'What is the name of your Project?',

},
{
name: 'description',
type: 'input',
message:'Please provide a brief description of the purpose of your project',
},
{
name: 'installation',
type: 'input',
message:'Provide instructions to run your application.',
},
{
name: 'usage',
type: 'input',
message:'Please provide the usage breakdown of your application.',
},
{
name: 'license',
type: 'list',
message:'Choosen the following license:',
choices: ['MIT', 'IBM', 'APACHE', 'BOOST']
},
{
name: 'contribution',
type: 'input',
message:'',
},
{
name: 'test',
type: 'input',
message:'',
},
{
name: 'gitHub',
type: 'input',
message:'Please provide your GitHub username:',
},
{
name: 'email',
type: 'input',
message:'What is your email address?',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile('README.md', generator(data))
    })
}

// Function call to initialize app
init();
