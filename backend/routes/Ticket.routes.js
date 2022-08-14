const router = require('express').Router();
const database = require('../database');

router.post('/new', async (req, res) => {
    let reqBody = req.body;

    let { title, description, brand, type, contact } = reqBody.ticket;

    let insertId;

    database.execute("INSERT INTO tickets (title, description, created_by) VALUES (?,?,?);", [title, description, contact], (error, results, fields) => {
        if (error) throw error;
        insertId = results.insertId;
        res.send({ "insertId": insertId })
    });
});

router.get('/:id', (req, res) => {
    let { id } = req.params;

    database.execute("SELECT * from tickets WHERE id = ?", [id], (error, results, fields) => {
        if (error) throw error;
        res.send(results);
    });
});

router.get('/:id/edit', (req, res) => {
    let { id } = req.params;

    res.send(`Edit ticket with id: ${id}`)
});

module.exports = router;