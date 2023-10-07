const express = require('express');
const app = express();
const filmsRouter = require('./filmRouter'); // Gantilah dengan path yang sesuai
const categoriesRouter = require('./categoriesRouter'); // Gantilah dengan path yang sesuai

// Gunakan router films
app.use('/films', filmsRouter);

// Gunakan router categories
app.use('/categories', categoriesRouter);

app.get('/', (req, res) => {
  res.send('Selamat datang di aplikasi film kami.'); // Mengirim pesan selamat datang atau halaman beranda
});

// Mulai server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
