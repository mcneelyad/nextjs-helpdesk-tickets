const router = require('express').Router();

router.get('/ticket/:id', (req,res) => {
    let { id } = req.params;

    res.send(`ticket with id: ${id}`);
});

router.get('/ticket/:id/edit', (req,res) => {
    let { id } = req.params;

    res.send(`Edit ticket with id: ${id}`)
});

module.exports = router;