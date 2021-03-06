const request = require("supertest");
const expect = require('expect');
let app = require("./server").app;

describe('SERVER', () => {
    describe('GET /', () => {
        it("should return hello world response", done => {
        	request(app)
                .get("/")
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });

    });
    describe('GET /users', () => {
        it("should check if user exist", done => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: "Ali", age: 28
                    });
                })
                .end(done);
        });
    });
});
