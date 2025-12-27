document.addEventListener("DOMContentLoaded", function () {

  const details = document.getElementById("details");
  if (!details) {
    console.error("details div not found");
    return;
  }

  fetch("data.json")
    .then(response => response.json())
    .then(data => {

      const states = document.querySelectorAll("#map svg path");

      states.forEach(state => {

        state.addEventListener("click", function () {
          const code = this.id;
          const obj = data[code];

          if (!obj || !obj.state) {
            details.innerHTML = "<p>No state data found</p>";
            return;
          }

          const s = obj.state;

          let html = `<h2>State Information</h2>
            <p><b>1. General Introduction:</b> ${s.generalIntroduction || ""}</p>
            <p><b>2. Capital and Major Cities:</b> ${s.capitalAndMajorCities || ""}</p>
            <p><b>3. Geographical Location:</b> ${s.geographicalLocation || ""}</p>
            <p><b>4. Area and Population:</b> ${s.areaAndPopulation || ""}</p>
            <p><b>5. Languages:</b> ${s.languages || ""}</p>
            <p><b>6. Historical Background:</b> ${s.historicalBackground || ""}</p>
            <p><b>7. Culture and Heritage:</b> ${s.cultureAndHeritage || ""}</p>
            <p><b>8. Festivals:</b> ${s.festivals || ""}</p>
            <p><b>9. Economy:</b> ${s.economy || ""}</p>
            <p><b>10. Agriculture:</b> ${s.agriculture || ""}</p>
            <p><b>11. Industries:</b> ${s.industries || ""}</p>
            <p><b>12. Rivers:</b> ${s.rivers || ""}</p>
            <p><b>13. Natural Features:</b> ${s.naturalFeatures || ""}</p>
            <p><b>14. Sundarbans:</b> ${s.sundarbans || ""}</p>
            <p><b>15. Education:</b> ${s.education || ""}</p>
            <p><b>16. Tourism:</b> ${s.tourism || ""}</p>`;

          if (obj.cities && Object.keys(obj.cities).length > 0) {
            html += "<h3>Cities</h3><ul>";
            Object.keys(obj.cities).forEach(city => {
              html += `<li style="cursor:pointer;color:blue"
                        onclick="showCity('${code}','${city}')">${city}</li>`;
            });
            html += "</ul>";
          }

          details.innerHTML = html;
        });

        // hover effect
        state.addEventListener("mouseenter", () => {
          state.style.fill = "#90caf9";
        });
        state.addEventListener("mouseleave", () => {
          state.style.fill = "#cfd8dc";
        });

      });

      // CITY FUNCTION (global)
      window.showCity = function (stateCode, cityName) {
        const city = data[stateCode].cities[cityName];
        if (!city) {
          details.innerHTML = "<p>No city data found</p>";
          return;
        }

        let html = `<h2>${cityName} – City Information</h2>
          <p><b>1. General Introduction:</b> ${city.generalIntroduction || ""}</p>
          <p><b>2. Historical Background:</b> ${city.historicalBackground || ""}</p>
          <p><b>3. Geographical Location:</b> ${city.geographicalLocation || ""}</p>
          <p><b>4. Area and Population:</b> ${city.areaAndPopulation || ""}</p>
          <p><b>5. Administrative Status:</b> ${city.administrativeStatus || ""}</p>
          <p><b>6. Language:</b> ${city.language || ""}</p>
          <p><b>7. Culture and Heritage:</b> ${city.cultureAndHeritage || ""}</p>
          <p><b>8. Festivals:</b> ${city.festivals || ""}</p>
          <p><b>9. Economy:</b> ${city.economy || ""}</p>
          <p><b>10. Education:</b> ${city.education || ""}</p>
          <p><b>11. Transportation:</b> ${city.transportation || ""}</p>
          <p><b>12. Architecture and Landmarks:</b> ${city.architectureAndLandmarks || ""}</p>
          <p><b>13. Sports:</b> ${city.sports || ""}</p>
          <p><b>14. Food Culture:</b> ${city.foodCulture || ""}</p>
          <p><b>15. Tourism:</b> ${city.tourism || ""}</p>
          <p><b>16. Importance of City Name:</b> ${city.importanceOfCityName || ""}</p>`;

        details.innerHTML = html;
      };

    })
    .catch(err => {
      console.error("JSON load error:", err);
      details.innerHTML = "<p>Error loading data</p>";
    });

});
