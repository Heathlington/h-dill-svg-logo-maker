class SVGwrapper {
    constructor(textColor) {
        this.text = "";
        this.selectShape = "";   // circle, square or triangle 
        this.textColor = textColor
    }

    setText(text) {
        if(text.length > 3) {
            console.log("Text can only b up to 3 characters")
            return 
        }
        return `<text x="100" y="100" fill=${textColor}>${this.text}</text>`
    }

    setShape(shape) {
        this.selectShape = shape.render();
    } 

    render() {
        `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
${this.selectShape}
${this.text}
</svg>`
    }

}

module.exports = SVGwrapper;