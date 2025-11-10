// src/app.js

const express = require('express');
const coursesRoutes = require('./routes/courses.routes');
const coursesController = require('./controllers/courses.controller'); // Untuk endpoint /api/info

const app = express();
const PORT = 3000; // Ketentuan: Gunakan port default 3000 [cite: 55]

// Middleware untuk memproses body permintaan dalam format JSON
// Prinsip 5: JSON Representation (menerima data input JSON) 
app.use(express.json());

// --- Routing untuk Resource Courses ---
// Prinsip 1: Resource-Oriented URI, dengan prefix '/api'
app.use('/api/courses', coursesRoutes); 

// --- Endpoint /api/info ---
// Prinsip 7: Discoverability [cite: 59, 56]
app.get('/api/info', coursesController.getInfo);

// --- Prinsip 3: Stateless Communication (Tidak ada session atau state di server) ---
// Note: Dalam implementasi Express.js ini, kita tidak menggunakan session atau cookie. 
// Data courses disimpan di memori (sebagai data dummy) yang merupakan "state"
// dari server, namun tidak terkait dengan "session" klien per individu.

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});