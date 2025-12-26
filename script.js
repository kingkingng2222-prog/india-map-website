document.addEventListener("DOMContentLoaded", () => {
  const obj = document.querySelector("object");

  obj.addEventListener("load", () => {
    const svg = obj.contentDocument;

    svg.querySelectorAll("path").forEach(state => {
      state.addEventListener("click", () => {
        document.getElementById("details").innerHTML =
          `<h3>State Code: ${state.id}</h3>`;
      });

      state.addEventListener("mouseover", () => {
        state.style.fill = "#90caf9";
      });

      state.addEventListener("mouseout", () => {
        state.style.fill = "#cfd8dc";
      });
    });
  });
});
