const Student = require('../models/Student');

// 1. ÖĞRENCİ EKLEME (CREATE) + İŞ KURALI 2
exports.createStudent = async (req, res) => {
  try {
    // --- İŞ KURALI 2: Not Kontrolü ---
    // Eğer not 0'dan küçük veya 100'den büyükse hata ver!
    if (req.body.grade < 0 || req.body.grade > 100) {
        return res.status(400).json({ message: "HATA: Not ortalaması 0 ile 100 arasında olmalıdır!" });
    }

    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: "Hata: " + error.message });
  }
};

// 2. TÜM ÖĞRENCİLERİ LİSTELEME (READ)
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3. ÖĞRENCİ SİLME (DELETE)
exports.deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Öğrenci başarıyla silindi." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4. DEVAMSIZLIK GÜNCELLEME (UPDATE) + İŞ KURALI 1
exports.addDevamsizlik = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Öğrenci bulunamadı" });
    }

    // --- İŞ KURALI 1: Devamsızlık Limiti ---
    if (student.devamsizlik >= 20) {
      return res.status(400).json({ message: "HATA: Öğrenci devamsızlıktan kalmış! İşlem yapılamaz." });
    }

    student.devamsizlik += 1;
    await student.save();

    res.status(200).json({ message: "Devamsızlık eklendi", guncelDurum: student });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};