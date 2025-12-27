alert("SCRIPT LOADED");

document.addEventListener("DOMContentLoaded", function () {

  const details = document.getElementById("details");
  const svg = document.querySelector("svg");

  if (!svg) {
    alert("SVG NOT FOUND");
    return;
  }

  svg.addEventListener("click", function (e) {

    const path = e.target.closest("path");

    if (!path) return;

    const stateId = path.id;

    alert("State clicked: " + stateId);

    // visual feedback
    path.style.fill = "#90caf9";

    // show text
    details.innerHTML = "<h3>State Selected: " + stateId + "</h3>";
  });

});
