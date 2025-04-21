// filter: ["acronyms", "bridge", "channel", "components", "compounds", "construction", "culvert", "defect "joints", "materials", "roadway", "NDT", "NSTM", "org", "wall", "welds"],
// Redo all glossary-culvert-tab definitions. Those definitions belong to Purdue.

// components = a noun, an physical item that could be inspected

const glossaryAllTerms = [
  // :::::

  {
    term: "ultrasonic testing (UT)",
    definition:
      "A non-destructive testing method that uses high-frequency sound waves to detect internal flaws, discontinuities, and thickness variations in welds and structural components.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
    letter: "letter-jump-u",
    filter: ["acronyms", "NDT"],
  },
  {
    term: "underbridge truck",
    definition:
      "A specialized vehicle equipped with an articulating boom and inspection platform designed to access bridge undersides for maintenance and evaluation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
    filter: ["bridge", "construction"],
  },
  {
    term: "undercutting",
    definition:
      "The erosion of the base of a channel's bank or bed, causing instability and leading to the collapse or sloughing of the bank material.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
    filter: ["channel", "defects"],
  },
  {
    term: "underdrain",
    definition: "A drainage system placed below the surface of the ground to remove excess water and prevent soil erosion or saturation.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
    filter: ["channel", "compounds"],
  },
  {
    term: "underfill concrete arch",
    definition:
      "A type of bridge structure consisting of a concrete arch with a fill material placed underneath the arch to support and distribute the load, providing stability and reducing the amount of material required for the arch.",
    discipline: "bridge design",
    page: ["bridge-culvert-pg6"],
    filter: ["bridge", "culvert"],
  },
  {
    term: "underfill material",
    definition:
      "A material, such as compacted soil or granular aggregate, placed beneath the arch ring to help distribute loads evenly and enhance the bridge’s stability.",
    discipline: "bridge design",
    page: ["bridge-culvert-pg6"],
    filter: ["compounds", "materials"],
  },
  {
    term: "underground",
    definition: "Refers to structures or utilities located below the surface, such as tunnels, pipelines, or electrical wiring.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
    filter: ["compounds"],
  },
  {
    term: "undermining",
    definition:
      "The erosion process where material is removed from beneath a structure or support, leading to a loss of stability and potential failure of the overlying or surrounding elements. This commonly occurs around foundations, footings, or piers.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6", "bridge-channel-pg8"],
    filter: ["channel", "defects"],
  },
  {
    term: "underpass",
    definition: "A passage that allows vehicles, pedestrians, or water to travel beneath a road, railway, or other obstruction.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
    filter: ["bridge", "compounds", "roadway"],
  },
  {
    term: "underwater bridge inspection diver",
    definition: "The individual performing the inspection of the underwater portion of the bridge.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
    filter: ["bridge"],
  },
  {
    term: "underwater inspection",
    definition:
      "Inspection of the underwater portion of a bridge substructure and the surrounding channel, which cannot be inspected visually at low water or by wading or probing, and generally requiring diving or other appropriate techniques.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
    filter: ["bridge", "channel"],
  },
  {
    term: "unknown foundations",
    definition:
      "Foundations of bridges over waterways where complete details are unknown because either the foundation type and depth are unknown, or the foundation type is known, but its depth is unknown, and therefore cannot be appraised for scour vulnerability.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
    filter: ["bridge"],
  },
  {
    term: "upheaval",
    definition:
      "A localized rise in a surface often caused by expanding soils, frost heave, or subgrade movement, leading to irregular elevation changes.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
    filter: ["defects"],
  },
  {
    term: "upper chord",
    definition:
      "The top horizontal component of a truss or structural frame, typically in tension, which resists downward forces. The upper chord works in conjunction with the lower chord and diagonals to form the triangular units that make up the truss. It plays a crucial role in distributing loads and maintaining the stability of the overall structure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "upstream",
    definition:
      "The direction opposite to the flow of water in a river, stream, or drainage system, moving toward the source or higher elevation. In engineering, it refers to structures, impacts, or conditions occurring before the point of interest in the flow path.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
    filter: ["channel", "compounds"],
  },
  {
    term: "urgent critical finding",
    definition: "A critical finding that necessitates immediate action within 3 days.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
    filter: ["bridge"],
  },

  // :::::

  {
    term: "vertical alignment",
    definition: "The configuration of the roadway in the vertical plane, including grades, curves, and elevations.",
    discipline: "bridge design",
    page: ["bridge-alignment-pg5"],
    letter: "letter-jump-v",
    filter: ["construction", "roadway"],
  },
  {
    term: "vertical curve",
    definition: "A curve in the vertical alignment of the roadway, typically used to transition between different grades.",
    discipline: "bridge design",
    page: ["bridge-alignment-pg5"],
    filter: ["construction", "roadway"],
  },
  {
    term: "vertical grade",
    definition: "The slope or incline of the roadway along the vertical plane, expressed as a percentage.",
    discipline: "bridge design",
    page: ["bridge-alignment-pg5"],
    filter: ["construction", "roadway"],
  },
  {
    term: "vertical member",
    definition:
      "A structural component oriented upright to carry axial or bending loads. Vertical members in trusses, columns, and supports help transfer forces between horizontal elements and foundations.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "vertical offset",
    definition:
      "Displacement of an object or structure in the vertical direction, where the position deviates from its original alignment or intended reference point.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
    filter: ["defects"],
  },

  // :::::

  {
    term: "w-beam guardrail",
    definition:
      "A common guardrail type with a W-shaped cross-section, typically used on highways. It’s effective in absorbing impact and redirecting vehicles.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
    letter: "letter-jump-w",
    filter: ["roadway"],
  },
  {
    term: "warning signs",
    definition:
      "Visual indicators used to alert drivers to unexpected road conditions or hazards ahead, typically using a yellow background with black symbols or text.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
    filter: ["roadway"],
  },
  {
    term: "waterline",
    definition: "The elevation or mark indicating the typical level of water in a stream, river, or other water body near a structure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-channel-pg8"],
    filter: ["channel", "compounds"],
  },
  {
    term: "watershed",
    definition: "An area of land that drains all precipitation and runoff to a common outlet, such as a river, bay, or other body of water.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
    filter: ["channel", "compounds", "construction"],
  },
  {
    term: "wattle",
    definition:
      "A cylindrical erosion control device made from straw, coir, or synthetic material, placed along slopes or drainage areas to slow water flow and trap sediment.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
    filter: ["channel", "components", "construction"],
  },
  {
    term: "wear",
    definition:
      "The gradual degradation of a material's surface due to friction, abrasion, or environmental factors. In bridges, wear can occur on surfaces like the deck, bearings, or expansion joints due to regular use and exposure to the elements. While some wear is inevitable, excessive wear can reduce the effectiveness of components, necessitating maintenance or replacement.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
    filter: ["defects"],
  },
  {
    term: "weathering steel (Corten)",
    definition:
      "A high-strength, low-alloy steel designed to form a protective rust layer that reduces further corrosion. Susceptible to accelerated corrosion in environments with frequent moisture exposure, especially where water can collect.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
    filter: ["materials"],
  },
  {
    term: "web",
    definition:
      "The vertical or diagonal component of a structural element, such as a beam or truss, that connects the flanges and helps to resist shear forces. The web is typically the central portion of the beam or truss, designed to bear loads that act in the direction perpendicular to the element. In trusses, the web members are usually in compression or tension, depending on the load distribution.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "weep hole",
    definition:
      "A small drainage opening in retaining walls, bridge abutments, or concrete structures that allows trapped water to escape, reducing hydrostatic pressure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
    filter: ["bridge", "components"],
  },
  {
    term: "weld toe",
    definition:
      "The transition between the base metal and the weld, a critical area susceptible to fatigue cracking if not properly blended or inspected.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
    filter: ["defects", "welds"],
  },
  {
    term: "welds",
    definition:
      "Fused joints between metal components formed by applying heat and filler material, critical for structural integrity in steel bridges and components.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
    filter: ["components", "welds"],
  },
  {
    term: "WGB transition",
    definition:
      "A guardrail transition system used to connect rigid concrete bridge railings to W-beam approach rails. This transition ensures a smooth and safe shift between the more rigid concrete barrier and the flexible W-beam rail, enhancing vehicle containment and impact absorption.",
    search: `What is "W-Beam to Rigid Bridge Rail Transition" in bridge design?`,
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
    filter: ["acronyms", "roadway"],
  },
  {
    term: "wide-width cracks",
    definition: "Cracks wider than 0.06 inches that appear in the surface of concrete.",
    search: ``,
    discipline: "bridge deck maintenance",
    page: ["glossary-additional-tab"],
    filter: ["defects"],
  },
  {
    term: "widening (channel)",
    definition: "The increase in the horizontal width of a channel, typically caused by bank erosion or undercutting.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
    filter: ["channel", "defects"],
  },
  {
    term: "widening (roadway)",
    definition:
      "The expansion of an existing roadway or bridge deck to increase capacity, improve safety, or accommodate additional lanes and traffic loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
    filter: ["bridge", "roadway"],
  },
  {
    term: "widespread defects",
    definition: "Defect is visible across many incident locations.",
    search: `What are "Widespread Defects" in bridge inspection?`,
    discipline: "bridge inspection",
    page: ["glossary-defects-tab"],
    order: 7,
    filter: ["defect classes"],
  },
  {
    term: "wind erosion",
    definition:
      "The process by which wind removes or transports soil, sediment, or other materials from a surface. Wind erosion can affect bridges, especially in arid or coastal environments, by wearing down exposed components, such as embankments, abutments, or the bridge deck. Over time, wind erosion can weaken structural components and contribute to foundation instability or surface deterioration.",
    search: ``,
    discipline: "highway design",
    page: ["glossary-additional-tab"],
    filter: ["channel"],
  },
  {
    term: "wingwall",
    definition: "A sidewall extending from an abutment or headwall that helps retain soil and direct water flow away from a bridge or culvert.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-sub-pg9"],
    filter: ["bridge", "components", "compounds", "culvert"],
  },
  {
    term: "WT transition",
    definition:
      "A guardrail transition system designed to connect Thrie Beam bridge rail to W-Beam approach guardrail. This transition provides a smooth and safe connection between the rigid Thrie Beam barrier and the more flexible W-Beam rail, ensuring proper vehicle containment and impact resistance. This does not transition to a concrete barrier wall.",
    serach: `What is "Thrie Beam to W-Beam Transition" in bridge design?`,
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
    filter: ["components", "roadway"],
  },
];
