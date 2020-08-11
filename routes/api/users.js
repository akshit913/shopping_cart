const User = require('../../db').User;
const route = require('express').Router();

route.get('/', (req,res) => {
    //send an array of all users from our database
    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err)=>{
            req.status(500).send({
                error: 'Could not retreive users'
            })
        })

})

route.post('/',(req,res) => {
    //expect a user with a name
    //create that user.
    User.create({
        name: req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err) =>{
        res.status(501).send({
            error: 'Could not create user'
        })
    })
})

exports = module.exports = {
    route
}