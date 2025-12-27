document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll("svg path").forEach(state => {

    state.addEventListener("click", function () {
      alert("Clicked state ID: " + this.id);
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
