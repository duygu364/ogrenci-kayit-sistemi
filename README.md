# Öğrenci Kayıt Sistemi API (MySQL)

Bu proje, Sunucu Tabanlı Programlama dersi için **MVC mimarisine** uygun olarak geliştirilmiş, Node.js ve MySQL tabanlı bir RESTful API projesidir.

## 1. Projenin Amacı ve Senaryo
Bu sistem, bir okulun öğrenci kayıtlarını yönetmek ve devamsızlık takibi yapmak için tasarlanmıştır.

### Veritabanı Yapısı:
Proje **İlişkisel Veritabanı (RDBMS)** kullanır ve 3 tablodan oluşur:
* **Students:** Öğrenci bilgileri.
* **Departments:** Bölüm bilgileri.
* **Courses:** Ders bilgileri.

### İş Kuralları (Business Logic):
1.  **Devamsızlık Sınırı:** Bir öğrencinin devamsızlığı 20 günü aşmışsa, sisteme yeni devamsızlık girilemez (Hata döner).
2.  **Not Geçerliliği:** Öğrenci notu 0-100 aralığı dışında girilemez.

## 2. Kurulum Adımları

1.  Proje klasörünü indirin ve terminalde paketleri yükleyin:
    ```bash
    npm install
    ```
2.  **Veritabanı Kurulumu:**
    * MAMP veya XAMPP sunucusunu başlatın.
    * `phpMyAdmin` arayüzüne gidin.
    * `SQL` sekmesine proje içindeki veritabanı kodlarını yapıştırarak tabloları oluşturun.
3.  **Ayar Dosyası:**
    * `.env.example` dosyasının adını `.env` olarak değiştirin veya yeni bir `.env` dosyası oluşturup içine veritabanı bilgilerinizi girin:
    ```text
    PORT=3000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=root
    DB_NAME=okulDB
    DB_PORT=8889
    ```
4.  **Başlatma:**
    ```bash
    node app.js
    ```

## 3. API Uç Noktaları (Endpoints)

| Metot | URL | Açıklama |
|-------|-----|----------|
| GET | `/api/students/` | Tüm öğrencileri (Bölüm bilgisiyle) listeler. |
| POST | `/api/students/add` | Yeni öğrenci ve bölümünü kaydeder. |
| DELETE| `/api/students/:id` | ID'si verilen öğrenciyi siler. |
| POST | `/api/students/devamsizlik/:id` | Öğrencinin devamsızlığını 1 artırır. |