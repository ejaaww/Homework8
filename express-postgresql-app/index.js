const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const filmRouter = require('./filmRouter');

const app = express();

// Gunakan router untuk kategori film
app.use('/films', filmRouter);

// Inisialisasi Sequelize
const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'postgres',
  password: 'Fahrezar77',
  database: 'Dvdrental',
  host: 'localhost',
});

// Model Actor
const Actor = sequelize.define('Actor', {
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  age: DataTypes.INTEGER,
});

// Synchronize model dengan database
sequelize.sync();

// Routing
app.get('/', async (req, res) => {
  try {
    const actors = await Actor.findAll(); // Ubah menjadi 'actors'
    // Mengirim respon JSON dengan status 200 (OK)
    res.status(200).json({ actors }); // Ubah menjadi 'actors'
  } catch (error) {
    // Jika terjadi kesalahan, mengirim respon JSON dengan status 500 (Internal Server Error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/actor/:id', async (req, res) => {
  try {
    const actor = await Actor.findByPk(req.params.id);
    if (actor) {
      // Jika data ditemukan, mengirim respon JSON dengan status 200 (OK)
      res.status(200).json({ actor });
    } else {
      // Jika data tidak ditemukan, mengirim respon JSON dengan status 404 (Not Found)
      res.status(404).json({ message: 'Actor not found' });
    }
  } catch (error) {
    // Jika terjadi kesalahan, mengirim respon JSON dengan status 500 (Internal Server Error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Mulai server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
