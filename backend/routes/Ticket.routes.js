const router = require('express').Router();
const database = require('../database');

router.post('/new', async (req, res) => {
    let reqBody = req.body;

    let { title, description, brand, type, contact } = reqBody.ticket;

    database.query("INSERT INTO tickets (title, description) VALUES (?,?);", [title, description], (error, results, fields) => {
        if (error) throw error;
        console.log(results);
    });
});

router.get('/:id', (req, res) => {
    let { id } = req.params;

    res.send(`ticket with id: ${id}`);
});

router.get('/:id/edit', (req, res) => {
    let { id } = req.params;

    res.send(`Edit ticket with id: ${id}`)
});

module.exports = router;