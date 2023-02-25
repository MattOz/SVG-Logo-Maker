//constructor class
class SVG {
    constructor() {
        this.baseSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg\">`
        this.shape = ""
        this.params = ""  
        this.endSVG = `</svg>`
    }
    //function to set text based
    setText(text, color){
        this.setTextContent = text;
        //throw error if user input is greater than 3 characters
        if (this.setTextContent.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.setColor = color;
        this.params = `<text x=\"150\" y=\"125\" font-size=\"60\" text-anchor=\"middle\" fill=\"${this.setColor}\">${this.setTextContent}</text>`
    }
    //function to set shape
    setShape(shape){
        this.shape = shape.render();
    }
    //renders final svg
    render(){
        return this.baseSVG + this.shape + this.params + this.endSVG
     }
}

module.exports = SVG