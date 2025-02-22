const bridgeData = [
  {
    category: "NBI 041: Structure Open, Posted, or Closed to Traffic",
    values: [
      { code: "R", description: "Posted for Other Load-Capacity Restriction" },
      { code: "P", description: "Posted for Load" },
      { code: "K", description: "Closed" },
      { code: "G", description: "New Bridge, Not Open Yet" },
      { code: "E", description: "Open, Temporary Structure" },
      { code: "D", description: "Open, Temporary Shoring" },
      { code: "B", description: "Open, Posting Required" },
      { code: "A", description: "Open" },
    ],
  },
  {
    category: "Scour Analysis Status",
    values: [
      { code: "N/A", description: "Bridge not over water" },
      { code: "1", description: "Scour Analysis on file" },
      { code: "2", description: "Scour POA on file" },
      { code: "3", description: "Scour Analysis is NOT on file, bridge should have been designed for scour" },
      { code: "4", description: "Scour Analysis is not on file, scour analysis being performed in house" },
      { code: "5", description: "Scour Analysis not on file, scour analysis needed" },
      { code: "6", description: "Scour Analysis not needed. Structure type is not susceptible to scour" },
      { code: "7", description: "Bridge programmed to be rehabbed or replaced" },
    ],
  },
  {
    category: "Scour Analysis Determination",
    values: [
      { code: "N/A", description: "Bridge Not Over Water" },
      { code: "1", description: "Scour Analysis complete, bridge is NOT hydraulically scour critical by analysis" },
      { code: "2", description: "Scour Analysis complete, bridge IS hydraulically scour critical by analysis" },
      { code: "3", description: "Scour Assessment on file" },
    ],
  },
  {
    category: "Scour Critical Safety Status",
    values: [
      { code: "N/A", description: "Bridge not over water" },
      { code: "1", description: "Bridge is NOT scour Critical based on analysis findings" },
      { code: "2", description: "Bridge IS scour critical based on analysis findings, Scour POA or Countermeasures REQUIRED" },
      { code: "3", description: "Bridge IS scour critical based on analysis findings and Scour POA is ON FILE" },
      { code: "4", description: "Bridge IS scour critical based on analysis findings and Countermeasures are installed and FIELD VERIFIED" },
    ],
  },
  {
    category: "MAD Joint Type",
    values: [
      { code: "A", description: "BS" },
      { code: "B", description: "SS" },
      { code: "C", description: "Tooth (finger)" },
      { code: "F", description: "Sliding Steel Plate" },
      { code: "G", description: "Armor (two steel angles)" },
      { code: "H", description: "1A (At hinges only)" },
      { code: "I", description: "Modular" },
      { code: "J", description: "Open" },
      { code: "L", description: "Unknown (covered with bituminous)" },
      { code: "M", description: "Other types" },
      { code: "N", description: "ONLY to remove other value that is no longer present" },
      { code: "O", description: "XJS" },
      { code: "P", description: "Poured Silicone (narrow width, replace old IA)" },
      { code: "Q", description: "Polymer Modified Asphalt Expansion (pave tec)" },
    ],
  },
  {
    category: "NBI 107: Deck Structure Type",
    values: [
      { code: "N", description: "Not Applicable" },
      { code: "1", description: "Concrete Cast-in-Place" },
      { code: "2", description: "Concrete Precast Panels" },
      { code: "3", description: "Open Grating" },
      { code: "5", description: "Steel Plate (includes orthotropic)" },
      { code: "6", description: "Corrugated Steel" },
      { code: "8", description: "Wood or Timber" },
      { code: "9", description: "Other" },
    ],
  },
  {
    category: "NBI 108C: Deck Protection",
    values: [
      { code: "N", description: "NA" },
      { code: "0", description: "None" },
      { code: "1", description: "Epoxy Coated Reinforcing" },
      { code: "2", description: "Galvanized Reinforcing" },
      { code: "4", description: "Cathodic Protection" },
      { code: "8", description: "Unknown" },
      { code: "9", description: "Other" },
    ],
  },
  {
    category: "NBI 104: Highway System-Inv Route",
    values: [
      { code: "0", description: "Structure/Route is NOT on NHS" },
      { code: "1", description: "Structure/Route is on NHS" },
    ],
  },
  {
    category: "NBI 043A: Structure Type, Main: Kind of Material/Design",
    values: [
      { code: "9", description: "Aluminum, Wrought Iron or Cast Iron" },
      { code: "8", description: "Masonry" },
      { code: "7", description: "Wood or Timber" },
      { code: "6", description: "Prestressed concrete continuous" },
      { code: "5", description: "Prestressed concrete" },
      { code: "4", description: "Steel continuous" },
      { code: "3", description: "Steel" },
      { code: "2", description: "Concrete continuous" },
      { code: "1", description: "Concrete" },
      { code: "0", description: "Other" },
    ],
  },
  {
    category: "NBI 043B: Structure Type, Main: Type of Design/Construction",
    values: [
      { code: "00", description: "Other" },
      { code: "01", description: "Slab" },
      { code: "02", description: "Stringer/Multi-beam or Girder" },
      { code: "03", description: "Girder and Floorbeam System" },
      { code: "04", description: "Tee Beam" },
      { code: "05", description: "Box Beam or Girders - Multiple" },
      { code: "06", description: "Box Beam or Girders - Single or Spread" },
      { code: "07", description: "Frame (except frame culverts)" },
      { code: "10", description: "Truss - Thru" },
      { code: "11", description: "Arch - Deck" },
      { code: "12", description: "Arch - Thru" },
      { code: "14", description: "Stayed Girder" },
      { code: "16", description: "Movable - Bascule" },
      { code: "19", description: "Culvert (includes frame culverts)" },
      { code: "20", description: "Mixed types" },
      { code: "21", description: "Segmental Box Girder" },
      { code: "22", description: "Channel Beam" },
    ],
  },
];

// For running the asset search
document.querySelector(".search-box").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent default form submission
    let searchValue = this.value.trim();

    // If user enters "random", pick a random asset number
    if (searchValue.toLowerCase() === "random") {
      const randomIndex = Math.floor(Math.random() * jsonData.length);
      searchValue = jsonData[randomIndex]["Asset Number"];
    }

    const assetNumber = jsonData.find((item) => item["Asset Number"] === searchValue);

    // If assetNumber is not found, show the error message and exit
    if (!assetNumber) {
      document.getElementById("searchID").textContent = "Asset not found. Please enter the full asset number with any leading zeros.";
      return; // Stop execution to prevent errors
    }

    // Variable Declarations
    let assetName = assetNumber["Asset Name"];
    let inspectionDate = assetNumber["(90) Inspection Date:"];
    let invRoute = assetNumber["Inv Route #"];
    let adtValue = assetNumber["(29) Average Daily Traffic:"];
    let adtYear = assetNumber["(30) Year of Average Daily Traffic:"];
    let highwaySystem = assetNumber["(104) Highway System of Inventory Route:"];
    let postedValue = assetNumber["(41) Structure Open/Posted/Closed:"];
    let mainMatType = assetNumber["(43A) Structure Type, Main: Kind of Material:"];
    let mainDesignType = assetNumber["(43B) Structure Type, Main: Type of Design:"];
    let approachMatType = assetNumber["(44A) Structure Type, Approach Spans: Kind of Material:"];
    let approachDesignType = assetNumber["(44B) Structure Type, Approach Spans: Type of Design"];
    let bridgeJointType = assetNumber["(58.02) Bridge Joint Type:"];
    let wearingSurfaceType = assetNumber["(108A) Wearing Surface Protection System: Wearing Surface"];
    let deckMembraneType = assetNumber["(108B) Wearing Surface Protection System: Deck Membrane"];
    let deckProtectionType = assetNumber["(108C) Wearing Surface Protection System: Deck Protection"];
    let deckStructureType = assetNumber["(107) Deck Structure Type:"];
    let scourCritical = assetNumber["(113) Scour Critical Bridges:"];
    let scourStatus = assetNumber["Scour Analysis Status:"];
    let scourDetermination = assetNumber["Scour Analysis Determination:"];
    let scourSafety = assetNumber["Scour Critical Safety Status:"];
    let approachSpans = assetNumber["(46) Number of Approach Spans:"];
    let mainSpans = assetNumber["(45) Number of Spans in Main Unit:"];
    let latValue = assetNumber["(16) Latitude:"];
    let longValue = assetNumber["(17) Longitude:"];
    let referencePost = assetNumber["Reference Post:"];
    let offsetValue = assetNumber["Offset:"];
    let facilityCarried = assetNumber["(7) Facility Carried:"];
    let featuresIntersected = assetNumber["(6) Features Intersected:"];
    let nstmRequired = assetNumber["(92AA) Critical Feature Inspection: NSTM Insp Required?"];
    let nstmFrequency = assetNumber["(92A) Critical Feature Inspection: NSTM Insp Frequency?"];
    let specialInspRequired = assetNumber["(92CC) Critical Feature Inspection: Special Insp Required?"];
    let specialInspFrequency = assetNumber["(92C) Critical Features: Special Insp Frequency?"];
    let underwaterInspRequired = assetNumber["(92BB) Critical Feature Inspection: Underwater Insp Required?"];
    let underwaterInspFrequency = assetNumber["(92B) Critical Feature Inspection: Underwater Insp Frequency?"];
    let brdgWidthCurbToCurb = assetNumber["(51) Brdg Rdwy Width Curb-To-Curb:"];
    let deckWidthOutToOut = assetNumber["(52) Deck Width, Out-To-Out:"];
    let structureLength = assetNumber["(49) Structure Length:"];
    let skewValue = assetNumber["(34) Skew:"];
    let hyperlink = assetNumber["Hyperlink"];
    let underfillValue = assetNumber["(62) Culverts:"];
    let membraneValue = assetNumber["(108B) Wearing Surface Protection System: Deck Membrane"];

    // Additional calculations
    let spanCount = approachSpans + mainSpans;
    let channelResponse = scourCritical === "N" ? "No" : "Yes";
    let monolithicResponse = wearingSurfaceType === 1 ? "Yes" : "No";
    let postedResponse = postedValue === "A" ? "No" : "Yes";
    let elementResponse = highwaySystem === 1 ? "Yes" : "No";

    const wearingSurfaceTypes = {
      1: "Monolithic",
      6: "Bituminous",
      5: "Epoxy Overlay",
      3: "Latex Modified",
      N: "None",
    };

    let wearingSurfaceResponse = wearingSurfaceTypes[wearingSurfaceType] || "Unknown";

    console.log(getGoogleMapsLink(latValue, longValue)); // Google Maps link
    updateMapButton(latValue, longValue);
    generateSummary(assetNumber);
    displaySummary(assetNumber);

    // alert(
    //   `Posted: ${postedResponse}\n` +
    //     `Element: ${elementResponse}\n` +
    //     `Channel: ${channelResponse}\n` +
    //     `Spans: ${spanCount}\n` +
    //     `Monolithic: ${monolithicResponse}\n` +
    //     `Wearing Surface: ${wearingSurfaceResponse}\n` +
    //     `ADT: ${adtValue}\n` +
    //     `ADT Year: ${adtYear}\n` +
    //     `Latitude: ${latValue}\n` +
    //     `Longitude: ${longValue}\n`
    // );

    // Update span text
    const searchID = document.getElementById("searchID");
    searchID.textContent = assetNumber["Asset Name"];

    // Remove any previous event listeners to avoid duplication
    searchID.replaceWith(searchID.cloneNode(true));
    const newSearchID = document.getElementById("searchID");

    // Add event listener to handle the click
    newSearchID.addEventListener("click", () => {
      // Open the hyperlink in a new tab
      window.open(assetNumber["Hyperlink"], "_blank");
    });
  }
});

// Summary
function generateSummary(assetNumber) {
  // Extracting necessary data from the asset object
  const assetName = assetNumber["Asset Name"];
  const inspectionDate = assetNumber["(90) Inspection Date:"];
  const invRoute = assetNumber["Inv Route #"];
  const adtValue = assetNumber["(29) Average Daily Traffic:"]?.toLocaleString() || "";
  const adtYear = " " + assetNumber["(30) Year of Average Daily Traffic:"];
  const highwaySystem = assetNumber["(104) Highway System of Inventory Route:"];
  const postedValue = assetNumber["(41) Structure Open/Posted/Closed:"];
  const mainMatType = assetNumber["(43A) Structure Type, Main: Kind of Material:"];
  const mainDesignType = assetNumber["(43B) Structure Type, Main: Type of Design:"];
  const approachMatType = assetNumber["(44A) Structure Type, Approach Spans: Kind of Material:"];
  const approachDesignType = assetNumber["(44B) Structure Type, Approach Spans: Type of Design"];
  const bridgeJointType = assetNumber["(58.02) Bridge Joint Type:"];
  const wearingSurfaceType = assetNumber["(108A) Wearing Surface Protection System: Wearing Surface"];
  const deckMembraneType = assetNumber["(108B) Wearing Surface Protection System: Deck Membrane"];
  const deckProtectionType = assetNumber["(108C) Wearing Surface Protection System: Deck Protection"];
  const deckStructureType = assetNumber["(107) Deck Structure Type:"];
  const scourCritical = assetNumber["(113) Scour Critical Bridges:"];
  const scourStatus = assetNumber["Scour Analysis Status:"];
  const scourDetermination = assetNumber["Scour Analysis Determination:"];
  const scourSafety = assetNumber["Scour Critical Safety Status:"];
  const scourVulnerability = assetNumber["(B.AP.03) Scour Vulnerability"] || "";
  const channelValue = assetNumber["(61) Channel / Channel Protection:"];
  const approachSpans = assetNumber["(46) Number of Approach Spans:"] || 0;
  const mainSpans = assetNumber["(45) Number of Spans in Main Unit:"];
  const latValue = assetNumber["(16) Latitude:"];
  const longValue = assetNumber["(17) Longitude:"];
  const referencePost = assetNumber["Reference Post:"];
  const offsetValue = assetNumber["Offset:"];
  const facilityCarried = assetNumber["(7) Facility Carried:"];
  const featuresIntersected = assetNumber["(6) Features Intersected:"];
  const nstmRequired = assetNumber["(92AA) Critical Feature Inspection: NSTM Insp Required?"];
  const nstmFrequency = assetNumber["(92A) Critical Feature Inspection: NSTM Insp Frequency?"];
  const specialInspRequired = assetNumber["(92CC) Critical Feature Inspection: Special Insp Required?"];
  const specialInspFrequency = assetNumber["(92C) Critical Features: Special Insp Frequency?"];
  const underwaterInspRequired = assetNumber["(92BB) Critical Feature Inspection: Underwater Insp Required?"];
  const underwaterInspFrequency = assetNumber["(92B) Critical Feature Inspection: Underwater Insp Frequency?"];
  const brdgWidthCurbToCurb = assetNumber["(51) Brdg Rdwy Width Curb-To-Curb:"];
  const deckWidthOutToOut = assetNumber["(52) Deck Width, Out-To-Out:"];
  const structureLength = assetNumber["(49) Structure Length:"];
  const skewValue = assetNumber["(34) Skew:"];
  const hyperlink = assetNumber["Hyperlink"];
  const underfillValue = assetNumber["(62) Culverts:"];
  const membraneValue = assetNumber["(108B) Wearing Surface Protection System: Deck Membrane"];

  const spanCount = approachSpans + mainSpans;

  // Calculate the "Posted" status
  const postedResponse = (postedValue === "A" ? "not posted" : "posted").toLowerCase();
  const elementResponse = (highwaySystem === "1" ? "requires an element level inspection" : "does not require an element level inspection").toLowerCase();
  const membraneResponse =
    underfillValue === "N" && membraneValue === "0" && (deckStructureType === "1" || deckStructureType === "2") && wearingSurfaceType === "6"
      ? "There is no protective membrane between the concrete deck and the bituminous wearing surface."
      : "There is a protective membrane between the concrete deck and the bituminous wearing surface.";

  // Structure Type, Main: Kind of Material/Design
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
  const mainMatTypesResponse = (mainMatTypes[mainMatType] || "").toLowerCase();

  // Structure Type, Approach Spans: Kind of Material/Design
  const approachMatTypes = mainMatTypes;
  const approachMatTypesResponse = (approachMatTypes[approachMatType] || "").toLowerCase();

  // Structure Type, Main: Type of Design/Construction
  const mainDesignTypes = {
    0: "Other",
    1: "Slab",
    2: "Multiple beam",
    3: "Girder and Floorbeam",
    4: "Tee Beam",
    5: "Multiple Box Beam",
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
  const mainDesignTypesResponse = (mainDesignTypes[mainDesignType] || "").toLowerCase();

  // Structure Type, Approach Spans: Type of Design/Construction
  const approachDesignTypes = mainDesignTypes;
  const approachDesignTypesResponse = (approachDesignTypes[approachDesignType] || "").toLowerCase();

  // Deck Structure Type
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
  const deckStructureTypesResponse = (deckStructureTypes[deckStructureType] || "").toLowerCase();

  // Type of Wearing Surface
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
  const wearingSurfaceTypesResponse = wearingSurfaceTypes[wearingSurfaceType] || "";

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
  const scourTypesResponse = scourTypes[scourVulnerability] || "";

  const approachSpansPlural = approachSpans === 1 ? "span" : "spans";
  const mainSpansPlural = mainSpans === 1 ? "span" : "spans";
  const ms2 = `The structure is a ${mainSpans}-span, ${mainMatTypesResponse} ${mainDesignTypesResponse} design ${deckStructureTypesResponse}.`;
  const ms3a = `The bridge has ${approachSpans} approach ${approachSpansPlural} and ${mainSpans} main ${mainSpansPlural}.`;
  const ms3b = `The approach spans have a ${approachMatTypesResponse} ${approachDesignTypesResponse} design.`;
  const ms3c = `The main structure has a ${mainSpans}-span, ${mainMatTypesResponse} ${mainDesignTypesResponse} design ${deckStructureTypesResponse}.`;
  const spansResponse = approachSpans > 0 ? `${ms3a} ${ms3b} ${ms3c}` : `${ms2}`;

  const adtResponse = adtValue ? `The ${adtYear} ADT is ${adtValue} vpd.` : "";
  const cardinalResponse = "All directions in this report are based on the roadway direction of travel and not compass readings. ";

  // const scourResponse = scourVulnerability ? `The scour vulnerability rating is ${scourVulnerability}.` : "";
  const channelResponse = channelValue === "N" ? `The bridge is not over water.` : "";

  // Inspection report sections
  // scour (over water), bituminous over deck with no membrane
  const generalPara = `${spansResponse} ${wearingSurfaceTypesResponse} ${membraneResponse} ${adtResponse} The structure is ${postedResponse} and ${elementResponse}. ${scourTypesResponse} ${channelResponse} ${cardinalResponse}`;
  const generalParaCleaned = generalPara.replace(/\s{2,}/g, " ");
  const generalNotes = `General Inspection Notes:\n${generalParaCleaned}\n\nMaintenance / Recommendations:\nThere are no open maintenance items.`;

  // Final notes is return as the answer to the generateSummary(assetNumber);
  return generalNotes;
}

// Put the summary in the textarea on the review page and copy it to the clipboard when that textarea is clicked
function displaySummary(assetNumber) {
  // Generate the report using the previous function
  const generalNotes = generateSummary(assetNumber);

  // Find the container where you want to insert the report
  const summaryTab = document.getElementById("review-summary-tab");

  // Insert the generated report into the <p> element
  if (summaryTab) {
    const contentContainer = document.getElementById("summary-textarea");
    contentContainer.value = generalNotes; // Insert generalNotes here
    // Call the expandTextarea function manually
    expandTextarea({ target: contentContainer }, "summary-textarea");

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

function updateMapButton(latValue, longValue) {
  let mapButton = document.querySelector(".buttonHeader");
  let url = getGoogleMapsLink(latValue, longValue);

  // Set the button to open the map link when clicked
  mapButton.onclick = function () {
    window.open(url, "_blank");
  };

  // Make the button visible
  mapButton.style.display = "inline-block"; // or "block" depending on layout
}
