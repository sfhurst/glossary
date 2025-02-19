// Feeds comment_builder.js

let currentTarget = ""; // Global variable to store the target string
let dynamicCommentBuilder; // Global variable for the dynamically selected commentBuilder
let currentSeverityList = null; // Tracks the current severity list
let currentSymptomList = null; // Tracks the current symptom list
let positionVariance = ""; // Global variable to store the position variable
let positionVariance1 = ""; // Global variable to store the position1 variable
let positionVariance2 = ""; // Global variable to store the position2 variable
let occurrenceVariance = "Isolated"; // Global variable to store the occurrence variable

// Object holding predefined options for defects, symptoms, occurrences, severities, and locations
function createCommentBuilderApproach(positionVariance1, positionVariance2) {
  return {
    defects: ["Wear", "Cracking", "Delamination", "Patching", "Spalling", "Settlement"],
    symptoms: ["Efflorescence", "Rust Staining", "Delamination", "Exposed Reinforcing Steel"],
    occurrences: ["Isolated", "Some", "Widespread"],
    severities: ["Inherent", "Minor", "Moderate", "Major", "Severe"],

    // Defect-specific variations (types of cracking, spalling, etc.)
    defectVariations: {
      Cracking: ["Cracking", "Longitudinal Cracking", "Transverse Cracking", "Random Cracking", "Diagonal Cracking", "Map Cracking"],
      Spalling: ["Spalling", "Surface Spalling", "Shallow-Depth Spalling", "Deep Spalling", "Heavy Spalling"],
      Wear: ["Wear", "Abrasion", "Rutting"],
      Settlement: ["Settlement", "Uniform Settlement", "Differential Settlement"],
    },

    // Defect-specific symptoms
    defectSymptoms: {
      Cracking: ["Efflorescence", "Rust Staining", "Delamination"],
      Spalling: ["Delamination", "Exposed Reinforcing Steel"],
      Wear: ["Staining", "A Loss Of Tining", "Surface Polishing", "Surface Thinning"],
      Delamination: ["Staining", "Cracking", "Separation"],
      Patching: ["Cracking", "Delamination", "Spalling"],
      Settlement: ["Cracking", "Tilting", "Misalignment", "Sloping"],
    },

    // Defect-specific severities
    defectSeverities: {
      Cracking: ["Inherent", "Hairline", "Minor-Width", "Minor- To Moderate-Width", "Moderate-Width", "Wide-Width", "Major"],
      Spalling: ["Surface", "Shallow-Depth", "Minor", "Moderate", "Deep", "Heavy"],
      Wear: ["Surface", "Light", "Shallow", "Minor"],
      Delamination: ["Surface", "Light", "Minor", "Moderate"],
      Patching: ["Sound Concrete", "Bituminous", "Debonded", "Deteriorated", "Failed"],
      Settlement: ["Minor", "Moderate", "Major", "Severe"],
    },

    // Specific locations for defects based on occurrence types
    locationsIsolated: [`At The Expansion Joint`, `At The Terminal Joint`, `In The Approach Slab`, `In The Travel Lane`, `In The Shoulder`],
    locationsSome: [`Along The Expansion Joint`, `Along The Terminal Joint`, `In The Approach Slab`, `In The Travel Lane`, `In The Shoulder`, `In Several Areas`],
    locationsWidespread: [
      `Along The Expansion Joint`,
      `Along The Terminal Joint`,
      `Throughout The Approach Slab`,
      `Throughout The Travel Lane`,
      `Throughout The Shoulder`,
      `Throughout`,
    ],

    // For adjusting the location lists
    positions: ["North", "South", "East", "West", "Plural"],

    locationsIsolatedNorth: [`At The North Expansion Joint`, `At The North Terminal Joint`, `In The North Approach Slab`, `In The Northbound Travel Lane`, `In The North Shoulder`],
    locationsSomeNorth: [
      `Along The North Expansion Joint`,
      `Along The North Terminal Joint`,
      `In The North Approach Slab`,
      `In The Northbound Travel Lane`,
      `In The North Shoulder`,
      `In Several Areas`,
    ],
    locationsWidespreadNorth: [
      `Along The North Expansion Joint`,
      `Along The North Terminal Joint`,
      `Throughout The North Approach Slab`,
      `Throughout The Northbound Travel Lane`,
      `Throughout The North Shoulder`,
      `Throughout`,
    ],

    locationsIsolatedSouth: [`At The South Expansion Joint`, `At The South Terminal Joint`, `In The South Approach Slab`, `In The Southbound Travel Lane`, `In The South Shoulder`],
    locationsSomeSouth: [
      `Along The South Expansion Joint`,
      `Along The South Terminal Joint`,
      `In The South Approach Slab`,
      `In The Southbound Travel Lane`,
      `In The South Shoulder`,
      `In Several Areas`,
    ],
    locationsWidespreadSouth: [
      `Along The South Expansion Joint`,
      `Along The South Terminal Joint`,
      `Throughout The South Approach Slab`,
      `Throughout The Southbound Travel Lane`,
      `Throughout The South Shoulder`,
      `Throughout`,
    ],

    locationsIsolatedEast: [`At The East Expansion Joint`, `At The East Terminal Joint`, `In The East Approach Slab`, `In The Eastbound Travel Lane`, `In The East Shoulder`],
    locationsSomeEast: [
      `Along The East Expansion Joint`,
      `Along The East Terminal Joint`,
      `In The East Approach Slab`,
      `In The Eastbound Travel Lane`,
      `In The East Shoulder`,
      `In Several Areas`,
    ],
    locationsWidespreadEast: [
      `Along The East Expansion Joint`,
      `Along The East Terminal Joint`,
      `Throughout The East Approach Slab`,
      `Throughout The Eastbound Travel Lane`,
      `Throughout The East Shoulder`,
      `Throughout`,
    ],

    locationsIsolatedWest: [`At The West Expansion Joint`, `At The West Terminal Joint`, `In The West Approach Slab`, `In The Westbound Travel Lane`, `In The West Shoulder`],
    locationsSomeWest: [
      `Along The West Expansion Joint`,
      `Along The West Terminal Joint`,
      `In The West Approach Slab`,
      `In The Westbound Travel Lane`,
      `In The West Shoulder`,
      `In Several Areas`,
    ],
    locationsWidespreadWest: [
      `Along The West Expansion Joint`,
      `Along The West Terminal Joint`,
      `Throughout The West Approach Slab`,
      `Throughout The Westbound Travel Lane`,
      `Throughout The West Shoulder`,
      `Throughout`,
    ],

    locationsIsolatedPlural: [`At The Expansion Joints`, `At The Terminal Joints`, `In The Approach Slabs`, `In The Travel Lanes`, `In The Shoulders`],
    locationsSomePlural: [`Along The Expansion Joints`, `Along The Terminal Joints`, `In The Approach Slabs`, `In The Travel Lanes`, `In The Shoulders`, `In Several Areas`],
    locationsWidespreadPlural: [
      `Along The Expansion Joints`,
      `Along The Terminal Joints`,
      `Throughout The Approach Slabs`,
      `Throughout The Travel Lanes`,
      `Throughout The Shoulders`,
      `Throughout`,
    ],
  };
}

function createCommentBuilderDeck(positionVariance1, positionVariance2) {
  return {
    defects: ["Wear", "Cracking", "Corrosion", "Delamination", "Patching", "Spalling", "Settlement", "Distortion", "Crushing"],
    symptoms: ["Efflorescence", "Rust Staining", "Delamination", "Exposed Reinforcing Steel", "Section Loss"],
    occurrences: ["Isolated", "Some", "Widespread"],
    severities: ["Inherent", "Minor", "Moderate", "Major", "Severe"],

    // Defect-specific variations (types of cracking, spalling, etc.)
    defectVariations: {
      Cracking: ["Cracking", "Longitudinal Cracking", "Transverse Cracking", "Random Cracking", "Vertical Cracking", "Horizontal Cracking", "Diagonal Cracking", "Map Cracking"],
      Spalling: ["Spalling", "Surface Spalling", "Shallow-Depth Spalling", "Deep Spalling", "Heavy Spalling"],
      Corrosion: ["Corrosion", "Chalking", "Surface Dulling"],
      Wear: ["Wear", "Abrasion", "Rutting"],
      Distortion: ["Distortion", "Collision Damage"],
      Settlement: ["Settlement", "Uniform Settlement", "Differential Settlement"],
    },

    // Defect-specific symptoms
    defectSymptoms: {
      Cracking: ["Efflorescence", "Rust Staining", "Delamination"],
      Spalling: ["Delamination", "Exposed Reinforcing Steel", "Section Loss"],
      Corrosion: ["Rust Staining", "Pitting", "Peeling", "Section Loss"],
      Wear: ["Staining", "A Loss Of Tining", "Surface Polishing", "Surface Thinning"],
      Delamination: ["Staining", "Cracking", "Separation"],
      Patching: ["Cracking", "Delamination", "Spalling"],
      Distortion: ["Bending", "Out-Of-Plane Bending", "Buckling", "Twisting", "Deflection"],
      Settlement: ["Cracking", "Tilting", "Misalignment", "Sloping"],
      Crushing: ["Spalling", "Reinforcing Steel Buckling", "Localized Failures"],
    },

    // Defect-specific severities
    defectSeverities: {
      Cracking: ["Inherent", "Hairline", "Minor-Width", "Minor- To Moderate-Width", "Moderate-Width", "Wide-Width", "Major", "Severe"],
      Spalling: ["Surface", "Shallow-Depth", "Minor", "Moderate", "Deep", "Heavy", "Severe"],
      Corrosion: ["Surface", "Light", "Minor", "Moderate", "Major", "Heavy"],
      Wear: ["Surface", "Light", "Shallow", "Minor"],
      Delamination: ["Surface", "Light", "Minor", "Moderate"],
      Patching: ["Sound Concrete", "Bituminous", "Debonded", "Deteriorated", "Failed"],
      Distortion: ["Minor", "Moderate", "Major", "Severe"],
      Settlement: ["Minor", "Moderate", "Major", "Severe"],
      Crushing: ["Minor", "Moderate", "Major", "Severe"],
    },

    // Specific locations for defects based on occurrence types
    locationsIsolated: [
      `At The Expansion Joint`,
      `At The Abutment`,
      `Near Center Span`,
      `In The Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck${positionVariance1}${positionVariance2}`,
    ],
    locationsSome: [
      `Along The Expansion Joint`,
      `At The Abutment`,
      `Near Center Span`,
      `In The Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck${positionVariance1}${positionVariance2}`,
      `In Several Areas`,
    ],
    locationsWidespread: [
      `Along The Expansion Joint`,
      `At The Abutment`,
      `Near Center Span`,
      `Throughout The Coping${positionVariance1}${positionVariance2}`,
      `Throughout The Underside Of The Deck${positionVariance1}${positionVariance2}`,
      `Throughout The Top Of The Deck${positionVariance1}${positionVariance2}`,
      `Throughout`,
    ],

    // For adjusting the location lists
    positions: ["North", "South", "East", "West", "Plural"],
    positions1: ["Span A", "Span B", "Span C", "Span D", "Span E", "Span F", "Span G", "Span H", "Span I", "Span J"],
    positions2: ["Pier 2", "Pier 3", "Pier 4", "Pier 5", "Pier 6", "Pier 7", "Pier 8", "Pier 9", "Pier 10"],

    locationsIsolatedNorth: [
      `At The North Expansion Joint`,
      `At The North Abutment`,
      `Near Center Span`,
      `In The North Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The North Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The North Side${positionVariance1}${positionVariance2}`,
    ],
    locationsSomeNorth: [
      `Along The North Expansion Joint`,
      `At The North Abutment`,
      `Near Center Span`,
      `In The North Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The North Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The North Side${positionVariance1}${positionVariance2}`,
      `In Several Areas`,
    ],
    locationsWidespreadNorth: [
      `Along The North Expansion Joint`,
      `At The North Abutment`,
      `Near Center Span`,
      `Throughout The North Coping${positionVariance1}${positionVariance2}`,
      `Throughout The Underside Of The Deck On The North Side${positionVariance1}${positionVariance2}`,
      `Throughout The Top Of The Deck On The North Side${positionVariance1}${positionVariance2}`,
      `Throughout`,
    ],
    locationsIsolatedSouth: [
      `At The South Expansion Joint`,
      `At The South Abutment`,
      `Near Center Span`,
      `In The South Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The South Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The South Side${positionVariance1}${positionVariance2}`,
    ],
    locationsSomeSouth: [
      `Along The South Expansion Joint`,
      `At The South Abutment`,
      `Near Center Span`,
      `In The South Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The South Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The South Side${positionVariance1}${positionVariance2}`,
      `In Several Areas`,
    ],
    locationsWidespreadSouth: [
      `Along The South Expansion Joint`,
      `At The South Abutment`,
      `Near Center Span`,
      `Throughout The South Coping${positionVariance1}${positionVariance2}`,
      `Throughout The Underside Of The Deck On The South Side${positionVariance1}${positionVariance2}`,
      `Throughout The Top Of The Deck On The South Side${positionVariance1}${positionVariance2}`,
      `Throughout`,
    ],
    locationsIsolatedEast: [
      `At The East Expansion Joint`,
      `At The South Abutment`,
      `Near Center Span`,
      `In The East Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The East Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The East Side${positionVariance1}${positionVariance2}`,
    ],
    locationsSomeEast: [
      `Along The East Expansion Joint`,
      `At The South Abutment`,
      `Near Center Span`,
      `In The East Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The East Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The East Side${positionVariance1}${positionVariance2}`,
      `In Several Areas`,
    ],
    locationsWidespreadEast: [
      `Along The East Expansion Joint`,
      `At The South Abutment`,
      `Near Center Span`,
      `Throughout The East Coping${positionVariance1}${positionVariance2}`,
      `Throughout The Underside Of The Deck On The East Side${positionVariance1}${positionVariance2}`,
      `Throughout The Top Of The Deck On The East Side${positionVariance1}${positionVariance2}`,
      `Throughout`,
    ],
    locationsIsolatedWest: [
      `At The West Expansion Joint`,
      `At The West Abutment`,
      `Near Center Span`,
      `In The West Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The West Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The West Side${positionVariance1}${positionVariance2}`,
    ],
    locationsSomeWest: [
      `Along The West Expansion Joint`,
      `At The West Abutment`,
      `Near Center Span`,
      `In The West Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The West Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The West Side${positionVariance1}${positionVariance2}`,
      `In Several Areas`,
    ],
    locationsWidespreadWest: [
      `Along The West Expansion Joint`,
      `At The West Abutment`,
      `Near Center Span`,
      `Throughout The West Coping${positionVariance1}${positionVariance2}`,
      `Throughout The Underside Of The Deck On The West Side${positionVariance1}${positionVariance2}`,
      `Throughout The Top Of The Deck On The West Side${positionVariance1}${positionVariance2}`,
      `Throughout`,
    ],
    locationsIsolatedPlural: [
      `At The Expansion Joints`,
      `At The Abutments`,
      `Near Center Span`,
      `In The Copings${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck${positionVariance1}${positionVariance2}`,
    ],
    locationsSomePlural: [
      `Along The Expansion Joints`,
      `At The Abutments`,
      `Near Center Span`,
      `In The Copings${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck${positionVariance1}${positionVariance2}`,
      `In Several Areas`,
    ],
    locationsWidespreadPlural: [
      `Along The Expansion Joints`,
      `At The Abutments`,
      `Near Center Span`,
      `Throughout The Copings${positionVariance1}${positionVariance2}`,
      `Throughout The Underside Of The Deck${positionVariance1}${positionVariance2}`,
      `Throughout The Top Of The Deck${positionVariance1}${positionVariance2}`,
      `Throughout`,
    ],
  };
}

function createCommentBuilderWearing(positionVariance1, positionVariance2) {
  return {
    defects: ["Wear", "Cracking", "Delamination", "Patching", "Spalling"],
    symptoms: ["Efflorescence", "Rust Staining", "Delamination", "Exposed Reinforcing Steel"],
    occurrences: ["Isolated", "Some", "Widespread"],
    severities: ["Inherent", "Minor", "Moderate", "Major", "Severe"],

    // Defect-specific variations (types of cracking, spalling, etc.)
    defectVariations: {
      Cracking: ["Cracking", "Longitudinal Cracking", "Transverse Cracking", "Random Cracking", "Diagonal Cracking", "Map Cracking"],
      Spalling: ["Spalling", "Surface Spalling", "Shallow-Depth Spalling", "Deep Spalling", "Heavy Spalling"],
      Wear: ["Wear", "Abrasion", "Rutting"],
    },

    // Defect-specific symptoms
    defectSymptoms: {
      Cracking: ["Efflorescence", "Rust Staining", "Delamination"],
      Spalling: ["Delamination", "Exposed Reinforcing Steel"],
      Wear: ["Staining", "A Loss Of Tining", "Surface Polishing", "Surface Thinning"],
      Delamination: ["Staining", "Cracking", "Separation"],
      Patching: ["Cracking", "Delamination", "Spalling"],
    },

    // Defect-specific severities
    defectSeverities: {
      Cracking: ["Inherent", "Hairline", "Minor-Width", "Minor- To Moderate-Width", "Moderate-Width", "Wide-Width", "Major", "Severe"],
      Spalling: ["Surface", "Shallow-Depth", "Minor", "Moderate", "Deep", "Heavy", "Severe"],
      Wear: ["Surface", "Light", "Shallow", "Minor"],
      Delamination: ["Surface", "Light", "Minor", "Moderate"],
      Patching: ["Sound Concrete", "Bituminous", "Debonded", "Deteriorated", "Failed"],
    },

    // Specific locations for defects based on occurrence types
    locationsIsolated: [
      `At The Expansion Joint`,
      `In The Shoulder${positionVariance1}${positionVariance2}`,
      `In The Travel Lane${positionVariance1}${positionVariance2}`,
      `In The Wearing Surface${positionVariance1}${positionVariance2}`,
    ],
    locationsSome: [
      `Along The Expansion Joint`,
      `In The Shoulder${positionVariance1}${positionVariance2}`,
      `In The Travel Lane${positionVariance1}${positionVariance2}`,
      `In The Wearing Surface${positionVariance1}${positionVariance2}`,
      `In Several Areas`,
    ],
    locationsWidespread: [
      `Along The Expansion Joint`,
      `Throughout The Shoulder${positionVariance1}${positionVariance2}`,
      `Throughout The Travel Lane${positionVariance1}${positionVariance2}`,
      `Throughout The Wearing Surface${positionVariance1}${positionVariance2}`,
      `Throughout`,
    ],

    // For adjusting the location lists
    positions: ["North", "South", "East", "West", "Plural"],
    positions1: ["Span A", "Span B", "Span C", "Span D", "Span E", "Span F", "Span G", "Span H", "Span I", "Span J"],
    positions2: ["Pier 2", "Pier 3", "Pier 4", "Pier 5", "Pier 6", "Pier 7", "Pier 8", "Pier 9", "Pier 10"],

    locationsIsolatedNorth: [
      `At The North Expansion Joint`,
      `In The North Shoulder${positionVariance1}${positionVariance2}`,
      `In The Northbound Travel Lane${positionVariance1}${positionVariance2}`,
      `In The Wearing Surface${positionVariance1}${positionVariance2}`,
    ],
    locationsSomeNorth: [
      `At The North Expansion Joint`,
      `In The North Shoulder${positionVariance1}${positionVariance2}`,
      `In The Northbound Travel Lane${positionVariance1}${positionVariance2}`,
      `In The Wearing Surface${positionVariance1}${positionVariance2}`,
      `In Several Areas${positionVariance1}${positionVariance2}`,
    ],
    locationsWidespreadNorth: [
      `At The North Expansion Joint`,
      `Throughout The North Shoulder${positionVariance1}${positionVariance2}`,
      `Throughout The Northbound Travel Lane${positionVariance1}${positionVariance2}`,
      `Throughout The Wearing Surface${positionVariance1}${positionVariance2}`,
      `Throughout${positionVariance1}${positionVariance2}`,
    ],

    locationsIsolatedSouth: [
      `At The South Expansion Joint`,
      `In The South Shoulder${positionVariance1}${positionVariance2}`,
      `In The Southbound Travel Lane${positionVariance1}${positionVariance2}`,
      `In The Wearing Surface${positionVariance1}${positionVariance2}`,
    ],
    locationsSomeSouth: [
      `At The South Expansion Joint`,
      `In The South Shoulder${positionVariance1}${positionVariance2}`,
      `In The Southbound Travel Lane${positionVariance1}${positionVariance2}`,
      `In The Wearing Surface${positionVariance1}${positionVariance2}`,
      `In Several Areas${positionVariance1}${positionVariance2}`,
    ],
    locationsWidespreadSouth: [
      `At The South Expansion Joint`,
      `Throughout The South Shoulder${positionVariance1}${positionVariance2}`,
      `Throughout The Southbound Travel Lane${positionVariance1}${positionVariance2}`,
      `Throughout The Wearing Surface${positionVariance1}${positionVariance2}`,
      `Throughout${positionVariance1}${positionVariance2}`,
    ],

    locationsIsolatedEast: [
      `At The East Expansion Joint`,
      `In The East Shoulder${positionVariance1}${positionVariance2}`,
      `In The Eastbound Travel Lane${positionVariance1}${positionVariance2}`,
      `In The Wearing Surface${positionVariance1}${positionVariance2}`,
    ],
    locationsSomeEast: [
      `At The East Expansion Joint`,
      `In The East Shoulder${positionVariance1}${positionVariance2}`,
      `In The Eastbound Travel Lane${positionVariance1}${positionVariance2}`,
      `In The Wearing Surface${positionVariance1}${positionVariance2}`,
      `In Several Areas${positionVariance1}${positionVariance2}`,
    ],
    locationsWidespreadEast: [
      `At The East Expansion Joint`,
      `Throughout The East Shoulder${positionVariance1}${positionVariance2}`,
      `Throughout The Eastbound Travel Lane${positionVariance1}${positionVariance2}`,
      `Throughout The Wearing Surface${positionVariance1}${positionVariance2}`,
      `Throughout${positionVariance1}${positionVariance2}`,
    ],

    locationsIsolatedWest: [
      `At The West Expansion Joint`,
      `In The West Shoulder${positionVariance1}${positionVariance2}`,
      `In The Westbound Travel Lane${positionVariance1}${positionVariance2}`,
      `In The Wearing Surface${positionVariance1}${positionVariance2}`,
    ],
    locationsSomeWest: [
      `At The West Expansion Joint`,
      `In The West Shoulder${positionVariance1}${positionVariance2}`,
      `In The Westbound Travel Lane${positionVariance1}${positionVariance2}`,
      `In The Wearing Surface${positionVariance1}${positionVariance2}`,
      `In Several Areas${positionVariance1}${positionVariance2}`,
    ],
    locationsWidespreadWest: [
      `At The West Expansion Joint`,
      `Throughout The West Shoulder${positionVariance1}${positionVariance2}`,
      `Throughout The Westbound Travel Lane${positionVariance1}${positionVariance2}`,
      `Throughout The Wearing Surface${positionVariance1}${positionVariance2}`,
      `Throughout${positionVariance1}${positionVariance2}`,
    ],

    locationsIsolatedPlural: [
      `At The Expansion Joints`,
      `In The Shoulder${positionVariance1}${positionVariance2}`,
      `In The Travel Lanes${positionVariance1}${positionVariance2}`,
      `In The Wearing Surface${positionVariance1}${positionVariance2}`,
    ],
    locationsSomePlural: [
      `Along The Expansion Joints`,
      `In The Shoulder${positionVariance1}${positionVariance2}`,
      `In The Travel Lanes${positionVariance1}${positionVariance2}`,
      `In The Wearing Surface${positionVariance1}${positionVariance2}`,
      `In Several Areas${positionVariance1}${positionVariance2}`,
    ],
    locationsWidespreadPlural: [
      `Along The Expansion Joints`,
      `Throughout The Shoulder${positionVariance1}${positionVariance2}`,
      `Throughout The Travel Lanes${positionVariance1}${positionVariance2}`,
      `Throughout The Wearing Surface${positionVariance1}${positionVariance2}`,
      `Throughout${positionVariance1}${positionVariance2}`,
    ],
  };
}

// Object to keep track of selected options (defects, symptoms, etc.)
let selectedOptions = { defect: "", symptoms: [], occurrence: "", severity: "", location: "", position: "", position1: "", position2: "" }; // Initialize selected options object with symptoms as an array

let commentBuilderDeck = createCommentBuilderDeck(positionVariance1, positionVariance2);
let commentBuilderWearing = createCommentBuilderWearing(positionVariance1, positionVariance2);
let commentBuilderApproach = createCommentBuilderApproach(positionVariance1, positionVariance2);

// My block object with all defect categories for copying in
//
//
// Object holding predefined options for defects, symptoms, occurrences, severities, and locations
function createCommentBuilderComponent(positionVariance1, positionVariance2) {
  return {
    defects: ["Wear", "Cracking", "Corrosion", "Delamination", "Patching", "Spalling", "Settlement", "Distortion", "Crushing"],
    symptoms: ["Efflorescence", "Rust Staining", "Delamination", "Exposed Reinforcing Steel", "Section Loss"],
    occurrences: ["Isolated", "Some", "Widespread"],
    severities: ["Inherent", "Minor", "Moderate", "Major", "Severe"],

    // Defect-specific variations (types of cracking, spalling, etc.)
    defectVariations: {
      Cracking: ["Cracking", "Longitudinal Cracking", "Transverse Cracking", "Random Cracking", "Vertical Cracking", "Horizontal Cracking", "Diagonal Cracking", "Map Cracking"],
      Spalling: ["Spalling", "Surface Spalling", "Shallow-Depth Spalling", "Deep Spalling", "Heavy Spalling"],
      Corrosion: ["Corrosion", "Chalking", "Surface Dulling"],
      Wear: ["Wear", "Abrasion", "Rutting"],
      Distortion: ["Distortion", "Collision Damage"],
      Settlement: ["Settlement", "Uniform Settlement", "Differential Settlement"],
    },

    // Defect-specific symptoms
    defectSymptoms: {
      Cracking: ["Efflorescence", "Rust Staining", "Delamination"],
      Spalling: ["Delamination", "Exposed Reinforcing Steel", "Section Loss"],
      Corrosion: ["Rust Staining", "Pitting", "Peeling", "Section Loss"],
      Wear: ["Staining", "A Loss Of Tining", "Surface Polishing", "Surface Thinning"],
      Delamination: ["Staining", "Cracking", "Separation"],
      Patching: ["Cracking", "Delamination", "Spalling"],
      Distortion: ["Bending", "Out-Of-Plane Bending", "Buckling", "Twisting", "Deflection"],
      Settlement: ["Cracking", "Tilting", "Misalignment", "Sloping"],
      Crushing: ["Spalling", "Reinforcing Steel Buckling", "Localized Failures"],
    },

    // Defect-specific severities
    defectSeverities: {
      Cracking: ["Inherent", "Hairline", "Minor-Width", "Minor- To Moderate-Width", "Moderate-Width", "Wide-Width", "Major", "Severe"],
      Spalling: ["Surface", "Shallow-Depth", "Minor", "Moderate", "Deep", "Heavy", "Severe"],
      Corrosion: ["Surface", "Light", "Minor", "Moderate", "Major", "Heavy"],
      Wear: ["Surface", "Light", "Shallow", "Minor"],
      Delamination: ["Surface", "Light", "Minor", "Moderate"],
      Patching: ["Sound Concrete", "Bituminous", "Debonded", "Deteriorated", "Failed"],
      Distortion: ["Minor", "Moderate", "Major", "Severe"],
      Settlement: ["Minor", "Moderate", "Major", "Severe"],
      Crushing: ["Minor", "Moderate", "Major", "Severe"],
    },

    // Specific locations for defects based on occurrence types
    locationsIsolated: [
      `At The Expansion Joint`,
      `At The Abutment`,
      `Near Center Span`,
      `In The Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck${positionVariance1}${positionVariance2}`,
    ],
    locationsSome: [
      `Along The Expansion Joint`,
      `At The Abutment`,
      `Near Center Span`,
      `In The Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck${positionVariance1}${positionVariance2}`,
      `In Several Areas`,
    ],
    locationsWidespread: [
      `Along The Expansion Joint`,
      `At The Abutment`,
      `Near Center Span`,
      `Throughout The Coping${positionVariance1}${positionVariance2}`,
      `Throughout The Underside Of The Deck${positionVariance1}${positionVariance2}`,
      `Throughout The Top Of The Deck${positionVariance1}${positionVariance2}`,
      `Throughout`,
    ],

    // For adjusting the location lists
    positions: ["North", "South", "East", "West", "Plural"],
    positions1: ["Span A", "Span B", "Span C", "Span D", "Span E", "Span F", "Span G", "Span H", "Span I", "Span J"],
    positions2: ["Pier 2", "Pier 3", "Pier 4", "Pier 5", "Pier 6", "Pier 7", "Pier 8", "Pier 9", "Pier 10"],

    locationsIsolatedNorth: [
      `At The North Expansion Joint`,
      `At The North Abutment`,
      `Near Center Span`,
      `In The North Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The North Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The North Side${positionVariance1}${positionVariance2}`,
    ],
    locationsSomeNorth: [
      `Along The North Expansion Joint`,
      `At The North Abutment`,
      `Near Center Span`,
      `In The North Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The North Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The North Side${positionVariance1}${positionVariance2}`,
      `In Several Areas`,
    ],
    locationsWidespreadNorth: [
      `Along The North Expansion Joint`,
      `At The North Abutment`,
      `Near Center Span`,
      `Throughout The North Coping${positionVariance1}${positionVariance2}`,
      `Throughout The Underside Of The Deck On The North Side${positionVariance1}${positionVariance2}`,
      `Throughout The Top Of The Deck On The North Side${positionVariance1}${positionVariance2}`,
      `Throughout`,
    ],
    locationsIsolatedSouth: [
      `At The South Expansion Joint`,
      `At The South Abutment`,
      `Near Center Span`,
      `In The South Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The South Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The South Side${positionVariance1}${positionVariance2}`,
    ],
    locationsSomeSouth: [
      `Along The South Expansion Joint`,
      `At The South Abutment`,
      `Near Center Span`,
      `In The South Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The South Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The South Side${positionVariance1}${positionVariance2}`,
      `In Several Areas`,
    ],
    locationsWidespreadSouth: [
      `Along The South Expansion Joint`,
      `At The South Abutment`,
      `Near Center Span`,
      `Throughout The South Coping${positionVariance1}${positionVariance2}`,
      `Throughout The Underside Of The Deck On The South Side${positionVariance1}${positionVariance2}`,
      `Throughout The Top Of The Deck On The South Side${positionVariance1}${positionVariance2}`,
      `Throughout`,
    ],
    locationsIsolatedEast: [
      `At The East Expansion Joint`,
      `At The South Abutment`,
      `Near Center Span`,
      `In The East Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The East Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The East Side${positionVariance1}${positionVariance2}`,
    ],
    locationsSomeEast: [
      `Along The East Expansion Joint`,
      `At The South Abutment`,
      `Near Center Span`,
      `In The East Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The East Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The East Side${positionVariance1}${positionVariance2}`,
      `In Several Areas`,
    ],
    locationsWidespreadEast: [
      `Along The East Expansion Joint`,
      `At The South Abutment`,
      `Near Center Span`,
      `Throughout The East Coping${positionVariance1}${positionVariance2}`,
      `Throughout The Underside Of The Deck On The East Side${positionVariance1}${positionVariance2}`,
      `Throughout The Top Of The Deck On The East Side${positionVariance1}${positionVariance2}`,
      `Throughout`,
    ],
    locationsIsolatedWest: [
      `At The West Expansion Joint`,
      `At The West Abutment`,
      `Near Center Span`,
      `In The West Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The West Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The West Side${positionVariance1}${positionVariance2}`,
    ],
    locationsSomeWest: [
      `Along The West Expansion Joint`,
      `At The West Abutment`,
      `Near Center Span`,
      `In The West Coping${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck On The West Side${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck On The West Side${positionVariance1}${positionVariance2}`,
      `In Several Areas`,
    ],
    locationsWidespreadWest: [
      `Along The West Expansion Joint`,
      `At The West Abutment`,
      `Near Center Span`,
      `Throughout The West Coping${positionVariance1}${positionVariance2}`,
      `Throughout The Underside Of The Deck On The West Side${positionVariance1}${positionVariance2}`,
      `Throughout The Top Of The Deck On The West Side${positionVariance1}${positionVariance2}`,
      `Throughout`,
    ],
    locationsIsolatedPlural: [
      `At The Expansion Joints`,
      `At The Abutments`,
      `Near Center Span`,
      `In The Copings${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck${positionVariance1}${positionVariance2}`,
    ],
    locationsSomePlural: [
      `Along The Expansion Joints`,
      `At The Abutments`,
      `Near Center Span`,
      `In The Copings${positionVariance1}${positionVariance2}`,
      `In The Underside Of The Deck${positionVariance1}${positionVariance2}`,
      `In The Top Of The Deck${positionVariance1}${positionVariance2}`,
      `In Several Areas`,
    ],
    locationsWidespreadPlural: [
      `Along The Expansion Joints`,
      `At The Abutments`,
      `Near Center Span`,
      `Throughout The Copings${positionVariance1}${positionVariance2}`,
      `Throughout The Underside Of The Deck${positionVariance1}${positionVariance2}`,
      `Throughout The Top Of The Deck${positionVariance1}${positionVariance2}`,
      `Throughout`,
    ],
  };
}
