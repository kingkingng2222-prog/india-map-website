alert("SCRIPT LOADED");

document.addEventListener("click", function (e) {

  console.log("Clicked element:", e.target);

  // Try to find nearest PATH (even if click on stroke)
  const path = e.target.closest("path");

  if (path) {
    alert("State clicked: " + path.id);
    path.style.fill = "#90caf9";
  }

});
