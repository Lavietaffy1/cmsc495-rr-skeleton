/* ||  TODO Mongoose model/Schema for Recipe --MONGO TEAM */
const mongoose = require('mongoose')

const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: String,
  description: String,
  directions: [ String ],
  ingredients: [{ measurement: Number, measurementType: String, ingredient: String }],
  notes: String,
  Servings: Number
})

module.exports = recipeSchema

