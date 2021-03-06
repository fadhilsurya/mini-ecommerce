const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

const app = require('../app.js')

let dummyCategoryId = '5db1bb81d29f7d3e5ad62ede'
let testingDummyCat = '5db206ce881f5b86f695b15e'
chai.use(chaiHttp)


describe('category testing', function () {

    // GET ALL
    describe('GET/category', function () {
        it('should return array of object with status code 200', function (done) {
            chai
                .request(app)
                .get('/category')
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    expect(res.body).to.be.an('object')
                    done()
                })
        })
    })
    // FINDONE
    describe('GET/category/:id', function () {
        it('Should return array of object with spesific one object and status code 200', function (done) {
            chai
                .request(app)
                .get(`/category/${dummyCategoryId}`)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    expect(res.body).to.be.an('object')
                    done()
                })

        })
    })
    // CREATE
    describe('POST/category', function () {
        it('Should return object', function (done) {

            let categoryDummy = {
                name: 'categoryDummy'
            }

            chai
                .request(app)
                .post(`/category`)
                .send(categoryDummy)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(201)
                    expect(res.body).to.be.an('object')
                    done()
                })
        })
    })
    // UPDATE
    describe('PATCH/category', function () {
        it('Should return array of object', function (done) {

            let updateDummy = {
                name: 'testingCategoryDummy'
            }
            chai
                .request(app)
                .patch(`/category/${dummyCategoryId}`)
                .send(updateDummy)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(201)
                    expect(res.body).to.be.an('object')
                    done()
                })
        })
    })
    // DELETE
    describe('DELETE/category/:id', function () {
        it('should return form object', function (done) {

            let dummyId = '5db206ce881f5b86f695b15e'

            chai
                .request(app)
                .delete(`/category/${dummyId}`)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.be.an('object')
                    expect(res).to.have.status(201)
                    done()
                })

        })
    })







})