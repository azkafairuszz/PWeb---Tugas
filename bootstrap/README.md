# Bootstrap

| Nama               | NRP        | Kelas    |
| ------------------ | ---------- | -------- |
| Azka Fairus Syamsa | 5025251067 | PWeb (B) |

Tugas Bootstrap berisi dua halaman web yang dibuat dengan HTML dan Bootstrap 5.3.3 (via CDN): **Landing Page** berupa portal berita "Nusantara Kini" dan **Login & Register Page** dengan tampilan split screen.

## Tautan

| Keterangan                        | Link                                                                            |
| --------------------------------- | ------------------------------------------------------------------------------- |
| Website Landing Page (deploy)     | [Link Website](https://GANTI-DENGAN-LINK-VERCEL-LANDING-PAGE.vercel.app/)       |
| Website Login & Register (deploy) | [Link Website](https://GANTI-DENGAN-LINK-VERCEL-LOGIN-REGISTER.vercel.app/)     |
| Repository kode                   | [Repo Github](https://github.com/azkafairuszz/PWeb---Tugas/tree/main/bootstrap) |

## Struktur folder

```
bootstrap/
├── bootstrap-landing-page/
│   └── index.html
├── bootstrap-login-register/
│   └── index.html
└── README.md
```

## 1. Landing Page (`bootstrap-landing-page`)

Halaman portal berita bernama **Nusantara Kini** yang berisi ringkasan berita terkini.

### Susunan halaman

- **Header**: latar `bg-primary`, berisi nama portal dan menu navigasi (Beranda, Nasional, Ekonomi & Olahraga) dalam bentuk tombol.
- **Sidebar (`col-md-3`)**: tiga kartu berita singkat, yaitu Ekonomi & Emas, Keamanan Digital, serta Lalu Lintas & Nataru.
- **Konten utama (`col-md-9`)**: judul "Berita Utama Hari Ini", dua kartu berita berdampingan (`col-md-6`) yang masing-masing punya tombol aksi, dan satu kartu berita lebar penuh di bawahnya.
- **Footer**: latar `bg-dark`, berisi nama portal, hak cipta, dan tautan Kebijakan Privasi, Pedoman Media, serta Kontak Redaksi.

### Fitur

| Fitur                     | Keterangan                                                 | Status        |
| ------------------------- | ---------------------------------------------------------- | ------------- |
| Header dan navigasi       | Nama portal dan tiga tombol menu                           | Berfungsi     |
| Layout sidebar dan konten | Dua kolom dengan grid Bootstrap (3 : 9)                    | Berfungsi     |
| Kartu berita              | Kartu dengan judul, isi, dan tombol aksi                   | Berfungsi     |
| Footer                    | Hak cipta dan tiga tautan footer                           | Berfungsi     |
| Responsive design         | Kolom menumpuk menjadi satu di layar kecil (di bawah `md`) | Berfungsi     |
| Tautan menu dan tombol    | Semua tautan masih `#` (belum mengarah ke halaman lain)    | Tampilan saja |

### Komponen Bootstrap yang digunakan

- Grid system: `container`, `row`, `col-md-*`
- Card: `card`, `card-body`, `card-title`, `card-text`
- Button: `btn btn-primary`, `btn btn-success`
- Utility class: `bg-light`, `bg-dark`, `text-white`, `p-3`, `mb-3`, `my-4`, `h-100`, `d-flex`, `justify-content-between`, `fw-bold`

## 2. Login & Register Page (`bootstrap-login-register`)

Halaman autentikasi dengan layout **split screen**: sisi kiri berupa gambar pemandangan pegunungan setinggi layar penuh, sisi kanan berupa form. Form Login dan Register berada di satu halaman dan dapat berganti tanpa memuat ulang halaman.

### Susunan halaman

- **Kolom kiri**: gambar latar pegunungan bernuansa biru (`bg-image`), hanya tampil di layar `md` ke atas.
- **Kolom kanan**: form dengan tinggi minimal `100vh` dan konten di tengah secara vertikal.
  - **Form Login**: Email address, Password, checkbox "Remember password", tombol Sign in, tautan "Forgot password?", dan tautan "Register here".
  - **Form Register**: Full name, Email address, Password, Confirm password, checkbox persetujuan Terms & Conditions, tombol Register, dan tautan "Sign in".

### Fitur

| Fitur                     | Keterangan                                                                  | Status        |
| ------------------------- | --------------------------------------------------------------------------- | ------------- |
| Layout split screen       | Gambar di kiri, form di kanan                                               | Berfungsi     |
| Form Login                | Input email, password, dan checkbox remember                                | Berfungsi     |
| Form Register             | Input nama, email, password, konfirmasi password, dan checkbox terms        | Berfungsi     |
| Pindah Login dan Register | Tautan menukar form dengan fungsi `toggleForm()` tanpa reload               | Berfungsi     |
| Validasi dasar            | Atribut `required` dan tipe `email` memeriksa isian kosong dan format email | Berfungsi     |
| Floating label            | Label input naik saat input diisi (`form-floating`)                         | Berfungsi     |
| Responsive design         | Gambar disembunyikan di bawah `md` dan form memenuhi layar                  | Berfungsi     |
| Proses login dan register | Belum terhubung ke backend atau penyimpanan data                            | Tampilan saja |
| Cek kecocokan password    | Password dan konfirmasi password belum dibandingkan                         | Tampilan saja |
| Forgot password           | Tautan masih `#`                                                            | Tampilan saja |

### Komponen Bootstrap yang digunakan

- Grid system: `container-fluid`, `row g-0`, `col-md-*`, `col-lg-*`
- Form: `form-floating`, `form-control`, `form-check`, `form-check-input`
- Button: `btn btn-lg btn-primary`, `d-grid`
- Utility class: `d-none`, `d-md-flex`, `d-flex`, `align-items-center`, `mx-auto`, `text-muted`, `text-uppercase`, `fw-bold`, `text-decoration-none`

## Teknologi

- HTML5 untuk struktur halaman
- Bootstrap 5.3.3 (CSS dan JS Bundle via CDN jsDelivr)
- CSS3 untuk gambar latar dan penyesuaian tampilan tombol pada halaman login
- JavaScript untuk berpindah antara form Login dan Register
- Git dan GitHub untuk version control
- Vercel untuk deploy

## Ringkasan langkah pembuatan

1. **Menyiapkan struktur folder.** Dibuat folder `bootstrap` dengan dua subfolder, `bootstrap-landing-page` dan `bootstrap-login-register`, masing-masing berisi `index.html`.
2. **Memasang Bootstrap.** CSS dan JS Bundle Bootstrap 5.3.3 dimuat lewat CDN, serta tag `meta viewport` ditambahkan agar halaman responsif.
3. **Landing page: membuat header dan footer.** Header memakai `bg-primary` dengan tombol navigasi, sedangkan footer memakai `bg-dark` dan `d-flex` agar teks hak cipta dan tautan terpisah kiri-kanan.
4. **Landing page: membuat layout dengan grid.** Halaman dibagi menjadi sidebar `col-md-3` dan konten utama `col-md-9`.
5. **Landing page: membuat kartu berita.** Komponen `card` dipakai untuk sidebar dan konten utama, dengan `h-100` agar tinggi kartu sejajar.
6. **Login page: membuat layout split screen.** `row g-0` dibagi menjadi kolom gambar (`d-none d-md-flex`) dan kolom form, dengan tinggi `100vh` lewat CSS.
7. **Login page: membuat form.** Input memakai `form-floating`, lalu ditambah checkbox dan tombol dengan `d-grid`.
8. **Login page: membuat form Register.** Form kedua ditambahkan dan disembunyikan dengan `d-none`.
9. **Login page: menambahkan JavaScript.** Fungsi `toggleForm()` menukar form dengan menambah dan menghapus class `d-none`.
10. **Menguji responsive design.** Tampilan dicek pada ukuran desktop dan layar kecil.
11. **Upload dan deploy.** Kode di-push ke GitHub, lalu repository dihubungkan ke Vercel dengan Root Directory sesuai folder masing-masing halaman.

## Cara menjalankan di komputer

1. Clone repository atau unduh filenya.
2. Buka `index.html` pada folder `bootstrap-landing-page` atau `bootstrap-login-register` di browser.
3. Koneksi internet dibutuhkan karena Bootstrap dan gambar latar dimuat dari CDN.
