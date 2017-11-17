const expect = require('expect');
const utils = require('./utils');
it('should add two numbers', () => {
    let res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
});

it('should async add two number', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square the number', () => {
    let res = utils.square(4);
    expect(res).toBe(16).toBeA('number');
});

it('should async square the number', (done) => {
    utils.asyncSquare(5, (res) => {
        expect(res).toBe(25).toBeA('number');
        done();
    });
});
