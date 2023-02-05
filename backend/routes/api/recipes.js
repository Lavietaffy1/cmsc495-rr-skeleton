/* ||  TODO recipe api routes */
const express = require('express')
const router = express.Router()
const recipeController = require('../../controllers/recipeController')

// basic route, /api/recipes
router.route('/')
        .get()
        .post()

// This route makes it so that you can access req.params.id: path /api/recipes/id
router.route('/:id')
        .get()
        .delete(recipeController.deleteRecipe)
        .patch()

module.exports = router