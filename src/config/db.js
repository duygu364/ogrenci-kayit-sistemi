const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Veritabanına Bağlandı! ✅');
  } catch (err) {
    console.error('Bağlantı Hatası ❌:', err);
    process.exit(1);
  }
};

module.exports = connectDB;