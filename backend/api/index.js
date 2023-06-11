const router = require('express').Router();

// it's like api_urls.py in django
router.use('/users', require('./users'));

// when not match any path above
router.use((req, res) => {
    res.status(404).send('not found api');
});

// use this for another module can see
module.exports = router;
