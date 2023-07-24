
class Circle {
    constructor(shapeColor, textColor, text) {
       this.shapeColor=shapeColor;
       this.textColor=textColor;
       this.text=text
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="100" fill="${this.shapeColor}"/><text x="100" y="100" fill="${this.textColor}">${this.text}</text></svg>`
    }

}

module.exports = Circle;