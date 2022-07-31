const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT, 
    connectTimeout: 10000
})

pool.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected to database");
});

pool.on('error', function(err) {
    console.log(err.code);
});

module.exports = pool;