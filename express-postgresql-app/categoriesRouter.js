const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
  res.send('Daftar kategori'); 
});


router.get('/:id', (req, res) => {
  const categoryId = req.params.id;
  res.send(`Detail kategori dengan ID ${categoryId}`); 
});
router.post('/', (req, res) => {

  const newCategory = req.body;

  res.send('Kategori baru telah ditambahkan'); 
});


router.put('/:id', (req, res) => {
  const categoryId = req.params.id;
  const updatedCategory = req.body;
  res.send(`Kategori dengan ID ${categoryId} telah diupdate`); 
});


router.delete('/:id', (req, res) => {
  const categoryId = req.params.id;
 //penghapusan kategori berdasarkan ID
  res.send(`Kategori dengan ID ${categoryId} telah dihapus`); 
});

module.exports = router;
