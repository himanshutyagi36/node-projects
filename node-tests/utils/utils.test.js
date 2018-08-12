const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    var res = utils.add(33,11);
    
    expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
    var square = utils.square(3);

    expect(square).toBe(9).toBeA('number');
});