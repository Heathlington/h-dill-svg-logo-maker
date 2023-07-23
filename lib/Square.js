
class Square {
    constructor(shapeColor, textColor, text) {
        this.shapeColor=shapeColor;
        this.textColor=textColor;
        this.text=text;
    }


    render() {
       return `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"> 
       <rect x="100" y="100" width="200" height="200" fill=${this.shapeColor} />
       <text x="137" y="150" fill=${this.textColor}>${this.text}</text></svg>
       `
    }
} 


module.exports = Square;
