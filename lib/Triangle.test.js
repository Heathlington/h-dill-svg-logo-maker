const Triangle = require ("./Triangle")
describe('Validate', () => {
  
    describe('Shape', () => {
      it('should return with the constructed shape', () => {
        const shape = new Triangle("red", "blue", "HED");
    
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /><text x="135" y="130" fill="blue">HED</text></svg>`);
      });
    });
})