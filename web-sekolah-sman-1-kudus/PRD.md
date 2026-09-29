# 🏫 Product Requirements Document (PRD)
## Website Resmi Sekolah

| Atribut | Detail |
|---|---|
| **Nama Proyek** | Website Resmi Sekolah |
| **Versi Dokumen** | 1.0 |
| **Status** | Draft |
| **Tanggal** | 29 September 2026 |
| **Penyusun** | Azka |
| **Jenis Produk** | Website (Responsive Web Application) |

---

## 📑 Daftar Isi

1. [Ringkasan Produk](#1-ringkasan-produk)
2. [Latar Belakang & Masalah](#2-latar-belakang--masalah)
3. [Tujuan & Metrik Keberhasilan](#3-tujuan--metrik-keberhasilan)
4. [Target Pengguna (Persona)](#4-target-pengguna-persona)
5. [Ruang Lingkup](#5-ruang-lingkup)
6. [Struktur Navigasi & Sitemap](#6-struktur-navigasi--sitemap)
7. [Kebutuhan Fungsional](#7-kebutuhan-fungsional)
8. [Kebutuhan Non-Fungsional](#8-kebutuhan-non-fungsional)
9. [User Stories](#9-user-stories)
10. [Desain & UX Guidelines](#10-desain--ux-guidelines)
11. [Arsitektur & Tech Stack (Usulan)](#11-arsitektur--tech-stack-usulan)
12. [Model Data](#12-model-data)
13. [SEO & Analitik](#13-seo--analitik)
14. [Keamanan](#14-keamanan)
15. [Timeline & Milestone](#15-timeline--milestone)
16. [Risiko & Mitigasi](#16-risiko--mitigasi)
17. [Asumsi & Dependensi](#17-asumsi--dependensi)
18. [Kriteria Penerimaan (UAT)](#18-kriteria-penerimaan-uat)
19. [Pertanyaan Terbuka](#19-pertanyaan-terbuka)
20. [Lampiran](#20-lampiran)

---

## 1. Ringkasan Produk

Website Resmi Sekolah adalah media informasi digital yang menjadi wajah utama sekolah di internet. Website ini menyajikan profil sekolah, kabar terbaru, capaian prestasi, serta kanal komunikasi resmi bagi siswa, orang tua, calon peserta didik, alumni, dan masyarakat umum.

Website dilengkapi **panel admin (CMS)** agar pihak sekolah dapat mengelola konten secara mandiri tanpa keahlian teknis.

### Menu Utama

1. **Beranda**
2. **Profil**
   - Sejarah
   - Visi & Misi
   - Guru & Karyawan
3. **Berita**
4. **Prestasi**
5. **Hubungi Kami**

---

## 2. Latar Belakang & Masalah

### 2.1 Latar Belakang
Sekolah membutuhkan kehadiran digital yang kredibel, mudah diakses, dan mudah diperbarui untuk menyampaikan informasi secara transparan kepada publik.

### 2.2 Permasalahan
| # | Masalah | Dampak |
|---|---|---|
| 1 | Informasi sekolah tersebar di berbagai media (grup chat, media sosial, papan pengumuman) | Informasi sulit dicari dan tidak konsisten |
| 2 | Tidak ada satu sumber resmi yang terpusat | Publik ragu terhadap kevalidan informasi |
| 3 | Prestasi siswa/sekolah tidak terdokumentasi rapi | Reputasi sekolah kurang tersampaikan |
| 4 | Calon siswa/orang tua sulit menghubungi sekolah | Banyak pertanyaan berulang ke pihak sekolah |
| 5 | Pembaruan konten bergantung pada pihak teknis | Konten cepat usang |

### 2.3 Peluang
Website terpusat dengan CMS sederhana dapat meningkatkan citra sekolah, transparansi, dan efisiensi komunikasi.

---

## 3. Tujuan & Metrik Keberhasilan

### 3.1 Tujuan Bisnis
- Menjadi **sumber informasi resmi** sekolah di internet.
- Meningkatkan **citra dan kredibilitas** sekolah.
- Mempermudah **komunikasi** antara sekolah dan masyarakat.
- Mendokumentasikan **prestasi** sekolah secara sistematis.

### 3.2 Tujuan Produk
- Website cepat, responsif, dan mudah dinavigasi.
- Admin dapat mengelola konten tanpa bantuan developer.
- Konten dapat ditemukan melalui mesin pencari (SEO-friendly).

### 3.3 Key Performance Indicators (KPI)

| Metrik | Target (6 bulan setelah rilis) |
|---|---|
| Pengunjung unik bulanan | ≥ 2.000 |
| Rata-rata durasi kunjungan | ≥ 2 menit |
| Bounce rate | ≤ 55% |
| Skor Lighthouse (Performance) | ≥ 85 (mobile) |
| Skor Lighthouse (Accessibility & SEO) | ≥ 90 |
| Frekuensi publikasi berita | ≥ 4 artikel/bulan |
| Pesan masuk dari formulir kontak ditanggapi | ≤ 2 hari kerja |
| Uptime | ≥ 99% |

---

## 4. Target Pengguna (Persona)

### 4.1 Pengguna Publik

| Persona | Deskripsi | Kebutuhan Utama |
|---|---|---|
| **Orang Tua / Wali** | Ingin memantau kabar dan kualitas sekolah | Berita, pengumuman, kontak |
| **Calon Siswa & Orang Tua** | Sedang mencari sekolah | Profil, prestasi, visi misi, lokasi |
| **Siswa** | Pengguna harian | Berita, prestasi, info guru |
| **Alumni** | Ingin terhubung kembali | Berita, sejarah, kontak |
| **Masyarakat / Instansi** | Mencari info resmi | Profil, kontak, lokasi |

### 4.2 Pengguna Internal

| Persona | Deskripsi | Kebutuhan Utama |
|---|---|---|
| **Super Admin** | Pengelola teknis / kepala TU | Kelola seluruh konten, pengguna, dan pengaturan |
| **Editor / Operator** | Guru/staf yang ditugaskan | Membuat & mengedit berita, prestasi, data guru |

---

## 5. Ruang Lingkup

### 5.1 ✅ In Scope (Rilis v1.0)
- Halaman publik: Beranda, Profil (Sejarah, Visi Misi, Guru & Karyawan), Berita, Prestasi, Hubungi Kami.
- Panel admin (CMS) untuk mengelola seluruh konten.
- Formulir kontak dengan penyimpanan pesan & notifikasi email.
- Pencarian dan filter pada Berita dan Prestasi.
- Desain responsif (mobile, tablet, desktop).
- SEO dasar, sitemap, dan integrasi analitik.
- Integrasi Google Maps dan tautan media sosial.

### 5.2 ❌ Out of Scope (Rilis v1.0)
- PPDB / pendaftaran siswa baru online.
- Sistem akademik (nilai, absensi, rapor).
- E-learning / LMS.
- Pembayaran online (SPP, dll.).
- Aplikasi mobile native.
- Portal login untuk siswa/orang tua.

### 5.3 🔮 Pengembangan Lanjutan (Future Roadmap)
- Galeri foto & video, Agenda/Kalender akademik, Download center.
- PPDB online, portal alumni.
- Dukungan multi-bahasa (ID/EN).
- Newsletter & notifikasi push.

---

## 6. Struktur Navigasi & Sitemap

```
Website Sekolah
├── Beranda (/)
├── Profil
│   ├── Sejarah            (/profil/sejarah)
│   ├── Visi & Misi        (/profil/visi-misi)
│   └── Guru & Karyawan    (/profil/guru-karyawan)
├── Berita                 (/berita)
│   └── Detail Berita      (/berita/{slug})
├── Prestasi               (/prestasi)
│   └── Detail Prestasi    (/prestasi/{slug})
├── Hubungi Kami           (/hubungi-kami)
└── Admin Panel            (/admin)
    ├── Dashboard
    ├── Kelola Berita
    ├── Kelola Prestasi
    ├── Kelola Guru & Karyawan
    ├── Kelola Halaman Profil (Sejarah, Visi Misi)
    ├── Kelola Beranda (Slider, Sambutan, Statistik)
    ├── Pesan Masuk
    ├── Pengaturan Situs
    └── Manajemen Pengguna
```

### Elemen Global
- **Header:** logo + nama sekolah, menu navigasi, (opsional) kolom pencarian.
- **Footer:** alamat, kontak singkat, tautan cepat, media sosial, hak cipta.
- **Breadcrumb** pada halaman dalam.
- **Tombol "Kembali ke atas"** dan **tombol WhatsApp** mengambang (opsional).

---

## 7. Kebutuhan Fungsional

> **Prioritas:** `P0` = wajib (MVP) · `P1` = penting · `P2` = pelengkap

### 7.1 Beranda

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-BRD-01 | Hero/slider banner dengan judul, gambar, dan tombol CTA (dapat diatur admin) | P0 |
| FR-BRD-02 | Bagian sambutan kepala sekolah (foto, nama, teks singkat) | P0 |
| FR-BRD-03 | Ringkasan statistik sekolah (jumlah siswa, guru, kelas, prestasi, dll.) | P1 |
| FR-BRD-04 | Menampilkan 3–6 berita terbaru beserta tombol "Lihat Semua" | P0 |
| FR-BRD-05 | Menampilkan prestasi unggulan/terbaru | P0 |
| FR-BRD-06 | Bagian tautan cepat ke Profil dan Hubungi Kami | P1 |
| FR-BRD-07 | Peta lokasi singkat / alamat di footer | P2 |
| FR-BRD-08 | Menampilkan pengumuman penting (banner/ticker) | P2 |

### 7.2 Profil

#### 7.2.1 Sejarah

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-SJR-01 | Menampilkan narasi sejarah sekolah dengan rich text | P0 |
| FR-SJR-02 | Mendukung gambar/foto dokumentasi pada konten | P1 |
| FR-SJR-03 | Timeline tonggak sejarah (tahun & keterangan) | P1 |
| FR-SJR-04 | Konten dapat diedit dari panel admin | P0 |

#### 7.2.2 Visi & Misi

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-VM-01 | Menampilkan visi sekolah | P0 |
| FR-VM-02 | Menampilkan daftar misi (berurutan/bernomor) | P0 |
| FR-VM-03 | Menampilkan tujuan sekolah & motto (opsional) | P2 |
| FR-VM-04 | Konten dapat diedit dari panel admin | P0 |

#### 7.2.3 Guru & Karyawan

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-GK-01 | Menampilkan daftar guru dan karyawan dalam bentuk kartu (foto, nama, jabatan/mata pelajaran) | P0 |
| FR-GK-02 | Pemisahan kategori: **Pimpinan**, **Guru**, **Tenaga Kependidikan/Karyawan** | P0 |
| FR-GK-03 | Pencarian berdasarkan nama | P1 |
| FR-GK-04 | Filter berdasarkan kategori/mata pelajaran | P1 |
| FR-GK-05 | Halaman/modal detail (pendidikan, mata pelajaran, kontak opsional) | P2 |
| FR-GK-06 | Pagination atau *load more* | P1 |
| FR-GK-07 | Admin dapat menambah, mengedit, menghapus, dan mengurutkan data | P0 |

### 7.3 Berita

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-BRT-01 | Halaman daftar berita (kartu: thumbnail, judul, tanggal, ringkasan, kategori) | P0 |
| FR-BRT-02 | Pagination | P0 |
| FR-BRT-03 | Halaman detail berita (judul, penulis, tanggal, gambar utama, isi rich text) | P0 |
| FR-BRT-04 | Kategori berita (mis. Kegiatan, Pengumuman, Akademik, Umum) | P1 |
| FR-BRT-05 | Pencarian berita berdasarkan kata kunci | P1 |
| FR-BRT-06 | Filter berdasarkan kategori | P1 |
| FR-BRT-07 | Berita terkait di bagian bawah detail | P2 |
| FR-BRT-08 | Tombol bagikan (WhatsApp, Facebook, X, salin tautan) | P1 |
| FR-BRT-09 | Jumlah pembaca (view counter) | P2 |
| FR-BRT-10 | Admin: CRUD berita, upload gambar, status **Draft / Terbit**, penjadwalan terbit | P0 |
| FR-BRT-11 | URL ramah SEO (`/berita/{slug}`) | P0 |

### 7.4 Prestasi

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-PRS-01 | Halaman daftar prestasi (foto, judul, nama peraih/tim, tingkat, tahun) | P0 |
| FR-PRS-02 | Kategori: **Akademik**, **Non-Akademik**, **Olahraga**, **Seni**, dll. | P0 |
| FR-PRS-03 | Filter berdasarkan kategori, tingkat (Sekolah/Kecamatan/Kabupaten/Provinsi/Nasional/Internasional), dan tahun | P1 |
| FR-PRS-04 | Pencarian prestasi | P1 |
| FR-PRS-05 | Halaman detail (deskripsi, peraih, pembina, tanggal, dokumentasi foto) | P1 |
| FR-PRS-06 | Pembedaan jenis: prestasi siswa dan prestasi sekolah/guru | P2 |
| FR-PRS-07 | Admin: CRUD prestasi, upload foto & sertifikat | P0 |
| FR-PRS-08 | Pagination | P0 |

### 7.5 Hubungi Kami

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-HK-01 | Menampilkan informasi kontak: alamat, telepon, email, jam layanan | P0 |
| FR-HK-02 | Formulir kontak (nama, email, no. telepon, subjek, pesan) | P0 |
| FR-HK-03 | Validasi input di sisi klien & server | P0 |
| FR-HK-04 | Perlindungan anti-spam (CAPTCHA/honeypot/rate limiting) | P0 |
| FR-HK-05 | Pesan tersimpan di database & tampil di admin | P0 |
| FR-HK-06 | Notifikasi email ke admin saat ada pesan baru | P1 |
| FR-HK-07 | Peta Google Maps tertanam | P0 |
| FR-HK-08 | Tautan media sosial (Instagram, YouTube, Facebook, TikTok) | P1 |
| FR-HK-09 | Tombol WhatsApp langsung | P2 |
| FR-HK-10 | Pesan konfirmasi setelah pengiriman berhasil | P0 |

### 7.6 Panel Admin (CMS)

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-ADM-01 | Login admin dengan email & password (hash aman) | P0 |
| FR-ADM-02 | Role: Super Admin dan Editor | P1 |
| FR-ADM-03 | Dashboard ringkasan (jumlah berita, prestasi, pesan baru) | P1 |
| FR-ADM-04 | Editor teks WYSIWYG untuk konten | P0 |
| FR-ADM-05 | Manajemen media (upload, kompres otomatis, hapus) | P0 |
| FR-ADM-06 | Pengaturan situs (nama, logo, favicon, kontak, media sosial, SEO default) | P1 |
| FR-ADM-07 | Manajemen slider/banner Beranda | P0 |
| FR-ADM-08 | Manajemen pesan masuk (baca, tandai, hapus) | P0 |
| FR-ADM-09 | Manajemen pengguna admin (tambah, nonaktifkan, reset password) | P1 |
| FR-ADM-10 | Log aktivitas sederhana | P2 |
| FR-ADM-11 | Lupa password via email | P1 |

---

## 8. Kebutuhan Non-Fungsional

### 8.1 Performa
- Waktu muat halaman (LCP) ≤ **2,5 detik** pada koneksi 4G.
- Gambar dikompres otomatis, menggunakan format modern (WebP) dan *lazy loading*.
- Menerapkan caching (browser & server) dan CDN bila memungkinkan.

### 8.2 Responsivitas & Kompatibilitas
- Desain *mobile-first*: 360px – 1920px.
- Browser didukung: Chrome, Firefox, Safari, Edge (2 versi terbaru), Chrome Android, Safari iOS.

### 8.3 Aksesibilitas
- Mengacu pada **WCAG 2.1 level AA**: kontras warna memadai, teks alternatif pada gambar, navigasi keyboard, label formulir jelas.

### 8.4 Keamanan
- HTTPS wajib (SSL/TLS).
- Perlindungan dari OWASP Top 10 (XSS, SQL Injection, CSRF).
- Password di-*hash* (bcrypt/argon2), sanitasi input, validasi upload file.
- Pembatasan percobaan login (*rate limiting*).

### 8.5 Ketersediaan & Skalabilitas
- Uptime target ≥ 99%.
- Backup database otomatis (minimal mingguan, disarankan harian).
- Mampu melayani lonjakan trafik saat pengumuman/kegiatan besar.

### 8.6 Maintainability
- Kode terdokumentasi, menggunakan version control (Git).
- Terpisah antara environment *development*, *staging*, dan *production*.

### 8.7 Lokalisasi
- Bahasa utama: **Bahasa Indonesia**.
- Format tanggal: `DD MMMM YYYY` (zona waktu WIB).

### 8.8 Kepatuhan
- Mematuhi UU Pelindungan Data Pribadi (UU PDP) — terutama data pesan formulir kontak dan data guru/karyawan (tampilkan hanya data yang disetujui untuk publik).
- Foto siswa/anak-anak dipublikasikan dengan persetujuan sekolah/orang tua.

---

## 9. User Stories

### Pengunjung
- Sebagai **orang tua**, saya ingin membaca berita terbaru sekolah agar tahu kegiatan dan pengumuman terkini.
- Sebagai **calon siswa**, saya ingin melihat prestasi sekolah agar yakin dengan kualitas sekolah.
- Sebagai **calon orang tua**, saya ingin melihat visi, misi, dan sejarah sekolah agar memahami nilai yang dianut.
- Sebagai **siswa**, saya ingin mengetahui daftar guru dan mata pelajarannya.
- Sebagai **masyarakat**, saya ingin menemukan alamat dan kontak sekolah dengan mudah.
- Sebagai **pengunjung**, saya ingin mengirim pertanyaan lewat formulir agar dapat berkomunikasi tanpa datang langsung.
- Sebagai **pengguna ponsel**, saya ingin website tampil nyaman di layar kecil.

### Admin / Editor
- Sebagai **editor**, saya ingin menulis dan menerbitkan berita dengan editor visual agar tidak perlu belajar coding.
- Sebagai **editor**, saya ingin menyimpan berita sebagai draft sebelum dipublikasikan.
- Sebagai **admin**, saya ingin mengelola data guru dan karyawan agar informasi selalu mutakhir.
- Sebagai **admin**, saya ingin menambahkan prestasi baru beserta foto dokumentasinya.
- Sebagai **admin**, saya ingin menerima notifikasi saat ada pesan baru dari pengunjung.
- Sebagai **super admin**, saya ingin mengatur hak akses pengguna agar konten aman.

---

## 10. Desain & UX Guidelines

### 10.1 Prinsip Desain
- **Bersih & profesional** — menonjolkan identitas sekolah.
- **Konsisten** — komponen dan gaya seragam di semua halaman.
- **Mudah dipindai** — hierarki visual jelas, teks ringkas.
- **Hangat & ramah** — foto kegiatan nyata (bukan stok generik).

### 10.2 Identitas Visual
- Warna utama mengikuti **logo/warna identitas sekolah** (ditentukan bersama pihak sekolah).
- Palet: 1 warna primer, 1 sekunder, 1 aksen, plus netral (abu/putih).
- Tipografi: 1 font heading + 1 font body (Sans-serif, mis. *Poppins/Inter/Nunito*).
- Ikon konsisten (mis. Lucide / Heroicons).

### 10.3 Komponen UI Utama
- Navbar dengan dropdown untuk menu **Profil**.
- Hero slider, kartu berita, kartu guru, kartu prestasi.
- Pagination, breadcrumb, tab/filter, form, toast notifikasi, modal.

### 10.4 Wireframe Tingkat Tinggi

**Beranda**
```
┌──────────────────────────────────────────────┐
│ Logo | Beranda | Profil ▾ | Berita | Prestasi | Hubungi Kami │
├──────────────────────────────────────────────┤
│              HERO SLIDER / BANNER            │
├──────────────────────────────────────────────┤
│  Sambutan Kepala Sekolah  │  Foto            │
├──────────────────────────────────────────────┤
│  Statistik: Siswa | Guru | Kelas | Prestasi  │
├──────────────────────────────────────────────┤
│  Berita Terbaru  [Card][Card][Card]          │
├──────────────────────────────────────────────┤
│  Prestasi Unggulan [Card][Card][Card]        │
├──────────────────────────────────────────────┤
│  Footer: Alamat | Tautan Cepat | Sosial Media│
└──────────────────────────────────────────────┘
```

**Guru & Karyawan**
```
[ Judul ]      [ Cari nama... ] [ Filter kategori ▾ ]
[Foto][Foto][Foto][Foto]
[Nama][Nama][Nama][Nama]
[Jabatan]...
              « 1 2 3 »
```

> Wireframe rinci dan *high-fidelity mockup* dibuat pada fase desain (Figma).

---

## 11. Arsitektur & Tech Stack (Usulan)

> Bagian ini bersifat **usulan** dan dapat disesuaikan dengan kemampuan tim dan hosting.

### Opsi A — Fullstack JavaScript (Direkomendasikan untuk fleksibilitas)
| Lapisan | Teknologi |
|---|---|
| Frontend | Next.js (React) + Tailwind CSS |
| Backend/API | Next.js API Routes / Node.js (Express) |
| Database | PostgreSQL / MySQL |
| ORM | Prisma |
| Auth | NextAuth / JWT |
| Penyimpanan Media | Cloudinary / S3 / storage lokal server |
| Hosting | VPS / Vercel + managed DB |

### Opsi B — PHP (Cocok untuk hosting sekolah umum)
| Lapisan | Teknologi |
|---|---|
| Framework | Laravel |
| Frontend | Blade + Tailwind CSS (atau Livewire) |
| Admin | Filament / Laravel Backpack |
| Database | MySQL |
| Hosting | Shared hosting / VPS |

### Opsi C — Headless CMS
| Lapisan | Teknologi |
|---|---|
| CMS | Strapi / Directus |
| Frontend | Next.js / Astro |

### Infrastruktur Pendukung
- **Domain:** `namasekolah.sch.id` (disarankan).
- **SSL:** Let's Encrypt.
- **Email:** SMTP (mis. Brevo/Mailgun/SMTP hosting).
- **Version control:** Git + GitHub/GitLab.
- **CI/CD:** GitHub Actions (opsional).
- **Monitoring:** UptimeRobot.

---

## 12. Model Data

### 12.1 Entity Relationship (Ringkas)

```
users ─┬─< news
       └─< achievements

news_categories ─< news
achievement_categories ─< achievements
staff_categories ─< staff
```

### 12.2 Definisi Tabel

**`users`**
| Field | Tipe | Keterangan |
|---|---|---|
| id | PK | |
| name | string | |
| email | string, unique | |
| password | string (hash) | |
| role | enum(`super_admin`, `editor`) | |
| is_active | boolean | |
| created_at / updated_at | timestamp | |

**`news`**
| Field | Tipe | Keterangan |
|---|---|---|
| id | PK | |
| title | string | |
| slug | string, unique | |
| excerpt | text | Ringkasan |
| content | longtext | Rich text |
| thumbnail | string | Path gambar |
| category_id | FK | |
| author_id | FK → users | |
| status | enum(`draft`, `published`) | |
| published_at | datetime | Mendukung penjadwalan |
| views | integer | |
| meta_title / meta_description | string | SEO |
| created_at / updated_at | timestamp | |

**`news_categories`**
| Field | Tipe |
|---|---|
| id, name, slug | PK, string, string |

**`achievements`**
| Field | Tipe | Keterangan |
|---|---|---|
| id | PK | |
| title | string | |
| slug | string, unique | |
| description | text | |
| winner_name | string | Individu/tim |
| category_id | FK | Akademik/Non-Akademik/dll. |
| level | enum(`sekolah`, `kecamatan`, `kabupaten`, `provinsi`, `nasional`, `internasional`) | |
| rank | string | Juara 1, 2, dst. |
| achievement_date | date | |
| year | integer | |
| coach_name | string | Pembina |
| image | string | |
| certificate | string | Opsional |
| is_featured | boolean | Tampil di Beranda |
| status | enum(`draft`, `published`) | |

**`staff`**
| Field | Tipe | Keterangan |
|---|---|---|
| id | PK | |
| name | string | |
| position | string | Jabatan |
| subject | string | Mata pelajaran (guru) |
| category_id | FK | Pimpinan/Guru/Karyawan |
| photo | string | |
| education | string | Opsional |
| email | string | Opsional |
| sort_order | integer | Urutan tampil |
| is_active | boolean | |

**`pages`** *(Sejarah, Visi Misi)*
| Field | Tipe | Keterangan |
|---|---|---|
| id | PK | |
| key | string, unique | `sejarah`, `visi-misi` |
| title | string | |
| content | longtext | |
| updated_by | FK → users | |
| updated_at | timestamp | |

**`timelines`** *(opsional, tonggak sejarah)*
| Field | Tipe |
|---|---|
| id, year, title, description, sort_order | |

**`sliders`**
| Field | Tipe |
|---|---|
| id, title, subtitle, image, cta_text, cta_url, sort_order, is_active | |

**`messages`**
| Field | Tipe | Keterangan |
|---|---|---|
| id | PK | |
| name, email, phone | string | |
| subject | string | |
| message | text | |
| is_read | boolean | |
| created_at | timestamp | |

**`settings`**
| Field | Tipe |
|---|---|
| key, value | string, text |
> Contoh key: `school_name`, `logo`, `address`, `phone`, `email`, `maps_embed`, `instagram`, `youtube`, `principal_name`, `principal_greeting`, `stat_students`, dst.

---

## 13. SEO & Analitik

### 13.1 SEO
- URL ramah (*slug*) & struktur heading (H1–H3) yang benar.
- Meta title & description dinamis per halaman.
- Open Graph & Twitter Card untuk pratinjau saat dibagikan.
- `sitemap.xml` dan `robots.txt`.
- Schema markup (`EducationalOrganization`, `NewsArticle`).
- Alt text pada gambar, kecepatan halaman optimal.
- Daftarkan di **Google Search Console** dan **Google Business Profile**.

### 13.2 Analitik
- Google Analytics 4 (atau alternatif privasi seperti Plausible/Umami).
- Event yang dilacak: klik menu, kirim formulir kontak, klik berita, klik WhatsApp.

---

## 14. Keamanan

| Ancaman | Mitigasi |
|---|---|
| XSS | Sanitasi output & konten rich text, CSP header |
| SQL Injection | ORM/prepared statement |
| CSRF | Token CSRF pada semua form |
| Brute force login | Rate limiting, lockout sementara |
| Upload file berbahaya | Validasi tipe/ukuran, rename file, simpan di luar web root bila memungkinkan |
| Spam formulir | CAPTCHA/honeypot, rate limit per IP |
| Kebocoran data | HTTPS, password hashing, akses berbasis role |
| Kehilangan data | Backup rutin & uji restore |

---

## 15. Timeline & Milestone

> Estimasi untuk tim kecil (1–3 orang). Dapat disesuaikan.

| Fase | Aktivitas | Durasi | Output |
|---|---|---|---|
| **1. Discovery** | Kumpulkan kebutuhan, konten, dan aset (logo, foto, data) | 1 minggu | PRD final, daftar konten |
| **2. Desain UI/UX** | Sitemap, wireframe, mockup Figma, review sekolah | 2 minggu | Desain disetujui |
| **3. Setup & Backend** | Setup repo, database, autentikasi, CMS | 2 minggu | Admin panel dasar |
| **4. Frontend** | Implementasi halaman publik & integrasi API | 3 minggu | Semua halaman berfungsi |
| **5. Konten** | Input konten awal (sejarah, visi misi, guru, berita, prestasi) | 1 minggu | Konten awal terisi |
| **6. Testing & QA** | Uji fungsional, responsif, keamanan, performa, UAT | 1–2 minggu | Bug list & perbaikan |
| **7. Deploy & Launch** | Setup hosting, domain, SSL, go-live | 3 hari | Website live |
| **8. Pasca-Rilis** | Monitoring, pelatihan admin, perbaikan minor | 2 minggu | Dokumentasi & serah terima |

**Total estimasi:** ± 10–12 minggu.

### Milestone
- 🎯 **M1:** PRD & desain disetujui
- 🎯 **M2:** Admin panel & database siap
- 🎯 **M3:** Halaman publik selesai (staging)
- 🎯 **M4:** UAT lulus
- 🎯 **M5:** Go-live

---

## 16. Risiko & Mitigasi

| # | Risiko | Kemungkinan | Dampak | Mitigasi |
|---|---|---|---|---|
| 1 | Konten (foto, data guru, sejarah) terlambat disediakan | Tinggi | Tinggi | Buat daftar kebutuhan konten sejak awal, tetapkan PIC di sekolah |
| 2 | Perubahan permintaan di tengah jalan (*scope creep*) | Sedang | Tinggi | Kunci scope v1.0, catat permintaan baru di roadmap |
| 3 | Admin sekolah kesulitan memakai CMS | Sedang | Sedang | UI admin sederhana, pelatihan & buku panduan |
| 4 | Website tidak dipelihara (konten usang) | Tinggi | Sedang | Tetapkan jadwal & penanggung jawab konten |
| 5 | Serangan spam/peretasan | Sedang | Tinggi | Terapkan langkah keamanan, backup rutin |
| 6 | Hosting/domain kedaluwarsa | Rendah | Tinggi | Catat tanggal perpanjangan, aktifkan auto-renew |
| 7 | Isu privasi data guru/siswa | Sedang | Tinggi | Publikasikan hanya data yang disetujui |

---

## 17. Asumsi & Dependensi

### Asumsi
- Pihak sekolah menyediakan logo, foto, dan seluruh materi konten tepat waktu.
- Sekolah menunjuk minimal 1–2 orang sebagai admin/editor konten.
- Domain dan hosting disediakan atau disetujui oleh sekolah.
- Website berbahasa Indonesia untuk v1.0.

### Dependensi
- Ketersediaan aset identitas sekolah (logo, palet warna).
- Layanan pihak ketiga: Google Maps, SMTP email, (opsional) Cloudinary, Google Analytics.
- Persetujuan publikasi foto dan data pribadi.

---

## 18. Kriteria Penerimaan (UAT)

Website dinyatakan siap rilis jika:

- [ ] Seluruh 5 menu utama (Beranda, Profil ×3 submenu, Berita, Prestasi, Hubungi Kami) dapat diakses dan berfungsi.
- [ ] Semua fitur prioritas **P0** telah selesai dan lulus pengujian.
- [ ] Admin dapat membuat, mengedit, dan menghapus berita, prestasi, serta data guru/karyawan tanpa bantuan developer.
- [ ] Formulir kontak mengirim pesan, tersimpan di admin, dan email notifikasi terkirim.
- [ ] Tampilan responsif baik di ponsel, tablet, dan desktop.
- [ ] Skor Lighthouse memenuhi target (Performance ≥ 85 mobile, Accessibility & SEO ≥ 90).
- [ ] HTTPS aktif dan tidak ada temuan keamanan kritis.
- [ ] Tidak ada *bug* kritis/mayor yang terbuka.
- [ ] Konten awal telah terisi lengkap.
- [ ] Pelatihan admin dan dokumentasi penggunaan telah diserahkan.
- [ ] Backup otomatis aktif dan telah diuji.

---

## 19. Pertanyaan Terbuka

1. Apakah sekolah sudah memiliki **domain & hosting**?
2. Siapa yang berwenang **menyetujui desain dan konten** akhir?
3. Apakah **PPDB online** dibutuhkan di rilis berikutnya?
4. Apakah diperlukan **versi bahasa Inggris**?
5. Apakah ada **sistem/website lama** yang datanya perlu dimigrasi?
6. Siapa **penanggung jawab rutin** untuk memperbarui berita dan prestasi?
7. Apakah ada **pedoman branding** resmi (logo, warna, font)?
8. Data guru/karyawan apa saja yang **boleh dipublikasikan**?

---

## 20. Lampiran

### 20.1 Glosarium

| Istilah | Arti |
|---|---|
| **PRD** | Product Requirements Document |
| **CMS** | Content Management System — sistem pengelola konten |
| **CTA** | Call To Action — tombol ajakan bertindak |
| **SEO** | Search Engine Optimization |
| **UAT** | User Acceptance Testing |
| **MVP** | Minimum Viable Product |
| **WYSIWYG** | Editor teks visual ("apa yang terlihat itulah hasilnya") |
| **LCP** | Largest Contentful Paint — metrik kecepatan muat |
| **PIC** | Person In Charge — penanggung jawab |

### 20.2 Riwayat Revisi

| Versi | Tanggal | Penyusun | Perubahan |
|---|---|---|---|
| 1.0 | 29 September 2026 | Azka | Draft awal PRD |

### 20.3 Daftar Konten yang Perlu Disiapkan Sekolah

- [ ] Logo (format PNG/SVG), palet warna
- [ ] Foto gedung, kegiatan, dan kepala sekolah
- [ ] Teks sejarah sekolah + foto/dokumen pendukung
- [ ] Teks visi, misi, tujuan, dan motto
- [ ] Data guru & karyawan (nama, jabatan, mata pelajaran, foto)
- [ ] Daftar prestasi (judul, peraih, tingkat, tahun, foto)
- [ ] Contoh 5–10 berita awal
- [ ] Alamat lengkap, nomor telepon, email, media sosial, titik Google Maps

---

<p align="center">
  <i>Dokumen ini merupakan draft dan dapat berubah sesuai kesepakatan bersama pihak sekolah.</i>
</p>
