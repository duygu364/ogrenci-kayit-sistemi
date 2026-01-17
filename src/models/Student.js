const db = require('../config/db');

class Student {
    // 1. Tüm öğrencileri + BÖLÜM ADLARINI çek (SQL JOIN İşlemi)
    static findAll() {
        // Burada 'students' tablosu ile 'departments' tablosunu birleştiriyoruz
        const sql = `
            SELECT students.*, departments.name AS department_name 
            FROM students 
            LEFT JOIN departments ON students.department_id = departments.id
        `;
        return db.execute(sql);
    }

    // 2. Yeni öğrenci ekle (Bölüm ID'si ile birlikte)
    static save(student) {
        return db.execute(
            'INSERT INTO students (name, grade, devamsizlik, department_id) VALUES (?, ?, ?, ?)',
            [student.name, student.grade, student.devamsizlik, student.department_id]
        );
    }

    // 3. ID'ye göre bul
    static findById(id) {
        return db.execute('SELECT * FROM students WHERE id = ?', [id]);
    }

    // 4. Sil
    static deleteById(id) {
        return db.execute('DELETE FROM students WHERE id = ?', [id]);
    }

    // 5. Devamsızlığı güncelle
    static updateDevamsizlik(id, yeniSayi) {
        return db.execute('UPDATE students SET devamsizlik = ? WHERE id = ?', [yeniSayi, id]);
    }
}

module.exports = Student;