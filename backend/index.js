const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req,res) => {
    res.send('hello world');
})

app.listen(5000, () => console.log(`server running on port ${5000}`))