const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Öğrenci Adı
  grade: { type: Number, required: true }, // Not Ortalaması
  devamsizlik: { type: Number, default: 0 } // Devamsızlık Sayısı
});

module.exports = mongoose.model('Student', studentSchema);