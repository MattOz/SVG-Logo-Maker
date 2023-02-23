function genLogo(response) {
    return `<svg version="1.1" width="300" height="200">

    <circle cx="150" cy="100" r="80" fill="${response.color}"/>
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">${response.characters}</text>
  
    </svg>`
}

module.exports = genLogo;

{/* <svg>
<polygon points="150,25 275,150 25,150"/> 
<rect x="75" y="25" width="150" height="150"/> 
<circle cx="150" cy="100" r="80" fill="cyan"/>
</svg> */}

//refer to document.js in Mini Project