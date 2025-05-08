document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("theme-toggle");
  const logoImg = document.querySelector(".iterate-img");

  slider.addEventListener("click", () => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");

    if (current === "blue") {
      html.setAttribute("data-theme", "white");
      logoImg.src = "./media/logo-rings-only-orange.png";
    } else {
      html.setAttribute("data-theme", "blue");
      logoImg.src = "./media/logo-rings-only-purple.png";
    }
  });
});

// Table of Contents

// :::::: (Field Population)
// :::: (Populate Defect Glossary)
// :::: (Populate SNBI Glossary)
// :::: (Populate Culvert Glossary)
// :::: (Populate Wall Glossary)
// :::: (Populate Compound Word Glossary)
// :::: (Populate Full Glossary)
// :::: (Populate County Glossary)

// :::::: (Page Button Clicks)
// :::: (Display Pages on Button Click)
// :::: (Button Click Array of Classes)
// :::: (Button Classes Add Event Listeners)
// :::: (Active Button Clicked)

// :::: (Glossary Search)
// :::: (Scroll To Top)
// :::: (Tab Order)
// :::: (Arrow Buttons)
// :::: (Enter & Row Down)
// :::: (Arrow Message)
// :::: (Glossary Shortcut Ctrl + Shift + G)

// :::: (Google Analytics)

// :::: (Not Sorted || Working)

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// :::::: (Field Population) //////////////////////////////////////////////////////////////////////////

// :::: (Populate Defect Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let glossaryDefects = [];

// Populate glossary with defect definitions from glossaryMain
function populateGlossaryDefects() {
  const container = document.querySelector("#glossary-defects-tab .glossary-numeric-ratings-container");

  // Separate entries with and without 'order' key
  const ordered = [];
  const unordered = [];

  glossaryMain.forEach((item) => {
    // Check for "defect classes" filter first
    if (item.filter && item.filter.includes("defect classes")) {
      if (typeof item.order === "number") {
        ordered.push(item);
      } else {
        unordered.push(item);
      }
    }
    // Then check for "defects" filter and push to the end
    else if (item.filter && item.filter.includes("defects")) {
      unordered.push(item); // Push to the end
    }
  });

  // Sort the ordered entries
  ordered.sort((a, b) => a.order - b.order);

  // Combine into final list
  const defectTerms = [...ordered, ...unordered];

  // How many will get the "glossary-card-header2" class
  const defectClassCount = ordered.length;

  // Build cards and populate the array with term-definition objects
  defectTerms.forEach((defect, index) => {
    // Create term-definition object
    const termDef = {
      term: defect.term,
      definition: defect.definition,
    };
    glossaryDefects.push(termDef);

    const card = document.createElement("div");
    card.classList.add("glossary-content-cards");

    const header = document.createElement("div");
    // Apply different class based on index
    if (index < defectClassCount) {
      header.classList.add("glossary-card-header");
      header.classList.add("glossary-card-header-defects");
    } else {
      header.classList.add("glossary-card-header");
    }

    const link = document.createElement("a");
    const search = defect.search || `What is "${defect.term}" in ${defect.discipline}?`;
    link.classList.add("glossary-term-link");
    link.textContent = defect.term;

    // Add the data-term attribute for search purposes
    link.setAttribute("data-term", defect.term.toLowerCase());

    link.href = defect.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
    link.target = "_blank";

    header.appendChild(link);

    const paragraph = document.createElement("p");
    paragraph.classList.add("glossary-card-paragraph");
    paragraph.textContent = defect.definition;

    card.appendChild(header);
    card.appendChild(paragraph);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", populateGlossaryDefects);

// :::: (Populate Bridge Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let glossaryBridge = [];
// Populate glossary with bridge definitions
function populateGlossaryBridge() {
  const container = document.querySelector("#glossary-bridge-tab .glossary-numeric-ratings-container");

  // Create an array to hold term and definition objects

  // Loop through each glossary term that includes "bridge" in the filter array
  // glossaryTerms.forEach((thing) => {
  glossaryMain
    .filter((thing) => Array.isArray(thing.filter) && thing.filter.includes("bridge"))
    .forEach((thing) => {
      // Create term-definition object
      const termDef = {
        term: thing.term,
        definition: thing.definition,
      };
      glossaryBridge.push(termDef);

      // Create the card container
      const card = document.createElement("div");
      card.classList.add("glossary-content-cards");

      // Create the header for the card with the thing term
      const header = document.createElement("div");
      header.classList.add("glossary-card-header");

      // Create the hidden link for the term
      const link = document.createElement("a");
      let search = thing.search || `What is "${thing.term}" in ${thing.discipline}?`; // Search query
      link.classList.add("glossary-term-link");
      link.textContent = thing.term;

      // Add the data-term attribute for search purposes
      link.setAttribute("data-term", thing.term.toLowerCase()); // Add the data-term attribute here

      // If thing.link exists, use it; otherwise, fall back to Google search
      link.href = thing.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
      link.target = "_blank";

      // Append the link inside the header div
      header.appendChild(link);

      // Create the paragraph for the card with the thing definition
      const paragraph = document.createElement("p");
      paragraph.classList.add("glossary-card-paragraph");
      paragraph.textContent = thing.definition;

      // Assemble the card elements
      card.appendChild(header);
      card.appendChild(paragraph);
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateGlossaryBridge);

// :::: (Populate Culvert Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let glossaryCulvert = [];
// Populate glossary with culvert definitions
function populateGlossaryCulvert() {
  const container = document.querySelector("#glossary-culvert-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term that includes "culvert" in the filter array
  // glossaryTerms.forEach((thing) => {
  glossaryMain
    .filter((thing) => Array.isArray(thing.filter) && thing.filter.includes("culvert"))
    .forEach((thing) => {
      // Create term-definition object
      const termDef = {
        term: thing.term,
        definition: thing.definition,
      };
      glossaryCulvert.push(termDef);

      // Create the card container
      const card = document.createElement("div");
      card.classList.add("glossary-content-cards");

      // Create the header for the card with the thing term
      const header = document.createElement("div");
      header.classList.add("glossary-card-header");

      // Create the hidden link for the term
      const link = document.createElement("a");
      let search = thing.search || `What is "${thing.term}" in ${thing.discipline}?`; // Search query
      link.classList.add("glossary-term-link");
      link.textContent = thing.term;

      // Add the data-term attribute for search purposes
      link.setAttribute("data-term", thing.term.toLowerCase()); // Add the data-term attribute here

      // If thing.link exists, use it; otherwise, fall back to Google search
      link.href = thing.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
      link.target = "_blank";

      // Append the link inside the header div
      header.appendChild(link);

      // Create the paragraph for the card with the thing definition
      const paragraph = document.createElement("p");
      paragraph.classList.add("glossary-card-paragraph");
      paragraph.textContent = thing.definition;

      // Assemble the card elements
      card.appendChild(header);
      card.appendChild(paragraph);
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateGlossaryCulvert);

// :::: (Populate Wall Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let glossaryWall = [];
// Populate glossary with wall definitions
function populateGlossaryWall() {
  const container = document.querySelector("#glossary-wall-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term that includes "wall" in the filter array
  // glossaryTerms.forEach((thing) => {
  glossaryMain
    .filter((thing) => Array.isArray(thing.filter) && thing.filter.includes("wall"))
    .forEach((thing) => {
      // Create term-definition object
      const termDef = {
        term: thing.term,
        definition: thing.definition,
      };
      glossaryWall.push(termDef);

      // Create the card container
      const card = document.createElement("div");
      card.classList.add("glossary-content-cards");

      // Create the header for the card with the thing term
      const header = document.createElement("div");
      header.classList.add("glossary-card-header");

      // Create the hidden link for the term
      const link = document.createElement("a");
      let search = thing.search || `What is "${thing.term}" in ${thing.discipline}?`; // Search query
      link.classList.add("glossary-term-link");
      link.textContent = thing.term;

      // Add the data-term attribute for search purposes
      link.setAttribute("data-term", thing.term.toLowerCase()); // Add the data-term attribute here

      // If thing.link exists, use it; otherwise, fall back to Google search
      link.href = thing.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
      link.target = "_blank";

      // Append the link inside the header div
      header.appendChild(link);

      // Create the paragraph for the card with the thing definition
      const paragraph = document.createElement("p");
      paragraph.classList.add("glossary-card-paragraph");
      paragraph.textContent = thing.definition;

      // Assemble the card elements
      card.appendChild(header);
      card.appendChild(paragraph);
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateGlossaryWall);

// :::: (Populate Compounds Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let glossaryCompounds = [];
// Populate glossary with compounds definitions
function populateGlossaryCompounds() {
  const container = document.querySelector("#glossary-compounds-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term that includes "compounds" in the filter array
  // glossaryTerms.forEach((thing) => {
  glossaryMain
    .filter((thing) => Array.isArray(thing.filter) && thing.filter.includes("compounds"))
    .forEach((thing) => {
      // Create term-definition object
      const termDef = {
        term: thing.term,
        definition: thing.definition,
      };
      glossaryCompounds.push(termDef);

      // Create the card container
      const card = document.createElement("div");
      card.classList.add("glossary-content-cards");

      // Create the header for the card with the thing term
      const header = document.createElement("div");
      header.classList.add("glossary-card-header");

      // Create the hidden link for the term
      const link = document.createElement("a");
      let search = thing.search || `What is "${thing.term}" in ${thing.discipline}?`; // Search query
      link.classList.add("glossary-term-link");
      link.textContent = thing.term;

      // Add the data-term attribute for search purposes
      link.setAttribute("data-term", thing.term.toLowerCase()); // Add the data-term attribute here

      // If thing.link exists, use it; otherwise, fall back to Google search
      link.href = thing.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
      link.target = "_blank";

      // Append the link inside the header div
      header.appendChild(link);

      // Create the paragraph for the card with the thing definition
      const paragraph = document.createElement("p");
      paragraph.classList.add("glossary-card-paragraph");
      paragraph.textContent = thing.definition;

      // Assemble the card elements
      card.appendChild(header);
      card.appendChild(paragraph);
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateGlossaryCompounds);

// :::: (Populate Full Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Populate glossary with all definitions (Text Content Insertion)
function populateGlossaryAll() {
  const container3 = document.querySelector("#glossary-main-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term and create a glossary card for each
  glossaryMain.forEach((defect3) => {
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

    // Special case for "iterate" to use styled HTML
    if (defect3.term.toLowerCase() === "iterate") {
      link3.innerHTML = '<span class="ite-text">ite<span class="rate-text">rate</span></span>';
    } else {
      link3.textContent = defect3.term;
    }

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

// :::: (Populate BIRM Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Populate glossary with BIRM definitions (Text Content Insertion)
function populateGlossaryBIRM() {
  const container3 = document.querySelector("#glossary-birm-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term and create a glossary card for each
  glossaryBIRM.forEach((defect3) => {
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

    // Special case for "iterate" to use styled HTML
    if (defect3.term.toLowerCase() === "iterate") {
      link3.innerHTML = '<span class="ite-text">ite<span class="rate-text">rate</span></span>';
    } else {
      link3.textContent = defect3.term;
    }

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

document.addEventListener("DOMContentLoaded", populateGlossaryBIRM);

// :::: (Populate County Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Populate glossary with counties
// Function to populate the county glossary
function populateCountyGlossary() {
  const container = document.querySelector("#glossary-county-tab .glossary-card-paragraph");

  if (!container) {
    console.error("Glossary container not found.");
    return;
  }

  // Clear any existing content
  container.innerHTML = ""; // Not ideal, you can remove this if you prefer to create elements directly

  // Use the indianaCounties array
  const countyObject = indianaCounties;

  // If found, populate with county data
  if (Array.isArray(indianaCounties)) {
    indianaCounties.forEach(({ code, description }) => {
      const countyItem = document.createElement("div");
      countyItem.classList.add("county-item");

      const link = document.createElement("a");
      link.classList.add("glossary-term-link");
      link.href = `https://www.google.com/maps?q=${encodeURIComponent(description + " County, Indiana")}`;
      link.target = "_blank";

      const codeSpan = document.createElement("span");
      codeSpan.classList.add("county-code");
      codeSpan.textContent = code;

      const dashText = document.createTextNode(" - ");

      const descriptionSpan = document.createElement("span");
      descriptionSpan.classList.add("county-description");
      descriptionSpan.textContent = description;

      link.appendChild(codeSpan);
      link.appendChild(dashText);
      link.appendChild(descriptionSpan);

      countyItem.appendChild(link);
      container.appendChild(countyItem);
    });
  } else {
    console.error("indianaCounties is not an array.");
  }
}

// Call the function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", populateCountyGlossary);

// :::: (Populate NSTM Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let glossaryNSTM = [];
// Populate glossary with nstm definitions
function populateGlossaryNSTM() {
  const container = document.querySelector("#glossary-nstm-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term that includes "NSTM" in the filter array
  // glossaryTerms.forEach((thing) => {
  glossaryMain
    .filter((thing) => Array.isArray(thing.filter) && thing.filter.includes("NSTM"))
    .forEach((thing) => {
      // Create term-definition object
      const termDef = {
        term: thing.term,
        definition: thing.definition,
      };
      glossaryNSTM.push(termDef);

      // Create the card container
      const card = document.createElement("div");
      card.classList.add("glossary-content-cards");

      // Create the header for the card with the thing term
      const header = document.createElement("div");
      header.classList.add("glossary-card-header");

      // Create the hidden link for the term
      const link = document.createElement("a");
      let search = thing.search || `What is "${thing.term}" in ${thing.discipline}?`; // Search query
      link.classList.add("glossary-term-link");
      link.textContent = thing.term;

      // Add the data-term attribute for search purposes
      link.setAttribute("data-term", thing.term.toLowerCase()); // Add the data-term attribute here

      // If thing.link exists, use it; otherwise, fall back to Google search
      link.href = thing.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
      link.target = "_blank";

      // Append the link inside the header div
      header.appendChild(link);

      // Create the paragraph for the card with the thing definition
      const paragraph = document.createElement("p");
      paragraph.classList.add("glossary-card-paragraph");
      paragraph.textContent = thing.definition;

      // Assemble the card elements
      card.appendChild(header);
      card.appendChild(paragraph);
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateGlossaryNSTM);

// :::: (Populate Joints Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let glossaryJoints = [];
// Populate glossary with joints definitions
function populateGlossaryJoints() {
  const container = document.querySelector("#glossary-joints-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term that includes "joints" in the filter array
  // glossaryTerms.forEach((thing) => {
  glossaryMain
    .filter((thing) => Array.isArray(thing.filter) && thing.filter.includes("joints"))
    .forEach((thing) => {
      // Create term-definition object
      const termDef = {
        term: thing.term,
        definition: thing.definition,
      };
      glossaryJoints.push(termDef);

      // Create the card container
      const card = document.createElement("div");
      card.classList.add("glossary-content-cards");

      // Create the header for the card with the thing term
      const header = document.createElement("div");
      header.classList.add("glossary-card-header");

      // Create the hidden link for the term
      const link = document.createElement("a");
      let search = thing.search || `What is "${thing.term}" in ${thing.discipline}?`; // Search query
      link.classList.add("glossary-term-link");
      link.textContent = thing.term;

      // Add the data-term attribute for search purposes
      link.setAttribute("data-term", thing.term.toLowerCase()); // Add the data-term attribute here

      // If thing.link exists, use it; otherwise, fall back to Google search
      link.href = thing.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
      link.target = "_blank";

      // Append the link inside the header div
      header.appendChild(link);

      // Create the paragraph for the card with the thing definition
      const paragraph = document.createElement("p");
      paragraph.classList.add("glossary-card-paragraph");
      paragraph.textContent = thing.definition;

      // Assemble the card elements
      card.appendChild(header);
      card.appendChild(paragraph);
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateGlossaryJoints);

// :::: (Populate Components Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let glossaryComponents = [];
// Populate glossary with components definitions
function populateGlossaryComponents() {
  const container = document.querySelector("#glossary-components-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term that includes "components" in the filter array
  // glossaryTerms.forEach((thing) => {
  glossaryMain
    .filter((thing) => Array.isArray(thing.filter) && thing.filter.includes("components"))
    .forEach((thing) => {
      // Create term-definition object
      const termDef = {
        term: thing.term,
        definition: thing.definition,
      };
      glossaryComponents.push(termDef);

      // Create the card container
      const card = document.createElement("div");
      card.classList.add("glossary-content-cards");

      // Create the header for the card with the thing term
      const header = document.createElement("div");
      header.classList.add("glossary-card-header");

      // Create the hidden link for the term
      const link = document.createElement("a");
      let search = thing.search || `What is "${thing.term}" in ${thing.discipline}?`; // Search query
      link.classList.add("glossary-term-link");
      link.textContent = thing.term;

      // Add the data-term attribute for search purposes
      link.setAttribute("data-term", thing.term.toLowerCase()); // Add the data-term attribute here

      // If thing.link exists, use it; otherwise, fall back to Google search
      link.href = thing.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
      link.target = "_blank";

      // Append the link inside the header div
      header.appendChild(link);

      // Create the paragraph for the card with the thing definition
      const paragraph = document.createElement("p");
      paragraph.classList.add("glossary-card-paragraph");
      paragraph.textContent = thing.definition;

      // Assemble the card elements
      card.appendChild(header);
      card.appendChild(paragraph);
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateGlossaryComponents);

// :::: (Populate Welds Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let glossaryWelds = [];
// Populate glossary with welds definitions
function populateGlossaryWelds() {
  const container = document.querySelector("#glossary-welds-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term that includes "welds" in the filter array
  // glossaryTerms.forEach((thing) => {
  glossaryMain
    .filter((thing) => Array.isArray(thing.filter) && thing.filter.includes("welds"))
    .forEach((thing) => {
      // Create term-definition object
      const termDef = {
        term: thing.term,
        definition: thing.definition,
      };
      glossaryWelds.push(termDef);

      // Create the card container
      const card = document.createElement("div");
      card.classList.add("glossary-content-cards");

      // Create the header for the card with the thing term
      const header = document.createElement("div");
      header.classList.add("glossary-card-header");

      // Create the hidden link for the term
      const link = document.createElement("a");
      let search = thing.search || `What is "${thing.term}" in ${thing.discipline}?`; // Search query
      link.classList.add("glossary-term-link");
      link.textContent = thing.term;

      // Add the data-term attribute for search purposes
      link.setAttribute("data-term", thing.term.toLowerCase()); // Add the data-term attribute here

      // If thing.link exists, use it; otherwise, fall back to Google search
      link.href = thing.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
      link.target = "_blank";

      // Append the link inside the header div
      header.appendChild(link);

      // Create the paragraph for the card with the thing definition
      const paragraph = document.createElement("p");
      paragraph.classList.add("glossary-card-paragraph");
      paragraph.textContent = thing.definition;

      // Assemble the card elements
      card.appendChild(header);
      card.appendChild(paragraph);
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateGlossaryWelds);

// :::: (Populate Roadway Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let glossaryRoadway = [];
// Populate glossary with roadway definitions
function populateGlossaryRoadway() {
  const container = document.querySelector("#glossary-roadway-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term that includes "roadway" in the filter array
  // glossaryTerms.forEach((thing) => {
  glossaryMain
    .filter((thing) => Array.isArray(thing.filter) && thing.filter.includes("roadway"))
    .forEach((thing) => {
      // Create term-definition object
      const termDef = {
        term: thing.term,
        definition: thing.definition,
      };
      glossaryRoadway.push(termDef);

      // Create the card container
      const card = document.createElement("div");
      card.classList.add("glossary-content-cards");

      // Create the header for the card with the thing term
      const header = document.createElement("div");
      header.classList.add("glossary-card-header");

      // Create the hidden link for the term
      const link = document.createElement("a");
      let search = thing.search || `What is "${thing.term}" in ${thing.discipline}?`; // Search query
      link.classList.add("glossary-term-link");
      link.textContent = thing.term;

      // Add the data-term attribute for search purposes
      link.setAttribute("data-term", thing.term.toLowerCase()); // Add the data-term attribute here

      // If thing.link exists, use it; otherwise, fall back to Google search
      link.href = thing.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
      link.target = "_blank";

      // Append the link inside the header div
      header.appendChild(link);

      // Create the paragraph for the card with the thing definition
      const paragraph = document.createElement("p");
      paragraph.classList.add("glossary-card-paragraph");
      paragraph.textContent = thing.definition;

      // Assemble the card elements
      card.appendChild(header);
      card.appendChild(paragraph);
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateGlossaryRoadway);

// :::: (Populate Acronyms Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let glossaryAcronyms = [];
// Populate glossary with acronyms definitions
function populateGlossaryAcronyms() {
  const container = document.querySelector("#glossary-acronyms-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term that includes "acronyms" in the filter array
  // glossaryTerms.forEach((thing) => {
  glossaryMain
    .filter((thing) => Array.isArray(thing.filter) && thing.filter.some((f) => f === "acronyms" || f === "org"))
    .forEach((thing) => {
      // Create term-definition object
      const termDef = {
        term: thing.term,
        definition: thing.definition,
      };
      glossaryAcronyms.push(termDef);

      // Create the card container
      const card = document.createElement("div");
      card.classList.add("glossary-content-cards");

      // Create the header for the card with the thing term
      const header = document.createElement("div");
      header.classList.add("glossary-card-header");

      // Create the hidden link for the term
      const link = document.createElement("a");
      let search = thing.search || `What is "${thing.term}" in ${thing.discipline}?`; // Search query
      link.classList.add("glossary-term-link");
      link.textContent = thing.term;

      // Add the data-term attribute for search purposes
      link.setAttribute("data-term", thing.term.toLowerCase()); // Add the data-term attribute here

      // If thing.link exists, use it; otherwise, fall back to Google search
      link.href = thing.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
      link.target = "_blank";

      // Append the link inside the header div
      header.appendChild(link);

      // Create the paragraph for the card with the thing definition
      const paragraph = document.createElement("p");
      paragraph.classList.add("glossary-card-paragraph");
      paragraph.textContent = thing.definition;

      // Assemble the card elements
      card.appendChild(header);
      card.appendChild(paragraph);
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateGlossaryAcronyms);

// :::: (Populate NDT Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let glossaryNDT = [];
// Populate glossary with ndt definitions
function populateGlossaryNDT() {
  const container = document.querySelector("#glossary-ndt-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term that includes "NDT" in the filter array
  // glossaryTerms.forEach((thing) => {
  glossaryMain
    .filter((thing) => Array.isArray(thing.filter) && thing.filter.includes("NDT"))
    .forEach((thing) => {
      // Create term-definition object
      const termDef = {
        term: thing.term,
        definition: thing.definition,
      };
      glossaryNDT.push(termDef);

      // Create the card container
      const card = document.createElement("div");
      card.classList.add("glossary-content-cards");

      // Create the header for the card with the thing term
      const header = document.createElement("div");
      header.classList.add("glossary-card-header");

      // Create the hidden link for the term
      const link = document.createElement("a");
      let search = thing.search || `What is "${thing.term}" in ${thing.discipline}?`; // Search query
      link.classList.add("glossary-term-link");
      link.textContent = thing.term;

      // Add the data-term attribute for search purposes
      link.setAttribute("data-term", thing.term.toLowerCase()); // Add the data-term attribute here

      // If thing.link exists, use it; otherwise, fall back to Google search
      link.href = thing.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
      link.target = "_blank";

      // Append the link inside the header div
      header.appendChild(link);

      // Create the paragraph for the card with the thing definition
      const paragraph = document.createElement("p");
      paragraph.classList.add("glossary-card-paragraph");
      paragraph.textContent = thing.definition;

      // Assemble the card elements
      card.appendChild(header);
      card.appendChild(paragraph);
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateGlossaryNDT);

// :::: (Populate Channel Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let glossaryChannel = [];
// Populate glossary with channel definitions
function populateGlossaryChannel() {
  const container = document.querySelector("#glossary-channel-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term that includes "channel" in the filter array
  // glossaryTerms.forEach((thing) => {
  glossaryMain
    .filter((thing) => Array.isArray(thing.filter) && thing.filter.includes("channel"))
    .forEach((thing) => {
      // Create term-definition object
      const termDef = {
        term: thing.term,
        definition: thing.definition,
      };
      glossaryChannel.push(termDef);

      // Create the card container
      const card = document.createElement("div");
      card.classList.add("glossary-content-cards");

      // Create the header for the card with the thing term
      const header = document.createElement("div");
      header.classList.add("glossary-card-header");

      // Create the hidden link for the term
      const link = document.createElement("a");
      let search = thing.search || `What is "${thing.term}" in ${thing.discipline}?`; // Search query
      link.classList.add("glossary-term-link");
      link.textContent = thing.term;

      // Add the data-term attribute for search purposes
      link.setAttribute("data-term", thing.term.toLowerCase()); // Add the data-term attribute here

      // If thing.link exists, use it; otherwise, fall back to Google search
      link.href = thing.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
      link.target = "_blank";

      // Append the link inside the header div
      header.appendChild(link);

      // Create the paragraph for the card with the thing definition
      const paragraph = document.createElement("p");
      paragraph.classList.add("glossary-card-paragraph");
      paragraph.textContent = thing.definition;

      // Assemble the card elements
      card.appendChild(header);
      card.appendChild(paragraph);
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateGlossaryChannel);

// :::: (Populate Materials Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let glossaryMaterials = [];
// Populate glossary with materials definitions
function populateGlossaryMaterials() {
  const container = document.querySelector("#glossary-materials-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term that includes "materials" in the filter array
  // glossaryTerms.forEach((thing) => {
  glossaryMain
    .filter((thing) => Array.isArray(thing.filter) && thing.filter.includes("materials"))
    .forEach((thing) => {
      // Create term-definition object
      const termDef = {
        term: thing.term,
        definition: thing.definition,
      };
      glossaryMaterials.push(termDef);

      // Create the card container
      const card = document.createElement("div");
      card.classList.add("glossary-content-cards");

      // Create the header for the card with the thing term
      const header = document.createElement("div");
      header.classList.add("glossary-card-header");

      // Create the hidden link for the term
      const link = document.createElement("a");
      let search = thing.search || `What is "${thing.term}" in ${thing.discipline}?`; // Search query
      link.classList.add("glossary-term-link");
      link.textContent = thing.term;

      // Add the data-term attribute for search purposes
      link.setAttribute("data-term", thing.term.toLowerCase()); // Add the data-term attribute here

      // If thing.link exists, use it; otherwise, fall back to Google search
      link.href = thing.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
      link.target = "_blank";

      // Append the link inside the header div
      header.appendChild(link);

      // Create the paragraph for the card with the thing definition
      const paragraph = document.createElement("p");
      paragraph.classList.add("glossary-card-paragraph");
      paragraph.textContent = thing.definition;

      // Assemble the card elements
      card.appendChild(header);
      card.appendChild(paragraph);
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateGlossaryMaterials);

// :::: (Populate Design Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let glossaryDesign = [];
// Populate glossary with design definitions
function populateGlossaryDesign() {
  const container = document.querySelector("#glossary-design-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term that includes "design" in the filter array
  // glossaryTerms.forEach((thing) => {
  glossaryMain
    .filter((thing) => Array.isArray(thing.filter) && thing.filter.includes("design"))
    .forEach((thing) => {
      // Create term-definition object
      const termDef = {
        term: thing.term,
        definition: thing.definition,
      };
      glossaryDesign.push(termDef);

      // Create the card container
      const card = document.createElement("div");
      card.classList.add("glossary-content-cards");

      // Create the header for the card with the thing term
      const header = document.createElement("div");
      header.classList.add("glossary-card-header");

      // Create the hidden link for the term
      const link = document.createElement("a");
      let search = thing.search || `What is "${thing.term}" in ${thing.discipline}?`; // Search query
      link.classList.add("glossary-term-link");
      link.textContent = thing.term;

      // Add the data-term attribute for search purposes
      link.setAttribute("data-term", thing.term.toLowerCase()); // Add the data-term attribute here

      // If thing.link exists, use it; otherwise, fall back to Google search
      link.href = thing.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
      link.target = "_blank";

      // Append the link inside the header div
      header.appendChild(link);

      // Create the paragraph for the card with the thing definition
      const paragraph = document.createElement("p");
      paragraph.classList.add("glossary-card-paragraph");
      paragraph.textContent = thing.definition;

      // Assemble the card elements
      card.appendChild(header);
      card.appendChild(paragraph);
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateGlossaryDesign);

// :::: (Display Pages on Button Click) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Handles the display of content for each tab based on button clicks

// Flag to ensure the focus happens only on page startup
let isInitialLoad = true;

function openTab(evt) {
  var button = evt.currentTarget; // The clicked button
  var componentName = button.getAttribute("data-target");
  var containerClass = button.getAttribute("data-container-class");
  var buttonClass = button.getAttribute("data-button-class");

  // Scroll main element to the top on page change
  const mainSection = document.querySelector("main"); // Adjust selector if needed
  mainSection.scrollTo({ top: 0, left: 0, behavior: "auto" });

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

  // Focus on the active button if it's the initial page load
  if (isInitialLoad) {
    button.focus();
    isInitialLoad = false; // Set the flag to false after focusing once
  }
}

// On page load, open the tab corresponding to the current hash or default to the first tab
window.addEventListener("load", function () {
  document.querySelector(".asset-buttons.active").click();
});

// Add event listeners to the header buttons (main tabs)
document.querySelectorAll(".asset-buttons").forEach(function (button) {
  button.addEventListener("click", openTab); // Add click event to trigger openTab
});

// :::: (Button Click Array of Classes) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Button Classes
var buttonClasses = ["glossary-item-buttons"];

// :::: (Button Classes Add Event Listeners) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Loop Through Button Classes and Add Event Listeners
buttonClasses.forEach(function (buttonClass) {
  // For each button class, find buttons and add an event listener for tab opening
  document.querySelectorAll("." + buttonClass).forEach(function (button) {
    button.addEventListener("click", openTab); // Add click event to trigger openTab
  });
});

// :::: (Active Button Clicked) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Know the active tab
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
    if (target === "settings-guide-tab") {
      document.querySelector("#user-local-storage").textContent = `A general overview of site functionality.`;
    }

    // If two or more comment builders hold the active view on their tabs then select the correct one to be active
    const activeButtons = document.querySelectorAll(".bridge-approach-buttons.active, .bridge-deck-buttons.active");
    if (activeTab === "bridge-approach-tab") {
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

// :::: (Glossary Search) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

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
    let matchedTerms = []; // Declare termElement outside the if-else structure

    const glossaryMap = {
      "glossary-main-tab": glossaryMain,
      "glossary-birm-tab": glossaryBIRM,
      "glossary-bridge-tab": glossaryBridge,
      "glossary-culvert-tab": glossaryCulvert,
      "glossary-wall-tab": glossaryWall,
      "glossary-defects-tab": glossaryDefects,
      "glossary-design-tab": glossaryDesign,
      "glossary-materials-tab": glossaryMaterials,
      "glossary-ndt-tab": glossaryNDT,
      "glossary-nstm-tab": glossaryNSTM,
      "glossary-roadway-tab": glossaryRoadway,
      "glossary-channel-tab": glossaryChannel,
      "glossary-components-tab": glossaryComponents,
      "glossary-joints-tab": glossaryJoints,
      "glossary-welds-tab": glossaryWelds,
      "glossary-acronyms-tab": glossaryAcronyms,
      "glossary-compounds-tab": glossaryCompounds,
    };

    for (const [tabId, glossary] of Object.entries(glossaryMap)) {
      if (document.querySelector(`[data-target="${tabId}"].active`)) {
        matchedTerms = glossary.filter((termObj) => termObj.term.toLowerCase().startsWith(searchTerm));
        break;
      }
    }

    // Scroll to the first matched term's parent div
    if (matchedTerms.length > 0) {
      const firstMatch = matchedTerms[0];

      const firstMatchTerm = firstMatch.term.toLowerCase();

      const allTabs = [
        "glossary-main-tab",
        "glossary-birm-tab",
        "glossary-bridge-tab",
        "glossary-culvert-tab",
        "glossary-wall-tab",
        "glossary-defects-tab",
        "glossary-design-tab",
        "glossary-materials-tab",
        "glossary-ndt-tab",
        "glossary-nstm-tab",
        "glossary-roadway-tab",
        "glossary-channel-tab",
        "glossary-components-tab",
        "glossary-joints-tab",
        "glossary-welds-tab",
        "glossary-acronyms-tab",
        "glossary-compounds-tab",
      ];

      let termElement = null;

      for (const tab of allTabs) {
        if (document.querySelector(`[data-target="${tab}"].active`)) {
          termElement = document.querySelector(`#${tab} .glossary-term-link[data-term="${firstMatchTerm}"]`);
          break;
        }
      }

      // If termElement is found
      if (termElement) {
        const parentElement = termElement.closest(".glossary-card-header");
        if (parentElement) {
          parentElement.scrollIntoView({ behavior: "smooth", block: "start" });

          const link = parentElement.querySelector(".glossary-term-link");
          if (link) {
            link.focus({ preventScroll: true });
          }
        }
      }
    }
  });
});

// :::: (Scroll To Top) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (event) {
    const mainSection = document.querySelector("main"); // Adjust selector if needed

    // Handle Home and End key scrolling
    if (event.key === "Home") {
      mainSection.scrollTo({ top: 0, left: 0, behavior: "auto" });
      const activeButton = document.querySelector(".glossary-item-buttons.active");

      if (activeButton) {
        activeButton.focus(); // Focus on the active button
      }
    } else if (event.key === "End") {
      mainSection.scrollTo({ top: mainSection.scrollHeight, left: 0, behavior: "auto" });
    }
  });
});

// :::: (Tab Order) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Disable tabbing globally by setting tabindex="-1" for all elements
document.querySelectorAll("div:not(.divRow)").forEach((element) => {
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

// :::: (Arrow Buttons) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

const toggleFocusActivation = "activate"; // Set to "focus" or "activate"

// Track the number of times the Control key is pressed // :::: (Ctrl, Ctrl) //
let ctrlPresses = 0;
let lastCtrlPressTime = 0;
let toggleArrow = "navigation";

// Event listener for keydown events
window.addEventListener("keydown", function (event) {
  if (event.key !== "Control") return;

  const currentTime = Date.now();
  if (currentTime - lastCtrlPressTime > 300) ctrlPresses = 0;

  lastCtrlPressTime = currentTime;
  ctrlPresses++;

  if (ctrlPresses === 2) {
    if (toggleArrow === "navigation") {
      toggleArrow = "default";
    } else {
      toggleArrow = "navigation";
    }
    ctrlPresses = 0; // Reset counter
    showArrowMessage(toggleArrow);
  }
});

function handleElementAction(element) {
  if (element.tagName.toLowerCase() === "a") return; // Skip activation for links
  if (element.id === "button-map-link") return; // Skip activation if the ID is "button-map-link"
  if (element.id === "searchID") return; // Skip activation if the ID is "searchID"
  if ("rating" in element.dataset) return; // Skip activation if the data attribute is rating

  if (toggleFocusActivation === "focus") {
    element.focus();
    if (element.tagName.toLowerCase() === "textarea") {
      element.selectionStart = element.value.length;
      element.selectionEnd = element.value.length;
    }
  } else if (toggleFocusActivation === "activate") {
    element.click();
  }
}

function getVisibleElements(rowClass) {
  return Array.from(document.querySelectorAll(`.${rowClass}`)).filter((el) => el.offsetParent !== null);
}

function getAllRowClasses() {
  const allElements = document.querySelectorAll("[class*='row']");
  const rowClasses = new Set();

  allElements.forEach((el) => {
    if (el.offsetParent !== null) {
      el.classList.forEach((cls) => {
        if (cls.startsWith("row")) {
          rowClasses.add(cls);
        }
      });
    }
  });

  return Array.from(rowClasses).sort((a, b) => {
    const numA = parseInt(a.replace("row", ""));
    const numB = parseInt(b.replace("row", ""));
    return numA - numB;
  });
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
        handleElementAction(elements[nextIndex]);
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
      handleElementAction(elements[nextIndex]);
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
        handleElementAction(elements[nextIndex]);
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
      handleElementAction(elements[nextIndex]);
      event.preventDefault();
    }
  }

  if (event.code === "ArrowDown" && toggleArrow !== "default") {
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
            handleElementAction(firstRow[0]);
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
              handleElementAction(activeButton);
            } else {
              nextRow[0].focus(); // If no active button, focus the first visible element
              handleElementAction(nextRow[0]);
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
          handleElementAction(activeButton);
        } else {
          nextRow[0].focus(); // If no active button, focus the first visible element
          handleElementAction(nextRow[0]);
        }
      }
      event.preventDefault();
    }
  }

  if (event.code === "ArrowUp" && toggleArrow !== "default") {
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
          handleElementAction(nextRow[0]);
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
          handleElementAction(activeButton);
        } else {
          nextRow[0].focus(); // If no active button, focus the first visible element
          handleElementAction(nextRow[0]);
        }
      }
      event.preventDefault();
    }
  }
});

// :::: (Enter & Row Down) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    setTimeout(() => {
      // Get the event target (the button that was just activated)
      const targetButton = document.activeElement;

      // Check if the target button has both required classes
      if (targetButton.classList.contains("row2") && targetButton.classList.contains("bridge-component-buttons")) {
        // Trigger a simulated "ArrowDown" key event
        const arrowDownEvent = new KeyboardEvent("keydown", {
          key: "ArrowDown",
          code: "ArrowDown",
          keyCode: 40,
          which: 40,
          bubbles: true,
        });
        document.dispatchEvent(arrowDownEvent);
      }
    }, 10); // Small delay to allow default Enter action to complete
  }
});

// :::: (Arrow Message) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Function to show the current clipboard value (used for Undo/Redo)
function showArrowMessage(value) {
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

  // Remove any existing message before showing a new one
  const existingArrowMessage = document.querySelector(".arrow-message");
  if (existingArrowMessage) {
    existingArrowMessage.remove();
  }

  // Create the message container
  const currentMessage = document.createElement("div"); //
  const messageValue = value === "default" ? "Set to vertical scroll." : "Set to page navigation.";

  currentMessage.classList.add("arrow-message"); // Add a class to target this specific message

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

  // Create a div for the "Arrow Keys:" part with different background
  const titlePart = document.createElement("div");
  titlePart.textContent = "Up & Down Arrow Keys:";
  titlePart.style.padding = "6px 10px"; // Increased padding for better spacing
  // titlePart.style.fontWeight = "bold"; // Bold text for the title
  titlePart.style.marginRight = "8px"; // Space between the title and content
  titlePart.style.borderRadius = "4px"; // Rounded corners for the title
  titlePart.style.backgroundColor = "rgba(63, 38, 63, 0.9)"; // Green background for the title
  titlePart.style.color = "#fff"; // White text color

  // Create a div for the clipboard content itself (rest of the message)
  const contentPart = document.createElement("div");
  contentPart.textContent = messageValue; // Show more of the text (100 characters)
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

// :::: (Glossary Shortcut Ctrl + Shift + G) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.addEventListener("keydown", function (event) {
  // Check if Ctrl + Shift + G is pressed
  if (event.ctrlKey && event.shiftKey && event.key === "G") {
    // Prevent the default action (which is opening the Find bar)
    event.preventDefault();

    // Trigger the button with data-target="misc-asset-tab"
    const targetButton1 = document.querySelector('[data-target="misc-asset-tab"]');
    const targetButton2 = document.querySelector('[data-target="glossary-tab"]');
    const targetButton3 = document.querySelector('[data-target="glossary-main-tab"]');
    if (targetButton3) {
      targetButton1.click();
      targetButton2.click();
      targetButton3.click();
      targetButton3.focus();
    }
  }
});

// :::: (Google Analytics) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      gtag("event", "click", {
        event_category: "button",
        event_label: event.target.innerText.trim() || "Unnamed Button",
      });
    }
  });
});

// :::: (Not Sorted | Working) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
