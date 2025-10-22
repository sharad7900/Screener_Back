const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'mysql-sharad.alwaysdata.net',
  user: 'sharad',
  password: '10101212Rs',
  waitForConnections: true,
  connectionLimit: 10
});


module.exports= pool;