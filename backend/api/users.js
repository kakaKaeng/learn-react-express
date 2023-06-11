const router = require('express').Router();

router.get('/', (req, res) => {
    const message = {
        message: 'hello user'
    };
   res.json(message);
});

module.exports = router;
