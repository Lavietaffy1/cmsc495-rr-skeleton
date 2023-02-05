/* ||  TODO Maybe a connection function to import in app.js -- MONGO TEAM*/
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
const connectDB = mongoose.connection;

connectDB.once('open', function(callback) {
  //The code in this asynchronous callback block is executed after connecting to MongoDB. 
      console.log('Successfully connected to MongoDB.');
  });

module.exports = connectDB