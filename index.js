// bring in our libraries
const Triangle = require ("./lib/Triangle")
const Square = require ("./lib/Square")
const Circle = require ("./lib/Circle")
const inquirer= require ("inquirer")
const fs= require ("fs")
// bring in our classes



// create function to prompt user for info (INQUIRER)
inquirer.prompt([
    {
        type: "list",
        name: "shape",
        message: "What shape do you want to create?",
        choices: ["Circle", "Square", "Triangle"],
    },

    {
        type: "input",
        name: "shapeColor",
        message: "What color do you want your shape to be?",   
    },

    {
        type: "input",
        name: "textColor",
        message: "What color do you want your text to be?",   
    },

    {
        type: "input",
        name: "text",
        message: "What three letters do you want in your logo?",   
    },

]) .then(data => {
    let shape
    switch(data.shape){
        case "Circle": 
        shape = new Circle(data.shapeColor, data.textColor, data.text)
        break
        case "Square": 
        shape = new Square(data.shapeColor, data.textColor, data.text)
        break
        case "Triangle": 
        shape = new Triangle(data.shapeColor, data.textColor, data.text)
        break
    }
    fs.promises.writeFile("dist/shape.svg", shape.render())
})



// create function to write new SHAPE to file