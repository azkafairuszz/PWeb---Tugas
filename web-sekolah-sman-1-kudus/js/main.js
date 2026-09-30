const $ = (s) => document.querySelector(s),
  P = document.body.dataset.page,
  S = DATA.sekolah;
const NAV = [
  ["index.html", "Beranda", "beranda"],
  [
    "profil.html",
    "Profil",
    "profil",
    [
      ["#sejarah", "Sejarah"],
      ["#visimisi", "Visi & Misi"],
      ["#guru", "Guru & Karyawan"],
    ],
  ],
  ["berita.html", "Berita", "berita"],
  ["prestasi.html", "Prestasi", "prestasi"],
  ["kontak.html", "Hubungi Kami", "kontak"],
];
const tgl = (d) =>
  new Date(d).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
const pic = (n) => `assets/images/berita/${n}`;
const cardB = (b) =>
  `<a class="card" href="berita.html?s=${b.slug}"><img src="${pic(b.gambar)}" alt="${b.judul}" loading="lazy"><div><small>${tgl(b.tanggal)}</small><h3>${b.judul}</h3><p>${b.ringkasan}</p></div></a>`;
const cardP = (p) =>
  `<div class="card"><div><span class="badge">🏆 ${p.peringkat}</span><h3>${p.lomba}</h3><p>${p.peraih}</p><small>${p.info}</small></div></div>`;
const news = [...DATA.berita].sort((a, b) =>
    b.tanggal.localeCompare(a.tanggal),
  ),
  pres = [...DATA.prestasi].sort((a, b) => b.t.localeCompare(a.t));
const fill = (id, h) => {
  const e = $(id);
  if (e) e.innerHTML = h;
};
fill(
  "#hd",
  `<div class="w"><nav><a class="brand" href="index.html"><img src="assets/images/logo/logo-smasa-kudus.jpg" alt="Logo SMAN 1 Kudus"><span>${S.nama}</span></a><button id="bt" aria-label="Menu">☰</button><ul id="mn">${NAV.map((n) => `<li><a href="${n[0]}" class="${n[2] == P ? "on" : ""}">${n[1]}</a>${n[3] ? `<div class="dd">${n[3].map((s) => `<a href="${n[0]}${s[0]}">${s[1]}</a>`).join("")}</div>` : ""}</li>`).join("")}</ul></nav></div>`,
);
fill(
  "#ft",
  `<div class="w"><b>${S.nama}</b><p>${S.alamat}<br>Telp. ${S.telp}</p><p>© ${new Date().getFullYear()} ${S.nama}. Website ini dibuat untuk keperluan tugas kuliah.</p></div>`,
);
$("#bt").onclick = () => $("#mn").classList.toggle("open");
fill("#b-latest", news.slice(0, 3).map(cardB).join(""));
fill("#p-latest", pres.slice(0, 3).map(cardP).join(""));
fill("#p-list", pres.map(cardP).join(""));
const ini = (n) =>
  (n.split(/[ ,]+/).find((w) => !/\./.test(w) && w.length > 1) || n)[0];
fill(
  "#guru-list",
  ["Pimpinan", "Guru", "Staf Tata Usaha & Karyawan"]
    .map((k) => {
      const l = DATA.guru.filter((g) => g[2] == k);
      return `<h3 style="margin:26px 0 14px">${k} <small>(${l.length})</small></h3><div class="grid">${l.map((g) => `<div class="card"><div><div class="av">${ini(g[0])}</div><h3>${g[0]}</h3><small>${g[1]}</small></div></div>`).join("")}</div>`;
    })
    .join(""),
);
fill("#sejarah-t", DATA.sejarah.map((p) => `<p>${p}</p>`).join(""));
fill("#visi", DATA.visi);
fill("#misi", DATA.misi.map((m) => `<li>${m}</li>`).join(""));
const bl = $("#berita");
if (bl) {
  const b = DATA.berita.find(
    (x) => x.slug == new URLSearchParams(location.search).get("s"),
  );
  if (b) {
    document.title = b.judul + " — " + S.nama;
    bl.innerHTML = `<article class="art"><a class="back" href="berita.html">← Semua berita</a><small>${tgl(b.tanggal)}</small><h1>${b.judul}</h1><img src="${pic(b.gambar)}" alt="${b.judul}">${b.isi.map((p) => `<p>${p}</p>`).join("")}</article>`;
  } else
    bl.innerHTML = `<h2>Berita</h2><div class="grid">${news.map(cardB).join("")}</div>`;
}
const sl = document.querySelectorAll(".hero .s");
let i = 0;
if (sl.length > 1)
  setInterval(() => {
    sl[i].classList.remove("a");
    i = (i + 1) % sl.length;
    sl[i].classList.add("a");
  }, 5000);
