// ==========================================================
// PENCARIAN KODE POS INDONESIA
// Alur: Provinsi -> Kota/Kabupaten -> Kecamatan -> hasil
//
// Data dipecah per provinsi (folder data/) dan baru dimuat
// ketika provinsi dipilih, supaya halaman tetap ringan.
// Format data satu provinsi:
//   { n: "Nama Provinsi",
//     k: [ { n: "Kota Surabaya",
//            kc: [ { n: "Genteng",
//                    d: [ ["Embong Kaliasin", "60271", 1], ... ] } ] } ] }
// Keterangan d: [nama kelurahan/desa, kode pos, 1 = kelurahan / 0 = desa]
// ==========================================================

// ---------- Elemen ----------
const form = document.getElementById("formCari");
const selProvinsi = document.getElementById("provinsi");
const selKab = document.getElementById("kabupaten");
const selKec = document.getElementById("kecamatan");
const pesanError = document.getElementById("pesanError");
const btnReset = document.getElementById("btnReset");

const boxHasil = document.getElementById("hasil");
const elRingkasan = document.getElementById("ringkasan");
const elInfo = document.getElementById("infoDaerah");
const elDaftar = document.getElementById("daftarKodePos");

let dataProvinsi = null; // data provinsi yang sedang aktif
let tokenMuat = 0; // penanda agar pilihan lama tidak menimpa pilihan baru

// ---------- Fungsi bantu ----------
function isiSelect(select, daftar, placeholder) {
  select.innerHTML = "";
  const opsi = document.createElement("option");
  opsi.value = "";
  opsi.textContent = placeholder;
  select.appendChild(opsi);

  daftar.forEach(function (item) {
    const o = document.createElement("option");
    o.value = item.value;
    o.textContent = item.label;
    select.appendChild(o);
  });
}

function resetSelect(select, teks) {
  isiSelect(select, [], teks);
  select.disabled = true;
}

function tampilkanError(teks) {
  pesanError.textContent = teks;
  pesanError.hidden = false;
}

function sembunyikanError() {
  pesanError.hidden = true;
  pesanError.textContent = "";
}

function sembunyikanHasil() {
  boxHasil.hidden = true;
  elDaftar.innerHTML = "";
  elInfo.innerHTML = "";
}

// Memuat file data provinsi lewat tag <script> (aman dibuka langsung dari file://)
function muatDataProvinsi(id) {
  return new Promise(function (resolve, reject) {
    if (window.KODEPOS && window.KODEPOS[id]) {
      resolve(window.KODEPOS[id]);
      return;
    }
    const s = document.createElement("script");
    s.src = "data/prov-" + id + ".js";
    s.onload = function () {
      resolve(window.KODEPOS[id]);
    };
    s.onerror = function () {
      reject(new Error("Gagal memuat data provinsi"));
    };
    document.head.appendChild(s);
  });
}

// ---------- 1. Isi dropdown provinsi ----------
isiSelect(
  selProvinsi,
  window.PROVINSI.map(function (p) {
    return { value: p[0], label: p[1] };
  }),
  "Pilih Provinsi",
);

// ---------- 2. Provinsi dipilih -> isi Kota/Kabupaten ----------
selProvinsi.addEventListener("change", function () {
  sembunyikanError();
  sembunyikanHasil();
  dataProvinsi = null;
  resetSelect(selKec, "Pilih kota atau kabupaten terlebih dahulu");

  const id = selProvinsi.value;
  if (id === "") {
    resetSelect(selKab, "Pilih provinsi terlebih dahulu");
    return;
  }

  const token = ++tokenMuat;
  resetSelect(selKab, "Memuat data...");

  muatDataProvinsi(id)
    .then(function (data) {
      if (token !== tokenMuat) return; // pengguna sudah memilih provinsi lain
      dataProvinsi = data;
      isiSelect(
        selKab,
        data.k.map(function (kab, i) {
          return { value: String(i), label: kab.n };
        }),
        "Pilih Kota atau Kabupaten",
      );
      selKab.disabled = false;
    })
    .catch(function () {
      if (token !== tokenMuat) return;
      resetSelect(selKab, "Data gagal dimuat");
      tampilkanError(
        "Data provinsi gagal dimuat. Pastikan folder data/ berada di samping index.html.",
      );
    });
});

// ---------- 3. Kota/Kabupaten dipilih -> isi Kecamatan ----------
selKab.addEventListener("change", function () {
  sembunyikanError();
  sembunyikanHasil();

  if (selKab.value === "" || !dataProvinsi) {
    resetSelect(selKec, "Pilih kota atau kabupaten terlebih dahulu");
    return;
  }

  const kab = dataProvinsi.k[Number(selKab.value)];
  isiSelect(
    selKec,
    kab.kc.map(function (kec, i) {
      return { value: String(i), label: kec.n };
    }),
    "Pilih Kecamatan",
  );
  selKec.disabled = false;
});

selKec.addEventListener("change", function () {
  sembunyikanError();
  sembunyikanHasil();
});

// ---------- 4. Tombol Cari -> validasi lalu tampilkan hasil ----------
form.addEventListener("submit", function (e) {
  e.preventDefault();
  sembunyikanError();

  if (selProvinsi.value === "") {
    tampilkanError("Provinsi belum dipilih.");
    selProvinsi.focus();
    return;
  }
  if (selKab.value === "") {
    tampilkanError("Kota atau Kabupaten belum dipilih.");
    selKab.focus();
    return;
  }
  if (selKec.value === "") {
    tampilkanError("Kecamatan belum dipilih.");
    selKec.focus();
    return;
  }

  const kab = dataProvinsi.k[Number(selKab.value)];
  const kec = kab.kc[Number(selKec.value)];
  tampilkanHasil(dataProvinsi.n, kab.n, kec);
});

function tampilkanHasil(namaProvinsi, namaKab, kec) {
  // Kelompokkan kelurahan/desa berdasarkan kode pos
  const kelompok = {};
  let jumlahKelurahan = 0;
  let jumlahDesa = 0;

  kec.d.forEach(function (item) {
    const nama = item[0],
      kodePos = item[1],
      isKelurahan = item[2] === 1;
    if (!kelompok[kodePos]) kelompok[kodePos] = [];
    kelompok[kodePos].push({ nama: nama, kelurahan: isKelurahan });
    if (isKelurahan) jumlahKelurahan++;
    else jumlahDesa++;
  });

  const daftarKodePos = Object.keys(kelompok).sort();

  // Kalimat ringkasan
  elRingkasan.textContent =
    "Pencarian kode pos untuk Kecamatan " +
    kec.n +
    ", " +
    namaKab +
    ", " +
    namaProvinsi +
    " menemukan " +
    daftarKodePos.length +
    " kode pos untuk " +
    kec.d.length +
    " kelurahan/desa.";

  // Informasi daerah
  const rincian = [];
  if (jumlahKelurahan > 0) rincian.push(jumlahKelurahan + " kelurahan");
  if (jumlahDesa > 0) rincian.push(jumlahDesa + " desa");

  const info = [
    ["Provinsi", namaProvinsi],
    ["Kota/Kabupaten", namaKab],
    ["Kecamatan", kec.n],
    ["Jumlah wilayah", rincian.join(", ")],
    ["Kode pos", daftarKodePos.join(", ")],
  ];

  elInfo.innerHTML = "";
  info.forEach(function (baris) {
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = baris[0];
    dd.textContent = baris[1];
    elInfo.appendChild(dt);
    elInfo.appendChild(dd);
  });

  // Satu kartu hijau untuk setiap kode pos
  elDaftar.innerHTML = "";
  daftarKodePos.forEach(function (kodePos) {
    const kartu = document.createElement("div");
    kartu.className = "kartu-kodepos";

    const judul = document.createElement("div");
    judul.className = "judul";
    judul.textContent = "Kode Pos " + kodePos;

    const isi = document.createElement("div");
    isi.className = "isi";

    const p = document.createElement("p");
    p.textContent = "Kode pos " + kodePos + " untuk daerah:";

    const ul = document.createElement("ul");
    kelompok[kodePos].forEach(function (w) {
      const li = document.createElement("li");
      const jenis = document.createElement("span");
      jenis.className = "jenis";
      jenis.textContent = w.kelurahan ? "Kelurahan " : "Desa ";
      li.appendChild(jenis);
      li.appendChild(document.createTextNode(w.nama));
      ul.appendChild(li);
    });

    isi.appendChild(p);
    isi.appendChild(ul);
    kartu.appendChild(judul);
    kartu.appendChild(isi);
    elDaftar.appendChild(kartu);
  });

  boxHasil.hidden = false;
  boxHasil.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ---------- 5. Reset ----------
btnReset.addEventListener("click", function () {
  tokenMuat++;
  dataProvinsi = null;
  sembunyikanError();
  sembunyikanHasil();
  resetSelect(selKab, "Pilih provinsi terlebih dahulu");
  resetSelect(selKec, "Pilih kota atau kabupaten terlebih dahulu");
});
