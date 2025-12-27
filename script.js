alert("SCRIPT LOADED");

// Event delegation for SVG
document.addEventListener("click", function (e) {

  // check if clicked element is SVG path
  if (e.target.tagName.toLowerCase() === "path") {

    const stateId = e.target.id;

    if (!stateId) {
      alert("Path has no ID");
      return;
    }

    alert("State clicked: " + stateId);

    // optional visual feedback
    e.target.style.fill = "#90caf9";
  }

});
