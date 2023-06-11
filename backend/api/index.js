const router = require('express').Router();

// user middleware
router.use(logger);

// it's like api_urls.py in django
router.use('/users', require('./users'));
router.use('/blogs', allowApi, require('./blogs'));

// when not match any path above
router.use((req, res) => {
    res.status(404).send('not found api');
});

function allowApi(req, res, next) {
    console.log('allow API');
    next();
}

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

// use this for another module can see
module.exports = router;
