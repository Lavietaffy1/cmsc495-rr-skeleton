/* ||  TODO for app.js - Mongoose implementation, Controllers, Router for api, etc */

/* ||  Imports */
require('dotenv').config()
const indexRouter = require('./routes/index')


/* ||  Creating an Express App stored in app */
const express = require('express')
const app = express()


// Defined a PORT for our app http://localhost:4000, or use a port in .env file
const PORT = process.env.PORT || 4000


/* ||  Applying Middleware */
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/* ||  Example Custom Middleware Logger */
app.use((req, res, next) => {
    // will log (/, or /index) and GET 
    //because they are the only route definitions we have
    console.log(req.url, req.method)

    // call next() in custom middleware or the app will stop working
    next()
})

/* ||  Applying Sample Router */
app.use('/', indexRouter)


/* ||  Catch all for now */
app.all('*', (req, res) => {
    res.status(404).send('This text should display for any other route not defined')
})


/* ||  Listen to Requests on our Port */
app.listen(PORT, () => console.log(`Listening to our app on port ${PORT}`))