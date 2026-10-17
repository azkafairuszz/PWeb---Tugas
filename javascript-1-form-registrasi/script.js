// ==========================================================
// 1. DATA
//    Ganti isi data ini sesuai kebutuhan tugas.
// ==========================================================
const dataMahasiswa = [
  { nama: "Ahmad Fauzi", nim: "5025251001" },
  { nama: "Aisyah Putri", nim: "5025251002" },
  { nama: "Andi Prasetyo", nim: "5025251003" },
  { nama: "Bagas Saputra", nim: "5025251004" },
  { nama: "Budi Santoso", nim: "5025251005" },
  { nama: "Citra Lestari", nim: "5025251006" },
  { nama: "Dewi Anggraini", nim: "5025251007" },
  { nama: "Dimas Pratama", nim: "5025251008" },
  { nama: "Eka Wulandari", nim: "5025251009" },
  { nama: "Fajar Nugroho", nim: "5025251010" },
  { nama: "Galih Ramadhan", nim: "5025251011" },
  { nama: "Hana Safitri", nim: "5025251012" },
  { nama: "Indra Kurniawan", nim: "5025251013" },
  { nama: "Nuris Akbar", nim: "5025251014" },
  { nama: "Rizky Maulana", nim: "5025251015" },
  { nama: "Siti Nurhaliza", nim: "5025251016" },
];

// Mata kuliah beserta dosen pengampunya
const dataMatkul = {
  "Pemrograman Web": ["Dr. Hendra Wijaya", "Ir. Sari Rahayu, M.T."],
  "Basis Data": ["Prof. Agus Setiawan", "Dr. Maya Kusuma"],
  "Struktur Data": ["Dr. Rudi Hartono", "Dewi Lestari, M.Kom."],
  "Jaringan Komputer": ["Ir. Bambang Sutrisno, M.T.", "Dr. Lina Marlina"],
};

// ==========================================================
// 2. ELEMEN
// ==========================================================
const form = document.getElementById("formRegistrasi");
const inputNama = document.getElementById("nama");
const inputNim = document.getElementById("nim");
const selectMatkul = document.getElementById("matkul");
const selectDosen = document.getElementById("dosen");
const daftar = document.getElementById("daftarRekomendasi");

let indexAktif = -1; // item rekomendasi yang sedang disorot (keyboard)
let hasilFilter = []; // hasil rekomendasi saat ini

// ==========================================================
// 3. REKOMENDASI NAMA SAAT MENGETIK
// ==========================================================
function escapeHtml(teks) {
  return teks.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );
}

function tampilkanRekomendasi() {
  const kata = inputNama.value.trim().toLowerCase();
  indexAktif = -1;

  // Jika kosong, sembunyikan rekomendasi
  if (kata === "") {
    tutupRekomendasi();
    return;
  }

  // Cari nama yang DIAWALI huruf yang diketik
  // (ganti startsWith dengan includes jika ingin mencari di bagian mana pun)
  hasilFilter = dataMahasiswa.filter((m) =>
    m.nama.toLowerCase().startsWith(kata),
  );

  if (hasilFilter.length === 0) {
    daftar.innerHTML =
      '<li style="cursor:default;color:#6c757d">Tidak ada rekomendasi</li>';
    daftar.classList.add("show");
    inputNama.setAttribute("aria-expanded", "true");
    return;
  }

  daftar.innerHTML = hasilFilter
    .map((m, i) => {
      const nama = escapeHtml(m.nama);
      const tebal = nama.slice(0, kata.length); // huruf yang cocok
      const sisa = nama.slice(kata.length);
      return `<li role="option" data-index="${i}">
                <span><mark>${tebal}</mark>${sisa}</span>
                <span class="nim">${m.nim}</span>
              </li>`;
    })
    .join("");

  daftar.classList.add("show");
  inputNama.setAttribute("aria-expanded", "true");
}

function tutupRekomendasi() {
  daftar.classList.remove("show");
  daftar.innerHTML = "";
  hasilFilter = [];
  indexAktif = -1;
  inputNama.setAttribute("aria-expanded", "false");
}

function pilihRekomendasi(index) {
  const m = hasilFilter[index];
  if (!m) return;
  inputNama.value = m.nama;
  inputNim.value = m.nim; // NIM terisi otomatis
  tutupRekomendasi();
  selectMatkul.focus();
}

function sorotItem() {
  const items = daftar.querySelectorAll("li[data-index]");
  items.forEach((li, i) => li.classList.toggle("active", i === indexAktif));
  if (items[indexAktif]) items[indexAktif].scrollIntoView({ block: "nearest" });
}

inputNama.addEventListener("input", tampilkanRekomendasi);

// Navigasi keyboard: panah atas/bawah, Enter, Escape
inputNama.addEventListener("keydown", function (e) {
  if (!daftar.classList.contains("show") || hasilFilter.length === 0) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    indexAktif = (indexAktif + 1) % hasilFilter.length;
    sorotItem();
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    indexAktif = (indexAktif - 1 + hasilFilter.length) % hasilFilter.length;
    sorotItem();
  } else if (e.key === "Enter" && indexAktif >= 0) {
    e.preventDefault();
    pilihRekomendasi(indexAktif);
  } else if (e.key === "Escape") {
    tutupRekomendasi();
  }
});

// Klik pada item rekomendasi
daftar.addEventListener("mousedown", function (e) {
  const li = e.target.closest("li[data-index]");
  if (li) {
    e.preventDefault(); // cegah input kehilangan fokus sebelum klik terproses
    pilihRekomendasi(Number(li.dataset.index));
  }
});

// Tutup rekomendasi jika klik di luar
document.addEventListener("click", function (e) {
  if (!e.target.closest(".form-group")) tutupRekomendasi();
});
inputNama.addEventListener("blur", () => setTimeout(tutupRekomendasi, 120));

// ==========================================================
// 4. MATA KULIAH -> DOSEN
// ==========================================================
Object.keys(dataMatkul).forEach((mk) => {
  const opt = document.createElement("option");
  opt.value = mk;
  opt.textContent = mk;
  selectMatkul.appendChild(opt);
});

selectMatkul.addEventListener("change", function () {
  const dosenList = dataMatkul[this.value] || [];
  selectDosen.innerHTML = "";

  if (dosenList.length === 0) {
    selectDosen.innerHTML =
      '<option value="">Pilih mata kuliah terlebih dahulu</option>';
    selectDosen.disabled = true;
    return;
  }

  selectDosen.innerHTML = '<option value="">Pilih Dosen</option>';
  dosenList.forEach((d) => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    selectDosen.appendChild(opt);
  });
  selectDosen.disabled = false;
});

// ==========================================================
// 5. VALIDASI SAAT SUBMIT (alert seperti pada contoh gambar)
// ==========================================================
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = inputNama.value.trim();
  const nim = inputNim.value.trim();
  const matkul = selectMatkul.value;
  const dosen = selectDosen.value;

  if (nama === "") {
    alert("Nama Tidak Boleh Kosong");
    inputNama.focus();
    return;
  }
  if (!/^[A-Za-z .'-]+$/.test(nama)) {
    alert("Nama hanya boleh berisi huruf");
    inputNama.focus();
    return;
  }
  if (nim === "") {
    alert("NIM Tidak Boleh Kosong");
    inputNim.focus();
    return;
  }
  if (!/^\d{10}$/.test(nim)) {
    alert("NIM harus terdiri dari 10 digit angka");
    inputNim.focus();
    return;
  }
  if (matkul === "") {
    alert("Mata Kuliah Belum Dipilih");
    selectMatkul.focus();
    return;
  }
  if (dosen === "") {
    alert("Dosen Belum Dipilih");
    selectDosen.focus();
    return;
  }

  alert(
    "Registrasi Berhasil!\n\n" +
      "Nama        : " +
      nama +
      "\n" +
      "NIM         : " +
      nim +
      "\n" +
      "Mata Kuliah : " +
      matkul +
      "\n" +
      "Dosen       : " +
      dosen,
  );
});

// Reset: kembalikan dropdown dosen & tutup rekomendasi
document.getElementById("btnReset").addEventListener("click", function () {
  tutupRekomendasi();
  selectDosen.innerHTML =
    '<option value="">Pilih mata kuliah terlebih dahulu</option>';
  selectDosen.disabled = true;
});
