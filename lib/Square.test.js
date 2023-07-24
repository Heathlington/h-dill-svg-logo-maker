const Square = require ("./Square")
describe('Validate', () => {
  
    describe('Shape', () => {
      it('should return with the constructed shape', () => {
        const shape = new Square("red", "blue", "HED");
    
        expect(shape.render()).toEqual(`<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="100" width="200" height="200" fill="red" /><text x="137" y="150" fill="blue">HED</text></svg>`);
      });
    });
})