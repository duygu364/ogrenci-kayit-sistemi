const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const studentRoutes = require('./src/routes/studentRoutes');

// 1. Ayarları Yükle
dotenv.config();

// 2. Uygulamayı Başlat
const app = express();
app.use(express.json()); // Gelen veriyi okumayı sağlar

// 3. Veritabanına Bağlan
connectDB();

// 4. Rotaları (Yolları) Tanımla
app.use('/api/students', studentRoutes);

// 5. Sunucuyu Ayağa Kaldır
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor... 🚀`);
});