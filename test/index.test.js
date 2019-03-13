const assert = require('chai').assert;
const superagent = require('superagent');

const pathProduct = 'http://localhost:8080/api/products';
const pathCategories = 'http://localhost:8080/api/categories';
const pathTopics = 'http://localhost:8080/api/topics';

chai = require('chai'),
    chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
chai.config.includeStack = true;

var should = chai.should(),
    expect = chai.expect;
describe('Crud Application Test', function () {
    describe('(GET PRODUCTS)', function () {
        it('Get /api/products ', function (done) {
            superagent.get(pathProduct).end(function (err, res) {
                if (err) { return done(err); } else {
                    assert.equal(res.status, 200);
                    assert.equal(res.statusCode, 200);
                    done();
                }
            })
        });
    });
    describe('(POST PRODUCTS)', function () {
        it('Post /api/products => (test data)', function (done) {
            const product = {
                name: 'Test Balık',
                desc: 'Test Açıklaması',
                piece: 99,
                price: 99,
                categoryId: 1,
                imageUrl: 'Test İmage Url'
            };
            superagent.post(pathProduct).send(product).end(function (err, res) {
                assert.isNotNull(res.body.name, res.body.desc, res.body.price, res.body.piece, res.body.categoryId, res.body.imageUrl);
                assert.equal(res.status, 200);
                done();
            })
        });
    });
    describe('(PUT PRODUCTS)', function () {
        it('Put /api/products/:id => (test data)', function (done) {
            const putProduct = {
                id: '99',
                name: 'Test',
            };
            superagent.get(pathProduct).send(putProduct).end(function () {
                superagent.put(pathProduct).end(function (err, res) {
                    assert.equal(res.status, 200);
                    done();
                })
            })
        });
    });
    describe('(DELETE PRODUCTS)', function () {
        it('Delete /api/products/:id => (test data)', function (done) {
            const delProduct = {
                id: '00',
            };
            superagent.get(pathProduct).send(delProduct).end(function () {
                superagent.delete(pathProduct).end(function (err, res) {
                    assert.isEmpty(res.body, 200);
                    done();
                })
            })
        });
    });
    describe('(CONDITIONS PRODUCTS)', function () {
        it('it should be Array', function (done) {
            superagent.get(pathProduct).end(function (err, res) {
                if (err) { assert.fail(new TypeError('need array')); } else {
                    assert.isObject(res);
                    assert.isArray(res.body);
                    assert.equal(res.status, 200);
                    done();
                }
            })
        });
    });
    //------------------------------CATEGORIES-----------------------------------------
    //---------------------------------------------------------------------------------
    describe('(GET CATEGORIES)', function () {
        it('GET /api/categories ', function (done) {
            superagent.get(pathCategories).end(function (err, res) {
                if (err) { return done(err); } else {
                    assert.equal(res.status, 200);
                    done();
                }
            })
        });
    });
    describe('(CONDITIONS CATEGORIES)', function () {
        it('it should be array & not empty', function (done) {
            superagent.get(pathCategories).end(function (err, res) {
                assert.isNotEmpty(res.body, assert.isArray(res.body));
                assert.equal(res.status, 200);
                done();
            })
        })
    });
    //------------------------------TOPICS-----------------------------------------
    //-----------------------------------------------------------------------------
    describe('(GET Topics)', function () {
        it('GET /api/topics ', function (done) {
            superagent.get(pathTopics).end(function (err, res) {
                if (err) { return done(err); } else {
                    assert.equal(res.status, 200);
                    assert.isNotEmpty(res.body, assert.isArray(res.body));
                    done();
                }
            })
        });
    });
});


