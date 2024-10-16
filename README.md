# Cmlabs Frontend Internship Test

## Deskripsi Proyek
Proyek ini adalah aplikasi web yang menggunakan API dari MealDB untuk menampilkan kategori makanan, detail kategori, dan detail makanan. Aplikasi ini dibuat sebagai bagian dari tes untuk posisi magang Front-end Developer di Cmlabs.

## Fitur
- **Halaman Kategori**: Menampilkan daftar kategori makanan yang diambil dari API.
- **Halaman Detail Kategori**: Menampilkan daftar makanan berdasarkan kategori yang dipilih.
- **Halaman Detail Makanan**: Menampilkan detail informasi makanan yang dipilih (opsional).

## Teknologi yang Digunakan
- HTML
- CSS (Bootstrap)
- JavaScript
- jQuery
- AJAX

## API Endpoint
- **List of Categories**: `https://www.themealdb.com/api/json/v1/1/categories.php`
- **Filter Category**: `https://www.themealdb.com/api/json/v1/1/filter.php?c={category-name}`
- **Detail Meal**: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={meal-id}` (opsional)

## Cara Menjalankan Proyek
1. **Clone Repository**:
   ```bash
   git clone https://github.com/gustiayuistrb/cmlabs-frontend-internship-test.git

2. **Buka Halaman**:
Buka file category.html di browser untuk memulai aplikasi.

3. **Navigasi**:
- Di halaman utama, pilih kategori untuk melihat daftar makanan.
- Klik pada kategori yang diinginkan untuk masuk ke halaman Detail Kategori.
- Di halaman Detail Kategori, pilih makanan untuk melihat detailnya.
- Halaman Detail Makanan akan menampilkan informasi lengkap tentang makanan yang dipilih.
- Aplikasi juga dilengkapi dengan breadcrumbs yang memudahkan pengguna untuk menavigasi kembali ke menu sebelumnya dengan cepat.


