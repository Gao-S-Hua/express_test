// Add a logger middleware
const logger = (req, res, next) => {
    console.log('**Get new Reqest: ' + req.method);
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    // console.log(res);
    next();
};

module.exports = logger;