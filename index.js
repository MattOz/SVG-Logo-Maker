const fs = require('fs');
const inquirer = require('inquirer');
const genLogo = require('./lib/genLogo');

inquirer.prompt([
        {
            type: 'input',
            message: 'Enter characters (3 max)',
            name: 'characters',
        }
])
.then((response) => {
    fs.writeFile(`logo.svg`,genLogo(response) , (err) =>
    err ? console.error(err) : console.log('Logo Created'))
});

