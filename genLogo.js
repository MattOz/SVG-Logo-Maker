//imports
const { Square, Triangle, Circle } = require("./lib/shapes");
const SVG = require("./lib/svg");

//generates logo based on response data
function genLogo(response) {    

    const userSVG = new SVG();
    userSVG.setText(response.characters, response.textColor);

    //generates circle
    if (response.shape === "Circle") {
        const circle = new Circle(response.characters, response.textColor, response.shapeColor);
        userSVG.setShape(circle);
    }

    //generates square
    if (response.shape === "Square") {
        const square = new Square(response.characters, response.textColor, response.shapeColor);
        userSVG.setShape(square);
    }

    //generates triangle
    if (response.shape === "Triangle") {
        const triangle = new Triangle(response.characters, response.textColor, response.shapeColor);
        userSVG.setShape(triangle);
    }

    //returns final svg
    return userSVG.render()
}

module.exports = genLogo;