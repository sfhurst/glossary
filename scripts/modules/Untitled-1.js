const dfdf = [
  {
    term: "connection plate",
    definition:
      "A flat steel plate used to join two or more structural members, typically with bolts or welds. It allows forces to transfer between components like beams, girders, or bracing.",
    search: ``,
    discipline: "bridge construction",
    filter: ["bridge", "components", "construction", "NSTM"],
  },

  {
    term: "doubler plate",
    definition:
      "A steel plate welded to the web of a girder to add thickness and strength at high-stress areas such as connections. It helps prevent web buckling and increases load-carrying capacity.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "construction", "NSTM", "welds"],
  },

  {
    term: "elastic deformation",
    definition:
      "A reversible change in the shape of a material under stress, where the material returns to its original shape upon removal of the load.",
    search: ``,
    discipline: "materials engineering",
    filter: ["defects", "NSTM"],
  },

  {
    term: "fatigue details",
    definition:
      "Specific design features that affect how well a structural element resists fatigue cracking. Examples include weld terminations, bolted joints, and cutouts, which must follow established guidelines to prevent failure.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "construction", "defects", "NSTM"],
  },

  {
    term: "finite element models (FEA)",
    definition:
      "A computerized method that breaks a structure into small parts to simulate how it behaves under loads. It is used to predict stress, deformation, and failure in complex shapes and connections.",
    search: ``,
    discipline: "structural analysis",
    filter: ["bridge", "construction"],
  },

  {
    term: "fracture toughness",
    definition:
      "The ability of a material containing a crack to resist fracture, indicating the material's capacity to withstand stress in the presence of flaws.",
    search: ``,
    discipline: "materials engineering",
    filter: ["construction", "NSTM"],
  },

  {
    term: "haunch",
    definition:
      "A tapered section at the end of a beam or girder that increases depth to resist higher bending moments near supports. It adds strength where it is most needed without increasing weight across the entire span.",
    search: ``,
    discipline: "structural design",
    filter: ["bridge", "components"],
  },

  {
    term: "high performance steel (HPS)",
    definition:
      "A specialized grade of steel designed for bridges that offers improved weldability, toughness, and corrosion resistance compared to conventional high strength steel. It extends service life and reduces maintenance needs.",
    search: ``,
    discipline: "materials engineering",
    filter: ["materials"],
  },

  {
    term: "high strength steel",
    definition:
      "A type of steel with greater yield strength than standard structural steel, allowing for lighter and more efficient designs. It is commonly used in bridge components where reduced weight or higher load capacity is needed.",
    search: ``,
    discipline: "materials engineering",
    filter: ["materials"],
  },

  {
    term: "insert plate",
    definition:
      "A steel plate added into a structural member, often to thicken a flange or web, allowing for stronger welds or bolted connections. It helps transfer loads more effectively without changing the outer shape.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "construction", "NSTM"],
  },

  {
    term: "isotropic",
    definition:
      "Describes a material having identical properties in all directions. In engineering, isotropic materials respond uniformly to stresses, regardless of the direction of the applied force.",
    search: ``,
    discipline: "materials engineering",
    filter: ["materials"],
  },

  {
    term: "Jersey Barrier",
    definition:
      "A modular concrete or plastic barrier employed to separate lanes of traffic. Designed to minimize vehicle damage in cases of incidental contact while preventing vehicle crossovers.",
    search: ``,
    discipline: "roadway safety",
    filter: ["roadway"],
  },

  {
    term: "lamellar corrosion",
    definition:
      "A form of corrosion that progresses along planes parallel to the surface, typically at grain boundaries, leading to a layered or flaked appearance in metals. This type of corrosion can compromise structural integrity over time.",
    search: ``,
    discipline: "materials engineering",
    filter: ["defects"],
  },

  {
    term: "Mianus River Bridge",
    definition:
      "A section of an interstate bridge in Connecticut that collapsed in 1983 due to corrosion-related pin and hanger failure. The incident highlighted the risks of overlooked fatigue details in fracture-critical members.",
    search: ``,
    discipline: "bridge history",
    filter: ["bridge", "construction", "NSTM"],
  },

  {
    term: "moment diagram",
    definition:
      "A chart showing the bending moment along a beam’s length, typically based on loading and support conditions. It helps identify where maximum bending stresses occur.",
    search: ``,
    discipline: "structural analysis",
    filter: ["bridge", "construction", "NSTM"],
  },

  {
    term: "overhang bracket",
    definition:
      "A support device attached to the edge of a bridge deck to hold formwork during concrete placement. It allows construction of cantilevered deck sections without falsework beneath.",
    search: ``,
    discipline: "bridge construction",
    filter: ["bridge", "components", "NSTM"],
  },

  {
    term: "pigeon",
    definition:
      "A colloquial term in bridge maintenance referring to a minor defect or issue that, while not critical, requires attention to prevent future deterioration.",
    search: ``,
    discipline: "bridge maintenance",
    filter: ["construction"],
  },

  {
    term: "plastic deformation",
    definition:
      "A permanent change in the shape of a material under stress, where the material does not return to its original shape after the load is removed.",
    search: ``,
    discipline: "materials engineering",
    filter: ["defects", "NSTM"],
  },

  {
    term: "positive bending moment",
    definition:
      "A moment that causes a beam to bend in a way that places the bottom fibers in tension and the top fibers in compression. This is the typical bending condition for simply supported beams.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["construction", "NSTM"],
  },

  {
    term: "reinforced concrete",
    definition:
      "Concrete in which reinforcement, typically steel bars or mesh, is embedded to enhance its tensile strength, making it suitable for structural applications.",
    search: ``,
    discipline: "materials engineering",
    filter: ["materials"],
  },

  {
    term: "rust scaling",
    definition:
      "The formation of flaky layers of iron oxide on the surface of steel or iron due to prolonged exposure to moisture and oxygen. These scales can detach, exposing fresh metal to further corrosion.",
    search: ``,
    discipline: "materials engineering",
    filter: ["defects"],
  },

  {
    term: "tensile strength",
    definition:
      "The maximum stress that a material can endure while being stretched or pulled before breaking. It indicates the material's resistance to tension.",
    search: ``,
    discipline: "materials engineering",
    filter: ["bridge", "NSTM"],
  },

  {
    term: "tension zones",
    definition:
      "Regions in a structural element where forces act to pull the material apart. These areas are more vulnerable to cracking and require careful detail and reinforcement.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["bridge", "construction", "NSTM"],
  },

  {
    term: "yield strength",
    definition:
      "The maximum stress a material can withstand without undergoing permanent deformation. Beyond this point, the material will not return to its original shape.",
    search: ``,
    discipline: "materials engineering",
    filter: ["construction", "NSTM"],
  },
];
