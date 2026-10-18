var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function $(id) {
  return document.getElementById(id);
}
function setErr(id, text) {
  var f = $(id),
    m = $("e-" + id);
  m.textContent = text || "";
  m.className = "msg";
  if (f.type !== "checkbox") {
    f.classList.toggle("invalid", !!text);
  }
  return !text;
}
var rules = {
  nama: function (v) {
    return v.trim().length < 3 ? "Nama minimal 3 karakter." : "";
  },
  alamat: function (v) {
    return !v.trim() ? "Alamat wajib diisi." : "";
  },
  email: function (v) {
    return !emailRe.test(v.trim())
      ? "Masukkan email yang valid, misalnya nama@domain.com."
      : "";
  },
  pass: function (v) {
    return v.length < 8
      ? "Password minimal 8 karakter."
      : !/\d/.test(v) || !/[A-Za-z]/.test(v)
        ? "Password harus berisi huruf dan angka."
        : "";
  },
  course: function (v) {
    return !v ? "Pilih salah satu course." : "";
  },
  college: function (v) {
    return !v.trim() ? "Nama kampus wajib diisi." : "";
  },
};
Object.keys(rules).forEach(function (id) {
  $(id).addEventListener("blur", function () {
    setErr(id, rules[id]($(id).value));
  });
  $(id).addEventListener("input", function () {
    if ($(id).classList.contains("invalid")) setErr(id, rules[id]($(id).value));
  });
});
$("reg").addEventListener("submit", function (e) {
  e.preventDefault();
  var ok = true,
    first = null;
  Object.keys(rules).forEach(function (id) {
    var good = setErr(id, rules[id]($(id).value));
    if (!good && !first) first = id;
    ok = ok && good;
  });
  var agreed = $("agree").checked;
  $("e-agree").textContent = agreed
    ? ""
    : "Centang persetujuan untuk melanjutkan.";
  if (!agreed) {
    ok = false;
    if (!first) first = "agree";
  }
  var h = $("hasil");
  if (ok) {
    h.style.display = "block";
    h.textContent =
      "Pendaftaran berhasil dikirim. Terima kasih, " +
      $("nama").value.trim() +
      "!";
  } else {
    h.style.display = "none";
    $(first).focus();
  }
});
$("reset").addEventListener("click", function () {
  setTimeout(function () {
    Object.keys(rules).forEach(function (id) {
      setErr(id, "");
    });
    $("e-agree").textContent = "";
    $("hasil").style.display = "none";
  }, 0);
});
$("mail").addEventListener("submit", function (e) {
  e.preventDefault();
  var v = $("em").value.trim(),
    m = $("e-em"),
    f = $("em");
  if (!v) {
    m.className = "msg";
    m.textContent = "Email wajib diisi.";
    f.classList.add("invalid");
  } else if (emailRe.test(v)) {
    m.className = "msg ok";
    m.textContent = "Email valid.";
    f.classList.remove("invalid");
  } else {
    m.className = "msg";
    m.textContent = "Format email tidak valid.";
    f.classList.add("invalid");
  }
});
