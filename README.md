# Praktikum 3 - Rekayasa Sistem Basis Data

**Mata Kuliah:** Pemrograman Web (MK11)  
**Topik:** Persistensi MySQL, Connection Pooling, Prepared Statements, dan Arsitektur CRUD Aman.

**Nama:** I Gede Mahesa Adinata  
**NIM:** 42530041

## 1. Deskripsi Proyek

Proyek ini merupakan implementasi praktikum Pemrograman Web yang berfokus pada integrasi aplikasi web dengan database MySQL menggunakan Node.js dan Express.js.

Pengembangan aplikasi menerapkan arsitektur Model-View-Controller (MVC), Connection Pool, serta Prepared Statements untuk memastikan pengelolaan data berjalan secara terstruktur, efisien, dan aman dari serangan SQL Injection.

Praktikum ini mencakup operasi CRUD (Create, Read, Update, Delete), pengelolaan koneksi database, serta pengujian keamanan dan penanganan kesalahan sistem.

## 2. Teknologi yang Digunakan

- **Node.js** - Runtime JavaScript.
- **Express.js** - Framework backend.
- **MySQL** - Sistem manajemen basis data.
- **mysql2** - Driver koneksi MySQL dengan dukungan Promise.
- **EJS** - Template engine untuk tampilan web.
- **dotenv** - Pengelolaan konfigurasi lingkungan.
- **Nodemon** - Menjalankan server selama pengembangan.

## 3. Fitur Aplikasi

- **Database Connection Pool:** Mengelola koneksi database secara efisien.
- **Read Data:** Menampilkan data dari database MySQL.
- **Create Data:** Menambahkan data baru melalui formulir.
- **Update Data:** Memperbarui data berdasarkan ID.
- **Delete Data:** Menghapus data berdasarkan ID.
- **Prepared Statements:** Melindungi query database dari SQL Injection.
- **PRG Pattern:** Menerapkan Post-Redirect-Get setelah pengiriman formulir.
- **Security Testing:** Menguji perbedaan query rentan dan query aman.
- **Error Investigation:** Menguji dan menganalisis kesalahan koneksi database.

## 4. Instalasi dan Konfigurasi

### A. Clone Repository

```bash
git clone https://github.com/USERNAME/NAMA-REPOSITORY.git
cd NAMA-REPOSITORY
```

### B. Instalasi Dependencies

```bash
npm install
```

### C. Konfigurasi Environment

Buat file `.env` pada direktori utama proyek.

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=db_lab_web
DB_PORT=3306
```

Sesuaikan konfigurasi database dengan lingkungan MySQL yang digunakan.

### D. Persiapan Database

Buat database MySQL dengan nama `db_lab_web`, kemudian buat tabel produk sesuai struktur database pada modul praktikum.

### E. Menjalankan Aplikasi

```bash
npm run dev
```

Aplikasi dapat diakses melalui:

http://localhost:3000

## 5. Struktur Direktori

```text
express-mysql-lab/
│
├── config/
│   └── database.js
│
├── controllers/
│   └── produk.controller.js
│
├── models/
│   └── produk.model.js
│
├── routes/
│   └── produk.routes.js
│
├── views/
│   ├── pages/
│   └── partials/
│
├── public/
│   └── css/
│
├── docs/
│   └── screenshots/
│
├── .env
├── .env.example
├── .gitignore
├── app.js
└── package.json
```

## 6. Dokumentasi Pengujian

Pengujian dilakukan untuk memastikan setiap fitur aplikasi berjalan sesuai dengan spesifikasi praktikum.

| ID | Pengujian | Endpoint | Hasil yang Diharapkan | Status |
|---|---|---|---|---|
| TC-01 | Database Connection Pool | App Startup | Database terhubung tanpa error | Pass |
| TC-02 | Read Data | `/produk` | Menampilkan seluruh data produk | Pass |
| TC-03 | Create Data | `/produk/tambah` | Data berhasil disimpan | Pass |
| TC-04 | Update Data | `/produk/edit/:id` | Data berhasil diperbarui | Pass |
| TC-05 | Delete Data | `/produk/hapus/:id` | Data berhasil dihapus | Pass |
| TC-06 | SQL Injection Testing | `/uji-keamanan` | Prepared Statements mencegah SQL Injection | Pass |

### Bukti Screenshot

Seluruh dokumentasi pengujian disimpan dalam direktori `docs/screenshots/`.

| No. | Nama Screenshot | Keterangan |
|---|---|---|
| 01 | `01-db-pool-connection.png` | Koneksi database |
| 02 | `02-read-select-render.png` | Menampilkan data produk |
| 03 | `03-create-insert-prg.png` | Proses penambahan data |
| 04 | `04-update-param-redirect.png` | Proses pembaruan data |
| 05 | `05-delete-feedback.png` | Proses penghapusan data |
| 06 | `06-sql-injection-mitigation.png` | Pengujian keamanan SQL Injection |

## 7. Pengujian Troubleshooting

Selain pengujian CRUD dan keamanan, dilakukan investigasi terhadap beberapa permasalahan sistem:

1. **ER_ACCESS_DENIED_ERROR:** Menguji kegagalan autentikasi koneksi database akibat konfigurasi password yang salah.
2. **Undefined Bind Parameters:** Menguji kesalahan parameter ketika data formulir tidak sesuai dengan variabel yang diterima controller.
3. **Connection Pool Exhaustion / Timeout:** Menguji kondisi ketika koneksi database habis akibat koneksi yang tidak dilepaskan kembali ke pool.

Setelah pengujian, konfigurasi dan kode dikembalikan ke kondisi normal untuk memastikan aplikasi dapat berjalan dengan baik.

## 8. Keamanan Aplikasi

Aplikasi menerapkan beberapa prinsip keamanan, yaitu:

- Menyimpan kredensial database menggunakan environment variables (`.env`).
- Menggunakan Prepared Statements dengan placeholder `?`.
- Menghindari penggunaan konkatenasi string secara langsung pada query SQL.
- Memisahkan logika database ke dalam Model.
- Menggunakan `.gitignore` untuk mencegah file sensitif terunggah ke repository.

## 9. Kesimpulan

Melalui praktikum ini, mahasiswa mempelajari implementasi integrasi MySQL dengan Node.js dan Express.js menggunakan arsitektur MVC.

Penerapan Connection Pool membantu pengelolaan koneksi database, sedangkan Prepared Statements memberikan perlindungan terhadap manipulasi query SQL. Pengujian CRUD dan troubleshooting juga memberikan pemahaman mengenai pengelolaan data, keamanan, serta penanganan kesalahan pada aplikasi web.

---

**Praktikum Pemrograman Web - 2026**
