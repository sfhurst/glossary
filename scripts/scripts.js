const dataDate = "02/27/2025"; // Date iTAMS data was output
document.querySelector("#asset-updated").textContent = `These are populated when an asset number is searched. The asset data was last updated on ${dataDate}.`;

// Table of Contents
// :::: (HTML Injection)
// :::: (Text Content Insertion)
// :::: (Copy To Clipboard)
// :::: (Textarea Expansion)
// :::: (Page Button Clicks)
// :::: (Rating Table Clicks)
// :::: (Maintenance/Element Clicks)
// :::: (Console Logs)

// :::: (HTML Injection) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ::: ------------------------------ Helper function to safely insert HTML into a container (HTML Injection) ------------------------------
function setSafeHTML(container, unsafeHTML) {
  if (container) {
    // Sanitize the HTML to avoid XSS attacks
    const safeHTML = DOMPurify.sanitize(unsafeHTML);
    container.innerHTML = safeHTML;
    console.log("Sanitization complete and inserted.");
  } else {
    console.log("Container not found.");
  }
}

// ::: ------------------------------ Insert the alignment pg1 commentary into the content container (HTML Injection) ------------------------------
// This is still generated in the index.html and can be deleted. It isn't necessary to sanitize page load items, only textarea items that get used in other areas.
// This should be deleted once the concept is completed for textareas.
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("#bridge-alignment-pg1 .content-container-paragraphs");

  // Use the setSafeHTML function to insert sanitized content
  const unsafeHTML = bridgeComponents[0].commentary; // The raw HTML content to be inserted
  // container.innerHTML = unsafeHTML;
  setSafeHTML(container, unsafeHTML); // Insert sanitized HTML into the container
});

// :::: (Text Content Insertion) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ::: ------------------------------ Populate glossary with defect definitions (Text Content Insertion)  ------------------------------
function populateGlossaryDefects() {
  const container = document.querySelector("#glossary-defects-tab .glossary-numeric-ratings-container");

  // Loop through each defect definition and create a glossary card for each
  Object.values(defectDefinitions).forEach((defect) => {
    // Create a container for each glossary card
    const card = document.createElement("div");
    card.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header = document.createElement("div");
    header.classList.add("glossary-card-header");
    header.textContent = defect.term;

    // Create a paragraph for the card with the defect definition
    const paragraph = document.createElement("p");
    paragraph.classList.add("glossary-card-paragraph");
    paragraph.textContent = defect.definition;

    // Append the header and paragraph to the card container
    card.appendChild(header);
    card.appendChild(paragraph);

    // Append the card to the glossary container
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", populateGlossaryDefects);

// ::: ------------------------------ Populate glossary with bridge definitions (Text Content Insertion)  ------------------------------
function populateGlossaryBridge() {
  const container2 = document.querySelector("#glossary-bridge-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term and create a glossary card for each
  Object.values(glossaryTerms).forEach((defect2) => {
    // Create the card container
    const card2 = document.createElement("div");
    card2.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header2 = document.createElement("div");
    header2.classList.add("glossary-card-header");
    header2.textContent = defect2.term;

    // Create the paragraph for the card with the defect definition
    const paragraph2 = document.createElement("p");
    paragraph2.classList.add("glossary-card-paragraph");
    paragraph2.textContent = defect2.definition;

    // Assemble the card elements
    card2.appendChild(header2);
    card2.appendChild(paragraph2);
    container2.appendChild(card2);
  });
}

document.addEventListener("DOMContentLoaded", populateGlossaryBridge);

// ::: ------------------------------ Populate glossary with bridge definitions (Text Content Insertion)  ------------------------------
function populateGlossaryCulvert() {
  const container2 = document.querySelector("#glossary-culvert-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term and create a glossary card for each
  Object.values(culvertTerms).forEach((defect2) => {
    // Create the card container
    const card2 = document.createElement("div");
    card2.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header2 = document.createElement("div");
    header2.classList.add("glossary-card-header");
    header2.textContent = defect2.term;

    // Create the paragraph for the card with the defect definition
    const paragraph2 = document.createElement("p");
    paragraph2.classList.add("glossary-card-paragraph");
    paragraph2.textContent = defect2.definition;

    // Assemble the card elements
    card2.appendChild(header2);
    card2.appendChild(paragraph2);
    container2.appendChild(card2);
  });
}

document.addEventListener("DOMContentLoaded", populateGlossaryCulvert);

// ::: ------------------------------ Populate glossary with wall definitions (Text Content Insertion)  ------------------------------
function populateGlossaryWall() {
  const container3 = document.querySelector("#glossary-wall-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term and create a glossary card for each
  Object.values(wallTerms).forEach((defect3) => {
    // Create the card container
    const card3 = document.createElement("div");
    card3.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header3 = document.createElement("div");
    header3.classList.add("glossary-card-header");
    header3.textContent = defect3.term;

    // Create the paragraph for the card with the defect definition
    const paragraph3 = document.createElement("p");
    paragraph3.classList.add("glossary-card-paragraph");
    paragraph3.textContent = defect3.definition;

    // Assemble the card elements
    card3.appendChild(header3);
    card3.appendChild(paragraph3);
    container3.appendChild(card3);
  });
}

document.addEventListener("DOMContentLoaded", populateGlossaryWall);

// ::: ------------------------------ Populate glossary with counties (Text Content Insertion)  ------------------------------
// This is still generated in the index.html and can be deleted.
// Function to populate the county glossary
function populateCountyGlossary() {
  const container = document.querySelector("#glossary-county-tab .glossary-card-paragraph");

  if (!container) {
    console.error("Glossary container not found.");
    return;
  }

  // Clear any existing content
  container.innerHTML = ""; // Not ideal, you can remove this if you prefer to create elements directly

  // Find the object with variable: "countyCode"
  const countyObject = bridgeData.find((obj) => obj.variable === "countyCode");

  // If found, populate with county data
  if (countyObject && Array.isArray(countyObject.values)) {
    countyObject.values.forEach(({ code, description }) => {
      // Create a div for each county item
      const countyItem = document.createElement("div");
      countyItem.classList.add("county-item");

      // Create a span for the code
      const codeSpan = document.createElement("span");
      codeSpan.classList.add("county-code");
      codeSpan.textContent = code;

      // Create a text node for " - "
      const dashText = document.createTextNode(" - ");

      // Create a span for the description
      const descriptionSpan = document.createElement("span");
      descriptionSpan.classList.add("county-description");
      descriptionSpan.textContent = description;

      // Append the code, dash, and description spans to the county item
      countyItem.appendChild(codeSpan);
      countyItem.appendChild(dashText); // Append the dash text node
      countyItem.appendChild(descriptionSpan);

      // Append the county item to the container
      container.appendChild(countyItem);
    });
  } else {
    console.error("No matching object with 'variable: countyCode' found in bridgeData.");
  }
}

// Call the function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", populateCountyGlossary);

// ::: ------------------------------ Populate example comments for bridge components (Text Content Insertion)  ------------------------------
function updateExampleComments() {
  bridgeComponents.forEach((component) => {
    const commentsContainer = document.getElementById(component.example_comments_page_id);

    if (commentsContainer && component.example_comments) {
      // Find or create the content container for comments
      let contentContainer = commentsContainer.querySelector(".content-container-paragraphs");
      if (!contentContainer) {
        contentContainer = document.createElement("div");
        contentContainer.classList.add("content-container-paragraphs");
        commentsContainer.appendChild(contentContainer);
      }

      // Clear existing content and add new comments
      contentContainer.innerHTML = "";
      component.example_comments.forEach((comment) => {
        const p = document.createElement("p");
        p.classList.add("content-container-comment-lines");
        p.textContent = comment.trim();
        contentContainer.appendChild(p);
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", updateExampleComments);

// ::: ------------------------------ Populate review div based on textarea comment (Text Content Insertion)  ------------------------------
function handleTextareaChange(event) {
  const textarea = event.target; // Get the changed textarea element

  // Capture the data-category from the clicked textarea's data-category attribute
  const dataCategory = textarea.getAttribute("data-category");

  // Capture the value (contents) of the textarea
  const textareaContents = textarea.value;

  // Find the div with the matching data-category within #bridge-review-tab
  const reviewTab = document.getElementById("bridge-review-tab");
  const targetDiv = reviewTab.querySelector(`.content-container-rating-lines[data-category="${dataCategory}"]`);

  if (targetDiv) {
    // Find the span with the class 'textarea-content-here' inside this div
    const textareaSpan = targetDiv.querySelector(".textarea-content-here");

    if (textareaSpan) {
      // Set the contents of the 'textarea-content-here' span to the value of the textarea
      textareaSpan.textContent = textareaContents;
    }
  } else {
    console.log("No matching div found for data-category:", dataCategory);
  }
}

// Add event listener to all textareas to detect when their value changes
document.querySelectorAll("textarea").forEach((textarea) => {
  textarea.addEventListener("input", handleTextareaChange);
});

// :::: (Copy To Clipboard) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ::: ------------------------------ Copy Example Comment Text to Clipboard (Copy To Clipboard) ------------------------------
document.addEventListener("click", function (evt) {
  // Check if the clicked element is one of the comment lines to trigger the copy action
  if (evt.target.classList.contains("content-container-comment-lines")) {
    copyToClipboard(evt); // Call the copy function
  }
});

// Function to copy the inner text of the clicked element to the clipboard
function copyToClipboard(evt) {
  var textToCopy = evt.target.innerText.trim(); // Get text without HTML tags and spaces

  // Handle case where no text is found to copy
  if (!textToCopy) {
    console.error("No text found to copy!"); // Log error if no text exists
    return;
  }

  // Copy the text to clipboard with a space appended for formatting
  navigator.clipboard
    .writeText(textToCopy + " ")
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

      // Remove the "Copied" message after 850ms
      setTimeout(() => {
        copiedMessage.remove();
      }, 850);
    })
    .catch((err) => console.error("Error copying text:", err)); // Error handling
}

// Add Event Listener for Copying Text from Comment Lines to Clipboard
document.querySelectorAll(".content-container-comment-lines").forEach(function (element) {
  element.addEventListener("click", copyToClipboard); // Add click event listener to each comment line
});

// ::: ------------------------------ Copy textarea Text to Clipboard (Copy To Clipboard) ------------------------------
function copyTextarea(evt) {
  var textarea = evt.currentTarget; // Get the clicked textarea element
  var textToCopy = textarea.value; // Get the text content from the textarea

  // Use the Clipboard API to copy the content to the clipboard
  navigator.clipboard
    .writeText(textToCopy) // Copy the textarea content
    .then(function () {
      // console.log("Copied to clipboard: " + textToCopy); // Log success (optional)
    })
    .catch(function (err) {
      console.error("Error copying text: ", err); // Log any errors that occur
    });
}

// Add event listener for double-click on all textareas with the class 'textarea-comments'
document.querySelectorAll(".textarea-comments").forEach(function (textarea) {
  textarea.addEventListener("dblclick", copyTextarea); // Trigger copyTextarea function on double-click
});

// ::: ------------------------------ Review: Copy clciked component name for searching later (Copy To Clipboard) ------------------------------
function copyDataCategory(event) {
  const dataCategory = event.target.closest(".content-container-rating-lines").getAttribute("data-category");
  if (dataCategory) {
    navigator.clipboard
      .writeText(dataCategory)
      .then(() => {
        // console.log("Data category copied to clipboard:", dataCategory);
      })
      .catch((err) => {
        console.error("Error copying data-category:", err);
      });
  }
}

// Attach event listeners to copy data-category when clicking on .content-container-rating-condition-bubble
document.querySelectorAll(".content-container-rating-condition-bubble").forEach((span) => {
  span.addEventListener("click", copyDataCategory);
});

// ::: ------------------------------ Review: Copy clciked comment for searching later (Copy To Clipboard) ------------------------------
function copyContent(event) {
  const content = event.target.textContent.trim(); // Get text inside <span class="textarea-content-here">
  if (content) {
    navigator.clipboard
      .writeText(content)
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

        // Remove the "Copied" message after 850ms
        setTimeout(() => {
          copiedMessage.remove();
        }, 850);
      })
      .catch((err) => {
        console.error("Error copying content:", err);
      });
  }
}

// Attach event listeners to copy content when clicking on .textarea-content-here
document.querySelectorAll(".textarea-content-here").forEach((span) => {
  span.addEventListener("click", copyContent);
});

// :::: (Textarea Expansion) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ::: ------------------------------ Expand the textareas when pasted or typed in (Textarea Expansion) ------------------------------
function expandTextarea(event, componentName) {
  // Declare variables
  var elem = document.getElementById(componentName); // Get the targeted textarea element
  elem.parentNode.dataset.replicatedValue = elem.value; // Update the parent element's value with the textarea content
}

// :::: (Page Button Clicks) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ::: ------------------------------ Handles the display of content for each tab based on button clicks (Page Button Clicks) ------------------------------
function openTab(evt) {
  var button = evt.currentTarget; // The clicked button

  // Extract relevant attributes from the button (target content, container class, and button class)
  var componentName = button.getAttribute("data-target");
  var containerClass = button.getAttribute("data-container-class");
  var buttonClass = button.getAttribute("data-button-class");

  // Hide all content containers of the same class
  var containers = document.getElementsByClassName(containerClass);
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.display = "none"; // Hide all containers
  }

  // Remove "active" class from all buttons in the same button class
  var buttons = document.getElementsByClassName(buttonClass);
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" active", ""); // Remove active class
  }

  // Show the selected tab's content and add "active" class to the clicked button
  document.getElementById(componentName).style.display = "block"; // Display the targeted container
  button.className += " active"; // Add active class to the clicked button
}

// ::: ------------------------------ Button Classes (Page Button Clicks) ------------------------------
var buttonClasses = [
  "asset-buttons",
  "bridge-component-buttons",
  "bridge-alignment-buttons",
  "bridge-approach-buttons",
  "bridge-joints-buttons",
  "bridge-railings-buttons",
  "bridge-deck-buttons",
  "bridge-super-buttons",
  "bridge-bearings-buttons",
  "bridge-sub-buttons",
  "bridge-culvert-buttons",
  "bridge-channel-buttons",
  "bridge-scour-buttons",
  "bridge-overtopping-buttons",
  "bridge-wildlife-buttons",
  "bridge-elements-buttons",
  "bridge-maintenance-buttons",
  "bridge-review-buttons",
  "element-item-buttons",
  "culvert-item-buttons",
  "wall-item-buttons",
  "glossary-item-buttons",
  "review-item-buttons",
];

// ::: ------------------------------ Loop Through Button Classes and Add Event Listeners (Page Button Clicks) ------------------------------
buttonClasses.forEach(function (buttonClass) {
  // For each button class, find buttons and add an event listener for tab opening
  document.querySelectorAll("." + buttonClass).forEach(function (button) {
    button.addEventListener("click", openTab); // Add click event to trigger openTab
  });
});

// ::: ------------------------------ Know the active tab (Page Button Clicks) ------------------------------
let activeTab = null;

// Function to Handle Clicks on Elements with a data-target Attribute
function handleTabClick(event) {
  // Get the data-target attribute of the clicked element
  const target = event.target.getAttribute("data-target");

  if (target) {
    // Store the data-target value when the button is clicked
    activeTab = target;

    // If "review-ratings-tab" is clicked, clear the asset-updated message
    if (target === "review-ratings-tab") {
      document.getElementById("asset-updated").textContent = "The ratings and comments are generated by actions on the corresponding component pages.";
    }
    // If "review-ratings-tab" is clicked, clear the asset-updated message
    if (target === "review-summary-tab") {
      document.getElementById("asset-updated").textContent = `The summary is built automatically when an asset number is searched. The asset data was last updated on ${dataDate}.`;
    }
    // If "review-ratings-tab" is clicked, clear the asset-updated message
    if (target === "review-data-tab") {
      document.getElementById("asset-updated").textContent = `These are populated when an asset number is searched. The asset data was last updated on ${dataDate}.`;
    }

    // If two or more comment builders hold the active view on their tabs then select the correct one to be active
    const activeButtons = document.querySelectorAll(".bridge-approach-buttons.active, .bridge-deck-buttons.active");
    if (activeTab === "bridge-approach-slabs-tab") {
      currentTarget = "approach-pg6";
    }
    if (activeTab === "bridge-deck-tab") {
      if (activeButtons.length > 0) {
        activeButtons.forEach((button) => {
          if (button.dataset.target === "bridge-deck-pg9") {
            currentTarget = "deck-pg9";
          }
          if (button.dataset.target === "bridge-deck-pg10") {
            currentTarget = "deck-pg10";
          }
        });
      }
    }
  }
}

// Attach the event listener to the entire document to catch clicks on any data-target element
document.addEventListener("click", function (event) {
  // Check if the clicked element has a data-target attribute
  if (event.target.hasAttribute("data-target")) {
    handleTabClick(event);
  }
});

// :::: (Rating Table Clicks) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ::: ------------------------------ Rating table clicks ------------------------------
function handleHighlight(event) {
  // Find the parent container (section) of the clicked item
  const container = event.target.closest('[class*="containers"]');

  // Get all items within this container
  const items = container.querySelectorAll(".content-container-rating-lines");

  // Check if the clicked item is already highlighted
  const clickedItem = event.target.closest(".content-container-rating-lines");
  const isHighlighted = clickedItem.classList.contains("highlight");

  if (isHighlighted) {
    // If already highlighted, remove the highlight
    clickedItem.classList.remove("highlight");

    // Reset the numerical value in #bridge-review-tab to an empty string
    const dataCategory = clickedItem.getAttribute("data-category");
    const bridgeReviewTab = document.getElementById("bridge-review-tab");
    const matchingItem = bridgeReviewTab.querySelector(`.content-container-rating-lines[data-category="${dataCategory}"]`);

    if (matchingItem) {
      const span = matchingItem.querySelector(".content-container-rating-numerical");
      if (span) {
        span.textContent = ""; // Reset the numerical value to an empty string
      }
    }
  } else {
    // Remove the highlight from all items in this container
    items.forEach((item) => {
      item.classList.remove("highlight");
    });

    // Add highlight to the clicked item
    clickedItem.classList.add("highlight");

    // Capture the numerical value from the clicked item's .content-container-rating-numerical
    const numericalValue = clickedItem.querySelector(".content-container-rating-numerical").textContent.trim();

    // Capture the data-category from the clicked item's data-category attribute
    const dataCategory = clickedItem.getAttribute("data-category");

    updateObjectRatings(`${numericalValue}`, dataCategory);

    // Now, find the matching element inside #bridge-review-tab
    const bridgeReviewTab = document.getElementById("bridge-review-tab");

    // Search for the div with matching data-category under the bridge-review-tab
    const matchingItem = bridgeReviewTab.querySelector(`.content-container-rating-lines[data-category="${dataCategory}"]`);

    // If a match is found, update the span with the new numerical value
    if (matchingItem) {
      const span = matchingItem.querySelector(".content-container-rating-numerical");
      if (span) {
        span.textContent = numericalValue; // Update the numerical value
      } else {
        console.log("No span found for the matching data-category.");
      }
    } else {
      console.log("No matching data-category found in #bridge-review-tab.");
    }
  }
}

// Add event listeners for each content line in all relevant containers
document.querySelectorAll(".content-container-rating-lines").forEach((item) => {
  item.addEventListener("click", handleHighlight);
});

// :::: (Maintenance/Element Clicks) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ::: ------------------------------ Determine what maintenance or element button is clicked ------------------------------
let maintenanceArray = []; // Global array to track active maintenance items

function addDeficiencyButtons(event) {
  const button = event.target;

  // Get shared attributes
  const buttonName = button.getAttribute("data-button-name");
  const buttonCategory = button.getAttribute("data-button-category");

  // Find all buttons that match the same task name and category
  const allMatchingButtons = document.querySelectorAll(`button[data-button-name="${buttonName}"][data-button-category="${buttonCategory}"]`);

  // Determine if we are activating or deactivating based on the clicked button
  const isActive = button.classList.contains("active-maintenance");

  // Toggle class for all matching buttons
  allMatchingButtons.forEach((btn) => {
    if (isActive) {
      btn.classList.remove("active-maintenance");
    } else {
      btn.classList.add("active-maintenance");
    }
  });

  // Action for maintenance tasks
  if (button.getAttribute("data-button-number").includes("Maintenance")) {
    // Add or remove task from global array
    if (isActive) {
      // If it's active, remove it from the array
      maintenanceArray = maintenanceArray.filter((task) => task.name !== buttonName || task.category !== buttonCategory);
    } else {
      // If it's not active, add it to the array
      maintenanceArray.push({ name: buttonName, category: buttonCategory });
    }

    const categoryOrder = ["Red", "Yellow", "Green", "Grey"];

    maintenanceArray.sort((a, b) => {
      return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
    });

    if (searchValue !== "") {
      const asset = assetData.find((item) => item["Asset Number"].toLowerCase() === searchValue.toLowerCase());
      if (asset) {
        displaySummary(asset); // Pass the whole asset object to the function
      } else {
        console.log("Asset not found.");
      }
    }
  }
}

// :::: (Console Logs) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ::: ------------------------------ Run Times and Counts ------------------------------

// Random data logs
console.log("Number of bridge assets loaded: " + Object.keys(assetData).length);
console.log("index.html last modified:", document.lastModified);
console.log("Data last updated:", dataDate);

window.addEventListener("load", function () {
  const loadTimeInMilliseconds = performance.now();
  const loadTimeInSeconds = loadTimeInMilliseconds / 1000;
  console.log(`Page loaded in ${loadTimeInSeconds.toFixed(2)} seconds`);
});

// Seymour routes
const district2Assets = assetData.filter((asset) => asset["(2) Highway Agency District:"] === 2);
const uniqueInvRoutes = new Set(district2Assets.map((asset) => asset["Inv Route #"]));
console.log(`Number of unique routes in Seymour: ${uniqueInvRoutes.size}`);

// District assets
const districtCounts = assetData.reduce((acc, asset) => {
  const district = asset["(2) Highway Agency District:"]; // Get district value

  if (district !== undefined) {
    acc[district] = (acc[district] || 0) + 1; // Count occurrences
  }

  return acc;
}, {});

console.log(districtCounts);

// :::: (Error Log) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function findAssetErrors(assetData) {
  let errors = {
    freq: [],
    super: [],
    deck: [],
    sub: [],
    wearing: [],
  };

  assetData.forEach((assetNumber) => {
    let assetValues = {
      assetNumberNBI: assetNumber["Asset Number"],
      deck: assetNumber["(58) Deck:"],
      inspectionFrequency: assetNumber["(91) Designated Inspection Frequency:"],
      superstructure: assetNumber["(59) Superstructure:"],
      substructure: assetNumber["(60) Substructure:"],
      scourCritical: parseFloat(assetNumber["(113) Scour Critical Bridges:"]),
      mainDesignType: assetNumber["(43B) Structure Type, Main: Type of Design:"],
      wearingSurfaceType: assetNumber["(108A) Wearing Surface Protection System: Wearing Surface"],
      wearingSurface: assetNumber["(58.01) Wearing Surface:"],
      deckStructureType: assetNumber["(107) Deck Structure Type:"],
      underfillValue: assetNumber["(62) Culverts:"],
      membraneValue: assetNumber["(108B) Wearing Surface Protection System: Deck Membrane"],
    };

    let lowestValue = Math.min(assetValues.deck, assetValues.superstructure, assetValues.substructure);

    // Error Check: Frequency
    if (parseFloat(lowestValue) < 4 && parseFloat(assetValues.inspectionFrequency) > 12) {
      errors.freq.push(assetValues.assetNumberNBI);
    }

    // Error Check: Superstructure mismatch with main design type
    if (parseFloat(assetValues.deck) !== parseFloat(assetValues.superstructure) && ["1", "01", 1].includes(assetValues.mainDesignType)) {
      errors.super.push(assetValues.assetNumberNBI);
    }

    // Error Check: Deck vs Wearing Surface
    if (assetValues.wearingSurfaceType === "1") {
      const deckRating = parseInt(assetValues.deck, 10);
      const wearingSurfaceRating = parseInt(assetValues.wearingSurface, 10);

      if (deckRating <= 5 || wearingSurfaceRating <= 5) {
        if (deckRating !== wearingSurfaceRating) {
          errors.deck.push(assetValues.assetNumberNBI);
        }
      } else {
        if (deckRating !== wearingSurfaceRating && deckRating !== wearingSurfaceRating + 1) {
          errors.deck.push(assetValues.assetNumberNBI);
        }
      }
    }

    // Error Check: Scour Critical vs Substructure
    if (assetValues.scourCritical <= 2) {
      const scourCritical = parseFloat(assetValues.scourCritical);
      const sub = parseFloat(assetValues.substructure);

      if (sub > scourCritical) {
        errors.sub.push(assetValues.assetNumberNBI);
      }
    }

    // Error Check: Wearing Surface
    if (
      assetValues.underfillValue === "N" &&
      ["1", "2"].includes(assetValues.deckStructureType) &&
      assetValues.wearingSurfaceType === "6" &&
      ["0", "8", "N"].includes(assetValues.membraneValue)
    ) {
      errors.wearing.push(assetValues.assetNumberNBI);
    }
  });

  return errors;
}

// Example usage:
const assetErrors = findAssetErrors(assetData);
console.log(assetErrors);

// :::: Not Sorted | Working /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to create and display the popup
// Function to create and display the popup
function showErrorPopup(button, message) {
  // Create the temporary popup div
  let errorPopup = document.createElement("div");
  errorPopup.classList.add("error-popup");
  errorPopup.innerText = message;

  // Append the popup to the body
  document.body.appendChild(errorPopup);

  // Get the .textarea-group that contains the button
  let group = button.closest(".textarea-group");

  // Get the position of the .textarea-group
  let groupRect = group.getBoundingClientRect();

  // Position it below the .textarea-group and center it
  errorPopup.style.left = `${groupRect.left + window.scrollX + groupRect.width / 2 - errorPopup.offsetWidth / 2}px`;
  errorPopup.style.top = `${groupRect.bottom + window.scrollY + 10}px`; // Slightly below the group

  // Remove popup after 3 seconds
  setTimeout(() => {
    errorPopup.remove();
  }, 3000);
}

// Add event listeners for each error button
document.querySelector("#error-freq button").addEventListener("click", function () {
  showErrorPopup(this, "Inspection Frequency Error: When the lowest rating is below 4, the frequency must be 12 months or less.");
});

document.querySelector("#error-super button").addEventListener("click", function () {
  showErrorPopup(this, "Deck Slab Error: The deck and superstructure ratings must match for slab bridges.");
});

document.querySelector("#error-deck button").addEventListener("click", function () {
  showErrorPopup(this, "Monolithic Error: When the deck or wearing surface rating is below 6, they must match; otherwise, the wearing surface rating can be one less.");
});

document.querySelector("#error-sub button").addEventListener("click", function () {
  showErrorPopup(this, "Scour Error: When the scour rating is below 3, the substructure rating must be the same or lower.");
});

document.querySelector("#error-wearing button").addEventListener("click", function () {
  showErrorPopup(this, "Membrane Error: When there is no membrane between a concrete deck and a bituminous wearing surface, the wearing surface rating must be below 5.");
});

function updateObjectRatings(numericalValue, dataCategory) {
  if (searchValue !== "") {
    const asset = assetData.find((item) => item["Asset Number"].toLowerCase() === searchValue);

    if (dataCategory === "B.C.01") {
      if (asset) {
        asset["(58) Deck:"] = numericalValue;
        hideAllErrors();
        displaySummary(asset);
      }
    }
    if (dataCategory === "B.C.02") {
      if (asset) {
        asset["(59) Superstructure:"] = numericalValue;
        hideAllErrors();
        displaySummary(asset);
      }
    }
    if (dataCategory === "B.C.03") {
      if (asset) {
        asset["(60) Substructure:"] = numericalValue;
        hideAllErrors();
        displaySummary(asset);
      }
    }
    if (dataCategory === "B.C.04") {
      if (asset) {
        asset["(62) Culverts:"] = numericalValue;
        hideAllErrors();
        displaySummary(asset);
      }
    }
    if (dataCategory === "B.C.01a") {
      if (asset) {
        asset["(58.01) Wearing Surface:"] = numericalValue;
        hideAllErrors();
        displaySummary(asset);
      }
    }
  }
}
