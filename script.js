document.addEventListener("DOMContentLoaded", function () {

  const details = document.getElementById("details");

  document.querySelectorAll("svg path").forEach(state => {

    state.addEventListener("click", function () {
      details.innerHTML =
        "<h3>State Clicked: " + this.id + "</h3>";
    });

    state.addEventListener("mouseenter", function () {
      this.style.fill = "#90caf9";
      this.style.cursor = "pointer";
    });

    state.addEventListener("mouseleave", function () {
      this.style.fill = "#cfd8dc";
    });

  });

});
