let currentTarget = ""; // Global variable to store the target string
let dynamicCommentBuilder; // Global variable for the dynamically selected commentBuilder
let currentSeverityList = null; // Tracks the current severity list
let currentSymptomList = null; // Tracks the current symptom list
let positionVariance = ""; // Global variable to store the position variable
let occurrenceVariance = "Isolated"; // Global variable to store the occurrence variable

// Object holding predefined options for defects, symptoms, occurrences, severities, and locations
const commentBuilderDeck = {
  defects: ["Abrasion", "Wear", "Cracking", "Corrosion", "Delamination", "Patching", "Spalling", "Distortion", "Settlement"],
  symptoms: ["Efflorescence", "Rust Staining", "Delamination", "Exposed Rebar", "Section Loss"],
  occurrences: ["Isolated", "Some", "Widespread"],
  severities: ["Inherent", "Minor", "Moderate", "Major", "Severe"],

  // Specific locations for defects based on occurrence types
  locationsIsolated: ["At The Expansion Joint", "Near Center Span", "In The Coping", "In The Underside Of The Deck", "In The Top Of The Deck"],
  locationsSome: ["Along The Expansion Joint", "Near Center Span", "In The Coping", "In The Underside Of The Deck", "In The Top Of The Deck", "In Several Areas"],
  locationsWidespread: ["Along The Expansion Joint", "Near Center Span", "In The Coping", "In The Underside Of The Deck", "In The Top Of The Deck", "Scattered Throughout"],

  // For adjusting the location lists
  positions: ["North", "South", "East", "West", "Plural"],
  locationsIsolatedNorth: ["At The North Expansion Joint", "Near Center Span", "In The North Coping", "In The Underside Of The Deck", "In The Top Of The Deck"],
  locationsSomeNorth: ["Along The North Expansion Joint", "Near Center Span", "In The North Coping", "In The Underside Of The Deck", "In The Top Of The Deck", "In Several Areas"],
  locationsWidespreadNorth: [
    "Along The North Expansion Joint",
    "Near Center Span",
    "In The North Coping",
    "In The Underside Of The Deck",
    "In The Top Of The Deck",
    "Scattered Throughout",
  ],
  locationsIsolatedSouth: ["At The South Expansion Joint", "Near Center Span", "In The South Coping", "In The Underside Of The Deck", "In The Top Of The Deck"],
  locationsSomeSouth: ["Along The South Expansion Joint", "Near Center Span", "In The South Coping", "In The Underside Of The Deck", "In The Top Of The Deck", "In Several Areas"],
  locationsWidespreadSouth: [
    "Along The South Expansion Joint",
    "Near Center Span",
    "In The South Coping",
    "In The Underside Of The Deck",
    "In The Top Of The Deck",
    "Scattered Throughout",
  ],
  locationsIsolatedEast: ["At The East Expansion Joint", "Near Center Span", "In The East Coping", "In The Underside Of The Deck", "In The Top Of The Deck"],
  locationsSomeEast: ["Along The East Expansion Joint", "Near Center Span", "In The East Coping", "In The Underside Of The Deck", "In The Top Of The Deck", "In Several Areas"],
  locationsWidespreadEast: [
    "Along The East Expansion Joint",
    "Near Center Span",
    "In The East Coping",
    "In The Underside Of The Deck",
    "In The Top Of The Deck",
    "Scattered Throughout",
  ],
  locationsIsolatedWest: ["At The West Expansion Joint", "Near Center Span", "In The West Coping", "In The Underside Of The Deck", "In The Top Of The Deck"],
  locationsSomeWest: ["Along The West Expansion Joint", "Near Center Span", "In The West Coping", "In The Underside Of The Deck", "In The Top Of The Deck", "In Several Areas"],
  locationsWidespreadWest: [
    "Along The West Expansion Joint",
    "Near Center Span",
    "In The West Coping",
    "In The Underside Of The Deck",
    "In The Top Of The Deck",
    "Scattered Throughout",
  ],
  locationsIsolatedPlural: ["At The Expansion Joints", "Near Center Span", "In The Copings", "In The Underside Of The Deck", "In The Top Of The Deck"],
  locationsSomePlural: ["Along The Expansion Joints", "Near Center Span", "In The Copings", "In The Underside Of The Deck", "In The Top Of The Deck", "In Several Areas"],
  locationsWidespreadPlural: ["Along The Expansion Joints", "Near Center Span", "In The Copings", "In The Underside Of The Deck", "In The Top Of The Deck", "Scattered Throughout"],

  // Defect-specific severities
  defectSeverities: {
    Cracking: ["Inherent", "Hairline", "Minor-Width", "Minor- To Moderate-Width", "Moderate-Width", "Wide-Width", "Major", "Severe"],
    Spalling: ["Surface", "Shallow-Depth", "Minor", "Moderate", "Deep", "Heavy", "Severe"],
    Corrosion: ["Surface", "Light", "Minor", "Moderate", "Major", "Heavy"],
  },

  // Defect-specific symptoms
  defectSymptoms: {
    Cracking: ["Efflorescence", "Rust Staining", "Delamination"],
    Spalling: ["Delamination", "Exposed Rebar", "Section Loss"],
    Corrosion: ["Rust Staining", "Pitting", "Peeling", "Section Loss"],
  },

  // Defect-specific variations (types of cracking, spalling, etc.)
  defectVariations: {
    Cracking: ["Cracking", "Longitudinal Cracking", "Transverse Cracking", "Random Cracking", "Vertical Cracking", "Horizontal Cracking", "Diagonal Cracking", "Map Cracking"],
    Spalling: ["Spalling", "Surface Spalling", "Shallow-Depth Spalling", "Deep Spalling", "Heavy Spalling"],
    Corrosion: ["Corrosion", "Chalking", "Surface Dulling"],
  },
};

const commentBuilderApproach = {
  defects: ["Abrasion", "Wear", "Cracking", "Corrosion", "Delamination", "Patching", "Spalling", "Distortion", "Settlement"],
  symptoms: ["Efflorescence", "Rust Staining", "Delamination", "Exposed Rebar", "Section Loss"],
  occurrences: ["Isolated", "Some", "Widespread"],
  severities: ["Inherent", "Minor", "Moderate", "Major", "Severe"],

  // Specific locations for defects based on occurrence types
  locationsIsolated: ["At The Expansion Joint", "At The Terminal Joint", "In The Approach Slab"],
  locationsSome: ["Along The Expansion Joint", "Along The Terminal Joint", "In The Approach Slab", "In The Approach Slabs"],
  locationsWidespread: ["Along The Expansion Joint", "Along The Terminal Joint", "In The Approach Slab", "In The Approach Slabs"],

  // For adjusting the location lists
  positions: ["North", "South", "East", "West", "Plural"],
  locationsIsolatedNorth: ["At The North Expansion Joint", "Near Center Span", "In The North Coping", "In The Underside Of The Deck", "In The Top Of The Deck"],
  locationsSomeNorth: ["Along The North Expansion Joint", "Near Center Span", "In The North Coping", "In The Underside Of The Deck", "In The Top Of The Deck", "In Several Areas"],
  locationsWidespreadNorth: [
    "Along The North Expansion Joint",
    "Near Center Span",
    "In The North Coping",
    "In The Underside Of The Deck",
    "In The Top Of The Deck",
    "Scattered Throughout",
  ],
  locationsIsolatedSouth: ["At The South Expansion Joint", "Near Center Span", "In The South Coping", "In The Underside Of The Deck", "In The Top Of The Deck"],
  locationsSomeSouth: ["Along The South Expansion Joint", "Near Center Span", "In The South Coping", "In The Underside Of The Deck", "In The Top Of The Deck", "In Several Areas"],
  locationsWidespreadSouth: [
    "Along The South Expansion Joint",
    "Near Center Span",
    "In The South Coping",
    "In The Underside Of The Deck",
    "In The Top Of The Deck",
    "Scattered Throughout",
  ],
  locationsIsolatedEast: ["At The East Expansion Joint", "Near Center Span", "In The East Coping", "In The Underside Of The Deck", "In The Top Of The Deck"],
  locationsSomeEast: ["Along The East Expansion Joint", "Near Center Span", "In The East Coping", "In The Underside Of The Deck", "In The Top Of The Deck", "In Several Areas"],
  locationsWidespreadEast: [
    "Along The East Expansion Joint",
    "Near Center Span",
    "In The East Coping",
    "In The Underside Of The Deck",
    "In The Top Of The Deck",
    "Scattered Throughout",
  ],
  locationsIsolatedWest: ["At The West Expansion Joint", "Near Center Span", "In The West Coping", "In The Underside Of The Deck", "In The Top Of The Deck"],
  locationsSomeWest: ["Along The West Expansion Joint", "Near Center Span", "In The West Coping", "In The Underside Of The Deck", "In The Top Of The Deck", "In Several Areas"],
  locationsWidespreadWest: [
    "Along The West Expansion Joint",
    "Near Center Span",
    "In The West Coping",
    "In The Underside Of The Deck",
    "In The Top Of The Deck",
    "Scattered Throughout",
  ],
  locationsIsolatedPlural: ["At The Expansion Joints", "Near Center Span", "In The Copings", "In The Underside Of The Deck", "In The Top Of The Deck"],
  locationsSomePlural: ["Along The Expansion Joints", "Near Center Span", "In The Copings", "In The Underside Of The Deck", "In The Top Of The Deck", "In Several Areas"],
  locationsWidespreadPlural: ["Along The Expansion Joints", "Near Center Span", "In The Copings", "In The Underside Of The Deck", "In The Top Of The Deck", "Scattered Throughout"],

  // Defect-specific severities
  defectSeverities: {
    Cracking: ["Inherent", "Hairline", "Minor-Width", "Minor- To Moderate-Width", "Moderate-Width", "Wide-Width", "Major", "Severe"],
    Spalling: ["Surface", "Shallow-Depth", "Minor", "Moderate", "Deep", "Heavy", "Severe"],
    Corrosion: ["Surface", "Light", "Minor", "Moderate", "Major", "Heavy"],
  },

  // Defect-specific symptoms
  defectSymptoms: {
    Cracking: ["Efflorescence", "Rust Staining", "Delamination"],
    Spalling: ["Delamination", "Exposed Rebar", "Section Loss"],
    Corrosion: ["Rust Staining", "Pitting", "Peeling", "Section Loss"],
  },

  // Defect-specific variations (types of cracking, spalling, etc.)
  defectVariations: {
    Cracking: ["Cracking", "Longitudinal Cracking", "Transverse Cracking", "Random Cracking", "Vertical Cracking", "Horizontal Cracking", "Diagonal Cracking", "Map Cracking"],
    Spalling: ["Spalling", "Surface Spalling", "Shallow-Depth Spalling", "Deep Spalling", "Heavy Spalling"],
    Corrosion: ["Corrosion", "Chalking", "Surface Dulling"],
  },
};

// Object to keep track of selected options (defects, symptoms, etc.)
let selectedOptions = { defect: "", symptoms: [], occurrence: "", severity: "", location: "", position: "" }; // Initialize selected options object with symptoms as an array

// Function to populate the options for a given category (e.g., defects, symptoms, etc.)
function populateOptions(category, options) {
  const container = document.getElementById(`${category}-options-bridge-${currentTarget}`); // Get the container for the specific category
  container.innerHTML = ""; // Clear existing options in the container

  // Create a div element for each option and attach event listeners
  options.forEach((option) => {
    const div = document.createElement("div"); // Create a new div for each option
    div.classList.add("comment-builder-option"); // Add a class for styling
    div.textContent = option; // Set the text content to the option name
    div.onclick = () => selectOption(category, div, option); // Handle option selection when clicked
    container.appendChild(div); // Append the option to the container
  });
}

// Function to adjust location options based on the occurrence (Isolated, Some, Widespread)
function adjustLocationOptions(occurrence) {
  if (occurrence === "Isolated") populateOptions("location", dynamicCommentBuilder.locationsIsolated); // If occurrence is "Isolated", show specific locations
  else if (occurrence === "Some") populateOptions("location", dynamicCommentBuilder.locationsSome); // If occurrence is "Some", show locations for some occurrences
  else populateOptions("location", dynamicCommentBuilder.locationsWidespread); // If occurrence is "Widespread", show widespread locations
  generateComment(); // Regenerate comment after adjusting location options
}

// Function to handle selecting an option (defect, symptom, severity, etc.)
function selectOption(category, element, value) {
  if (element.classList.contains("selected")) {
    // If the option is already selected
    element.classList.remove("selected"); // Deselect if already selected
    selectedOptions[category] = ""; // Remove the selection from the selectedOptions object

    // If defect is deselected, reset the severity list to default
    if (category === "defect") {
      populateOptions("defect", dynamicCommentBuilder.defects); // Populate the defect options with the default list

      // If no defect is selected it resets everything
      if (!selectedOptions.defect) {
        populateOptions("severity", dynamicCommentBuilder.severities); // Populate the severity list with the default severities
        populateOptions("symptom", dynamicCommentBuilder.symptoms); // Reset symptoms list to default
        populateOptions("occurrence", dynamicCommentBuilder.occurrences); // Populate occurrence options
        populateOptions("position", dynamicCommentBuilder.positions); // Populate the default positions list
        adjustLocationOptions("Isolated"); // Ensures locations are set based on the default "Isolated" occurrence
        currentSeverityList = dynamicCommentBuilder.severities;
        currentSymptomList = dynamicCommentBuilder.symptoms;
        selectedOptions = { defect: "", symptoms: [], occurrence: "", severity: "", location: "", position: "" };
        generateComment(); // Regenerate the comment after a new option is selected
      }
    }
  } else {
    // Deselect any previously selected options in the same category
    document.querySelectorAll(`#${category}-options-bridge-${currentTarget} .comment-builder-option`).forEach((opt) => opt.classList.remove("selected")); // Remove the "selected" class from other options
    element.classList.add("selected"); // Add the "selected" class to the clicked option
    selectedOptions[category] = value; // Update the selectedOptions object with the chosen value

    // Handle defect variation and severity changes based on selected defect
    if (category === "defect") {
      // Update defect variations based on the selected defect
      if (dynamicCommentBuilder.defectVariations[value]) {
        populateOptions("defect", dynamicCommentBuilder.defectVariations[value]); // Populate the defect options with the selected defect's variations
      }

      // Update severity and symptoms list based on the selected defect type
      if (value === "Cracking") {
        // Only update if the lists aren't already set to Cracking's values
        if (currentSeverityList !== dynamicCommentBuilder.defectSeverities.Cracking) {
          populateOptions("severity", dynamicCommentBuilder.defectSeverities.Cracking);
          currentSeverityList = dynamicCommentBuilder.defectSeverities.Cracking;
        }

        if (currentSymptomList !== dynamicCommentBuilder.defectSymptoms.Cracking) {
          populateOptions("symptom", dynamicCommentBuilder.defectSymptoms.Cracking);
          currentSymptomList = dynamicCommentBuilder.defectSymptoms.Cracking;
        }
      } else if (value === "Spalling") {
        if (currentSeverityList !== dynamicCommentBuilder.defectSeverities.Spalling) {
          populateOptions("severity", dynamicCommentBuilder.defectSeverities.Spalling);
          currentSeverityList = dynamicCommentBuilder.defectSeverities.Spalling;
        }

        if (currentSymptomList !== dynamicCommentBuilder.defectSymptoms.Spalling) {
          populateOptions("symptom", dynamicCommentBuilder.defectSymptoms.Spalling);
          currentSymptomList = dynamicCommentBuilder.defectSymptoms.Spalling;
        }
      } else if (value === "Corrosion") {
        if (currentSeverityList !== dynamicCommentBuilder.defectSeverities.Corrosion) {
          populateOptions("severity", dynamicCommentBuilder.defectSeverities.Corrosion);
          currentSeverityList = dynamicCommentBuilder.defectSeverities.Corrosion;
        }

        if (currentSymptomList !== dynamicCommentBuilder.defectSymptoms.Corrosion) {
          populateOptions("symptom", dynamicCommentBuilder.defectSymptoms.Corrosion);
          currentSymptomList = dynamicCommentBuilder.defectSymptoms.Corrosion;
        }
      }

      // Ensure the selected defect option is highlighted
      setTimeout(() => {
        document.querySelectorAll(`#defect-options-bridge-${currentTarget} .comment-builder-option`).forEach((opt) => {
          if (opt.textContent === value) opt.classList.add("selected"); // Highlight the selected defect
        });
      }, 0);
    }

    // Adjust location options when an occurrence is selected
    if (category === "occurrence") {
      adjustLocationOptions(value); // Adjust location options based on the selected occurrence
    }
  }

  generateComment(); // Regenerate the comment after a new option is selected
}

// Function to generate the comment based on the selected options
function generateComment() {
  const { defect, symptom, occurrence, severity, location } = selectedOptions; // Extract selected options from the selectedOptions object
  if (!defect || !occurrence || !severity) {
    // If defect, occurrence, or severity is not selected
    if (currentTarget === "deck-pg9") {
      document.getElementById(`generated-comment-bridge-deck-pg9`).textContent = "Select options to generate a comment."; // Show default message if options are missing
    }
    if (currentTarget === "approach-pg6") {
      document.getElementById(`generated-comment-bridge-approach-pg6`).textContent = "Select options to generate a comment."; // Show default message if options are missing
    }
    return; // Return early if required selections are missing
  }

  // Build the comment based on selected options
  let comment = `There is ${occurrence.toLowerCase()} ${severity.toLowerCase()} ${defect.toLowerCase()}`;
  if (symptom) comment += ` with ${symptom.toLowerCase()}`; // Add symptom to the comment if it's selected
  if (location) comment += ` ${location.toLowerCase()}`; // Add location to the comment if it's selected
  comment += "."; // End the comment with a period

  // Display the generated comment based on the current target (deck or approach)
  if (currentTarget === "deck-pg9") {
    document.getElementById(`generated-comment-bridge-deck-pg9`).textContent = comment; // Display the comment for deck page
  }
  if (currentTarget === "approach-pg6") {
    document.getElementById(`generated-comment-bridge-approach-pg6`).textContent = comment; // Display the comment for approach page
  }

  navigator.clipboard.writeText(comment + " "); // Copy the comment to the clipboard
}

// Initialize function to populate the default options (without calling it on page load)
document.addEventListener("DOMContentLoaded", function () {
  // Initialize function to populate the default options (without calling it on page load)
  function initialize() {
    if (dynamicCommentBuilder) {
      populateOptions("defect", dynamicCommentBuilder.defects); // Populate defect options
      populateOptions("symptom", dynamicCommentBuilder.symptoms); // Populate symptom options
      populateOptions("occurrence", dynamicCommentBuilder.occurrences); // Populate occurrence options
      populateOptions("severity", dynamicCommentBuilder.severities); // Populate the default severity list
      populateOptions("position", dynamicCommentBuilder.positions); // Populate the default positions list
      adjustLocationOptions("Isolated"); // Ensures locations are set based on the default "Isolated" occurrence
      selectedOptions = { defect: "", symptoms: [], occurrence: "", severity: "", location: "", position: "" };
      generateComment(); // Regenerate the comment after a new option is selected
    } else {
      console.error("dynamicCommentBuilder is not defined");
    }
  }

  // Attach event listener to the bridge-deck button
  const bridgeDeckButton = document.querySelector("button[data-target='bridge-deck-pg9']");
  if (bridgeDeckButton) {
    bridgeDeckButton.addEventListener("click", function () {
      currentTarget = "deck-pg9"; // Set the variable to "deck-pg9"
      dynamicCommentBuilder = commentBuilderDeck;
      console.log(currentTarget); // You can now use this variable anywhere
      initialize(); // Reset options when the bridge-deck button is clicked
    });
  }

  // Attach event listener to the bridge-approach button
  const bridgeApproachButton = document.querySelector("button[data-target='bridge-approach-pg6']");
  if (bridgeApproachButton) {
    bridgeApproachButton.addEventListener("click", function () {
      currentTarget = "approach-pg6"; // Set the variable to "approach-pg6"
      dynamicCommentBuilder = commentBuilderApproach;
      console.log(currentTarget); // You can now use this variable anywhere
      initialize(); // Reset options when the bridge-approach button is clicked
    });
  }
});
