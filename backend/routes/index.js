// We probably will not need this since we are making an api
// but this is just an example

/* ||  Creating a Router with one get handler */
const express = require('express')
const router = express.Router()


/* ||  example router for a Get Request */

router.route('^/$|/index')
        .get((req, res) => {
            res.send('If you visit "http://localhost:4000/" this text will show!')
        })
        //.post .put .patch .delete , and CONTROLLER/route handler function

/* ||  We can import this into other files after this statement with require('path') */        
module.exports = router