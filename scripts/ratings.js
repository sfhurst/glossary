// Constants and globally scoped variables should have good names.
// Comments should be added to each line except where the purpose is obvious.

//    Table of Contents
//......... 1. External Data and Modules
//........... 1.1 Objects
//............. 1.1.1 Links
//............. 1.1.2 Assets
//............. 1.1.3 Forms
//........... 1.2 Const
//........... 1.3 Write Data
//......... 2. Events
//........... 2.1 Click Events
//............. 2.1.1 Rating Input Click
//............... 2.1.1.1 Rating Dropdown Click
//............. 2.1.2 Description Button Click
//............... 2.1.2.1 Description Modal Close
//............... 2.1.2.2 Description Modal Tab 1 (SNBI)
//............... 2.1.2.3 Description Modal Tab 2
//............... 2.1.2.4 Description Modal Tab 3
//................. 2.1.2.4.1 Copy Example Comment
//............. 2.1.3 Textarea/Div Click
//............. 2.1.4 Info Button Click
//........... 2.2 Input Events
//............. 2.2.1 Rating Input Change
//............... 2.2.1.1 Rating Input Keydown
//............... 2.2.1.2 Rating Input Keyup
//............. 2.2.2 Textarea Change
//............... 2.2.2.1 Textarea Write Change
//............... 2.2.2.2 Textarea Indicate Change
//........... 2.3 Focus Events
//............. 2.3.1 Rating Input Focus
//............. 2.3.2 Description Button Focus
//............. 2.3.3 Textarea/Div Focus
//............. 2.3.4 Info Button Focus
//......... 3. Functions
//........... 3.1 Theme
//......... 4. Template Literals
//......... 5. To Do
//......... 6. Misc Commented Out Code
//......... 7. Debugger
//......... 8. Test Code

//......... 1. External Data and Modules

// (The items contained here will eventually be read from external files.)
//import {linkArray} from "./modules/miscItems.mjs"; // stops at line 825
// import {descriptions, formComponents, assetNameFields, descriptionObject} from "./modules/modal.mjs"; // Improve separation.
// import {objAssetData} from "./modules/assetdata.mjs";
import { objRatingForms } from "./modules/ratingForms.mjs";

let i; // ALL VARIABLES NEED DECLARED IN MODULES BECAUSE MODULES USE "STRICT MODE"
let j;

//........... 1.1 Objects

//............. 1.1.1 Links
// (See miscItems.mjs; added to contentDescriptions.mjs instead)

//............. 1.1.2 Assets
// (See assets.mjs)
// (See ratingForms.mjs; pulls from assets.mjs)

//............. 1.1.3 Forms
// (See contentDescriptions.mjs)
// Object variables get read in for form objects (issue#001)

//........... 1.2 Const

const keychain = {
  tabbing: "default", // For maintaining position in tab order when modals and dropdowns are opened and closed.
  sort: 0, // For sorting the forms.
};

//........... 1.3 Write Data

// Sort the objRatingForms by formPosition.
// objRatingForms.sort(function(a, b) {return a.formPosition - b.formPosition;});

const htmlRatingForm = [];
let evenOdd = "";
j = 1;
for (i = 0; i < objRatingForms.length; i++) {
  // Loops through and builds the text.
  let remainderCheck = j % 2;
  if (remainderCheck == 0) {
    evenOdd = "divRatingFormEven";
  } else {
    evenOdd = "divRatingFormOdd";
  }
  j++;
  htmlRatingForm[i] = `
  <form id="${objRatingForms[i].idPrefix}RatingForm" method="" action="">
  <div id="${objRatingForms[i].idPrefix}FormHolder" class="${evenOdd} drk-thm">
    <div style="border: none;">
      <button id="${objRatingForms[i].idPrefix}Rating" class="buttonRating drk-thm buttonRatingDropdownClick" type="button">${objRatingForms[i].report.rating}</button>
      <div id="${objRatingForms[i].idPrefix}Dropdown" class="divDropdownContent drk-thm">
      ${objRatingForms[i].dropdown.drk}
      </div>
    </div>
    <button id="${objRatingForms[i].idPrefix}DescriptionButton" class="buttonDescriptionButton drk-thm" type="button">${objRatingForms[i].name}</button> 
    <div>
      <div id="${objRatingForms[i].idPrefix}ReadWrite" class="divReadWrite">
      </div>
    </div>
    <div class="divTextareaHolder  drk-thm">
      <div class="divTextareaMirror">
        <textarea id="${objRatingForms[i].idPrefix}Textarea" class="textareaComment drk-thm" name="${objRatingForms[i].name}" rows="1">${objRatingForms[i].report.comment}</textarea>
      </div>
    </div>
    <div>
      <div class="divConflictAlert">
      </div>
    </div>
    <button id="${objRatingForms[i].idPrefix}InfoButton" class="buttonInfoButton drk-thm" type="button">${objRatingForms[i].info}</button>
  </div>
  </form>
  `;
  document.getElementById("divRatingForms").innerHTML += htmlRatingForm[i]; // DocumentChange: Fill the page with the forms.
}

// Populate the rating forms with asset values and button text. (issue#001)
for (i = 0; i < objRatingForms.length; i++) {
  // Loops through and builds the text.
  let checkExist = document.getElementById(objRatingForms[i].formID); // Get the element if it exists.
  if (checkExist != null) {
    // Checks to make sure the element exists and prevents an error on null.
    let componentName = objRatingForms[i].idPrefix; // Get the name used as an ID prefix for most elements (e.g. deck, super).
    let componentTextareaID = componentName + "Textarea"; // Textarea ID for component(i).
    let componentRatingID = componentName + "Rating"; // Rating button ID for component(i).
    let componentDescriptionButtonID = componentName + "DescriptionButton"; // Description button ID for component(i).
    let componentInfoButtonID = componentName + "InfoButton"; // Info button ID for component(i).
    let componentRating = objRatingForms[i].report.rating; // Get the asset rating.
    document.getElementById(componentRatingID).value = componentRating; // DocumentChange: Write the asset rating to the rating button.
    let componentComment = objRatingForms[i].report.comment; // Get the asset comment.
    document.getElementById(componentTextareaID).value = componentComment; // DocumentChange: Write the asset comment to the textarea.
    let componentDescriptionName = objRatingForms[i].name; // Get the real name of the component for the description button text.
    let componentDescriptionNameProper =
      componentDescriptionName[0].toUpperCase() +
      componentDescriptionName.slice(1); // Make it uppercase.
    document.getElementById(componentDescriptionButtonID).innerHTML =
      componentDescriptionNameProper; // DocumentChange: Write the description button text.
    let componentInfoName = objRatingForms[i].info; // Get the info button text.
    document.getElementById(componentInfoButtonID).innerHTML =
      componentInfoName; // DocumentChange: Write the info button text.
  }
}

//......... 2. Events

//........... 2.1 Click Events

//............. 2.1.1 Rating Input Click

// When the user clicks on the button, toggle between hiding and showing the dropdown content.
window.addEventListener("click", function (event) {
  if (!event.target.innerHTML.includes(`material-symbols-outlined`)) {
    // To prevent the summary from opening HTML
    for (i = 0; i < objRatingForms.length; i++) {
      // Determine which rating form dropdown should open and close the rest. DO NOT break loop.
      let workingID = objRatingForms[i].idPrefix + "Rating"; // Get the form ID (e.g. deckRating).
      let dropdownID = objRatingForms[i].idPrefix + "Dropdown"; // Get the dropdown ID (e.g. deckDropdown).
      let workingName = objRatingForms[i].name; // Get the name field use the [i] value to title the dropdown.
      let workingComment = objRatingForms[i].report.comment; // Get the name field use the [i] value to title the dropdown.
      if (workingID == event.target.id) {
        // If component(i)'s rating button is clicked.
        keychain.tabbing = workingID;
        if (document.getElementById("divTheme").classList.contains("drk-thm")) {
          // If the dark theme is active.
          document.getElementById(dropdownID).innerHTML =
            objRatingForms[i].dropdown.drk; // RatingMenu1Drk; // DocumentChange: Build and show the appropriate dropdown.
          document.querySelector(
            "#" + dropdownID + " .divDropdownTop"
          ).innerHTML = workingName;
          // document.querySelector("#" + dropdownID + " .divDropdownBottom").innerHTML = "Comment: " + workingComment;
        }
        if (
          document.getElementById("divTheme").classList.contains("lght-thm")
        ) {
          // If the light theme is active.
          document.getElementById(dropdownID).innerHTML =
            objRatingForms[i].dropdown.lght; // RatingMenu1Lght; // DocumentChange: Build and show the appropriate dropdown.
          document.querySelector(
            "#" + dropdownID + " .divDropdownTop"
          ).innerHTML = workingName;
          // document.querySelector("#" + dropdownID + " .divDropdownBottom").innerHTML = "Comment: " + workingComment;
        }
        document.getElementById(dropdownID).classList.add("show"); // DocumentChange: Toggle the dropdown open and closed using "show" class.
        document.getElementById("middleModal").style.display = "block"; // Set middleModal to the middle modal ID (layer between modal and main content).
      } else {
        // Always runs on click when the target is not the ratings button.
        document.getElementById(dropdownID).classList.remove("show"); // DocumentChange: Hide other dropdowns using "show" class.
      }
    }
  }
});

//............... 2.1.1.1 Rating Dropdown Click

// When a dropdown row is clicked change the rating and style it based on value.
window.addEventListener("click", function (event) {
  let ratingSelection;
  if (event.target.classList.contains("spanDropdownRating")) {
    ratingSelection = event.target.parentNode.textContent.substring(0, 1);
  }
  if (event.target.classList.contains("spanDropdownCondition")) {
    ratingSelection =
      event.target.parentNode.parentNode.textContent.substring(0, 1);
  }
  if (event.target.classList.contains("pDropdownDescription")) {
    ratingSelection = event.target.parentNode.textContent.substring(0, 1);
  }
  if (event.target.classList.contains("divDropdown")) {
    ratingSelection = event.target.textContent.substring(0, 1);
  }

  if (event.target.closest(".divDropdown")) {
    // Each .divDropdown contains a dropdown row with 3 elements. Not needed-ish.
    for (let i = 0; i < objRatingForms.length; i++) {
      // Loop through the rating forms. Change and style the displayed rating.
      if (
        event.target.closest("#" + objRatingForms[i].idPrefix + "RatingForm")
      ) {
        // Find the rating form clicked.
        let workingID = objRatingForms[i].idPrefix + "Rating"; // Get the form ID (e.g. deckRating).
        document.getElementById(workingID).innerHTML = ratingSelection; // DocumentChange: displayed rating = clicked rating
        objRatingForms[i].report.rating =
          document.getElementById(workingID).innerHTML; // recorded (object) rating = clicked rating
        if (Number(objRatingForms[i].charlist == "N0123456")) {
          // for overtopping liklihood
          if (
            Number(objRatingForms[i].report.rating) !=
            Number(objRatingForms[i].asset.rating)
          ) {
            document
              .getElementById(workingID)
              .classList.remove("buttonRatingHigher");
            document
              .getElementById(workingID)
              .classList.remove("buttonRatingLower");
            document
              .getElementById(workingID)
              .classList.remove("buttonRating2Lower");
            document
              .getElementById(workingID)
              .classList.remove("buttonRatingDifferent");
            document
              .getElementById(workingID)
              .classList.add("buttonRatingDifferent");
            break;
          } else {
            document
              .getElementById(workingID)
              .classList.remove("buttonRatingHigher");
            document
              .getElementById(workingID)
              .classList.remove("buttonRatingLower");
            document
              .getElementById(workingID)
              .classList.remove("buttonRating2Lower");
            document
              .getElementById(workingID)
              .classList.remove("buttonRatingDifferent");
            break;
          }
        } else if (
          Number(objRatingForms[i].report.rating) ==
          Number(objRatingForms[i].asset.rating - 1)
        ) {
          // Color the newly recorded rating based on stored asset rating.
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingHigher"); // DocumentChange: Add/remove color class to the forms rating input.
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingLower");
          document
            .getElementById(workingID)
            .classList.remove("buttonRating2Lower");
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingDifferent");
          document.getElementById(workingID).classList.add("buttonRatingLower");
          break;
        } else if (
          Number(objRatingForms[i].report.rating) <
          Number(objRatingForms[i].asset.rating - 1)
        ) {
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingHigher");
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingLower");
          document
            .getElementById(workingID)
            .classList.remove("buttonRating2Lower");
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingDifferent");
          document
            .getElementById(workingID)
            .classList.add("buttonRating2Lower");
          break;
        } else if (
          Number(objRatingForms[i].report.rating) >
          Number(objRatingForms[i].asset.rating)
        ) {
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingHigher");
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingLower");
          document
            .getElementById(workingID)
            .classList.remove("buttonRating2Lower");
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingDifferent");
          document
            .getElementById(workingID)
            .classList.add("buttonRatingHigher");
          break;
        } else if (
          objRatingForms[i].report.rating != objRatingForms[i].asset.rating
        ) {
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingHigher");
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingLower");
          document
            .getElementById(workingID)
            .classList.remove("buttonRating2Lower");
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingDifferent");
          document
            .getElementById(workingID)
            .classList.add("buttonRatingDifferent");
          break;
        } else {
          // They are equal so go back to blue.
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingHigher");
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingLower");
          document
            .getElementById(workingID)
            .classList.remove("buttonRating2Lower");
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingDifferent");
          break;
        }
      }
    }
    document.getElementById("middleModal").style.display = "none"; // Close the middle modal.
  }
  if (event.target.closest(".divDropdownBorder")) {
    // If you get cute and click the bottom div border.
    document.getElementById("middleModal").style.display = "none"; // Close the middle modal.
  }
});

//............. 2.1.2 Description Button Click

// Opens and populates the modal and middleModal.
window.addEventListener("click", function (event) {
  let targetID = event.target.id; //Get target ID.
  for (i = 0; i < objRatingForms.length; i++) {
    // Loop through rating forms.
    let workingID = objRatingForms[i].idPrefix + "DescriptionButton"; // Get description button ID.
    if (workingID == targetID) {
      // Check if the target ID equals the description button ID.
      keychain.tabbing = workingID;
      let modal = document.getElementById("descriptionModal"); // Set modal to the modal ID.
      let middleModal = document.getElementById("middleModal"); // Set middleModal to the middle modal ID (layer between modal and main content).
      modal.style.display = "block"; // DocumentChange: Show the modal.
      middleModal.style.display = "block"; // DocumentChange: Show the middle modal.
      document.getElementById("bodyID").classList.add("noScroll");
      const modalContent = `
      <div id="descriptionModalClick">
        <div class="divModalHeader">
          ${objRatingForms[i].modal.header}
        </div>
        <div class="divModalBody">
          ${objRatingForms[i].modal.tabs[0]}
        </div>
      </div>
      <div class="divModalFooter">
        ${objRatingForms[i].modal.footer}
      </div>
    `; // Get the content for the description modal.
      document.getElementById("formModalContent").innerHTML = modalContent; // DocumentChange: Populate the description modal.
      document.querySelector(".divModalHeader > h3 > button").focus(); // // DocumentChange: Set the focus to the first tab of the description modal.
      break;
    }
  }
});

//............... 2.1.2.1 Description Modal Close

//////// When the user clicks anywhere outside of the modal (on the middle modal), close both modals.
document
  .getElementById("middleModal")
  .addEventListener("click", function (event) {
    let modal = document.getElementById("descriptionModal"); // Set modal to the modal ID.
    let middleModal = document.getElementById("middleModal"); // Set middleModal to the middle modal ID.
    if (event.target == middleModal) {
      // If you click the middle modal.
      modal.style.display = "none"; // DocumentChange: Hide the modal.
      middleModal.style.display = "none"; // DocumentChange: Hide the middle modal.
      document.getElementById("bodyID").classList.remove("noScroll");
      document.getElementById(keychain.tabbing).focus();
    }
  });

//............... 2.1.2.2 Description Modal Tab 1 (SNBI)

//////// When the first tab in the modal is clicked. In this case the first tab text is also the target tab.
window.addEventListener("click", function (event) {
  let targetHTML = event.target.innerHTML; // Get the text of the target tab/button.
  let queryHTML = document.querySelector(
    ".divModalHeader > h3 > button"
  ).innerHTML; // Get text of first modal tab/button.
  if (targetHTML == queryHTML) {
    // // If target text is equal first button text then populate that tab.
    for (i = 0; i < objRatingForms.length; i++) {
      // Loop through to get the correct forms.
      let firstTabText = objRatingForms[i].modal.name; // Get the first tab text (e.g. Deck (NBI Item 58)) from array(i).
      if (firstTabText == targetHTML) {
        // If array(i) first tab text equals current first tab text.
        let bodyNBI = `${objRatingForms[i].modal.tabs[0]}`; // Get the nbi body text.
        document.querySelector(".divModalBody").innerHTML = bodyNBI; // DocumentChange: Write the body text.
        document
          .querySelector(".divModalHeader > h3 > button")
          .classList.add("buttonActiveModalHeader"); // DocumentChange: Add/remove classes.
        document
          .querySelector(".divModalHeader > h3 > button + button")
          .classList.remove("buttonActiveModalHeader");
        document
          .querySelector(".divModalHeader > h3 > button + button + button")
          .classList.remove("buttonActiveModalHeader");
        document.querySelector(".divModalHeader > h3 > button").focus(); // DocumentChange: Set focus to the tab.
        break;
      }
    }
  }
});

//............... 2.1.2.3 Description Modal Tab 2

//////// When the second tab in the modal is clicked.
window.addEventListener("click", function (event) {
  let targetHTML = event.target.innerHTML; // Get the text of the target tab/button.
  let queryHTML = document.querySelector(
    ".divModalHeader > h3 > button + button"
  ).innerHTML; // Get text of second modal tab/button.
  let nbiHTML = document.querySelector(
    ".divModalHeader > h3 > button"
  ).innerHTML; // Get text of first modal tab/button.
  if (targetHTML == queryHTML) {
    // If target text is equal second button text then populate that tab.
    for (i = 0; i < objRatingForms.length; i++) {
      // Loop through to get the correct forms.
      let firstTabText = objRatingForms[i].modal.name; // Get the first tab text (e.g. Deck (NBI Item 58)) from array(i).
      if (firstTabText == nbiHTML) {
        // If array(i) first tab text equals current first tab text.
        let bodyHistory = `${objRatingForms[i].modal.tabs[1]}`; // Get the nbi history text.
        document.querySelector(".divModalBody").innerHTML = bodyHistory; // DocumentChange: Write the body text.
        document
          .querySelector(".divModalHeader > h3 > button")
          .classList.remove("buttonActiveModalHeader"); // DocumentChange: Add/remove classes.
        document
          .querySelector(".divModalHeader > h3 > button + button")
          .classList.add("buttonActiveModalHeader");
        document
          .querySelector(".divModalHeader > h3 > button + button + button")
          .classList.remove("buttonActiveModalHeader");
        document
          .querySelector(".divModalHeader > h3 > button + button")
          .focus(); // DocumentChange: Set focus to the tab.
        break;
      }
    }
  }
});

//............... 2.1.2.4 Description Modal Tab 3

//////// When the third tab in the modal is clicked.
window.addEventListener("click", function (event) {
  let targetHTML = event.target.innerHTML; // Get the text of the target tab/button.
  let queryHTML = document.querySelector(
    ".divModalHeader > h3 > button + button + button"
  ).innerHTML; // Get text of third modal tab/button.
  let nbiHTML = document.querySelector(
    ".divModalHeader > h3 > button"
  ).innerHTML; // Get text of first modal tab/button.
  if (targetHTML == queryHTML) {
    // If target text is equal third button text then populate that tab.
    for (i = 0; i < objRatingForms.length; i++) {
      // Loop through to get the correct forms.
      let firstTabText = objRatingForms[i].modal.name; // Get the first tab text (e.g. Deck (NBI Item 58)) from array(i).
      if (firstTabText == nbiHTML) {
        // If array(i) first tab text equals current first tab text.
        let bodyExamples = `${objRatingForms[i].modal.tabs[2]}`; // Get the nbi examplrs text.
        document.querySelector(".divModalBody").innerHTML = bodyExamples; // DocumentChange: Write the body text.
        document
          .querySelector(".divModalHeader > h3 > button")
          .classList.remove("buttonActiveModalHeader"); // DocumentChange: Add/remove classes.
        document
          .querySelector(".divModalHeader > h3 > button + button")
          .classList.remove("buttonActiveModalHeader");
        document
          .querySelector(".divModalHeader > h3 > button + button + button")
          .classList.add("buttonActiveModalHeader");
        document
          .querySelector(".divModalHeader > h3 > button + button + button")
          .focus(); // DocumentChange: Set focus to the tab.
        break;
      }
    }
  }
});

//................. 2.1.2.4.1 Copy Example Comment

//////// This copies the clicked p element in the Example Comments tab. Add more conditionals if you add more buttons.
window.addEventListener("click", function (event) {
  let targetText = event.target.innerHTML; // Get target paragraph text.
  let findTab3 = document.querySelector(
    ".divModalHeader > h3 > button + button + button"
  );
  if (findTab3 != null) {
    if (
      document
        .querySelector(".divModalHeader > h3 > button + button + button")
        .classList.contains("buttonActiveModalHeader") &&
      document.querySelector(".divModalHeader > h3 > button + button + button")
        .innerHTML == "Example Comments"
    ) {
      // Third tab is active.
      let elem = document.querySelector(".divModalBody").innerHTML; // Get text block that includes all the p elements.
      if (elem.includes(targetText)) {
        // If the clicked text is in the text block.
        if (event.target.tagName == "P") {
          // If the target is a paragraph element.
          navigator.clipboard.writeText(targetText); // Copy target text to clipboard.
        }
      }
    }
  }
  let findTab2 = document.querySelector(
    ".divModalHeader > h3 > button + button"
  );
  if (findTab2 != null) {
    if (
      document
        .querySelector(".divModalHeader > h3 > button + button")
        .classList.contains("buttonActiveModalHeader") &&
      document.querySelector(".divModalHeader > h3 > button + button")
        .innerHTML == "Example Comments"
    ) {
      // Second tab is active.
      let elem = document.querySelector(".divModalBody").innerHTML; // Get text block that includes all the p elements.
      if (elem.includes(targetText)) {
        // If the clicked text is in the text block.
        if (event.target.tagName == "P") {
          // If the target is a paragraph element.
          navigator.clipboard.writeText(targetText); // Copy target text to clipboard.
        }
      }
    }
  }
});

//............. 2.1.3 Textarea/Div Click

// Set focus to textarea when clicking on div // fxDivClickToTextareaFocus // click deckFormHolder
//document.getElementById(nameFormHolder).addEventListener(event, fxDivClickToTextareaFocus, false);
window.addEventListener("click", function (event) {
  let targetID = event.target.id; // Get the target ID. This could be a Textarea or FormHolder (e.g. deckTextarea or deckFormHolder).
  for (i = 0; i < objRatingForms.length; i++) {
    // Loop through the rating forms.
    let componentName = objRatingForms[i].idPrefix; // Get the name used as an ID prefix for most elements (e.g. deck, super).
    let nameFormHolder = componentName + "FormHolder"; // Id of FormHolder (e.g. deckFormHolder) which is the div that contains all form elements.
    if (nameFormHolder == targetID) {
      // If the form holder div is clicked (happens when textarea is smaller). If the textarea is clicked this is not needed.
      document.querySelector("#" + nameFormHolder + " textarea").focus(); // Set the focus to the textarea of the clicked form.
    }
  }
});

//............. 2.1.4 Info Button Click

// Info Button
window.addEventListener("click", function (event) {
  let targetID = event.target.id; // Get the target ID of info button (e.g. deckInfoButton).
  for (i = 0; i < objRatingForms.length; i++) {
    // Look for the info button with the ID you clicked.
    let workingID = objRatingForms[i].idPrefix + "InfoButton"; // Get the info button ID you are looking for.
    if (workingID == targetID) {
      // If the IDs match.
      alert(document.activeElement.id); // Display the target ID in an alert.
    }
  }
});

//........... 2.2 Input Events

//............. 2.2.1 Rating Input Change

//............... 2.2.1.1 Rating Input Keydown

// Character exclusion // Closes dropdown after a character is entered
window.addEventListener("keydown", function (event) {
  for (i = 0; i < objRatingForms.length; i++) {
    // Loop through forms.
    let workingID = objRatingForms[i].idPrefix + "Rating"; // Get rating button ID (e.g. deckRating).
    let dropChar = objRatingForms[i].charlist;
    if (workingID == document.activeElement.id) {
      // If the active rating button is triggered.
      //this.alert(event.code);
      let currentValue = document.getElementById(workingID).innerHTML; // Get the current rating.
      document.getElementById(workingID).innerHTML = null; // DocumentChange: clear the rating button text.
      let string = event.code; // The code for the key pressed (e.g. Digit7, KeyN, Enter).
      let stringLength = string.length; // The string length.
      let stringLastDigit = string.slice(stringLength - 1); // The last digit of the string which is usually the key pressed (e.g. 7, N, r).

      if (dropChar == `N9876543210`) {
        if (stringLastDigit >= 0 && stringLastDigit <= 9) {
          // If a number was pressed.
          document.getElementById(workingID).innerHTML = stringLastDigit; // DocumentChange: Update the button text.
        } else if (stringLastDigit == "N") {
          // If N/n was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "N"; // DocumentChange: Update the button text.
        } else if (string == "Tab") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "Enter") {
          // if (document.getElementsByClassName("divDropdownContent")[i].classList.contains('show')) {
          //   document.getElementsByClassName("divDropdownContent")[i].classList.remove('show');
          //   this.alert("remove");
          // } else {
          //   document.getElementsByClassName("divDropdownContent")[i].classList.add('show');
          //   this.alert("show");
          // }
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "ArrowUp") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else if (string == "ArrowDown") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else {
          event.preventDefault(); // Don't accept any other key presses.
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        }
      } else if (dropChar == `N9876543`) {
        if (stringLastDigit >= 3 && stringLastDigit <= 9) {
          // If a number was pressed.
          document.getElementById(workingID).innerHTML = stringLastDigit; // DocumentChange: Update the button text.
        } else if (stringLastDigit == "N") {
          // If N/n was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "N"; // DocumentChange: Update the button text.
        } else if (string == "Tab") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "Enter") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "ArrowUp") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else if (string == "ArrowDown") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else {
          event.preventDefault(); // Don't accept any other key presses.
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        }
      } else if (dropChar == `N0123456`) {
        if (stringLastDigit >= 0 && stringLastDigit <= 6) {
          // If a number was pressed.
          document.getElementById(workingID).innerHTML = stringLastDigit; // DocumentChange: Update the button text.
        } else if (stringLastDigit == "N") {
          // If N/n was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "N"; // DocumentChange: Update the button text.
        } else if (string == "Tab") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "Enter") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "ArrowUp") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else if (string == "ArrowDown") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else {
          event.preventDefault(); // Don't accept any other key presses.
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        }
      } else if (dropChar == `GFP`) {
        if (stringLastDigit == "G" || stringLastDigit >= 7) {
          // If G/g was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "G"; // DocumentChange: Update the button text.
        } else if (
          stringLastDigit == "F" ||
          stringLastDigit == 5 ||
          stringLastDigit == 6
        ) {
          // If F/f was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "F"; // DocumentChange: Update the button text.
        } else if (stringLastDigit == "P" || stringLastDigit <= 4) {
          // If P/p was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "P"; // DocumentChange: Update the button text.
        } else if (string == "Tab") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "Enter") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "ArrowUp") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else if (string == "ArrowDown") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else {
          event.preventDefault(); // Don't accept any other key presses.
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        }
      } else if (dropChar == `NGFP`) {
        if (stringLastDigit == "N") {
          // If N/n was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "N"; // DocumentChange: Update the button text.
        } else if (stringLastDigit == "G" || stringLastDigit >= 7) {
          // If G/g was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "G"; // DocumentChange: Update the button text.
        } else if (
          stringLastDigit == "F" ||
          stringLastDigit == 5 ||
          stringLastDigit == 6
        ) {
          // If F/f was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "F"; // DocumentChange: Update the button text.
        } else if (stringLastDigit == "P" || stringLastDigit <= 4) {
          // If P/p was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "P"; // DocumentChange: Update the button text.
        } else if (string == "Tab") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "Enter") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "ArrowUp") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else if (string == "ArrowDown") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else {
          event.preventDefault(); // Don't accept any other key presses.
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        }
      } else if (dropChar == `NGP`) {
        if (stringLastDigit == "N") {
          // If N/n was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "N"; // DocumentChange: Update the button text.
        } else if (stringLastDigit == "G" || stringLastDigit >= 7) {
          // If G/g was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "G"; // DocumentChange: Update the button text.
        } else if (stringLastDigit == "P" || stringLastDigit <= 4) {
          // If P/p was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "P"; // DocumentChange: Update the button text.
        } else if (string == "Tab") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "Enter") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "ArrowUp") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else if (string == "ArrowDown") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else {
          event.preventDefault(); // Don't accept any other key presses.
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        }
      } else if (dropChar == `NYH`) {
        if (stringLastDigit == "N") {
          // If N/n was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "N"; // DocumentChange: Update the button text.
        } else if (stringLastDigit == "Y") {
          // If Y/y was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "Y"; // DocumentChange: Update the button text.
        } else if (stringLastDigit == "H") {
          // If H/h was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "H"; // DocumentChange: Update the button text.
        } else if (string == "Tab") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "Enter") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "ArrowUp") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else if (string == "ArrowDown") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else {
          event.preventDefault(); // Don't accept any other key presses.
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        }
      } else if (dropChar == `NY`) {
        if (stringLastDigit == "N") {
          // If N/n was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "N"; // DocumentChange: Update the button text.
        } else if (stringLastDigit == "Y") {
          // If Y/y was pressed.
          event.preventDefault(); // Ignore the press so the next line can control the case.
          document.getElementById(workingID).innerHTML = "Y"; // DocumentChange: Update the button text.
        } else if (string == "Tab") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "Enter") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "ArrowUp") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else if (string == "ArrowDown") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else {
          event.preventDefault(); // Don't accept any other key presses.
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        }
      } else if (dropChar == `None`) {
        if (string == "Tab") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "Enter") {
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        } else if (string == "ArrowUp") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else if (string == "ArrowDown") {
          document.getElementById(workingID).innerHTML = currentValue;
        } else {
          event.preventDefault(); // Don't accept any other key presses.
          document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
        }
      } else {
        event.preventDefault(); // Don't accept any other key presses.
        document.getElementById(workingID).innerHTML = currentValue; // DocumentChange: Update the button text back to original.
      }

      document
        .getElementsByClassName("divDropdownContent")
        [i].classList.remove("show"); // Hide the dropdown after a key press.
      let check = document.getElementById("descriptionModal").style.display;
      if (check == "none" || check == "") {
        // check to make sure modal is not open ("none" for not open and "" for never opened).
        document.getElementById("middleModal").style.display = "none"; // don't want to close the middlemodal when modal open.
      }
    }
    document
      .getElementsByClassName("divDropdownContent")
      [i].classList.remove("show"); // Hide the dropdown after a key press.
  }
});

//............... 2.2.1.2 Rating Input Keyup

window.addEventListener("keyup", function (event) {
  for (i = 0; i < objRatingForms.length; i++) {
    // Loop through forms.
    let workingID = objRatingForms[i].idPrefix + "Rating"; // Get rating button ID (e.g. deckRating).
    if (workingID == document.activeElement.id) {
      // If the active rating button is triggered.
      objRatingForms[i].report.rating =
        document.getElementById(workingID).innerHTML; // Change the report rating inside the object to what is displayed.
      if (Number(objRatingForms[i].charlist == "N0123456")) {
        // for overtopping liklihood
        if (
          Number(objRatingForms[i].report.rating) !=
          Number(objRatingForms[i].asset.rating)
        ) {
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingHigher");
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingLower");
          document
            .getElementById(workingID)
            .classList.remove("buttonRating2Lower");
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingDifferent");
          document
            .getElementById(workingID)
            .classList.add("buttonRatingDifferent");
          break;
        } else {
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingHigher");
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingLower");
          document
            .getElementById(workingID)
            .classList.remove("buttonRating2Lower");
          document
            .getElementById(workingID)
            .classList.remove("buttonRatingDifferent");
          break;
        }
      } else if (
        Number(objRatingForms[i].report.rating) ==
        Number(objRatingForms[i].asset.rating - 1)
      ) {
        // Color the newly recorded rating based on stored asset rating.
        document
          .getElementById(workingID)
          .classList.remove("buttonRatingHigher"); // DocumentChange: Add/remove color class to the forms rating input.
        document
          .getElementById(workingID)
          .classList.remove("buttonRatingLower");
        document
          .getElementById(workingID)
          .classList.remove("buttonRating2Lower");
        document
          .getElementById(workingID)
          .classList.remove("buttonRatingDifferent");
        document.getElementById(workingID).classList.add("buttonRatingLower");
        break;
      } else if (
        Number(objRatingForms[i].report.rating) <
        Number(objRatingForms[i].asset.rating - 1)
      ) {
        document
          .getElementById(workingID)
          .classList.remove("buttonRatingHigher");
        document
          .getElementById(workingID)
          .classList.remove("buttonRatingLower");
        document
          .getElementById(workingID)
          .classList.remove("buttonRating2Lower");
        document
          .getElementById(workingID)
          .classList.remove("buttonRatingDifferent");
        document.getElementById(workingID).classList.add("buttonRating2Lower");
        break;
      } else if (
        Number(objRatingForms[i].report.rating) >
        Number(objRatingForms[i].asset.rating)
      ) {
        document
          .getElementById(workingID)
          .classList.remove("buttonRatingHigher");
        document
          .getElementById(workingID)
          .classList.remove("buttonRatingLower");
        document
          .getElementById(workingID)
          .classList.remove("buttonRating2Lower");
        document
          .getElementById(workingID)
          .classList.remove("buttonRatingDifferent");
        document.getElementById(workingID).classList.add("buttonRatingHigher");
        break;
      } else if (
        objRatingForms[i].report.rating != objRatingForms[i].asset.rating
      ) {
        document
          .getElementById(workingID)
          .classList.remove("buttonRatingHigher");
        document
          .getElementById(workingID)
          .classList.remove("buttonRatingLower");
        document
          .getElementById(workingID)
          .classList.remove("buttonRating2Lower");
        document
          .getElementById(workingID)
          .classList.remove("buttonRatingDifferent");
        document
          .getElementById(workingID)
          .classList.add("buttonRatingDifferent");
        break;
      } else {
        // They are equal so go back to blue.
        document
          .getElementById(workingID)
          .classList.remove("buttonRatingHigher");
        document
          .getElementById(workingID)
          .classList.remove("buttonRatingLower");
        document
          .getElementById(workingID)
          .classList.remove("buttonRating2Lower");
        document
          .getElementById(workingID)
          .classList.remove("buttonRatingDifferent");
        break;
      }
    }
  }
});

//............. 2.2.2 Textarea Change

//............... 2.2.2.1 Textarea Write Change

// fxDivTextareaMirror // focus, input deckTextarea // duplicate event
for (i = 0; i < objRatingForms.length; i++) {
  // Loop through forms.
  let componentName = objRatingForms[i].idPrefix; // Get the name used as an ID prefix for most elements (e.g. deck, super).
  let nameTextarea = "#" + componentName + "Textarea"; // Get the ID of the textarea as a string.
  document
    .querySelector(nameTextarea)
    .addEventListener("input", function (event) {
      // Listen for textarea input.
      for (i = 0; i < objRatingForms.length; i++) {
        // Loop through forms to find the one that was triggered.
        let componentName = objRatingForms[i].idPrefix; // Get the name used as an ID prefix for most elements (e.g. deck, super).
        let workingID = componentName + "Textarea"; // Get the textarea ID (e.g. deckTextarea).
        if (workingID == document.activeElement.id) {
          // Match the active textarea with textarea(i).
          let elem = document.getElementById(workingID); // Get the textarea element to use its properties.
          elem.parentNode.dataset.replicatedValue = elem.value; // Match the parent element value to it (divTextAreaMirror class = value/comment).
          let readID = componentName + "ReadWrite"; // Get the ID for the read/write button/light.
          let write = document.getElementById(readID); // Get the read/write element to view its properties.
          let stringy = write.style.background; // Get the background color of the read/write button/light.
          if (stringy !== "rgba(5, 141, 46, 0.9)") {
            // If it isn't already green which indicates text entry...
            write.style.background = "rgba(45,45,168,0.9)"; // then it at least needs to be blue which indicates it was read.
          }
        }
      }
    });
}

//............... 2.2.2.2 Textarea Indicate Change

// Change color bar to green // Log comment change
window.addEventListener("input", function (event) {
  for (i = 0; i < objRatingForms.length; i++) {
    // Loop through forms.
    let workingID = objRatingForms[i].idPrefix + "Textarea"; // Get the textarea ID (e.g. deckTextarea).
    if (workingID == event.target.id) {
      // If the target matches the textarea(i).
      let reportText = document.getElementById(workingID).value; // Get the textarea text.
      objRatingForms[i].report.comment = reportText; // Update the report object data to the new comment value.
      let readID = objRatingForms[i].idPrefix + "ReadWrite"; // Get the ID for the read/write button/light.
      let write = document.getElementById(readID); // Get the background color of the read/write button/light.
      if (
        objRatingForms[i].report.comment !== objRatingForms[i].asset.comment
      ) {
        // Compare the comments.
        write.style.background = "rgba(5,141,46,0.9)"; // If the comments don't match then Green light.
      } else {
        write.style.background = "rgba(45,45,168,0.9)"; // If the comments do match then Blue light.
      }
    }
  }
});

//........... 2.3 Focus Events

//............. 2.3.1 Rating Input Focus

//////// Change height of textarea with rating focus // fxRatingClickTextareaHeight // focus deckRating
for (i = 0; i < objRatingForms.length; i++) {
  // Loop through forms.
  let componentName = objRatingForms[i].idPrefix; // Get the name used as an ID prefix for most elements (e.g. deck, super).
  let nameRating = "#" + componentName + "Rating"; // Get the ID of the rating button as a string.
  document
    .querySelector(nameRating)
    .addEventListener("focus", function (event) {
      // Listen for rating button focus.
      for (i = 0; i < objRatingForms.length; i++) {
        // Loop through forms to find the one in focus.
        let componentName = objRatingForms[i].idPrefix; // Get the ID prefix of the active form (e.g. deck, super).
        let workingID = componentName + "Rating"; // Get the rating button ID (e.g. deckRating).
        if (workingID == document.activeElement.id) {
          // Match the active rating with rating(i).
          document.getElementById("descriptionModal").style.display = "none"; // Hide the modal if it is open.
          document.getElementById("middleModal").style.display = "none"; // Hide the middle modal if it is open.
          document.getElementById("bodyID").classList.remove("noScroll"); // Allow scrolling if disabled.
          let elemID = objRatingForms[i].idPrefix + "Textarea"; // Get the textarea ID (e.g. deckTextarea) because that is what we are expanding.
          let elem = document.getElementById(elemID); // Get the textarea element to use its properties.
          elem.parentNode.dataset.replicatedValue = elem.value; // Match the parent element value to it (divTextAreaMirror class = value/comment).
          let readID = componentName + "ReadWrite"; // Get the ID for the read/write button/light.
          let write = document.getElementById(readID); // Get the read/write element to view its properties.
          let stringy = write.style.background; // Get the background color of the read/write button/light.
          // if (stringy !== 'rgba(5, 141, 46, 0.9)') { // If it isn't already green which indicates text entry...
          //   write.style.background = 'rgba(45,45,168,0.9)'; // then it at least needs to be blue which indicates it was read.
          // }
        }
      }
    });
}

//............. 2.3.2 Description Button Focus

//////// Change height of textarea with description button click // fxDescriptionClickTextareaHeight // focus deckDescriptionButton
for (i = 0; i < objRatingForms.length; i++) {
  // Loop through forms.
  let componentName = objRatingForms[i].idPrefix; // Get the name used as an ID prefix for most elements (e.g. deck, super).
  let nameDescription = "#" + componentName + "DescriptionButton"; // Get the ID of the description button as a string.
  document
    .querySelector(nameDescription)
    .addEventListener("focus", function (event) {
      // Listen for description button focus.
      for (i = 0; i < objRatingForms.length; i++) {
        // Loop through forms to find the one in focus.
        let componentName = objRatingForms[i].idPrefix; // Get the ID prefix of the active form (e.g. deck, super).
        let workingID = componentName + "DescriptionButton"; // Get the description button ID (e.g. deckDescriptionButton).
        if (workingID == document.activeElement.id) {
          // Match the active description button with description(i).
          let elemID = objRatingForms[i].idPrefix + "Textarea"; // Get the textarea ID (e.g. deckTextarea) because that is what we are expanding.
          let elem = document.getElementById(elemID); // Get the textarea element to use its properties.
          elem.parentNode.dataset.replicatedValue = elem.value; // Match the parent element value to it (divTextAreaMirror class = value/comment).
          let readID = componentName + "ReadWrite"; // Get the ID for the read/write button/light.
          let write = document.getElementById(readID); // Get the read/write element to view its properties.
          let stringy = write.style.background; // Get the background color of the read/write button/light.
          // if (stringy !== 'rgba(5, 141, 46, 0.9)') { // If it isn't already green which indicates text entry...
          //   write.style.background = 'rgba(45,45,168,0.9)'; // then it at least needs to be blue which indicates it was read.
          // }
        }
      }
    });
}

//............. 2.3.3 Textarea/Div Focus

// fxDivTextareaMirror // focus, input deckTextarea // duplicate event
for (i = 0; i < objRatingForms.length; i++) {
  // Loop through forms.
  let componentName = objRatingForms[i].idPrefix; // Get the name used as an ID prefix for most elements (e.g. deck, super).
  let nameTextarea = "#" + componentName + "Textarea"; // Get the ID of the textarea as a string.
  document
    .querySelector(nameTextarea)
    .addEventListener("focus", function (event) {
      // Listen for textarea focus.
      for (i = 0; i < objRatingForms.length; i++) {
        // Loop through forms to find the one in focus.
        let componentName = objRatingForms[i].idPrefix; // Get the ID prefix of the active form (e.g. deck, super).
        let workingID = componentName + "Textarea"; // Get the textarea ID (e.g. deckTextarea).
        if (workingID == document.activeElement.id) {
          // Match the active textarea with textarea(i).
          let elemID = objRatingForms[i].idPrefix + "Textarea"; // Get the textarea ID (e.g. deckTextarea) because that is what we are expanding.
          let elem = document.getElementById(elemID); // Get the textarea element to use its properties.
          elem.parentNode.dataset.replicatedValue = elem.value; // Match the parent element value to it (divTextAreaMirror class = value/comment).
          let readID = componentName + "ReadWrite"; // Get the ID for the read/write button/light.
          let write = document.getElementById(readID); // Get the read/write element to view its properties.
          let stringy = write.style.background; // Get the background color of the read/write button/light.
          if (stringy !== "rgba(5, 141, 46, 0.9)") {
            // If it isn't already green which indicates text entry...
            write.style.background = "rgba(45,45,168,0.9)"; // then it at least needs to be blue which indicates it was read.
          }
        }
      }
    });
}

//............. 2.3.4 Info Button Focus

for (i = 0; i < objRatingForms.length; i++) {
  // Loop through forms.
  let componentName = objRatingForms[i].idPrefix; // Get the name used as an ID prefix for most elements (e.g. deck, super).
  let nameInfo = "#" + componentName + "InfoButton"; // Get the ID of the info button as a string.
  document.querySelector(nameInfo).addEventListener("focus", function (event) {
    // Listen for info button focus.
    for (i = 0; i < objRatingForms.length; i++) {
      // Loop through forms to find the one in focus.
      let componentName = objRatingForms[i].idPrefix; // Get the ID prefix of the active form (e.g. deck, super).
      let workingID = componentName + "InfoButton"; // Get the info button ID (e.g. deckInfoButton).
      if (workingID == document.activeElement.id) {
        // Match the active info button with info(i).
        let elemID = objRatingForms[i].idPrefix + "Textarea"; // Get the textarea ID (e.g. deckTextarea) because that is what we are expanding.
        let elem = document.getElementById(elemID); // Get the textarea element to use its properties.
        elem.parentNode.dataset.replicatedValue = elem.value; // Match the parent element value to it (divTextAreaMirror class = value/comment).
        let readID = componentName + "ReadWrite"; // Get the ID for the read/write button/light.
        let write = document.getElementById(readID); // Get the read/write element to view its properties.
        let stringy = write.style.background; // Get the background color of the read/write button/light.
        // if (stringy !== 'rgba(5, 141, 46, 0.9)') { // If it isn't already green which indicates text entry...
        //   write.style.background = 'rgba(45,45,168,0.9)'; // then it at least needs to be blue which indicates it was read.
        // }
      }
    }
  });
}

//......... 3. Functions

//........... 3.1 Theme
// Function for changing the theme between drk (default) and lght. Temporarily set onclick to corner div.
document.getElementById("divTheme").addEventListener("click", fxThemeChange); // When theme button is clicked.
function fxThemeChange() {
  let elements = document.getElementsByClassName("drk-thm"); // Find all the theme elements.
  Array.prototype.forEach.call(elements, function (element) {
    // Loop through the theme elements with forEach.
    element.classList.toggle("lght-thm"); // Change theme elements to light or dark. // Not sure how this gets back to dark theme but it does.
  });
  let thmText = document.getElementById("divTheme").innerHTML;
  if (thmText == "D") {
    document.getElementById("divTheme").innerHTML = "L";
  } else {
    document.getElementById("divTheme").innerHTML = "D";
  }
}

//......... 4. Template Literals

//......... 5. To Do

//Issues: No known issues

////////To Do
// Build this as a tool for writing reports until it can be more

// Start modeling SQL tables
// Use a color palette html page to dial your colors in better

// Clean up code
// Structure objects better (issue#001)
// Fix data calls to only happen when needed
// If description is never clicked dont load it
// this doesn't matter now but will when data is read externally

// Set enter function on focus items
// Set arrow function on focus items
// Tab order on modal

// modal should be its own form
// Should have up to 4 buttons/tabs

// Set change values inside the objects
// Add a report score for authoring and reviewing
// Each form should summarize all changes made to it based on those colors for a review score later. i.e. the comment was read and the rating was dropped.

// add a difference floating temporary popup when changing ratings. Haha. Like +2 or -1
// change everything to query selectors (nah)

//......... 6. Misc Commented Out Code

// For focused item
// document.activeElement

//////// Commented out for later
// import {descriptions} from "./modules/contentDescriptions.js";
// event.stopPropagation(); // This is only to prevent a child click from activating a parent click.

//......... 7. Debugger

// window.addEventListener('click', function(event) {
//   if (event.target !== "") {
//     console.log(event.target.style);
//     let content1 = "Target: " + event.target; // Any window click resets the debugger to the event id or none.
//     document.getElementsByTagName("footer")[0].getElementsByTagName("p")[0].innerHTML = content1;
//     if (event.target.id !== "") {
//       let content2 = "Target ID: " + event.target.id; // Any window click resets the debugger to the event id or none.
//       document.getElementsByTagName("footer")[0].getElementsByTagName("p")[0].innerHTML = content1 + " | " + content2;
//     }
//   } else {document.getElementsByTagName("footer")[0].getElementsByTagName("p")[0].innerHTML = "Target: None";}
// });

//......... 8. Test Code

// Fullscreen button
window.addEventListener("click", function (event) {
  let workingID = event.target.id;
  let neededID = "divFullscreen";
  if (workingID == neededID) {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});

// window.addEventListener('click', function(event) { /// Can't do this to a textarea // Maybe find an alternative
//   if (event.target.innerHTML == `ink_marker`) {
//     let crackWord = "crack";
//     for (i = 0; i < objRatingForms.length; i++) {
//       let textareaID = objRatingForms[i].idPrefix + "Textarea";
//       let text = this.document.getElementById(textareaID).textContent
//       this.document.getElementById(textareaID).textContent = null;
//       let result = text.replace(/crack/g, `CRACK`);
//       this.document.getElementById(textareaID).textContent = result;
//     }
//   }
// });

// Sorts
window.addEventListener("click", function (event) {
  if (event.target.innerHTML == `low_priority`) {
    let targetID = event.target.id;
    if (keychain.sort == 0) {
      for (i = 0; i < objRatingForms.length; i++) {
        let formID = objRatingForms[i].idPrefix + "RatingForm";
        let ratingID = objRatingForms[i].idPrefix + "Rating";
        let ratingHTML = document.getElementById(ratingID).innerHTML;
        let textareaHTML = document.getElementById(
          objRatingForms[i].idPrefix + "Textarea"
        ).value;
        if (ratingHTML == "N" && textareaHTML == "") {
          document.getElementById(formID).classList.add("hideRatingForm");
        }
      }
      document.getElementById(targetID).classList.add("buttonHeaderOn");
      keychain.sort = 1;
    } else if (keychain.sort == 1) {
      for (i = 0; i < objRatingForms.length; i++) {
        let formID = objRatingForms[i].idPrefix + "RatingForm";
        document.getElementById(formID).classList.remove("hideRatingForm");
      }
      document.getElementById(targetID).classList.remove("buttonHeaderOn");
      keychain.sort = 0; // set to 2 if you want more sorts.
    } else {
      document.getElementById(targetID).classList.remove("buttonHeaderOn");
      keychain.sort = 0;
    }
  }
});

// Make rating forms appear open
for (i = 0; i < objRatingForms.length; i++) {
  // Loop through forms to find the one in focus.
  let elemID = objRatingForms[i].idPrefix + "Textarea"; // Get the textarea ID (e.g. deckTextarea) because that is what we are expanding.
  let elem = document.getElementById(elemID); // Get the textarea element to use its properties.
  elem.parentNode.dataset.replicatedValue = elem.value; // Match the parent element value to it (divTextAreaMirror class = value/comment).
}

// Hide modal when tab out
window.addEventListener("keydown", function (event) {
  let activeID = document.activeElement.id;
  let string = event.code; // The code for the key pressed (e.g. Digit7, KeyN, Enter).
  if (string == "Escape" || string == "Home" || string == "End") {
    document.getElementById("descriptionModal").style.display = "none"; // Hide the modal if it is open.
    document.getElementById("middleModal").style.display = "none"; // Hide the middle modal if it is open.
    document.getElementById("bodyID").classList.remove("noScroll"); // Allow scrolling if disabled.
    if (keychain.tabbing != "default") {
      document.getElementById(keychain.tabbing).focus(); // the if statement fixes null error
    }
    event.preventDefault();
  }
  if (activeID == "footerStop") {
    if (event.key == "Tab" && !event.shiftKey) {
      document.getElementById("descriptionModal").style.display = "none"; // Hide the modal if it is open.
      document.getElementById("middleModal").style.display = "none"; // Hide the middle modal if it is open.
      document.getElementById("bodyID").classList.remove("noScroll"); // Allow scrolling if disabled.
      document.getElementById(keychain.tabbing).focus();
    }
  }
  if (activeID == "headerStart") {
    if (event.key == "Tab" && event.shiftKey) {
      document.getElementById("descriptionModal").style.display = "none"; // Hide the modal if it is open.
      document.getElementById("middleModal").style.display = "none"; // Hide the middle modal if it is open.
      document.getElementById("bodyID").classList.remove("noScroll"); // Allow scrolling if disabled.
      document.getElementById(keychain.tabbing).focus();
    }
  }
});

// Allows row changes with arrow keys when the rating value field has focus
window.addEventListener("keydown", function (event) {
  let activeID = document.activeElement.id;
  let string = event.code; // The code for the key pressed (e.g. Digit7, KeyN, Enter).
  // Go to backbutton
  if (string == "Home" && !activeID.includes("Textarea")) {
    document.getElementById("backButton").focus();
    this.window.scroll(0, 0);
  }
  // Go to last row
  if (string == "End" && !activeID.includes("Textarea")) {
    let objLength = objRatingForms.length - 1;
    let newID = objRatingForms[objLength].idPrefix + "Rating";
    document.getElementById(newID).focus();
    this.window.scroll(6000, 6000);
  }
  // Go from back button to first rating form rating value
  if (string == "ArrowDown" && activeID == "backButton") {
    let newID = objRatingForms[0].idPrefix + "Rating";
    document.getElementById(newID).focus();
    event.preventDefault();
    this.window.scroll(0, 0);
    //document.getElementById("divRatingForms").scroll(0, -400);
  }
  // Go to next rating form everything but textarea
  // Doesn't work when rows are hidden

  if (keychain.sort == 0) {
    if (string == "ArrowDown" && !activeID.includes("Textarea")) {
      // && activeID.includes("Rating")
      for (i = 0; i < objRatingForms.length; i++) {
        if (activeID.includes(objRatingForms[i].idPrefix)) {
          if (i != objRatingForms.length - 1) {
            let result = activeID.replace(objRatingForms[i].idPrefix, ""); // error when normal sort
            let newID = objRatingForms[i + 1].idPrefix + result;
            document.getElementById(newID).focus();
            break;
          } else {
            let result = activeID.replace(objRatingForms[i].idPrefix, "");
            let newID = objRatingForms[0].idPrefix + result;
            document.getElementById(newID).focus();
            event.preventDefault();
            this.window.scroll(0, 0);
            break;
          }
        }
      }
    }
  }
  // Build for sorted // Not quite working but not throwing errors
  if (keychain.sort == 1) {
    if (string == "ArrowDown" && !activeID.includes("Textarea")) {
      // && activeID.includes("Rating")
      let visibleFormsArray = [];
      j = 0;
      for (i = 0; i < objRatingForms.length; i++) {
        let checkVis = document
          .getElementById(objRatingForms[i].idPrefix + "RatingForm")
          .classList.contains("hideRatingForm");
        if (checkVis == false) {
          visibleFormsArray[j] = objRatingForms[i].idPrefix;
          j++;
        }
      }
      for (i = 0; i < visibleFormsArray.length; i++) {
        if (activeID.includes(visibleFormsArray[i])) {
          if (i != visibleFormsArray.length - 1) {
            let result = activeID.replace(visibleFormsArray[i], ""); // error when normal sort
            let newID = visibleFormsArray[i + 1] + result;
            document.getElementById(newID).focus();
            break;
          } else {
            let result = activeID.replace(visibleFormsArray[i], "");
            let newID = visibleFormsArray[0] + result;
            document.getElementById(newID).focus();
            event.preventDefault();
            this.window.scroll(0, 0);
            break;
          }
        }
      }
    }
  }
  // Go to next rating form from textarea
  // Doesn't work when rows are hidden
  if (keychain.sort == 0) {
    if (string == "ArrowDown" && activeID.includes("Textarea")) {
      // && activeID.includes("Rating")
      for (i = 0; i < objRatingForms.length; i++) {
        if (activeID.includes(objRatingForms[i].idPrefix)) {
          let elem = document.getElementById(activeID);
          let textString = elem.value;
          let startPosition = elem.selectionStart;
          let endPosition = elem.selectionEnd;
          let textLength = textString.length;
          if (startPosition == endPosition && endPosition == textLength) {
            if (i != objRatingForms.length - 1) {
              let newID = objRatingForms[i + 1].idPrefix + "Textarea";
              document.getElementById(newID).focus();
              break;
            } else {
              let newID = objRatingForms[0].idPrefix + "Textarea";
              document.getElementById(newID).focus();
              event.preventDefault();
              this.window.scroll(0, 0);
              break;
            }
          }
        }
      }
    }
  }

  if (keychain.sort == 1) {
    if (string == "ArrowDown" && activeID.includes("Textarea")) {
      // && activeID.includes("Rating")
      let visibleFormsArray = [];
      j = 0;
      for (i = 0; i < objRatingForms.length; i++) {
        let checkVis = document
          .getElementById(objRatingForms[i].idPrefix + "RatingForm")
          .classList.contains("hideRatingForm");
        if (checkVis == false) {
          visibleFormsArray[j] = objRatingForms[i].idPrefix;
          j++;
        }
      }
      for (i = 0; i < visibleFormsArray.length; i++) {
        if (activeID.includes(visibleFormsArray[i])) {
          let elem = document.getElementById(activeID);
          let textString = elem.value;
          let startPosition = elem.selectionStart;
          let endPosition = elem.selectionEnd;
          let textLength = textString.length;
          if (startPosition == endPosition && endPosition == textLength) {
            if (i != visibleFormsArray.length - 1) {
              let newID = visibleFormsArray[i + 1] + "Textarea";
              document.getElementById(newID).focus();
              break;
            } else {
              let newID = visibleFormsArray[0] + "Textarea";
              document.getElementById(newID).focus();
              event.preventDefault();
              this.window.scroll(0, 0);
              break;
            }
          }
        }
      }
    }
  }

  // Go to previous rating form everything but textarea
  // Doesn't work when rows are hidden
  if (keychain.sort == 0) {
    if (string == "ArrowUp" && !activeID.includes("Textarea")) {
      // && activeID.includes("Rating")
      for (i = 0; i < objRatingForms.length; i++) {
        if (activeID.includes(objRatingForms[i].idPrefix)) {
          if (i != 0) {
            let result = activeID.replace(objRatingForms[i].idPrefix, "");
            let newID = objRatingForms[i - 1].idPrefix + result;
            document.getElementById(newID).focus();
            let element = document.getElementById(newID);
            let mathStuff = element.offsetTop - this.scrollY;
            let elemHeight = element.offsetHeight * -1 - 10;
            if (mathStuff < 100) {
              event.preventDefault();
              this.window.scrollBy(0, elemHeight);
            }
            break;
          } else {
            let result = activeID.replace(objRatingForms[i].idPrefix, "");
            let newID =
              objRatingForms[objRatingForms.length - 1].idPrefix + result;
            document.getElementById(newID).focus();
            break;
          }
        }
      }
    }
  }

  if (keychain.sort == 1) {
    if (string == "ArrowUp" && !activeID.includes("Textarea")) {
      // && activeID.includes("Rating")
      let visibleFormsArray = [];
      j = 0;
      for (i = 0; i < objRatingForms.length; i++) {
        let checkVis = document
          .getElementById(objRatingForms[i].idPrefix + "RatingForm")
          .classList.contains("hideRatingForm");
        if (checkVis == false) {
          visibleFormsArray[j] = objRatingForms[i].idPrefix;
          j++;
        }
      }
      for (i = 0; i < visibleFormsArray.length; i++) {
        if (activeID.includes(visibleFormsArray[i])) {
          if (i != 0) {
            let result = activeID.replace(visibleFormsArray[i], "");
            let newID = visibleFormsArray[i - 1] + result;
            document.getElementById(newID).focus();
            let element = document.getElementById(newID);
            let mathStuff = element.offsetTop - this.scrollY;
            let elemHeight = element.offsetHeight * -1 - 10;
            if (mathStuff < 100) {
              event.preventDefault();
              this.window.scrollBy(0, elemHeight);
            }
            break;
          } else {
            let result = activeID.replace(visibleFormsArray[i], "");
            let newID =
              visibleFormsArray[visibleFormsArray.length - 1] + result;
            document.getElementById(newID).focus();
            break;
          }
        }
      }
    }
  }

  // Go to previous rating form textarea
  // Doesn't work when rows are hidden
  if (keychain.sort == 0) {
    if (string == "ArrowUp" && activeID.includes("Textarea")) {
      // && activeID.includes("Rating")
      for (i = 0; i < objRatingForms.length; i++) {
        if (activeID.includes(objRatingForms[i].idPrefix)) {
          let elem = document.getElementById(activeID);
          let textString = elem.value;
          let startPosition = elem.selectionStart;
          let endPosition = elem.selectionEnd;
          let textLength = textString.length;
          if (startPosition == endPosition && startPosition == 0) {
            if (i != 0) {
              let newID = objRatingForms[i - 1].idPrefix + "Textarea";
              document.getElementById(newID).focus();
              let ratingID = objRatingForms[i - 1].idPrefix + "Rating";
              let element = document.getElementById(newID);
              let mathStuff = element.offsetTop - this.scrollY;
              let elemHeight = element.offsetHeight * -1 - 10;
              if (mathStuff < 100) {
                event.preventDefault();
                this.window.scrollBy(0, elemHeight);
              }
              break;
            } else {
              let newID =
                objRatingForms[objRatingForms.length - 1].idPrefix + "Textarea";
              document.getElementById(newID).focus();
              break;
            }
          }
        }
      }
    }
  }

  if (keychain.sort == 1) {
    if (string == "ArrowUp" && activeID.includes("Textarea")) {
      // && activeID.includes("Rating")
      let visibleFormsArray = [];
      j = 0;
      for (i = 0; i < objRatingForms.length; i++) {
        let checkVis = document
          .getElementById(objRatingForms[i].idPrefix + "RatingForm")
          .classList.contains("hideRatingForm");
        if (checkVis == false) {
          visibleFormsArray[j] = objRatingForms[i].idPrefix;
          j++;
        }
      }
      for (i = 0; i < visibleFormsArray.length; i++) {
        if (activeID.includes(visibleFormsArray[i])) {
          let elem = document.getElementById(activeID);
          let textString = elem.value;
          let startPosition = elem.selectionStart;
          let endPosition = elem.selectionEnd;
          let textLength = textString.length;
          if (startPosition == endPosition && startPosition == 0) {
            if (i != 0) {
              let newID = visibleFormsArray[i - 1] + "Textarea";
              document.getElementById(newID).focus();
              let ratingID = visibleFormsArray[i - 1] + "Rating";
              let element = document.getElementById(newID);
              let mathStuff = element.offsetTop - this.scrollY;
              let elemHeight = element.offsetHeight * -1 - 10;
              if (mathStuff < 100) {
                event.preventDefault();
                this.window.scrollBy(0, elemHeight);
              }
              break;
            } else {
              let newID =
                visibleFormsArray[visibleFormsArray.length - 1] + "Textarea";
              document.getElementById(newID).focus();
              break;
            }
          }
        }
      }
    }
  }

  // Move right except from textarea
  if (string == "ArrowRight" && !activeID.includes("Textarea")) {
    // && activeID.includes("Rating")
    for (i = 0; i < objRatingForms.length; i++) {
      if (activeID.includes(objRatingForms[i].idPrefix)) {
        if (activeID.includes("Rating")) {
          let newID = objRatingForms[i].idPrefix + "DescriptionButton";
          document.getElementById(newID).focus();
          break;
        } else if (activeID.includes("DescriptionButton")) {
          let newID = objRatingForms[i].idPrefix + "Textarea";
          document.getElementById(newID).focus();
          break;
        } else if (activeID.includes("InfoButton")) {
          let newID = objRatingForms[i].idPrefix + "Rating";
          document.getElementById(newID).focus();
          break;
        }
        event.preventDefault();
      }
    }
  }
  // if cursor position is at end of textarea then allow it to go to infobutton
  if (string == "ArrowRight" && activeID.includes("Textarea")) {
    // && activeID.includes("Rating")
    for (i = 0; i < objRatingForms.length; i++) {
      if (activeID.includes(objRatingForms[i].idPrefix)) {
        let elem = document.getElementById(activeID);
        let textString = elem.value;
        let startPosition = elem.selectionStart;
        let endPosition = elem.selectionEnd;
        let textLength = textString.length;
        if (startPosition == endPosition && endPosition == textLength) {
          let newID = objRatingForms[i].idPrefix + "InfoButton";
          document.getElementById(newID).focus();
          event.preventDefault();
          break;
        }
      }
    }
  }

  // Move left except from textarea
  if (string == "ArrowLeft" && !activeID.includes("Textarea")) {
    // && activeID.includes("Rating")
    for (i = 0; i < objRatingForms.length; i++) {
      if (activeID.includes(objRatingForms[i].idPrefix)) {
        if (activeID.includes("DescriptionButton")) {
          let newID = objRatingForms[i].idPrefix + "Rating";
          document.getElementById(newID).focus();
          break;
        } else if (activeID.includes("Rating")) {
          let newID = objRatingForms[i].idPrefix + "InfoButton";
          document.getElementById(newID).focus();
          break;
        } else if (activeID.includes("InfoButton")) {
          let newID = objRatingForms[i].idPrefix + "Textarea";
          document.getElementById(newID).focus();
          break;
        }
        event.preventDefault();
      }
    }
  }
  // if cursor position is at beginning of textarea then allow it to go to description button
  if (string == "ArrowLeft" && activeID.includes("Textarea")) {
    // && activeID.includes("Rating")
    for (i = 0; i < objRatingForms.length; i++) {
      if (activeID.includes(objRatingForms[i].idPrefix)) {
        let elem = document.getElementById(activeID);
        let textString = elem.value;
        let startPosition = elem.selectionStart;
        let endPosition = elem.selectionEnd;
        let textLength = textString.length;
        if (startPosition == endPosition && startPosition == 0) {
          let newID = objRatingForms[i].idPrefix + "DescriptionButton";
          document.getElementById(newID).focus();
          event.preventDefault();
          break;
        }
      }
    }
  }
});

window.addEventListener("keydown", function (event) {
  if (event.key == "Home") {
    window.location.href = "http://localhost:3000/home.html";
  }
});

// window.addEventListener('click', function(event) {
//   let activeID = document.activeElement.id;
//   keychain.timer = activeID;
//   let myTimeout = setTimeout(myGreeting, 5000);
//   this.alert(myTimeout);
// });

// function myGreeting() {
//   let activeID = document.activeElement.id;
//   if (keychain.timer == activeID) {
//     alert(keychain.timer + " " + activeID);
//   }
// }
// function myStopFunction() {
//   clearTimeout(myTimeout);
// }
