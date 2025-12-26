document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("svg path").forEach(state => {

    state.addEventListener("click", () => {
      document.getElementById("details").innerHTML =
        `<h3>State Code: ${state.id}</h3>`;
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
