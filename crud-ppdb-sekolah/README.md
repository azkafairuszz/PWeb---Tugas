| Nama               | NRP        | Kelas    |
| ------------------ | ---------- | -------- |
| Azka Fairus Syamsa | 5025251067 | PWeb (B) |

# PPDB Online SMA Negeri 1 Kudus

Aplikasi web sederhana untuk portal Penerimaan Peserta Didik Baru (PPDB) SMA Negeri 1 Kudus Tahun Ajaran 2026/2027, dibuat dengan HTML, CSS, dan JavaScript. Terdiri dari halaman utama (landing page), halaman Login Siswa, dan halaman Registrasi Siswa. Tampilan dirancang responsif untuk desktop, tablet, dan layar kecil.

## Tautan

| Keterangan       | Link                                                                                    |
| ---------------- | --------------------------------------------------------------------------------------- |
| Website (deploy) | [Link Website](https://GANTI-DENGAN-LINK-VERCEL.vercel.app/)                            |
| Repository kode  | [Repo Github](https://github.com/azkafairuszz/PWeb---Tugas/tree/main/crud-ppdb-sekolah) |

## Susunan halaman

### Halaman Utama (`index.html`)

- **Header**: brand di kiri, menu Beranda, Informasi, Panduan, Kontak, serta tombol Login dan Daftar di kanan. Di layar kecil menu berubah menjadi tombol hamburger.
- **Hero**: judul PPDB Online, tahun ajaran 2026/2027, tombol "Daftar Sekarang", dan ilustrasi gedung sekolah serta siswa yang dibuat dengan CSS.
- **Akses cepat**: empat kartu (Daftar Sekarang, Informasi PPDB, Panduan Pendaftaran, Kontak Sekolah).
- **Tentang PPDB Online**: penjelasan singkat dan empat keunggulan (mudah daftar online, aman dan terpercaya, proses cepat, transparan dan terukur).
- **Jadwal PPDB**: timeline empat tahap, yaitu Pendaftaran, Verifikasi, Seleksi, dan Pengumuman.
- **Panduan Pendaftaran**: lima langkah (buat akun, isi biodata, unggah berkas, pilih jurusan, cek hasil).
- **Kontak Sekolah**: alamat, telepon, dan email.
- **Login dan Registrasi Siswa**: dua kartu yang mengarah ke halaman login dan register.
- **Footer**: nama sekolah, tahun ajaran, dan catatan.

### Halaman Login (`login.html`)

- **Header**: brand dan tautan "Kembali ke Beranda".
- **Panel kiri (sambutan)**: label PPDB Online 2026/2027, judul "Selamat Datang Calon Siswa!", tiga poin keterangan, dan ilustrasi sekolah.
- **Kartu form kanan**: input Email dan Password, checkbox "Ingat saya", tautan "Lupa password?", tombol "Masuk ke Akun", serta tautan ke halaman registrasi dan halaman utama.

### Halaman Registrasi (`register.html`)

- **Panel kiri (sambutan)**: judul "Mulai Langkah Menuju Masa Depan!", tiga langkah awal, dan ilustrasi sekolah.
- **Kartu form kanan**: Nama Lengkap, Email Aktif, Nomor HP / WhatsApp, NISN, Password, Konfirmasi Password, checkbox persetujuan, dan tombol "Buat Akun". Terdapat juga tautan ke halaman login dan halaman utama.

## Fitur

| Fitur                                               | Keterangan                                                                                                                                          | Status        |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Navigasi antar halaman                              | Link ke index, login, dan register berfungsi                                                                                                        | Berfungsi     |
| Smooth scroll                                       | Menu Informasi, Panduan, dan Kontak menggulir halus ke bagian terkait                                                                               | Berfungsi     |
| Menu hamburger                                      | Menu dibuka dan ditutup dengan tombol di layar kecil (JavaScript)                                                                                   | Berfungsi     |
| Form login                                          | Input email dan password dengan validasi `required` dan tipe email                                                                                  | Berfungsi     |
| Form registrasi                                     | Validasi bawaan HTML5: NISN harus 10 digit angka, nomor HP memakai `pattern`, password minimal 8 karakter, dan checkbox persetujuan wajib dicentang | Berfungsi     |
| Responsive design                                   | Layout menyesuaikan pada breakpoint 900px, 850px, 620px, 560px, dan 380px                                                                           | Berfungsi     |
| Efek interaktif                                     | Hover pada tombol dan kartu, serta fokus pada input                                                                                                 | Berfungsi     |
| Simpan data pendaftar (Create)                      | Form belum terhubung ke penyimpanan data atau backend                                                                                               | Tampilan saja |
| Tampil, ubah, dan hapus data (Read, Update, Delete) | Belum tersedia                                                                                                                                      | Belum dibuat  |
| Proses login                                        | Belum ada pengecekan akun                                                                                                                           | Tampilan saja |
| Kecocokan password dan konfirmasi password          | Belum dibandingkan                                                                                                                                  | Tampilan saja |
| Lupa password, Ingat saya                           | Tautan masih `#` dan checkbox belum berfungsi                                                                                                       | Tampilan saja |

## Teknologi

- HTML5 untuk struktur halaman
- CSS3: variables, Flexbox, Grid, gradient, pseudo-element, dan media query
- JavaScript untuk menu hamburger pada halaman utama
- Git dan GitHub untuk version control
- Vercel untuk deploy

## Struktur file

```
ppdb-sekolah/
├── index.html
├── login.html
├── register.html
├── styles.css
└── auth.css
```

- `styles.css` dipakai oleh `index.html`.
- `auth.css` dipakai bersama oleh `login.html` dan `register.html`.

## Ringkasan langkah pembuatan

1. **Membuat struktur HTML.** Tiga halaman dibuat dengan tag semantik (`header`, `main`, `section`, `article`, `nav`, `footer`).
2. **Reset dan style global.** `box-sizing: border-box` ditetapkan, margin bawaan browser dihapus, lalu font dan warna dasar diatur.
3. **Menyiapkan CSS variables.** Warna utama (biru), warna teks, dan bayangan disimpan di `:root` agar bisa dipakai ulang.
4. **Membuat header dan navigasi dengan Flexbox.** Brand dan menu dipisahkan dengan `justify-content: space-between`.
5. **Membuat hero dan ilustrasi dengan CSS.** Gedung sekolah, awan, matahari, dan daun dibuat dari elemen CSS tanpa file gambar.
6. **Membuat layout dengan CSS Grid.** Dipakai pada kartu akses cepat, bagian tentang, timeline jadwal, panduan, kontak, dan layout split pada halaman login dan register.
7. **Membuat komponen.** Tombol (`.button` dengan variasi kuning dan biru), kartu, timeline, daftar langkah, form, dan tombol submit.
8. **Membuat halaman login dan register.** Layout dua kolom berisi panel sambutan dan kartu form, dengan validasi HTML5 pada input.
9. **Menambahkan interaksi visual.** `:hover` dan `:focus` memberi umpan balik saat pengguna berinteraksi.
10. **Menambahkan JavaScript.** Tombol hamburger membuka dan menutup menu pada layar kecil.
11. **Membuat responsive design.** Media query mengubah layout menjadi satu kolom dan menyesuaikan ukuran elemen pada layar kecil.
12. **Upload dan deploy.** Kode di-push ke GitHub, lalu repository dihubungkan ke Vercel dengan Root Directory sesuai nama folder proyek.

## Cara menjalankan di komputer

1. Clone repository atau unduh filenya.
2. Buka `index.html` di browser.
3. Dari halaman utama, buka halaman Login atau Daftar lewat tombol di header.
