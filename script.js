document.addEventListener("DOMContentLoaded", () => {

  fetch("data.json")
    .then(response => response.json())
    .then(stateData => {

      document.querySelectorAll("svg path").forEach(state => {

        state.addEventListener("click", () => {
          const code = state.id;
          const info = stateData[code];

          if (!info) {
            document.getElementById("details").innerHTML =
              "<p>No data available</p>";
            return;
          }

          let html = "";
          html += "<h2>" + info.name + "</h2>";
          html += "<p><b>Capital:</b> " + info.capital + "</p>";
          html += "<h3>Cities</h3>";
          html += "<ul>";

          info.cities.forEach(city => {
            html += "<li><b>" + city.name + "</b> – " + city.famous + "</li>";
          });

          html += "</ul>";

          document.getElementById("details").innerHTML = html;
        });

        state.addEventListener("mouseover", () => {
          state.style.fill = "#90caf9";
          state.style.cursor = "pointer";
        });

        state.addEventListener("mouseout", () => {
          state.style.fill = "#cfd8dc";
        });

      });

    });

});
