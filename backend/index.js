const express = require('express');
require('dotenv').config();
const cors = require('cors');

const database = require('./database')

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const ticketRouter = require('./routes/Ticket.routes');

app.get('/', (req,res) => {
    res.send({'message': 'hello world'});
});

app.get('/tickets', (req,res) => {
    let ticketList = []
    res.send(ticketList);
});

app.use('/ticket', ticketRouter);

app.listen(5000, () => console.log(`server running on port ${PORT}`))