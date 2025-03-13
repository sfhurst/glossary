// :::: (Bridge Component Glossary Tabs) ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to adjust styles for glossary containers dynamically
function adjustContainerStyles(event) {
  const clickedButton = event.target;

  // Extract section prefix dynamically from button ID (e.g., "channel-glossary-button" → "channel")
  const match = clickedButton.id.match(/^(.*?)-glossary-button$/) || clickedButton.className.match(/bridge-(.*?)-buttons/);

  if (!match) return; // Exit if the button doesn't match expected patterns

  const sectionPrefix = match[1]; // Extracted section name (e.g., "alignment", "channel")
  const glossaryContainer = document.getElementById(`${sectionPrefix}-main-content-container`);

  if (!glossaryContainer) return; // Exit if container isn't found

  // Check if the clicked button is the glossary button
  const isGlossaryButton = clickedButton.id === `${sectionPrefix}-glossary-button`;

  if (isGlossaryButton) {
    // Apply glossary styles
    glossaryContainer.style.padding = "0";
    glossaryContainer.style.backgroundColor = "transparent";
    glossaryContainer.style.border = "none";
    glossaryContainer.style.margin = "20px 10px 20px 10px";
  } else {
    // Revert to default styles for other buttons
    glossaryContainer.style.padding = "10px 20px";
    glossaryContainer.style.textAlign = "left";
    glossaryContainer.style.height = "fit-content";
    glossaryContainer.style.margin = "10px 5px";
    glossaryContainer.style.border = "solid 2px grey";
    glossaryContainer.style.borderRadius = "1px";
    glossaryContainer.style.backgroundColor = "var(--main-color)";
  }
}

// Function to initialize event listeners dynamically
function initializeGlossaryStyleAdjustment() {
  // Select all glossary buttons
  const allGlossaryButtons = document.querySelectorAll("[id$='-glossary-button']");

  allGlossaryButtons.forEach((button) => {
    button.addEventListener("click", adjustContainerStyles);

    // Extract section prefix dynamically
    const match = button.id.match(/^(.*?)-glossary-button$/);
    if (match) {
      const sectionPrefix = match[1];
      const otherButtons = document.querySelectorAll(`.bridge-${sectionPrefix}-buttons`);

      otherButtons.forEach((otherButton) => {
        otherButton.addEventListener("click", adjustContainerStyles);
      });
    }
  });
}

// Auto-initialize for all sections
initializeGlossaryStyleAdjustment();
