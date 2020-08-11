const Product = require('../../db').Product
const route = require('express').Router()

route.get('/',(req,res) => {
    //Get products
    Product.findAll()
        .then((products) => {
            res.status(200).send(products)
        }).catch((err) =>{
            res.status(500).send({
                error: 'Could not retreive the products'
            })
        })

})

route.post('/', (req,res) => {
    //Validation of price
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error: 'Price is not valid number'
        })
    }
    //Add a product
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    }).then((product) => {
        res.status(201).send(product)
    }).catch((err) =>{
        res.status(501).send({
            error : 'Error adding product'
        })
    })
})

exports = module.exports = {
    route
}