// Uses defects.js
// The handleTabClick() function in the scripts.js handles the active comment builder tab

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
function adjustLocationOptions() {
  // Use the occurrenceVariance and positionVariance to adjust the location options dynamically
  populateOptions("location", dynamicCommentBuilder[`locations${occurrenceVariance}${positionVariance}`]);

  generateComment(); // Regenerate comment after adjusting location options
}

// Function to handle selecting an option (defect, symptom, severity, etc.)
function selectOption(category, element, value) {
  // Make sure the dynamicCommentBuilder is correctly set ////
  dynamicCommentBuilder = getDynamicCommentBuilder(currentTarget); //// Not necessarily needed

  if (element.classList.contains("selected")) {
    // Clear the varables
    if (category === "position") {
      positionVariance = "";
      selectedOptions.location = "";
      updateCommentBuilders(positionVariance1, positionVariance2);
      dynamicCommentBuilder = getDynamicCommentBuilder(currentTarget);
      populateOptions("location", dynamicCommentBuilder.locationsIsolated); // Populate the default positions list
      populateOptions("location", dynamicCommentBuilder[`locations${occurrenceVariance}`]); // Populate back to just isolated, some or widespread
    }

    if (category === "position1") {
      positionVariance1 = "";
      selectedOptions.location = "";
      updateCommentBuilders(positionVariance1, positionVariance2);
      dynamicCommentBuilder = getDynamicCommentBuilder(currentTarget);
      populateOptions("location", dynamicCommentBuilder[`locations${occurrenceVariance}${positionVariance}`]);
    }
    if (category === "position2") {
      positionVariance2 = "";
      selectedOptions.location = "";
      updateCommentBuilders(positionVariance1, positionVariance2);
      dynamicCommentBuilder = getDynamicCommentBuilder(currentTarget);
      populateOptions("location", dynamicCommentBuilder[`locations${occurrenceVariance}${positionVariance}`]);
    }
    // If the option is already selected
    element.classList.remove("selected"); // Deselect if already selected
    selectedOptions[category] = ""; // Remove the selection from the selectedOptions object

    // If defect is deselected, reset the severity list to default
    if (category === "defect") {
      populateOptions("defect", dynamicCommentBuilder.defects); // Populate the defect options with the default list

      // If no defect is selected it resets everything
      // This area needs to reset everything
      if (!selectedOptions.defect) {
        currentSeverityList = null; // Tracks the current severity list
        currentSymptomList = null; // Tracks the current symptom list
        positionVariance = ""; // Global variable to store the position variable
        positionVariance1 = ""; // Global variable to store the position1 variable
        positionVariance2 = ""; // Global variable to store the position2 variable
        occurrenceVariance = "Isolated"; // Global variable to store the occurrence variable
        dynamicCommentBuilder = getDynamicCommentBuilder(currentTarget);
        populateOptions("severity", dynamicCommentBuilder.severities); // Populate the severity list with the default severities
        populateOptions("symptom", dynamicCommentBuilder.symptoms); // Reset symptoms list to default
        populateOptions("occurrence", dynamicCommentBuilder.occurrences); // Populate occurrence options
        populateOptions("position", dynamicCommentBuilder.positions); // Populate the default positions list
        if (currentTarget === "deck-pg9" || currentTarget === "deck-pg10") {
          populateOptions("position1", dynamicCommentBuilder.positions1); // Populate the default positions list
          populateOptions("position2", dynamicCommentBuilder.positions2); // Populate the default positions list
        }
        populateOptions("location", dynamicCommentBuilder.locationsIsolated); // Populate the default positions list
        currentSeverityList = dynamicCommentBuilder.severities;
        currentSymptomList = dynamicCommentBuilder.symptoms;
        selectedOptions = { defect: "", symptoms: [], occurrence: "", severity: "", location: "", position: "", position1: "", position2: "" };
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
      } else if (value === "Wear") {
        if (currentSeverityList !== dynamicCommentBuilder.defectSeverities.Wear) {
          populateOptions("severity", dynamicCommentBuilder.defectSeverities.Wear);
          currentSeverityList = dynamicCommentBuilder.defectSeverities.Wear;
        }

        if (currentSymptomList !== dynamicCommentBuilder.defectSymptoms.Wear) {
          populateOptions("symptom", dynamicCommentBuilder.defectSymptoms.Wear);
          currentSymptomList = dynamicCommentBuilder.defectSymptoms.Wear;
        }
      } else if (value === "Delamination") {
        if (currentSeverityList !== dynamicCommentBuilder.defectSeverities.Delamination) {
          populateOptions("severity", dynamicCommentBuilder.defectSeverities.Delamination);
          currentSeverityList = dynamicCommentBuilder.defectSeverities.Delamination;
        }

        if (currentSymptomList !== dynamicCommentBuilder.defectSymptoms.Delamination) {
          populateOptions("symptom", dynamicCommentBuilder.defectSymptoms.Delamination);
          currentSymptomList = dynamicCommentBuilder.defectSymptoms.Delamination;
        }
      } else if (value === "Patching") {
        if (currentSeverityList !== dynamicCommentBuilder.defectSeverities.Patching) {
          populateOptions("severity", dynamicCommentBuilder.defectSeverities.Patching);
          currentSeverityList = dynamicCommentBuilder.defectSeverities.Patching;
        }

        if (currentSymptomList !== dynamicCommentBuilder.defectSymptoms.Patching) {
          populateOptions("symptom", dynamicCommentBuilder.defectSymptoms.Patching);
          currentSymptomList = dynamicCommentBuilder.defectSymptoms.Patching;
        }
      } else if (value === "Distortion") {
        if (currentSeverityList !== dynamicCommentBuilder.defectSeverities.Distortion) {
          populateOptions("severity", dynamicCommentBuilder.defectSeverities.Distortion);
          currentSeverityList = dynamicCommentBuilder.defectSeverities.Distortion;
        }

        if (currentSymptomList !== dynamicCommentBuilder.defectSymptoms.Distortion) {
          populateOptions("symptom", dynamicCommentBuilder.defectSymptoms.Distortion);
          currentSymptomList = dynamicCommentBuilder.defectSymptoms.Distortion;
        }
      } else if (value === "Crushing") {
        if (currentSeverityList !== dynamicCommentBuilder.defectSeverities.Crushing) {
          populateOptions("severity", dynamicCommentBuilder.defectSeverities.Crushing);
          currentSeverityList = dynamicCommentBuilder.defectSeverities.Crushing;
        }

        if (currentSymptomList !== dynamicCommentBuilder.defectSymptoms.Crushing) {
          populateOptions("symptom", dynamicCommentBuilder.defectSymptoms.Crushing);
          currentSymptomList = dynamicCommentBuilder.defectSymptoms.Crushing;
        }
      } else if (value === "Settlement") {
        if (currentSeverityList !== dynamicCommentBuilder.defectSeverities.Settlement) {
          populateOptions("severity", dynamicCommentBuilder.defectSeverities.Settlement);
          currentSeverityList = dynamicCommentBuilder.defectSeverities.Settlement;
        }

        if (currentSymptomList !== dynamicCommentBuilder.defectSymptoms.Settlement) {
          populateOptions("symptom", dynamicCommentBuilder.defectSymptoms.Settlement);
          currentSymptomList = dynamicCommentBuilder.defectSymptoms.Settlement;
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
      if (value === "Isolated") {
        occurrenceVariance = "Isolated";
      } else if (value === "Some") {
        occurrenceVariance = "Some";
      } else {
        occurrenceVariance = "Widespread";
      }
      adjustLocationOptions(); // Adjust location options based on the selected occurrence
    }

    if (category === "position1") {
      if (positionVariance1 !== value) {
        positionVariance1 = " In " + value;
        selectedOptions.location = "";
        updateCommentBuilders(positionVariance1, positionVariance2);
        dynamicCommentBuilder = getDynamicCommentBuilder(currentTarget);
        populateOptions("location", dynamicCommentBuilder[`locations${occurrenceVariance}${positionVariance}`]);
      }
    }
    if (category === "position2") {
      if (positionVariance2 !== value) {
        positionVariance2 = " At " + value;
        selectedOptions.location = "";
        updateCommentBuilders(positionVariance1, positionVariance2);
        dynamicCommentBuilder = getDynamicCommentBuilder(currentTarget);
        populateOptions("location", dynamicCommentBuilder[`locations${occurrenceVariance}${positionVariance}`]);
      }
    }

    // Adjust location options when a position is selected
    if (category === "position") {
      selectedOptions.location = "";
      if (value === "North") {
        positionVariance = "North";
      }
      if (value === "South") {
        positionVariance = "South";
      }
      if (value === "East") {
        positionVariance = "East";
      }
      if (value === "West") {
        positionVariance = "West";
      }
      if (value === "Plural") {
        positionVariance = "Plural";
      }
      adjustLocationOptions(); // Adjust location options based on the selected position
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
    if (currentTarget === "deck-pg10") {
      document.getElementById(`generated-comment-bridge-deck-pg10`).textContent = "Select options to generate a comment."; // Show default message if options are missing
    }
    if (currentTarget === "approach-pg6") {
      document.getElementById(`generated-comment-bridge-approach-pg6`).textContent = "Select options to generate a comment."; // Show default message if options are missing
    }
    return; // Return early if required selections are missing
  }

  // Build the comment based on selected options
  let comment = `There is ${occurrence.toLowerCase()} ${severity.toLowerCase()} ${defect.toLowerCase()}`;
  if (symptom) comment += ` with ${symptom.toLowerCase()}`; // Add symptom to the comment if it's has a value
  if (location) comment += ` ${location.toLowerCase()}`; // Add location to the comment if it's has a value
  comment += "."; // End the comment with a period

  // Display the generated comment based on the current target (deck or approach)
  if (currentTarget === "deck-pg9") {
    document.getElementById(`generated-comment-bridge-deck-pg9`).textContent = comment; // Display the comment for deck page
  }
  if (currentTarget === "deck-pg10") {
    document.getElementById(`generated-comment-bridge-deck-pg10`).textContent = comment; // Display the comment for deck page
  }
  if (currentTarget === "approach-pg6") {
    document.getElementById(`generated-comment-bridge-approach-pg6`).textContent = comment; // Display the comment for approach page
  }

  navigator.clipboard.writeText(comment + " "); // Copy the comment to the clipboard
}

// Update comment builder object
function updateCommentBuilders(posVar1, posVar2) {
  commentBuilderDeck = createCommentBuilderDeck(posVar1, posVar2);
  commentBuilderWearing = createCommentBuilderWearing(posVar1, posVar2);
  commentBuilderApproach = createCommentBuilderApproach(posVar1, posVar2);
}

// Update the dynamic comment builder
function getDynamicCommentBuilder(currentTarget) {
  if (currentTarget === "deck-pg9") {
    return commentBuilderDeck;
  }
  if (currentTarget === "deck-pg10") {
    return commentBuilderWearing;
  }
  if (currentTarget === "approach-pg6") {
    return commentBuilderApproach;
  }
  return null; // Default case if none match
}

// Initialize function to populate the default options (without calling it on page load)
// This is called when a comment builder tab is clicked
document.addEventListener("DOMContentLoaded", function () {
  // Attach event listener to the bridge-deck button
  const bridgeDeckButton = document.querySelector("button[data-target='bridge-deck-pg9']");
  if (bridgeDeckButton) {
    bridgeDeckButton.addEventListener("click", function () {
      currentTarget = "deck-pg9"; // Set the variable to "deck-pg9"
      dynamicCommentBuilder = commentBuilderDeck;
      initialize(); // Reset options when the bridge-deck button is clicked
    });
  }

  const bridgeWearingButton = document.querySelector("button[data-target='bridge-deck-pg10']");
  if (bridgeWearingButton) {
    bridgeWearingButton.addEventListener("click", function () {
      currentTarget = "deck-pg10"; // Set the variable to "deck-pg10"
      dynamicCommentBuilder = commentBuilderWearing;
      initialize(); // Reset options when the bridge-deck button is clicked
    });
  }

  // Attach event listener to the bridge-approach button
  const bridgeApproachButton = document.querySelector("button[data-target='bridge-approach-pg6']");
  if (bridgeApproachButton) {
    bridgeApproachButton.addEventListener("click", function () {
      currentTarget = "approach-pg6"; // Set the variable to "approach-pg6"
      dynamicCommentBuilder = commentBuilderApproach;
      initialize(); // Reset options when the bridge-approach button is clicked
    });
  }

  // Initialize function to populate the default options (without calling it on page load)
  function initialize() {
    currentSeverityList = null; // Tracks the current severity list
    currentSymptomList = null; // Tracks the current symptom list
    positionVariance = ""; // Global variable to store the position variable
    positionVariance1 = ""; // Global variable to store the position1 variable
    positionVariance2 = ""; // Global variable to store the position2 variable
    occurrenceVariance = "Isolated"; // Global variable to store the occurrence variable
    if (dynamicCommentBuilder) {
      populateOptions("defect", dynamicCommentBuilder.defects); // Populate defect options
      populateOptions("symptom", dynamicCommentBuilder.symptoms); // Populate symptom options
      populateOptions("occurrence", dynamicCommentBuilder.occurrences); // Populate occurrence options
      populateOptions("severity", dynamicCommentBuilder.severities); // Populate the default severity list
      populateOptions("position", dynamicCommentBuilder.positions); // Populate the default positions list
      if (currentTarget === "deck-pg9" || currentTarget === "deck-pg10") {
        populateOptions("position1", dynamicCommentBuilder.positions1); // Populate the default positions list
        populateOptions("position2", dynamicCommentBuilder.positions2); // Populate the default positions list
      }
      populateOptions("location", dynamicCommentBuilder.locationsIsolated); // Populate the default positions list
      selectedOptions = { defect: "", symptoms: [], occurrence: "", severity: "", location: "", position: "", position1: "", position2: "" };
      generateComment(); // Regenerate the comment after a new option is selected
    } else {
      console.error("dynamicCommentBuilder is not defined");
    }
  }
});
