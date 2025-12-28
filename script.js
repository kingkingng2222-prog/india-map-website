let currentLang = "en";
let DATA = {};

document.addEventListener("DOMContentLoaded", () => {

  const details = document.getElementById("details");
  const langBtn = document.getElementById("langBtn");
  const svg = document.querySelector("#map svg");

  fetch("data.json")
    .then(r => r.json())
    .then(d => DATA = d);

  langBtn.onclick = () => {
    currentLang = currentLang === "en" ? "bn" : "en";
    alert("Language: " + currentLang.toUpperCase());
  };

  svg.addEventListener("click", (e) => {
    const path = e.target.closest("path");
    if (!path) return;

    const code = path.id;
    const state = DATA[code];
    if (!state) return;

    document.querySelectorAll("#map path").forEach(p => {
      p.style.fill = "#cfd8dc";
    });
    path.style.fill = "#90caf9";

    let html = `<h3>${code} – State Information</h3>`;
    for (let i = 1; i <= 16; i++) {
      html += `<p><b>${i}.</b> ${state.state["p"+i][currentLang]}</p>`;
    }
    details.innerHTML = html;
  });

});
