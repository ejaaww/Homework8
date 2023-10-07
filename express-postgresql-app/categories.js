// categories.js

const express = require('express');
const router = express.Router();
const { pool } = require('./database'); // Gantilah dengan path yang sesuai

// Menampilkan data list category
router.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM categories');
    const categories = result.rows;
    client.release(); // Menutup koneksi

    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Menampilkan data list film berdasarkan category
router.get('/films/category/:categoryId', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM films WHERE category_id = $1', [req.params.categoryId]);
    const filmsInCategory = result.rows;
    client.release(); // Menutup koneksi

    res.status(200).json({ films: filmsInCategory });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
