document.addEventListener("DOMContentLoaded", () => {

  fetch("data.json")
    .then(res => res.json())
    .then(data => {

      // ---------- STATE CLICK ----------
      document.querySelectorAll("svg path").forEach(statePath => {

        statePath.addEventListener("click", () => {
          const code = statePath.id;
          const obj = data[code];

          if (!obj || !obj.state) {
            details.innerHTML = "<p>No state data found</p>";
            return;
          }

          const s = obj.state;
          let html = `<h2>State Information</h2>`;

          html += `
            <p><b>1. General Introduction:</b> ${s.generalIntroduction || ""}</p>
            <p><b>2. Capital and Major Cities:</b> ${s.capitalAndMajorCities || ""}</p>
            <p><b>3. Geographical Location:</b> ${s.geographicalLocation || ""}</p>
            <p><b>4. Area and Population:</b> ${s.areaAndPopulation || ""}</p>
            <p><b>5. Languages:</b> ${s.languages || ""}</p>
            <p><b>6. Historical Backg
