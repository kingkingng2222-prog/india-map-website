alert("SCRIPT LOADED");

let currentLang = "en";
let DATA = {};

document.addEventListener("DOMContentLoaded", function () {

  const details = document.getElementById("details");
  const langBtn = document.getElementById("langBtn");

  fetch("data.json")
    .then(res => res.json())
    .then(json => DATA = json);

  langBtn.onclick = function () {
    currentLang = currentLang === "en" ? "bn" : "en";
    alert("Language: " + currentLang.toUpperCase());
  };

  document.querySelector("svg").onclick = function (e) {
    const path = e.target.closest("path");
    if (!path) return;

    const code = path.id;
    const state = DATA[code];
    if (!state) return;

    let html = `
      <h3>State Information</h3>
      <p>${state.state.intro[currentLang]}</p>
      <h4>Cities</h4>
      <ul>
    `;

    for (let city in state.cities) {
      html += `<li onclick="showCity('${code}','${city}')"
               style="color:blue;cursor:pointer">${city}</li>`;
    }

    html += "</ul>";
    details.innerHTML = html;
  };
});

function showCity(code, city) {
  const c = DATA[code].cities[city];
  details.innerHTML = `
    <h3>${city}</h3>
    <p>${c.intro[currentLang]}</p>
  `;
}
