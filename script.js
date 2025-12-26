document.addEventListener("DOMContentLoaded", () => {
  const obj = document.querySelector("object");

  if (!obj) {
    console.log("SVG object not found");
    return;
  }

  obj.addEventListener("load", () => {
    const svg = obj.contentDocument;

    if (!svg) {
      console.log("SVG not loaded");
      return;
    }

    const states = svg.querySelectorAll("path");

    states.forEach(state => {
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
});
