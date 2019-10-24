const subCategoryModel = require('../model/subCategory')
const categoryModel = require('../model/category')

class SubCategoryController {

    static findAll(req, res, next) {
        subCategoryModel.find()
            .then(data => {
                res.status(200).json({
                    data    
                })
            })
            .catch(err => {
                console.log(`errornya tuh disini ${err.message}`)
            })
    }

    static findOne(req, res, next) {
        subCategoryModel.findOne({
                _id: req.params.id
            })
            .then(data => {
                res.status(201).json({
                    data
                })
            })
            .catch(err => {
                console.log(`Errornya tuh disini ${err.message}`)
            })
    }

    static create(req, res, next) {
        categoryModel.findOne({
                name: req.body.categoryName
            })
            .then(data => {
                return subCategoryModel.create({
                    categoryId: data._id,
                    name: req.body.name
                })
            })

            .then(data1 => {
                res.status(201).json({
                    data1
                })
            })

            .catch(err => {
                console.log(`errornya tuh disini loh ${err.message}`)
            })
    }


    static update(req, res, next) {

        subCategoryModel.updateOne({
                _id: req.params.id
            }, {
                name: req.body.name
            })
            .then(data => {
                res.status(201).json({
                    data
                })
            })
            .catch(err => {
                console.log(`Errornya tuh disini ${err.message}`)
            })
    }


    static delete(req, res, next) {
        // console.log('masuk ke bagian ini')
        // console.log(req.params.id, '<< ini datanya koordinatenya')
        subCategoryModel.deleteOne({
                _id: req.params.id
            })
            .then(data => {

                res.status(201).json({
                    data
                })
            })
            .catch(err => {
                console.log(`errornya tuh disini broh ${err.message}`)
            })
    }

}

module.exports = SubCategoryController