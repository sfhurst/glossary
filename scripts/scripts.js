const dataDate = "03/21/2025"; // Date iTAMS data was output
document.querySelector(
  "#asset-updated"
).textContent = `These are populated when an asset number is searched. The asset data was last updated on ${dataDate}.`;
document.querySelector(
  "#user-local-storage"
).textContent = `User information is saved in the browser's local storage by completing the fields. Clear the browser cache to remove.`;

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
//**// document.addEventListener("DOMContentLoaded", function () {
//**// const container = document.querySelector("#bridge-alignment-pg1 .content-container-paragraphs");

// Use the setSafeHTML function to insert sanitized content
//**// const unsafeHTML = bridgeComponents[0].commentary; // The raw HTML content to be inserted
// container.innerHTML = unsafeHTML;
//**// setSafeHTML(container, unsafeHTML); // Insert sanitized HTML into the container
//**// });

// :::: (Text Content Insertion) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ::: ------------------------------ Populate glossary with defect definitions (Text Content Insertion)  ------------------------------
function populateGlossaryDefects() {
  const container = document.querySelector("#glossary-defects-tab .glossary-numeric-ratings-container");

  // Loop through each defect definition and create a glossary card for each
  defectDefinitions.forEach((defect) => {
    // Create a container for each glossary card
    const card = document.createElement("div");
    card.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header = document.createElement("div");
    header.classList.add("glossary-card-header");

    // Create the hidden link for the term
    const link = document.createElement("a");
    let search = defect.search || `What is "${defect.term}" in ${defect.discipline}?`; // Search query
    link.classList.add("glossary-term-link");
    link.textContent = defect.term;
    // If defect.link exists, use it; otherwise, fall back to Google search
    link.href = defect.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
    link.target = "_blank";

    // Append the link inside the header div
    header.appendChild(link);

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
  glossaryTerms.forEach((defect2) => {
    // Create the card container
    const card2 = document.createElement("div");
    card2.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header2 = document.createElement("div");
    header2.classList.add("glossary-card-header");

    // Create the hidden link for the term
    const link2 = document.createElement("a");
    let search2 = defect2.search || `What is "${defect2.term}" in ${defect2.discipline}?`; // Search query
    link2.classList.add("glossary-term-link");
    link2.textContent = defect2.term;
    // If defect2.link exists, use it; otherwise, fall back to Google search
    link2.href = defect2.link || `https://www.google.com/search?q=${encodeURIComponent(search2)}`;
    link2.target = "_blank";

    // Append the link inside the header div
    header2.appendChild(link2);

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

// ::: ------------------------------ Populate glossary with culvert definitions (Text Content Insertion)  ------------------------------
function populateGlossaryCulvert() {
  const container2 = document.querySelector("#glossary-culvert-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term and create a glossary card for each
  culvertTerms.forEach((defect2) => {
    // Create the card container
    const card2 = document.createElement("div");
    card2.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header2 = document.createElement("div");
    header2.classList.add("glossary-card-header");

    // Create the hidden link for the term
    const link2 = document.createElement("a");
    let search2 = defect2.search || `What is "${defect2.term}" in ${defect2.discipline}?`; // Search query
    link2.classList.add("glossary-term-link");
    link2.textContent = defect2.term;
    // If defect2.link exists, use it; otherwise, fall back to Google search
    link2.href = defect2.link || `https://www.google.com/search?q=${encodeURIComponent(search2)}`;
    link2.target = "_blank";

    // Append the link inside the header div
    header2.appendChild(link2);

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
  wallTerms.forEach((defect3) => {
    // Create the card container
    const card3 = document.createElement("div");
    card3.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header3 = document.createElement("div");
    header3.classList.add("glossary-card-header");

    // Create the hidden link for the term
    const link3 = document.createElement("a");
    let search3 = defect3.search || `What is "${defect3.term}" in ${defect3.discipline}?`; // Search query
    link3.classList.add("glossary-term-link");
    link3.textContent = defect3.term;
    // If defect3.link exists, use it; otherwise, fall back to Google search
    link3.href = defect3.link || `https://www.google.com/search?q=${encodeURIComponent(search3)}`;
    link3.target = "_blank";

    // Append the link inside the header div
    header3.appendChild(link3);

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

// ::: ------------------------------ Populate glossary with compound word definitions (Text Content Insertion)  ------------------------------
function populateGlossaryCompound() {
  const container3 = document.querySelector("#glossary-compounds-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term and create a glossary card for each
  compoundTerms.forEach((defect3) => {
    // Create the card container
    const card3 = document.createElement("div");
    card3.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header3 = document.createElement("div");
    header3.classList.add("glossary-card-header");

    // Create the hidden link for the term
    const link3 = document.createElement("a");
    let search3 = defect3.search || `What is "${defect3.term}" in ${defect3.discipline}?`; // Search query
    link3.classList.add("glossary-term-link");
    link3.textContent = defect3.term;
    // If defect3.link exists, use it; otherwise, fall back to Google search
    link3.href = defect3.link || `https://www.google.com/search?q=${encodeURIComponent(search3)}`;
    link3.target = "_blank";

    // Append the link inside the header div
    header3.appendChild(link3);

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

document.addEventListener("DOMContentLoaded", populateGlossaryCompound);

// ::: ------------------------------ Populate glossary with compound word definitions (Text Content Insertion)  ------------------------------
function populateGlossaryAll() {
  const container3 = document.querySelector("#glossary-all-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term and create a glossary card for each
  glossaryAllTerms.forEach((defect3) => {
    // Create the card container
    const card3 = document.createElement("div");
    card3.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header3 = document.createElement("div");
    header3.classList.add("glossary-card-header");

    // Create the hidden link for the term
    const link3 = document.createElement("a");
    let search3 = defect3.search || `What is "${defect3.term}" in ${defect3.discipline}?`; // Search query
    link3.classList.add("glossary-term-link");
    link3.textContent = defect3.term;

    // Add the data-term attribute for search purposes
    link3.setAttribute("data-term", defect3.term.toLowerCase()); // Add the data-term attribute here

    // If defect3.link exists, use it; otherwise, fall back to Google search
    link3.href = defect3.link || `https://www.google.com/search?q=${encodeURIComponent(search3)}`;
    link3.target = "_blank";

    // Append the link inside the header div
    header3.appendChild(link3);

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

document.addEventListener("DOMContentLoaded", populateGlossaryAll);

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

      // Create a link element wrapping the county info
      const link = document.createElement("a");
      link.classList.add("glossary-term-link");
      link.href = `https://www.google.com/maps?q=${encodeURIComponent(description + " County, Indiana")}`;
      link.target = "_blank"; // Open in a new tab

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

      // Append the code, dash, and description spans to the link
      link.appendChild(codeSpan);
      link.appendChild(dashText); // Append the dash text node
      link.appendChild(descriptionSpan);

      // Append the link to the county item
      countyItem.appendChild(link);

      // Append the county item to the container
      container.appendChild(countyItem);
    });
  } else {
    console.error("No matching object with 'variable: countyCode' found in bridgeData.");
  }
}

// Call the function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", populateCountyGlossary);

// ::: ------------------------------ Populate glossary tabs for bridge components (Text Content Insertion)  ------------------------------

function buildGlossaries(bridgeComponents) {
  // Loop through each glossary_page_id in the bridgeComponents array
  bridgeComponents.forEach((component) => {
    const glossaryPageId = component.glossary_page_id;
    const glossaryItems = component.glossary || [];

    // Find the container for the corresponding page by id
    const container = document.getElementById(glossaryPageId);

    if (container) {
      // Clear the container before adding new content
      container.innerHTML = "";

      // Iterate over the glossary items and create a card for each
      glossaryItems.forEach((item) => {
        // Create the card container
        const card = document.createElement("div");
        card.classList.add("glossary-content-cards");

        // Create the header container for the card with the glossary term
        const header = document.createElement("div");
        header.classList.add("glossary-card-header");

        // Create the hidden link for the term
        const link = document.createElement("a");
        let search = item.search || `What is "${item.term}" in highway design?`;
        link.classList.add("glossary-term-link");
        link.textContent = item.term;
        link.href = `https://www.google.com/search?q=${encodeURIComponent(search)}`;
        link.target = "_blank";

        // Append the link inside the header div
        header.appendChild(link);

        // Create the paragraph for the card with the glossary definition
        const paragraph = document.createElement("p");
        paragraph.classList.add("glossary-card-paragraph");
        paragraph.textContent = item.definition;

        // Assemble the card elements
        card.appendChild(header);
        card.appendChild(paragraph);

        // Append the card to the container
        container.appendChild(card);
      });
    }
  });
}

buildGlossaries(bridgeComponents);

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

// test working
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

  // Check if the changed textarea is from the "review" ID structure
  const isReviewTextarea = textarea.id.includes("-review");

  // Update the corresponding textarea without causing an endless loop
  if (isReviewTextarea) {
    const matchingTextareas = document.querySelectorAll(`[id^="${textarea.id.split("-")[0]}-textarea"]`);
    matchingTextareas.forEach((matchingTextarea) => {
      if (matchingTextarea !== textarea) {
        matchingTextarea.value = textareaContents;
      }
    });
  } else {
    // Update the corresponding review textarea without causing an endless loop
    const matchingReviewTextareas = document.querySelectorAll(`[id^="${textarea.id.split("-")[0]}-textarea-review"]`);
    matchingReviewTextareas.forEach((matchingReviewTextarea) => {
      if (matchingReviewTextarea !== textarea) {
        matchingReviewTextarea.value = textareaContents;
      }
    });
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
      storeClipboardData(textToCopy + " "); // Store the copied text into clipboard history
      showCopiedMessage(); // Show the "Copied" message
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
    .then(() => {
      storeClipboardData(textToCopy); // Store the copied text into clipboard history
      showCopiedMessage(); // Show the "Copied" message
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

// ::: ------------------------------ Review: Copy clciked comment for transfering (Copy To Clipboard) ------------------------------
function copyContent(event) {
  const content = event.target.textContent.trim(); // Get text inside <span class="textarea-content-here">
  if (content) {
    navigator.clipboard.writeText(content).then(() => {
      storeClipboardData(content); // Store the copied text into clipboard history
      showCopiedMessage(); // Show the "Copied" message
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
  // Extract the unique part of the component name (e.g., BC01 from BC01-textarea)
  const baseId = componentName.split("-")[0];

  // Create the IDs for both textarea and review textarea
  const textareaId = `${baseId}-textarea`;
  const reviewTextareaId = `${baseId}-textarea-review`;

  // Use requestAnimationFrame to sync the update
  requestAnimationFrame(() => {
    // Get the elements for both textareas (if they exist)
    const textareaElem = document.getElementById(textareaId);
    const reviewTextareaElem = document.getElementById(reviewTextareaId);

    // Check if the textarea elements exist and update their replicated values
    if (textareaElem) {
      textareaElem.parentNode.dataset.replicatedValue = textareaElem.value;
    }
    if (reviewTextareaElem) {
      reviewTextareaElem.parentNode.dataset.replicatedValue = reviewTextareaElem.value;
    }
  });
}

// :::: (Page Button Clicks) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ::: ------------------------------ Handles the display of content for each tab based on button clicks (Page Button Clicks) ------------------------------
function openTab(evt) {
  var button = evt.currentTarget; // The clicked button
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

  // Update the URL hash (only for main tab)
  var hash = button.getAttribute("data-hash");
  updateURLHash(hash);
}

// Update the URL hash with just the main tab hash (no nested tab hash)
function updateURLHash(hash) {
  if (hash) {
    window.location.hash = hash; // Set the main tab hash
  }
}

// Event listener for the hashchange event to handle tab changes
window.addEventListener("hashchange", function () {
  var hash = window.location.hash.substring(1); // Get the current hash (without the "#")

  // Activate the correct tab based on the hash
  var button = document.querySelector(`[data-hash="${hash}"]`);
  if (button) {
    openTab({ currentTarget: button }); // Trigger the tab click based on the hash
  }
});

// On page load, open the tab corresponding to the current hash or default to the first tab
window.addEventListener("load", function () {
  var hash = window.location.hash.substring(1); // Get the current hash (without the "#")
  if (hash) {
    var button = document.querySelector(`[data-hash="${hash}"]`);
    if (button) {
      openTab({ currentTarget: button }); // Trigger the tab click based on the hash
    }
  } else {
    // If no hash in URL, trigger the first button click (default tab)
    document.querySelector(".asset-buttons.active").click();
  }
});

// Add event listeners to the header buttons (main tabs)
document.querySelectorAll(".asset-buttons").forEach(function (button) {
  button.addEventListener("click", openTab); // Add click event to trigger openTab
});

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
  "misc-component-buttons",
  "glossary-item-buttons",
  "district-item-buttons",
  "review-item-buttons",
  "settings-item-buttons",
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
      document.getElementById("asset-updated").textContent =
        "The ratings and comments are generated by actions on the corresponding component pages.";
    }
    // If "review-ratings-tab" is clicked, clear the asset-updated message
    if (target === "review-summary-tab") {
      document.getElementById(
        "asset-updated"
      ).textContent = `The summary is built automatically when an asset number is searched. The asset data was last updated on ${dataDate}.`;
    }
    // If "review-ratings-tab" is clicked, clear the asset-updated message
    if (target === "review-data-tab") {
      document.getElementById(
        "asset-updated"
      ).textContent = `These are populated when an asset number is searched. The asset data was last updated on ${dataDate}.`;
    }

    if (target === "settings-user-tab") {
      document.querySelector(
        "#user-local-storage"
      ).textContent = `User information is saved in the browser's local storage by completing the fields. Clear the browser cache to remove.`;
    }
    if (target === "settings-global-tab") {
      document.querySelector("#user-local-storage").textContent = `Global features are under development.`;
      // `Global settings are saved in the browser's local storage by completing the fields. Clear the browser cache to remove.`
    }
    if (target === "settings-help-tab") {
      document.querySelector("#user-local-storage").textContent = `The help section is under development.`;
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

    // Reset the numerical value on the corresponding review button
    const reviewButton = document.getElementById(`${dataCategory}-button-review`);
    if (reviewButton) {
      reviewButton.textContent = "N"; // Reset button text or whatever default text you prefer
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

    // Update the corresponding review button with the numerical value
    let newStr = dataCategory.replace(/\./g, ""); // Replaces all periods with an empty string
    const reviewButton = document.getElementById(`${newStr}-button-review`);
    if (reviewButton) {
      reviewButton.textContent = numericalValue; // Update button text with the numerical value

      const colorVar = `--rating-${numericalValue}`;
      const color = getComputedStyle(document.documentElement).getPropertyValue(colorVar);
      reviewButton.style.backgroundColor = color.trim();
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

// Glossary Terms
const count = glossaryAllTerms.length;
console.log(`Number of unique glossary terms: ${count}`);

// Mapping district numbers to district names
const districtIdMap = {
  1: "crawfordsville",
  2: "fortwayne",
  3: "greenfield",
  4: "laporte",
  5: "seymour",
  6: "vincennes",
  7: "toll",
};

// Compute district counts & NSTM inspection counts
const districtCounts = {};
const nstmCounts = {};
const specialCounts = {};
const underwaterCounts = {};
const elementCounts = {};
const reducedIntervalCounts = {};
const extendedIntervalCounts = {};
const postedCounts = {};
const scourCounts = {};

// Initialize total counts
let totalRoutine = 0;
let totalNstm = 0;
let totalSpecial = 0;
let totalUnderwater = 0;
let totalElement = 0;
let totalReducedInterval = 0;
let totalExtendedInterval = 0;
let totalPosted = 0;
let totalScour = 0;

assetData.forEach((asset) => {
  const district = asset["(2) Highway Agency District:"]; // Get district value
  const nstmRequired = asset["(92AA) Critical Feature Inspection: NSTM Insp Required?"]; // Check NSTM
  const specialRequired = asset["(92CC) Critical Feature Inspection: Special Insp Required?"]; // Check special
  const underwaterRequired = asset["(92BB) Critical Feature Inspection: Underwater Insp Required?"]; // Check underwater
  const elementRequired = asset["(104) Highway System of Inventory Route:"]; // Check element
  const frequencyRequired = asset["(91) Designated Inspection Frequency:"]; // Check frequency
  const postedRequired = asset["(41) Structure Open/Posted/Closed:"]; // Check posted
  const scourRequired = asset["(B.AP.03) Scour Vulnerability"]; // Check scour critical

  if (district !== undefined) {
    districtCounts[district] = (districtCounts[district] || 0) + 1;
    totalRoutine++; // Increment total routine count

    if (nstmRequired === "Y") {
      nstmCounts[district] = (nstmCounts[district] || 0) + 1;
      totalNstm++; // Increment total NSTM count
    }

    if (specialRequired === "Y") {
      specialCounts[district] = (specialCounts[district] || 0) + 1;
      totalSpecial++; // Increment total special count
    }

    if (underwaterRequired === "Y") {
      underwaterCounts[district] = (underwaterCounts[district] || 0) + 1;
      totalUnderwater++; // Increment total underwater count
    }

    if (elementRequired === 1) {
      elementCounts[district] = (elementCounts[district] || 0) + 1;
      totalElement++; // Increment total element count
    }

    if (frequencyRequired < 24) {
      reducedIntervalCounts[district] = (reducedIntervalCounts[district] || 0) + 1;
      totalReducedInterval++; // Increment total reduced interval count
    }

    if (frequencyRequired > 24) {
      extendedIntervalCounts[district] = (extendedIntervalCounts[district] || 0) + 1;
      totalExtendedInterval++; // Increment total extended interval count
    }

    if (postedRequired !== "A") {
      postedCounts[district] = (postedCounts[district] || 0) + 1;
      totalPosted++; // Increment total posted count
    }

    if (scourRequired !== null && scourRequired !== "N" && !["A", "B", "AB-T"].includes(scourRequired)) {
      scourCounts[district] = (scourCounts[district] || 0) + 1;
      totalScour++; // Increment total scour count
    }
  }
});

// Function to update textareas dynamically
function updateTextarea(district, type, value) {
  let districtName = districtIdMap[district]; // Get district name
  if (!districtName) districtName = "all"; // If no district, send to "all"

  const textareaId = `${districtName}-textarea-${type}`; // Generate ID
  const textarea = document.getElementById(textareaId);
  if (textarea) {
    textarea.value = value; // Update the textarea value
  }
}

// Update the corresponding district textareas
Object.entries(districtCounts).forEach(([district, count]) => {
  updateTextarea(district, "routine", count);
});
Object.entries(nstmCounts).forEach(([district, count]) => {
  updateTextarea(district, "nstm", count);
});
Object.entries(specialCounts).forEach(([district, count]) => {
  updateTextarea(district, "special", count);
});
Object.entries(underwaterCounts).forEach(([district, count]) => {
  updateTextarea(district, "underwater", count);
});
Object.entries(elementCounts).forEach(([district, count]) => {
  updateTextarea(district, "element", count);
});
Object.entries(reducedIntervalCounts).forEach(([district, count]) => {
  updateTextarea(district, "reducedinterval", count);
});
Object.entries(extendedIntervalCounts).forEach(([district, count]) => {
  updateTextarea(district, "extendedinterval", count);
});
Object.entries(postedCounts).forEach(([district, count]) => {
  updateTextarea(district, "posted", count);
});
Object.entries(scourCounts).forEach(([district, count]) => {
  updateTextarea(district, "scour", count);
});

// Update the corresponding district textareas
Object.entries(districtCounts).forEach(([district, count]) => {
  updateTextarea(district, "routine", count);

  // Calculate bridge share: (routine inspections per inspector) / 2
  const inspectors = district === "3" ? 6 : 4; // Greenfield (3) has 6 inspectors, others have 4
  const bridgeShare = Math.ceil(count / inspectors / 2); // Divide by inspectors, then by 2

  updateTextarea(district, "bridgeshare", bridgeShare); // Update bridge share
});

// Update total textareas
updateTextarea("all", "routine", totalRoutine);
updateTextarea("all", "nstm", totalNstm);
updateTextarea("all", "special", totalSpecial);
updateTextarea("all", "underwater", totalUnderwater);
updateTextarea("all", "element", totalElement);
updateTextarea("all", "reducedinterval", totalReducedInterval);
updateTextarea("all", "extendedinterval", totalExtendedInterval);
updateTextarea("all", "posted", totalPosted);
updateTextarea("all", "scour", totalScour);

console.log(districtCounts);

// :::: (Error Log) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to count errors per district and update textareas
function findAndUpdateAssetErrors() {
  let errorCounts = {
    freq: {},
    super: {},
    deck: {},
    sub: {},
    wearing: {},
  };

  let errorAssets = {
    freq: {},
    super: {},
    deck: {},
    sub: {},
    wearing: {},
  };

  assetData.forEach((asset) => {
    const district = asset["(2) Highway Agency District:"];
    const status = asset["(41) Structure Open/Posted/Closed:"]; // Check status
    if (status === "K" || district === undefined) return; // Exclude if status is "K"

    let assetNumber = asset["Asset Number"]; // Store asset number

    // Extract necessary values
    let assetValues = {
      deck: parseFloat(asset["(B.C.01) Deck Condition Rating"]),
      inspectionFrequency: parseFloat(asset["(91) Designated Inspection Frequency:"]),
      superstructure: parseFloat(asset["(B.C.02) Superstructure Condition Rating"]),
      substructure: parseFloat(asset["(B.C.03) Substructure Condition Rating"]),
      scourCritical: parseFloat(asset["(113) Scour Critical Bridges:"]),
      mainDesignType: asset["(43B) Structure Type, Main: Type of Design:"],
      wearingSurfaceType: asset["(108A) Wearing Surface Protection System: Wearing Surface"],
      wearingSurface: parseFloat(asset["(B.C.01a) Wearing Surface Condition Rating"]),
      deckStructureType: asset["(107) Deck Structure Type:"],
      underfillValue: asset["(B.C.04) Culvert Condition Rating"],
      membraneValue: asset["(108B) Wearing Surface Protection System: Deck Membrane"],
    };

    let lowestValue = Math.min(assetValues.deck, assetValues.superstructure, assetValues.substructure);

    // Error Check: Frequency Error
    if (lowestValue < 4 && assetValues.inspectionFrequency > 12) {
      errorCounts.freq[district] = (errorCounts.freq[district] || 0) + 1;
      errorAssets.freq[district] = errorAssets.freq[district] || [];
      errorAssets.freq[district].push(assetNumber);
    }

    // Error Check: Deck/Slab Error
    if (assetValues.deck !== assetValues.superstructure && ["1", "01", 1].includes(assetValues.mainDesignType)) {
      errorCounts.super[district] = (errorCounts.super[district] || 0) + 1;
      errorAssets.super[district] = errorAssets.super[district] || [];
      errorAssets.super[district].push(assetNumber);
    }

    // Error Check: Monolithic Error
    if (assetValues.wearingSurfaceType === "1") {
      if (assetValues.deck <= 5 || assetValues.wearingSurface <= 5) {
        if (assetValues.deck !== assetValues.wearingSurface) {
          errorCounts.deck[district] = (errorCounts.deck[district] || 0) + 1;
          errorAssets.deck[district] = errorAssets.deck[district] || [];
          errorAssets.deck[district].push(assetNumber);
        }
      } else {
        if (assetValues.deck !== assetValues.wearingSurface && assetValues.deck !== assetValues.wearingSurface + 1) {
          errorCounts.deck[district] = (errorCounts.deck[district] || 0) + 1;
          errorAssets.deck[district] = errorAssets.deck[district] || [];
          errorAssets.deck[district].push(assetNumber);
        }
      }
    }

    // Error Check: Scour/Sub Error
    if (assetValues.scourCritical <= 2 && assetValues.substructure > assetValues.scourCritical) {
      errorCounts.sub[district] = (errorCounts.sub[district] || 0) + 1;
      errorAssets.sub[district] = errorAssets.sub[district] || [];
      errorAssets.sub[district].push(assetNumber);
    }

    // Error Check: Membrane Error
    if (
      assetValues.wearingSurface > 4 &&
      assetValues.underfillValue === "N" &&
      ["1", "2"].includes(assetValues.deckStructureType) &&
      assetValues.wearingSurfaceType === "6" &&
      ["0", "8", "N"].includes(assetValues.membraneValue)
    ) {
      errorCounts.wearing[district] = (errorCounts.wearing[district] || 0) + 1;
      errorAssets.wearing[district] = errorAssets.wearing[district] || [];
      errorAssets.wearing[district].push(assetNumber);
    }
  });

  // Update textareas for each district
  Object.entries(errorCounts.freq).forEach(([district, count]) => {
    updateTextarea(district, "error-frequency", count);
  });
  Object.entries(errorCounts.super).forEach(([district, count]) => {
    updateTextarea(district, "error-deckslab", count);
  });
  Object.entries(errorCounts.deck).forEach(([district, count]) => {
    updateTextarea(district, "error-monolithic", count);
  });
  Object.entries(errorCounts.sub).forEach(([district, count]) => {
    updateTextarea(district, "error-scoursub", count);
  });
  Object.entries(errorCounts.wearing).forEach(([district, count]) => {
    updateTextarea(district, "error-membrane", count);
  });

  // Calculate the sum for each error type and send it to the corresponding textareas
  let totalFreqErrors = Object.values(errorCounts.freq).reduce((sum, count) => sum + count, 0);
  let totalSuperErrors = Object.values(errorCounts.super).reduce((sum, count) => sum + count, 0);
  let totalDeckErrors = Object.values(errorCounts.deck).reduce((sum, count) => sum + count, 0);
  let totalSubErrors = Object.values(errorCounts.sub).reduce((sum, count) => sum + count, 0);
  let totalWearingErrors = Object.values(errorCounts.wearing).reduce((sum, count) => sum + count, 0);

  // Update the sum of errors in the respective textareas
  document.getElementById("all-textarea-error-frequency").value = totalFreqErrors;
  document.getElementById("all-textarea-error-monolithic").value = totalSuperErrors;
  document.getElementById("all-textarea-error-deckslab").value = totalDeckErrors;
  document.getElementById("all-textarea-error-scoursub").value = totalSubErrors;
  document.getElementById("all-textarea-error-membrane").value = totalWearingErrors;

  // Log error asset numbers by district and error type
  console.log("Errors by District and Type:");
  Object.entries(errorAssets).forEach(([errorType, districts]) => {
    console.log(`\n${errorType.toUpperCase()} Errors:`);
    Object.entries(districts).forEach(([district, assets]) => {
      console.log(`  District ${district}:`, assets);
    });
  });
}

// Call the function to process errors and update the UI
findAndUpdateAssetErrors();

// :::: Not Sorted | Working /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  }, 5000);
}

function showAssetErrorPopup(message) {
  let button = document.getElementById("asset-error-button");
  if (!button) return; // Exit if the button doesn't exist

  // Create the temporary popup div
  let errorPopup = document.createElement("div");
  errorPopup.classList.add("error-popup");
  errorPopup.innerText = message;

  // Append the popup to the body
  document.body.appendChild(errorPopup);

  // Get the position of the button
  let buttonRect = button.getBoundingClientRect();

  // Position it below the button and center it
  errorPopup.style.left = `${buttonRect.left + window.scrollX + buttonRect.width / 2 - errorPopup.offsetWidth / 2}px`;
  errorPopup.style.top = `${buttonRect.bottom + window.scrollY + 10}px`; // Slightly below the button

  // Remove popup after 3 seconds
  setTimeout(() => {
    errorPopup.remove();
  }, 2000);
}

// Add event listeners for each error button
document.querySelector("#error-freq button").addEventListener("click", function () {
  showErrorPopup(this, "Inspection Frequency Error: When the lowest rating is below 4, the frequency must be 12 months or less.");
});

document.querySelector("#error-super button").addEventListener("click", function () {
  showErrorPopup(this, "Deck Slab Error: The deck and superstructure ratings must match for slab bridges.");
});

document.querySelector("#error-deck button").addEventListener("click", function () {
  showErrorPopup(
    this,
    "Monolithic Error: When the deck or wearing surface rating is below 6, they must match; otherwise, the wearing surface rating can be one less."
  );
});

document.querySelector("#error-sub button").addEventListener("click", function () {
  showErrorPopup(this, "Scour Error: When the scour rating is below 3, the substructure rating must be the same or lower.");
});

document.querySelector("#error-wearing button").addEventListener("click", function () {
  showErrorPopup(
    this,
    "Membrane Error: When there is no membrane between a concrete deck and a bituminous wearing surface, the wearing surface rating must be below 5."
  );
});

document.querySelector("#asset-error-button").addEventListener("click", function () {
  showAssetErrorPopup(errorString);
});

// Update summary when changing ratings
function updateObjectRatings(numericalValue, dataCategory) {
  if (searchValue !== "") {
    if (dataCategory === "B.C.01") {
      if (assetObject) {
        assetObject["(B.C.01) Deck Condition Rating"] = numericalValue;
        hideAllErrors();
        displaySummary(assetObject);
      }
    }
    if (dataCategory === "B.C.02") {
      if (assetObject) {
        assetObject["(B.C.02) Superstructure Condition Rating"] = numericalValue;
        hideAllErrors();
        displaySummary(assetObject);
      }
    }
    if (dataCategory === "B.C.03") {
      if (assetObject) {
        assetObject["(B.C.03) Substructure Condition Rating"] = numericalValue;
        hideAllErrors();
        displaySummary(assetObject);
      }
    }
    if (dataCategory === "B.C.04") {
      if (assetObject) {
        assetObject["(B.C.04) Culvert Condition Rating"] = numericalValue;
        hideAllErrors();
        displaySummary(assetObject);
      }
    }
    if (dataCategory === "B.C.01a") {
      if (assetObject) {
        assetObject["(B.C.01a) Wearing Surface Condition Rating"] = numericalValue;
        hideAllErrors();
        displaySummary(assetObject);
      }
    }
  }
  // add scour change
  // add freq change
}

// :::: (Local Storage) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to store user textareas to browser (Save on change)
function saveOnChange(event) {
  localStorage.setItem(event.target.id, event.target.value);
}

// Function to load saved values from localStorage
function loadSavedValues() {
  document.querySelectorAll("[id^='user-textarea']").forEach((textarea) => {
    let savedValue = localStorage.getItem(textarea.id);
    if (savedValue !== null) {
      textarea.value = savedValue;
    }
    textarea.addEventListener("input", saveOnChange); // Listen for any changes
  });
}

// Object to store predefined data based on the input
const data = {
  sh: {
    name: "Stephen Hurst",
    number: "317-509-6407",
    email: "shurst1@indot.in.gov",
    teamleader: "IN000422-2027",
  },
  mf: {
    name: "Matthew Ference",
    number: "317-452-5067",
    email: "mference@indot.in.gov",
    teamleader: "IN000237-2027",
  },
  jw: {
    name: "Jessica Waggoner",
    number: "812-530-6727",
    email: "jwaggoner1@indot.in.gov",
    teamleader: "IN000402-2029",
  },
  ce: {
    name: "Chris Everman",
    number: "812-345-8240",
    email: "ceverman@indot.in.gov",
    teamleader: "IN000114-2029",
  },
  // Add more key-value pairs as needed
};

// Load saved values on page load
window.addEventListener("load", loadSavedValues);

// Event listener for populating predefined data on Enter press
document.getElementById("user-textarea-name").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent newline

    const inputValue = this.value.toLowerCase().trim();

    // Only populate and save if matching data is found
    if (data[inputValue]) {
      document.getElementById("user-textarea-name").value = data[inputValue].name;
      document.getElementById("user-textarea-number").value = data[inputValue].number;
      document.getElementById("user-textarea-email").value = data[inputValue].email;
      document.getElementById("user-textarea-teamleader").value = data[inputValue].teamleader;

      // Manually trigger save for the updated values in localStorage
      localStorage.setItem("user-textarea-name", data[inputValue].name);
      localStorage.setItem("user-textarea-number", data[inputValue].number);
      localStorage.setItem("user-textarea-email", data[inputValue].email);
      localStorage.setItem("user-textarea-teamleader", data[inputValue].teamleader);
    }
  }
});

// Handle double-click to copy text from textareas to clipboard
document.querySelectorAll("[id^='user-textarea']").forEach((textarea) => {
  textarea.addEventListener("dblclick", function () {
    navigator.clipboard.writeText(this.value).then(() => {
      storeClipboardData(this.value); // Store the copied text into clipboard history
      showCopiedMessage(); // Show the "Copied" message
    });
  });
});

// :::: (Glossary Search) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  let searchTerm = "";
  let searchTimeout;
  let specialKeyTimeout;
  let specialKeyActive = false;

  document.addEventListener("keydown", function (event) {
    const glossaryTab = document.getElementById("glossary-tab");
    if (!glossaryTab || glossaryTab.style.display !== "block") {
      return;
    }

    // If Ctrl key is pressed, activate delay
    if (event.ctrlKey) {
      specialKeyActive = true;
      clearTimeout(specialKeyTimeout);
      specialKeyTimeout = setTimeout(() => {
        specialKeyActive = false;
      }, 1000); // 1-second delay after releasing Ctrl
      return;
    }

    // Prevent search while special key delay is active
    if (specialKeyActive) {
      return;
    }

    // Ignore non-character keys
    if (event.key.length > 1) {
      return;
    }

    // Append the typed character to the search term
    searchTerm += event.key.toLowerCase();

    // Reset search term if no keys are pressed within 1 second
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchTerm = "";
    }, 1000);

    // Filter the glossary terms based on the search term
    const matchedTerms = glossaryAllTerms.filter((termObj) => {
      return termObj.term.toLowerCase().startsWith(searchTerm);
    });

    // Scroll to the first matched term's parent div
    if (matchedTerms.length > 0) {
      const firstMatch = matchedTerms[0];
      const termElement = document.querySelector(`.glossary-term-link[data-term="${firstMatch.term.toLowerCase()}"]`);

      if (termElement) {
        const parentElement = termElement.closest(".glossary-card-header");
        if (parentElement) {
          parentElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  });
});

// :::: (Scroll To Top) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (event) {
    const mainSection = document.querySelector("main"); // Adjust selector if needed

    if (event.key === "Home") {
      mainSection.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } else if (event.key === "End") {
      mainSection.scrollTo({ top: mainSection.scrollHeight, left: 0, behavior: "auto" });
    }
  });
});

// :::: (Review Navigate) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".paragraph-navigate").forEach((paragraph) => {
  paragraph.addEventListener("click", () => {
    const target = paragraph.dataset.navigate;
    const button = document.querySelector(`button[data-navigate="${target}"]`);
    if (button) button.click();
  });
});

// :::: (Review DblClick) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Handle double-click to copy text from textareas with id = something-textarea-review to clipboard
document.querySelectorAll("[id$='-textarea-review']").forEach((textarea) => {
  textarea.addEventListener("dblclick", function () {
    navigator.clipboard
      .writeText(this.value)
      .then(() => {
        storeClipboardData(this.value); // Store the copied text into clipboard history
        showCopiedMessage(); // Show the "Copied" message
      })
      .catch((err) => {
        console.error("Error copying text:", err);
      });
  });
});

// :::: (Clipboard History) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ctrl+Shift+Z

// Array to store clipboard history
let clipboardHistory = [];
let redoHistory = []; // To store redo actions

// Limit to how many clipboard items to keep (optional)
const maxHistory = 10;

// Function to handle storing clipboard data
function storeClipboardData(data) {
  if (clipboardHistory.length >= maxHistory) {
    clipboardHistory.shift(); // Remove the oldest entry if the array exceeds maxHistory
  }
  clipboardHistory.push(data);
  // Clear redo history when new copy is made
  redoHistory = [];
}

// Function to show a custom "Copied" message
function showCopiedMessage() {
  // Remove any existing message before showing a new one
  const existingCopiedMessage = document.querySelector(".copied-message");
  if (existingCopiedMessage) {
    existingCopiedMessage.remove();
  }

  // Remove any existing message before showing a new one
  const existingClipboardMessage = document.querySelector(".clipboard-message");
  if (existingClipboardMessage) {
    existingClipboardMessage.remove();
  }

  const copiedMessage = document.createElement("div");
  copiedMessage.classList.add("copied-message"); // Add a class to target this specific message

  // Style the message container to use flexbox
  copiedMessage.style.display = "flex"; // Use flexbox to align items horizontally
  copiedMessage.style.alignItems = "center"; // Vertically align items in the center
  copiedMessage.style.position = "fixed";
  copiedMessage.style.top = "15px";
  copiedMessage.style.left = "50%";
  copiedMessage.style.transform = "translateX(-50%)";
  copiedMessage.style.borderRadius = "8px"; // Rounded corners for the container
  copiedMessage.style.fontSize = "14px"; // Font size
  copiedMessage.style.maxWidth = "80%"; // Max width of the message block
  copiedMessage.style.wordWrap = "break-word"; // Ensure long lines of text wrap correctly
  copiedMessage.style.zIndex = "9999"; // Ensure it appears above other content

  // Create the "Copied:" part with different background
  const copiedPart = document.createElement("div");
  copiedPart.textContent = "Copied!";
  copiedPart.style.backgroundColor = "rgba(67, 84, 167, 0.9)"; // Blue background for "Copied"
  copiedPart.style.color = "#fff"; // White text color
  copiedPart.style.padding = "6px 10px"; // Reduced padding for the "Copied:" part
  // copiedPart.style.fontWeight = "bold"; // Bold text for "Copied:"
  copiedPart.style.marginRight = "8px"; // Space between "Copied:" and the next text
  copiedPart.style.borderRadius = "4px"; // Rounded corners for the "Copied:" part

  // Create the part with instructions (Ctrl+Shift+Z and Ctrl+Shift+Y)
  const instructionsPart = document.createElement("div");
  instructionsPart.textContent = "Press Ctrl+Shift+Z to undo and Ctrl+Shift+Y to redo.";
  instructionsPart.style.backgroundColor = "#333"; // Dark background for instructions
  instructionsPart.style.color = "#fff"; // White text color
  instructionsPart.style.padding = "6px 10px"; // Reduced padding for instructions
  instructionsPart.style.flexGrow = "1"; // Allow content to take remaining space if needed
  instructionsPart.style.borderRadius = "4px"; // Rounded corners for the instructions part

  // Append the "Copied:" part and the instructions to the message container
  copiedMessage.appendChild(copiedPart);
  copiedMessage.appendChild(instructionsPart);

  // Append the whole message container to the body
  document.body.appendChild(copiedMessage);

  // Remove the message after 2 seconds
  setTimeout(() => {
    copiedMessage.remove();
  }, 3000);
}

// Function to show the current clipboard value (used for Undo/Redo)
function showCurrentClipboardValue(value) {
  // Remove any existing message before showing a new one
  const existingCopiedMessage = document.querySelector(".copied-message");
  if (existingCopiedMessage) {
    existingCopiedMessage.remove();
  }

  // Remove any existing message before showing a new one
  const existingClipboardMessage = document.querySelector(".clipboard-message");
  if (existingClipboardMessage) {
    existingClipboardMessage.remove();
  }

  // Create the message container
  const currentMessage = document.createElement("div");
  currentMessage.classList.add("clipboard-message"); // Add a class to target this specific message

  // Style the message container to use flexbox
  currentMessage.style.display = "flex"; // Use flexbox to align items horizontally
  currentMessage.style.alignItems = "center"; // Vertically align items in the center
  currentMessage.style.position = "fixed";
  currentMessage.style.top = "15px";
  currentMessage.style.left = "50%";
  currentMessage.style.transform = "translateX(-50%)";
  currentMessage.style.borderRadius = "8px"; // Rounded corners for the message container
  currentMessage.style.fontSize = "14px"; // Font size
  currentMessage.style.maxWidth = "80%"; // Max width of the message block
  currentMessage.style.wordWrap = "break-word"; // Ensure long lines of text wrap correctly
  currentMessage.style.zIndex = "9999"; // Ensure it appears above other content

  // Create a div for the "Clipboard Contents:" part with different background
  const titlePart = document.createElement("div");
  titlePart.textContent = "Clipboard Contents:";
  titlePart.style.padding = "6px 10px"; // Increased padding for better spacing
  // titlePart.style.fontWeight = "bold"; // Bold text for the title
  titlePart.style.marginRight = "8px"; // Space between the title and content
  titlePart.style.borderRadius = "4px"; // Rounded corners for the title
  titlePart.style.backgroundColor = "rgba(29, 110, 32, 0.9)"; // Green background for the title
  titlePart.style.color = "#fff"; // White text color

  // Create a div for the clipboard content itself (rest of the message)
  const contentPart = document.createElement("div");
  contentPart.textContent = value.slice(0, 100); // Show more of the text (100 characters)
  contentPart.style.padding = "6px 10px"; // Increased padding for better spacing
  contentPart.style.flexGrow = "1"; // Allow content to take remaining space if needed
  contentPart.style.borderRadius = "4px"; // Rounded corners for the content part
  contentPart.style.backgroundColor = "#333"; // Dark background for content part
  contentPart.style.color = "#fff"; // White text color

  // Append the title and content to the message container
  currentMessage.appendChild(titlePart);
  currentMessage.appendChild(contentPart);

  // Append the whole message container to the body
  document.body.appendChild(currentMessage);

  // Remove the message after 5 seconds
  setTimeout(() => {
    currentMessage.remove();
  }, 5000);
}

// Handle double-click to copy text from textareas to clipboard
document.querySelectorAll("[id$='-textarea-review']").forEach((textarea) => {
  textarea.addEventListener("dblclick", function () {
    const value = this.value;
    navigator.clipboard
      .writeText(value)
      .then(() => {
        storeClipboardData(value); // Store the copied text into clipboard history
        showCopiedMessage(); // Show the "Copied" message
      })
      .catch((err) => {
        console.error("Error copying text:", err);
      });
  });
});

// Handle keyboard shortcut (Ctrl + Shift + Z) to restore previous clipboard content
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.shiftKey && event.key === "Z") {
    event.preventDefault(); // Prevent the default browser undo/redo action

    if (clipboardHistory.length > 1) {
      const removed = clipboardHistory.pop(); // Remove most recent copy
      redoHistory.push(removed); // Save for redo
      const previousClipboard = clipboardHistory[clipboardHistory.length - 1];
      navigator.clipboard
        .writeText(previousClipboard)
        .then(() => {
          showCurrentClipboardValue(previousClipboard); // Show current clipboard value (Undo)
        })
        .catch((err) => {
          console.error("Error restoring clipboard value:", err);
        });
    } else {
      console.log("Not enough clipboard history to undo.");
    }
  }
});

// Handle keyboard shortcut (Ctrl + Shift + Y) to redo clipboard content
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.shiftKey && event.key === "Y") {
    event.preventDefault(); // Prevent the default browser redo action

    if (redoHistory.length > 0) {
      const redoValue = redoHistory.pop(); // Get the next clipboard value to redo
      clipboardHistory.push(redoValue); // Push to history again
      navigator.clipboard
        .writeText(redoValue)
        .then(() => {
          showCurrentClipboardValue(redoValue); // Show current clipboard value (Redo)
        })
        .catch((err) => {
          console.error("Error redoing clipboard value:", err);
        });
    } else {
      console.log("No redo clipboard history.");
    }
  }
});

// Capture manual copy events (Ctrl+C, right-click copy) inside the page
document.addEventListener("copy", (event) => {
  let copiedText = "";

  const activeEl = document.activeElement;
  if (activeEl && (activeEl.tagName === "TEXTAREA" || activeEl.tagName === "INPUT")) {
    copiedText = activeEl.value.substring(activeEl.selectionStart, activeEl.selectionEnd);
  } else {
    copiedText = window.getSelection().toString();
  }

  if (copiedText) {
    storeClipboardData(copiedText);
    showCopiedMessage(); // Show "Copied" message for manual copy
    console.log("Captured copy:", copiedText);
  }
});

// :::: (Tab Order) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Disable tabbing globally by setting tabindex="-1" for all elements
document.querySelectorAll("div").forEach((element) => {
  element.setAttribute("tabindex", "-1");
});

// Function to enable tabbing on specific elements
function enableTabbing(elementId, tabindexValue) {
  const element = document.getElementById(elementId);
  if (element) {
    element.setAttribute("tabindex", tabindexValue);
  }
}

// Enable tabbing for specific elements
// enableTabbing('tab2', 1);   // Enable tabbing for Tab 2
// enableTabbing('input2', 2);  // Enable tabbing for Input 2
// enableTabbing('button1', 3); // Enable tabbing for Button 1

// :::: (Arrow Buttons) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getVisibleElements(rowClass) {
  return Array.from(document.querySelectorAll(`.${rowClass}`)).filter((el) => el.offsetParent !== null);
}

function getAllRowClasses() {
  const allElements = document.querySelectorAll("[class*='row']");
  const rowClasses = new Set();

  allElements.forEach((el) => {
    // Only include the row if it is visible
    if (el.offsetParent !== null) {
      el.classList.forEach((cls) => {
        if (cls.startsWith("row")) {
          rowClasses.add(cls);
        }
      });
    }
  });

  return Array.from(rowClasses).sort(); // optional: sort row1, row2, row3
}

window.addEventListener("keydown", function (event) {
  let activeElement = document.activeElement;
  let rowClass = Array.from(activeElement.classList).find((cls) => cls.startsWith("row"));
  if (!rowClass) return;

  const elements = getVisibleElements(rowClass);
  const index = elements.indexOf(activeElement);
  const allRows = getAllRowClasses();
  const rowIndex = allRows.indexOf(rowClass);

  if (event.code === "ArrowRight") {
    let activeElement = document.activeElement;

    // Check if the active element is a textarea
    if (activeElement.tagName.toLowerCase() === "textarea") {
      const textarea = activeElement;
      const cursorPosition = textarea.selectionEnd;

      // If the cursor is at the end of the textarea, proceed with normal behavior
      if (cursorPosition === textarea.value.length) {
        const nextIndex = (index + 1) % elements.length;
        elements[nextIndex].focus();
        event.preventDefault();
      } else {
        // If the cursor is not at the end, allow the natural behavior (move cursor right)
        if (textarea.selectionEnd === textarea.value.length) {
          textarea.selectionStart = 0; // Set cursor to the start
        }
      }
    } else {
      // Normal behavior if not in a textarea
      const nextIndex = (index + 1) % elements.length;
      elements[nextIndex].focus();
      event.preventDefault();
    }
  }

  if (event.code === "ArrowLeft") {
    let activeElement = document.activeElement;

    // Check if the active element is a textarea
    if (activeElement.tagName.toLowerCase() === "textarea") {
      const textarea = activeElement;
      const cursorPosition = textarea.selectionStart;

      // If the cursor is at the beginning of the textarea, proceed with normal behavior
      if (cursorPosition === 0) {
        const nextIndex = (index - 1 + elements.length) % elements.length;
        elements[nextIndex].focus();
        event.preventDefault();
      } else {
        // If the cursor is not at the beginning, allow the natural behavior (move cursor left)
        if (textarea.selectionStart === 0) {
          textarea.selectionEnd = textarea.value.length; // Set cursor to the end
        }
      }
    } else {
      // Normal behavior if not in a textarea
      const nextIndex = (index - 1 + elements.length) % elements.length;
      elements[nextIndex].focus();
      event.preventDefault();
    }
  }

  if (event.code === "ArrowDown") {
    const activeElement = document.activeElement;

    // Check if the active element is a textarea
    if (activeElement.tagName.toLowerCase() === "textarea") {
      const cursorPosition = activeElement.selectionStart; // Get the cursor position
      const textLength = activeElement.value.length; // Get the text length

      // If the cursor is at the end, check if it's the last row and jump to the first row
      if (cursorPosition === textLength) {
        if (rowIndex === allRows.length - 1) {
          // It's the last row, so focus the first element in Row1
          const firstRow = getVisibleElements(allRows[0]);
          if (firstRow.length) {
            firstRow[0].focus();
          }
        } else {
          // Move focus to the first element in the next row
          const nextRowIndex = (rowIndex + 1) % allRows.length;
          const nextRow = getVisibleElements(allRows[nextRowIndex]);

          if (nextRow.length) {
            // Check if there's an active button in the next row
            const activeButton = nextRow.find((el) => el.tagName.toLowerCase() === "button" && el.classList.contains("active"));
            if (activeButton) {
              activeButton.focus(); // Focus the active button
            } else {
              nextRow[0].focus(); // If no active button, focus the first visible element
            }
          }
        }
        event.preventDefault();
      }
      // If the cursor is not at the end, allow natural ArrowDown behavior
      else {
        return; // Let the browser handle the default behavior
      }
    } else {
      // Normal behavior for non-textarea elements
      const nextRowIndex = (rowIndex + 1) % allRows.length;
      const nextRow = getVisibleElements(allRows[nextRowIndex]);

      if (nextRow.length) {
        // Check if there's an active button in the next row
        const activeButton = nextRow.find((el) => el.tagName.toLowerCase() === "button" && el.classList.contains("active"));
        if (activeButton) {
          activeButton.focus(); // Focus the active button
        } else {
          nextRow[0].focus(); // If no active button, focus the first visible element
        }
      }
      event.preventDefault();
    }
  }

  if (event.code === "ArrowUp") {
    let activeElement = document.activeElement;

    // Check if the active element is a textarea
    if (activeElement.tagName.toLowerCase() === "textarea") {
      const textarea = activeElement;
      const cursorPosition = textarea.selectionStart;

      // If the cursor is at the beginning of the textarea, proceed with normal behavior
      if (cursorPosition === 0) {
        const nextRowIndex = (rowIndex - 1 + allRows.length) % allRows.length;
        const nextRow = getVisibleElements(allRows[nextRowIndex]);
        if (nextRow.length) {
          nextRow[0].focus(); // Focus the first visible element in the previous row
        }
        event.preventDefault();
      }
    } else {
      // Normal behavior if not in a textarea
      const nextRowIndex = (rowIndex - 1 + allRows.length) % allRows.length;
      const nextRow = getVisibleElements(allRows[nextRowIndex]);
      if (nextRow.length) {
        // Check if there's an active button in the previous row
        const activeButton = nextRow.find((el) => el.tagName.toLowerCase() === "button" && el.classList.contains("active"));
        if (activeButton) {
          activeButton.focus(); // Focus the active button
        } else {
          nextRow[0].focus(); // If no active button, focus the first visible element
        }
      }
      event.preventDefault();
    }
  }
});

// :::: (Type Rating) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener("keydown", function (event) {
  // Ignore if typing in input or textarea
  if (["INPUT", "TEXTAREA"].includes(event.target.tagName)) return;

  const key = event.key.toUpperCase();

  // Allowed keys: 0-9 and specific letters
  if (!/^[0-9ABCDEFGNPUY]$/.test(key)) return;

  // List of possible visible container IDs
  const containerIds = [
    "bridge-alignment-pg2",
    "bridge-approach-pg2",
    "bridge-joints-pg2",
    "bridge-joints-pg5",
    "bridge-railings-pg2",
    "bridge-railings-pg5",
    "bridge-deck-pg2",
    "bridge-deck-pg5",
    "bridge-super-pg2",
    "bridge-super-pg5",
    "bridge-bearings-pg2",
    "bridge-sub-pg2",
    "bridge-sub-pg5",
    "bridge-culvert-pg2",
    "bridge-channel-pg2",
    "bridge-channel-pg5",
    "bridge-scour-pg2",
    "bridge-scour-pg5",
    "bridge-overtopping-pg2",
    "bridge-wildlife-pg2",
    "bridge-wildlife-pg4",
  ];

  // Find the currently visible container
  const activeContainer = containerIds.map((id) => document.getElementById(id)).find((el) => el && el.offsetParent !== null);

  if (!activeContainer) return; // No visible container

  // Find the rating line matching the key
  const targetLine = Array.from(activeContainer.querySelectorAll(".content-container-rating-lines")).find((line) => {
    const span = line.querySelector(".content-container-rating-numerical");
    return span && span.textContent.trim().toUpperCase() === key;
  });

  if (targetLine) {
    handleHighlight({ target: targetLine });
    event.preventDefault();
  }
});

// :::: (Working) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//

//
