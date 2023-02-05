// cors configuration file for later

// Whitelist = the origins allowed, tested google fetch
const whiteList = ['https://www.google.com']
const corsOptions = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Origin not allowed'))
        }
    },
    optionsSuccessStatus: 200,
}

module.exports = corsOptions