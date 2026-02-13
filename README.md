# 🎓 TemanBelajar API

![NodeJS](https://img.shields.io/badge/Node.js-v20.x-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-v5.x-000000?style=flat-square&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-v8.0-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-ORM-52B0E7?style=flat-square&logo=sequelize&logoColor=white)

**Comic Library API** adalah layanan backend RESTful yang dirancang untuk memfasilitasi pengelolaan inventaris komik digital secara efisien. Dibangun menggunakan arsitektur Node.js dan **Sequelize ORM**, sistem ini menangani operasi CRUD (*Create, Read, Update, Delete*) dengan struktur database relasional yang kuat.

---

## 🌟 Key Features

**🚀 ORM Integration**: Menggunakan **Sequelize** untuk abstraksi database, memudahkan manipulasi data tanpa menulis query SQL manual yang kompleks.
- **🔄 CRUD Operations**: Manajemen data komik lengkap meliputi penambahan judul, pembaruan penulis, hingga penghapusan entri katalog.
- [cite_start]**🛡️ Environment Management**: Konfigurasi database yang aman dan fleksibel menggunakan **Dotenv** untuk memisahkan kredensial sensitif dari *source code*.
- **⚡ Hot Reloading**: Lingkungan pengembangan yang efisien dengan **Nodemon** untuk restart server otomatis saat terjadi perubahan kode.

---

## 🛠 Tech Stack

| Component     | Technology   | Description                                 |
| :------------ | :----------- | :------------------------------------------ |
| **Runtime**   | Node.js      | JavaScript runtime environment              |
| **Framework** | Express.js   | Framework minimalis untuk RESTful APIs (v5) |
| **Database**  | MySQL        | Sistem manajemen database relasional        |
| **ORM**       | Sequelize    | Promise-based Node.js ORM                   |
| **Driver**    | MySQL2       | Driver MySQL berkinerja tinggi untuk Node.js|
| **Utils**     | Dotenv       | Modul untuk memuat variabel environment     |
---

## 📂 Project Structure

Proyek ini disusun dengan struktur yang rapi untuk skalabilitas dan kemudahan pemeliharaan.

```bash
Comic Library API/
│
├── config/
[cite_start]│   └── config.js          # Konfigurasi koneksi Database 
├── models/
│   ├── index.js           # Inisialisasi Sequelize & Import Models
│   └── komik.js           # Definisi Schema Tabel Komik
├── node_modules/          # Dependencies project
├── .sequelizerc           # Konfigurasi path Sequelize CLI
├── .env                   # Environment Variables (Credential DB)
├── index.js               # Entry Point Aplikasi
├── package.json           # Daftar dependensi & scripts
└── README.md              # Dokumentasi Proyek
```

## 🚀 Getting Started

Follow these steps to run the project locally.

1. **Prerequisites\***
Pastikan kamu telah menginstal:
-> Node.js
-> MySQL Server


3. **Clone the Repository**

```bash
git clone [https://github.com/muhammadrifqialimin/Comic-Library-API.git](https://github.com/muhammadrifqialimin/Comic-Library-API.git)
cd Comic-Library-API
```

3. **Install Dependencies**

```bash
npm install
```

4. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following variables:

```env
DB_USERNAME="root"
DB_PASS="password_mysql_kamu"
DB_DATABASE="db_komik"
DB_HOST="127.0.0.1"
DB_DIALECT="mysql"
DB_PORT=3306
```

5. **database Migration**

```bash
#jika ada 
sequelize db:migrate
```

6. **Start the Server**

```bash
# Menjalankan server dengan Nodemon
npm start
```

## 🔌 API Documentation
Berikut adalah contoh endpoint yang tersedia untuk entitas Komik. Kamu bisa mengujinya menggunakan Postman.

## 📚 Resources: Komik

| Method | Endpoint        | Description                            |
|--------|-----------------|----------------------------------------|
| GET    | /komik          | Mengambil daftar semua komik           |
| GET    | /komik/:id      | Mengambil detail komik berdasarkan ID  |
| POST   | /komik          | Menambahkan data komik baru            |
| PUT    | /komik/:id      | Memperbarui data komik                 |
| DELETE | /komik/:id      | Menghapus komik                        |

# Contoh Request Body (POST/PUT):
Berdasarkan model `komik.js`:
```JSON
{
  "judul": "One Piece",
  "penulis": "Eiichiro Oda",
  "deskripsi": "Petualangan Monkey D. Luffy mencari harta karun terbesar."
}
```
# 👨‍💻 Author
Muhammad Rifqi Alimin
