//imports
const fs = require('fs');
const inquirer = require('inquirer');
const genLogo = require('./genLogo');

//command line prompts for 
inquirer.prompt([
  {
    type: 'input',
    message: 'Enter characters (3 max)',
    name: 'characters',
  },
  {
    type: 'input',
    message: 'Enter color keyword or hex code for font color',
    name: 'textColor',
  },
  {
    type: 'list',
    message: 'Select shape',
    choices: ["Circle","Square","Triangle"],
    name: 'shape',
  },
  {
    type: 'input',
    message: 'Enter color keyword or hex code for background color',
    name: 'shapeColor',
  },
])
//generating logo with response data
.then((response) => {
    fs.writeFile(`logo.svg`,genLogo(response) , (err) =>
    err ? console.error(err) : console.log('Generated logo.svg'))
});
