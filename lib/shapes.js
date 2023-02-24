class Shapes {
    constructor() {
        function Shapes(characters, textColor, shapeColor){
        this.characters = characters;
        this.textColor = textColor;
        this.shapeColor = shapeColor; 
        }
    }
}
      
// make these classes like above
function Square(characters, textColor, shapeColor) {
Shapes.call(this, characters, textColor, shapeColor);
}

function Triangle(characters, textColor, shapeColor) {
Shapes.call(this, characters, textColor, shapeColor);
}

function Circle(characters, textColor, shapeColor) {
Shapes.call(this, characters, textColor, shapeColor);
}
