const Circle = require ("./Circle")
describe('Validate', () => {
  
    describe('Shape', () => {
      it('should return with the constructed shape', () => {
        const shape = new Circle("red", "blue", "HED");
    
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="100" fill="red"/><text x="100" y="100" fill="blue">HED</text></svg>`);
      });
    });
})