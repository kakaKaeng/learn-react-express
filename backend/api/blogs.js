const router = require('express').Router();

router
    .route('/:id')
    .get((req, res) => {
        const message = {
            message: `blog id ${req.params.id}`
        };
        res.json(message);
    })
    .patch((req, res) => {
        const message = {
            message: `update blog id ${req.params.id}`
        };
        res.json(message);
    })
    .delete((req, res) => {
        const message = {
            message: `delete blog id ${req.params.id}`
        };
        res.json(message);
    })

module.exports = router;