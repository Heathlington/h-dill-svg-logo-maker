

class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    setShapeColor(color) {
        this.shapeColor = color;
    }

    setText(text) {
        if(text.length > 3) {
            console.log("Text can only b up to 3 characters")
            return 
        }
    } 
}




let newShape = new Shape("BB", "blue", "red")
let greenShape = new Shape("HH", "blue", "green")

newShape.text = "BE";
newShape.setShapeColor("BL");

module.exports = Shape;