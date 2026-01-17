const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentController');

// Listeleme (READ)
router.get('/', controller.getAllStudents);

// Ekleme (CREATE)
router.post('/add', controller.createStudent);

// Silme (DELETE)
router.delete('/:id', controller.deleteStudent);

// Güncelleme / Devamsızlık Artırma (UPDATE)
router.post('/devamsizlik/:id', controller.addDevamsizlik);

module.exports = router;