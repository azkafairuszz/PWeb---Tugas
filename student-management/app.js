// Tahap lanjutan: interaksi dasar (Tambah, Hapus, Cari).
// CRUD penuh dengan Fetch API bisa dikembangkan setelah ini.
const form = document.getElementById("studentForm");
const tbody = document.getElementById("tbody");
const search = document.getElementById("search");

function renumber() {
  [...tbody.rows].forEach((row, i) => (row.cells[0].textContent = i + 1));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const row = tbody.insertRow();
  row.innerHTML = `
    <td></td>
    <td>${nim.value}</td><td>${nama.value}</td>
    <td>${jurusan.value}</td><td>${email.value}</td>
    <td><div class="actions">
      <button class="action edit">✎</button>
      <button class="action delete">🗑</button>
    </div></td>`;
  renumber();
  form.reset();
});

document
  .getElementById("btnBatal")
  .addEventListener("click", () => form.reset());

tbody.addEventListener("click", (e) => {
  const del = e.target.closest(".delete");
  if (del && confirm("Hapus data ini?")) {
    del.closest("tr").remove();
    renumber();
  }
});

search.addEventListener("input", () => {
  const q = search.value.toLowerCase();
  [...tbody.rows].forEach((row) => {
    row.style.display = row.textContent.toLowerCase().includes(q) ? "" : "none";
  });
});
