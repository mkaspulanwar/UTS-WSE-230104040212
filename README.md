# UTS-WSE-NimAnda

## Web Service Engineering - Ujian Tengah Semester Ganjil 20251

Proyek ini adalah implementasi **RESTful API** berbasis **Node.js** dan **Express.js** untuk memenuhi tugas Ujian Tengah Semester Mata Kuliah Web Service Engineering. API ini diimplementasikan dengan operasi **CRUD (Create, Read, Update, Delete)** lengkap dan menerapkan **7 Prinsip RESTful API** secara eksplisit.

### 👤 Identitas Mahasiswa

| Komponen | Detail |
| :--- | :--- |
| **Nama** | [NAMA LENGKAP ANDA] |
| **NIM** | [NIM LENGKAP ANDA] |
| **Program Studi** | Teknologi Informasi |
| **Mata Kuliah** | Web Service Engineering |

---

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