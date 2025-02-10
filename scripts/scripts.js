// Insert in HTML
const container = document.querySelector("#bridge-alignment-pg1 .content-container-paragraphs");

// Insert the commentary
if (container) {
  let unsafeHTML = bridgeComponents[0].commentary;
  let safeHTML = DOMPurify.sanitize(unsafeHTML);
  container.innerHTML = safeHTML;
  console.log("Sanitization complete and inserted.");
} else {
  console.log("Container element not found.");
}

// General open tab function
function openTab(evt) {
  var button = evt.currentTarget;

  // Extract data attributes from the clicked button
  var componentName = button.getAttribute("data-target");
  var containerClass = button.getAttribute("data-container-class");
  var buttonClass = button.getAttribute("data-button-class");

  // Hide all containers
  var containers = document.getElementsByClassName(containerClass);
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.display = "none";
  }

  // Remove "active" class from all buttons
  var buttons = document.getElementsByClassName(buttonClass);
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" active", "");
  }

  // Show the current tab and add "active" class to the clicked button
  document.getElementById(componentName).style.display = "block";
  button.className += " active";
}

// Array of button classes
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

// Loop through the array and add event listeners to each button class
buttonClasses.forEach(function (buttonClass) {
  document.querySelectorAll("." + buttonClass).forEach(function (button) {
    button.addEventListener("click", openTab);
  });
});

// // Activate the second tab (assuming you want to display pg2 as the initial active page)
// window.addEventListener('load', function() {
//   var secondButton = document.querySelectorAll('.' + buttonClasses[0])[1]; // Select the second button in each class
//   if (secondButton) {
//     secondButton.click(); // Trigger a click event on the second button to activate pg2
//   }
// });

// Add event listeners to buttons
// document.querySelectorAll('[class^="bridge-"][class$="-buttons"]').forEach(function(button) {
//   button.addEventListener('click', openTab);
// });

// Function to copy innerHTML to clipboard
function copyToClipboard(evt) {
  var textToCopy = evt.currentTarget.innerHTML; // Get the innerHTML of the clicked element
  navigator.clipboard.writeText("");
  navigator.clipboard
    .writeText(textToCopy) // Copy text to clipboard
    .then(function () {
      // alert("Copied to clipboard: " + textToCopy); // Alert on successful copy
    })
    .catch(function (err) {
      console.error("Error copying text: ", err); // Log any errors
    });
}

// Function to paste clipboard content into the textarea
function pasteFromClipboard(evt) {
  var textarea = evt.currentTarget; // Get the double-clicked textarea
  navigator.clipboard
    .readText() // Read text from the clipboard
    .then(function (clipboardText) {
      textarea.value += clipboardText; // Append the clipboard content to the textarea
      // alert("Pasted into textarea: " + clipboardText); // Optional: Alert the pasted content
    })
    .catch(function (err) {
      console.error("Error pasting text: ", err); // Log any errors
    });
}

// Add event listener for double-click on the textarea
document.querySelectorAll(".textarea-comments").forEach(function (textarea) {
  textarea.addEventListener("dblclick", pasteFromClipboard);
});

// Add event listener to all elements with the class 'content-container-comment-lines'
document.querySelectorAll(".content-container-comment-lines").forEach(function (element) {
  element.addEventListener("click", copyToClipboard);
});

//element alert
function addDeficiencyButtons(event) {
  // Get the button element that was clicked
  const button = event.target;

  // Access the shared data attributes
  const buttonNumber = button.getAttribute("data-button-number");
  const severityLevel = button.getAttribute("data-button-category");
  const taskName = button.getAttribute("data-button-name");

  if (buttonNumber.includes("Element")) {
    // Perform the action based on the element number and CS level
    alert(`Opening details for ${buttonNumber} at Condition State ${severityLevel}`);
    // Copy the text to the clipboard
    navigator.clipboard.writeText(`Opening details for ${buttonNumber} at Condition State ${severityLevel}`);
  }
  if (buttonNumber.includes("Maintenance")) {
    // Perform the action based on the element number and CS level
    alert(`Opening details for ${taskName} at Deficiency Level ${severityLevel}`);
    // Copy the text to the clipboard
    navigator.clipboard.writeText(`Opening details for ${taskName} at Deficiency Level ${severityLevel}`);
  }
}

// textarea row control
function expandTextarea(evt, componentName) {
  // Declare all variables
  var elem = document.getElementById(componentName); // Get the textarea element to use its properties.
  elem.parentNode.dataset.replicatedValue = elem.value; // Match the parent element value to it (divTextAreaMirror class = value/comment).
}

////////////////////////////////////////////////////////////////////////////////////////////

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("collapsed");
}

function openContent(sectionId) {
  // Hide all sections
  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.add("hidden");
  });

  // Show the selected section
  document.getElementById(sectionId).classList.remove("hidden");
}

// glossaries

function populateGlossaryDefects() {
  const container = document.querySelector("#glossary-defects-tab .glossary-numeric-ratings-container");

  Object.values(defectDefinitions).forEach((defect) => {
    // Create card container
    const card = document.createElement("div");
    card.classList.add("glossary-content-cards");

    // Create card header
    const header = document.createElement("div");
    header.classList.add("glossary-card-header");
    header.textContent = defect.term;

    // Create card paragraph
    const paragraph = document.createElement("p");
    paragraph.classList.add("glossary-card-paragraph");
    paragraph.textContent = defect.definition;

    // Assemble elements
    card.appendChild(header);
    card.appendChild(paragraph);
    container.appendChild(card);
  });
}

function populateGlossaryBridge() {
  const container2 = document.querySelector("#glossary-bridge-tab .glossary-numeric-ratings-container");

  Object.values(glossaryTerms).forEach((defect2) => {
    // Create card container
    const card2 = document.createElement("div");
    card2.classList.add("glossary-content-cards");

    // Create card header
    const header2 = document.createElement("div");
    header2.classList.add("glossary-card-header");
    header2.textContent = defect2.term;

    // Create card paragraph
    const paragraph2 = document.createElement("p");
    paragraph2.classList.add("glossary-card-paragraph");
    paragraph2.textContent = defect2.definition;

    // Assemble elements
    card2.appendChild(header2);
    card2.appendChild(paragraph2);
    container2.appendChild(card2);
  });
}

function populateGlossaryWall() {
  const container3 = document.querySelector("#glossary-wall-tab .glossary-numeric-ratings-container");

  Object.values(wallTerms).forEach((defect3) => {
    // Create card container
    const card3 = document.createElement("div");
    card3.classList.add("glossary-content-cards");

    // Create card header
    const header3 = document.createElement("div");
    header3.classList.add("glossary-card-header");
    header3.textContent = defect3.term;

    // Create card paragraph
    const paragraph3 = document.createElement("p");
    paragraph3.classList.add("glossary-card-paragraph");
    paragraph3.textContent = defect3.definition;

    // Assemble elements
    card3.appendChild(header3);
    card3.appendChild(paragraph3);
    container3.appendChild(card3);
  });
}

// Call function after DOM loads
document.addEventListener("DOMContentLoaded", populateGlossaryDefects);
document.addEventListener("DOMContentLoaded", populateGlossaryBridge);
document.addEventListener("DOMContentLoaded", populateGlossaryWall);
