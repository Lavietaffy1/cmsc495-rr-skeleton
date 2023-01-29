// We probably will not need this since we are making an api
// but this is just an example

/* ||  Creating a Router with one get handler */
const express = require('express')
const router = express.Router()
const connectDB = require('../config/connectDB')
const recipeSchema = require('../models/recipeModel')


/* ||  example router for a Get Request */

router.route('^/$|/index')
        .get((req, res) => {
            const recipe = connectDB.model(
                "Recipes",
                recipeSchema,
                "Recipes"
            )
            const query = recipe.find({});
            query.read("primary")
            query.then((result) => {
                console.log(result)
                res.send(result)
            }).catch((err) => {
                console.log(err)
                res.send(err)
            })
        })
        //.post .put .patch .delete , and CONTROLLER/route handler function

/* ||  We can import this into other files after this statement with require('path') */        
module.exports = router