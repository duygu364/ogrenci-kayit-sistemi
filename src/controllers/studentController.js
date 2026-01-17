const Student = require('../models/Student');

exports.getAllStudents = async (req, res) => {
    try {
        const [rows] = await Student.findAll();
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createStudent = async (req, res) => {
    try {
        // Kullanıcıdan bölüm ID'sini de (department_id) istiyoruz artık
        const { name, grade, department_id } = req.body;

        // İŞ KURALI: Not Kontrolü
        if (grade < 0 || grade > 100) {
            return res.status(400).json({ message: "Not 0-100 arasında olmalı!" });
        }
        
        // Bölüm ID'si gelmediyse varsayılan olarak NULL gidecek
        await Student.save({ name, grade, devamsizlik: 0, department_id: department_id || null });
        
        res.status(201).json({ message: "Öğrenci ve Bölümü başarıyla eklendi" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        await Student.deleteById(req.params.id);
        res.status(200).json({ message: "Öğrenci silindi" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addDevamsizlik = async (req, res) => {
    try {
        const [students] = await Student.findById(req.params.id);
        const student = students[0];

        if (!student) {
            return res.status(404).json({ message: "Öğrenci bulunamadı" });
        }

        // İŞ KURALI: Devamsızlık Sınırı
        if (student.devamsizlik >= 20) {
            return res.status(400).json({ message: "Devamsızlık sınırını aşmış!" });
        }

        await Student.updateDevamsizlik(req.params.id, student.devamsizlik + 1);
        res.status(200).json({ message: "Devamsızlık artırıldı" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};