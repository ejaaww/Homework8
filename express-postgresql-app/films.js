// films.js

const express = require('express');
const router = express.Router();
const { pool } = require('./database'); // Gantilah dengan path yang sesuai

// Menampilkan data seluruh list film
router.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM films');
    const films = result.rows;
    client.release(); // Menutup koneksi

    res.status(200).json({ films });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Menampilkan data film tertentu berdasarkan id
router.get('/:id', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM films WHERE id = $1', [req.params.id]);
    const film = result.rows[0];
    client.release(); // Menutup koneksi

    if (film) {
      res.status(200).json({ film });
    } else {
      res.status(404).json({ message: 'Film not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
