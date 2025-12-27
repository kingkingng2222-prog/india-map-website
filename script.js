document.addEventListener("DOMContentLoaded", function () {

  const details = document.getElementById("details");
  const svg = document.querySelector("#map svg");

  if (!svg) {
    alert("SVG NOT FOUND");
    return;
  }

  // 🔥 CLICK TEST (সবচেয়ে simple)
  svg.addEventListener("click", function (e) {

    const path = e.target.closest("path");
    if (!path) return;

    alert("STATE CLICKED: " + path.id);

    // visual confirm
    path.style.fill = "#90caf9";
    details.innerHTML = "<h3>Clicked: " + path.id + "</h3>";
  });

});
