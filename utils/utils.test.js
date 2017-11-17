const expect = require('expect');
const utils = require('./utils');

describe('utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            let res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });
    });
    describe('#asyncAdd', () => {
        it('should async add two number', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });

    describe('#square', () => {
        it('should square the number', () => {
            let res = utils.square(4);
            expect(res).toBe(16).toBeA('number');
        });
    });

    describe('#asyncSquare', () => {
        it('should async square the number', (done) => {
            utils.asyncSquare(5, (res) => {
                expect(res).toBe(25).toBeA('number');
                done();
            });
        });
    });
});
