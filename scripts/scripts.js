/////////////////////////////////////////////////////////////////////////////////////////
// Insert the commentary into the content container (HTML Injection)
/////////////////////////////////////////////////////////////////////////////////////////
const container = document.querySelector("#bridge-alignment-pg1 .content-container-paragraphs");

// Check if the container exists before proceeding
if (container) {
  // Sanitize the commentary content before inserting it into the container
  let unsafeHTML = bridgeComponents[0].commentary; // The raw HTML content to be inserted
  let safeHTML = DOMPurify.sanitize(unsafeHTML); // Sanitize the HTML to avoid XSS attacks
  container.innerHTML = safeHTML; // Insert sanitized HTML into the container
  console.log("Sanitization complete and inserted.");
} else {
  // Log if the container element is not found
  console.log("Container element not found.");
}

/////////////////////////////////////////////////////////////////////////////////////////
// General Tab Opening Function: Handles the display of content for each tab
/////////////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////////////
// Button Classes for Event Listener Assignment
/////////////////////////////////////////////////////////////////////////////////////////
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
];

/////////////////////////////////////////////////////////////////////////////////////////
// Loop Through Button Classes and Add Event Listeners
/////////////////////////////////////////////////////////////////////////////////////////
buttonClasses.forEach(function (buttonClass) {
  // For each button class, find buttons and add an event listener for tab opening
  document.querySelectorAll("." + buttonClass).forEach(function (button) {
    button.addEventListener("click", openTab); // Add click event to trigger openTab
  });
});

/////////////////////////////////////////////////////////////////////////////////////////
// Function to Copy Text to Clipboard
/////////////////////////////////////////////////////////////////////////////////////////
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
    .then(() => console.log("Copied successfully:", textToCopy)) // Success message
    .catch((err) => console.error("Error copying text:", err)); // Error handling
}

/////////////////////////////////////////////////////////////////////////////////////////
// Function to Copy Textarea Content to Clipboard
/////////////////////////////////////////////////////////////////////////////////////////
function copyTextarea(evt) {
  var textarea = evt.currentTarget; // Get the clicked textarea element
  var textToCopy = textarea.value; // Get the text content from the textarea

  // Use the Clipboard API to copy the content to the clipboard
  navigator.clipboard
    .writeText(textToCopy) // Copy the textarea content
    .then(function () {
      console.log("Copied to clipboard: " + textToCopy); // Log success (optional)
    })
    .catch(function (err) {
      console.error("Error copying text: ", err); // Log any errors that occur
    });
}

// Add event listener for double-click on all textareas with the class 'textarea-comments'
document.querySelectorAll(".textarea-comments").forEach(function (textarea) {
  textarea.addEventListener("dblclick", copyTextarea); // Trigger copyTextarea function on double-click
});

/////////////////////////////////////////////////////////////////////////////////////////
// Add Event Listener for Copying Text from Comment Lines to Clipboard
/////////////////////////////////////////////////////////////////////////////////////////
document.querySelectorAll(".content-container-comment-lines").forEach(function (element) {
  element.addEventListener("click", copyToClipboard); // Add click event listener to each comment line
});

/////////////////////////////////////////////////////////////////////////////////////////
// Function to Handle Button Clicks for Deficiency Details
/////////////////////////////////////////////////////////////////////////////////////////
function addDeficiencyButtons(event) {
  // Get the button element that was clicked
  const button = event.target;

  // Access shared data attributes for the button (button number, severity, task name)
  const buttonNumber = button.getAttribute("data-button-number");
  const severityLevel = button.getAttribute("data-button-category");
  const taskName = button.getAttribute("data-button-name");

  if (buttonNumber.includes("Element")) {
    // Action for elements (alert and copy text for Element button)
    alert(`Opening details for ${buttonNumber} at Condition State ${severityLevel}`);
    navigator.clipboard.writeText(`Opening details for ${buttonNumber} at Condition State ${severityLevel}`);
  }
  if (buttonNumber.includes("Maintenance")) {
    // Action for maintenance tasks (alert and copy text for Maintenance button)
    alert(`Opening details for ${taskName} at Deficiency Level ${severityLevel}`);
    navigator.clipboard.writeText(`Opening details for ${taskName} at Deficiency Level ${severityLevel}`);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////
// Function to Expand Textarea on Event Trigger
/////////////////////////////////////////////////////////////////////////////////////////
function expandTextarea(event, componentName) {
  // Declare variables
  var elem = document.getElementById(componentName); // Get the targeted textarea element
  elem.parentNode.dataset.replicatedValue = elem.value; // Update the parent element's value with the textarea content
}

/////////////////////////////////////////////////////////////////////////////////////////
// Function to Toggle Sidebar Visibility (Collapsed/Expanded)
/////////////////////////////////////////////////////////////////////////////////////////
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar"); // Get the sidebar element
  sidebar.classList.toggle("collapsed"); // Toggle the 'collapsed' class to hide/show the sidebar
}

/////////////////////////////////////////////////////////////////////////////////////////
// Function to Open Content Sections (Hide/Show Content)
/////////////////////////////////////////////////////////////////////////////////////////
function openContent(sectionId) {
  // Hide all sections with the class 'content-section'
  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.add("hidden"); // Add the 'hidden' class to hide the section
  });

  // Show the selected section by removing the 'hidden' class
  document.getElementById(sectionId).classList.remove("hidden");
}

/////////////////////////////////////////////////////////////////////////////////////////
// Function to Populate Glossary Defects with Definitions
/////////////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////////////
// Function to Populate Glossary Bridge Definitions
/////////////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////////////
// Function to Populate Glossary Wall Definitions
/////////////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////////////
// Event Listener to Call Glossary Population Functions After DOM Loads
/////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", populateGlossaryDefects);
document.addEventListener("DOMContentLoaded", populateGlossaryBridge);
document.addEventListener("DOMContentLoaded", populateGlossaryWall);

/////////////////////////////////////////////////////////////////////////////////////////
// Function to Update Example Comments for Bridge Components
/////////////////////////////////////////////////////////////////////////////////////////
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

// Call the function to populate comments for bridge components
updateExampleComments();

/////////////////////////////////////////////////////////////////////////////////////////
// Event Listener for Click on Option List to Update Comment Selection
/////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".option-list").forEach((list) => {
    list.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        // Remove the 'selected' class from all items in the list
        list.querySelectorAll("li").forEach((item) => item.classList.remove("selected"));
        // Add 'selected' class to the clicked item
        event.target.classList.add("selected");
        // Update the comment based on the selected options
        updateComment();
      }
    });
  });
});

/////////////////////////////////////////////////////////////////////////////////////////
// Function to Update the Comment Based on Selected Options
/////////////////////////////////////////////////////////////////////////////////////////
function updateComment() {
  // Collect the selected values and join them into a single string
  const selectedValues = [...document.querySelectorAll(".option-list .selected")].map((item) => item.getAttribute("data-value")).join("");

  // Display the selected values or a default message if no options are selected
  document.getElementById("output").innerText = selectedValues || "Please select options from each category.";
}

/////////////////////////////////////////////////////////////////////////////////////////
// Function to Highlight Only One Item at a Time in Any Container
/////////////////////////////////////////////////////////////////////////////////////////
function handleHighlight(event) {
  // Find the parent container (section) of the clicked item
  const container = event.target.closest('[class*="containers"]');

  // Get all items within this container
  const items = container.querySelectorAll(".content-container-rating-lines");

  // Remove the highlight from all items in this container
  items.forEach((item) => {
    item.classList.remove("highlight");
  });

  // Add highlight to the clicked item
  const clickedItem = event.target.closest(".content-container-rating-lines");
  clickedItem.classList.add("highlight");

  // Capture the numerical value from the clicked item's .content-container-rating-numerical
  const numericalValue = clickedItem.querySelector(".content-container-rating-numerical").textContent.trim();

  // Capture the data-category from the clicked item's data-category attribute
  const dataCategory = clickedItem.getAttribute("data-category");

  // Now, find the matching element inside #bridge-review-tab
  const bridgeReviewTab = document.getElementById("bridge-review-tab");

  // Search for the div with matching data-category under the bridge-review-tab
  const matchingItem = bridgeReviewTab.querySelector(`.content-container-rating-lines[data-category="${dataCategory}"]`);

  // If a match is found, update the span with the new numerical value
  if (matchingItem) {
    const span = matchingItem.querySelector(".content-container-rating-numerical");
    if (span) {
      span.textContent = numericalValue; // Update the numerical value
      console.log("Updated numerical value for category:", dataCategory);
    } else {
      console.log("No span found for the matching data-category.");
    }
  } else {
    console.log("No matching data-category found in #bridge-review-tab.");
  }
}

// Add event listeners for each content line in all relevant containers
document.querySelectorAll(".content-container-rating-lines").forEach((item) => {
  item.addEventListener("click", handleHighlight);
});

/////////////////////////////////////////////////////////////////////////////////////////
// Function to Handle Changes in the Textarea
/////////////////////////////////////////////////////////////////////////////////////////
function handleTextareaChange(event) {
  const textarea = event.target; // Get the changed textarea element

  // Capture the data-category from the clicked textarea's data-category attribute
  const dataCategory = textarea.getAttribute("data-category");

  // Capture the value (contents) of the textarea
  const textareaContents = textarea.value;

  // Log the data-category and the textarea contents for debugging
  console.log("Captured data-category:", dataCategory);
  console.log("Textarea contents:", textareaContents);

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

/////////////////////////////////////////////////////////////////////////////////////////
// Function to Copy Data-Category to Clipboard
/////////////////////////////////////////////////////////////////////////////////////////
function copyDataCategory(event) {
  const dataCategory = event.target.closest(".content-container-rating-lines").getAttribute("data-category");
  if (dataCategory) {
    navigator.clipboard
      .writeText(dataCategory)
      .then(() => {
        console.log("Data category copied to clipboard:", dataCategory);
      })
      .catch((err) => {
        console.error("Error copying data-category:", err);
      });
  }
}

/////////////////////////////////////////////////////////////////////////////////////////
// Function to Copy Content Inside the .textarea-content-here Element to Clipboard
/////////////////////////////////////////////////////////////////////////////////////////
function copyContent(event) {
  const content = event.target.textContent.trim(); // Get text inside <span class="textarea-content-here">
  if (content) {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        console.log("Content copied to clipboard:", content);
      })
      .catch((err) => {
        console.error("Error copying content:", err);
      });
  }
}

/////////////////////////////////////////////////////////////////////////////////////////
// Event Listeners for Copying Data
/////////////////////////////////////////////////////////////////////////////////////////
// Attach event listeners to copy data-category when clicking on .content-container-rating-condition-bubble
document.querySelectorAll(".content-container-rating-condition-bubble").forEach((span) => {
  span.addEventListener("click", copyDataCategory);
});

// Attach event listeners to copy content when clicking on .textarea-content-here
document.querySelectorAll(".textarea-content-here").forEach((span) => {
  span.addEventListener("click", copyContent);
});

/////////////////////////////////////////////////////////////////////////////////////////
// Active Tab Logic
/////////////////////////////////////////////////////////////////////////////////////////
let activeTab = null;

// Function to Handle Clicks on Elements with a data-target Attribute
function handleTabClick(event) {
  // Get the data-target attribute of the clicked element
  const target = event.target.getAttribute("data-target");

  if (target) {
    // Store the data-target value when the button is clicked
    activeTab = target;
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

// Example of calling it directly in another function
function someOtherFunction() {
  // This function can now work with the activeTab that was set by the last clicked element
  console.log("Active Tab in another function:", activeTab);
}

// Call the other function to demonstrate the usage
someOtherFunction();

// Random data logs
console.log("Number of assets: " + Object.keys(jsonData).length);

window.addEventListener("load", function () {
  const loadTimeInMilliseconds = performance.now();
  const loadTimeInSeconds = loadTimeInMilliseconds / 1000;
  console.log(`Page loaded in ${loadTimeInMilliseconds} milliseconds or ${loadTimeInSeconds} seconds`);
});
