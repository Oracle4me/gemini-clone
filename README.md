# Gemini Clone

Gemini Clone adalah aplikasi web yang terinspirasi oleh platform Gemini sebuah AI yang dapat membantu kita untuk menyelesaikan masalah. Dibangun menggunakan **React.js**, **JavaScript**, **Tailwind CSS**, dan **API dari GEMINI**, proyek ini mereplikasi fitur-fitur utama dari platform asli, memungkinkan pengguna untuk menulisakan pesan untuk ditanyakan kepada AI.

## Fitur

- **Percakapan Real-Time:** Menampilkan harga cryptocurrency secara langsung menggunakan API GEMINI.
- **Desain Responsif:** Dioptimalkan untuk tampilan desktop dan seluler dengan Tailwind CSS.
- **Antarmuka Pengguna Ramah:** Desain intuitif yang terinspirasi dari UI Gemini.

## Teknologi yang Digunakan

- **React.js**: Library JavaScript untuk membangun antarmuka pengguna.
- **JavaScript**: Bahasa utama untuk logika aplikasi.
- **Tailwind CSS**: Framework CSS berbasis utilitas untuk styling.
- **API GEMINI**: API resmi untuk mengambil data AI secara real time.

## Memulai

### Prasyarat

Pastikan Anda telah menginstal perangkat berikut di sistem Anda:

- [Node.js](https://nodejs.org/) (v14 atau lebih tinggi)
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)

### Instalasi

1. Clone repositori:
   ```bash
   git clone https://github.com/oracle4me/gemini-clone.git
   cd gemini-clone
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Buat file `.env` di direktori root dan tambahkan kunci API GEMINI Anda:
   ```env
   VITE_GEMINI_API_KEY=your_api_key
   ```

4. Jalankan server pengembangan:
   ```bash
   npm ru dev
   ```

5. Buka [http://localhost:5173](http://localhost:5173) di browser Anda untuk melihat aplikasi.

## Struktur Proyek

```plaintext
.
├── public          # File statis
├── src             # Kode sumber
│   ├── components  # Komponen yang dapat digunakan kembali
│   ├── assets      # Assets
│   ├── config      # Konfigurasi API
│   ├── context     # Konfigurasi Tailwind CSS
├── .env            # Variabel lingkungan
├── package.json    # Dependensi dan skrip proyek
└── README.md       # Dokumentasi proyek
```

## Skrip

- `npm run dev`: Menjalankan aplikasi dalam mode pengembangan.
- `npm run build`: Membangun aplikasi untuk produksi.
- `npm test`: Menjalankan pengujian.
- `npm run lint`: Memeriksa kode untuk kesalahan.

## Integrasi API

Aplikasi ini terintegrasi dengan API GEMINI untuk mengambil data model gemini-2.0-flash-exp . Untuk informasi lebih lanjut, lihat [Dokumentasi API GEMINI](https://ai.google.dev/gemini-api/docs?hl=id).

## Penghargaan

- [Dokumentasi React.js](https://reactjs.org/docs/)
- [Dokumentasi Tailwind CSS](https://tailwindcss.com/docs)
- [Dokumentasi API GEMINI](https://ai.google.dev/gemini-api/docs?hl=id)
