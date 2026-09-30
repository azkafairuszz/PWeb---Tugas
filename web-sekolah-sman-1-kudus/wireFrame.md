# Dokumentasi Website SMA Asal 
> Nama  : Azka Fairus Syamsa

> NRP   : 5025251067

> Kelas : PWeb (B) 2026

> Tugas Pertemuan 3

Berikut adalah website SMA Asal mahasiswa. Sebagai contoh, saya membuat website untuk SMAN 1 Kudus. Website dibuat menggunakan HTML, CSS, dan JavaScript (tanpa back-end).

Link Website Sekolah: https://sman1kudus.netlify.app/


## **Wire Frame Website SMAN 1 Kudus**
### 1. Beranda
<img width="902" height="1024" alt="image" src="https://github.com/user-attachments/assets/a158b105-c617-40b2-86fe-afe9108527f4" />


### 2. Profil 
<img width="623" height="1024" alt="image" src="https://github.com/user-attachments/assets/b74bb6a4-3c41-421e-b50f-89aa93e0e5ac" />


### 3. Berita
<img width="996" height="1024" alt="image" src="https://github.com/user-attachments/assets/d706f04e-b943-44e3-a9a3-5c6c4b1c9cf7" />


### 4. Prestasi
<img width="1024" height="747" alt="image" src="https://github.com/user-attachments/assets/284a48c0-be89-4121-809a-821dee3ff4fa" />


### 5. Hubungi Kami
<img width="1024" height="925" alt="image" src="https://github.com/user-attachments/assets/9e907895-1785-4f96-ad3a-162fe17c6379" />

## **Struktur Proyek**
 
Di dalam proyek ini ada 5 halaman utama, 1 stylesheet global, 2 file JavaScript, dan 1 folder aset gambar:
 
```
web-sekolah-sman-1-kudus/
├── index.html
├── profil.html
├── berita.html
├── prestasi.html
├── kontak.html
├── css/
│   └── style.css
├── js/
│   ├── data.js
│   └── main.js
└── assets/
    └── images/
        ├── logo/
        ├── hero/
        ├── profil/
        └── berita/
```
 
* `index.html`
Halaman Beranda. Isinya mencakup hero dengan slideshow dua foto sekolah dan sapaan pembuka, kartu statistik (akreditasi A, total siswa 1.248, siswa laki-laki 466, siswa perempuan 782), sambutan Plt. Kepala Sekolah beserta foto dan identitas beliau, tiga berita terbaru, dan tiga prestasi terbaru.
* `profil.html`
Halaman Profil yang terbagi menjadi tiga bagian: **Sejarah**, **Visi & Misi**, dan **Guru & Karyawan**. Daftar guru dan karyawan (94 orang) ditampilkan dalam kartu grid yang dikelompokkan menjadi Pimpinan, Guru, dan Staf Tata Usaha & Karyawan.
* `berita.html`
Halaman daftar 6 berita dalam kartu grid, diurutkan dari yang terbaru. Bila diklik, halaman yang sama menampilkan detail berita lewat parameter URL (contoh: `berita.html?s=pilketos-2026`).
* `prestasi.html`
Halaman yang menampilkan daftar prestasi siswa dalam kartu grid, dilengkapi lencana peringkat, nama lomba, peraih, dan tingkat/tahun.
* `kontak.html`
Halaman ini memuat alamat sekolah, nomor telepon, dan peta lokasi Google Maps.
* `css/style.css`
File ini menjadi pusat styling untuk seluruh elemen visual, mulai dari layout, tipografi, kombinasi warna, hingga efek hover dan tampilan responsif.
* `js/data.js`
Sumber data tunggal untuk seluruh konten dinamis: identitas sekolah, visi misi, sejarah, daftar guru dan karyawan, berita, dan prestasi.
* `js/main.js`
Membaca `data.js` lalu membuat navbar, footer, daftar berita, detail berita, daftar prestasi, dan daftar guru pada halaman masing-masing, serta mengatur slideshow hero dan menu hamburger.
* `assets/images/`
Folder lokal yang menampung seluruh kebutuhan visual: `logo/logo-smasa-kudus.jpg`, `hero/hero-1-sekolah-tampak-depan.png`, `hero/hero-2-sekolah-tampak-samping.png`, `profil/kepsek-sma-1-kudus.jpeg`, dan `berita/berita-1.png` sampai `berita-6.png`.

<img width="1025" height="907" alt="image" src="https://github.com/user-attachments/assets/e6955e71-fd58-466c-8c5a-8f17e13cb634" />
<img width="1025" height="588" alt="image" src="https://github.com/user-attachments/assets/acdf550e-6fea-4d58-bcb0-5ab8cb221336" />
<img width="1025" height="422" alt="image" src="https://github.com/user-attachments/assets/78d0fc5a-5ff6-4332-82de-03c9814f7448" />
<img width="1025" height="452" alt="image" src="https://github.com/user-attachments/assets/a7fc6157-ca04-49c8-b50c-5e3c0cfc05f1" />
<img width="1025" height="907" alt="image" src="https://github.com/user-attachments/assets/f86a779e-2198-46db-a9cb-54552b82518a" />
<img width="1025" height="607" alt="image" src="https://github.com/user-attachments/assets/aef36e05-4e69-4542-a60d-ed749037e6b5" />
<img width="1025" height="905" alt="image" src="https://github.com/user-attachments/assets/4af5a413-201f-440e-91e8-192783d8fac2" />



## **Palet Warna & Karakter Desain**
 
Desain website ini mengusung gaya **modern** dengan tiga warna identitas sekolah:
 
* **Merah** (`#c8102e`)
Dipakai sebagai aksen utama pada menu aktif, tombol (`.btn`), garis bawah judul section, avatar guru, dan garis penanda foto kepala sekolah.
* **Hitam** (`#111111`)
Dipakai untuk latar header dan footer, overlay gelap pada hero, serta gradasi banner judul halaman (dipadukan dengan merah tua `#5b0a17`).
* **Kuning** (`#ffc72c`)
Dipakai sebagai warna penegas: garis bawah header, label akreditasi, lencana peringkat prestasi, dan garis atas kartu statistik.
Warna pendukung: putih tulang `#faf8f6` sebagai latar halaman, putih `#ffffff` untuk latar kartu, serta abu-abu `#666666` untuk teks sekunder seperti tanggal. Tipografi memakai font **Inter** dari Google Fonts.
 
## **Catatan Teknis & Trik Layouting**
 
### A. Sticky Navigation Bar
Header navigasi dibuat tetap berada di posisi atas layar (`position: sticky; top: 0;`) dengan `z-index: 9` dan garis bawah kuning. Menu halaman yang sedang dibuka ditandai otomatis lewat atribut `data-page` pada `<body>`. Menu **Profil** memiliki dropdown (Sejarah, Visi & Misi, Guru & Karyawan) yang muncul saat di-hover.
 
### B. Hero Slideshow dengan Overlay
Hero menampilkan dua foto sekolah sebagai `background-image` yang bergantian (*crossfade*) setiap 5 detik lewat transisi `opacity` 1 detik. Di atasnya diberi `linear-gradient` hitam transparan agar teks judul putih tetap terbaca tegas di atas foto.
 
### C. Kartu Statistik yang Menumpuk di Atas Hero
Kartu statistik diberi `margin-top: -48px` sehingga sebagian kartu menimpa bagian bawah hero. Ini menghasilkan transisi visual yang halus antara hero dan konten di bawahnya.
 
### D. Grid Responsif
Seluruh kartu (berita, prestasi, guru) memakai CSS Grid `repeat(auto-fill, minmax(260px, 1fr))`, sehingga jumlah kolom menyesuaikan lebar layar secara otomatis tanpa perlu banyak media query. Kartu berita memiliki efek hover berupa pergeseran vertikal (`transform: translateY(-4px)`) dan bayangan yang lebih tegas.
 
### E. Tampilan Mobile
Pada lebar layar di bawah 800 px, menu berubah menjadi tombol hamburger, submenu Profil tampil langsung di dalam daftar menu, dan layout sambutan kepala sekolah berubah dari dua kolom menjadi satu kolom.
 
### F. Konten Berbasis Data
Halaman tidak menulis daftar berita, prestasi, dan guru secara manual. Semuanya dibuat oleh `main.js` dari `data.js`. Data diletakkan di file JavaScript (bukan JSON yang di-`fetch`) agar website tetap berjalan ketika `index.html` dibuka langsung dari folder tanpa server.
 
### G. Dependensi Eksternal
Tidak ada library JavaScript atau ikon tambahan. Satu-satunya sumber eksternal adalah:
* Google Fonts (Inter): `https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap`
* Embed Google Maps pada halaman `kontak.html`
Bila tidak ada koneksi internet, website tetap tampil dengan font bawaan sistem, tetapi peta tidak akan termuat.
 
## **Cara Memperbarui Konten**
 
Semua perubahan konten dilakukan di `js/data.js`:
 
| Ingin mengubah | Bagian di `data.js` |
|---|---|
| Nama, alamat, telepon | `sekolah` |
| Visi dan misi | `visi`, `misi` |
| Sejarah | `sejarah` (satu elemen = satu paragraf) |
| Guru dan karyawan | `guru` (format `[nama, jabatan, kelompok]`) |
| Berita | `berita` (isi `slug`, `tanggal`, `gambar`, `judul`, `ringkasan`, `isi`) |
| Prestasi | `prestasi` (isi `t`, `lomba`, `peringkat`, `peraih`, `info`) |
 
Untuk menambah berita, simpan gambarnya di `assets/images/berita/`, lalu tambahkan satu objek baru pada array `berita`. Urutan tampilan diatur otomatis berdasarkan tanggal.
 
Teks sambutan kepala sekolah dan statistik siswa pada Beranda ada langsung di `index.html`.
 
## **Cara Menjalankan Proyek**
 
1. Pastikan file `index.html`, `profil.html`, `berita.html`, `prestasi.html`, dan `kontak.html` berada dalam satu folder kerja, bersama folder `css/` dan `js/`.
2. Siapkan folder `assets/images/` di lokasi yang sama beserta subfolder `logo/`, `hero/`, `profil/`, dan `berita/`. Nama file gambar harus sama persis dengan yang tercantum pada bagian 1.
3. Buka `index.html` langsung melalui browser (Chrome, Firefox, atau Edge), atau gunakan extension **Live Server** di VS Code (klik kanan `index.html` lalu pilih *Open with Live Server*) untuk preview langsung saat mengedit kode.
4. Jika ingin dideploy secara sederhana, masukkan seluruh folder ke dalam satu repositori GitHub, lalu hosting gratis lewat **GitHub Pages**, atau import repositori tersebut ke **Vercel** (tanpa perintah build, cukup pilih *Other* sebagai framework preset).

