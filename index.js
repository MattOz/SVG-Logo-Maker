const fs = require('fs');
const inquirer = require('inquirer');
const genLogo = require('./genLogo');

inquirer.prompt([
  {
    type: 'input',
    message: 'Enter characters (3 max)',
    name: 'characters',
  },
  {
    type: 'list',
    message: 'Select text color',
    choices: ["red","green","blue","black","white"],
    name: 'textColor',
  },
  {
    type: 'list',
    message: 'Select shape',
    choices: ["Circle","Square","Triangle"],
    name: 'shape',
  },
  {
    type: 'list',
    message: 'Select shape color',
    choices: ["red","green","blue","black","white"],
    name: 'shapeColor',
  },
])

.then((response) => {
    fs.writeFile(`logo.svg`,genLogo(response) , (err) =>
    err ? console.error(err) : console.log('Generated logo.svg'))
});
