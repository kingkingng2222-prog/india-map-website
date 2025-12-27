alert("SCRIPT LOADED");

let currentLang = "en";
let DATA = {};

document.addEventListener("DOMContentLoaded", function () {

  const details = document.getElementById("details");
  const langBtn = document.getElementById("langBtn");

  fetch("data.json")
    .then(r => r.json())
    .then(d => DATA = d);

  langBtn.onclick = () => {
    currentLang = currentLang === "en" ? "bn" : "en";
    alert("Language: " + currentLang.toUpperCase());
  };

  document.querySelector("svg").onclick = function (e) {
    const path = e.target.closest("path");
    if (!path) return;

    const code = path.id;
    const state = DATA[code];
    if (!state) return;

    let html = `<h3>State Information</h3>`;
    for (let i = 1; i <= 16; i++) {
      html += `<p><b>${i}.</b> ${state.state["p"+i][currentLang]}</p>`;
    }

    html += `<h4>Cities</h4><ul>`;
    for (let city in state.cities) {
      html += `<li style="cursor:pointer;color:blue"
               onclick="showCity('${code}','${city}')">${city}</li>`;
    }
    html += `</ul>`;

    details.innerHTML = html;
  };

  window.showCity = function (code, city) {
    const c = DATA[code].cities[city];
    let html = `<h3>${city} – City Information</h3>`;
    for (let i = 1; i <= 16; i++) {
      html += `<p><b>${i}.</b> ${c["p"+i][currentLang]}</p>`;
    }
    details.innerHTML = html;
  };
});
