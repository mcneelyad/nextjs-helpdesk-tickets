const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

const ticketRouter = require('./routes/Ticket.routes');

app.get('/', (req,res) => {
    res.send('hello world');
});

app.get('/tickets', (req,res) => {
    let ticketList = []
    res.send(ticketList);
});

app.use('/ticket', ticketRouter);

// TODO - routes for technicians
// TODO - routes for authentication

app.listen(5000, () => console.log(`server running on port ${PORT}`))