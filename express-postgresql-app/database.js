const { Pool } = require('pg');

// Konfigurasi koneksi ke database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Dvdrental',
  password: 'Fahrezar77',
  port: 5432, // Port default PostgreSQL
});

// Export objek pool sehingga dapat digunakan di berkas lain
module.exports = pool;
