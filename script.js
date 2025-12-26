let stateData = {};

fetch("data.json")
  .then(res => res.json())
  .then(data => stateData = data);

document.querySelectorAll("svg path").forEach(state => {

  state.addEventListener("click", () => {
    const code = state.id;
    const info = stateData[code];

    if (!info) {
      document.getElementById("details").innerHTML =
        "<p>No data available</p>";
      return;
    }

    let html = `
      <h2>${info.name}</h2>
      <p><b>Capital:</b> ${info.capital}</p>
      <h3>Cities</h3>
      <ul>
    `;

    info.cities.forEach(city => {
      html += `<li><b>${city.name}</b> – ${city.famous}</li>`;
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
