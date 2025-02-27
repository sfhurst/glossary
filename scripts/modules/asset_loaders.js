// Table of Contents
// ::: Get the code and code description | getCodeDescription(variable, code)
// ::: Asset Search Box | console.log(getGoogleMapsLink(latValue, longValue)) | updateMapButton(latValue, longValue) | displaySummary(asset)
// ::: generateSummary(assetNumber) | extractAssetDetails(assetNumber) | populateTextareas(assetNumber)
// ::: displaySummary() | generateSummary() | expandTextarea({ target: contentContainer }, "summary-textarea")
// ::: getGoogleMapsLink(latValue, longValue)
// ::: updateMapButton(latValue, longValue)
// ::: populateTextareas(assetNumber) | getCodeDescription(variable, code)
// ::: extractAssetDetails(assetNumber)

// ::: -------------------------------------------------------- Get the code and code description --------------------------------------------------------
function getCodeDescription(variable, code) {
  const category = bridgeData.find((item) => item.variable == variable);
  if (!category) return "Category not found";

  const valueEntry = category.values.find((entry) => entry.code == code);
  if (!valueEntry) return "";

  return variable === "scourCritical" ? valueEntry.description : `${valueEntry.code} - ${valueEntry.description}`;
}

// ::: -------------------------------------------------------- Asset Search Box --------------------------------------------------------

// Global variable to store the formatted history
let formattedHistory = "";
let searchValue = ""; // Declare outside to track its value

// Event Listener Setup (Triggers on Enter Key)
document.querySelector(".search-box").addEventListener("keydown", function (event) {
  if (event.key !== "Enter") return; // Ensures only Enter triggers the search
  event.preventDefault();

  // Retrieves the Search Input Value
  searchValue = this.value.trim().toLowerCase();

  // Handles "random" Keyword: If user enters "random", keep it as "random" in the search box
  if (searchValue === "random") {
    // Keep "random" in the search box, no modification needed
    this.value = "random"; // Ensures "random" stays in the search box
    // Pick a random asset number for searching
    searchValue = assetData[Math.floor(Math.random() * assetData.length)]["Asset Number"];
  } else if (/^\d+$/.test(searchValue)) {
    // If the input is purely numeric, pad with leading zeros to make it 6 digits
    searchValue = searchValue.padStart(6, "0");
    this.value = searchValue; // Update the search box with the padded value
  }

  // Searches for the Asset in assetData
  const asset = assetData.find((item) => item["Asset Number"].toLowerCase() === searchValue);

  // Handles Not Found Case
  const searchID = document.getElementById("searchID");

  if (!asset) {
    searchID.textContent = "Asset not found.";
    searchValue = ""; // Reset searchValue if no match is found
    return;
  }

  // Extracts required asset data. This is not used outside this function. The asset is what gets passed and it holds everything.
  const { "Asset Name": assetName, "(16) Latitude:": latValue, "(17) Longitude:": longValue, Hyperlink: hyperlink } = asset;

  ///////////////////////////

  // Look for history data related to this asset number
  const assetHistory = historyData[searchValue]; // Get the history from historyData

  // Format history if it exists
  if (assetHistory && assetHistory.length > 0) {
    formattedHistory = `History:\n${assetHistory.join("\n")}`;
  } else {
    formattedHistory = "";
  }

  ///////////////////////////

  // Logs Google Maps Link for Debugging
  console.log(getGoogleMapsLink(latValue, longValue));

  // Updates Map Button and Generates Summary
  updateMapButton(latValue, longValue); // No return needed
  // generateSummary(asset); // No return needed // Called again from displaySummary and returns notes
  displaySummary(asset); // No return needed

  // Updates Search UI Element and Adds Clickable Hyperlink
  searchID.textContent = assetName;
  searchID.replaceWith(searchID.cloneNode(true));

  document.getElementById("searchID").addEventListener("click", () => {
    window.open(hyperlink, "_blank");
  });
});

// ::: ---------------------------- generateSummary() ---------------------------------
// Function to generate a summary for an asset based on its attributes
function generateSummary(assetNumber) {
  // Extract necessary data from the asset object using descriptive variable names
  const assetValues = extractAssetDetails(assetNumber); // Returns the new asset data

  // Populate textareas on Review | Asset Data
  // Call the function and capture the returned values
  const { lowestValue, lowestComponent } = populateTextareas(assetNumber); // Returns lowestValue and lowestComponent

  // Calculate the total span count (approach + main spans)
  const spanCount = assetValues.approachSpans + assetValues.mainSpans;

  // Generate the "Posted" status based on the posted value
  const postedResponse = (assetValues.postedValue === "A" ? "not posted" : "posted").toLowerCase();

  // Determine whether an element-level inspection is required based on highway system type
  const elementResponse = (assetValues.highwaySystem === "1" ? "requires an element level inspection" : "does not require an element level inspection").toLowerCase();

  // Generate the membrane description if certain conditions are met (e.g., wearing surface and deck type)
  const membraneResponse =
    assetValues.underfillValue === "N" && (assetValues.deckStructureType === "1" || assetValues.deckStructureType === "2") && assetValues.wearingSurfaceType === "6"
      ? ["0", "8", "N"].includes(assetValues.membraneValue)
        ? "There is not an agency-approved protective membrane between the concrete deck and the bituminous wearing surface. As a result, the wearing surface rating must be a 4, as outlined in Part 7 of INDOT's 2020 Bridge Inspection Manual."
        : "There is an agency-approved protective membrane between the concrete deck and the bituminous wearing surface."
      : "";

  // Condition Descriptions
  const conditionDescriptions = {
    0: "(failed). The roadway has been closed.",
    1: "(imminent failure). The roadway has been closed.",
    2: "(critical condition). This rating is for XXXXX",
    3: "(serious condition). This rating is for XXXXX",
    4: "(poor condition). This rating is for XXXXX",
    5: "(fair condition). This rating is for XXXXX",
    6: "(satisfactory condition). This rating is for XXXXX",
    7: "(good condition). This rating is for minor defects of no structural significance.",
    8: "(very good condition). There are no deficiencies to report.",
    9: "(excellent condition). There are no deficiencies to report.",
  };
  const conditionDescription = conditionDescriptions[lowestValue] || "";

  // Structure Type, Main: Kind of Material/Design - Mapping integer values to material types
  const mainMatTypes = {
    0: "Other",
    1: "Concrete",
    2: "Concrete continuous",
    3: "Steel",
    4: "Steel continuous",
    5: "Prestressed concrete",
    6: "Prestressed concrete continuous",
    7: "Wood",
    8: "Masonry",
    9: "Aluminum, Wrought Iron, or Cast Iron",
  };
  const mainMatTypesResponse = (mainMatTypes[assetValues.mainMatType] || "").toLowerCase();

  // Structure Type, Approach Spans: Kind of Material/Design (same mapping as main material types)
  const approachMatTypes = mainMatTypes;
  const approachMatTypesResponse = (approachMatTypes[assetValues.approachMatType] || "").toLowerCase();

  // Structure Type, Main: Type of Design/Construction - Mapping integer values to design types
  const mainDesignTypes = {
    0: "Other",
    1: "Slab",
    2: "Multi-beam",
    3: "Girder and Floorbeam",
    4: "Tee Beam",
    5: "Multi-Box Beam",
    6: "Spread Box Beam",
    7: "Frame",
    9: "Deck truss",
    10: "Thru Truss",
    11: "Deck Arch",
    12: "Thru Arch",
    13: "Suspension",
    14: "Stayed Girder",
    16: "Bascule (Movable)",
    19: "Culvert",
    20: "Mixed type",
    21: "Segmental Box Girder",
    22: "Channel Beam",
  };
  const mainDesignTypesResponse = (mainDesignTypes[assetValues.mainDesignType] || "").toLowerCase();

  // Structure Type, Approach Spans: Type of Design/Construction (same mapping as main design types)
  const approachDesignTypes = mainDesignTypes;
  const approachDesignTypesResponse = (approachDesignTypes[assetValues.approachDesignType] || "").toLowerCase();

  // Deck Structure Type - Mapping integer values to deck types
  const deckStructureTypes = {
    1: "With A Concrete Cast-in-Place deck",
    2: "With A Concrete Precast Panels deck",
    3: "With An Open Grating deck",
    4: "With A Closed Grating deck",
    5: "With A Steel Plate (includes orthotropic) deck",
    6: "With A Corrugated Steel deck",
    7: "With An Aluminum deck",
    8: "With A Wood deck",
    9: "With An Other deck",
    N: "and does not have a structural deck",
  };
  const deckStructureTypesResponse = (deckStructureTypes[assetValues.deckStructureType] || "").toLowerCase();

  // Type of Wearing Surface - Mapping integer values to surface types
  const wearingSurfaceTypes = {
    0: "The bridge does not have a wearing surface.",
    1: "The bridge has a monolithic concrete wearing surface.",
    2: "The bridge has an integral concrete wearing surface.",
    3: "The bridge has a latex-modified (or similar additive) wearing surface.",
    4: "The bridge has a low slump concrete wearing surface.",
    5: "The bridge has an epoxy overlay wearing surface.",
    6: "The bridge has a bituminous wearing surface.",
    7: "The bridge has a wood wearing surface.",
    8: "The bridge has a gravel wearing surface.",
    9: "The bridge has an other wearing surface.",
    N: "",
  };
  const wearingSurfaceTypesResponse = wearingSurfaceTypes[assetValues.wearingSurfaceType] || "";

  // Scour types - Mapping various scour vulnerability codes to descriptions
  const scourTypes = {
    0: "The scour appraisal has not been completed by the scour appraisal team, and the scour vulnerability is unknown.",
    A: "The scour appraisal has been completed, and the bridge has been determined to be stable for scour.",
    B: "The scour appraisal has been completed, and the bridge has been determined to be stable for scour, dependent on designed and functioning countermeasures.",
    C: "The scour appraisal has been completed, and the bridge could become unstable for scour. Temporary countermeasures have been installed to mitigate scour, but the bridge remains scour critical.",
    D: "The scour appraisal has been completed, and the bridge is, or may become, unstable for scour. The bridge is scour critical.",
    E: "The scour appraisal has not been completed by the scour appraisal team. Temporary countermeasures have been installed to mitigate scour, but the scour vulnerability remains undetermined.",
    U: "The scour appraisal has not been completed by the scour appraisal team due to unknown foundations, and the scour vulnerability is unknown.",
    "AB-T":
      "Scour vulnerability is coded AB-T, a temporary classification indicating the bridge is stable for scour, possibly due to countermeasures. The final scour vulnerability rating could be A or B, meaning the bridge is not considered scour critical.",

    "BCE-T":
      "Scour vulnerability is coded BCE-T, a temporary classification indicating the bridge has undesigned scour countermeasures in place. The final scour vulnerability rating could be B, C, or E. Since C and E are scour critical, the bridge's status remains uncertain.",

    "CD-T":
      "Scour vulnerability is coded CD-T, a temporary classification indicating the bridge is unstable for theoretical scour, regardless of any undesigned countermeasures. The final scour vulnerability rating could be C or D, both of which are scour critical.",
  };

  // Scour status and vulnerability response mapping based on provided values
  const scourTypesResponse = scourTypes[assetValues.scourVulnerability] || "";

  // const conditionResponse = `The lowest condition rating (B.C.13) for the bridge is the a ${lowestComponent} rating of ${lowestValue} ${conditionDescription}`.replace("a 8", "an 8");
  const conditionResponse = `The lowest condition rating (B.C.13) for the bridge is a ${lowestValue} ${conditionDescription}`.replace("a 8", "an 8");

  const approachSpansPlural = assetValues.approachSpans === 1 ? "span" : "spans";
  const mainSpansPlural = assetValues.mainSpans === 1 ? "span" : "spans";
  const ms2 = `The structure is a ${assetValues.mainSpans}-span, ${mainMatTypesResponse} ${mainDesignTypesResponse} design ${deckStructureTypesResponse}.`;
  const ms3a = `The bridge has ${assetValues.approachSpans} approach ${approachSpansPlural} and ${assetValues.mainSpans} main ${mainSpansPlural}.`;
  const ms3b = `The approach spans have a ${approachMatTypesResponse} ${approachDesignTypesResponse} design.`;
  const ms3c = `The main structure has a ${assetValues.mainSpans}-span, ${mainMatTypesResponse} ${mainDesignTypesResponse} design ${deckStructureTypesResponse}.`;
  const spansResponse = assetValues.approachSpans > 0 ? `${ms3a} ${ms3b} ${ms3c}` : `${ms2}`;

  const adtResponse = assetValues.adtValue ? `The ${assetValues.adtYear} ADT is ${assetValues.adtValue} vpd.` : "";
  const cardinalResponse = "All directions in this report are based on the roadway direction of travel and not compass readings. ";

  const channelResponse = assetValues.channelValue === "N" ? `The bridge is not over water.` : "";
  const formattedHistoryResponse = formattedHistory !== "" ? `\n\n${formattedHistory}` : "";

  let formattedMaintenanceComments = maintenanceArray
    .map((item) => {
      let comment = `A ${item.category.toLowerCase()} deficiency was submitted for ${item.name
        .toLowerCase()
        .replace(/\brepair\b/g, "repairs")
        .replace(/\bseal\b/g, "sealing")
        .replace(/\bpatch\b/g, "patching")}.`;
      return comment.replace(/red deficiency/g, "critical find"); // Replace all instances of "red deficiency"
    })
    .join("\n");

  const maintenanceResponse = maintenanceArray.length !== 0 ? formattedMaintenanceComments : "There are no open maintenance items.";

  // Combine all information into a structured summary
  const generalPara = `${spansResponse} ${wearingSurfaceTypesResponse} ${membraneResponse} ${adtResponse} The structure is ${postedResponse} and ${elementResponse}. ${scourTypesResponse} ${channelResponse} ${cardinalResponse}`;
  const generalParaCleaned = generalPara.replace(/\s{2,}/g, " ");
  const generalNotes = `General Inspection Notes:\n${generalParaCleaned}\n\n${conditionResponse}\n\nMaintenance / Recommendations:\n${maintenanceResponse}${formattedHistoryResponse}`;

  // Final notes is returned as the answer to the generateSummary(assetNumber);
  return generalNotes;
}

// ::: ---------------------------- displaySummary() ---------------------------------
/**
 * Generates a detailed bridge condition summary based on the asset number.
 * Function Details:
 * 1. Extracts asset details using `extractAssetDetails()`.
 * 2. Populates textareas for review and retrieves the lowest condition rating using `populateTextareas()`.
 * 3. Calculates span counts (approach + main spans).
 * 4. Determines if the bridge is posted or not.
 * 5. Checks if the bridge requires an element-level inspection.
 * 6. Assesses whether the bridge has an approved membrane.
 * 7. Maps numerical condition ratings to descriptive phrases.
 * 8. Converts numerical structure types into readable descriptions (material, design, deck type, wearing surface).
 * 9. Evaluates the bridge's scour vulnerability based on predefined classifications.
 * 10. Constructs multiple descriptive sentences summarizing key attributes of the bridge.
 */
// Put the summary in the textarea on the review page and copy it to the clipboard when that textarea is clicked
function displaySummary(assetNumber) {
  // Generate the report using the previous function
  const generalNotes = generateSummary(assetNumber); // Wants the notes returned

  // Find the container where you want to insert the report
  const summaryTab = document.getElementById("review-summary-tab");

  // Insert the generated report into the <p> element
  if (summaryTab) {
    const contentContainer = document.getElementById("summary-textarea");
    contentContainer.value = generalNotes; // Insert generalNotes here
    // Call the expandTextarea function manually
    expandTextarea({ target: contentContainer }, "summary-textarea"); // No return needed

    // Add click event listener to copy text
    contentContainer.onclick = function (event) {
      // Create a temporary element to extract text without HTML tags
      const tempElement = document.createElement("div");
      tempElement.innerHTML = generalNotes;

      // Extract the text from the temporary element
      let plainText = tempElement.textContent || tempElement.innerText;

      // Remove leading/trailing whitespace
      plainText = plainText.replace(/^\s+/g, "").replace(/\s+$/g, "");

      // Remove extra newlines between paragraphs
      plainText = plainText.replace(/\n+/g, "\n");

      // Remove extra spaces within lines
      plainText = plainText.replace(/\s+/g, " ").trim();

      // Ensure newlines only between the sections
      plainText = plainText.replace(/(General Inspection Notes: )/g, "$1\n"); // Add a newline after the heading
      plainText = plainText.replace(/(Maintenance \/ Recommendations: )/g, "\n\n$1\n"); // Add a newline before and after the heading

      // Copy the cleaned-up plain text to clipboard
      navigator.clipboard
        .writeText(plainText)
        .then(() => {
          // Create a "Copied" message element
          const copiedMessage = document.createElement("div");
          copiedMessage.textContent = "Copied";

          // Style the "Copied" message
          copiedMessage.style.position = "fixed"; // Use fixed positioning
          copiedMessage.style.top = "15px"; // Position it a bit below the top
          copiedMessage.style.left = "50%"; // Center horizontally
          copiedMessage.style.transform = "translateX(-50%)"; // Adjust for perfect centering

          copiedMessage.style.backgroundColor = "rgba(67 84 167 / 0.9)";
          copiedMessage.style.color = "#fff";
          copiedMessage.style.padding = "5px 5px";
          copiedMessage.style.borderRadius = "4px";
          copiedMessage.style.fontSize = "14px";
          copiedMessage.style.zIndex = "9999"; // Ensure it's above other content

          document.body.appendChild(copiedMessage);

          // Remove the "Copied" message after 2 seconds
          setTimeout(() => {
            copiedMessage.remove();
          }, 850);
        })
        .catch((err) => console.error("Error copying text: ", err));
    };
  }
}

// ::: ---------------------------- getGoogleMapsLink() ---------------------------------
// Google Maps
function getGoogleMapsLink(latValue, longValue) {
  // Determine latitude direction
  let latDir = latValue >= 0 ? "N" : "S";
  let absLat = Math.abs(latValue);
  let latD = Math.floor(absLat);
  let latM = Math.floor((absLat - latD) * 60);
  let latS = (((absLat - latD) * 60 - latM) * 60).toFixed(2);

  // Determine longitude direction
  let lonDir = longValue >= 0 ? "E" : "W";
  let absLon = Math.abs(longValue);
  let lonD = Math.floor(absLon);
  let lonM = Math.floor((absLon - lonD) * 60);
  let lonS = (((absLon - lonD) * 60 - lonM) * 60).toFixed(2);

  // Construct formatted coordinates
  let sLat = `${latD}°${latM}'${latS}"${latDir}`;
  let sLon = `${lonD}°${lonM}'${lonS}"${lonDir}`;

  // Construct Google Maps URL
  let url = `https://www.google.com/maps/place/${latValue},${longValue}/@${latValue},${longValue},17z`;

  return url;
}

// ::: ---------------------------- updateMapButton() ---------------------------------
function updateMapButton(latValue, longValue) {
  let mapButton = document.getElementById("button-map-link");
  let url = getGoogleMapsLink(latValue, longValue);

  // Set the button to open the map link when clicked
  mapButton.onclick = function () {
    window.open(url, "_blank");
  };

  // Make the button visible
  // mapButton.style.display = "inline-block"; // or "block" depending on layout

  document.getElementById("button-map-link").style.opacity = "1";
  document.getElementById("button-map-link").style.cursor = "pointer"; // Adds hand pointer
  // document.getElementById("button-map-link").style.position = "static"; // Reset position
}

// ::: ---------------------------- populateTextareas() ---------------------------------
// Populate textareas on Review | Asset Data
function populateTextareas(assetNumber) {
  // Extract necessary data from the asset object using descriptive variable names
  const assetValues = extractAssetDetails(assetNumber); // Returns the new asset data

  // Set full RP
  const referencePostOffset = assetValues.referencePost + assetValues.offsetValue;

  // Routine Due date
  // Create a new Date object based on the inspectionDate to avoid modifying the original
  const tempDate = assetValues.inspectionDate ? new Date(assetValues.inspectionDate) : null;
  const tempNSTMDate = assetValues.nstmInspDate ? new Date(assetValues.nstmInspDate) : null;
  const tempSpecialDate = assetValues.specialInspDate ? new Date(assetValues.specialInspDate) : null;
  const tempUnderwaterDate = assetValues.underwaterInspDate ? new Date(assetValues.underwaterInspDate) : null;
  let formattedInspectionDueDate = "";
  let inspectionDueDate = "";
  let formattedNSTMDueDate = "";
  let nstmDueDate = "";
  let formattedSpecialDueDate = "";
  let specialDueDate = "";
  let formattedUnderwaterDueDate = "";
  let underwaterDueDate = "";

  // Add the frequency to the inspection date
  if (assetValues.inspectionDate) {
    tempDate.setMonth(tempDate.getMonth() + assetValues.inspectionFrequency);
    tempDate.setMonth(tempDate.getMonth() + 1);
    tempDate.setDate(0);
    formattedInspectionDueDate = `${(tempDate.getMonth() + 1).toString().padStart(2, "0")}/${tempDate.getDate().toString().padStart(2, "0")}/${tempDate.getFullYear()}`;
    inspectionDueDate = formattedInspectionDueDate;
  }

  if (assetValues.nstmInspDate) {
    tempNSTMDate.setMonth(tempNSTMDate.getMonth() + assetValues.nstmInspFrequency);
    tempNSTMDate.setMonth(tempNSTMDate.getMonth() + 1);
    tempNSTMDate.setDate(0);
    formattedNSTMDueDate = `${(tempNSTMDate.getMonth() + 1).toString().padStart(2, "0")}/${tempNSTMDate.getDate().toString().padStart(2, "0")}/${tempNSTMDate.getFullYear()}`;
    nstmDueDate = formattedNSTMDueDate;
  }

  if (assetValues.specialInspDate) {
    tempSpecialDate.setMonth(tempSpecialDate.getMonth() + assetValues.specialInspFrequency);
    tempSpecialDate.setMonth(tempSpecialDate.getMonth() + 1);
    tempSpecialDate.setDate(0);
    formattedSpecialDueDate = `${(tempSpecialDate.getMonth() + 1).toString().padStart(2, "0")}/${tempSpecialDate
      .getDate()
      .toString()
      .padStart(2, "0")}/${tempSpecialDate.getFullYear()}`;
    specialDueDate = formattedSpecialDueDate;
  }

  if (assetValues.underwaterInspDate) {
    tempUnderwaterDate.setMonth(tempUnderwaterDate.getMonth() + assetValues.underwaterInspFrequency);
    tempUnderwaterDate.setMonth(tempUnderwaterDate.getMonth() + 1);
    tempUnderwaterDate.setDate(0);
    formattedUnderwaterDueDate = `${(tempUnderwaterDate.getMonth() + 1).toString().padStart(2, "0")}/${tempUnderwaterDate
      .getDate()
      .toString()
      .padStart(2, "0")}/${tempUnderwaterDate.getFullYear()}`;
    underwaterDueDate = formattedUnderwaterDueDate;
  }

  // Get lowest value
  // Extract numeric values, excluding any non-numeric strings (e.g., "N")
  // Define the fields and their respective values
  const values = [
    { field: "deck", value: assetValues.deck },
    { field: "superstructure", value: assetValues.superstructure },
    { field: "substructure", value: assetValues.substructure },
    { field: "culvert", value: assetValues.culvert },
  ];

  // Filter out non-numeric values and "N"
  const validValues = values.filter((item) => !isNaN(item.value) && item.value !== "N");

  // If there are valid values, find the lowest value and the corresponding field
  let lowestValue = null;
  let lowestComponent = null;

  if (validValues.length > 0) {
    // Get the lowest value and the corresponding field
    const lowest = validValues.reduce((min, current) => {
      return current.value < min.value ? current : min;
    });

    // Set the lowestValue and lowestComponent variables
    lowestValue = lowest.value;
    lowestComponent = lowest.field;
  }

  const channelValueText = assetValues.channelValue === "N" || assetValues.channelValue === "" ? "No" : "Yes";
  const nstmInspRequiredText = assetValues.nstmInspRequired === "N" || assetValues.nstmInspRequired === "" ? "No" : "Yes";
  const specialInspRequiredText = assetValues.specialInspRequired === "N" || assetValues.specialInspRequired === "" ? "No" : "Yes";
  const underwaterInspRequiredText = assetValues.underwaterInspRequired === "N" || assetValues.underwaterInspRequired === "" ? "No" : "Yes";

  const postedValueText = getCodeDescription("postedValue", assetValues.postedValue);
  const highwaySystemText = getCodeDescription("highwaySystem", assetValues.highwaySystem);
  const countyCodeText = getCodeDescription("countyCode", assetValues.countyCode);
  const highwayAgencyDistrictText = getCodeDescription("highwayAgencyDistrict", assetValues.highwayAgencyDistrict);
  const scourVulnerabilityText = getCodeDescription("scourVulnerability", assetValues.scourVulnerability);
  const scourCriticalText = getCodeDescription("scourCritical", assetValues.scourVulnerability); // uses scourVulnerability to make scour determination
  const approachMatTypeText = getCodeDescription("approachMatType", assetValues.approachMatType);
  const approachDesignTypeText = getCodeDescription("approachDesignType", assetValues.approachDesignType);
  const mainMatTypeText = getCodeDescription("mainMatType", assetValues.mainMatType);
  const mainDesignTypeText = getCodeDescription("mainDesignType", assetValues.mainDesignType);
  const wearingSurfaceTypeText = getCodeDescription("wearingSurfaceType", assetValues.wearingSurfaceType);
  const deckMembraneTypeText = getCodeDescription("deckMembraneType", assetValues.deckMembraneType);
  const deckProtectionTypeText = getCodeDescription("deckProtectionType", assetValues.deckProtectionType);

  const deckStructureTypeText = getCodeDescription("deckStructureType", assetValues.deckStructureType);
  const deckText = getCodeDescription("deck", assetValues.deck);
  const superstructureText = getCodeDescription("superstructure", assetValues.superstructure);
  const substructureText = getCodeDescription("substructure", assetValues.substructure);
  const culvertText = getCodeDescription("culvert", assetValues.culvert);
  const lowestValueText = getCodeDescription("lowestValue", lowestValue);
  const wearingSurfaceText = getCodeDescription("deck", assetValues.wearingSurface);

  // List of variables and their corresponding IDs in the form
  const fields = [
    { id: "assetName", value: assetValues.assetName },
    { id: "assetNumberNBI", value: assetValues.assetNumberNBI },
    { id: "inspectionDate", value: assetValues.inspectionDate },
    { id: "inspectionFrequency", value: assetValues.inspectionFrequency },
    { id: "inspectionDueDate", value: inspectionDueDate },
    { id: "postedValue", value: postedValueText },
    { id: "highwaySystem", value: highwaySystemText },
    // { id: "scourCritical", value: assetValues.scourCritical }, // Held as an alternative data grab
    { id: "scourCritical", value: scourCriticalText },
    { id: "scourVulnerability", value: scourVulnerabilityText },
    { id: "adtValue", value: assetValues.adtValue },
    { id: "adtYear", value: assetValues.adtYear },
    { id: "channelValue", value: channelValueText },

    { id: "contact", value: assetValues.contact },
    { id: "highwayAgencyDistrict", value: highwayAgencyDistrictText },
    { id: "invRoute", value: assetValues.invRoute },
    { id: "countyCode", value: countyCodeText },
    { id: "referencePostOffset", value: referencePostOffset },
    { id: "latValue", value: assetValues.latValue },
    { id: "longValue", value: assetValues.longValue },
    { id: "facilityCarried", value: assetValues.facilityCarried },
    { id: "featuresIntersected", value: assetValues.featuresIntersected },

    { id: "nstmInspRequired", value: nstmInspRequiredText },
    { id: "nstmInspFrequency", value: assetValues.nstmInspFrequency },
    { id: "nstmInspDate", value: nstmDueDate },
    { id: "specialInspRequired", value: specialInspRequiredText },
    { id: "specialInspFrequency", value: assetValues.specialInspFrequency },
    { id: "specialInspDate", value: specialDueDate },
    { id: "underwaterInspRequired", value: underwaterInspRequiredText },
    { id: "underwaterInspFrequency", value: assetValues.underwaterInspFrequency },
    { id: "underwaterInspDate", value: underwaterDueDate },

    { id: "deck", value: deckText },
    { id: "superstructure", value: superstructureText },
    { id: "substructure", value: substructureText },
    { id: "culvert", value: culvertText },
    { id: "lowestValue", value: lowestValueText },

    { id: "approachSpans", value: assetValues.approachSpans },
    { id: "approachMatType", value: approachMatTypeText },
    { id: "approachDesignType", value: approachDesignTypeText },
    { id: "mainSpans", value: assetValues.mainSpans },
    { id: "mainMatType", value: mainMatTypeText },
    { id: "mainDesignType", value: mainDesignTypeText },
    { id: "wearingSurfaceType", value: wearingSurfaceTypeText },
    { id: "deckMembraneType", value: deckMembraneTypeText },
    // { id: "deckProtectionType", value: deckProtectionTypeText },
    { id: "wearingSurface", value: wearingSurfaceText }, //
    { id: "deckStructureType", value: deckStructureTypeText },

    { id: "brdgWidthCurbToCurb", value: assetValues.brdgWidthCurbToCurb },
    { id: "deckWidthOutToOut", value: assetValues.deckWidthOutToOut },
    { id: "structureLength", value: assetValues.structureLength },
    { id: "skewValue", value: assetValues.skewValue },
  ];

  // Loop through each field and set the value of the corresponding textarea
  fields.forEach((field) => {
    const textarea = document.getElementById(`asset-textarea-${field.id}`);
    if (textarea) {
      textarea.value = field.value;
    }
  });

  // Return both values as an object
  return {
    lowestValue: lowestValue,
    lowestComponent: lowestComponent,
  };
}

function extractAssetDetails(assetNumber) {
  return {
    assetName: assetNumber["Asset Name"],
    assetNumberNBI: assetNumber["Asset Number"],
    inspectionDate: assetNumber["(90) Inspection Date:"],
    inspectionFrequency: assetNumber["(91) Designated Inspection Frequency:"],
    postedValue: assetNumber["(41) Structure Open/Posted/Closed:"],
    scourVulnerability: assetNumber["(B.AP.03) Scour Vulnerability"] || "",
    scourCritical: assetNumber["(113) Scour Critical Bridges:"],
    adtValue: assetNumber["(29) Average Daily Traffic:"]?.toLocaleString() || "",
    adtYear: " " + assetNumber["(30) Year of Average Daily Traffic:"],
    highwaySystem: assetNumber["(104) Highway System of Inventory Route:"],
    channelValue: assetNumber["(61) Channel / Channel Protection:"],

    contact: assetNumber["Contact(s)"],
    highwayAgencyDistrict: assetNumber["(2) Highway Agency District:"],
    invRoute: assetNumber["Inv Route #"],
    countyCode: assetNumber["(3) County Code:"],
    referencePost: assetNumber["Reference Post:"],
    offsetValue: assetNumber["Offset:"],
    latValue: assetNumber["(16) Latitude:"],
    longValue: assetNumber["(17) Longitude:"],
    facilityCarried: assetNumber["(7) Facility Carried:"],
    featuresIntersected: assetNumber["(6) Features Intersected:"],

    deck: assetNumber["(58) Deck:"],
    superstructure: assetNumber["(59) Superstructure:"],
    substructure: assetNumber["(60) Substructure:"],
    culvert: assetNumber["(62) Culverts:"],

    approachSpans: assetNumber["(46) Number of Approach Spans:"] || 0,
    approachMatType: assetNumber["(44A) Structure Type, Approach Spans: Kind of Material:"],
    approachDesignType: assetNumber["(44B) Structure Type, Approach Spans: Type of Design"],
    mainSpans: assetNumber["(45) Number of Spans in Main Unit:"],
    mainMatType: assetNumber["(43A) Structure Type, Main: Kind of Material:"],
    mainDesignType: assetNumber["(43B) Structure Type, Main: Type of Design:"],
    wearingSurfaceType: assetNumber["(108A) Wearing Surface Protection System: Wearing Surface"],
    deckMembraneType: assetNumber["(108B) Wearing Surface Protection System: Deck Membrane"],
    deckProtectionType: assetNumber["(108C) Wearing Surface Protection System: Deck Protection"],
    deckStructureType: assetNumber["(107) Deck Structure Type:"],

    bridgeJointType: assetNumber["(58.02) Bridge Joint Type:"],
    scourStatus: assetNumber["Scour Analysis Status:"],
    scourDetermination: assetNumber["Scour Analysis Determination:"],
    scourSafety: assetNumber["Scour Critical Safety Status:"],

    nstmInspRequired: assetNumber["(92AA) Critical Feature Inspection: NSTM Insp Required?"],
    nstmInspFrequency: assetNumber["(92A) Critical Feature Inspection: NSTM Insp Frequency?"],
    nstmInspDate: assetNumber["(93A) Critical Feature Inspection Date: NSTM Insp Date"] || "",
    specialInspRequired: assetNumber["(92CC) Critical Feature Inspection: Special Insp Required?"],
    specialInspFrequency: assetNumber["(92C) Critical Features: Special Insp Frequency?"],
    specialInspDate: assetNumber["(93C) Critical Feature Inspection Date: Special Insp Date"] || "",
    underwaterInspRequired: assetNumber["(92BB) Critical Feature Inspection: Underwater Insp Required?"],
    underwaterInspFrequency: assetNumber["(92B) Critical Feature Inspection: Underwater Insp Frequency?"],
    underwaterInspDate: assetNumber["(93B) Critical Feature Inspection: Underwater Insp Date"] || "",

    brdgWidthCurbToCurb: assetNumber["(51) Brdg Rdwy Width Curb-To-Curb:"],
    deckWidthOutToOut: assetNumber["(52) Deck Width, Out-To-Out:"],
    structureLength: assetNumber["(49) Structure Length:"],
    skewValue: assetNumber["(34) Skew:"],

    hyperlink: assetNumber["Hyperlink"],

    underfillValue: assetNumber["(62) Culverts:"],
    membraneValue: assetNumber["(108B) Wearing Surface Protection System: Deck Membrane"],
    approachRoadwayAlignment: assetNumber["(72) Approach Roadway Alignment:"],
    terminalJoints: assetNumber["(58.06) Terminal Joints:"],
    approachSlabs: assetNumber["(58.05) Approach Slabs:"],
    bridgeJoints: assetNumber["(58.04) Bridge Joints:"],
    wearingSurface: assetNumber["(58.01) Wearing Surface:"],
    bridgeBearings: assetNumber["(59.02) Bridge Bearings:"],
    madPaint: assetNumber["MAD Paint"],
    concreteSlopewall: assetNumber["Concrete Slopewall:"],
    scourAnalysisComment: assetNumber["Scour Analysis Comment:"],
    waterwayAdequacy: assetNumber["(71) Waterway Adequacy:"],
    deprecatedDesignLoad: assetNumber["(31) DeprecatedDesign Load"],
    madBats: assetNumber["MAD-Bats"],
    madSwallows: assetNumber["MAD-Swallows"],
    bridgeRailings: assetNumber["(36A) Bridge Railings:"],
    transitions: assetNumber["(36B) Transitions:"],
  };
}
