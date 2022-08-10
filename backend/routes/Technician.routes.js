const router = require('express').Router();
const database = require('../database');

router.post('/new', (req, res) => {
    let { firstName, lastName, email, phone } = req.body;

    let sql = 'INSERT INTO technicians (firstName, lastName, email, phone) VALUES (?,?,?,?)';
    database.query(sql, [firstName, lastName, email, phone], (error, results, fields) => {
        if (error) throw error;
        console.log(results.insertId)
        res.send(results);
    });
});

router.get('/', (req, res) => {
    let technicianList = []

    let sql = "SELECT * from technicians";
    database.query(sql, (error, results, fields) => {
        if (error) throw error;
        technicianList = results;
        res.send(technicianList);
    });
})

module.exports = router;