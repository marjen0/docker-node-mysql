const mysql = require('mysql');
const config = require('config');

const connection = mysql.createConnection({
    host: config.get('db.DB_HOST'),
    user: config.get('db.DB_USER'),
    password: config.get("db.DB_PASS"),
    database: config.get("db.DB_NAME")
});

connection.connect(err => {
    if (err) {
        console.log('DB connection failed', err);
    } else {
        console.log('DB connected');
    }
});

module.exports = connection;