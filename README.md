# UTS-WSE-230104040212

## Web Service Engineering - Ujian Tengah Semester Ganjil 2025

Proyek ini adalah implementasi **RESTful API** berbasis **Node.js** dan **Express.js** untuk memenuhi tugas Ujian Tengah Semester Mata Kuliah Web Service Engineering. API ini diimplementasikan dengan operasi **CRUD (Create, Read, Update, Delete)** lengkap dan menerapkan **7 Prinsip RESTful API** secara eksplisit.

## Tim Developer

| Peran | Nama | NIM | Profil GitHub |
| :--- | :--- | :--- | :--- |
| **Pengembang Proyek** | M. Kaspul Anwar | 230104040212 | [![](https://img.shields.io/badge/GitHub-M.KaspulAnwar-181717?style=flat&logo=github)](https://github.com/mkaspulanwar) |
| **Dosen Pengampu** | Muhayat, M. IT | - | [![](https://img.shields.io/badge/GitHub-Muhayat,M.IT-181717?style=flat&logo=github)](https://github.com/muhayat-lab) |


## 🛠️ Persiapan dan Instalasi

### Prasyarat
Pastikan Anda sudah menginstal:
1.  **Node.js**
2.  **npm** (Node Package Manager)
3.  **Postman** (untuk pengujian API)

### Langkah-langkah Menjalankan Proyek

1.  **Clone Repository:**
    ```bash
    git clone [LINK REPO GITHUB ANDA]
    cd [NAMA FOLDER PROJECT ANDA]
    ```

2.  **Instal Dependensi:**
    Instal Express.js dan Nodemon (untuk mode development).
    ```bash
    npm install
    ```

3.  **Jalankan Server:**
    Server akan berjalan di **Port 3000**[cite: 55].

    ```bash
    npm run dev 
    ```
    *(Kode wajib dijalankan dengan perintah ini [cite: 57])*

---

## 📚 Resource Utama: `courses`

[cite_start]Resource yang diimplementasikan didasarkan pada digit akhir NIM ([Digit Akhir NIM Anda])[cite: 61], yaitu **`courses`** (Data Mata Kuliah).

### Field Utama (Wajib Ada)

Setiap objek *course* memiliki *field* berikut:

| Field | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| `id` | Integer | ID unik (otomatis dibuat) |
| `code` | String | Kode mata kuliah (Wajib) |
| `title` | String | Nama mata kuliah (Wajib) |
| `credits` | Integer | Jumlah SKS (Wajib) |

### Contoh Format Data
```json
[
  { "id": 1, "code": "TI001", "title": "Web Service Engineering", "credits": 3 },
  { "id": 2, "code": "TI002", "title": "Sistem Basis Data", "credits": 4 }
]
```
### Struktur Folder Proyek
Struktur folder yang digunakan mengikuti template standar yang disyaratkan:
```markdown
src/
├── app.js             # File utama Express.js
├── routes/
│   └── courses.routes.js # Routing untuk resource courses
├── controllers/
│   └── courses.controller.js # Logika CRUD dan Validasi
└── data/
    └── courses.data.js   # Data dummy (array courses)
README.md
```

### Spesifikasi Endpoint RESTful

Semua endpoint menggunakan prefix `/api`.

| Method | Endpoint | Deskripsi | Status Code (Sukses/Gagal) |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/courses` | Ambil semua data courses. | 200 |
| **GET** | `/api/courses/:id` | Ambil data course berdasarkan id. | 200 / 404 |
| **POST** | `/api/courses` | Tambah data course baru. | 201 / 400 |
| **PUT** | `/api/courses/:id` | Update data course. | 200 / 400 / 404 |
| **DELETE** | `/api/courses/:id` | Hapus data course. | 204 / 404 |
| **GET** | `/api/info` | Informasi service (Discoverability). | 200 |
