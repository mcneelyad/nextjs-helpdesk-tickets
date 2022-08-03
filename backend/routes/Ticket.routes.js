const router = require('express').Router();

router.post('/new', async (req,res) => {
    let reqBody = req.body;

    console.log(reqBody)
})

router.get('/:id', (req,res) => {
    let { id } = req.params;

    res.send(`ticket with id: ${id}`);
});

router.get('/:id/edit', (req,res) => {
    let { id } = req.params;

    res.send(`Edit ticket with id: ${id}`)
});

module.exports = router;