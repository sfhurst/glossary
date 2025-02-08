
const approachBridgeElements = [
  { number: 320, name: "Prestressed Concrete Approach Slab", component: "Approach", material: "Prestressed Concrete" },
  { number: 321, name: "Reinforced Concrete Approach Slab", component: "Approach", material: "Reinforced Concrete" },
];

const jointsBridgeElements = [
  { number: 300, name: "Strip Seal Expansion Joint", component: "Joint", material: "Other" },
  { number: 301, name: "Pourable Joint Seal", component: "Joint", material: "Other" },
  { number: 302, name: "Compression Joint Seal", component: "Joint", material: "Other" },
  { number: 303, name: "Assembly Joint with Seal (Modular)", component: "Joint", material: "Other" },
  { number: 304, name: "Open Expansion Joint", component: "Joint", material: "Other" },
  { number: 305, name: "Assembly Joint without Seal", component: "Joint", material: "Other" },
  { number: 306, name: "Other Joint", component: "Joint", material: "Other" },
];

const railingsBridgeElements = [
  { number: 330, name: "Metal Bridge Rail", component: "Bridge Rail", material: "Metal" },
  { number: 331, name: "Reinforced Concrete Bridge Rail", component: "Bridge Rail", material: "Reinforced Concrete" },
  { number: 332, name: "Timber Bridge Rail", component: "Bridge Rail", material: "Timber" },
  { number: 333, name: "Other Bridge Rail", component: "Bridge Rail", material: "Other" },
  { number: 334, name: "Masonry Bridge Rail", component: "Bridge Rail", material: "Masonry" },
];

const deckBridgeElements = [
  { number: 12, name: "Reinforced Concrete Deck", component: "Deck/Slab", material: "Reinforced Concrete" },
  { number: 13, name: "Prestressed Concrete Deck", component: "Deck/Slab", material: "Prestressed Concrete" },
  { number: 28, name: "Steel Open Grid Deck", component: "Deck/Slab", material: "Steel" },
  { number: 29, name: "Steel Concrete Filled Grid Deck", component: "Deck/Slab", material: "Steel/Concrete" },
  { number: 30, name: "Steel Corrugated or Orthotropic Deck", component: "Deck/Slab", material: "Steel" },
  { number: 31, name: "Timber Deck", component: "Deck/Slab", material: "Timber" },
  { number: 38, name: "Reinforced Concrete Slab", component: "Deck/Slab", material: "Reinforced Concrete" },
  { number: 54, name: "Timber Slab", component: "Deck/Slab", material: "Timber" },
  { number: 60, name: "Other Deck", component: "Deck/Slab", material: "Other" },
  { number: 65, name: "Other Slab", component: "Deck/Slab", material: "Other" },
];

const wearingBridgeElements = [
  { number: 510, name: "Wearing Surfaces", component: "Protective Coating", material: "Other" },
];

const superBridgeElements = [
  { number: 15, name: "Prestressed Concrete Top Flange", component: "Superstructure", material: "Prestressed Concrete" },
  { number: 16, name: "Reinforced Concrete Top Flange", component: "Superstructure", material: "Reinforced Concrete" },
  { number: 102, name: "Steel Closed Web/Box Girder", component: "Superstructure", material: "Steel" },
  { number: 104, name: "Prestressed Concrete Closed Web/Box Girder", component: "Superstructure", material: "Prestressed Concrete" },
  { number: 105, name: "Reinforced Concrete Closed Web/Box Girder", component: "Superstructure", material: "Reinforced Concrete" },
  { number: 106, name: "Other Closed Web/Box Girder", component: "Superstructure", material: "Other" },
  { number: 107, name: "Steel Girder/Beam", component: "Superstructure", material: "Steel" },
  { number: 109, name: "Prestressed Concrete Girder/Beam", component: "Superstructure", material: "Prestressed Concrete" },
  { number: 110, name: "Reinforced Concrete Open Girder/Beam", component: "Superstructure", material: "Reinforced Concrete" },
  { number: 111, name: "Timber Open Girder/Beam", component: "Superstructure", material: "Timber" },
  { number: 112, name: "Other Open Girder/Beam", component: "Superstructure", material: "Other" },
  { number: 113, name: "Steel Stringer", component: "Superstructure", material: "Steel" },
  { number: 115, name: "Prestressed Concrete Stringer", component: "Superstructure", material: "Prestressed Concrete" },
  { number: 116, name: "Reinforced Concrete Stringer", component: "Superstructure", material: "Reinforced Concrete" },
  { number: 117, name: "Timber Stringer", component: "Superstructure", material: "Timber" },
  { number: 118, name: "Other Stringer", component: "Superstructure", material: "Other" },
  { number: 120, name: "Steel Truss", component: "Superstructure", material: "Steel" },
  { number: 135, name: "Timber Truss", component: "Superstructure", material: "Timber" },
  { number: 136, name: "Other Truss", component: "Superstructure", material: "Other" },
  { number: 141, name: "Steel Arch", component: "Superstructure", material: "Steel" },
  { number: 142, name: "Other Arch", component: "Superstructure", material: "Other" },
  { number: 143, name: "Prestressed Concrete Arch", component: "Superstructure", material: "Prestressed Concrete" },
  { number: 144, name: "Reinforced Concrete Arch", component: "Superstructure", material: "Reinforced Concrete" },
  { number: 145, name: "Masonry Arch", component: "Superstructure", material: "Masonry" },
  { number: 146, name: "Timber Arch", component: "Superstructure", material: "Timber" },
  { number: 147, name: "Steel Cable-Primary", component: "Superstructure", material: "Steel" },
  { number: 148, name: "Steel Cable-Secondary", component: "Superstructure", material: "Steel" },
  { number: 149, name: "Other Cable Secondary", component: "Superstructure", material: "Other" },
  { number: 152, name: "Steel Floor Beam", component: "Superstructure", material: "Steel" },
  { number: 154, name: "Prestressed Concrete Floor Beam", component: "Superstructure", material: "Prestressed Concrete" },
  { number: 155, name: "Reinforced Concrete Floor Beam", component: "Superstructure", material: "Reinforced Concrete" },
  { number: 156, name: "Timber Floor Beam", component: "Superstructure", material: "Timber" },
  { number: 157, name: "Other Floor Beam", component: "Superstructure", material: "Other" },
  { number: 161, name: "Steel Pin, Pin and Hanger Assembly, or Both", component: "Superstructure", material: "Steel" },
  { number: 162, name: "Steel Gusset Plate", component: "Superstructure", material: "Steel" },
];

const paintBridgeElements = [
  { number: 515, name: "Steel Protective Coating", component: "Protective Coating", material: "Paint" },
];

const bearingsBridgeElements = [
  { number: 310, name: "Elastomeric Bearing", component: "Bearing", material: "Other" },
  { number: 311, name: "Movable Bearing (roller, sliding, etc.)", component: "Bearing", material: "Steel" },
  { number: 312, name: "Enclosed/Concealed Bearing", component: "Bearing", material: "Steel" },
  { number: 313, name: "Fixed Bearing", component: "Bearing", material: "Steel" },
  { number: 314, name: "Pot Bearing", component: "Bearing", material: "Steel" },
  { number: 315, name: "Disk Bearing", component: "Bearing", material: "Steel" },
  { number: 316, name: "Other Bearing", component: "Bearing", material: "Other" },
];

const subBridgeElements = [
  { number: 202, name: "Steel Column", component: "Substructure", material: "Steel" },
  { number: 203, name: "Other Column", component: "Substructure", material: "Other" },
  { number: 204, name: "Prestressed Concrete Column", component: "Substructure", material: "Prestressed Concrete" },
  { number: 205, name: "Reinforced Concrete Column", component: "Substructure", material: "Reinforced Concrete" },
  { number: 207, name: "Column Tower (Trestle)", component: "Substructure", material: "Other" },
  { number: 210, name: "Reinforced Concrete Pier Wall", component: "Substructure", material: "Reinforced Concrete" },
  { number: 211, name: "Other Pier Wall", component: "Substructure", material: "Other" },
  { number: 213, name: "Masonry Pier Wall", component: "Substructure", material: "Masonry" },
  { number: 215, name: "Reinforced Concrete Abutment", component: "Substructure", material: "Reinforced Concrete" },
  { number: 217, name: "Masonry Abutment", component: "Substructure", material: "Masonry" },
  { number: 218, name: "Other Abutment", component: "Substructure", material: "Other" },
  { number: 219, name: "Steel Abutment", component: "Substructure", material: "Steel" },
  { number: 220, name: "Reinforced Pile Cap/Footing", component: "Substructure", material: "Reinforced Concrete" },
  { number: 225, name: "Steel Pile", component: "Substructure", material: "Steel" },
  { number: 226, name: "Prestressed Concrete Pile", component: "Substructure", material: "Prestressed Concrete" },
  { number: 227, name: "Reinforced Concrete Pile", component: "Substructure", material: "Reinforced Concrete" },
  { number: 228, name: "Timber Pile", component: "Substructure", material: "Timber" },
  { number: 229, name: "Other Pile", component: "Substructure", material: "Other" },
  { number: 231, name: "Steel Pier Cap", component: "Substructure", material: "Steel" },
  { number: 233, name: "Prestressed Concrete Pier Cap", component: "Substructure", material: "Prestressed Concrete" },
  { number: 234, name: "Reinforced Concrete Pier Cap", component: "Substructure", material: "Reinforced Concrete" },
  { number: 235, name: "Timber Pier Cap", component: "Substructure", material: "Timber" },
  { number: 236, name: "Other Pier Cap", component: "Substructure", material: "Other" },
];

const culvertBridgeElements = [
  { number: 240, name: "Steel Culvert", component: "Culvert", material: "Steel" },
  { number: 241, name: "Reinforced Concrete Culvert", component: "Culvert", material: "Reinforced Concrete" },
  { number: 242, name: "Timber Culvert", component: "Culvert", material: "Timber" },
  { number: 243, name: "Other Culvert", component: "Culvert", material: "Other" },
  { number: 244, name: "Masonry Culvert", component: "Culvert", material: "Masonry" },
  { number: 245, name: "Prestressed Concrete Culvert", component: "Culvert", material: "Prestressed Concrete" },
];

// Create an array to hold the other arrays as part of an object
const bridgeElements = [
  { header: "Approach Slabs:", elements: approachBridgeElements, containerID: "approach-elements-container" },
  { header: "Joints:", elements: jointsBridgeElements, containerID: "joints-elements-container" },
  { header: "Bridge Railings:", elements: railingsBridgeElements, containerID: "railings-elements-container" },
  { header: "Deck/Slabs:", elements: deckBridgeElements, containerID: "deck-elements-container" },
  { header: "Protective Coatings - Wearing Surface:", elements: wearingBridgeElements, containerID: "wearing-elements-container" },
  { header: "Superstructure:", elements: superBridgeElements, containerID: "super-elements-container" },
  { header: "Protective Coatings - Paint:", elements: paintBridgeElements, containerID: "paint-elements-container" },
  { header: "Bearings:", elements: bearingsBridgeElements, containerID: "bearings-elements-container" },
  { header: "Substructure:", elements: subBridgeElements, containerID: "sub-elements-container" },
  { header: "Culvert:", elements: culvertBridgeElements, containerID: "culvert-elements-container" },
];

// console.log(bridgeElements[9].elements[5].name)

// Reference the container whose innerHTML is being dynamically created
const elementComponentContainer = document.getElementById('element-components-container');

// Clear out the innerHTML so you can work out the js (remove when working)
// container.innerHTML = '';

// Loop through each component in the bridgeElements array and add a header row to the container
bridgeElements.forEach(component => {
  const header = document.createElement('div');
  header.className = 'elements-segment-header';
  header.textContent = component.header;
  elementComponentContainer.appendChild(header);
  const elementPageContainer = document.getElementById(component.containerID);

    component.elements.forEach(element => {
    const elementContainer = document.createElement('div'); // Element page
    elementContainer.className = 'component-elements-container';
    const elementPage = document.createElement('div'); // Component pages
    elementPage.className = 'component-elements-container';
  
    // Add CS2, CS3, CS4 buttons to each container
    for (let cs = 2; cs <= 4; cs++) {
      // Create separate buttons for each container
      const buttonElement = document.createElement('button');
      buttonElement.className = `component-elements-button${cs}`;
      buttonElement.textContent = `CS${cs}`;
      buttonElement.setAttribute('onclick', `addDeficiencyButtons(event)`);
      buttonElement.setAttribute('data-button-number', `Element ${element.number}`);
      buttonElement.setAttribute('data-button-category', `${cs}`);
  
      const buttonPage = document.createElement('button');
      buttonPage.className = `component-elements-button${cs}`;
      buttonPage.textContent = `CS${cs}`;
      buttonPage.setAttribute('onclick', `addDeficiencyButtons(event)`);
      buttonPage.setAttribute('data-button-number', `Element ${element.number}`);
      buttonPage.setAttribute('data-button-category', `${cs}`);
  
      elementContainer.appendChild(buttonElement); // Append to elementContainer
      elementPage.appendChild(buttonPage); // Append to elementPage
    }
  
    // Add the element name to each container
    const itemElement = document.createElement('div');
    itemElement.className = 'component-elements-item';
    itemElement.textContent = `${element.number}: ${element.name}`;
  
    const itemPage = document.createElement('div');
    itemPage.className = 'component-elements-item';
    itemPage.textContent = `${element.number}: ${element.name}`;
  
    elementContainer.appendChild(itemElement); // Append to elementContainer
    elementPage.appendChild(itemPage); // Append to elementPage
  
    // Append containers to their respective parents
    elementComponentContainer.appendChild(elementContainer);
    elementPageContainer.appendChild(elementPage);
  });
  
});


// i have questions about the id for the cs buttons

// <button id="bridge-approach-elements-bt1" class="component-elements-button2" onclick="openBridgeComponentElements(event, 'bridge-approach-elements-bt1')">
//  CS2
// </button>
