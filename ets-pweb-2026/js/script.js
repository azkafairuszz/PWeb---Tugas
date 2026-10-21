// ===================================================
// LibraryReg - script.js
// Data anggota disimpan di localStorage (tanpa backend)
// ===================================================

// ---------- Variabel global ----------
const KUNCI_DATA = "anggotaPerpustakaan"; // nama kunci di localStorage
let daftarAnggota = []; // array berisi semua anggota
let sudahLogin = false; // status login petugas (simulasi)
let nimLama = null; // diisi saat mode edit, kosong saat mode tambah
let nimYangDihapus = null;

// Data awal (dipakai kalau localStorage masih kosong)
const dataAwal = [
  {
    nama: "Andi Pratama",
    nim: "230101001",
    prodi: "Informatika",
    jenis: "Mahasiswa",
    telepon: "081234567890",
    email: "andi@email.com",
    alamat: "Jl. Mawar No. 1, Surabaya",
  },
  {
    nama: "Siti Rahma",
    nim: "230101002",
    prodi: "Sistem Informasi",
    jenis: "Mahasiswa",
    telepon: "081234567891",
    email: "siti@email.com",
    alamat: "Jl. Melati No. 5, Sidoarjo",
  },
  {
    nama: "Budi Santoso",
    nim: "19881234",
    prodi: "Informatika",
    jenis: "Dosen",
    telepon: "081234567892",
    email: "budi@email.com",
    alamat: "Jl. Kenanga No. 8, Surabaya",
  },
  {
    nama: "Maya Lestari",
    nim: "230101003",
    prodi: "Manajemen",
    jenis: "Mahasiswa",
    telepon: "081234567893",
    email: "maya@email.com",
    alamat: "Jl. Anggrek No. 3, Gresik",
  },
  {
    nama: "Rizky Kurniawan",
    nim: "230101004",
    prodi: "Akuntansi",
    jenis: "Tenaga Kependidikan",
    telepon: "081234567894",
    email: "rizky@email.com",
    alamat: "Jl. Dahlia No. 10, Surabaya",
  },
];

// ---------- localStorage ----------
function muatData() {
  const tersimpan = localStorage.getItem(KUNCI_DATA);
  if (tersimpan) {
    daftarAnggota = JSON.parse(tersimpan);
  } else {
    daftarAnggota = dataAwal;
    simpanData();
  }
}

function simpanData() {
  localStorage.setItem(KUNCI_DATA, JSON.stringify(daftarAnggota));
}

// ---------- Fungsi bantu ----------
// Mencegah teks dari input dibaca sebagai kode HTML
function aman(teks) {
  const div = document.createElement("div");
  div.textContent = teks;
  return div.innerHTML;
}

// Menampilkan notifikasi (toast Bootstrap)
function notif(pesan, jenis = "success") {
  const toast = document.createElement("div");
  toast.className = "toast align-items-center text-bg-" + jenis + " border-0";
  toast.innerHTML =
    '<div class="d-flex">' +
    '<div class="toast-body">' +
    pesan +
    "</div>" +
    '<button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>' +
    "</div>";
  document.getElementById("areaToast").appendChild(toast);

  const t = new bootstrap.Toast(toast, { delay: 3000 });
  t.show();
  toast.addEventListener("hidden.bs.toast", function () {
    toast.remove();
  });
}

// ---------- Navigasi antar halaman ----------
function tampilHalaman(nama) {
  // Halaman data anggota hanya untuk petugas yang sudah login
  if (nama === "data-anggota" && !sudahLogin) {
    notif("Silakan login petugas terlebih dahulu.", "warning");
    new bootstrap.Modal(document.getElementById("modalLogin")).show();
    return;
  }

  // Sembunyikan semua halaman, lalu tampilkan yang dipilih
  document.querySelectorAll(".halaman").forEach(function (h) {
    h.classList.add("d-none");
  });
  document.getElementById("halaman-" + nama).classList.remove("d-none");

  // Penanda menu aktif
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.classList.toggle("active", link.dataset.halaman === nama);
  });

  // Tutup menu navbar di layar kecil
  const menu = document.getElementById("menuNavbar");
  if (menu.classList.contains("show")) {
    bootstrap.Collapse.getOrCreateInstance(menu).hide();
  }

  if (nama === "data-anggota") {
    tampilkanTabel();
  }
  window.scrollTo(0, 0);
}

// Semua elemen yang punya atribut data-halaman bisa dipakai untuk pindah halaman
document.querySelectorAll("[data-halaman]").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    tampilHalaman(el.dataset.halaman);
  });
});

// ---------- Login petugas (simulasi) ----------
document.getElementById("btnLogin").addEventListener("click", function () {
  if (sudahLogin) {
    // Kalau sudah login, tombol berfungsi sebagai Logout
    sudahLogin = false;
    this.innerHTML = '<i class="bi bi-box-arrow-in-right"></i> Login';
    notif("Anda sudah keluar.", "secondary");
    tampilHalaman("beranda");
  } else {
    new bootstrap.Modal(document.getElementById("modalLogin")).show();
  }
});

document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "admin123") {
    sudahLogin = true;
    bootstrap.Modal.getInstance(document.getElementById("modalLogin")).hide();
    document.getElementById("btnLogin").innerHTML =
      '<i class="bi bi-box-arrow-right"></i> Logout';
    document.getElementById("pesanLogin").classList.add("d-none");
    this.reset();
    notif("Login berhasil. Selamat datang, petugas.");
    tampilHalaman("data-anggota");
  } else {
    document.getElementById("pesanLogin").classList.remove("d-none");
  }
});

// ---------- Validasi formulir ----------
// Memberi tanda merah/hijau pada satu kolom, mengembalikan true jika valid
function cekKolom(id, valid, pesan) {
  const input = document.getElementById(id);
  input.classList.toggle("is-invalid", !valid);
  input.classList.toggle("is-valid", valid);
  if (!valid) {
    input.nextElementSibling.textContent = pesan; // isi teks .invalid-feedback
  }
  return valid;
}

function validasiForm() {
  const nama = document.getElementById("nama").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const prodi = document.getElementById("prodi").value;
  const jenis = document.getElementById("jenis").value;
  const telepon = document.getElementById("telepon").value.trim();
  const email = document.getElementById("email").value.trim();
  const alamat = document.getElementById("alamat").value.trim();

  // NIM/NIP tidak boleh sama dengan anggota lain
  const nimKembar = daftarAnggota.some(function (a) {
    return a.nim === nim && a.nim !== nimLama;
  });

  // Semua kolom dicek (tidak berhenti di kolom pertama yang salah)
  const hasil = [
    cekKolom("nama", nama !== "", "Nama lengkap wajib diisi."),
    cekKolom(
      "nim",
      /^[0-9]{5,20}$/.test(nim) && !nimKembar,
      nim === ""
        ? "NIM/NIP wajib diisi."
        : nimKembar
          ? "NIM/NIP sudah terdaftar."
          : "NIM/NIP harus berupa angka (5-20 digit).",
    ),
    cekKolom("prodi", prodi !== "", "Program studi wajib dipilih."),
    cekKolom("jenis", jenis !== "", "Jenis keanggotaan wajib dipilih."),
    cekKolom(
      "telepon",
      /^08[0-9]{8,12}$/.test(telepon),
      "Nomor telepon harus diawali 08 dan berisi 10-14 angka.",
    ),
    cekKolom(
      "email",
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      "Format email tidak valid.",
    ),
    cekKolom("alamat", alamat !== "", "Alamat wajib diisi."),
  ];

  return !hasil.includes(false); // true jika semua kolom valid
}

// ---------- Simpan anggota (tambah / edit) ----------
document.getElementById("formAnggota").addEventListener("submit", function (e) {
  e.preventDefault();
  if (!validasiForm()) {
    notif("Data belum benar. Periksa kolom yang berwarna merah.", "danger");
    return;
  }

  const anggota = {
    nama: document.getElementById("nama").value.trim(),
    nim: document.getElementById("nim").value.trim(),
    prodi: document.getElementById("prodi").value,
    jenis: document.getElementById("jenis").value,
    telepon: document.getElementById("telepon").value.trim(),
    email: document.getElementById("email").value.trim(),
    alamat: document.getElementById("alamat").value.trim(),
  };

  if (nimLama) {
    // Mode edit: ganti data lama dengan data baru
    const index = daftarAnggota.findIndex(function (a) {
      return a.nim === nimLama;
    });
    daftarAnggota[index] = anggota;
    simpanData();
    resetForm();
    notif("Data " + aman(anggota.nama) + " berhasil diperbarui.");
    tampilHalaman("data-anggota");
  } else {
    // Mode tambah
    daftarAnggota.push(anggota);
    simpanData();
    resetForm();
    notif("Pendaftaran " + aman(anggota.nama) + " berhasil.");
    if (sudahLogin) {
      tampilHalaman("data-anggota");
    }
  }
});

function resetForm() {
  document.getElementById("formAnggota").reset();
  document
    .querySelectorAll("#formAnggota .form-control, #formAnggota .form-select")
    .forEach(function (el) {
      el.classList.remove("is-valid", "is-invalid");
    });
  nimLama = null;
  document.getElementById("judulForm").textContent =
    "Formulir Pendaftaran Anggota";
  document.getElementById("btnSimpan").innerHTML =
    '<i class="bi bi-send"></i> Daftar Sekarang';
}

document.getElementById("btnReset").addEventListener("click", resetForm);

// ---------- Tabel data anggota ----------
function tampilkanTabel() {
  const kata = document.getElementById("cari").value.toLowerCase();

  // Cari berdasarkan nama atau NIM/NIP
  const hasil = daftarAnggota.filter(function (a) {
    return (
      a.nama.toLowerCase().includes(kata) || a.nim.toLowerCase().includes(kata)
    );
  });

  let baris = "";
  hasil.forEach(function (a, i) {
    baris +=
      "<tr>" +
      "<td>" +
      (i + 1) +
      "</td>" +
      "<td>" +
      aman(a.nama) +
      "</td>" +
      "<td>" +
      a.nim +
      "</td>" +
      "<td>" +
      aman(a.prodi) +
      "</td>" +
      "<td>" +
      aman(a.jenis) +
      "</td>" +
      "<td>" +
      a.telepon +
      "</td>" +
      "<td>" +
      aman(a.email) +
      "</td>" +
      '<td class="text-center text-nowrap">' +
      '<button class="btn btn-info btn-sm btn-aksi text-white" title="Lihat" onclick="lihatDetail(\'' +
      a.nim +
      '\')"><i class="bi bi-eye"></i></button> ' +
      '<button class="btn btn-primary btn-sm btn-aksi" title="Edit" onclick="editAnggota(\'' +
      a.nim +
      '\')"><i class="bi bi-pencil"></i></button> ' +
      '<button class="btn btn-danger btn-sm btn-aksi" title="Hapus" onclick="hapusAnggota(\'' +
      a.nim +
      '\')"><i class="bi bi-trash"></i></button>' +
      "</td>" +
      "</tr>";
  });

  if (hasil.length === 0) {
    baris =
      '<tr><td colspan="8" class="text-center text-secondary py-4">Data tidak ditemukan.</td></tr>';
  }

  document.getElementById("isiTabel").innerHTML = baris;
  document.getElementById("infoJumlah").textContent =
    "Menampilkan " + hasil.length + " dari " + daftarAnggota.length + " data";
}

document.getElementById("cari").addEventListener("input", tampilkanTabel);

document.getElementById("btnTambah").addEventListener("click", function () {
  resetForm();
  tampilHalaman("pendaftaran");
});

// ---------- Lihat detail ----------
function lihatDetail(nim) {
  const a = daftarAnggota.find(function (x) {
    return x.nim === nim;
  });
  document.getElementById("isiDetail").innerHTML =
    '<dl class="row mb-0">' +
    '<dt class="col-sm-4">Nama</dt><dd class="col-sm-8">' +
    aman(a.nama) +
    "</dd>" +
    '<dt class="col-sm-4">NIM/NIP</dt><dd class="col-sm-8">' +
    a.nim +
    "</dd>" +
    '<dt class="col-sm-4">Program Studi</dt><dd class="col-sm-8">' +
    aman(a.prodi) +
    "</dd>" +
    '<dt class="col-sm-4">Jenis</dt><dd class="col-sm-8">' +
    aman(a.jenis) +
    "</dd>" +
    '<dt class="col-sm-4">Telepon</dt><dd class="col-sm-8">' +
    a.telepon +
    "</dd>" +
    '<dt class="col-sm-4">Email</dt><dd class="col-sm-8">' +
    aman(a.email) +
    "</dd>" +
    '<dt class="col-sm-4">Alamat</dt><dd class="col-sm-8">' +
    aman(a.alamat) +
    "</dd>" +
    "</dl>";
  new bootstrap.Modal(document.getElementById("modalDetail")).show();
}

// ---------- Edit ----------
function editAnggota(nim) {
  const a = daftarAnggota.find(function (x) {
    return x.nim === nim;
  });

  // Isi formulir dengan data anggota
  document.getElementById("nama").value = a.nama;
  document.getElementById("nim").value = a.nim;
  document.getElementById("prodi").value = a.prodi;
  document.getElementById("jenis").value = a.jenis;
  document.getElementById("telepon").value = a.telepon;
  document.getElementById("email").value = a.email;
  document.getElementById("alamat").value = a.alamat;

  nimLama = nim; // tandai bahwa ini mode edit
  document.getElementById("judulForm").textContent = "Edit Data Anggota";
  document.getElementById("btnSimpan").innerHTML =
    '<i class="bi bi-save"></i> Simpan Perubahan';
  tampilHalaman("pendaftaran");
}

// ---------- Hapus (dengan dialog konfirmasi) ----------
function hapusAnggota(nim) {
  const a = daftarAnggota.find(function (x) {
    return x.nim === nim;
  });
  nimYangDihapus = nim;
  document.getElementById("teksHapus").innerHTML =
    "Yakin ingin menghapus data <b>" +
    aman(a.nama) +
    "</b>? Data yang dihapus tidak bisa dikembalikan.";
  new bootstrap.Modal(document.getElementById("modalHapus")).show();
}

document.getElementById("btnYaHapus").addEventListener("click", function () {
  daftarAnggota = daftarAnggota.filter(function (a) {
    return a.nim !== nimYangDihapus;
  });
  simpanData();
  bootstrap.Modal.getInstance(document.getElementById("modalHapus")).hide();
  tampilkanTabel();
  notif("Data anggota berhasil dihapus.");
});

// ---------- Jalankan saat halaman pertama dibuka ----------
muatData();
tampilHalaman("beranda");
