| Nama | NRP | Kelas |
| --- | --- | --- |
| Azka Fairus Syamsa | 5025251067 | PWeb (B) |

# Student Management

Aplikasi web sederhana untuk mengelola data mahasiswa, dibuat dengan HTML, CSS, dan JavaScript. Tampilan dirancang dengan layout 16:9 dan responsif untuk layar kecil.

## Tautan

| Keterangan | Link |
| --- | --- |
| Website (deploy) |[Link Website](https://pweb-tugas-student-management.vercel.app/) |
| Repository kode | [Repo Github](https://github.com/azkafairuszz/PWeb---Tugas/tree/main/student-management) |

## Wireframe

<img width="2720" height="1520" alt="wireframe_student_management_desktop" src="https://github.com/user-attachments/assets/80cc645b-c361-4952-ae29-5f2797f59678" />

### Susunan halaman

- **Navbar**: brand di kiri, menu Home, Students, About, dan avatar di kanan.
- **Kolom kiri (380px)**: kartu Form Student berisi NIM, Nama Lengkap, Jurusan, Email, dan tombol Simpan, Batal, Reset.
- **Kolom kanan (1fr)**: kartu Data Mahasiswa berisi kotak pencarian, tabel data, informasi jumlah data, dan pagination.

## Fitur

| Fitur | Keterangan | Status |
| --- | --- | --- |
| Form input mahasiswa | Mengisi NIM, nama, jurusan (dropdown), dan email | Berfungsi |
| Tambah data | Tombol Simpan menambahkan baris baru ke tabel | Berfungsi |
| Hapus data | Tombol hapus menghapus baris setelah konfirmasi | Berfungsi |
| Pencarian | Menyaring baris tabel saat mengetik | Berfungsi |
| Batal dan Reset | Mengosongkan isi form | Berfungsi |
| Edit data | Tombol edit sudah ada di tampilan | Tampilan saja |
| Pagination | Tombol halaman sudah ada di tampilan | Tampilan saja |
| Responsive design | Dua kolom di desktop, satu kolom di bawah 950px | Berfungsi |
| Efek interaktif | Hover pada baris tabel dan fokus pada input | Berfungsi |

## Teknologi

- HTML5 untuk struktur halaman
- CSS3: variables, Flexbox, Grid, pseudo-class, dan media query
- JavaScript untuk interaksi (tambah, hapus, cari)
- Git dan GitHub untuk version control
- Vercel untuk deploy

## Struktur file

```
student-management/
├── index.html
├── style.css
└── app.js
```

## Ringkasan langkah pembuatan

1. **Membuat struktur HTML.** Halaman dibagi menjadi navbar, form, dan tabel dengan tag semantik (`header`, `main`, `section`).
2. **Reset dan style global.** Margin dan padding bawaan browser dihapus, `box-sizing: border-box` ditetapkan, lalu font dan warna dasar diatur.
3. **Menyiapkan CSS variables.** Warna, radius, dan border disimpan di `:root` agar bisa dipakai ulang.
4. **Membuat navbar dengan Flexbox.** Brand dan menu dipisahkan dengan `justify-content: space-between`.
5. **Membuat layout utama dengan CSS Grid.** Container dibagi menjadi dua kolom, `380px 1fr`.
6. **Membuat komponen.** Card, form, tombol (`.btn` dengan variasi primary, secondary, danger), kotak pencarian, tabel, tombol aksi, dan pagination.
7. **Menambahkan interaksi visual.** Pseudo-class `:hover` dan `:focus` memberi umpan balik saat pengguna berinteraksi.
8. **Membuat responsive design.** Media query mengubah layout menjadi satu kolom pada layar kecil.
9. **Menambahkan JavaScript.** Menangani tambah data, hapus data, pencarian, dan tombol Batal.
10. **Upload dan deploy.** Kode di-push ke GitHub, lalu repository dihubungkan ke Vercel dengan Root Directory `student-management`.

## Cara menjalankan di komputer

1. Clone repository atau unduh filenya.
2. Buka `index.html` di browser.
