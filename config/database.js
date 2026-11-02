const mysql = require('mysql2');
require('dotenv').config();

// Connection pool: koneksi dikelola & digunakan ulang secara otomatis
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  dateStrings: true // DATE/TIMESTAMP dikembalikan sebagai string 'YYYY-MM-DD'
});

module.exports = pool.promise();
