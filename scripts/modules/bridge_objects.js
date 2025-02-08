const bridgeComponents = [
  // Alignment
  {
    name: "Approach Roadway Alignment",
    item_id: "B.AP.01",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Alignment",
    commentary_page_id: "#bridge-alignment-pg1",
    commentary: `<p>
                  Thissssss item identifies bridges that do not function adequately due to the horizontal or vertical alignment of the bridge and approach roadway. It is not intended
                  that the alignment be compared to current standards, but rather to the existing roadway alignment.
                </p>
                <br />
                <p>
                  The basic criterion is how the alignment of the bridge and approach roadway relates to the general highway alignment for the section of highway the bridge
                  carries.
                </p>
                <br />
                <p>Do not consider speed reductions due to the bridge width or intersecting highways when reporting this item.</p>
                <br />
                <p>The operating speed reduction is in comparison to the posted speed limit for the highway segment:</p>
                <ul class="content-container-paragraphs-ul">
                  <li>Use code G when the operating speed is no different at the bridge than the rest of the highway segment that crosses the bridge.</li>
                  <li>Use code F when the operating speed is noticeably different at the bridge than the rest of the highway segment that crosses the bridge.</li>
                  <li>Use code P when the operating speed is substantially different at the bridge than the rest of the highway segment that crosses the bridge.</li>
                </ul>`,
    example_comments: [
      "No speed reduction necessary.",
      "A minor reduction of speed is expected due to the roadway geometry.",
      "Nearby roadway features cause changes in acceleration at the bridge.",
      "There is an intersection at the north approach.",
      "The bridge is at a traffic light and carries a portion of the queue.",
      "The bridge is in a horizontal curve that is superelevated on the west side.",
      "The bridge is in a sag vertical curve.",
      "The bridge is in a crest vertical curve.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "The bridge does not carry vehicular traffic and does not have an operating speed.",
      },
      {
        code: "G",
        condition: "GOOD",
        description: "The operating speed at the bridge is no different than the rest of the highway segment.",
      },
      {
        code: "F",
        condition: "FAIR",
        description: "The operating speed at the bridge is noticeably different compared to the rest of the highway segment.",
      },
      {
        code: "P",
        condition: "POOR",
        description: "The operating speed at the bridge is substantially different compared to the rest of the highway segment.",
      },
    ],
  },

  //Approach
  {
    name: "Approach Slabs",
    item_id: "B.C.01b",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Approach",
    commentary_page_id: "#bridge-approach-pg1",
    commentary: `<p>
                  Use destructive or non-destructive testing results or visual condition indicators of materials covering the surfaces being assessed when top is not visible for
                  assessment. Past inspection reports and repair records may also provide supplemental information to aid in the determination of the condition rating.
                </p>
                <br />
                <p>Consider the settlement of the approach slab. Use any indicators present to determine the stability of the soil beneath the slab.</p>
                <br />
                <p>Consider the roughness and ride provided by the approach slab.</p>`,
    example_comments: [
      "There are no deficiencies to report.",
      "The approach slabs are in good condition.",
      "The approach slabs have been covered with bituminous material.",
      "There are sealed cracks in the approach slabs.",
      "There are sound concrete patches in the approach slabs.",
      "There is a bituminous patch in the north approach slab.",
      "There is a void under the south approach slab at the southwest corner of the bridge.",
      "There is minor settlement of the approach slabs.",
      "No significant settlement has occurred.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Bridge does not have approach slabs.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Approach slabs have failed and are ineffective.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Approach slabs have failed and present a safety hazard.",
      },
    ],
  },

  // Terminal
  {
    name: "Terminal Joints",
    item_id: "B.C.08a",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Joints",
    commentary_page_id: "#bridge-joints-pg4",
    commentary: `<p>
                  Terminal joints are designed to accommodate thermal movements of integral and semi-integral abutments by allowing expansion to occur between the approach slabs
                  and the approach pavement. Terminal joints are only required for integral or semi-integral bridges.
                </p>
                <br />
                <p>
                  Previous terminal joint design details for Portland Cement Concrete Pavement (PCCP) used 2 feet of asphalt at the ends of the approach, and there was no design
                  detail for HMA pavement adjacent to bridges with approach slabs having integral or semi-integral abutments. Both cases have proven problematic, so to improve
                  functionality, new terminal joint design details were introduced in September 2019 with Design Memo 19-10, RSP 503-R-692, and RPD 503-R-692d (now E 503-BATJ
                  series).
                </p>
                <br />
                <p>Consider the pavement roughness and ride at the transition between the approach slabs and the approach pavement.</p>
                <br />
                <p>Do not consider if the terminal joint meets the current standard.</p>`,
    example_comments: [
      "The terminal joints are in good condition.",
      "The terminal joints present a rough transition to the bridge.",
      "There are no terminal joints at either end.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "The bridge abutments are not integral or semi-integral. The bridge does not have terminal joints.",
      },
      {
        code: "G",
        condition: "GOOD",
        description: "The terminal joints do not need maintenance, and meet the current standards.",
      },
      {
        code: "F",
        condition: "FAIR",
        description: "The terminal joints do not need maintenance, but do not meet the current standards.",
      },
      {
        code: "P",
        condition: "POOR",
        description: "The terminal joints need maintenance.",
      },
    ],
  },

  // Joints
  {
    name: "Bridge Joints",
    item_id: "B.C.08",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Joints",
    commentary_page_id: "#bridge-joints-pg1",
    commentary: `<p>
                  This item addresses the condition of all types and shapes of bridge deck joints. The condition assessment includes all aspects of the joints such as any seals,
                  headers (metal or concrete), connections, and other metal members.
                </p>
                <br />
                <p>
                  When a joint is designed as an open joint, leakage or lack of a seal is not considered a defect.
                </p>
                <br />
                <p>
                  Do not consider the condition of protective coatings and other protection systems when determining the condition rating code for this item, except to the extent
                  that problems with the protective coating system are indicative of problems with the underlying joint material.
                </p>
                <br />
                <p>
                  In cases where the joint is not visible, the condition can be assessed based on other indirect indicators of the condition.
                </p>`,
    example_comments: [
      "There are no deficiencies to report.",
      "The bridge has integral abutments.",
      "The bridge has semi-integral abutments.",
      "There are minor- to moderate-width, diagonal cracks propagating from the joint areas.",
      "The joints are partially full of debris.",
      "There are areas of the joints that have been repaired with pourable material.",
      "The joints are leaking.",
      "The joints are leaking throughout.",
      "There are several punctures and a loss of adhesion with the nosing in both the north and south joints.",
      "The joints have multiple areas that have lost adhesion.",
      "The joints have a loss of adhesion throughout.",
      "The joints are full of debris.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Bridge does not have deck joints.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description: "Some major defects.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description: "Widespread major defects.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Joints have failed and are ineffective.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Joints have failed and present a safety hazard.",
      },
    ],
  },

  // Railings
  {
    name: "Bridge Railings",
    item_id: "B.C.05",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Railings",
    commentary_page_id: "#bridge-railings-pg1",
    commentary: `<p>
                  This item addresses the condition of all types and shapes of bridge railings (parapets, median barriers, or structure mounted) located on the bridge or that cross
                  over buried structures. The condition assessment includes the portions of the railings, posts, blocking, and curbs that are part of the bridge railing system.
                </p>
                <br />
    
                <p>Do not consider pedestrian railings when coding this item, except to the extent that the pedestrian railing is integral to the traffic barrier.</p>
                <br />
    
                <p>
                  Do not consider the condition of protective coatings and other protection systems when determining the condition rating code for this item, except to the extent
                  that problems with the protective coating system are indicative of problems with the underlying railing material.
                </p>`,
    example_comments: ["There is no scour present.", "There is minor localized scour at the interior piers.", "The designed countermeasures are in good condition."],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.",
      },
    ],
  },

  // Transitions

  {
    name: "Bridge Railing Transitions",
    item_id: "B.C.06",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Railings",
    commentary_page_id: "#bridge-railings-pg4",
    commentary: `<p>
                  This item addresses the condition of the transition from the bridge railing to the approach guardrail. The condition assessment includes the portions of the
                  railings, posts, blocking, and curbs that are part of the bridge railing transitions.
                </p>
                <br />
    
                <p>
                  Do not consider the condition of protective coatings and other protection systems when determining the condition rating code for this item, except to the extent
                  that problems with the protective coating system are indicative of problems with the underlying railing transition material.
                </p>`,
    example_comments: ["There is no scour present.", "There is minor localized scour at the interior piers.", "The designed countermeasures are in good condition."],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.",
      },
    ],
  },

  // Wearing
  {
    name: "Wearing Surface",
    item_id: "B.C.01a",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Deck",
    commentary_page_id: "#bridge-deck-pg4",
    commentary: `<p>
                  The type of wearing surface must be considered in order to determine the appropriate condition rating. Please follow the guidance on wearing surfaces provided in
                  Part 7 of the INDOT Bridge Inspection Manual (BIM) linked below.
                </p>`,
    example_comments: [
      "The wearing surface is monolithic with the deck. See deck comments.",
      "There are no deficiencies to report.",
      "There are isolated, inherent shrinkage cracks in the latex-modified wearing surface.",
      "There are sealed cracks in the wearing surface.",
      "There is map cracking throughout the bituminous wearing surface.",
      "There are unsealed cracks visible across less than 10% of the total surface area.",
      "There are isolated areas of minor peeling in the epoxy overlay.",
      "There is a 2' by 2', shallow-depth spall in the center of the wearing surface.",
      "There is a 1' longitudinal by 6\" transverse, deep spall in the southbound lane of Span B.",
      "There are numerous areas of bituminous and concrete patching throughout the wearing surface.",
      "There is no waterproofing membrane between the deck and the wearing surface, therefore the wearing surface must be rated a 4 or less.",
      "There are scattered areas of peeling in less than 5% of the total surface area.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description: "Some major defects.",
      },
    ],
  },

  // Deck
  {
    name: "Deck",
    item_id: "B.C.01",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Deck",
    commentary_page_id: "#bridge-deck-pg1",
    commentary: `<p>This item represents the condition of the deck as determined from the inspection of all deck surfaces (top, underside, and edges).</p>
                <br />
                <p>Visual assessments may be supplemented with non-destructive or destructive testing results.</p>
                <br />
                <p>
                  Use destructive or non-destructive testing results or visual condition indicators of materials covering the surfaces being assessed when top, underside or both
                  surfaces are not visible for assessment. Past inspection reports and repair records may also provide supplemental information to aid in the determination of the
                  condition rating.
                </p>
                <br />
                <p>
                  Do not consider the condition of non-monolithic wearing surfaces (i.e. overlays), stay-in-place deck forms, joint assemblies, expansion devices, bridge rails, or
                  scuppers when determining the condition rating code for this item, except insofar as they indicate the condition of the deck itself.
                </p>
                <br />
                <p>
                  Consider the condition of a joint header only when the deck serves as a joint header. For bridges with integral decks/top flanges (e.g. rigid frames, decked
                  girders or tee beams, voided slab beams, box girders, etc.), the deck condition may affect the superstructure condition rating; however, the superstructure
                  condition does not affect the deck condition rating.
                </p>
                <br />
                <p>The deck and superstructure condition ratings are the same for slab bridges.</p>`,
    example_comments: [
      "There are no deficiencies to report.",
      "The top of the deck is covered by an epoxy overlay.",
      "No deficiencies are showing through the overlay.",
      "The deck underside is concealed by stay-in-place forms and the copings are protected from runoff by concrete barrier walls.",
      "The deck underside is concealed by stay-in-place forms and the top of the deck by an epoxy overlay.",
      "No corrosion was found in the stay-in-place forms and the copings are in good condition.",
      "The copings are exposed to runoff beneath the metal guardrail.",
      "The copings have isolated hairline cracks and isolated areas of staining.",
      "There is minor- to moderate-depth delamination in the underside of the deck in Span A between Beams 2 and 3.",
      "There are scattered areas of minor corrosion in the stay-in-place forms.",
      "There are moderate spalls, delamination, and exposed rebar around the deck drains.",
      "There is heavy spalling with multiple layers of exposed rebar exhibiting moderate section loss along the north coping in all spans.",
      "There are large areas of deep spalling with exposed rebar exhibiting moderate section loss on the underside of the deck.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.",
      },
    ],
  },

  // Super
  {
    name: "Superstructure",
    item_id: "B.C.02",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Super",
    commentary_page_id: "#bridge-super-pg1",
    commentary: ` <p>This item represents the condition of the superstructure as determined from the inspection of all superstructure members.</p>
                <br />
                <p>
                  Consider primary load carrying members when determining the condition rating code for this item, which includes cross-frames and diaphragms for curved girder
                  bridges. Consider secondary members only if they adversely impact the primary members. Visual assessments may be supplemented with non-destructive or destructive
                  testing results.
                </p>
                <br />
                <p>The superstructure includes:</p>
                <ul class="content-container-paragraphs-ul">
                  <li>members above the bearings for bridges with non-integral superstructure and substructure;</li>
                  <li>girders/beams for integral superstructures;</li>
                  <li>members above the spring line for arch bridges;</li>
                  <li>slabs of concrete rigid frame bridges; and</li>
                  <li>legs, knees and girders for concrete and steel rigid K-Frame or Delta-Frame bridges.</li>
                </ul>
                <br />
                <p>Consider the condition of integral headwalls and wingwalls to the first expansion joint.</p>
                <br />
                <p>
                  Do not consider the condition of bearings when determining the condition rating code for this item except to the extent that the bearings are causing distress in
                  the superstructure.
                </p>
                <br />
                <p>
                  Do not consider the condition of protective coating systems when determining the condition rating code for this item except to the extent that problems with the
                  protective coating system are indicative of problems with the underlying superstructure material. A well-formed patina on weathering steel is considered a
                  protective coating and is not considered a defect.
                </p>
                <br />
                <p>
                  Do not consider the presence of drift, debris, and soil accumulation when determining the condition rating code for this item, except to the extent that these
                  items are causing distress in the superstructure.
                </p>
                <br />
                <p>
                  Superstructure types without substructures may be affected by scour. When observed conditions are not consistent with the scour design or the assumptions used in
                  the scour appraisal, scour is considered when reporting the code for this item. In this case, observed conditions also indicate a need to reevaluate Item B.AP.03
                  (Scour Vulnerability). Observed scour that is less than the tolerable limit determined in the scour appraisal does not affect this item.
                </p>`,
    example_comments: [
      "There are no deficiencies to report.",
      "The superstructure is a deck/slab. See the deck comments.",
      "There is minor cracking and delamination in the beam ends at the abutments beneath the joints.",
      "There are scattered areas of minor pitting in the steel beams.",
      "There is heavy section loss and rust scale in the beam ends at the abutments under the joints.",
      "There is a moderate perforation in the web of Beam 1 at the west abutment.",
      "There are exposed strands in Beam 1 at the west abutment.",
      "There is a large spall in the load path of Beam 1 at the west abutment.",
      "There is a moderate, diagonal crack running up toward the center of the beam (indicating shear failure).",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.",
      },
    ],
  },

  // Paint
  {
    name: "Paint",
    item_id: "B.C.02a",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Super",
    commentary_page_id: "#bridge-super-pg4",
    commentary: `<p>Consider surface dulling, chalking, rust and peeling when evaluating the condition rating.</p>
                <br />
                <p>At stages of advanced deterioration, consider any section loss in the painted material.</p>`,
    example_comments: ["There is minor chalking and surface dulling throughout.", "There are scattered areas of light rust and minor peeling."],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Newly painted.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "There is very minor surface dulling.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "There is minor chalking and surface dulling.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "There are minor areas of rust and chalking.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "There are areas of light rust and minor peeling.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "There are large areas of light rust and peeling with some pitting.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description: "There is greater than 40% loss of paint and large areas of section loss.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description: "There is greater than 60% loss of paint and large areas of measurable section loss.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "There is greater than 75% loss of paint and large areas of measurable section loss.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "The paint has failed and is no longer protecting the bridge.",
      },
    ],
  },

  // Bearings
  {
    name: "Bridge Bearings",
    item_id: "B.C.07",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Bearings",
    commentary_page_id: "#bridge-bearings-pg1",
    commentary: `<p>This item addresses the condition of all types and shapes of bridge bearings.</p>
                <br />
                <p>
                  Do not consider the condition of protective coatings and other protection systems when determining the condition rating code for this item, except to the extent
                  that problems with the protective coating system are indicative of problems with the underlying bearing material.
                </p>
                <br />
                <p>
                  In cases where the bearing device is not visible, the condition can be assessed based on alignment, grade across the joint, or other indirect indicators of the
                  condition.
                </p>`,
    example_comments: [
      "The bearings are adequately positioned beneath the bridge beams and fully supported by the substructure.",
      "There is minor corrosion in the bearings at the abutments.",
      "There is moderate corrosion in the bearings at the abutments.",
      "There is heavy corrosion in the bearings at the abutments.",
      "There is minor pitting in the bearings at the abutments.",
      "There is minor pitting in the bearings at the abutments that has been painted over.",
      "There is moderate pack rust and heavy corrosion in the bearings at the abutments.",
      "There is rust (lamellar) scaling between the bottom of the bearings and the masonry plates at the bearings under the abutments.",
      "There is a missing bolt in the masonry plate at bearing 1 under Beam 1 at the west abutment.",
      "The bearing at Beam 1 at the west abutment has good bearing but is slightly misaligned.",
      "The rockers at the abutments are leaning toward the backwalls. The temperature was in the 80's at the time of inspection.",
      "The bridge has integral abutments.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.",
      },
    ],
  },

  // Sub
  {
    name: "Substructure",
    item_id: "B.C.03",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Sub",
    commentary_page_id: "#bridge-sub-pg1",
    commentary: `<p>This item addresses the condition of piers, abutments, piles, footings, and other substructure members.</p>
                <br />
                <p>
                  For bridges that have substructures not visible for inspection, use appropriate visual condition indicators from the superstructure or surrounding foundation
                  materials to determine the applicable code. Visual assessments may be supplemented with non-destructive or destructive testing results.
                </p>
                <br />
    
                <p>Consider the condition of integral abutment wingwalls to the first construction or expansion joint when determining the condition rating code for this item.</p>
                <br />
    
                <p>
                  Do not consider the condition of protective coatings, fenders and other substructure protection systems when determining the condition rating code for this item,
                  except to the extent that these items indicate distress of the substructure, or adversely affect its condition.
                </p>
                <br />
    
                <p>
                  Do not consider the presence of drift, debris, and soil accumulation when determining the condition rating code for this item, except to the extent that these
                  items are causing distress in the substructure.
                </p>
                <br />
    
                <p>The substructure includes:</p>
                <ul class="content-container-paragraphs-ul">
                  <li>backwalls and the members below the bearings for bridges with non-integral superstructure and substructure;</li>
                  <li>members below the girders/beams for integral superstructures;</li>
                  <li>thrust blocks and other members below the spring line for arch bridges;</li>
                  <li>legs of concrete rigid frame bridges;</li>
                  <li>abutments and footings/foundations below the leg bearings for concrete and steel rigid K-Frame or Delta-Frame bridges; and</li>
                  <li>foundation piles exposed by erosion or scour.</li>
                </ul>
                <br />
    
                <p>
                  When observed conditions are not consistent with the scour design or the assumptions used in the scour appraisal, scour is considered in the coding of this item.
                  In this case, observed conditions also indicate a need to reevaluate Item B.AP.03 (Scour Vulnerability). Observed scour that is less than the tolerable limit
                  determined in the scour appraisal does not affect this item.
                </p>`,
    example_comments: [
      "There are no deficiencies to report.",
      "There is minor staining on the interior piers and in the abutment backwalls.",
      "There is light scaling throughout the interior piers.",
      "There are isolated, minor-width, vertical cracks in the interior piers and in the abutment backwalls.",
      "There are several, shallow-depth spalls in the piers and abutments.",
      "There is an area of moderate spalling in the Pier 2 pier cap near the bearing area of Beams 1 and 2. There is still good bearing beneath the beams.",
      "There is a wide-width, horizontal crack (indicating settlement) running the length of the west abutment.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.",
      },
    ],
  },

  // Slopewall
  {
    name: "Slopewall",
    item_id: "B.C.03a",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Sub",
    commentary_page_id: "#bridge-sub-pg4",
    commentary: `<p>
                  Consider settlement and cracking in the slopewall and any voids that may cause defects in the abutment or approach slab. Use any indicators present to determine
                  the stability of the soil beneath the slopewall.
                </p>`,
    example_comments: [
      "The slopewalls are in good condition.",
      "The east slopewall has wide cracking.",
      "There is moderate erosion under the east slopewall.",
      "The structure has MSE walls.",
      "There are no obvious structural deficiencies in the MSE walls.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Bridge does not have slopewalls.",
      },
      {
        code: "G",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "P",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects.",
      },
    ],
  },

  // Culvert
  {
    name: "Culvert",
    item_id: "B.C.04",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Culvert",
    commentary_page_id: "#bridge-culvert-pg1",
    commentary: `<p>This item addresses the condition of culverts. The condition assessment includes footings, piles, and other foundation members when present.</p>
                <br />
    
                <p>
                  For culverts that have components not visible for inspection, use appropriate visual condition indicators from the roadway or surrounding foundation materials to
                  determine the applicable code. Visual assessments may be supplemented with non-destructive or destructive testing results.
                </p>
                <br />
    
                <p>
                  Consider the condition of integral wingwalls and headwalls to the first construction or expansion joint when determining the condition rating code for this item.
                </p>
                <br />
    
                <p>
                  Do not consider the condition of protective coatings and other culvert protection systems when determining the condition rating code for this item, except to the
                  extent that these items indicate distress of the culvert, or adversely affect its condition.
                </p>
                <br />
    
                <p>
                  Do not consider the presence of drift, debris, and soil accumulation when determining the condition rating code for this item, except to the extent that these
                  items are causing distress in the culvert.
                </p>
                <br />
    
                <p>The culvert includes:</p>
                <ul class="content-container-paragraphs-ul">
                  <li>buried pipe or box;</li>
                  <li>footings below the walls of a 3-sided box; and</li>
                  <li>foundation piles exposed by erosion or scour.</li>
                </ul>
                <br />
    
                <p>
                  When observed conditions are not consistent with the scour design or the assumptions used in the scour appraisal, scour is considered in the coding of this item.
                  In this case, observed conditions also indicate a need to reevaluate Item B.AP.03 (Scour Vulnerability). Observed scour that is less than the tolerable limit
                  determined in the scour appraisal does not affect this item.
                </p>`,
    example_comments: [
      "There are no deficiencies to report.",
      "There is minor corrosion in the flow line.",
      "There is moderate corrosion with minor pitting in the invert.",
      "No perforations are visible.",
      "There are minor deformations to the pipe shape.",
      "There are minor perforations with rust scaling throughout the flow line.",
      "There is complete section loss in the pipe invert on the north end for 20'.",
      "The pipe is pulling fill.",
      "There is minor sediment in the bottom of the pipe.",
      "The pipe has been lined.",
      "The liner is in good condition.",
      "The culvert is a concrete box widened by CMPs.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Component does not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some inherent defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; strength and performance of the component are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; strength and/or performance of the component is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; strength and/or performance of the component is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects; component is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to component condition. Repair or rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to component condition, and is beyond corrective action. Replacement is required to restore service.",
      },
    ],
  },

  // Channel
  {
    name: "Channel",
    item_id: "B.C.09",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Channel",
    commentary_page_id: "#bridge-channel-pg1",
    commentary: `<p>
                  This item is used to provide a condition rating for the channel at the bridge. Consider the channel upstream and downstream only insofar as it threatens the
                  bridge and approach roadway.
                </p>
                <br />
    
                <p>The condition of channel protection devices is addressed under a separate item. Refer to Item B.C.10 (Channel Protection Condition Rating).</p>
                <br />
    
                <p>
                  For concrete lined channels, channel defects typically do not apply, except for Aggradation and Debris. The condition of the channel lining would be addressed by
                  Item B.C.10 (Channel Protection Condition Rating).
                </p>`,
    example_comments: [
      "There are no deficiencies to report.",
      "The bridge is not over water.",
      "The channel condition is not impacting the roadway or the bridge.",
      "Under normal conditions the shallow, low-velocity channel flows from south to north through Span B.",
      "Under normal conditions the wide, deep, low-velocity channel flows from north to south through Span B.",
      "Under normal conditions the channel cannot be entered without additional precautions.",
      "Flow direction varies with rising and receding water levels.",
      "The channel is protected with riprap.",
      "The banks of the channel are protected with riprap.",
      "The banks are well vegetated.",
      "Most of the riprap under Spans A and C has washed away.",
      "There are localized areas of minor erosion.",
      "There is erosion in the west bank under Span A.",
      "There is degradation of the channel under Span B.",
      "There is channel aggradation and sediment deposits on the east side of Pier 2 under Span B.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Bridge does not cross over water.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "No defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Inherent defects only.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Moderate defects; bridge and approach roadway are not threatened.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; bridge and/or approach roadway is threatened.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major defects; bridge or approach roadway is seriously threatened. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major defects. Bridge or approach roadway is severely threatened. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions in order to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to channel condition. Channel rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description:
          "Bridge is closed due to channel condition, and is beyond corrective action. Bridge location or design can no longer accommodate the channel, and bridge replacement is needed to restore service.",
      },
    ],
  },

  // Channel Protection
  {
    name: "Channel Protection",
    item_id: "B.C.10",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Channel",
    commentary_page_id: "#bridge-channel-pg4",
    commentary: `<p>This item is used to provide a condition rating for channel protection devices.</p>
                <br />
    
                <p>
                  Evaluate the condition and effectiveness of channel protection devices installed on banks or in the stream to mitigate channel issues that may impact the bridge.
                  When reporting this item, consider erosion and scour, damage (unraveling, displacement, separation, and sagging), and material defects (scaling, abrasion,
                  spalling, corrosion, cracking, splitting, and decay).
                </p>
                <br />
    
                <p>
                  Channel protection devices are considered countermeasures that control, inhibit, delay, or minimize stream instability and scour problems, including river
                  training and armoring countermeasures.
                </p>
                <br />
    
                <p>
                  River training countermeasures may include: spurs, bendway weirs, guide banks, drop structures, and check dams. Additional river training countermeasures can be
                  found in HEC-23 and elsewhere.
                </p>`,
    example_comments: [
      "There are no deficiencies to report.",
      "The bridge is not over water.",
      "The channel condition is not impacting the roadway or the bridge.",
      "Under normal conditions the shallow, low-velocity channel flows from south to north through Span B.",
      "Under normal conditions the wide, deep, low-velocity channel flows from north to south through Span B.",
      "Under normal conditions the channel cannot be entered without additional precautions.",
      "Flow direction varies with rising and receding water levels.",
      "The channel is protected with riprap.",
      "The banks of the channel are protected with riprap.",
      "The banks are well vegetated.",
      "Most of the riprap under Spans A and C has washed away.",
      "There are localized areas of minor erosion.",
      "There is erosion in the west bank under Span A.",
      "There is degradation of the channel under Span B.",
      "There is channel aggradation and sediment deposits on the east side of Pier 2 under Span B.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Bridge does not cross over water or channel protection devices do not exist.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "Isolated inherent defects.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Some minor defects.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor defects.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate defects.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Some moderate defects; performance of the channel protection is not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major defects; performance of channel protection is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description: "Major defects; performance of channel protection is seriously affected. Condition typically necessitates more frequent monitoring or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description: "Major defects; channel protection is severely compromised. Condition typically necessitates more frequent monitoring or corrective actions.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Channel protection has failed, but corrective action could restore it to working condition.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Channel protection is beyond repair and must be replaced.",
      },
    ],
  },

  // Scour
  {
    name: "Scour",
    item_id: "",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Scour",
    commentary_page_id: "#bridge-scour-pg1",
    commentary: `<p>Refer to Item B.AP.03 (Scour Vulnerability) to verify if the bridge has been determined to be stable or unstable for appraised scour conditions.</p>
                <br />
    
                <p>
                  Consider design scour depth and critical scour depth, commonly found in hydraulic designs, scour evaluations, and POAs, when determining the scour condition
                  ratings.
                </p>
                <br />
    
                <p>
                  When observed conditions are not consistent with the scour design or the assumptions used in the scour appraisal, this indicates a need to reevaluate Item B.AP.03
                  (Scour Vulnerability).
                </p>`,
    example_comments: ["There is no scour present.", "There is minor localized scour at the interior piers.", "The designed countermeasures are in good condition."],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Bridge does not cross over water.",
      },
      {
        code: "9",
        condition: "EXCELLENT",
        description: "No scour.",
      },
      {
        code: "8",
        condition: "VERY GOOD",
        description: "Insignificant scour.",
      },
      {
        code: "7",
        condition: "GOOD",
        description: "Some minor scour.",
      },
      {
        code: "6",
        condition: "SATISFACTORY",
        description: "Widespread minor or isolated moderate scour.",
      },
      {
        code: "5",
        condition: "FAIR",
        description: "Moderate scour; strength and stability of the bridge are not affected.",
      },
      {
        code: "4",
        condition: "POOR",
        description: "Widespread moderate or isolated major scour; strength and/or stability of the bridge is affected.",
      },
      {
        code: "3",
        condition: "SERIOUS",
        description:
          "Major scour; strength and/or stability of the bridge is seriously affected. Condition typically necessitates more frequent monitoring, load restrictions, and/or corrective actions.",
      },
      {
        code: "2",
        condition: "CRITICAL",
        description:
          "Major scour; strength and/or stability of the bridge is severely compromised. Condition typically necessitates frequent monitoring, significant load restrictions, and/or corrective actions to keep the bridge open.",
      },
      {
        code: "1",
        condition: "IMMINENT FAILURE",
        description: "Bridge is closed to traffic due to scour condition. Channel rehabilitation may return the bridge to service.",
      },
      {
        code: "0",
        condition: "FAILED",
        description: "Bridge is closed due to scour condition, and is beyond corrective action. Bridge replacement is needed to restore service.",
      },
    ],
  },

  // Scour Vulnerability
  {
    name: "Scour Vulnerability",
    item_id: "B.AP.03",
    format: "AN (1)",
    frequency: "I",
    referenece: "SNBI",
    category: "Scour",
    commentary_page_id: "#bridge-scour-pg4",
    commentary: `<p>The intent of this item is to report the status and vulnerability determination from scour appraisals required by the NBIS.</p>
                <br />
    
                <p>
                  The codes for this item are based on the appraised scour vulnerability as described in HEC-18, Evaluating Scour at Bridges; HEC-23, Bridge Scour and Stream
                  Instability Countermeasures; and HEC-20, Stream Stability at Highway Structures.
                </p>
                <br />
    
                <p>Scour appraisals are typically performed by a multidisciplinary team of hydraulic, geotechnical, and structural engineers (Scour Appraisal Team).</p>
                <br />
    
                <p>FHWA Hydraulic Technical Advisories, manuals, and software can be found in the link below.</p>
                <br />
    
                <p>
                  Refer to item B.C.11 (Scour Condition Rating) in the Component Condition Ratings subsection to address field observed scour conditions and the effect on bridge
                  components.
                </p>
                <br />
    
                <p>
                  Use code B when designed, installed, and functioning countermeasures are used to address potential scour and to maintain bridge stability for new or existing
                  bridges, or bridges with unknown foundations.
                </p>
                <br />
    
                <p>
                  Use code B when the Scour Appraisal Team determines that the in-place, non-designed countermeasures are fully functioning and are appropriate to mitigate the risk
                  of scour.
                </p>
                <br />
    
                <p>Use code C for bridges that could become unstable for the potential scour, and temporary countermeasures are installed that were not designed.</p>`,
    example_comments: ["There is no scour present.", "There is minor localized scour at the interior piers.", "The designed countermeasures are in good condition."],
    rating_table: [
      {
        code: "0",
        condition: "NOT COMPLETE",
        description: "Scour appraisal has not been completed.",
      },
      {
        code: "A",
        condition: "STABLE",
        description: "Scour appraisal completed. Bridge determined to be stable for scour.",
      },
      {
        code: "B",
        condition: "COUNTERMEASURES",
        description: "Scour appraisal completed. Bridge determined to be stable for scour, dependent upon designed, and functioning countermeasures.",
      },
      {
        code: "C",
        condition: "TEMPORARY COUNTERMEASURES",
        description:
          "Scour appraisal completed. Bridge could become unstable for scour. Temporary (not designed) countermeasure installed to mitigate scour. Bridge is scour critical.",
      },
      {
        code: "D",
        condition: "UNSTABLE",
        description: "Scour appraisal completed. Bridge is, or may become, unstable for scour. Bridge is scour critical.",
      },
      {
        code: "E",
        condition: "NOT COMPLETED",
        description: "Scour appraisal has not been completed. Temporary (not designed) countermeasure installed to mitigate scour.",
      },
      {
        code: "U",
        condition: "UNKNOWN",
        description: "Scour appraisal has not been completed due to unknown foundations.",
      },
    ],
  },

  // Overtopping
  {
    name: "Overtopping Likelihood",
    item_id: "B.AP.02",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Overtopping",
    commentary_page_id: "#bridge-overtopping-pg1",
    commentary: `<p>An overtopping occurrence is when the waterway overtops the riding surface carried on the bridge.</p>
                <br />
    
                <p>
                  Bridge overtopping likelihood, since the year built (B.W.01), is typically determined from historical bridge inspection or maintenance records, hydraulic studies,
                  local residents/landowners, and/or site indicators including highwater marks on the bridge or its surroundings, debris remains on bridge upper members, etc.
                </p>
                <br />
    
                <p>
                  For newer bridges with limited historical inspection or maintenance information, hydraulic design information can be used to establish an overtopping likelihood.
                </p>
                <br />
    
                <p>This item does not apply to the likelihood of the waterway overtopping approach roadways.</p>`,
    example_comments: [
      "The Q100/HW elevation is significantly below the low structure elevation.",
      "The Q100/HW elevation is below the low structure elevation.",
      "The Q100/HW elevation is above the low structure elevation.",
      "The Q100/HW elevation is 582.2' and 4.3' below the low structure elevation of 586.5'.",
      "There is nothing to indicate overtopping has ever occurred.",
      "There is drift and debris deposited on the superstructure.",
      "Based on the surrounding terrain, overtopping is unlikely.",
    ],
    rating_table: [
      {
        code: "N",
        condition: "NOT APPLICABLE",
        description: "Bridge does not cross over water.",
      },
      {
        code: "0",
        condition: "NEVER",
        description: "The bridge is never overtopped.",
      },
      {
        code: "1",
        condition: "REMOTE",
        description: "Once every 100 years or less frequently.",
      },
      {
        code: "2",
        condition: "VERY LOW",
        description: "Once every 51 to 99 years.",
      },
      {
        code: "3",
        condition: "LOW",
        description: "Once every 26 to 50 years.",
      },
      {
        code: "4",
        condition: "MODERATE",
        description: "Once every 11 to 25 years.",
      },
      {
        code: "5",
        condition: "HIGH",
        description: "Once every 3 to 10 years.",
      },
      {
        code: "6",
        condition: "VERY HIGH",
        description: "Once every 2 years or more frequently.",
      },
    ],
  },

  // Swallows
  {
    name: "Cliff Swallows",
    item_id: "",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Wildlife",
    commentary_page_id: "#bridge-wildlife-pg1",
    commentary: `<p>Information on cliff swallows can be found in Part 9 of the INDOT BIM and in the INDOT Protected Species Guidance. Both documents are linked below.</p>`,
    example_comments: ["No swallows or nests were observed.", "Swallows and/or nests were observed."],
    rating_table: [
      {
        code: "N",
        condition: "NO",
        description: "No swallows or nests were observed.",
      },
      {
        code: "Y",
        condition: "YES",
        description: "Swallows and/or nests were observed.",
      },
    ],
  },

  // Bats
  {
    name: "Bats",
    item_id: "",
    format: "AN (1)",
    frequency: "EI",
    referenece: "SNBI",
    category: "Wildlife",
    commentary_page_id: "#bridge-wildlife-pg4",
    commentary: `<p>Information on bats can be found in Part 9 of the INDOT BIM and in the INDOT Protected Species Guidance. Both documents are linked below.</p>
                <br />
                <p>
                  Bridge/structure inspections must be completed by qualified individuals. In order to become a qualified individual, the INDOT Bat Training must be completed.
                  Contact INDOT ESD to request access for completing the INDOT Bat Training.
                </p>`,
    example_comments: ["No bats were seen or heard.", "Bats and/or guano were observed.", "Bats heard nesting at bridge or inside bridge components."],
    rating_table: [
      {
        code: "N",
        condition: "NO",
        description: "No bats were seen or heard.",
      },
      {
        code: "Y",
        condition: "YES",
        description: "Bats and/or guano were observed.",
      },
      {
        code: "H",
        condition: "HEARD",
        description: "Bats heard nesting at bridge or inside bridge components.",
      },
    ],
  },
];
