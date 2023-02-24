function genLogo(response) {    

    if (response.shape === "Circle") {
        response.shape = `<circle cx="150" cy="100" r="80" fill="${response.shapeColor}"/>`
    }

    if (response.shape === "Square") {
        response.shape = `<rect x="75" y="25" width="150" height="150" fill="${response.shapeColor}"/> `
    }

    if (response.shape === "Triangle") {
        response.shape = `<polygon points="150,25 275,150 25,150" fill="${response.shapeColor}"/>`
    }

    return `<svg version="1.1" width="300" height="200">

    ${response.shape}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.characters}</text>
  
    </svg>`
}

module.exports = genLogo;