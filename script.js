/* =========================
   GLOBAL VARIABLES
========================= */
let currentLang = "en";   // default language
let globalData = {};      // full data.json store

/* =========================
   LANGUAGE TOGGLE (GLOBAL)
========================= */
// ===== LANGUAGE TOGGLE (SAFE VERSION) =====
let currentLang = "en";
let globalData = {};

document.addEventListener("DOMContentLoaded", function () {

  // BUTTON BINDING (THIS WAS MISSING)
  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.addEventListener("click", toggleLang);
  }

  const details = document.getElementById("details");

  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      globalData = data;
      attachMapEvents();
    });
});

// MUST BE GLOBAL
function toggleLang() {
  currentLang = currentLang === "en" ? "bn" : "en";
  alert("Language switched to: " + currentLang.toUpperCase());
}


/* =========================
   MAIN LOAD
========================= */
document.addEventListener("DOMContentLoaded", function () {

  const details = document.getElementById("details");
  if (!details) {
    console.error("details div not found");
    return;
  }

  // Load data.json
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      globalData = data;
      attachMapEvents();
    })
    .catch(err => {
      console.error("Error loading data.json", err);
      details.innerHTML = "<p>Error loading data</p>";
    });
});

/* =========================
   MAP CLICK EVENTS
========================= */
function attachMapEvents() {

  const details = document.getElementById("details");
  const states = document.querySelectorAll("#map svg path");

  states.forEach(state => {

    /* ---- STATE CLICK ---- */
    state.addEventListener("click", function () {
      const code = this.id;
      const obj = globalData[code];

      if (!obj || !obj.state) {
        details.innerHTML = "<p>No state data found</p>";
        return;
      }

      const s = obj.state;

      let html = `
        <h2>State Information</h2>

        <p><b>1. General Introduction:</b> ${s.generalIntroduction?.[currentLang] || ""}</p>
        <p><b>2. Capital and Major Cities:</b> ${s.capitalAndMajorCities?.[currentLang] || ""}</p>
        <p><b>3. Geographical Location:</b> ${s.geographicalLocation?.[currentLang] || ""}</p>
        <p><b>4. Area and Population:</b> ${s.areaAndPopulation?.[currentLang] || ""}</p>
        <p><b>5. Languages:</b> ${s.languages?.[currentLang] || ""}</p>
        <p><b>6. Historical Background:</b> ${s.historicalBackground?.[currentLang] || ""}</p>
        <p><b>7. Culture and Heritage:</b> ${s.cultureAndHeritage?.[currentLang] || ""}</p>
        <p><b>8. Festivals:</b> ${s.festivals?.[currentLang] || ""}</p>
        <p><b>9. Economy:</b> ${s.economy?.[currentLang] || ""}</p>
        <p><b>10. Agriculture:</b> ${s.agriculture?.[currentLang] || ""}</p>
        <p><b>11. Industries:</b> ${s.industries?.[currentLang] || ""}</p>
        <p><b>12. Rivers:</b> ${s.rivers?.[currentLang] || ""}</p>
        <p><b>13. Natural Features:</b> ${s.naturalFeatures?.[currentLang] || ""}</p>
        <p><b>14. Sundarbans:</b> ${s.sundarbans?.[currentLang] || ""}</p>
        <p><b>15. Education:</b> ${s.education?.[currentLang] || ""}</p>
        <p><b>16. Tourism:</b> ${s.tourism?.[currentLang] || ""}</p>
      `;

      /* ---- CITY LIST ---- */
      if (obj.cities && Object.keys(obj.cities).length > 0) {
        html += `<h3>Cities</h3><ul>`;
        for (let city in obj.cities) {
          html += `
            <li style="cursor:pointer;color:blue"
                onclick="showCity('${code}','${city}')">
              ${city}
            </li>`;
        }
        html += `</ul>`;
      } else {
        html += `<p>No city added yet</p>`;
      }

      details.innerHTML = html;
    });

    /* ---- HOVER EFFECT ---- */
    state.addEventListener("mouseenter", () => {
      state.style.fill = "#90caf9";
      state.style.cursor = "pointer";
    });

    state.addEventListener("mouseleave", () => {
      state.style.fill = "#cfd8dc";
    });

  });
}

/* =========================
   CITY DETAILS (GLOBAL)
========================= */
function showCity(stateCode, cityName) {

  const details = document.getElementById("details");
  const city = globalData[stateCode]?.cities?.[cityName];

  if (!city) {
    details.innerHTML = "<p>No city data found</p>";
    return;
  }

  let html = `
    <h2>${cityName} – City Information</h2>

    <p><b>1. General Introduction:</b> ${city.generalIntroduction?.[currentLang] || ""}</p>
    <p><b>2. Historical Background:</b> ${city.historicalBackground?.[currentLang] || ""}</p>
    <p><b>3. Geographical Location:</b> ${city.geographicalLocation?.[currentLang] || ""}</p>
    <p><b>4. Area and Population:</b> ${city.areaAndPopulation?.[currentLang] || ""}</p>
    <p><b>5. Administrative Status:</b> ${city.administrativeStatus?.[currentLang] || ""}</p>
    <p><b>6. Language:</b> ${city.language?.[currentLang] || ""}</p>
    <p><b>7. Culture and Heritage:</b> ${city.cultureAndHeritage?.[currentLang] || ""}</p>
    <p><b>8. Festivals:</b> ${city.festivals?.[currentLang] || ""}</p>
    <p><b>9. Economy:</b> ${city.economy?.[currentLang] || ""}</p>
    <p><b>10. Education:</b> ${city.education?.[currentLang] || ""}</p>
    <p><b>11. Transportation:</b> ${city.transportation?.[currentLang] || ""}</p>
    <p><b>12. Architecture and Landmarks:</b> ${city.architectureAndLandmarks?.[currentLang] || ""}</p>
    <p><b>13. Sports:</b> ${city.sports?.[currentLang] || ""}</p>
    <p><b>14. Food Culture:</b> ${city.foodCulture?.[currentLang] || ""}</p>
    <p><b>15. Tourism:</b> ${city.tourism?.[currentLang] || ""}</p>
    <p><b>16. Importance of City Name:</b> ${city.importanceOfCityName?.[currentLang] || ""}</p>
  `;

  details.innerHTML = html;
}
