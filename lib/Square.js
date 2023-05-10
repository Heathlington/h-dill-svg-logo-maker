const Shape = require("./Shapes");


class Square extends Shape {
    constructor(text, textColor, shapeColor, squareSize) {
        super(text, textColor, shapeColor);
        this.squareSize = squareSize;
    }


    render() {
       return `<rect x="100" y="100" width="200" height="200" 
<text x="100" y="100">${this.text}</text>
       />`
    }
}


module.exports = Square;



let newSquare = new Square("HH", "blue", "green")
newSquare.setShapeColor()