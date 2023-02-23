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
            message: 'Select shape',
            choices: ["Circle","Square","Triangle"],
            name: 'shape',
          },
          {
            type: 'list',
            message: 'Select color',
            choices: ["red","green","blue","black","white"],
            name: 'color',
          },
])
.then((response) => {
    fs.writeFile(`logo.svg`,genLogo(response) , (err) =>
    err ? console.error(err) : console.log('Logo Created'))
});