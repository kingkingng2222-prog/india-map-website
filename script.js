let currentLang = "en";
let DATA = {};

document.addEventListener("DOMContentLoaded", () => {

  const details = document.getElementById("details");
  const langBtn = document.getElementById("langBtn");
  const svg = document.querySelector("#map svg");

  // Load data
  fetch("data.json")
    .then(res => res.json())
    .then(json => {
      DATA = json;
      console.log("Data loaded", DATA);
    });

  // Language toggle
  if (langBtn) {
    langBtn.onclick = () => {
      currentLang = currentLang === "en" ? "bn" : "en";
      alert("Language: " + currentLang.toUpperCase());
    };
  }

  // MAP CLICK (event delegation – works for ALL paths)
  svg.addEventListener("click", (e) => {

    const path = e.target.closest("path");
    if (!path) return;

    const code = path.id;
    const state = DATA[code];

    if (!state) {
      details.innerHTML = `<p>No data for ${code}</p>`;
      return;
    }

    // Highlight selected state
    document.querySelectorAll("#map path").forEach(p => {
      p.style.fill = "#cfd8dc";
    });
    path.style.fill = "#90caf9";

    // Show 16 state points
    let html = `<h3>State Information (${code})</h3>`;
    for (let i = 1; i <= 16; i++) {
      html += `<p><b>${i}.</b> ${state.state["p" + i][currentLang]}</p>`;
    }

    // City list
    html += `<h4>Cities</h4><ul>`;
    for (let city in state.cities) {
      html += `
        <li style="cursor:pointer;color:#0b5ed7"
            onclick="showCity('${code}','${city}')">
          ${city}
        </li>`;
    }
    html += `</ul>`;

    details.innerHTML = html;
  });

});

// City function (GLOBAL – must be outside)
function showCity(code, city) {

  const details = document.getElementById("details");
  const cityData = DATA[code].cities[city];

  let html = `<h3>${city} – City Information</h3>`;
  for (let i = 1; i <= 16; i++) {
    html += `<p><b>${i}.</b> ${cityData["p" + i][currentLang]}</p>`;
  }

  details.innerHTML = html;
}
