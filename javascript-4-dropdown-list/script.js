// Data produk: setiap jenis punya daftar merk sendiri
const dataProduk = {
  Desktop: ["Dell", "HP", "Lenovo", "ASUS", "Acer"],
  Laptop: ["ASUS", "Acer", "Lenovo", "HP", "MacBook"],
  Smartphone: ["Samsung", "Xiaomi", "OPPO", "vivo", "iPhone"],
};

const selectJenis = document.getElementById("jenis");
const selectMerk = document.getElementById("merk");
const hint = document.getElementById("hint");
const form = document.getElementById("form-produk");
const hasil = document.getElementById("hasil");
const hasilTeks = document.getElementById("hasil-teks");
const btnReset = document.getElementById("btn-reset");

// Isi dropdown jenis produk dari data
function isiJenis() {
  Object.keys(dataProduk).forEach(function (jenis) {
    const opt = document.createElement("option");
    opt.value = jenis;
    opt.textContent = jenis;
    selectJenis.appendChild(opt);
  });
}

// Reset dropdown merk ke kondisi awal
function resetMerk() {
  selectMerk.innerHTML = '<option value="">Pilih Merk</option>';
  selectMerk.disabled = true;
  hint.textContent = "Pilih jenis produk terlebih dahulu.";
}

// Isi dropdown merk sesuai jenis yang dipilih
function isiMerk(jenis) {
  resetMerk();
  if (!jenis) return;

  dataProduk[jenis].forEach(function (merk) {
    const opt = document.createElement("option");
    opt.value = merk;
    opt.textContent = merk;
    selectMerk.appendChild(opt);
  });

  selectMerk.disabled = false;
  hint.textContent =
    dataProduk[jenis].length + " merk tersedia untuk " + jenis + ".";
}

selectJenis.addEventListener("change", function () {
  hasil.hidden = true;
  isiMerk(selectJenis.value);
});

selectMerk.addEventListener("change", function () {
  hasil.hidden = true;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!selectJenis.value) {
    hint.textContent = "Silakan pilih jenis produk dulu.";
    selectJenis.focus();
    return;
  }
  if (!selectMerk.value) {
    hint.textContent = "Silakan pilih merk dulu.";
    selectMerk.focus();
    return;
  }

  hasilTeks.textContent = selectJenis.value + " - " + selectMerk.value;
  hasil.hidden = false;
});

btnReset.addEventListener("click", function () {
  form.reset();
  resetMerk();
  hasil.hidden = true;
  selectJenis.focus();
});

isiJenis();
