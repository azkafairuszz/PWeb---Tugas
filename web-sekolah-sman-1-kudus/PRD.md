# PRD — Website Sekolah SMAN 1 Kudus

> **Product Requirements Document**
> Status: Draft · Jenis proyek: Tugas kuliah
> Azka Fairus Syamsa (5025251067) - PWeb B 2026

---

## 1. Ringkasan

Website sekolah sederhana yang berfungsi sebagai media informasi publik: memperkenalkan profil sekolah, menampilkan berita dan prestasi, serta menyediakan informasi kontak. Website bersifat **informatif (read-only)** untuk pengunjung dan diperkirakan hanya diakses oleh sedikit pengguna, sehingga tidak memerlukan infrastruktur yang kompleks.

## 2. Tujuan

| # | Tujuan | Indikator keberhasilan |
|---|--------|------------------------|
| 1 | Menyajikan informasi sekolah secara jelas dan rapi | Seluruh 5 menu utama dapat diakses dan berisi konten |
| 2 | Tampilan nyaman di laptop maupun HP | Layout tidak rusak di lebar layar 360 px – 1440 px |
| 3 | Mudah diperbarui | Konten berita, prestasi, dan guru dapat diubah lewat file data tanpa mengubah kode halaman |
| 4 | Memenuhi kebutuhan tugas kuliah | Website dapat didemokan dan dijalankan tanpa setup rumit |

## 3. Ruang Lingkup

### 3.1 Termasuk (In Scope)
- 5 menu utama: Beranda, Profil, Berita, Prestasi, Hubungi Kami
- Desain responsif
- Konten dikelola melalui file data (JSON) dan folder gambar
- Halaman detail untuk berita
- Peta lokasi sekolah (embed Google Maps)

### 3.2 Tidak Termasuk (Out of Scope)
- Login, registrasi, atau akun pengguna
- Panel admin / CMS
- Sistem komentar, pendaftaran siswa (PPDB), atau pembayaran
- Optimasi untuk trafik tinggi (load balancing, caching lanjutan, dsb.)
- Multi-bahasa

## 4. Pengguna

Pengguna hanya **pengunjung publik** (calon siswa, orang tua, alumni, masyarakat umum). Tidak ada pembagian peran (role) dan tidak ada autentikasi. Pengelolaan konten dilakukan langsung oleh pengembang melalui file data.

**Asumsi skala:** trafik rendah (puluhan pengunjung per hari, untuk keperluan demo/penilaian), sehingga hosting statis gratis sudah mencukupi.

## 5. Struktur Navigasi

```
Beranda
Profil
 ├── Sejarah
 ├── Visi & Misi
 └── Guru & Karyawan
Berita
 └── Detail Berita
Prestasi
Hubungi Kami
```

Navbar tampil di semua halaman. Pada layar kecil, navbar berubah menjadi menu hamburger. Submenu Profil berupa dropdown, atau tiga bagian pada satu halaman Profil (keputusan desain, lihat bagian 12).

## 6. Kebutuhan Fungsional

### 6.1 Beranda
| ID | Kebutuhan | Prioritas |
|----|-----------|-----------|
| B-01 | Menampilkan hero berupa banner foto sekolah, nama sekolah, dan slogan | Wajib |
| B-02 | Menampilkan sambutan singkat kepala sekolah beserta foto | Wajib |
| B-03 | Menampilkan statistik ringkas (jumlah siswa, guru, ekstrakurikuler, akreditasi) | Opsional |
| B-04 | Menampilkan 3 berita terbaru dengan tautan ke halaman detail | Wajib |
| B-05 | Menampilkan 3 prestasi unggulan dengan tautan ke halaman Prestasi | Wajib |

### 6.2 Profil
| ID | Kebutuhan | Prioritas |
|----|-----------|-----------|
| P-01 | **Sejarah:** teks sejarah sekolah dan minimal 1 foto pendukung | Wajib |
| P-02 | **Visi & Misi:** visi dalam satu kalimat, misi dalam daftar berpoin | Wajib |
| P-03 | **Guru & Karyawan:** kartu berisi foto, nama, dan jabatan/mata pelajaran, dalam bentuk grid | Wajib |
| P-04 | Guru dan karyawan dapat dikelompokkan (misalnya: Pimpinan, Guru, Tenaga Kependidikan) | Opsional |
| P-05 | Kolom pencarian atau filter nama guru | Opsional |

### 6.3 Berita
| ID | Kebutuhan | Prioritas |
|----|-----------|-----------|
| N-01 | Menampilkan daftar berita dalam bentuk kartu (gambar, judul, tanggal, ringkasan), diurutkan dari yang terbaru | Wajib |
| N-02 | Halaman detail berita berisi judul, tanggal, gambar utama, dan isi lengkap | Wajib |
| N-03 | Pagination atau tombol "Muat lebih banyak" bila berita lebih dari 9 | Opsional |
| N-04 | Filter berdasarkan kategori | Opsional |

### 6.4 Prestasi
| ID | Kebutuhan | Prioritas |
|----|-----------|-----------|
| R-01 | Menampilkan daftar prestasi berisi nama lomba, peringkat, tingkat, tahun, nama peraih, dan foto | Wajib |
| R-02 | Filter berdasarkan tahun atau tingkat (kota, provinsi, nasional) | Opsional |

### 6.5 Hubungi Kami
| ID | Kebutuhan | Prioritas |
|----|-----------|-----------|
| K-01 | Menampilkan alamat, nomor telepon/WA, email, dan jam operasional | Wajib |
| K-02 | Menampilkan peta lokasi (embed Google Maps) | Wajib |
| K-03 | Tautan media sosial sekolah | Opsional |
| K-04 | Formulir kontak (nama, email, pesan) | Opsional |

> **Catatan K-04:** karena tidak ada server, formulir dapat memakai layanan pihak ketiga (misalnya Formspree) atau diganti dengan tombol "Hubungi via WhatsApp / Email".

### 6.6 Komponen Global
| ID | Kebutuhan | Prioritas |
|----|-----------|-----------|
| G-01 | Navbar dengan penanda halaman aktif | Wajib |
| G-02 | Footer berisi nama sekolah, alamat singkat, tautan cepat, dan hak cipta | Wajib |
| G-03 | Tombol "kembali ke atas" | Opsional |
| G-04 | Halaman 404 sederhana | Opsional |

## 7. Kebutuhan Non-Fungsional

| Aspek | Kebutuhan |
|-------|-----------|
| **Responsif** | Berfungsi baik pada mobile (≥ 360 px), tablet, dan desktop |
| **Performa** | Halaman termuat < 3 detik pada koneksi normal; gambar dikompres (< 500 KB per gambar) dan memakai `loading="lazy"` |
| **Kompatibilitas** | Chrome, Firefox, Edge, dan Safari versi terbaru |
| **Aksesibilitas** | Semua gambar memiliki atribut `alt`; kontras warna teks memadai; struktur heading berurutan |
| **SEO dasar** | Setiap halaman memiliki `<title>` dan meta description sendiri |
| **Keamanan** | Tidak ada input pengguna yang disimpan; tautan eksternal memakai `rel="noopener noreferrer"` |
| **Kemudahan perawatan** | Konten terpisah dari kode; struktur folder konsisten |

## 8. Struktur Data

Konten dikelola lewat file JSON di folder `data/`.

### 8.1 `data/sekolah.json`
```json
{
  "nama": "Nama Sekolah",
  "slogan": "Slogan sekolah",
  "alamat": "Alamat lengkap",
  "telepon": "08xxxxxxxxxx",
  "email": "info@sekolah.sch.id",
  "jamOperasional": "Senin–Jumat, 07.00–15.00",
  "mapsEmbedUrl": "https://www.google.com/maps/embed?...",
  "sosmed": { "instagram": "", "youtube": "", "facebook": "" }
}
```

### 8.2 `data/guru.json`
```json
[
  {
    "nama": "Budi Santoso, S.Pd.",
    "jabatan": "Guru Matematika",
    "kelompok": "Guru",
    "foto": "budi-santoso-matematika.jpg"
  }
]
```

### 8.3 `data/berita.json`
```json
[
  {
    "slug": "2026-09-upacara-hut-ri",
    "judul": "Upacara HUT RI di Sekolah",
    "tanggal": "2026-09-17",
    "kategori": "Kegiatan",
    "ringkasan": "Ringkasan singkat berita.",
    "isi": "Isi lengkap berita.",
    "gambar": "2026-09-upacara-hut-ri.jpg"
  }
]
```

### 8.4 `data/prestasi.json`
```json
[
  {
    "lomba": "Olimpiade Sains",
    "peringkat": "Juara 1",
    "tingkat": "Provinsi",
    "tahun": 2026,
    "peraih": "Nama Siswa",
    "foto": "2026-olimpiade-sains-juara-1.jpg"
  }
]
```

## 9. Aset Gambar & Konvensi Penamaan

```
assets/
└── images/
    ├── logo/        → logo-sekolah.png, logo-sekolah-putih.png
    ├── hero/        → hero-1.jpg, hero-2.jpg
    ├── profil/      → kepsek.jpg, sejarah-1.jpg, gedung.jpg
    ├── guru/        → nama-jabatan-atau-mapel.jpg
    ├── berita/      → tahun-bulan-slug-berita.jpg
    ├── prestasi/    → tahun-lomba-peringkat.jpg
    └── umum/
```

**Aturan:** huruf kecil, tanpa spasi (gunakan `-`), tanpa karakter khusus, nama menjelaskan isi. Format `.jpg`/`.webp` (logo: `.png`/`.svg`).

**Ukuran yang disarankan:**

| Jenis | Rasio | Ukuran |
|-------|-------|--------|
| Hero | 16:9 | 1600×900 px |
| Berita | 16:9 | 1200×675 px |
| Foto guru | 3:4 | 600×800 px |
| Prestasi | 4:3 | 800×600 px |

## 10. Rekomendasi Teknologi *(usulan, dapat diganti)*

Karena situs sederhana dan tidak butuh backend, pendekatan **statis** direkomendasikan:

| Komponen | Usulan |
|----------|--------|
| Markup & gaya | HTML5, CSS3 (atau Tailwind CSS) |
| Interaksi | JavaScript vanilla (memuat data dari JSON, navbar mobile, filter) |
| Data | File JSON |
| Hosting | GitHub Pages / Netlify / Vercel (gratis) |
| Kontrol versi | Git & GitHub |

**Alternatif:** bila dosen mensyaratkan framework tertentu (Laravel, Next.js, dsb.), struktur halaman dan data pada dokumen ini tetap berlaku.

### Struktur Proyek (usulan)
```
website-sekolah/
├── index.html
├── profil.html
├── berita.html
├── berita-detail.html
├── prestasi.html
├── kontak.html
├── 404.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── berita.js
│   ├── guru.js
│   └── prestasi.js
├── data/
│   ├── sekolah.json
│   ├── guru.json
│   ├── berita.json
│   └── prestasi.json
├── assets/
│   └── images/
└── README.md
```

## 11. Desain & UX

- **Gaya:** bersih, sederhana, mudah dibaca
- **Warna:** mengikuti warna logo sekolah (satu warna utama, satu warna aksen, latar netral)
- **Tipografi:** satu keluarga font sans-serif (misalnya Poppins atau Inter) dengan ukuran isi minimal 16 px
- **Layout:** grid kartu untuk berita, guru, dan prestasi; hero lebar penuh pada Beranda
- **Konsistensi:** komponen navbar, footer, dan kartu memakai gaya yang sama di semua halaman

## 12. Keputusan Terbuka

| # | Pertanyaan | Status |
|---|------------|--------|
| 1 | Nama sekolah dan jenjang | Belum ditentukan |
| 2 | Tech stack final (statis vs framework tertentu) | Belum ditentukan |
| 3 | Submenu Profil: dropdown terpisah atau satu halaman dengan tiga bagian? | Belum ditentukan |
| 4 | Apakah formulir kontak diperlukan? | Belum ditentukan |
| 5 | Warna dan gaya visual | Menunggu logo |

## 13. Rencana Pengerjaan

| Tahap | Aktivitas | Keluaran |
|-------|-----------|----------|
| 1 | Persiapan konten & aset (logo, foto, teks, data guru) | Folder `assets/` dan file `data/*.json` |
| 2 | Kerangka halaman & komponen global (navbar, footer) | Template dasar |
| 3 | Halaman Beranda dan Profil | 2 halaman selesai |
| 4 | Halaman Berita (daftar + detail) dan Prestasi | 3 halaman selesai |
| 5 | Halaman Hubungi Kami | Halaman selesai |
| 6 | Uji responsif, perbaikan, dan deploy | Website online |

## 14. Kriteria Penerimaan

- [ ] Kelima menu dapat diakses dari navbar dan berisi konten
- [ ] Tampilan tidak rusak di layar HP, tablet, dan desktop
- [ ] Berita dan prestasi tampil sesuai data JSON, urut dari yang terbaru
- [ ] Halaman detail berita dapat dibuka dari daftar berita dan dari Beranda
- [ ] Semua gambar tampil (tidak ada gambar rusak) dan memiliki teks `alt`
- [ ] Peta lokasi dan informasi kontak tampil dengan benar
- [ ] Tidak ada tautan mati (broken link)
- [ ] Website dapat diakses melalui URL hosting

---

*Dokumen ini bersifat hidup dan dapat direvisi seiring berjalannya proyek.*
