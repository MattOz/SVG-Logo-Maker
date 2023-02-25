//parent class
class Shapes {
    constructor(characters, textColor, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shapeColor = shapeColor; 
    }
    setColor(color){
        this.shapeColor = color;
    }
}

//child class circle
class Circle extends Shapes {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor);
    }
    render(){
       return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

//child class triangle
class Triangle extends Shapes {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor);
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

//child class square
class Square extends Shapes {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor);
    }
    render(){
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
    }
}

//exporting classes
module.exports = {
    Circle,
    Triangle,
    Square
}