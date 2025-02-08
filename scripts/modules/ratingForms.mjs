// import {objAssetData} from "./assetdata.mjs";
// import {objDropdown} from "./dropdownMenus.mjs";
// import {objModal} from "./modal.mjs";

// export const objRatingForms = [];

var i;
i = 1;
var j;
j = 0;

// This is the data used to populate the rating forms
// It comes from the assetdata module which comes from the SNBI module

// info might need to be in asset and report once I set up the info button

// Process:
// Copy the objAssetData to objReportDataInitial and objReportDataDraft
// Compare the objReportDataDraft changes to the objReportDataInitial
// These variables would have to live somewhere while the report is open
// This will need to change because you will want to write changes to external files as soon as they are made to prevent data loss.
// The current way is only good for temp data
// You need to change a line in a text/data file before any of this is even feasable.

let objRatingForms = {};
objRatingForms[j] = {
  // Approach Roadway Alignment
  formID: objAssetData[0].BAP01.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BAP01.idPrefix, // The idPrefix is BAP01 so we know where we are at all times
  formPosition: i, // Starts at 1.
  charlist: objDropdown[0].Alignment.charlist,
  dropdown: {
    drk: objDropdown[0].Alignment.drk,
    lght: objDropdown[0].Alignment.lght,
  },
  name: objAssetData[0].BAP01.data_item_name,
  report: {
    // Should be able to eliminate this level and just go rating and comment
    rating: objAssetData[0].BAP01.code,
    comment: objAssetData[0].BAP01.comment,
  },
  asset: {
    // Should be able to remove this and read the objReportDataInitial
    rating: objAssetData[0].BAP01.code,
    comment: objAssetData[0].BAP01.comment,
  },
  modal: objModal[0].BAP01,
  info: ``,
};
j++;
i++;

objRatingForms[j] = {
  // "Terminal Joints",
  formID: objAssetData[0].BMAD04.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BMAD04.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].TermJoints.charlist,
  dropdown: {
    drk: objDropdown[0].TermJoints.drk,
    lght: objDropdown[0].TermJoints.lght,
  },
  name: objAssetData[0].BMAD04.data_item_name,
  report: {
    rating: objAssetData[0].BMAD04.condition_rating,
    comment: objAssetData[0].BMAD04.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BMAD04.condition_rating,
    comment: objAssetData[0].BMAD04.condition_comment,
  },
  modal: objModal[0].BMAD04,
  info: objAssetData[0].BMAD04.code,
};
j++;
i++;

objRatingForms[j] = {
  // "Approach Slabs",
  formID: objAssetData[0].BMAD01.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BMAD01.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Table20.charlist,
  dropdown: {
    drk: objDropdown[0].Table20.drk,
    lght: objDropdown[0].Table20.lght,
  },
  name: objAssetData[0].BMAD01.data_item_name,
  report: {
    rating: objAssetData[0].BMAD01.condition_rating,
    comment: objAssetData[0].BMAD01.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BMAD01.condition_rating,
    comment: objAssetData[0].BMAD01.condition_comment,
  },
  modal: objModal[0].BMAD01,
  info: objAssetData[0].BMAD01.code,
};
j++;
i++;

objRatingForms[j] = {
  // "Bridge Joints",
  formID: objAssetData[0].BC08.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BC08.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Joints.charlist,
  dropdown: {
    drk: objDropdown[0].Joints.drk,
    lght: objDropdown[0].Joints.lght,
  },
  name: objAssetData[0].BC08.data_item_name,
  report: {
    rating: objAssetData[0].BC08.condition_rating,
    comment: objAssetData[0].BC08.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BC08.condition_rating,
    comment: objAssetData[0].BC08.condition_comment,
  },
  modal: objModal[0].BC08,
  info: objAssetData[0].BC08.code,
};
j++;
i++;

objRatingForms[j] = {
  // "Wearing Surface",
  formID: objAssetData[0].BMAD02.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BMAD02.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Table20less.charlist,
  dropdown: {
    drk: objDropdown[0].Table20less.drk,
    lght: objDropdown[0].Table20less.lght,
  },
  name: objAssetData[0].BMAD02.data_item_name,
  report: {
    rating: objAssetData[0].BMAD02.condition_rating,
    comment: objAssetData[0].BMAD02.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BMAD02.condition_rating,
    comment: objAssetData[0].BMAD02.condition_comment,
  },
  modal: objModal[0].BMAD02,
  info: objAssetData[0].BSP10.code,
};
j++;
i++;

objRatingForms[j] = {
  // "Deck",
  formID: objAssetData[0].BC01.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BC01.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Table20.charlist,
  dropdown: {
    drk: objDropdown[0].Table20.drk,
    lght: objDropdown[0].Table20.lght,
  },
  name: objAssetData[0].BC01.data_item_name,
  report: {
    rating: objAssetData[0].BC01.condition_rating,
    comment: objAssetData[0].BC01.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BC01.condition_rating,
    comment: objAssetData[0].BC01.condition_comment,
  },
  modal: objModal[0].BC01,
  info: objAssetData[0].BSP09.code,
};
j++;
i++;

objRatingForms[j] = {
  // "Superstructure",
  formID: objAssetData[0].BC02.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BC02.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Table20.charlist,
  dropdown: {
    drk: objDropdown[0].Table20.drk,
    lght: objDropdown[0].Table20.lght,
  },
  name: objAssetData[0].BC02.data_item_name,
  report: {
    rating: objAssetData[0].BC02.condition_rating,
    comment: objAssetData[0].BC02.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BC02.condition_rating,
    comment: objAssetData[0].BC02.condition_comment,
  },
  modal: objModal[0].BC02,
  info: Number(objAssetData[0].BSP02.numeric_value) + " Span | " + objAssetData[0].BSP06.code,
};
j++;
i++;

objRatingForms[j] = {
  // "Bridge Bearings",
  formID: objAssetData[0].BC07.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BC07.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Table20.charlist,
  dropdown: {
    drk: objDropdown[0].Table20.drk,
    lght: objDropdown[0].Table20.lght,
  },
  name: objAssetData[0].BC07.data_item_name,
  report: {
    rating: objAssetData[0].BC07.condition_rating,
    comment: objAssetData[0].BC07.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BC07.condition_rating,
    comment: objAssetData[0].BC07.condition_comment,
  },
  modal: objModal[0].BC07,
  info: objAssetData[0].BC07.code,
};
j++;
i++;

objRatingForms[j] = {
  // "Paint",
  formID: objAssetData[0].BMAD03.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BMAD03.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Paint.charlist,
  dropdown: {
    drk: objDropdown[0].Paint.drk,
    lght: objDropdown[0].Paint.lght,
  },
  name: objAssetData[0].BMAD03.data_item_name,
  report: {
    rating: objAssetData[0].BMAD03.condition_rating,
    comment: objAssetData[0].BMAD03.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BMAD03.condition_rating,
    comment: objAssetData[0].BMAD03.condition_comment,
  },
  modal: objModal[0].BMAD03,
  info: objAssetData[0].BMAD03.year,
};
j++;
i++;

objRatingForms[j] = {
  // "Substructure",
  formID: objAssetData[0].BC03.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BC03.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Table20.charlist,
  dropdown: {
    drk: objDropdown[0].Table20.drk,
    lght: objDropdown[0].Table20.lght,
  },
  name: objAssetData[0].BC03.data_item_name,
  report: {
    rating: objAssetData[0].BC03.condition_rating,
    comment: objAssetData[0].BC03.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BC03.condition_rating,
    comment: objAssetData[0].BC03.condition_comment,
  },
  modal: objModal[0].BC03,
  info: objAssetData[0].BSB01.code + " | " + objAssetData[0].BSB02.code,
};
j++;
i++;

objRatingForms[j] = {
  // "Slopewall",
  formID: objAssetData[0].BMAD05.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BMAD05.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Slopewalls.charlist,
  dropdown: {
    drk: objDropdown[0].Slopewalls.drk,
    lght: objDropdown[0].Slopewalls.lght,
  },
  name: objAssetData[0].BMAD05.data_item_name,
  report: {
    rating: objAssetData[0].BMAD05.condition_rating,
    comment: objAssetData[0].BMAD05.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BMAD05.condition_rating,
    comment: objAssetData[0].BMAD05.condition_comment,
  },
  modal: objModal[0].BMAD05,
  info: ``,
};
j++;
i++;

objRatingForms[j] = {
  // "Culvert",
  formID: objAssetData[0].BC04.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BC04.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Table20.charlist,
  dropdown: {
    drk: objDropdown[0].Table20.drk,
    lght: objDropdown[0].Table20.lght,
  },
  name: objAssetData[0].BC04.data_item_name,
  report: {
    rating: objAssetData[0].BC04.condition_rating,
    comment: objAssetData[0].BC04.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BC04.condition_rating,
    comment: objAssetData[0].BC04.condition_comment,
  },
  modal: objModal[0].BC04,
  info: Number(objAssetData[0].BSP02.numeric_value) + " Span | " + objAssetData[0].BSP06.code,
};
j++;
i++;

objRatingForms[j] = {
  // "Channel",
  formID: objAssetData[0].BC09.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BC09.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Channel.charlist,
  dropdown: {
    drk: objDropdown[0].Channel.drk,
    lght: objDropdown[0].Channel.lght,
  },
  name: objAssetData[0].BC09.data_item_name,
  report: {
    rating: objAssetData[0].BC09.condition_rating,
    comment: objAssetData[0].BC09.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BC09.condition_rating,
    comment: objAssetData[0].BC09.condition_comment,
  },
  modal: objModal[0].BC09,
  info: ``,
};
j++;
i++;

objRatingForms[j] = {
  // "Channel Protection",
  formID: objAssetData[0].BC10.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BC10.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].ChannelPro.charlist,
  dropdown: {
    drk: objDropdown[0].ChannelPro.drk,
    lght: objDropdown[0].ChannelPro.lght,
  },
  name: objAssetData[0].BC10.data_item_name,
  report: {
    rating: objAssetData[0].BC10.condition_rating,
    comment: objAssetData[0].BC10.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BC10.condition_rating,
    comment: objAssetData[0].BC10.condition_comment,
  },
  modal: objModal[0].BC10,
  info: ``,
};
j++;
i++;

objRatingForms[j] = {
  // "Overtopping Likelihood",
  formID: objAssetData[0].BAP02.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BAP02.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Overtopping.charlist,
  dropdown: {
    drk: objDropdown[0].Overtopping.drk,
    lght: objDropdown[0].Overtopping.lght,
  },
  name: objAssetData[0].BAP02.data_item_name,
  report: {
    rating: objAssetData[0].BAP02.code,
    comment: objAssetData[0].BAP02.comment,
  },
  asset: {
    rating: objAssetData[0].BAP02.code,
    comment: objAssetData[0].BAP02.comment,
  },
  modal: objModal[0].BAP02,
  info: ``,
};
j++;
i++;

objRatingForms[j] = {
  // "Scour",
  formID: objAssetData[0].BC11.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BC11.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Scour.charlist,
  dropdown: {
    drk: objDropdown[0].Scour.drk,
    lght: objDropdown[0].Scour.lght,
  },
  name: objAssetData[0].BC11.data_item_name,
  report: {
    rating: objAssetData[0].BC11.condition_rating,
    comment: objAssetData[0].BC11.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BC11.condition_rating,
    comment: objAssetData[0].BC11.condition_comment,
  },
  modal: objModal[0].BC11,
  info: objAssetData[0].BAP03.code,
};
j++;
i++;

objRatingForms[j] = {
  // "Scour Vulnerability",
  formID: objAssetData[0].BAP03.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BAP03.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Vulnerability.charlist,
  dropdown: {
    drk: objDropdown[0].Vulnerability.drk,
    lght: objDropdown[0].Vulnerability.lght,
  },
  name: objAssetData[0].BAP03.data_item_name,
  report: {
    rating: objAssetData[0].BAP03.code,
    comment: objAssetData[0].BAP03.comment,
  },
  asset: {
    rating: objAssetData[0].BAP03.code,
    comment: objAssetData[0].BAP03.comment,
  },
  modal: objModal[0].BAP03,
  info: ``,
};
j++;
i++;

objRatingForms[j] = {
  // "Bridge Railing",
  formID: objAssetData[0].BC05.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BC05.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Table20.charlist,
  dropdown: {
    drk: objDropdown[0].Table20.drk,
    lght: objDropdown[0].Table20.lght,
  },
  name: objAssetData[0].BC05.data_item_name,
  report: {
    rating: objAssetData[0].BC05.condition_rating,
    comment: objAssetData[0].BC05.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BC05.condition_rating,
    comment: objAssetData[0].BC05.condition_comment,
  },
  modal: objModal[0].BC05,
  info: objAssetData[0].BRH01.code,
};
j++;
i++;

objRatingForms[j] = {
  // "Bridge Railing Transitions",
  formID: objAssetData[0].BC06.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BC06.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Table20.charlist,
  dropdown: {
    drk: objDropdown[0].Table20.drk,
    lght: objDropdown[0].Table20.lght,
  },
  name: objAssetData[0].BC06.data_item_name,
  report: {
    rating: objAssetData[0].BC06.condition_rating,
    comment: objAssetData[0].BC06.condition_comment,
  },
  asset: {
    rating: objAssetData[0].BC06.condition_rating,
    comment: objAssetData[0].BC06.condition_comment,
  },
  modal: objModal[0].BC06,
  info: objAssetData[0].BRH02.code,
};
j++;
i++;

objRatingForms[j] = {
  // "Swallows",
  formID: objAssetData[0].BMAD06.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BMAD06.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Swallows.charlist,
  dropdown: {
    drk: objDropdown[0].Swallows.drk,
    lght: objDropdown[0].Swallows.lght,
  },
  name: objAssetData[0].BMAD06.data_item_name,
  report: {
    rating: objAssetData[0].BMAD06.code,
    comment: objAssetData[0].BMAD06.comment,
  },
  asset: {
    rating: objAssetData[0].BMAD06.code,
    comment: objAssetData[0].BMAD06.comment,
  },
  modal: objModal[0].BMAD06,
  info: ``,
};
j++;
i++;

objRatingForms[j] = {
  // "Bats",
  formID: objAssetData[0].BMAD07.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].BMAD07.idPrefix,
  formPosition: i,
  charlist: objDropdown[0].Bats.charlist,
  dropdown: {
    drk: objDropdown[0].Bats.drk,
    lght: objDropdown[0].Bats.lght,
  },
  name: objAssetData[0].BMAD07.data_item_name,
  report: {
    rating: objAssetData[0].BMAD07.code,
    comment: objAssetData[0].BMAD07.comment,
  },
  asset: {
    rating: objAssetData[0].BMAD07.code,
    comment: objAssetData[0].BMAD07.comment,
  },
  modal: objModal[0].BMAD07,
  info: ``,
};
j++;
i++;

// objRatingForms[j] = { // "General Notes",
//   formID: "Bsummary02RatingForm",
//   idPrefix: "Bsummary02",
//   formPosition: i,
//   charlist: `None`,
//   dropdown:  {
//     drk: objDropdown[0].Table20.drk,
//     lght: objDropdown[0].Table20.lght,
//   },
//   name: "General Inspection Notes",
//   report: {
//     rating: `<span class="material-symbols-outlined adjustIcon">article</span>`,
//     comment: `The structure is in satisfactory condition. The structure is a 2-span, prestressed concrete continuous, multiple box beam design with a concrete cast-in-place deck. The bridge has a latex (or similar additive) concrete wearing surface. The 2004 ADT is 4,396 vpd. The structure is not posted, does not require an element level inspection, and has scour countermeasures installed. All cardinal directions in this report are based on the roadway direction of travel and not compass readings. `,
//   },
//   asset: {
//     rating: `<span class="material-symbols-outlined adjustIcon">article</span>`,
//     comment: `The structure is in satisfactory condition. The structure is a 2-span, prestressed concrete continuous, multiple box beam design with a concrete cast-in-place deck. The bridge has a latex (or similar additive) concrete wearing surface. The 2004 ADT is 4,396 vpd. The structure is not posted, does not require an element level inspection, and has scour countermeasures installed. All cardinal directions in this report are based on the roadway direction of travel and not compass readings. `,
//   },
//   modal: objModal[0].BAP01,
//   info: ``,
// }
// j++;
// i++;

// objRatingForms[j] = { // "Maintenance Recs",
//   formID: "Bsummary03RatingForm",
//   idPrefix: "Bsummary03",
//   formPosition: i,
//   charlist: `None`,
//   dropdown:  {
//     drk: objDropdown[0].Table20.drk,
//     lght: objDropdown[0].Table20.lght,
//   },
//   name: "Maintenance / Recommendations",
//   report: {
//     rating: `<span class="material-symbols-outlined adjustIcon">article</span>`,
//     comment: `There are no open maintenance items. `,
//   },
//   asset: {
//     rating: `<span class="material-symbols-outlined adjustIcon">article</span>`,
//     comment: `There are no open maintenance items. `,
//   },
//   modal: objModal[0].BAP01,
//   info: ``,
// }
// j++;
// i++;

// objRatingForms[j] = { // "History",
//   formID: "Bsummary04RatingForm",
//   idPrefix: "Bsummary04",
//   formPosition: i,
//   charlist: `None`,
//   dropdown:  {
//     drk: objDropdown[0].Table20.drk,
//     lght: objDropdown[0].Table20.lght,
//   },
//   name: "History",
//   report: {
//     rating: `<span class="material-symbols-outlined adjustIcon">article</span>`,
//     comment: `1928 : New Bridge : DES Unknown - Contract Unknown\n1968 : Rehab A : Replace Superstructure : DES Unknown - Contract MX-7501\n1979 : Bridge Inspection : DES Unknown - Contract 11691\n1980 : Rehab B : Bridge Deck Replacement : DES Unknown - Contract B-12296\n2011 : Rehab C : Scour Protection (Erosion) : DES 0810370 - Contract B-31804\n2024 : Bridge Replacement : DES 1600503 - Contract B-43667, due to let on 10/9/2024`,
//   },
//   asset: {
//     rating: `<span class="material-symbols-outlined adjustIcon">article</span>`,
//     comment: `1928 : New Bridge : DES Unknown - Contract Unknown\n1968 : Rehab A : Replace Superstructure : DES Unknown - Contract MX-7501\n1979 : Bridge Inspection : DES Unknown - Contract 11691\n1980 : Rehab B : Bridge Deck Replacement : DES Unknown - Contract B-12296\n2011 : Rehab C : Scour Protection (Erosion) : DES 0810370 - Contract B-31804\n2024 : Bridge Replacement : DES 1600503 - Contract B-43667, due to let on 10/9/2024`,
//   },
//   modal: objModal[0].BAP01,
//   info: ``,
// }
// j++;
// i++;

// objRatingForms[j] = { // "Access Plan",
//   formID: "Bsummary05RatingForm",
//   idPrefix: "Bsummary05",
//   formPosition: i,
//   charlist: `None`,
//   dropdown:  {
//     drk: objDropdown[0].Table20.drk,
//     lght: objDropdown[0].Table20.lght,
//   },
//   name: "Safety / Access Plan",
//   report: {
//     rating: `<span class="material-symbols-outlined adjustIcon">article</span>`,
//     comment: `Parking on the grass shoulders is possible at the structure. The embankments down to the channel are manageable. The channel is typically shallow enough to work around and enter without additional precautions. `,
//   },
//   asset: {
//     rating: `<span class="material-symbols-outlined adjustIcon">article</span>`,
//     comment: `Parking on the grass shoulders is possible at the structure. The embankments down to the channel are manageable. The channel is typically shallow enough to work around and enter without additional precautions. `,
//   },
//   modal: objModal[0].BAP01,
//   info: ``,
// }
// j++;
// i++;

// objRatingForms[j] = { // "Misc",
//   formID: "Bsummary06RatingForm",
//   idPrefix: "Bsummary06",
//   formPosition: i,
//   charlist: `None`,
//   dropdown:  {
//     drk: objDropdown[0].Table20.drk,
//     lght: objDropdown[0].Table20.lght,
//   },
//   name: "Miscellaneous Notes",
//   report: {
//     rating: `<span class="material-symbols-outlined adjustIcon">article</span>`,
//     comment: ``,
//   },
//   asset: {
//     rating: `<span class="material-symbols-outlined adjustIcon">article</span>`,
//     comment: ``,
//   },
//   modal: objModal[0].BAP01,
//   info: ``,
// }
// j++;
// i++;

objRatingForms[j] = {
  // "Routine Summary",
  formID: objAssetData[0].Bsummary01.idPrefix + "RatingForm",
  idPrefix: objAssetData[0].Bsummary01.idPrefix,
  formPosition: i,
  charlist: `None`,
  dropdown: {
    drk: objDropdown[0].Table20.drk,
    lght: objDropdown[0].Table20.lght,
  },
  name: objAssetData[0].Bsummary01.data_item_name,
  report: {
    rating: `<span class="material-symbols-outlined adjustIcon">article</span>`,
    comment: objAssetData[0].Bsummary01.comment,
  },
  asset: {
    rating: `<span class="material-symbols-outlined adjustIcon">article</span>`,
    comment: objAssetData[0].Bsummary01.comment,
  },
  modal: objModal[0].BAP01,
  info: ``,
};
