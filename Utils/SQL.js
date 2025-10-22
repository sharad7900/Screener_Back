const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  waitForConnections: true,
  connectionLimit: 10
});


module.exports= pool;