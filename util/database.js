const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'abhishek',
    database:'db_connect',
    password:'password'
});

module.exports= pool.promise();