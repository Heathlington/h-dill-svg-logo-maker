

class Shape {
    constructor(shapeColor, shape) {
        this.shapeColor = shapeColor;
        this.shape = shape;
    }

    setColor(color) {
        this.shapeColor = color;
    }

    setShape(shape) {

    }
}




//let newShape = new Shape("BB", "blue", "red")
//let greenShape = new Shape("HH", "blue", "green")

//newShape.text = "BE";
//newShape.setShapeColor("BL");

module.exports = Shape;