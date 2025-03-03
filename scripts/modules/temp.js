// Function to search for an asset based on user input
function handleAssetSearch(searchInput) {
  let searchValue = searchInput.value.trim().toLowerCase();

  if (!searchValue) return; // Exit if search box is empty

  // Handle "random" keyword
  if (searchValue === "random") {
    searchInput.value = "random"; // Ensure "random" stays in the box
    searchValue = assetData[Math.floor(Math.random() * assetData.length)]["Asset Number"];
  } else if (/^\d+$/.test(searchValue)) {
    // Pad numeric input with leading zeros to make it 6 digits
    searchValue = searchValue.padStart(6, "0");
    searchInput.value = searchValue;
  }

  // Search for the asset
  const asset = assetData.find((item) => item["Asset Number"].toLowerCase() === searchValue);
  const searchID = document.getElementById("searchID");

  if (!asset) {
    searchID.textContent = "Asset not found.";
    return;
  }

  // Extract relevant asset data
  const { "Asset Name": assetName, "(16) Latitude:": latValue, "(17) Longitude:": longValue, Hyperlink: hyperlink } = asset;

  // Look for history data related to this asset number
  const assetHistory = historyData[searchValue];
  const formattedHistory = assetHistory && assetHistory.length > 0 ? `History:\n${assetHistory.join("\n")}` : "";

  // Log Google Maps link for debugging
  console.log(getGoogleMapsLink(latValue, longValue));

  // Update UI and trigger necessary functions
  hideAllErrors();
  updateMapButton(latValue, longValue);
  displaySummary(asset);

  // Update search UI
  searchID.textContent = assetName;
  searchID.replaceWith(searchID.cloneNode(true));

  // Add clickable hyperlink to asset name
  searchID.addEventListener("click", () => {
    window.open(hyperlink, "_blank");
  });
}

// Event listener for the search box on Enter key press
document.querySelector(".search-box").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleAssetSearch(this);
  }
});
