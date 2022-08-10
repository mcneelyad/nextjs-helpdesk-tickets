const express = require('express');
require('dotenv').config();
const cors = require('cors');

const database = require('./database');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const ticketRouter = require('./routes/Ticket.routes');
const techncianRouter = require('./routes/Technician.routes');

app.get('/', (req, res) => {
    res.send({ 'message': 'hello world' });
});

app.get('/tickets', (req, res) => {
    let ticketList = []

    let sql = "SELECT * from tickets";
    database.query(sql, (error, results, fields) => {
        if (error) throw error;
        ticketList = results;
        res.send(ticketList);
    });
});

app.use('/ticket', ticketRouter);
app.use('/technicians', techncianRouter)

app.listen(5000, () => console.log(`server running on port ${PORT}`))