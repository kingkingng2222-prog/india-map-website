let currentLang = "en";

/*
  SimpleMaps automatically calls this function
  when a state is clicked
*/
function simplemaps_countrymap_click(stateCode) {

  const details = document.getElementById("details");

  // Convert INWB → WB
  const shortCode = stateCode.replace("IN", "");

  details.innerHTML = `
    <h3>State Selected</h3>
    <p><b>SimpleMaps Code:</b> ${stateCode}</p>
    <p><b>State Code:</b> ${shortCode}</p>

    <p>
      এখান থেকে তুমি এখন:
      <ul>
        <li>16-point state details দেখাতে পারো</li>
        <li>City list যোগ করতে পারো</li>
        <li>Admin panel connect করতে পারো</li>
      </ul>
    </p>
  `;
}

// Language toggle (UI ready)
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("langBtn");
  btn.onclick = () => {
    currentLang = currentLang === "en" ? "bn" : "en";
    alert("Language: " + currentLang.toUpperCase());
  };
});
