# Product Requirements Document (PRD)
## Personal CV Website — Azka Fairus Syamsa (HTML + CSS)

| | |
|---|---|
| **Dokumen** | PRD Website CV |
| **Pemilik Proyek** | Azka Fairus Syamsa |
| **Tanggal** | 9 September 2026 |
| **Status** | Selesai — untuk pengumpulan tugas |

---

## 1. Latar Belakang

Saya membutuhkan CV digital dalam bentuk halaman web (HTML + CSS) sebagai pengganti/pelengkap CV format PDF konvensional, untuk keperluan pengumpulan tugas mata kuliah. CV yang sudah ada dalam format PDF (berisi data diri, pendidikan, prestasi, pengalaman organisasi, dan keahlian) perlu dikonversi ke halaman web yang tetap enak dibaca, rapi saat dicetak/diekspor ke PDF, dan punya identitas visual yang lebih personal dibanding template CV generik.

## 2. Tujuan (Goals)

1. Menyajikan seluruh informasi dari CV asli (PDF) ke dalam satu halaman web yang terstruktur.
2. Menghasilkan tampilan yang rapi secara visual dengan hierarki informasi yang jelas.
3. Memastikan file bisa dibuka di browser mana pun tanpa dependency eksternal yang rawan putus.
4. Memberi opsi struktur project sesuai kebutuhan: satu file (praktis dikumpulkan) atau file terpisah `index.html` / `style.css` (sesuai kaidah struktur project HTML/CSS dasar).

## 3. Target Pengguna

- **Primer:** Saya sendiri, untuk pengumpulan tugas perkuliahan Pemrograman Web Tahun 2026.
- **Sekunder:** Dosen/asisten yang menilai tugas, dan pihak lain yang mungkin membuka CV ini sebagai referensi profil Azka.

## 4. Lingkup (Scope)

### 4.1 Termasuk dalam scope
- Halaman CV satu layar (single page), memuat section:
  - Header/identitas (nama, foto, kontak: telepon, email, LinkedIn, domisili)
  - About Me
  - Education (riwayat pendidikan: ITS, SMA, SMP)
  - Achievements (prestasi non-akademik)
  - Leadership & Organizational Experience (pengalaman organisasi, disusun kronologis)
  - Skills (technical, soft skills, skor TEFL)
- Gaya visual:
  - Minimalis namun tetap memiliki sisi visualitas yang menarik.
- Dua bentuk penyajian file:
  - **Single-file HTML** (CSS inline, foto di-embed base64) — praktis untuk dikumpulkan sebagai satu file.
  - **Multi-file** (`index.html`, `style.css`, `photo.jpg` terpisah) — untuk kebutuhan belajar struktur project dasar.
- Kompatibel untuk dicetak/diekspor ke PDF langsung dari browser (ukuran A4).

### 4.2 Di luar scope
- Tidak ada backend/server, database, atau form interaktif (CV bersifat statis, read-only).
- Tidak ada versi multi-halaman (about, blog, portofolio terpisah) — hanya satu halaman CV.
- Tidak dioptimalkan sebagai SEO/landing page publik; ditujukan untuk konsumsi langsung (dibuka manual atau dilampirkan sebagai tugas).

## 5. Kebutuhan Fungsional

| ID | Kebutuhan | Prioritas |
|----|-----------|-----------|
| F1 | Menampilkan seluruh data diri, pendidikan, prestasi, organisasi, dan skill sesuai CV asli | Wajib |
| F2 | Foto profil tampil dengan benar di semua mode penyajian (single-file maupun multi-file) | Wajib |
| F3 | Layout tetap rapi saat dibuka di browser desktop maupun mobile (responsif) | Wajib |
| F4 | Halaman bisa dicetak/di-export ke PDF ukuran A4 dari fitur print browser | Wajib |
| F5 | Tersedia dua alternatif gaya visual (minimalis & bold) yang bisa dipilih | Opsional |
| F6 | Tersedia opsi struktur file terpisah (HTML/CSS/gambar) untuk pembelajaran struktur dasar | Opsional |

## 6. Kebutuhan Non-Fungsional

- **Portabilitas:** versi single-file tidak boleh punya dependency eksternal wajib selain font Google Fonts (dengan fallback font sistem jika gagal dimuat).
- **Aksesibilitas dasar:** kontras warna teks-latar memadai, ukuran font terbaca (≥11.5px untuk teks isi).
- **Konsistensi data:** seluruh konten mengikuti isi CV PDF asli tanpa penambahan klaim yang tidak ada sumbernya.
- **Kemudahan edit:** struktur HTML memakai class yang jelas per section agar mudah diubah/ditambah entri baru di kemudian hari.

## 7. Alur Pengguna (User Flow)

1. Pengguna membuka file `index.html` (atau file single-file HTML) di browser.
2. Pengguna membaca CV dari atas ke bawah: identitas → about → pendidikan → prestasi → pengalaman organisasi → skill.
3. Jika perlu versi cetak: pengguna menekan `Ctrl+P` / `Cmd+P`, memilih "Save as PDF".
4. Jika perlu revisi konten: pengguna (atau Claude) mengedit teks langsung di file HTML/CSS terkait.

## 8. Kriteria Sukses

- CV dapat dibuka tanpa error di browser umum (Chrome, Edge, Safari).
- Semua data dari CV PDF asli termuat lengkap tanpa typo/informasi hilang.
- Hasil cetak ke PDF tetap terbaca rapi dalam format A4.
- File siap dikumpulkan sebagai tugas tanpa perlu penyesuaian tambahan dari pengguna.

## 9. Risiko & Batasan

| Risiko | Mitigasi |
|--------|----------|
| Font Google Fonts gagal dimuat (browser offline) | Fallback ke font sistem sudah didefinisikan di CSS |
| Versi multi-file rusak karena file dipindah terpisah dari foldernya | Instruksi eksplisit ke pengguna untuk selalu menyatukan `index.html`, `style.css`, `photo.jpg` dalam satu folder |
| Konten CV berubah di kemudian hari (pengalaman baru, prestasi baru) | Struktur section modular memudahkan penambahan entri baru tanpa merombak layout |

## 10. Referensi

- Sumber data: `CV_Azka_Fairus_Syamsa.pdf` (CV asli yang diunggah pengguna)
- Aset visual: `PasFoto.jpg` (foto profil resmi)
