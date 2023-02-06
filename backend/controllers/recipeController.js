/* ||  TODO recipe api route controllers/handlers */
const mongoose = require('mongoose')
const Recipe = require('../models/recipeModel')

/*
   * Get all recipes
   * @route GET /api/recipes
*/
const getAllRecipes = async (req, res) => {

    const query = Recipe.find({});
    query.read("primary")
    query.then((result) => {
        console.log(result)
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err.message)
        res.status(400).send(err)
    })

}

/*
   * Get Single recipe
   * @route GET /api/recipes/id
*/
const getSingleRecipe = async (req, res) => {

    // when retrieving in front end, we can use fetch(URL + id to get)
    const { id } = req.params

    // if there is no id supplied or undefined
    if (!id) {
        return res.status(400).json({ message: 'ID is missing'})
    }

    // if the id supplied cannot be converted to ObjectId
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'ID is invalid'})
    }

    // if something is retrieved, should be populated: this is alternative to thenables, with a catch if await fails
    const retrievedRecipe = await Recipe.findById({ _id: id }).catch((err => err.message))

    // if the recipe does not exist 
    if (!retrievedRecipe) {
        return res.status(400).json({ message: 'Recipe does not exist'})
    }

    //can the document be jsonified?
    res.status(200).json({ response: retrievedRecipe })
}

/*
   * Create single recipe
   * @route POST /api/recipes
*/
const createRecipe = async (req, res) => {

}

/*
   * Update already existing recipe
   * Send request object in body, can grab ID from there
   * @route PATCH /api/recipes
*/
const updateRecipe = async (req, res) => {

    // check for request body
    if(!req.body){
        return res.status(400).json({ message: 'Request body is missing'})
    }

    // when updating in front end, we can use fetch(URL) to update with using a PUT/PATCH method
    // remember to pass a request body
    const id = req.body._id

    // if there is no id supplied or undefined
    if (!id) {
        return res.status(400).json({ message: 'ID is missing'})
    }

    // if the id supplied cannot be converted to ObjectId
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'ID is invalid'})
    }

    // if something is updated, should be populated: this is alternative to thenables, with a catch if await fails
    const updatedRecipe = await Recipe.findByIdAndUpdate({ _id: id }, req.body).catch((err => err.message))

    // if the recipe does not exist 
    if (!updatedRecipe) {
        return res.status(400).json({ message: 'Recipe does not exist'})
    }

    res.status(200).json({ message: `Recipe with the id of ${updatedRecipe._id}, and the title ${updatedRecipe.name} has been updated!` })

}

/*
   * Delete single recipe
   * @route DELETE /api/recipes/id
*/
const deleteRecipe = async (req, res) => {
    // when deleting in front end, we can use fetch(URL + id to delete)
    const { id } = req.params

    // if there is no id supplied or undefined
    if (!id) {
        return res.status(400).json({ message: 'ID is missing'})
    }

    // if the id supplied cannot be converted to ObjectId
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'ID is invalid'})
    }

    // if something is deleted, should be populated: this is alternative to thenables, with a catch if await fails
    const deletedRecipe = await Recipe.findByIdAndDelete({ _id: id }).catch((err => err.message))

    // if the recipe does not exist 
    if (!deleteRecipe) {
        return res.status(400).json({ message: 'Recipe does not exist'})
    }

    res.status(200).json({ message: `Recipe with the id of ${deletedRecipe._id}, and the title ${deletedRecipe.name} has been deleted!` })
}

module.exports = {
    getAllRecipes,
    getSingleRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
}