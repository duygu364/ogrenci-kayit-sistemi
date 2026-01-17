# Öğrenci Kayıt Sistemi API

Bu proje, Sunucu Tabanlı Programlama dersi için **MVC mimarisine** uygun olarak geliştirilmiş, Node.js ve Express tabanlı bir RESTful API projesidir.

## 1. Projenin Amacı ve Senaryo
Bu sistem, bir okulun öğrenci kayıtlarını yönetmek ve devamsızlık takibi yapmak için tasarlanmıştır.

### İş Kuralları (Business Logic):
Proje, veritabanı bütünlüğünü korumak için aşağıdaki özel senaryoları uygular:
1.  **Devamsızlık Sınırı:** Bir öğrencinin devamsızlığı 20 günü aşmışsa, sisteme yeni devamsızlık girilemez ve API hata döner. (Öğrenci dersten kalmış sayılır).
2.  **Not Geçerliliği:** Öğrenci notu 0'dan küçük veya 100'den büyük girilemez.

## 2. Kurulum Adımları
Projeyi kendi bilgisayarınızda çalıştırmak için:

1.  Bu klasörü indirin.
2.  Terminali açıp gerekli paketleri yükleyin:
    ```bash
    npm install
    ```
3.  Ana dizinde `.env` dosyası oluşturun ve içine şunları yazın:
    ```text
    PORT=3000
    MONGO_URI=mongodb://127.0.0.1:27017/okulDB
    ```
4.  Sunucuyu başlatın:
    ```bash
    node app.js
    ```

## 3. API Uç Noktaları (Endpoints)

| Metot | URL | Açıklama |
|-------|-----|----------|
| GET | `/api/students/` | Tüm öğrencileri listeler. |
| POST | `/api/students/add` | Yeni öğrenci kaydeder. |
| DELETE| `/api/students/:id` | ID'si verilen öğrenciyi siler. |
| POST | `/api/students/devamsizlik/:id` | Öğrencinin devamsızlığını 1 artırır. |