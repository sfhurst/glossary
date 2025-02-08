 const exampleComments = [
    {
      category: "bridge-alignment-example-comments",
      example_comments: [
        "No speed reduction necessary.",
        "A minor reduction of speed is expected due to the roadway geometry.",
        "Nearby roadway features cause changes in acceleration at the bridge.",
        "There is an intersection at the north approach.",
        "The bridge is at a traffic light and carries a portion of the queue.",
        "The bridge is in a horizontal curve that is superelevated on the west side.",
        "The bridge is in a sag vertical curve.",
        "The bridge is in a crest vertical curve."
      ]
    },
    {
      category: "bridge-terminal-joints-example-comments",
      example_comments: [
        "The terminal joints are in good condition.",
        "The terminal joints present a rough transition to the bridge.",
        "There are no terminal joints at either end."
      ]
    },
    {
      category: "bridge-approach-slab-example-comments",
      example_comments: [
        "There are no deficiencies to report.",
        "The approach slabs are in good condition.",
        "The approach slabs have been covered with bituminous material.",
        "There are sealed cracks in the approach slabs.",
        "There are sound concrete patches in the approach slabs.",
        "There is a bituminous patch in the north approach slab.",
        "There is a void under the south approach slab at the southwest corner of the bridge.",
        "There is minor settlement of the approach slabs.",
        "No significant settlement has occurred."
      ]
    },
    {
      category: "bridge-joints-example-comments",
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
        "The joints are full of debris."
      ]
    },
    {
      category: "bridge-wearing-surface-example-comments",
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
        "There are scattered areas of peeling in less than 5% of the total surface area."
      ]
    },
    {
      category: "bridge-deck-example-comments",
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
        "There are large areas of deep spalling with exposed rebar exhibiting moderate section loss on the underside of the deck."
      ]
    },
    {
      category: "bridge-superstructure-example-comments",
      example_comments: [
        "There are no deficiencies to report.",
        "The superstructure is a deck/slab. See the deck comments.",
        "There is minor cracking and delamination in the beam ends at the abutments beneath the joints.",
        "There are scattered areas of minor pitting in the steel beams.",
        "There is heavy section loss and rust scale in the beam ends at the abutments under the joints.",
        "There is a moderate perforation in the web of Beam 1 at the west abutment.",
        "There are exposed strands in Beam 1 at the west abutment.",
        "There is a large spall in the load path of Beam 1 at the west abutment.",
        "There is a moderate, diagonal crack running up toward the center of the beam (indicating shear failure)."
      ]
    },
    {
      category: "bridge-bearings-example-comments",
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
        "The bridge has integral abutments."
      ]
    },
    {
      category: "bridge-paint-example-comments",
      example_comments: [
        "There is minor chalking and surface dulling throughout.",
        "There are scattered areas of light rust and minor peeling."
      ]
    },
    {
      category: "bridge-substructure-example-comments",
      example_comments: [
        "There are no deficiencies to report.",
        "There is minor staining on the interior piers and in the abutment backwalls.",
        "There is light scaling throughout the interior piers.",
        "There are isolated, minor-width, vertical cracks in the interior piers and in the abutment backwalls.",
        "There are several, shallow-depth spalls in the piers and abutments.",
        "There is an area of moderate spalling in the Pier 2 pier cap near the bearing area of Beams 1 and 2. There is still good bearing beneath the beams.",
        "There is a wide-width, horizontal crack (indicating settlement) running the length of the west abutment."
      ]
    },
    {
      category: "bridge-slopewall-example-comments",
      example_comments: [
        "The slopewalls are in good condition.",
        "The east slopewall has wide cracking.",
        "There is moderate erosion under the east slopewall.",
        "The structure has MSE walls.",
        "There are no obvious structural deficiencies in the MSE walls."
      ]
    },
    {
      category: "bridge-culvert-example-comments",
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
        "The culvert is a concrete box widened by CMPs."
      ]
    },
    {
      category: "bridge-channel-example-comments",
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
        "There is channel aggradation and sediment deposits on the east side of Pier 2 under Span B."
      ]
    },
    {
      category: "bridge-channel-protection-example-comments",
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
        "There is channel aggradation and sediment deposits on the east side of Pier 2 under Span B."
      ]
    },
    {
      category: "bridge-overtopping-likelihood-example-comments",
      example_comments: [
        "The Q100/HW elevation is significantly below the low structure elevation.",
        "The Q100/HW elevation is below the low structure elevation.",
        "The Q100/HW elevation is above the low structure elevation.",
        "The Q100/HW elevation is 582.2' and 4.3' below the low structure elevation of 586.5'.",
        "There is nothing to indicate overtopping has ever occurred.",
        "There is drift and debris deposited on the superstructure.",
        "Based on the surrounding terrain, overtopping is unlikely."
      ]
    },
    {
        category: "bridge-scour-example-comments",
        example_comments: [
          "There is no scour present.",
          "There is minor localized scour at the interior piers.",
          "The designed countermeasures are in good condition."
        ]
      },
      {
        category: "bridge-scour-vulnerability-comments",
        example_comments: [
          "There is no scour present.",
          "There is minor localized scour at the interior piers.",
          "The designed countermeasures are in good condition."
        ]
      },
    {
        category: "bridge-bridge-railings-example-comments",
        example_comments: [
          "There is no scour present.",
          "There is minor localized scour at the interior piers.",
          "The designed countermeasures are in good condition."
        ]
      },
      {
        category: "bridge-bridge-railing-transitions-example-comments",
        example_comments: [
          "There is no scour present.",
          "There is minor localized scour at the interior piers.",
          "The designed countermeasures are in good condition."
        ]
      },
      {
        category: "bridge-swallows-example-comments",
        example_comments: [
          "No swallows or nests were observed.",
          "Swallows and/or nests were observed."
        ]
      },
      {
        category: "bridge-bats-example-comments",
        example_comments: [
          "No bats were seen or heard.",
          "Bats and/or guano were observed.",
          "Bats heard nesting at bridge or inside bridge components."
        ]
      }
    
  ];
  
  