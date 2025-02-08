// export const objSNBI = [];

// This is meant to be the SNBI in object form
// It also includes INDOT BIM items
// This doesn't hold any asset data
// These objects contain the rules for the asset data
// Add asset data to this in another module

// From SNBI
// data_item_name: SNBI
// item_id: SNBI
// format: SNBI
// frequency: SNBI
// nbi_item_name: SNBI
// nbi_item_id: SNBI

// From Asset
// code: Asset
// code_description: Linked to code
// condition_rating: Asset
// condition_comment: Asset
// numeric_value: Asset
// text_value: Asset
// comment: Asset

// Unique items are allowed
// year: Asset

// SNBI Objects
let objSNBI = [];
objSNBI[0] = {
  // ID - Identification
  BID01: {
    idPrefix: `BID01`,
    data_item_name: `Bridge Number`,
    item_id: `B.ID.01`,
    format: `AN (15)`,
    frequency: `I`,
    nbi_item_name: `Structure Number`,
    nbi_item_id: `8`,
    //numeric_value: `021130`,
  },

  BID02: {
    idPrefix: `BID02`,
    data_item_name: `Bridge Name`,
    item_id: `B.ID.02`,
    format: `AN (300)`,
    frequency: `I`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //numeric_value: `058-03-05885 C`,
  },

  // L - Location
  BL01: {
    idPrefix: `BL01`,
    data_item_name: `State Code`,
    item_id: `B.L.01`,
    format: `N (2,0)`,
    frequency: `I`,
    nbi_item_name: `State Code`,
    nbi_item_id: `1`,
    //numeric_value: `18`,
  },

  BL02: {
    idPrefix: `BL02`,
    data_item_name: `County Code`,
    item_id: `B.L.02`,
    format: `N (3,0)`,
    frequency: `I`,
    nbi_item_name: `County (Parish) Code`,
    nbi_item_id: `3`,
    //numeric_value: `03`,
  },

  BL04: {
    idPrefix: `BL04`,
    data_item_name: `Highway Agency District`,
    item_id: `B.L.04`,
    format: `AN (2)`,
    frequency: `I`,
    nbi_item_name: `Highway Agency District`,
    nbi_item_id: `2`,
    //numeric_value: `05`,
  },

  // SP - Span Material and Type
  BSP02: {
    idPrefix: `BSP02`,
    data_item_name: `Number of Spans`,
    item_id: `B.SP.02`,
    format: `N (4,0)`,
    frequency: `I`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //numeric_value: `0002`,
  },

  BSP03: {
    idPrefix: `BSP03`,
    data_item_name: `Number of Beam Lines`,
    item_id: `B.SP.03`,
    format: `N (3,0)`,
    frequency: `I`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //numeric_value: `0002`,
  },

  BSP04: {
    idPrefix: `BSP04`,
    data_item_name: `Span Material`,
    item_id: `B.SP.04`,
    format: `AN (3)`,
    frequency: `I`,
    nbi_item_name: `Structure Type, Main: Kind of Material/Design`,
    nbi_item_id: `43A`,
    //code: ``,
    //code_description: `Prestressed concrete continuous`,
    //comment: ``,
  },

  BSP06: {
    idPrefix: `BSP06`,
    data_item_name: `Span Type`,
    item_id: `B.SP.06`,
    format: `AN (3)`,
    frequency: `I`,
    nbi_item_name: `Structure Type, Main: Type of Design/Construction`,
    nbi_item_id: `43B`,
    //code: ``,
    //code_description: `Box girder/beam - multiple adjacent`,
    //comment: ``,
  },

  BSP07: {
    idPrefix: `BSP07`,
    data_item_name: `Span Protective System`,
    item_id: `B.SP.07`,
    format: `AN (3)`,
    frequency: `I`,
    nbi_item_name: ``, //madPaint
    nbi_item_id: ``,
    //code: ``,
    //code_description: `Box girder/beam - multiple adjacent`,
    //comment: ``,
  },

  BSP09: {
    idPrefix: `BSP09`,
    data_item_name: `Deck Material and Type`,
    item_id: `B.SP.09`,
    format: `AN (3)`,
    frequency: `I`,
    nbi_item_name: `Deck Structure Type`,
    nbi_item_id: `107`,
    //code: ``,
    //code_description: `Concrete Cast-In-Place`,
    //comment: ``,
  },

  BSP10: {
    idPrefix: `BSP10`,
    data_item_name: `Wearing Surface`,
    item_id: `B.SP.10`,
    format: `AN (3)`,
    frequency: `I`,
    nbi_item_name: `Type of Wearing Surface`,
    nbi_item_id: `108A`,
    //code: ``,
    //code_description: `Concrete - latex modified`,
    //comment: ``,
  },

  BSP11: {
    idPrefix: `BSP11`,
    data_item_name: `Deck Protective System`,
    item_id: `B.SP.11`,
    format: `AN (3)`,
    frequency: `I`,
    nbi_item_name: `Type of Membrane`,
    nbi_item_id: `108B`,
    //code: ``,
    //code_description: `Concrete - latex modified`,
    //comment: ``,
  },

  BSP12: {
    idPrefix: `BSP12`,
    data_item_name: `Deck Reinforcing Protective System`,
    item_id: `B.SP.12`,
    format: `AN (3)`,
    frequency: `I`,
    nbi_item_name: `Deck Protection`,
    nbi_item_id: `108C`,
    //code: ``,
    //code_description: `Concrete - latex modified`,
    //comment: ``,
  },

  BSP13: {
    idPrefix: `BSP13`,
    data_item_name: `Deck Stay-In-Place Forms`,
    item_id: `B.SP.13`,
    format: `AN (3)`,
    frequency: `I`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //code: ``,
    //code_description: `Concrete - latex modified`,
    //comment: ``,
  },

  // SB - Substructure Material and Type
  BSB01: {
    idPrefix: `BSB01`,
    data_item_name: `Substructure Configuration Designation`,
    item_id: `B.SB.01`,
    format: `AN (3)`,
    frequency: `I`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //text_value: `A01, P01`,
  },

  BSB02: {
    idPrefix: `BSB02`,
    data_item_name: `Number of Substructure Units`,
    item_id: `B.SB.02`,
    format: `N (3,0)`,
    frequency: `I`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //numeric_value: `2, 1`,
  },

  // RH - Roadway Hardware

  BRH01: {
    idPrefix: `BRH01`,
    data_item_name: `Bridge Railings`,
    item_id: `B.RH.01`,
    format: `AN (4)`,
    frequency: `I`,
    nbi_item_name: `Bridge Railings`,
    nbi_item_id: `36A`,
    //code: `0`,
    //code_description: ``,
    //comment: ``,
  },

  BRH02: {
    idPrefix: `BRH02`,
    data_item_name: `Bridge Railing Transitions`,
    item_id: `B.RH.02`,
    format: `AN (4)`,
    frequency: `I`,
    nbi_item_name: `Transitions`,
    nbi_item_id: `36B`,
    //code: `1`,
    //code_description: ``,
    //comment: ``,
  },

  // IE - Inspection Events

  BIE01: {
    idPrefix: `BIE01`,
    data_item_name: `Inspection Type`,
    item_id: `B.IE.01`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //code: `2`,
    //code_description: `Routine`,
    //comment: ``,
  },

  BIE02: {
    idPrefix: `BIE02`,
    data_item_name: `Inspection Begin Date`,
    item_id: `B.IE.02`,
    format: `YYYYMMDD`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //numeric_value: `20231106`, // YYYMMDD
  },

  BIE03: {
    idPrefix: `BIE03`,
    data_item_name: `Inspection Completion Date`,
    item_id: `B.IE.03`,
    format: `YYYYMMDD`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //numeric_value: `20231106`, // YYYMMDD
  },

  BIE04: {
    idPrefix: `BIE04`,
    data_item_name: `Nationally Certified Bridge Inspector`,
    item_id: `B.IE.04`,
    format: `AN (15)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //numeric_value: `20231106`, // YYYMMDD
  },

  BIE05: {
    idPrefix: `BIE05`,
    data_item_name: `Inspection Interval`,
    item_id: `B.IE.03`,
    format: `N (2,0)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //numeric_value: `24`, // 0 for damage
  },

  BIE06: {
    idPrefix: `BIE06`,
    data_item_name: `Inspection Due Date`,
    item_id: `B.IE.06`,
    format: `YYYYMMDD`,
    frequency: `C`, // Computed
    nbi_item_name: ``,
    nbi_item_id: ``,
    //numeric_value: `20251106`,
  },

  BIE07: {
    idPrefix: `BIE07`,
    data_item_name: `Risk-Based Inspection Interval Method`,
    item_id: `B.IE.07`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //code: `1`,
    //code_description: `Method 1`,
    //comment: ``,
  },

  BIE08: {
    idPrefix: `BIE08`,
    data_item_name: `Inspection Quality Control Date`,
    item_id: `B.IE.08`,
    format: `YYYYMMDD`,
    frequency: `EI`, // Computed
    nbi_item_name: ``,
    nbi_item_id: ``,
    //numeric_value: `20251106`,
  },

  BIE09: {
    idPrefix: `BIE09`,
    data_item_name: `Inspection Quality Assurance Date`,
    item_id: `B.IE.09`,
    format: `YYYYMMDD`,
    frequency: `EI`, // Computed
    nbi_item_name: ``,
    nbi_item_id: ``,
    //numeric_value: `20251106`,
  },

  BIE10: {
    idPrefix: `BIE10`,
    data_item_name: `Inspection Data Update Date`,
    item_id: `B.IE.10`,
    format: `YYYYMMDD`,
    frequency: `EI`, // Computed
    nbi_item_name: ``,
    nbi_item_id: ``,
    //numeric_value: `20251106`,
  },

  BIE11: {
    idPrefix: `BIE11`,
    data_item_name: `Inspection Note`,
    item_id: `B.IE.11`,
    format: `AN (300)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //comment: ``,
  },

  BIE12: {
    idPrefix: `BIE12`,
    data_item_name: `Inspection Equipment`,
    item_id: `B.IE.12`,
    format: `AN (120)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //code: `AN`,
    //code_description: `No access equipment used`,
    //comment: ``,
  },

  // C - Component Condition Ratings

  BC01: {
    idPrefix: `BC01`,
    data_item_name: `Deck`,
    item_id: `B.C.01`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //condition_rating: `6`,
    //condition_comment: `The deck underside is concealed by box beams and the top of the deck by an epoxy overlay. There is minor leaking and staining between the box beams which indicates that water is moving through the deck. There is heavy efflorescence between Beams 1 and 2 at Pier 2 in both spans. The downspouts have corroded away and are flush with the bottom of the box beams. `,
  },

  BC02: {
    idPrefix: `BC02`,
    data_item_name: `Superstructure`,
    item_id: `B.C.02`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //condition_rating: `7`,
    //condition_comment: `There is a shallow-depth, 3" spall with exposed reinforcing steel, midspan of Beam 6 in Span B. There is a minor, 4” crack in Beam 7 in Span B, 10' from the east abutment. There is heavy efflorescence between Beams 1 and 2 near Pier 2 in both spans. This efflorescence is building up on the pier. `,
  },

  BC03: {
    idPrefix: `BC03`,
    data_item_name: `Substructure`,
    item_id: `B.C.03`,
    format: `AN (1)`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //condition_rating: `6`,
    //condition_comment: `There is light spalling and moderate abrasion in the abutments. There is minor spalling with exposed rebar in the top of the south nose of Pier 2 outside of the beam lines. There are several, minor-width, vertical cracks in the abutments and interior pier. The efflorescence on Pier 2 is from the superstructure. There is no scour present. `,
  },

  BC04: {
    idPrefix: `BC04`,
    data_item_name: `Culvert`,
    item_id: `B.C.04`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
  },

  BC05: {
    idPrefix: `BC05`,
    data_item_name: `Bridge Railing`,
    item_id: `B.C.05`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
  },

  BC06: {
    idPrefix: `BC06`,
    data_item_name: `Bridge Railing Transitions`,
    item_id: `B.C.06`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
  },

  BC07: {
    idPrefix: `BC07`,
    data_item_name: `Bridge Bearings`,
    item_id: `B.C.07`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
  },

  BC08: {
    idPrefix: `BC08`,
    data_item_name: `Bridge Joints`,
    item_id: `B.C.08`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
  },

  BC09: {
    idPrefix: `BC09`,
    data_item_name: `Channel`,
    item_id: `B.C.09`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //condition_rating: `7`,
    //condition_comment: `The west abutment and interior pier are well protected by designed riprap. Under normal conditions the shallow, low-velocity channel flows from north to south through Span A. Span B provides overflow. `,
  },

  BC10: {
    idPrefix: `BC10`,
    data_item_name: `Channel Protection`,
    item_id: `B.C.10`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
  },

  BC11: {
    idPrefix: `BC11`,
    data_item_name: `Scour`,
    item_id: `B.C.11`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //condition_rating: `7`,
    //condition_comment: `The structure is on spread footings. Designed riprap was placed around the footers under Contract B-31804 Des 0810402. The countermeasures are in good condition. `,
  },

  BC12: {
    idPrefix: `BC12`,
    data_item_name: `Bridge Condition Classification`,
    item_id: `B.C.12`,
    format: `AN (1)`,
    frequency: `C`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //code: ``,
    //code_description: ``,
    //comment: ``,
  },

  BC13: {
    idPrefix: `BC13`,
    data_item_name: `Lowest Condition Rating Code`,
    item_id: `B.C.13`,
    format: `AN (1)`,
    frequency: `C`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
    //condition_component: ``,
  },

  BC14: {
    idPrefix: `BC14`,
    data_item_name: `NSTM Inspection Condition`,
    item_id: `B.C.14`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
  },

  BC15: {
    idPrefix: `BC15`,
    data_item_name: `Underwater Inspection Condition`,
    item_id: `B.C.15`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: ``,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
  },

  // AP - Appraisal

  BAP01: {
    idPrefix: `BAP01`,
    data_item_name: `Approach Roadway Alignment`,
    item_id: `B.AP.01`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: `Roadway Alignment`,
    nbi_item_id: `72`,
    //code: ``,
    //code_description: ``,
    //comment: ``,
  },

  BAP02: {
    idPrefix: `BAP02`,
    data_item_name: `Overtopping Likelihood`,
    item_id: `B.AP.02`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: `Waterway Adequacy`,
    nbi_item_id: `71`,
    //code: ``,
    //code_description: ``,
    //comment: ``,
  },

  BAP03: {
    idPrefix: `BAP03`,
    data_item_name: `Scour Vulnerability`,
    item_id: `B.AP.03`,
    format: `AN (1)`,
    frequency: `I`,
    nbi_item_name: `Scour Analysis`,
    nbi_item_id: ``,
    //code: ``,
    //code_description: ``,
    //comment: ``,
  },

  BAP04: {
    idPrefix: `BAP04`,
    data_item_name: `Scour Plan of Action`,
    item_id: `B.AP.04`,
    format: ``,
    frequency: ``,
    nbi_item_name: `Scour Plan of Action`,
    nbi_item_id: ``,
    //code: ``,
    //code_description: ``,
    //comment: ``,
  },

  // mad - Miscellaneous Asset Data (INDOT)

  // approach slabs
  // wearing surface
  // paint

  // terminal joints
  // slopewall

  // swallows
  // bats

  BMAD01: {
    idPrefix: `BMAD01`,
    data_item_name: `Approach Slabs`,
    item_id: `B.mad.01`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: `Approach Slabs`,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
    //code: ``,
    //code_description: ``,
    //comment: ``,
  },

  BMAD02: {
    idPrefix: `BMAD02`,
    data_item_name: `Wearing Surface`,
    item_id: `B.mad.02`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: `Wearing Surface`,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
    //year: ``,
    //code: ``,
    //code_description: ``,
    //comment: ``,
  },

  BMAD03: {
    idPrefix: `BMAD03`,
    data_item_name: `Paint`,
    item_id: `B.mad.03`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: `Paint`,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
    //year: ``,
    //code: ``,
    //code_description: ``,
    //comment: ``,
  },

  BMAD04: {
    idPrefix: `BMAD04`,
    data_item_name: `Terminal Joints`,
    item_id: `B.mad.04`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: `Terminal Joints`,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
    //code: ``,
    //code_description: ``,
    //comment: ``,
  },

  BMAD05: {
    idPrefix: `BMAD05`,
    data_item_name: `Slopewall`,
    item_id: `B.mad.05`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: `Slopewall`,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
    //code: ``,
    //code_description: ``,
    //comment: ``,
  },

  BMAD06: {
    idPrefix: `BMAD06`,
    data_item_name: `Swallows`,
    item_id: `B.mad.06`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: `Swallows`,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
    //code: ``,
    //code_description: ``,
    //comment: ``,
  },

  BMAD07: {
    idPrefix: `BMAD07`,
    data_item_name: `Bats`,
    item_id: `B.mad.07`,
    format: `AN (1)`,
    frequency: `EI`,
    nbi_item_name: `Bats`,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
    //code: ``,
    //code_description: ``,
    //comment: ``,
  },

  // summary

  Bsummary01: {
    idPrefix: `Bsummary01`,
    data_item_name: `Routine Summary`,
    item_id: `B.summary.01`,
    format: `AN (1000)`,
    frequency: `EI`,
    nbi_item_name: `Executive Summary`,
    nbi_item_id: ``,
    //condition_rating: ``,
    //condition_comment: ``,
    //code: ``,
    //code_description: ``,
    //comment: ``,
  },
};
