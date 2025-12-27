document.addEventListener("DOMContentLoaded", () => {

  fetch("data.json")
    .then(res => res.json())
    .then(data => {

      document.querySelectorAll("svg path").forEach(statePath => {

        statePath.addEventListener("click", () => {
          const code = statePath.id;
          const stateObj = data[code];

          if (!stateObj) {
            document.getElementById("details").innerHTML =
              "<p>No data available</p>";
            return;
          }

          // -------- STATE DETAILS ----------
          let html = `<h2>${code} – State Information</h2>`;
          const s = stateObj.state;

          html += `
            <p><b>1. General Introduction:</b> ${s.generalIntroduction}</p>
            <p><b>2. Capital and Major Cities:</b> ${s.capitalAndMajorCities}</p>
            <p><b>3. Geographical Location:</b> ${s.geographicalLocation}</p>
            <p><b>4. Area and Population:</b> ${s.areaAndPopulation}</p>
            <p><b>5. Languages:</b> ${s.languages}</p>
            <p><b>6. Historical Background:</b> ${s.historicalBackground}</p>
            <p><b>7. Culture and Heritage:</b> ${s.cultureAndHeritage}</p>
            <p><b>8. Festivals:</b> ${s.festivals}</p>
            <p><b>9. Economy:</b> ${s.economy}</p>
            <p><b>10. Agriculture:</b> ${s.agriculture}</p>
            <p><b>11. Industries:</b> ${s.industries}</p>
            <p><b>12. Rivers:</b> ${s.rivers}</p>
            <p><b>13. Natural Features:</b> ${s.naturalFeatures}</p>
            <p><b>14. Sundarbans:</b> ${s.sundarbans}</p>
            <p><b>15. Education:</b> ${s.education}</p>
            <p><b>16. Tourism:</b> ${s.tourism}</p>
          `;

          // -------- CITY LIST ----------
          html += `<h3>Click on a City</h3><ul>`;
          for (let city in stateObj.cities) {
            html += `<li style="cursor:pointer;color:blue"
                     onclick="showCity('${code}','${city}')">${city}</li>`;
          }
          html += "</ul>";

          document.getElementById("details").innerHTML = html;
        });

        statePath.addEventListener("mouseover", () => {
          statePath.style.fill = "#90caf9";
          statePath.style.cursor = "pointer";
        });

        statePath.addEventListener("mouseout", () => {
          statePath.style.fill = "#cfd8dc";
        });

      });

      // -------- CITY DETAILS FUNCTION ----------
      window.showCity = function(code, cityName) {
        const city = data[code].cities[cityName];

        let html = `<h2>${cityName} – City Information</h2>`;

        html += `
          <p><b>1. General Introduction:</b> ${city.generalIntroduction}</p>
          <p><b>2. Historical Background:</b> ${city.historicalBackground}</p>
          <p><b>3. Geographical Location:</b> ${city.geographicalLocation}</p>
          <p><b>4. Area and Population:</b> ${city.areaAndPopulation}</p>
          <p><b>5. Administrative Status:</b> ${city.administrativeStatus}</p>
          <p><b>6. Language:</b> ${city.language}</p>
          <p><b>7. Culture and Heritage:</b> ${city.cultureAndHeritage}</p>
          <p><b>8. Festivals:</b> ${city.festivals}</p>
          <p><b>9. Economy:</b> ${city.economy}</p>
          <p><b>10. Education:</b> ${city.education}</p>
          <p><b>11. Transportation:</b> ${city.transportation}</p>
          <p><b>12. Architecture and Landmarks:</b> ${city.architectureAndLandmarks}</p>
          <p><b>13. Sports:</b> ${city.sports}</p>
          <p><b>14. Food Culture:</b> ${city.foodCulture}</p>
          <p><b>15. Tourism:</b> ${city.tourism}</p>
          <p><b>16. Importance of City Name:</b> ${city.importanceOfCityName}</p>
        `;

        document.getElementById("details").innerHTML = html;
      };

    });

});
