// filter: ["acronyms", "bridge", "channel", "components", "compounds", "design", "culvert", "defects", "joints", "materials", "roadway", "NSTM", "org", "wall", "welds"],

const glossaryMain = [
  // :::::

  {
    term: "1974 (fatigue design)",
    definition:
      "The year AASHTO introduced formal fatigue design guidelines for bridges. This marked the beginning of standardized fatigue categories and detail classifications, helping engineers design connections to resist repeated stress cycles. Bridges designed prior to 1974 are more susceptible to fatigue.",
    search: ``,
    discipline: "bridge history",
    filter: ["bridge", "design", "NSTM"],
  },
  {
    term: "AADT (annual average daily traffic)",
    definition:
      "The total number of vehicles that pass a specific point on a roadway over a year, divided by 365 days, providing an average daily traffic volume for planning and analysis.",
    search: `How is "Annual Average Daily Traffic" used at INDOT?`,
    discipline: "transportation engineering",
    letter: "letter-jump-a",
    filter: ["acronyms", "roadway"],
  },
  {
    term: "AADTT (annual average daily truck traffic)",
    definition:
      "The total number of trucks that pass a specific point on a roadway over the course of a year, divided by 365 days, used to evaluate truck traffic impact on infrastructure.",
    search: `How is "Annual Average Daily Truck Traffic" used at INDOT?`,
    discipline: "transportation engineering",
    filter: ["acronyms", "roadway"],
  },
  {
    term: "AASHTO (American Association of State Highway and Transportation Officials)",
    definition:
      "A nonprofit organization that establishes technical standards for the design, construction, maintenance, and operation of highways and bridges in the United States. Its guidelines, including the AASHTO LRFD Bridge Design Specifications, are widely used for structural analysis, load rating, and material selection in bridge engineering.",
    discipline: "bridge design",
    filter: ["acronyms", "org"],
  },
  {
    term: "AASHTO LRFD Bridge Design Specifications",
    definition:
      "Establishes load and resistance factor design criteria for bridges, incorporating statistical reliability to ensure structural safety, durability, and efficiency while accounting for material properties, load variability, and resistance factors.",
    discipline: "bridge design",
    filter: ["bridge", "org"],
  },
  {
    term: "AASHTO Manual for Bridge Element Inspection (MBEI)",
    definition:
      "Standardizes bridge inspection practices by defining element-level condition assessment, rating guidelines, and documentation methods to ensure consistent data collection for maintenance, repair, and asset management decisions.",
    discipline: "bridge design",
    filter: ["acronyms", "bridge", "org"],
  },
  {
    term: "AASHTO Manual for Bridge Evaluation (MBE)",
    definition:
      "Provides guidance for load rating, condition assessment, and structural evaluation of existing bridges, incorporating inspection data, material properties, and load models to determine capacity, safety, and serviceability.",
    discipline: "bridge design",
    filter: ["acronyms", "bridge", "org"],
  },
  {
    term: "ADT (average daily traffic)",
    definition:
      "The total volume of vehicle traffic passing a specific point or roadway segment in both directions over a given period, divided by the number of days in that period. Unlike AADT, which averages traffic over an entire year, ADT is typically calculated for shorter durations, such as a season or specific months, and does not account for annual variations.",
    search: "How is 'Average Daily Traffic' used at INDOT?",
    discipline: "transportation engineering",
    filter: ["acronyms", "roadway"],
  },
  {
    term: "advisory speed signs",
    definition:
      "Roadway signs that display recommended speeds for navigating specific features such as curves, ramps, or intersections. Unlike regulatory speed limit signs, they are not legally enforceable but serve as advisory notices. Typically posted with warning signs, they reflect the maximum safe speed under normal conditions and help assess approach characteristics near structures like bridges.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "abrasion",
    definition:
      "The wearing away of a material's surface due to repeated friction or impact from particles, debris, water, and/or traffic. In bridges, it commonly affects concrete and steel components, leading to surface degradation and increased susceptibility to other forms of deterioration.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "abrasive condition",
    definition:
      "A condition occurring when channel flow is strong enough to mobilize granular materials, such as sand or gravel, which can cause surface wear on bridge foundations or components. This condition can accelerate the erosion of exposed structures, particularly in areas with high flow velocities.",
    search: `Abrasive Condition in hydrology?`,
    discipline: "bridge design",
    filter: ["channel"],
  },
  {
    term: "abutment",
    definition:
      "A structure at the end of a bridge that supports the bridge's deck and transfers loads to the foundation. It resists vertical and horizontal forces, anchors the superstructure, and prevents displacement. Abutments are designed to withstand environmental factors like soil pressure and water flow.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "acoustic emission (AE) testing",
    definition:
      "A non-destructive testing method that detects stress waves generated by crack growth, material deformation, or structural damage. It enables real-time monitoring of structural integrity without external loading, identifying defects through passive acoustic signal analysis.",
    discipline: "bridge design",
    filter: ["acronyms", "NDT"],
  },
  {
    term: "additional treatment",
    definition:
      "The extension of a culvert or small structure using a different material or design, typically as part of a roadway widening project. This may include adding corrugated metal pipes (CMPs) to the ends of a concrete box culvert or attaching a concrete box to the end of a pipe to maintain flow capacity and structural integrity.",
    search: `How do you extend a box culvert with a CMP?`,
    discipline: "bridge design",
    filter: ["culvert"],
  },
  {
    term: "adhesion",
    definition:
      "The ability of a sealant or material to bond to a surface and remain attached under stress or movement. In bridge design, particularly at deck expansion joints, adhesion ensures a secure bond between the joint sealant and the surrounding concrete, preventing water infiltration, debris, and deterioration of the joint.",
    discipline: "bridge design",
    filter: ["joints", "materials", "welds"],
  },
  {
    term: "adjacent",
    definition:
      "Refers to objects or elements that are next to or bordering one another, often used to describe one roadway or bridge components position relative to another.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "aggradation",
    definition:
      "A specific type of sediment deposition where the overall elevation of a streambed, riverbed, or landscape increases due to the continuous accumulation of sediment. It typically refers to the buildup of sediment in a channel or floodplain over time, which can affect the shape and stability of the environment.",
    discipline: "bridge design",
    filter: ["channel", "defects"],
  },
  {
    term: "aggregate",
    definition:
      "Granular material such as sand, gravel, or crushed stone used in concrete and asphalt to provide strength, durability, and resistance to wear.",
    discipline: "bridge design",
    filter: ["materials"],
  },
  {
    term: "ANSI (American National Standards Institute)",
    definition:
      "A private, nonprofit organization that oversees the development of voluntary consensus standards for a wide range of industries, including construction and engineering. It coordinates with international bodies to ensure compatibility between U.S. and global standards, covering materials, testing procedures, and safety regulations used in bridge design and fabrication.",
    discipline: "bridge design",
    filter: ["acronyms", "org"],
  },
  {
    term: "anchor (retaining wall)",
    definition:
      "A tendon, tendon bundle, rod, or bar element that is installed into the ground through the wall and anchored into stable material well behind potentially unstable soil, then tensioned and attached to the wall to provide additional resistance to earth pressures. Anchors are also referred to as Tie-Backs or Ground Anchors.",
    search: `What is "anchor" in retaining wall design?`,
    discipline: "retaining wall design",
    filter: ["components", "wall"],
  },
  {
    term: "approach roadway alignment",
    definition:
      "The portion of the roadway leading up to a bridge, consisting of horizontal and vertical curves and grades. It provides a predictable path for drivers and ensures a smooth, safe transition to the bridge. Properly constructed approach roadways minimize abrupt changes in direction or slope, maintaining vehicle comfort and safety.",
    discipline: "bridge design",
    filter: ["bridge", "components", "roadway"],
  },
  {
    term: "approach slab",
    definition: "A reinforced concrete slab that provides a smooth transition between the roadway and the bridge deck.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "approach span",
    definition:
      "A section of a bridge that extends from the abutment to the main structure, providing a transition for vehicles or pedestrians. It typically carries traffic over smaller obstacles before reaching the primary spans. These sections may experience differential settlement due to varying support conditions.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "arch crown",
    definition:
      "The highest point of the arch, located at the center of the span, which experiences compressive forces that help distribute loads across the arch structure.",
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds", "culvert"],
  },
  {
    term: "arch ring",
    definition:
      "The curved, topmost portion of an arch that carries the compressive load across the span of the bridge, ensuring structural stability.",
    search: ``,
    discipline: "arch design",
    filter: ["bridge", "components", "compounds", "culvert"],
  },
  {
    term: "arch springing",
    definition:
      "The point on the springline where the arch begins to curve away from its vertical support, typically located at the base of the arch. It marks the start of the arch ring’s curvature. Though sometimes called the springing point, arch springing is more commonly used in engineering texts and drawings. Both terms refer to the same physical location on the structure.",
    discipline: "bridge design",
    filter: ["bridge", "components", "culvert"],
  },
  {
    term: "armor (two steel angles) joint",
    definition:
      "A joint made of two steel angles designed to provide a protective barrier and allow some movement while maintaining a seal. Steel angles can suffer from corrosion, lack flexibility, and may lead to leakage if the sealant is improperly applied.",
    discipline: "bridge design",
    filter: ["joints"],
  },
  {
    term: "armoring",
    definition:
      "The process of applying protective materials, such as riprap, concrete, or steel, to embankments, shorelines, or structures to prevent erosion. Armoring aims to resist the forces of water, wind, or ice, protecting the surface from degradation and maintaining stability.",
    discipline: "bridge design",
    filter: ["channel"],
  },
  {
    term: "articulating concrete blocks",
    definition: "Pre-cast, interlocking concrete units used to form erosion-resistant surfaces.",
    discipline: "bridge design",
    filter: ["components", "channel"],
  },
  {
    term: "as-built drawings",
    definition:
      "Final construction drawings that document deviations from original design plans, reflecting the actual dimensions and configurations of a completed structure.",
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "asbestos",
    definition:
      "A naturally occurring fibrous mineral used in construction materials for insulation and fireproofing. Its airborne fibers pose severe health hazards, requiring strict containment, removal, and disposal regulations when encountered during bridge rehabilitation or demolition.",
    discipline: "bridge design",
    filter: ["design", "materials"],
  },
  {
    term: "asphalt",
    definition:
      "A mixture of aggregates and bitumen used for paving roads and bridge decks. It provides a durable and flexible surface capable of withstanding heavy traffic loads. Over time, it can deteriorate due to weathering, UV exposure, and traffic stress.",
    search: ``,
    discipline: "highway design",
    filter: ["materials"],
  },
  {
    term: "asphalt plug joint",
    definition: "A joint system that uses a flexible asphalt-based material to accommodate small movements while providing a smooth riding surface.",
    discipline: "bridge design",
    filter: ["joints"],
  },
  {
    term: "ASTM (American Society for Testing and Materials)",
    definition:
      "An international organization that develops and publishes technical standards for materials, products, systems, and services used in infrastructure projects. Its specifications define the physical and mechanical properties of materials such as steel, concrete, and coatings, ensuring quality control and performance consistency in bridge construction.",
    discipline: "bridge design",
    filter: ["acronyms", "org"],
  },
  {
    term: "ASTM structural steels",
    definition:
      "Structural steels used in bridge construction under ASTM specifications, designed for varying requirements of strength, weldability, corrosion resistance, and toughness. Different grades are optimized for specific applications, including general structural use, high-strength applications, and weathering resistance. Some grades require careful design considerations to prevent issues like brittle fracture, deformation under high loads, or accelerated corrosion in certain environments.",
    discipline: "bridge design",
    filter: ["materials"],
  },
  {
    term: "asymmetric barrier design",
    definition:
      "A barrier design in which the shape, size, or orientation of the guardrail or barrier varies on each side to account for differing road conditions, clear zones, or traffic flow. Asymmetric barriers are commonly used in situations where one side of the barrier faces a more hazardous area, such as a steep drop-off, requiring enhanced protection.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "attenuators",
    definition: "Crash barriers designed to absorb and dissipate the energy of an impacting vehicle, reducing the severity of collisions.",
    discipline: "bridge design",
    filter: ["bridge", "components", "roadway"],
  },
  {
    term: "axial tension",
    definition:
      "A type of uniaxial stress where a pulling force is applied along the length of a structural member, causing it to stretch elastically. The entire cross-section resists the load evenly if the force is centered.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["design", "NSTM"],
  },
  {
    term: "azimuth",
    definition:
      "The horizontal angular measurement in a coordinate system, often used in bridge and roadway alignment to define direction relative to true north.",
    discipline: "bridge design",
    filter: ["design"],
  },

  // :::::

  {
    term: "backfill",
    definition:
      "The material placed behind a bridge abutment or retaining wall to provide support, distribute loads, and aid in drainage. It is typically composed of soil, granular fill, or other engineered materials.",
    discipline: "bridge design",
    letter: "letter-jump-b",
    filter: ["compounds", "design", "materials"],
  },
  {
    term: "backing bar",
    definition:
      "A metal strip placed behind a weld joint to support molten weld material and ensure full penetration. It may be temporary or left in place. When not removed, it acts as a stress riser and becomes an uncategorized fatigue detail. Depending on its size and configuration, it may fall under AASHTO fatigue categories C to E'.",
    discipline: "bridge design",
    filter: ["components", "NSTM", "welds"],
  },
  {
    term: "backwall",
    definition: "The vertical wall at the rear of an abutment that retains the roadway fill behind a bridge.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds"],
  },
  {
    term: "backwater",
    definition:
      "The increase in the upstream water elevation resulting from an obstruction to flow, such as a bridge and/or embankment placed in the floodplain.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "compounds"],
  },
  {
    term: "bare metal",
    definition:
      "Uncoated or stripped surface that exposes the underlying alloy to environmental elements, increasing susceptibility to corrosion, abrasion, or chemical reactions. Also required for certain NDT methods that rely on direct surface contact.",
    discipline: "bridge inspection",
    filter: ["materials", "NDT"],
  },
  {
    term: "barn swallows",
    definition:
      "Small migratory birds that build mud nests on bridge structures, particularly under overhangs and beams. Their nesting can lead to maintenance concerns due to accumulated droppings and potential conflicts with environmental regulations protecting native species.",
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "barrel (arch)",
    definition:
      "The curved, continuous portion of an arch bridge that supports the load by distributing forces through compression. It typically refers to the overall span or length of the arch structure.",
    discipline: "bridge design",
    filter: ["bridge", "components", "culvert"],
  },
  {
    term: "barrel (culvert)",
    definition:
      "The main section of a culvert, typically a pipe or box, that carries water beneath the roadway. Often made from corrugated metal or concrete, it relies on its shape for structural strength and efficient hydraulic flow.",
    discipline: "bridge design",
    filter: ["components", "culvert"],
  },
  {
    term: "base metal",
    definition:
      "The material to which coatings, welds, or other treatments are applied, forming the structural foundation in fabrication or joining processes. Often selected for its strength, durability, or compatibility with the intended application.",
    discipline: "bridge inspection",
    filter: ["materials", "welds"],
  },
  {
    term: "beam",
    definition:
      "A horizontal structural member designed to resist bending and shear forces across a span. In bridge design, beams support vertical loads and transfer them to supports such as abutments, piers, or framing elements. The term encompasses a range of components, including girders, floorbeams, and stringers, depending on the member’s role, span direction, and position in the structure. Beams may run longitudinally or transversely and can have various cross-sectional shapes such as I-beams, box beams, tee beams, or channels. While beam is often used informally to describe any horizontal member, in technical use it refers specifically to elements that carry load across a span and resist bending through flexural action.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "beam line",
    definition:
      "A reference line used in the framing plan of bridge drawings to indicate the centerline of a beam or girder. It defines the layout and spacing of structural members and is used for alignment during design, detailing, and construction.",
    discipline: "bridge design",
    filter: ["bridge", "design"],
  },
  {
    term: "bearing",
    definition:
      "A component that supports the weight of a structure and allows it to transfer loads to a foundation. Bearings are essential in bridges, enabling the movement of elements due to temperature changes, settling, or traffic loads. They come in various forms, such as elastomeric or roller bearings.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "bearing pad",
    definition: "A pad placed between the bridge superstructure and substructure to accommodate movement and distribute loads.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "bedload",
    definition: "The sediment that moves along the bottom of a river or streambed, contributing to scour and erosion.",
    discipline: "bridge design",
    filter: ["channel", "compounds"],
  },
  {
    term: "bedrock",
    definition: "The solid rock layer beneath soil, sand or silt.",
    discipline: "bridge design",
    filter: ["channel", "compounds", "design", "materials"],
  },
  {
    term: "bendway weirs",
    definition: "A type of river training structure used to guide water flow along a river bend, reducing bank erosion and scour.",
    discipline: "bridge design",
    filter: ["channel", "components"],
  },
  {
    term: "bent",
    definition:
      "A support structure typically composed of columns or piers that hold up a bridge or other similar structures. Bents are spaced at intervals along the length of a bridge to support beams or girders. They help distribute vertical and horizontal loads to the foundation.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "berm",
    definition:
      "A raised area of land or a narrow strip of earth, often used for drainage or to stabilize embankments. Berms are commonly found near bridge approaches or alongside roads to control water runoff. They can also serve as barriers for traffic safety.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "design", "roadway"],
  },
  {
    term: "biaxial stress",
    definition:
      "A state of stress where forces act in two perpendicular directions within the same plane. This condition often occurs in flat plates under pressure or when multiple in-plane forces are applied.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["design", "NSTM"],
  },
  {
    term: "bin wall",
    definition:
      "A type of gravity retaining wall consisting of bins typically fabricated from metal or concrete, filled with granular soil material, and then placed adjacent and atop of one another. The individual bins are typically placed in a non-interlocking manner.",
    search: `What is "Bin Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    filter: ["wall"],
  },
  {
    term: "BIRM (Bridge Inspector’s Reference Manual)",
    definition:
      "A federal guide outlining standard methods, tools, and procedures for evaluating highway structures in use, ensuring consistent assessments and reliable reporting across agencies.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "org"],
  },
  {
    term: "bituminous",
    definition:
      "A material derived from petroleum or coal that is used primarily for road surfacing and in the construction of pavements and bridges. Bituminous materials, such as asphalt, are commonly used for their adhesive properties and ability to withstand heavy traffic loads. In bridge construction, bituminous materials can also be used for waterproofing or as part of the wearing surface.",
    search: ``,
    discipline: "materials engineering",
    filter: ["materials"],
  },
  {
    term: "blistering",
    definition:
      "A defect caused by moisture or air trapped beneath a surface layer, leading to the formation of bubbles or blisters. This can result in surface delamination or weakening of the material, commonly seen in coatings, concrete, or composite structures.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "bolts",
    definition:
      "Cylindrical fasteners with external threads used to secure components by applying torque, often fastened with nuts or embedded in tapped holes. Bolts resist axial and shear forces and are typically classified under AASHTO fatigue category B, indicating moderate fatigue resistance.",
    discipline: "bridge design",
    filter: ["components", "design", "NSTM"],
  },
  {
    term: "box beam",
    definition:
      "A type of beam that has a hollow rectangular or square cross-section, commonly used in bridge construction. Box beams are typically made of concrete or steel and are valued for their strength and ability to handle heavy loads. They are often used for highway or railroad bridges.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds"],
  },
  {
    term: "breakaway cable terminal",
    definition:
      "A safety device used in guardrail systems designed to absorb impact energy by allowing the terminal to break away upon vehicle collision. It typically consists of a cable system that slows and redirects the vehicle, minimizing injury and damage while preventing the guardrail from becoming a rigid obstruction.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "breakaway wooden posts",
    definition:
      "Wooden posts used in guardrail systems designed to break away upon impact. These posts help to reduce the transfer of energy during a collision, minimizing vehicle damage and injury risk. Typically found in areas with low traffic volume where flexibility and safety are prioritized.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "breast wall",
    definition:
      "A type of retaining wall located below the bridge seat, typically at the base of the bridge abutment. It is designed to hold back soil and prevent erosion around the foundation, providing stability to the embankment and the bridge's structure.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds", "culvert"],
  },
  {
    term: "bridge",
    definition:
      "A structure with supports built over a gap or barrier such as a body of water, road, or railway, designed to carry traffic or other loads. It spans more than 20 feet along the centerline of the roadway, measured between abutment faces or arch spring lines, or across the full extent of grouped openings. This includes sets of pipes if the clear spacing between them is less than half the diameter of the smallest pipe.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "bridge deck",
    definition:
      "The structural component of a bridge that supports traffic loads and transfers them to the superstructure. It spans between supporting members and is a key element in the bridge’s load path. Commonly called a deck.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "bridge elements",
    definition:
      "Functional groups of structural parts tracked individually by type, quantity, and condition. Used to assess and report infrastructure health through standardized condition states under federal requirements.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "bridge railing",
    definition:
      "A protective barrier installed on bridges to prevent vehicles and pedestrians from leaving the structure. Designed to meet specific structural and safety requirements, it balances impact resistance, visibility, and load considerations.",
    discipline: "bridge design",
    filter: ["bridge", "components", "roadway"],
  },
  {
    term: "bridge seat",
    definition: "The upper surface of an abutment or pier where bridge bearings rest, providing support for the superstructure.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "brittle failure",
    definition:
      "A sudden fracture of a material with little to no prior plastic deformation, often occurring without warning under stress. Brittle failure in a nonredundant steel tension member (NSTM) could lead to the collapse of the structure.",
    search: ``,
    discipline: "materials engineering",
    filter: ["defects", "NSTM"],
  },
  {
    term: "brown bats",
    definition:
      "A small, insectivorous mammal commonly found roosting under bridges. It plays a vital role in controlling insect populations. Their presence can complicate maintenance activities due to legal protections and the need for seasonal work restrictions to prevent habitat disruption.",
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "buckling",
    definition:
      "A sudden lateral deformation caused by compressive forces exceeding a structural element’s critical load, often occurring in slender columns, girders, or plates.",
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "built-up member",
    definition:
      "A structural component that is assembled from multiple smaller elements, such as plates or shapes, to form a larger unit. Built-up members are often used when single solid pieces are too large or impractical. They are common in steel bridge construction and provide flexibility in design.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM", "welds"],
  },
  {
    term: "butt weld",
    definition:
      "A weld joining two pieces of metal in the same plane, typically used for full-penetration connections in structural steel fabrication.",
    discipline: "bridge design",
    filter: ["welds"],
  },

  // :::::

  {
    term: "cable barrier system",
    definition:
      "A flexible guardrail system consisting of multiple strands of tensioned steel cable supported by posts. Designed to absorb impact by deflecting vehicles, it is often more cost-effective and easier to repair than rigid barriers, making it a common choice for medians and roadsides.",
    discipline: "bridge design",
    letter: "letter-jump-c",
    filter: ["roadway"],
  },
  {
    term: "cable terminations",
    definition:
      "End fittings or anchorage systems securing cables in cable-supported structures, designed to transfer loads efficiently while minimizing stress concentrations.",
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "cable boots",
    definition:
      "Protective coverings placed over exposed cable ends or connections in suspension and cable-stayed bridges to prevent corrosion and mechanical damage.",
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "camber",
    definition:
      "An intentional upward curve built into structural elements to offset deflection from loading, helping maintain proper alignment over time.",
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "cantilever",
    definition:
      "A structural element that is supported at only one end, with the other end extending freely. It is used to support loads without requiring additional support at the free end. Cantilevers are common in bridge construction and allow for longer spans without intermediate supports.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "design"],
  },
  {
    term: "cantilever semi-gravity",
    definition:
      "A type of retaining wall that has a vertical stem wall that is structurally connected to a base slab, or footing. The base slab may be either bearing directly on underlying foundation soil or supported on piles. The vertical stem wall is typically reinforced concrete or reinforced, solid-grouted concrete masonry block, while the base slab is reinforced concrete. The combined weight of the retaining wall itself and the soil mass on the base slab provides overall stability against earth pressures, while the stem wall behaves as a vertical cantilever member that is reinforced at the base of the wall providing cantilever resistance to lateral earth pressures.",
    search: `What is "Cantilever Semi-Gravity" in retaining wall design?`,
    discipline: "retaining wall design",
    filter: ["wall"],
  },
  {
    term: "cantilevered span",
    definition:
      "A bridge span that is supported at only one end, with the other end projecting out into space. This design allows for longer spans without needing support at the mid-point. Cantilevered spans are commonly used in bridges where supporting piers are difficult to place.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "carbon steel",
    definition:
      "A strong, cost-effective steel primarily composed of iron and carbon, commonly used in bridge girders and structural members. Prone to corrosion if not properly coated or maintained.",
    discipline: "bridge design",
    filter: ["materials"],
  },
  {
    term: "catwalk",
    definition: "A narrow walkway, often suspended beneath a bridge or inside a truss, providing inspector access to structural elements.",
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds"],
  },
  {
    term: "cavitation",
    definition:
      "The formation of vapor bubbles in the water that collapse near a surface, leading to localized erosion, often seen around hydraulic structures like gates or valves.",
    discipline: "bridge design",
    filter: ["channel", "defects"],
  },
  {
    term: "cement",
    definition:
      "A binding material, typically Portland cement, that reacts chemically with water to form a hardened paste, providing cohesion in concrete and mortar.",
    discipline: "bridge design",
    filter: ["materials"],
  },
  {
    term: "centerline",
    definition:
      "The yellow painted line, or the imaginary line, that separates traffic moving in opposite directions on a roadway. It serves as a visual guide for drivers, indicating the boundary between lanes of traffic going in opposite directions.",
    search: ``,
    discipline: "bridge design",
    filter: ["compounds", "roadway"],
  },
  {
    term: "chalking",
    definition:
      "The formation of a powdery residue on the surface of materials, typically due to the degradation of a paint or coating. It occurs as a result of weathering, chemical reactions, or exposure to UV light. This residue can reduce the effectiveness of the coating and may require surface cleaning or repainting.",
    search: ``,
    discipline: "bridge paint",
    filter: ["defects"],
  },
  {
    term: "chamfer",
    definition:
      "A beveled edge cut along a corner to reduce sharpness, improve durability, minimize stress concentration, or create a cleaner visual transition.",
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "channel",
    definition:
      "A natural or artificial watercourse designed to direct and control the flow of water. It may include features such as bed, banks, and flow paths, which affect the hydrology and hydraulics around bridges, ensuring proper water flow and reducing risk of erosion or scour.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "channel", "components", "culvert"],
  },
  {
    term: "channel bed",
    definition: "The bottom surface of a channel, often composed of rock, sediment, or soil, through which the flow of water moves.",
    discipline: "bridge design",
    filter: ["channel"],
  },
  {
    term: "channel migration",
    definition:
      "The natural process by which a river or stream shifts its course over time, typically due to erosion on one bank and deposition on the opposite bank. This movement can alter the shape and location of the channel, impacting surrounding areas.",
    discipline: "bridge design",
    filter: ["channel"],
  },
  {
    term: "channel profile",
    definition:
      "The shape and elevation of the riverbed or stream channel along its length, typically viewed in a cross-sectional view. It is an important factor in hydraulic engineering, as it helps determine the flow characteristics and stability of the channel. A channel profile can be influenced by factors such as sediment transport, erosion, and human interventions like dam construction or dredging.",
    search: ``,
    discipline: "hydraulic engineering",
    filter: ["bridge", "channel"],
  },
  {
    term: "Charpy V-notch (CVN) impact test",
    definition:
      "A standardized test that measures a material's toughness by determining the energy absorbed during fracture of a notched specimen under impact loading.",
    search: ``,
    discipline: "materials engineering",
    filter: ["NDT", "NSTM"],
  },
  {
    term: "check dams",
    definition:
      "A small, temporary or permanent barrier placed across a drainage channel, swale, or ditch to slow water flow, reduce erosion, and allow sediment to settle. Often constructed from rock, sandbags, or logs.",
    discipline: "bridge design",
    filter: ["channel", "components"],
  },
  {
    term: "cheek wall",
    definition:
      "A vertical wall perpendicular to the end of a bridge abutment, enclosing three sides of the bridge seat. Cheek walls help retain the embankment, support the bridge structure at the approach, and protect fascia bearings from the elements. Unlike wingwalls, which are angled, cheek walls form a right angle with the abutment. Sometimes called a knee wall.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds", "culvert"],
  },
  {
    term: "clad steel",
    definition:
      "A composite steel with a corrosion-resistant outer layer (such as stainless steel) bonded to a structural steel core. Can be difficult to weld and requires specialized fabrication techniques.",
    discipline: "bridge design",
    filter: ["materials"],
  },
  {
    term: "clear zone",
    definition: "The area along a roadway that is kept free of obstacles, designed to provide a safe space for vehicles that leave the road.",
    search: ``,
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "cliff swallows",
    definition:
      "Colonial nesting birds that construct gourd-shaped mud nests on vertical bridge surfaces. Their large populations can create maintenance challenges, requiring mitigation measures that comply with wildlife protection laws while preserving structural integrity.",
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "closed median",
    definition: "A median in which the area between the two roadways on the structure is bridged over and is capable of supporting traffic.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "design", "roadway"],
  },
  {
    term: "cold joint",
    definition:
      "A visible seam in concrete that forms when one batch hardens before the next is poured, often due to construction delays. This results in a weak bond between the layers, which can affect the strength and durability of the structure if not properly addressed.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "culvert", "joints"],
  },
  {
    term: "complex feature",
    definition:
      "A bridge component or element characterized by specialized or intricate structural design, construction techniques, or operational functions. This includes systems with mechanical or electrical components, such as movable spans, suspension cables, or cable-stayed superstructures, which may require specific inspection methods.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "NSTM"],
  },
  {
    term: "compaction",
    definition:
      "The process of increasing soil density by applying mechanical force to reduce air voids. Proper compaction improves load-bearing capacity and reduces settlement but can also impact drainage and permeability.",
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "compression",
    definition:
      "A force that acts to reduce the size of a material or structural element. In bridge design, compression is typically applied to beams, columns, or other load-bearing elements. Materials subjected to compression may deform or buckle if the force exceeds their capacity. Members fully in compressin are not NSTMs.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "NSTM"],
  },
  {
    term: "compression seal (BS) joint",
    definition:
      "A joint system that uses a flexible seal material that compresses to close the gap between two bridge sections. This joint prevents water and debris infiltration by maintaining a tight seal during movement. Over time, compression seals can lose flexibility, accumulate debris, and suffer from misalignment, leading to ineffective sealing and water leakage.",
    discipline: "bridge design",
    filter: ["acronyms", "joints"],
  },
  {
    term: "concrete",
    definition:
      "A composite material composed of cement, water, and aggregates such as sand and gravel, which hardens through a chemical reaction known as hydration. Used extensively in bridge construction due to its compressive strength and durability, concrete is susceptible to issues such as cracking, shrinkage, freeze-thaw damage, and reinforcement corrosion if not properly designed, mixed, or maintained.",
    discipline: "bridge design",
    filter: ["materials"],
  },
  {
    term: "concrete barrier wall",
    definition:
      "A rigid, high-impact-resistant concrete structure used to separate traffic or protect roadways and bridges. Common types include the New Jersey barrier, F-shape barrier, and single-slope barrier, each designed to manage vehicle impact and reduce rollover risk.",
    discipline: "bridge design",
    filter: ["bridge", "components", "design", "roadway"],
  },
  {
    term: "confluence",
    definition: "The point at which two or more streams or rivers meet, often forming a larger channel or river.",
    discipline: "bridge design",
    filter: ["channel"],
  },
  {
    term: "connection plate",
    definition:
      "A flat steel plate used to join two or more structural members, typically with bolts or welds. It allows forces to transfer between components like beams, girders, or bracing.",
    search: ``,
    discipline: "bridge construction",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "consolidation",
    definition:
      "The gradual settlement of soil due to the expulsion of water from pore spaces under long-term loading. Common in clay soils and can cause foundation or structural movement over time.",
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "constraint-induced fracture (CIF)",
    definition:
      "A sudden, brittle failure caused by restrained movement in one or more directions. Stress builds up when thermal expansion, shrinkage, or other deformation is blocked, often in rigid connections where elastic or plastic movement is restricted.",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms", "defects", "design", "NSTM"],
  },
  {
    term: "constraint-relief gap",
    definition:
      "A gap left in a welded structural element to reduce restraint and prevent constraint-induced fracture. Often used in retrofits at intersecting welds or triaxially restrained connections, it reduces the risk of brittle fracture by allowing limited elastic or plastic deformation.",
    search: ``,
    discipline: "bridge fabrication",
    filter: ["defects", "NDT", "NSTM"],
  },
  {
    term: "construction joint",
    definition:
      "A joint used in the construction process to separate different phases of work, typically where two sections of a structure meet. It allows for the continuation of construction while providing a defined break between sections, but may require additional treatment to prevent movement or water infiltration.",
    discipline: "bridge design",
    filter: ["design", "joints"],
  },
  {
    term: "continuous span",
    definition:
      "A type of bridge span that extends over multiple supports, allowing the structure to distribute loads across more than one support. Continuous spans are often used for longer bridges and can reduce the overall deflection of the structure. Continuous spans have both a positive and negative bending moment. The positive moment is greatest near midspan in the end spans, and negative moment is greatest at the interior supports.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "design", "NSTM"],
  },
  {
    term: "contraction scour",
    definition:
      "The removal of bed material from a channel due to increased flow velocity at a constricted section, often occurring beneath bridges or culverts where water accelerates through a narrower opening.",
    discipline: "bridge design",
    filter: ["channel", "defects"],
  },
  {
    term: "corbel",
    definition:
      "A projecting structure, typically made of masonry or concrete, used to support a beam or other horizontal element. Corbels are commonly found in bridges and buildings where a load-bearing surface is needed without a direct vertical support. They are often used in arches and bridge superstructures.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "core sample",
    definition:
      "A sample of material, often concrete or soil, that is extracted from a structure or the ground for testing purposes. Core samples are used to determine the composition, strength, and quality of the material. They are especially important in bridge inspection to assess the condition of foundations and materials.",
    search: ``,
    discipline: "bridge inspection",
    filter: ["design", "NDT"],
  },
  {
    term: "corrosion",
    definition:
      "A natural process where steel deteriorates from chemical reactions with moisture and oxygen. Often visible as rust, it leads to material loss and reduced structural capacity. The corrosion causes an increase in volume, which can crack or spall surrounding concrete.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "cover",
    definition:
      "The depth of soil between the top of a buried structure and the bottom of the roadway. Greater cover allows vertical loads to disperse through the soil mass, reducing the pressure transferred directly onto the structure.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "design", "culvert"],
  },
  {
    term: "cover plate",
    definition:
      "A steel plate welded to the bottom flange of a built-up steel member to increase bending strength in high moment regions. They are often used as a more economical alternative to increasing the size of the entire beam. It’s important to monitor cover plates for fatigue cracks, corrosion along welds, and section loss at the ends, where stress concentrations often occur. The end terminations of longitudinal welds on welded cover plates are classified as AASHTO fatigue category E or E′, depending on flange thickness.",
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "crack arrest hole",
    definition:
      'A drilled hole placed at the end of a crack to prevent it from propagating further. This method is commonly used in bridges and other structures to halt crack growth and prevent further structural damage. A 2" hole is recommended to capture the crack and prevent the crack from reinitiating. The open hole is classified as AASHTO fatigue category D.',
    search: ``,
    discipline: "bridge repair",
    filter: ["defects", "NDT", "NSTM"],
  },
  {
    term: "crack propagation",
    definition:
      "The gradual growth of a crack under stress. Once a crack forms, it can spread due to repeated loading, especially in fatigue-prone details, and eventually lead to structural failure.",
    search: ``,
    discipline: "materials engineering",
    filter: ["defects", "NSTM"],
  },
  {
    term: "crash wall",
    definition: "A reinforced protective wall built around bridge piers or critical infrastructure to absorb and deflect vehicle impacts.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "roadway"],
  },
  {
    term: "creep",
    definition:
      "The gradual, long-term deformation of materials under a constant load. Creep is particularly relevant in concrete and steel structures, where continuous stress over time causes slow but permanent changes in shape. In bridge components, creep can lead to deflections or misalignments that, if not accounted for, may affect the bridge's overall performance and longevity.",
    search: ``,
    discipline: "material science",
    filter: ["design", "defects"],
  },
  {
    term: "crest vertical curve",
    definition:
      "A curve in the roadway profile that connects an ascending grade to a descending grade, typically used to smooth transitions at the crest of a hill.",
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },
  {
    term: "crib wall",
    definition:
      "A type of gravity retaining wall consisting of interlocking elements of timber, metal, or precast concrete arranged in the form of bins (or cribwork) and filled with granular soil material. Crib walls gain their stability not only from their weight but also to some extent from the strength of fill within the bins.",
    search: `What is "Crib Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    filter: ["wall"],
  },
  {
    term: "critical find",
    definition:
      "A defect or condition discovered during inspection that poses a significant structural or safety concern, requiring prompt evaluation and potential remediation.",
    discipline: "bridge design",
    filter: ["bridge", "defects"],
  },
  {
    term: "cross bracing",
    definition: "A system of diagonal braces used to strengthen and stabilize the bridge structure, typically placed between girders or beams.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds"],
  },
  {
    term: "cross-section",
    definition: "A view or diagram representing a vertical or horizontal cut through an object, structure, or terrain to show internal features.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "compounds", "design"],
  },
  {
    term: "cross slope",
    definition: "The slope of the roadway surface perpendicular to the direction of travel, designed to allow for proper drainage of water.",
    search: ``,
    discipline: "bridge design",
    filter: ["compounds", "roadway"],
  },
  {
    term: "crossover",
    definition:
      "A designated area or path, often a short roadway, that allows vehicles to cross a median or divider to access opposing roadways or areas. Crossovers are commonly found on divided highways or interstates to provide access between different sides of the road.",
    search: ``,
    discipline: "bridge design",
    filter: ["compounds", "design", "roadway"],
  },
  {
    term: "crosswalk",
    definition:
      "A designated area on a road or street, marked to provide a safer path for pedestrians to cross. It typically consists of painted lines or markings to make the crossing more visible to drivers.",
    search: ``,
    discipline: "bridge design",
    filter: ["compounds", "roadway"],
  },
  {
    term: "crumb rubber",
    definition: "Recycled rubber from scrap tires, often used as an additive in asphalt to enhance flexibility and durability.",
    discipline: "bridge design",
    filter: ["design", "joints", "materials"],
  },
  {
    term: "culvert",
    definition:
      "A structure comprised of one or more barrels, beneath an embankment and designed structurally to account for soil-structure interaction. These structures are hydraulically and structurally designed to move water, sediment, and debris through roadway embankments.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "culvert"],
  },
  {
    term: "curtain wall",
    definition:
      "A vertical barrier on a bridge, typically positioned perpendicular to the beams, designed to protect the interior of the bridge structure from debris, water, or other external elements. It is commonly used in areas like piers or abutments.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "curve length",
    definition: "The length of a curved section of the roadway or bridge, typically measured along the centerline.",
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },
  {
    term: "curved girders",
    definition:
      "Girders fabricated with a horizontal or vertical curvature to accommodate roadway alignment or aesthetic considerations, requiring specialized design and analysis.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "cut, fill",
    definition:
      "The process of removing soil (cut) or adding material (fill) to adjust the level of the ground to support a structure. In bridge construction, cut and fill are used to level the ground for foundations, approaches, and embankments. This process is crucial in creating a stable base for bridge supports.",
    search: ``,
    discipline: "bridge construction",
    filter: ["design", "materials"],
  },
  {
    term: "cut bank",
    definition: "The outer bank of a meander, where erosion is most active, often forming steep, vertical walls.",
    discipline: "bridge design",
    filter: ["channel", "defects"],
  },
  {
    term: "cyclical loading",
    definition:
      "Repeated or fluctuating stress caused by heavy truck traffic, producing tension and compression in alternating cycles. This type of loading can cause fatigue cracking, often at stress levels below the material’s yield strength, in fatigue-prone areas such as weld terminations and connections. Once fatigue cracks form, continued cycles propagate the cracks and can lead to member failure.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["design", "NSTM"],
  },

  // :::::

  {
    term: "damage inspection",
    definition: "An unscheduled inspection to assess structural damage resulting from environmental factors or human actions.",
    search: ``,
    discipline: "bridge design",
    letter: "letter-jump-d",
    filter: ["bridge", "defects"],
  },
  {
    term: "datum",
    definition:
      "A reference point or surface used for measurement in bridge design and construction. A datum allows engineers to establish consistent and accurate measurements for elevation, alignment, and other key factors. It serves as the baseline for determining the height and location of components.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "dead load",
    definition:
      "The permanent, static load that a structure carries due to its own weight, including the weight of the bridge itself and any other permanent components. Dead loads are critical in bridge design as they must be accounted for in the overall load calculations to ensure stability and safety.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "deck slab",
    definition: "The reinforced concrete slab forming the bridge deck, providing structural support for traffic loads.",
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds"],
  },
  {
    term: "deflection",
    definition:
      "The displacement of a structural element (such as a beam or bridge deck) under load. Excessive deflection can indicate overstressed components or insufficient stiffness.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "deflector plate",
    definition:
      "A plate installed on guardrails or barriers designed to direct or deflect the impact of a vehicle away from a hazard or obstruction. Typically used to redirect a vehicle’s path and reduce the risk of injury or damage during a collision.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "degradation",
    definition:
      "The process of erosion or removal of sediment from the riverbed or streambed, leading to a lowering of the watercourse or shoreline.",
    discipline: "bridge design",
    filter: ["channel", "defects"],
  },
  {
    term: "degree of constraint",
    definition:
      "A measure of how much a material or structural element is restricted from deforming when subjected to stress. Higher constraint results in a more rigid connection, limiting expansion, contraction, bending, and flexing, and often leading to elevated internal stresses. The degree of constraint is influenced by whether the stress state is uniaxial, biaxial, or triaxial, and plays a key role in a material’s ability to deform plastically.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["design", "defects", "NSTM"],
  },
  {
    term: "delamination",
    definition:
      "A separation within concrete that forms parallel to the surface, often due to internal cracking, corrosion of embedded steel, or poor bonding between layers.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "delineators",
    definition:
      "Reflective markers mounted on flexible or rigid posts to guide drivers by indicating road alignment, lane boundaries, or hazards. They are commonly used along curves, ramps, and medians for enhanced nighttime and low-visibility conditions.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "designated lead state",
    definition:
      "The State responsible for reporting the full bridge record for a border bridge. The Designated Lead State and Neighboring State are determined through agreement between the two border States.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "org"],
  },
  {
    term: "designed scour countermeasures",
    definition:
      "Engineered channel armoring specifically designed to address scour vulnerability. These measures use materials like concrete blocks, gabions, or riprap, carefully planned and calculated based on flow rate, water velocity, soil properties, and site conditions to effectively mitigate erosion and protect vulnerable areas.",
    discipline: "bridge design",
    filter: ["bridge", "channel", "components"],
  },
  {
    term: "detention ponds",
    definition:
      "Engineered basins designed to temporarily store stormwater runoff, controlling peak discharge rates and allowing sediment to settle before releasing water at a controlled rate.",
    discipline: "bridge design",
    filter: ["channel", "components", "design", "culvert"],
  },
  {
    term: "deterioration",
    definition:
      "The progressive loss of material integrity caused by chemical reactions, physical wear, environmental exposure, or mechanical stress, often leading to reduced performance or structural capacity.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "diagonal member",
    definition:
      "A structural component that forms an angled connection between other members, primarily in trusses and bracing systems. It provides stability by distributing loads and resisting lateral forces to maintain the bridge’s strength and rigidity. In a simple truss, such as a Pratt truss, members that run upward and outward from midspan, as well as opposing diagonals at midspan, are typically NSTMs.",
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "diaphragm",
    definition: "A structural element that distributes loads across the width of a bridge, preventing distortion or movement of the deck.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "differential settlement",
    definition: "Uneven vertical movement of foundations or supports that causes distortion, cracking, or misalignment in the supported structure.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "defects"],
  },
  {
    term: "discharge",
    definition:
      "The flow rate of water passing through a given point, typically measured in cubic feet per second (cfs) or cubic meters per second (cms). In the context of bridges, discharge refers to the volume of water that flows under or around a bridge, affecting its stability and potential for flooding.",
    search: ``,
    discipline: "bridge hydraulics",
    filter: ["channel"],
  },
  {
    term: "discontinuity",
    definition:
      "An interruption in the material or geometry of a structure, such as a hole or crack, which can create stress concentrations and affect performance or strength.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["defects", "NSTM"],
  },
  {
    term: "distortion-induced fatigue",
    definition:
      "Fatigue caused by unintended deformation between connected parts, typically due to differences in stiffness or restraint. It results from out-of-plane movement or secondary forces rather than direct axial stress. This can lead to localized bending, cracking, or structural distortion, often at cross frames, diaphragms, or skewed connections where geometry drives uneven response under load.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects", "design", "NSTM"],
  },
  {
    term: "divided highway",
    definition: "A highway with separated roadways for traffic traveling in opposite directions.",
    search: ``,
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "double deck bridge",
    definition:
      "A bridge consisting of two decks, tiers, or levels. These bridges may incorporate highway lanes on both levels or highway lanes on one level and other transportation modes on the other level.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "doubler plate",
    definition:
      "A steel plate welded to the web of a girder to add thickness and strength at high-stress areas such as connections. It helps prevent web buckling and increases load-carrying capacity.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM", "welds"],
  },
  {
    term: "downspout",
    definition: "A drainage component that directs water from the bridge deck to a designated drainage system.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds"],
  },
  {
    term: "downstream",
    definition:
      "The direction in which water flows away from the source or higher elevation. In engineering, it refers to structures, impacts, or conditions occurring after the point of interest in the flow path.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "compounds"],
  },
  {
    term: "drilled shaft",
    definition:
      "A structural element constructed using an auger to drill into a soil mass to remove soil and then filling the drilled void with concrete. Drilled shafts used for retaining wall construction are typically built as Secant Walls (consisting of overlapping or intersecting drilled shafts), Soldier Walls (consisting of spaced drilled shafts with lagging), or Tangent Walls (consisting of drilled shafts placed side-by-side and touching one another, but not overlapping).",
    search: `What is "Drilled Shaft" in retaining wall design?`,
    discipline: "retaining wall design",
    filter: ["bridge", "design"],
  },
  {
    term: "driver expectation",
    definition:
      "Relates to the likelihood that a driver will respond to common situations in predictable ways that the driver has found successful in the past. A driver’s readiness to respond to situations, events, and information in predictable and successful ways.",
    search: ``,
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "drop structures",
    definition: "A river training feature that is placed in the channel to control the flow of water and reduce scouring effects on the streambed.",
    discipline: "bridge design",
    filter: ["channel", "components"],
  },
  {
    term: "ductile failure",
    definition:
      "A type of material failure characterized by significant plastic deformation before fracture, often preceded by necking in tensile specimens.",
    search: ``,
    discipline: "materials engineering",
    filter: ["design", "defects", "NSTM"],
  },
  {
    term: "ductility",
    definition:
      "The ability of a material to undergo significant plastic deformation before rupture, allowing it to be drawn into wires or undergo other shape changes without breaking.",
    search: ``,
    discipline: "materials engineering",
    filter: ["bridge", "design", "NSTM"],
  },
  {
    term: "dye penetrant testing (PT)",
    definition: "A non-destructive method where a liquid dye is applied to a weld, revealing surface cracks and defects through capillary action.",
    discipline: "bridge design",
    filter: ["acronyms", "NDT"],
  },

  // :::::

  {
    term: "earthwork",
    definition:
      "The process of moving, excavating, or compacting soil, rock, or other materials to prepare a site for construction or engineering projects.",
    search: ``,
    discipline: "bridge design",
    letter: "letter-jump-e",
    filter: ["design"],
  },
  {
    term: "east / west / north / south",
    definition:
      "Cardinal directions used for general orientation or description. Not capitalized unless part of a proper noun or at the beginning of a sentence.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },
  {
    term: "east side / west side / north side / south side",
    definition:
      "Directional terms for locations relative to a bridge or other structure, typically based on plan view orientation rather than true cardinal directions. They are not capitalized or combined unless they are part of a proper noun (e.g., Eastside Park).",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "compounds", "roadway"],
  },
  {
    term: "eastbound (EB) / westbound (WB) / northbound (NB) / southbound (SB)",
    definition:
      "Indicate movement in the specified direction, typically referring to traffic lanes or transportation routes. Not capitalized unless they begin a sentence.",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms", "design", "compounds", "roadway"],
  },
  {
    term: "eddy current testing (ET)",
    definition:
      "An electromagnetic NDT technique used to detect surface and near-surface defects in conductive materials by measuring changes in electrical resistance.",
    discipline: "bridge design",
    filter: ["acronyms", "NDT"],
  },
  {
    term: "efflorescence",
    definition:
      "A deposit on concrete, brick, stone, or mortar caused by crystallization of carbonates brought to the surface by moisture in the masonry or concrete. Efflorescence is a combination of calcium carbonate leached out of the cement paste and other recrystallized carbonate and chloride compounds.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "elastic deformation",
    definition:
      "A reversible change in the shape of a material under stress, where the material returns to its original shape upon removal of the load.",
    search: ``,
    discipline: "materials engineering",
    filter: ["design", "defects", "NSTM"],
  },
  {
    term: "element level bridge inspection data",
    definition:
      "Quantitative condition assessment data, collected during bridge inspections, that indicates the severity and extent of defects in bridge elements.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "elevated platform",
    definition:
      "A fixed or mobile work surface used to provide safe access to elevated bridge components during inspection, maintenance, or repair operations.",
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "elevation",
    definition:
      "The vertical height of a point or structure relative to a given reference, often the mean sea level or a local datum. Elevation is a key consideration in bridge design, ensuring that the structure is above potential flood levels and aligns with surrounding landforms. It affects the overall profile of the bridge.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "elevation view",
    definition:
      "A vertical view from architectural drawings that shows the height, facade, and exterior details of a structure. It highlights the structure’s exterior appearance and vertical dimensions.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "embankment",
    definition:
      "A raised mass of compacted soil built above natural ground to support a roadway, structure, or grade change, often placed around buried components like culverts for stability and load distribution.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "channel", "design", "culvert", "wall"],
  },
  {
    term: "eminent domain",
    definition:
      "The legal power to compel the sale of private property for public use, typically with compensation determined by fair market value and due process protections.",
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },
  {
    term: "end treatment (culvert)",
    definition:
      "Specially designed components at the ends of a culvert that help direct water flow, stabilize the culvert, and protect the surrounding area from erosion or damage.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "end treatment (railing)",
    definition: "Specially designed components at the end of guardrails that minimize the risk of injury or vehicle damage during impact.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "engineered wood",
    definition:
      "Products that utilize veneers, plywood, reconstituted wood panel products, or engineered wood assemblies. Some engineered wood products include glued laminated timber, I-joists, and laminated veneer lumber.",
    search: ``,
    discipline: "bridge design",
    filter: ["materials"],
  },
  {
    term: "epoxy",
    definition:
      "A strong, durable adhesive or coating made from synthetic resins that hardens when mixed with a curing agent. It’s commonly used in construction to bond, seal, or protect materials like concrete and steel.",
    discipline: "bridge design",
    filter: ["materials"],
  },
  {
    term: "epoxy coated rebar",
    definition:
      "A steel reinforcing bar coated with a layer of epoxy to protect it from corrosion. The coating acts as a barrier between the steel and moisture or chloride exposure, making it especially useful in environments like bridges where deicing salts or marine conditions can accelerate rust.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "epoxy overlay",
    definition:
      "A thin deck overlay consisting of epoxy resin and aggregate, applied to concrete bridge decks to enhance skid resistance, protect against moisture infiltration, and extend service life by preventing chloride penetration and surface wear.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "erosion",
    definition:
      "The gradual removal of soil, rock, or other surface materials by natural forces such as wind, water, or ice. Scour is a type of erosion.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "defects"],
  },
  {
    term: "exfiltration",
    definition:
      "The movement of water from within a structure into surrounding soil through cracks, joints, or other unintended openings, potentially causing erosion, soil loss, or structural instability.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "culvert", "defects"],
  },
  {
    term: "expansion",
    definition:
      "The increase in size of a material or structural component caused by environmental factors such as heat, moisture, or chemical changes. In bridges, expansion is typically accommodated with joints or bearings to prevent cracking, buckling, or other damage.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "joints", "materials"],
  },
  {
    term: "expansion joint",
    definition:
      "A joint designed to accommodate movement in a structure due to thermal expansion, contraction, or other forces, preventing damage by allowing parts of the structure to shift independently.",
    discipline: "bridge design",
    filter: ["bridge", "components", "joints"],
  },
  {
    term: "extrados",
    definition: "The outer surface of the arch ring, which is under tension and provides the structural shape for the arch.",
    discipline: "bridge design",
    filter: ["bridge", "components", "culvert"],
  },
  {
    term: "eyebar",
    definition:
      "A flat steel bar with forged or machined holes at each end, used as a tension member in bridges. Common in older trusses and suspension bridges, eyebars are often grouped in parallel sets to share load. The net section of the eyebar head is classified as AASHTO fatigue category E.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds", "NSTM"],
  },

  // :::::

  {
    term: "fatigue",
    definition:
      "A gradual weakening of metal caused by repeated loading, often at stress levels well below the material's yield strength. This can lead to small cracks that grow with each cycle and eventually cause sudden failure. Fatigue is a major concern for welded details and attachments on bridges subjected to high load cycles from traffic, wind, or vibrations. Inspectors check for early signs of fatigue to prevent structural failure, especially in bridges designed before 1974 or that have poor fatigue details.",
    search: ``,
    discipline: "bridge design",
    letter: "letter-jump-f",
    filter: ["bridge", "design", "defects", "NSTM"],
  },
  {
    term: "fatigue details",
    definition:
      "Design features or fabrication choices that influence how a bridge component resists fatigue. Poor fatigue details include sharp corners, holes, weld terminations, and attachments that create stress concentrations. These areas are more likely to develop cracks under repeated loading. Modern designs use improved fatigue details, while bridges designed before 1974 may contain high-risk configurations. Bridges with poor fatigue details require a hands-on inspection to check for crack initiation.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "design", "defects", "NSTM", "welds"],
  },
  {
    term: "fatigue categories",
    definition:
      "A classification of bridge materials and design details based on their resistance to fatigue. AASHTO assigns each of these fatigue details to a fatigue category to predict how it performs under repeated load cycles. Lower categories, such as E or E', represent weaker details, while stronger ones fall into categories like A or B. These categories help engineers and inspectors identify high-risk areas for inspection and mitigation.",
    search: ``,
    discipline: "FHWA",
    filter: ["design", "defects", "NSTM"],
  },
  {
    term: "fatigue crack",
    definition:
      "A crack that forms in a material due to repeated load cycles below the material's yield strength. Fatigue cracks typically start small and grow progressively under cyclical loading, eventually leading to failure if not detected and repaired. Detecting and monitoring these cracks is critical during bridge inspections.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects", "welds"],
  },
  {
    term: "fatigue life",
    definition:
      "The estimated number of load cycles a material or detail can withstand before a fatigue crack begins to form. Fatigue life is an important factor in bridge design and maintenance because it helps predict when a component may become vulnerable to cracking. Understanding this lifespan allows engineers and inspectors to plan inspections, maintenance, or replacements before fatigue damage threatens structural safety. Fatigue life can be estimated using S-N curves defined by AASHTO, where S is the stress range and N is the number of load cycles to failure.",
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "Federal Information Processing Series (FIPS)",
    definition:
      "A system of numeric and/or alphabetic coding issued by the National Institute of Standards and Technology (NIST), an agency of the US Department of Commerce. FIPS codes are assigned for a variety of geographic entities including American Indian and Alaska Native Areas, Hawaiian home lands, congressional districts, counties, county subdivisions, metropolitan areas, places, and states. FIPS codes were discontinued by NIST in 2005, but the Census Bureau continues to maintain and issue codes for the geographic entities covered.",
    source: "http://www.fhwa.dot.gov/bridge/nbi.cfm",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms"],
  },
  {
    term: "federal lands",
    definition:
      "Lands under the jurisdiction of Federal agencies. FHWA’s Federal Land Management Agency partners currently include: National Park Service (NPS); USDA Forest Service (Forest Service); U.S. Fish and Wildlife Service (USFWS); Bureau of Indian Affairs (BIA) and Tribal Governments; Bureau of Land Management (BLM); Department of Defense (DOD); U.S. Army Corps of Engineers (USACE); and Bureau of Reclamation (BOR).",
    source: "https://highways.dot.gov/federal-lands/about",
    search: ``,
    discipline: "bridge design",
    filter: ["org"],
  },
  {
    term: "ferry transfer bridge",
    definition: "A bridging structure that enables vehicular movement from a dock or approach roadway to a ferry.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "FHWA (Federal Highway Administration)",
    definition:
      "A division of the U.S. Department of Transportation responsible for regulating and funding national highway programs. It establishes policies, safety standards, and research initiatives that influence bridge design, inspection, and rehabilitation, ensuring structural integrity and long-term performance of transportation infrastructure.",
    discipline: "bridge design",
    filter: ["acronyms", "org"],
  },
  {
    term: "fiber reinforced polymer composite (FRP)",
    definition:
      "Also known as fiberglass reinforced plastic, FRP is a composite made from glass fiber or carbon fiber reinforcement in a plastic (polymer) matrix. With reinforcement of the plastic matrix, a wide variety of physical strengths and properties can be designed into the material. Additionally, the type and configuration of the reinforcement can be selected, along with the type of polymer and additives within the matrix.",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms", "culvert", "materials"],
  },
  {
    term: "field weld",
    definition:
      "A weld performed on-site during construction or repair, as opposed to being fabricated in a shop. Field welding requires special procedures to manage environmental conditions and ensure weld quality.",
    discipline: "bridge design",
    filter: ["design", "welds"],
  },
  {
    term: "fillet weld",
    definition:
      "A triangular cross-section weld joining two surfaces at an angle, commonly used in bridge fabrication for attaching stiffeners, plates, and structural elements.",
    discipline: "bridge design",
    filter: ["welds"],
  },
  {
    term: "finite element models (FEA)",
    definition:
      "A computerized method that breaks a structure into small parts to simulate how it behaves under loads. It is used to predict stress, deformation, and failure in complex shapes and connections.",
    search: ``,
    discipline: "structural analysis",
    filter: ["acronyms", "design", "NSTM"],
  },
  {
    term: "flange",
    definition:
      "A projecting edge or lip that extends from a structural element, typically a beam or girder. The flange provides additional strength and stability to the element by resisting bending and shear forces. In bridges, flanges are commonly found on I-beams and other structural members.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "flare",
    definition:
      "A curved or angled section of a guardrail system at the end of a barrier, designed to gradually direct traffic away from the hazard or prevent vehicles from impacting the end of the guardrail. Commonly used at the ends of roadways, ramps, or bridges for safer transitions.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "flexible culvert",
    definition:
      "A pipe or structural conduit that depends on interaction with surrounding compacted soil to resist loads, deforming slightly under pressure to transfer force through the soil-structure system rather than relying solely on its own rigidity.",
    search: ``,
    discipline: "bridge design",
    filter: ["culvert"],
  },
  {
    term: "flexure",
    definition:
      "The bending of a structural element subjected to load, causing tensile and compressive stresses. In bridge components, flexural behavior is critical in designing beams, girders, and decks to resist failure and ensure long-term performance.",
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "flexure cracking",
    definition:
      "Cracks that develop in concrete elements due to tensile stresses exceeding material strength under bending loads. These cracks typically appear perpendicular to the span and indicate areas where reinforcement may be insufficient or deterioration is progressing.",
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "floating bridge",
    definition: "A bridge supported by floating on pontoons moored to the lakebed or riverbed; a portion may be removable to facilitate navigation.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "floorbeam",
    definition:
      "A transverse beam used in bridge superstructures to support stringers and deck elements, transferring those loads to longitudinal girders or trusses. Floorbeams are positioned perpendicular to the direction of traffic and are typically spaced at regular intervals. In bridges with a defined floor system, floorbeams are crucial for tying together the structure, ensuring lateral stability, and efficiently spreading loads across multiple girders. They are most common in truss bridges, plate girder bridges, and older steel multi-girder systems. Unlike girders and stringers, which run longitudinally with the span, floorbeams run transversely across the span and often act as a platform for other framing components.",
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds", "NSTM"],
  },
  {
    term: "floodplain",
    definition:
      "The flat, often expansive area adjacent to a channel that is subject to periodic flooding, typically formed by sediment deposition during high-water events.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "compounds"],
  },
  {
    term: "flow Line",
    definition: "The lowest point within a channel, pipe, or culvert where water is expected to flow under normal conditions.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "compounds"],
  },
  {
    term: "footing",
    definition: "The foundation element of a bridge that distributes loads to the ground.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "fracture",
    definition:
      "A type of brittle failure that develops in a material under stress, causing a sudden loss of structural integrity. Fractures typically occur in critical components due to excessive loading, poor fatigue details, unmitigated fatigue cracks, extreme environmental conditions, or a combination of these factors. Detecting defects that can lead to fractures is essential to prevent structural failure. Fractured steel will display chevron patterns along the break surface that point back to where the fracture initiated.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects", "NSTM"],
  },
  {
    term: "fracture critical member (FCM)",
    definition:
      "A bridge component whose failure would lead to the collapse of the entire structure. FCMs are typically non-redundant elements that do not have backup support in case of failure. These members require special attention during inspections and maintenance to ensure the safety of the bridge. FCMs are now called Nonredundant Steel Tension Members (NSTMs).",
    search: ``,
    discipline: "bridge inspection",
    filter: ["acronyms", "bridge", "components", "NSTM"],
  },
  {
    term: "fracture toughness",
    definition:
      "The ability of a material containing a crack to resist fracture, indicating the material's capacity to withstand stress in the presence of flaws.",
    search: ``,
    discipline: "materials engineering",
    filter: ["design", "NSTM"],
  },
  {
    term: "freeboard",
    definition: "The clearance between the bottom of the superstructure and the design high-water elevation.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "compounds", "design"],
  },
  {
    term: "friable material",
    definition:
      "A material that is easily crumbled or broken, especially when dry, often referring to substances like asbestos that pose health risks when disturbed.",
    discipline: "bridge design",
    filter: ["design", "materials"],
  },
  {
    term: "functionally obsolete",
    definition:
      "A classification for structures that no longer meet current design standards for width, clearance, or capacity, despite being safe for limited use.",
    discipline: "bridge design",
    filter: ["bridge", "design"],
  },

  // :::::

  {
    term: "gabion",
    definition:
      "A cage, wire container, cylinder, or similar type box filled with rocks, broken concrete, or granular soil used in retaining wall and erosion control applications.",
    search: `What is "Gabion" in retaining wall design?`,
    discipline: "retaining wall design",
    letter: "letter-jump-g",
    filter: ["channel", "components", "wall"],
  },
  {
    term: "gabion mattresses",
    definition: "A riverbank protection system made of mesh baskets filled with rocks, providing stability and preventing erosion.",
    discipline: "bridge design",
    filter: ["channel", "components", "wall"],
  },
  {
    term: "galvanization",
    definition:
      "The process of applying a protective zinc coating to steel or iron to prevent corrosion by acting as a physical barrier and providing sacrificial protection through electrochemical means.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "materials"],
  },
  {
    term: "galvanized steel",
    definition:
      "Steel that has been coated with a layer of zinc to protect it from corrosion. The zinc coating contributes a sacrificial anode to the steel, corroding first and protecting the underlying steel by redirecting corrosion away from it. Zinc corrosion typically appears as white rust, which forms when the zinc reacts with moisture, oxygen, and contaminants. Galvanized steel is commonly used in bridge components for its durable corrosion resistance and reduced maintenance needs compared to uncoated steel.",
    discipline: "bridge design",
    filter: ["materials"],
  },
  {
    term: "geotextile",
    definition:
      "A synthetic material used in geotechnical engineering to reinforce soil, separate materials, or provide drainage. Geotextiles are often used in bridge approaches, embankments, and foundations to improve the stability of the structure. They help control erosion and prevent soil movement under load.",
    search: ``,
    discipline: "bridge construction",
    filter: ["channel", "components", "design", "materials"],
  },
  {
    term: "girder",
    definition:
      "A longitudinal structural member in a bridge superstructure that carries the main structural loads and transfers them to piers or abutments. They are generally the largest structural members in the superstructure and may support floorbeams, depending on the bridge type. Girders are typically made from rolled or built-up steel, prestressed concrete, or composite sections.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },

  {
    term: "grade",
    definition:
      "The slope or incline of a road, bridge, or other surface. In bridge construction, grade refers to the angle of the roadway relative to the horizontal plane. Proper grading ensures water drainage and provides safe, efficient movement for vehicles.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },
  {
    term: "gravity wall",
    definition:
      "A wall typically built with stone masonry, mass concrete, or other heavy material that depends on its overall mass, or weight, to resist earth pressure from behind.",
    search: `What is "Gravity Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    filter: ["wall"],
  },
  {
    term: "grommets",
    definition:
      "Rubber or metal rings used to seal and protect cables or fasteners passing through holes in bridge components, preventing wear and moisture intrusion.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "groundwater",
    definition: "Water located beneath the Earth's surface in soil pores and rock formations, supplying wells and springs.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "compounds", "design"],
  },
  {
    term: "grout-filled mats",
    definition: "A protective matting system filled with grout to stabilize riverbanks and prevent erosion.",
    discipline: "bridge design",
    filter: ["channel", "components", "compounds"],
  },
  {
    term: "grouted riprap",
    definition: "A type of riprap that is bonded together with grout to form a more stable, cohesive surface.",
    discipline: "bridge design",
    filter: ["channel", "components", "compounds", "materials"],
  },
  {
    term: "guardrail post",
    definition: "Vertical supports that hold the rail in place, typically made of steel, wood, or concrete and anchored in the ground.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "guardrail rail",
    definition:
      "The main horizontal part of the guardrail that absorbs the force of a collision. It can be W-beam, box beam, or thrie beam, depending on the type.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "guide banks",
    definition: "A type of river training countermeasure designed to direct flow away from the banks and toward the center of the channel.",
    discipline: "bridge design",
    filter: ["channel", "components"],
  },
  {
    term: "guide rail brackets",
    definition: "Attach the rail to the posts, allowing for flexing and movement to absorb impact.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "gusset plate",
    definition:
      "Flat steel connector used to transfer force between intersecting structural members, often designed to handle combined axial, shear, and bending stresses at joints.",
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },

  // :::::

  {
    term: "hairline cracks",
    definition:
      "Very fine, narrow cracks typically less than or equal to 0.016 inches wide that appear in the surface of concrete. These cracks are often the result of shrinkage, temperature changes, or minor surface stress. While generally not structurally significant, hairline cracks may allow water infiltration, which could lead to further deterioration if not addressed.",
    search: ``,
    discipline: "bridge deck maintenance",
    letter: "letter-jump-h",
    filter: ["defects"],
  },
  {
    term: "hands-on",
    definition:
      "An approach or technique involving direct involvement with physical tasks rather than relying on theoretical knowledge or remote actions. In the context of bridge inspections, a hands-on approach includes physically examining components, performing tests, and conducting repairs rather than relying on visual or computational analysis alone.",
    search: ``,
    discipline: "bridge inspection",
    filter: ["design", "compounds", "NSTM"],
  },
  {
    term: "hands-on inspection",
    definition:
      "Inspection within arm’s length of the member. Inspection uses visual techniques that may be supplemented by nondestructive evaluation techniques.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "compounds", "NSTM"],
  },
  {
    term: "hanger",
    definition:
      "A structural element used to support a bridge component, typically a suspension or cable-stayed bridge's cable or beam. The hanger transfers the load from the bridge deck to the main supporting cables or structure. They are designed to withstand tensile forces and are usually made from steel or other durable materials.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
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
    term: "headcutting",
    definition:
      "The erosion of the upstream end of a channel, often occurring when a sudden drop in elevation (such as a waterfall) leads to rapid erosion and deepening.",
    discipline: "bridge design",
    filter: ["channel", "compounds", "defects"],
  },
  {
    term: "headwall",
    definition: "A retaining wall at the end of a culvert or bridge opening that stabilizes the structure and prevents erosion.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds", "culvert"],
  },
  {
    term: "heat-affected zone (HAZ)",
    definition:
      "The portion of base metal adjacent to a weld that undergoes microstructural changes due to welding heat, affecting mechanical properties.",
    discipline: "bridge design",
    filter: ["acronyms", "welds"],
  },
  {
    term: "heat-treated steel",
    definition:
      "Steel that undergoes heat treatment to increase hardness and strength, used in critical bridge components. Can be prone to brittleness if not properly tempered.",
    discipline: "bridge design",
    filter: ["materials"],
  },
  {
    term: "heave",
    definition:
      "The upward movement or displacement of a bridge or road surface, typically caused by soil expansion or freezing. Heave can lead to misalignment of bridge components and affect the ride quality of the bridge deck. It is usually related to changes in soil moisture or temperature.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "high performance steel (HPS)",
    definition:
      "A specialized grade of steel designed for bridges that offers improved weldability, toughness, and corrosion resistance compared to conventional high-strength steel. It extends service life and reduces maintenance needs.",
    search: ``,
    discipline: "materials engineering",
    filter: ["acronyms", "materials"],
  },
  {
    term: "high-strength low-alloy (HSLA) steel",
    definition:
      "A type of steel with added alloying elements that enhance strength without increasing weight. Can be sensitive to welding procedures and may require preheating to prevent cracking.",
    discipline: "bridge design",
    filter: ["acronyms", "materials"],
  },
  {
    term: "high-strength steel",
    definition:
      "A type of steel with greater yield strength than standard structural steel, allowing for lighter and more efficient designs. It is commonly used in bridge components where reduced weight or higher load capacity is needed.",
    search: ``,
    discipline: "materials engineering",
    filter: ["materials"],
  },
  {
    term: "highway",
    definition:
      "The term 'highway' includes: A) a road, street, and parkway; B) a right-of-way, bridge, railroad-highway crossing, tunnel, drainage structure, sign, guardrail, and protective structure, in connection with a highway; and C) a portion of any interstate or international bridge or tunnel and the approaches thereto, the cost of which is assumed by a State transportation department, including such facilities as may be required by the United States Customs and Immigration Services in connection with the operation of an international bridge or tunnel.",
    search: ``,
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "Highway Performance Monitoring System (HPMS)",
    definition:
      "A national level highway information system that includes data on the extent, condition, performance, use, and operating characteristics of the nation's highways.",
    source: "http://www.fhwa.dot.gov/policyinformation/hpms/fieldmanual/",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms"],
  },
  {
    term: "historic bridge",
    definition:
      "A bridge or structure recognized for its significant historical, cultural, or architectural value. Historic bridges are typically evaluated based on factors such as age, design, construction method, and contribution to the community or transportation history. They are often subject to preservation guidelines to maintain their integrity while ensuring safety. Though they may not always meet modern engineering standards, they are carefully monitored and protected to preserve their heritage for future generations.",
    search: ``,
    discipline: "bridge preservation",
    filter: ["bridge", "design"],
  },
  {
    term: "honeycombing",
    definition:
      "The appearance of voids or gaps within concrete due to improper mixing or poor compaction. It often occurs near the surface of poured concrete.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "horizontal alignment",
    definition: "The layout of the roadway in the horizontal plane, including curves, tangents, and transitions.",
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },
  {
    term: "horizontal alignment signs",
    definition:
      "A type of warning sign that alerts drivers to upcoming changes in roadway direction, such as curves, turns, or winding sections. They provide advance notice to help drivers safely navigate horizontal shifts in alignment. Common symbols include curve arrows, chevrons, and winding road icons, often paired with advisory speed signs. These signs also help assess the approach roadway alignment at a bridge.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "horizontal curve radius",
    definition: "The radius of a curve in the roadway or bridge, determining the sharpness or gentleness of the curve.",
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },
  {
    term: "hot mix asphalt (HMA)",
    definition: "A combination of asphalt binder and aggregates heated and mixed to form a durable pavement material.",
    discipline: "bridge design",
    filter: ["acronyms", "materials"],
  },
  {
    term: "hydraulics",
    definition:
      "The study of fluid behavior in motion, focusing on the forces and flow patterns of water through channels, around obstacles, and within confined systems.",
    discipline: "bridge design",
    filter: ["channel", "design"],
  },
  {
    term: "hydraulic review",
    definition:
      "A review by a person qualified to evaluate the field-observed hydraulic conditions and make a determination of the impacts of the conditions on the performance of the channel, channel protection, or when working with structural staff, determine the scour vulnerability of a bridge member or entire bridge. Hydraulic reviews may include a review of the field inspection notes and photographs, review of as-built plans, scour appraisals, and scour POAs, or performance of a hydraulic analysis as deemed appropriate.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "channel", "design"],
  },
  {
    term: "hydrology",
    definition:
      "The science of water occurrence, distribution, and movement across Earth's surface and subsurface, including rainfall, runoff, infiltration, and storage behavior.",
    discipline: "bridge design",
    filter: ["channel", "design"],
  },

  // :::::

  {
    term: "I-beam",
    definition:
      "A structural beam with a cross-section resembling the letter 'I.' I-beams are commonly used in bridge design due to their strength and efficiency in carrying loads. The vertical web resists shear forces, while the horizontal flanges resist bending moments.",
    search: ``,
    discipline: "bridge design",
    letter: "letter-jump-i",
    filter: ["bridge", "components", "compounds"],
  },
  {
    term: "in-depth inspection",
    definition:
      "A close-up, detailed inspection of one or more bridge members located above or below water, using visual or nondestructive evaluation techniques as required to identify any deficiencies not readily detectable using routine inspection procedures. Hands-on inspection may be necessary at some locations. In-depth inspections may occur more or less frequently than routine inspections, as outlined in bridge-specific inspection procedures.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "in-service bridge",
    definition:
      "A bridge that is currently open to traffic and subject to ongoing inspection, maintenance, and operational loads. Its condition must be regularly evaluated to ensure structural safety and compliance with performance standards.",
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "Indiana Type 5 aluminum bridge railing",
    definition:
      "An aluminum bridge railing system used in Indiana, featuring horizontal aluminum rails supported by vertical posts. Designed for durability, corrosion resistance, and visibility, it provides both vehicular and pedestrian protection while maintaining a lightweight structure.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "infiltration",
    definition:
      "The entry of water or surrounding material into a culvert through joints, cracks, or other unintended openings, potentially leading to internal erosion, blockages, or structural degradation",
    search: ``,
    discipline: "bridge design",
    filter: ["culvert", "defects"],
  },
  {
    term: "infiltration systems",
    definition:
      "Stormwater management solutions designed to allow runoff to percolate into the soil, reducing surface water flow and promoting groundwater recharge. Examples include permeable pavement, infiltration trenches, and dry wells.",
    discipline: "bridge design",
    filter: ["channel", "design"],
  },
  {
    term: "inherent defect",
    definition:
      "Not indicative of damage or deterioration but is either a characteristic of the material or the result of normal construction practices. Examples include insignificant width fabrication, shrinkage, and temperature cracks, pop-outs, or shallow edge chips and spalls.",
    search: `What is an "Inherent Defect" in bridge design?`,
    discipline: "bridge design",
    order: 1,
    filter: ["design", "defect classes"],
  },
  {
    term: "initial inspection",
    definition:
      "The first inspection of a new, replaced, or rehabilitated bridge. This inspection serves to record required bridge inventory data, establish baseline conditions, and establish the intervals for other inspection types.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "design"],
  },
  {
    term: "inlet",
    definition:
      "The upstream entry point of a culvert where flow first enters the structure, often designed with features to guide water and reduce erosion.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "design", "culvert"],
  },
  {
    term: "insert plate",
    definition:
      "A steel plate added into a structural member, often to thicken a flange or web, allowing for stronger welds or bolted connections. It helps transfer loads more effectively without changing the outer shape.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "inspection date",
    definition: "The date on which the field portion of the bridge inspection is completed.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "inspection due date",
    definition: "The last inspection date plus the current inspection interval.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "inspection report",
    definition:
      "The document which summarizes the bridge inspection findings, recommendations, and identifies the team leader responsible for the inspection and report.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "instability",
    definition: "The condition in which a channel or bank is prone to failure due to erosion, over saturation, or improper structural design.",
    discipline: "bridge design",
    filter: ["channel", "design", "defects"],
  },
  {
    term: "integral abutment",
    definition:
      "A type of abutment that is directly connected to the bridge deck, eliminating the need for expansion joints between the deck and the abutment. Integral abutments allow for movement due to thermal expansion and contraction, reducing maintenance needs and improving structural integrity.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "design", "joints"],
  },
  {
    term: "integral abutment (IA or 1A) joint",
    definition:
      "A design where the abutment and superstructure are connected without a physical joint, often functioning as a construction joint. While it minimizes maintenance, it may not accommodate thermal expansion or contraction, potentially leading to cracking and structural deformation over time.",
    discipline: "bridge design",
    filter: ["acronyms", "joints"],
  },
  {
    term: "interior piers",
    definition:
      "The piers located between the abutments that support the span of a bridge. Interior piers are typically used in multi-span bridges and are designed to withstand compressive forces from the superstructure. Proper design of interior piers is essential for maintaining bridge stability and load distribution.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "intermittent welds / stitch welds",
    definition:
      "A weld applied in separate, evenly spaced segments along a joint rather than one continuous line. This pattern reduces heat and material use but creates stress points at each segment end. These stress points increase the risk of fatigue cracking. Intermittent welds are an uncategorized fatigue detail. When aligned parallel to the main stress direction, they likely fall under AASHTO fatigue category E. When placed perpendicular to the stress, they are classified as category C'.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "NSTM", "welds"],
  },
  {
    term: "internal redundancy",
    definition:
      "A redundancy that exists within a primary member cross-section without load path redundancy, such that fracture of one component will not propagate through the entire member, is discoverable by the applicable inspection procedures, and will not cause a portion of or the entire bridge to collapse.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "NSTM"],
  },
  {
    term: "intersecting welds",
    definition:
      "Two or more welds that meet or cross at a single point, often creating a stress concentration. Improper layout or sequencing can lead to cracking or reduced fatigue resistance. Intersecting welds are also prone to constraint-induced fracture due to restrained shrinkage or thermal movement.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects", "NSTM", "welds"],
  },
  {
    term: "intrados",
    definition: "The inner surface of the arch ring, which is in compression and typically carries the load from the bridge deck.",
    discipline: "bridge design",
    filter: ["bridge", "components", "culvert"],
  },
  {
    term: "inventory data",
    definition: "All data reported to the National Bridge Inventory in accordance with the Specifications for the National Bridge Inventory.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "design"],
  },
  {
    term: "invert",
    definition:
      "The lowest interior surface of a pipe or culvert, where water flows and sediment may accumulate, typically following the designed slope for hydraulic efficiency.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "components", "culvert"],
  },
  {
    term: "iron",
    definition:
      "A naturally occurring metal that is strong, heavy, and relatively easy to shape when heated. It forms the base for many alloys like steel and was used in early bridges before modern steel became common. Pure iron is soft but gains strength when combined with small amounts of carbon or other elements.",
    search: ``,
    discipline: "bridge design",
    filter: ["materials"],
  },

  {
    term: "isolated defects",
    definition: "Defect is visible in one or few incident locations.",
    search: `What are "Isolated Defects" in bridge inspection?`,
    discipline: "bridge inspection",
    order: 5,
    filter: ["defect classes"],
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
    term: "iterate",
    definition:
      "A process of repeating a procedure or calculation, typically with updated inputs, to approach a desired result, refine accuracy, or solve complex problems through successive approximation.",
    definition:
      "A method of refining ideas or solutions through deliberate repetition, where each pass builds on the last to sharpen focus, enhance clarity, or drive innovation.",
    discipline: "bridge design",
  },

  // :::::

  {
    term: "jacking frame",
    definition:
      "A diaphragm, typically found on a steel beam or steel girder bridge, designed to accommodate the loads required to support the bridge during bearing replacement. These are typically only included at support locations and will be more robust than a typical diaphragm.",
    discipline: "bridge design",
    letter: "letter-jump-j",
    filter: ["bridge", "components", "design"],
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
    term: "jobsite",
    definition: "A location where construction, maintenance, or engineering work is actively taking place.",
    search: ``,
    discipline: "transportation engineering",
    filter: ["compounds", "design"],
  },
  {
    term: "joint",
    definition:
      "A location where two structural elements or sections of material meet, often visible as a seam. Joints may be designed to accommodate movement, transfer loads, or simply connect different construction stages. Common examples include expansion joints, construction joints, and cold joints, each serving a specific purpose based on material behavior and design intent.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "culvert", "joints"],
  },

  {
    term: "joint sealant",
    definition: "A material used to fill and seal joints to prevent water infiltration and debris accumulation.",
    discipline: "bridge design",
    filter: ["joints", "materials"],
  },

  // :::::

  {
    term: "keystone",
    definition:
      "The central, topmost stone or concrete block of an arch that locks the other blocks or sections in place, crucial for the arch’s structural integrity.",
    search: ``,
    discipline: "arch design",
    letter: "letter-jump-k",
    filter: ["bridge", "components", "compounds", "culvert"],
  },
  {
    term: "kinked girders",
    definition: "A girder with a longitudinal axis that changes orientation at a location along the girder length excluding at the supports.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },

  // :::::

  {
    term: "lagging",
    definition:
      "Structural members that are typically timber, steel, or concrete that are installed behind, between or in front of piles or drilled shafts to support and retain the soil material between spaced piles. Timber lagging is typically used for temporary construction while steel or concrete lagging is typically used for permanent construction.",
    search: `What is "Lagging" in retaining wall design?`,
    discipline: "retaining wall design",
    letter: "letter-jump-l",
    filter: ["design", "wall"],
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
    term: "LaPorte",
    definition:
      "The INDOT district name and county name are written as one word with a capital P: LaPorte. The city name is written as two words: La Porte.",
    search: `INDOT LaPorte District`,
    discipline: "bridge design",
    link: `https://entapps.indot.in.gov/dotmaps/districtmaps/`,
    filter: ["compounds"],
  },
  {
    term: "large culvert",
    definition:
      "A structure with a span between 4 and 20 feet measured perpendicular to the roadway centerline. Typically used to carry water, pedestrians, or wildlife beneath a roadway, falling between small pipes and full bridge systems in scale.",
    search: ``,
    discipline: "bridge design",
    filter: ["culvert"],
  },
  {
    term: "lateral bracing",
    definition:
      "Structural elements used to resist lateral forces, such as wind or seismic loads, that may cause a bridge to sway or shift horizontally. Lateral bracing provides stability by tying together various parts of the bridge structure. It helps prevent lateral buckling and ensures the overall safety of the bridge under dynamic loads.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "lateral connection plate",
    definition:
      "A plate used to connect lateral components, such as cross frames or lateral bracing, to the main structural elements. It helps distribute loads and provides lateral stability. Lateral connection plates are prone to constraint-induced fracture and fatigue cracking. When no transition radius is provided, the terminations in the plate's longitudinal welds are classified as AASHTO fatigue category E.",
    search: ``,
    discipline: "bridge construction",
    filter: ["bridge", "components", "NSTM"],
  },

  {
    term: "latex-modified overlay",
    definition:
      "A type of concrete overlay that uses latex additives to improve bonding strength and durability. Latex-modified overlays are applied to bridge decks to protect against wear, water infiltration, and freeze-thaw damage. They enhance the longevity of the surface while maintaining the structural integrity of the bridge deck.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "materials"],
  },
  {
    term: "legal load",
    definition:
      "The maximum load for each vehicle configuration, including the weight of the vehicle and its payload, permitted by law for the State in which the bridge is located.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "legal load rating",
    definition:
      "The maximum permissible legal load to which the structure may be subjected with the unlimited numbers of passages over the duration of a specified bridge evaluation period. Legal load rating is a term used in Load and Resistance Factor Rating method.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "legally enforceable load posting",
    definition:
      "Posting of a load restriction sign (or signs) at a bridge in accordance with State law that is legally enforceable by law enforcement personnel.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "LiDAR (light detection and ranging",
    definition:
      "A remote sensing technology that uses laser pulses to generate precise three-dimensional models of structures, commonly used in bridge inspections and terrain mapping.",
    discipline: "bridge design",
    filter: ["acronyms"],
  },
  {
    term: "limestone",
    definition:
      "A sedimentary rock primarily composed of calcium carbonate, commonly used in aggregate production and as a raw material for cement manufacturing.",
    discipline: "bridge design",
    filter: ["design", "materials"],
  },
  {
    term: "line of sight",
    definition: "The unobstructed view along the roadway, crucial for driver safety, allowing the driver to see upcoming curves or obstacles.",
    search: ``,
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "linear referencing system (LRS)",
    definition:
      "Provides a geospatial representation of a road network through a set of procedures for determining and retaining a record of specific points along a highway. Typical methods used are mile point, milepost, reference point, or link node. LRS data are required for the annual Highway Performance Monitoring System (HPMS) data submittal from the States to FHWA.",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms", "roadway"],
  },
  {
    term: "live load",
    definition:
      "The dynamic load that a structure experiences due to the weight of vehicles, pedestrians, or other moving elements. Live loads vary based on traffic volume, vehicle types, and environmental factors. They are an essential consideration in bridge design, influencing the size and strength of structural components.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "load-bearing",
    definition:
      "A structural element, such as a wall or beam, that supports and transfers loads from above to the foundation or other supporting members.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "load path redundancy",
    definition:
      "A redundancy that exists based on the number of primary load-carrying members between points of support, such that fracture of the cross-section at one location of a member will not cause a portion of or the entire bridge to collapse.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "NSTM"],
  },
  {
    term: "load posting",
    definition:
      "Regulatory signs installed in accordance with the 'Manual on Uniform Traffic Control Devices' and State or local law which represent the maximum vehicular live load which the bridge may safely carry.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "roadway"],
  },
  {
    term: "load rating",
    definition:
      "The analysis to determine the safe vehicular live load carrying capacity of a bridge using bridge plans and supplemented by measurements and other information gathered from an inspection.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "Local Public Agency (LPA)",
    definition:
      "An entity, such as a city, county, or local government agency, responsible for managing public infrastructure, including bridges, within a defined geographic area. LPAs typically oversee the planning, funding, and maintenance of bridge projects. They work within federal and state guidelines to ensure safe and functional transportation systems.",
    search: ``,
    discipline: "bridge management",
    filter: ["acronyms", "org"],
  },
  {
    term: "local scour",
    definition:
      "The localized erosion of riverbed or streambed material around bridge foundations, typically caused by water flow. Local scour can undermine the stability of a bridge foundation, potentially leading to structural failure if not addressed. Monitoring and mitigating local scour are essential in bridge design and maintenance, especially in waterways with strong currents.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "defects"],
  },
  {
    term: "longitudinal cracking",
    definition:
      "Cracks that form parallel to the direction of the bridge deck or roadway, often due to temperature fluctuations, shrinkage, or movement of the underlying structure. These cracks can lead to water infiltration and further deterioration of the bridge's surface. They require monitoring and sometimes repair to prevent further structural damage.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "longitudinal stiffener",
    definition:
      "A stiffener placed parallel to the length of a structural member, typically in tension regions where there are high bending moments, to improve its resistance to bending under load. When no transition radius is provided, the terminations in the stiffener's longitudinal welds are classified as AASHTO fatigue category E or E', depending on the thickness of the stiffener.",
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "lower chord",
    definition:
      "The bottom horizontal member of a truss that primarily resists tensile forces, contributing to the overall stability and load distribution of the structure.",
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },

  // :::::

  {
    term: "magnetic particle testing (MT)",
    definition:
      "An NDT method that uses magnetic fields and fine iron particles to detect surface and near-surface cracks in ferromagnetic materials.",
    discipline: "bridge design",
    letter: "letter-jump-m",
    filter: ["acronyms", "NDT"],
  },
  {
    term: "major defect",
    definition:
      "Damage or deterioration is significant, and the strength or performance is adversely affected. Examples would be similar in type to moderate defects but of greater magnitude and severity that, upon reporting, would require a structural or geotechnical review.",
    search: `What is a "Major Defect" in bridge inspection?`,
    discipline: "bridge inspection",
    order: 4,
    filter: ["defect classes"],
  },
  {
    term: "major rehabilitation",
    definition:
      "The major work required to restore the structural integrity or serviceability of a bridge as well as work necessary to correct major safety defects.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "man lift",
    definition:
      "A powered aerial lift used to elevate inspectors or workers to difficult-to-reach areas of bridges and structures, improving accessibility and safety.",
    discipline: "bridge design",
    filter: ["compounds", "design"],
  },
  {
    term: "map cracking",
    definition:
      "A pattern of shallow, interconnected cracks in the surface of concrete, resembling a map or network. These cracks are often caused by drying shrinkage, temperature changes, or improper curing. While map cracking does not usually compromise structural integrity, it can affect the appearance and durability of the surface.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "meander",
    definition:
      "A curve or bend in a channel, typically occurring in low-gradient rivers or streams, where the water flow erodes one bank and deposits sediment on the other.",
    discipline: "bridge design",
    filter: ["channel"],
  },
  {
    term: "mecahnically stabilzed earth (MSE) wall",
    definition:
      "Mechanically stabilized earth, sometimes referred to as reinforced soil, is a soil mass embankment constructed with artificial reinforcing that typically consist of either geosynthetics or steel material. When used as retaining walls, MSE walls are designed as gravity walls built with multiple layers of horizontal reinforcing in granular backfill connected to wall face components.",
    search: `What is "MSE" in retaining wall design?`,
    discipline: "retaining wall design",
    filter: ["bridge", "components", "wall"],
  },
  {
    term: "Mianus River Bridge",
    definition:
      "A section of an interstate bridge in Connecticut that collapsed in 1983 due to corrosion-related pin and hanger failure. The incident highlighted the risks of overlooked fatigue details in nonredundant steel tension members (NSTMs) and led to new federal requirements for hands-on inspection of fatigue-prone details and clearer guidelines for identifying and inspecting NSTMs.",
    search: ``,
    discipline: "bridge history",
    filter: ["design", "NSTM"],
  },
  {
    term: "minor defect",
    definition:
      "Damage or deterioration has initiated but is not considered significant. Examples include minimal to moderate width cracks with no efflorescence or rust stains, shallow depth spalls with no exposed reinforcing steel, or speckled surface rust.",
    search: `What is a "Minor Defect" in bridge inspection?`,
    discipline: "bridge inspection",
    order: 2,
    filter: ["defect classes"],
  },
  {
    term: "minor rehabilitation",
    definition:
      "The minor work required to preserve or restore the structural integrity of a bridge or serviceability as well as the work necessary to correct minor safety defects.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "minor-width cracks",
    definition: "Cracks between 0.02 and 0.03 inches in width that appear in the surface of concrete.",
    search: ``,
    discipline: "bridge deck maintenance",
    filter: ["defects"],
  },
  {
    term: "misdrilled holes",
    definition:
      "Holes drilled in the wrong location or as part of a retrofit, which can create stress concentrations and lead to fatigue cracking. Misdrilled holes should never be repaired with weld material. If a high-strength bolt is placed, they fall under AASHTO fatigue category B. If left open, they are categorized as D. When repaired with weld material, they are an uncategorized fatigue detail and prone to cracking. In some cases, a drilled hole can be a better detail than the one it replaces, such as when used for crack arrest or to reduce triaxial constraint.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects", "design", "NSTM", "welds"],
  },

  {
    term: "moderate defect",
    definition:
      "Damage or deterioration is significant, but the strength or performance is not yet adversely affected. Examples include moderate width cracks with either efflorescence or rust stains, spalls with exposed reinforcing steel, or more pronounced surface rust and corrosion with either pitting or delamination. Defects or deterioration at this level may not yet warrant a structural or geotechnical review.",
    search: `What is a "Moderate Defect" in bridge inspection?`,
    discipline: "bridge inspection",
    order: 3,
    filter: ["defect classes"],
  },
  {
    term: "moderate-width cracks",
    definition: "Cracks between 0.04 and 0.06 inches in width that appear in the surface of concrete.",
    search: ``,
    discipline: "bridge deck maintenance",
    filter: ["defects"],
  },
  {
    term: "modular block wall",
    definition:
      "A gravity wall built using interlocking blocks that are typically masonry, concrete, or concrete masonry units (CMU) to resist earth pressure from behind. Some modular block walls may also use artificial reinforcing similar to MSE walls.",
    search: `What is "Modular Block Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    filter: ["components", "wall"],
  },
  {
    term: "modular joint",
    definition:
      "A joint system made of prefabricated components designed to allow movement while maintaining a seal, often used in large bridges with high movement requirements. Modular joints are complex systems with many moving parts, making them more prone to malfunction and requiring expensive installation and maintenance.",
    discipline: "bridge design",
    filter: ["bridge", "components", "joints"],
  },
  {
    term: "modulus of elasticity of steel",
    definition:
      "A measure of steel's stiffness, defined as the ratio of stress to strain within the elastic limit. For structural steel, it is typically around 29,000 ksi (200 GPa), determining how much a member deforms under load.",
    discipline: "bridge design",
    filter: ["design", "materials"],
  },
  {
    term: "moment",
    definition:
      "A measure of the rotational force or bending caused by external loads applied to a structure, such as a bridge. The moment acts to bend or rotate a structural element, such as a beam or girder, and is crucial in determining the strength and design requirements of bridge components. It is typically expressed in units of force multiplied by distance.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "NSTM"],
  },
  {
    term: "moment diagram",
    definition:
      "A chart showing the bending moment along a beam’s length, typically based on loading and support conditions. It helps identify where maximum bending stresses occur.",
    search: ``,
    discipline: "structural analysis",
    filter: ["design", "NSTM"],
  },
  {
    term: "monolithic",
    definition:
      "Describes a structure or component formed as a single, continuous mass without joints or separations. Monolithic elements improve durability and reduce weak points where deterioration or movement could occur.",
    discipline: "bridge design",
    filter: ["design", "materials"],
  },
  {
    term: "monolithic wearing surface",
    definition:
      "A top layer of concrete that is poured at the same time as the main bridge deck, forming a single solid piece. This approach eliminates joints between the deck and surface, reducing weak points where water and salt can enter and cause damage over time.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },

  {
    term: "multi-level interchange",
    definition:
      "A multilevel highway intersection or junction of intersecting roads and bridges arranged so that vehicles may move from one road to another without crossing the streams of traffic.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },

  // :::::

  {
    term: "National Bridge Inspection Standards (NBIS)",
    definition:
      "Federal regulations establishing national policy regarding bridge inspection organization, bridge inspection frequency, inspector qualifications, inventory requirements, report formats, and inspection and rating procedures, as described in 23 CFR 650 Subpart C.",
    search: ``,
    discipline: "bridge design",
    letter: "letter-jump-n",
    filter: ["acronyms", "bridge"],
  },
  {
    term: "National Bridge Inventory (NBI)",
    definition:
      "An aggregation of State transportation department, Federal agency and Tribal government bridge and associated highway data maintained by the Federal Highway Administration (FHWA). The NBIS requires each State transportation department, Federal agency, and Tribal government to prepare and maintain a bridge inventory, which must be submitted to FHWA in accordance with these specifications on an annual basis or whenever requested.",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms", "bridge"],
  },
  {
    term: "National Highway Freight Network (NHFN)",
    definition:
      "A national highway freight network established by FHWA to assist States in strategically directing resources toward improved movement of freight on highways. The NHFN consists of a Primary Highway Freight System, the portions of the Interstate System not designated as part of the Primary Highway Freight System, and Critical Rural Freight Corridors and Critical Urban Freight Corridors designated by states.",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms"],
  },
  {
    term: "nationally certified bridge inspector",
    definition: "An individual meeting the team leader requirements of 23 CFR 650.309(b).",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "navigable waterway",
    definition:
      "Navigable waterways are determined by the Commandant of the United States Coast Guard. Title 33 of the Code of Federal Regulations, Section 2.36, defines navigable waterways as consisting of territorial seas of the United States, internal waters subject to tidal influence, and internal waters not subject to tidal influence that are used for interstate or foreign commerce or determined capable of improvement for such use.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel"],
  },
  {
    term: "necking",
    definition:
      "The localized reduction in cross-sectional area that occurs in a material under high tensile stress just before it fractures. It marks the onset of material failure.",
    discipline: "bridge design",
    filter: ["design", "defects", "NSTM"],
  },
  {
    term: "negative bending moment",
    definition:
      "A moment that causes a beam to bend with the top fibers in tension and the bottom in compression. It typically occurs near supports in continuous spans.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["design", "NSTM"],
  },
  {
    term: "neighboring state",
    definition:
      "The State responsible for reporting an abbreviated bridge record for a border bridge. The Designated Lead State and the Neighboring State are determined through agreement between the two border States.",
    search: ``,
    discipline: "bridge design",
    filter: ["org"],
  },
  {
    term: "neutral axis",
    definition:
      "The imaginary line in a cross-section of a beam where the material experiences zero stress during bending. It separates the tension and compression zones.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["design", "NSTM"],
  },
  {
    term: "nickel alloy steel",
    definition:
      "Steel with added nickel for enhanced toughness and corrosion resistance, often used in cold-weather bridge applications. Can be costly and difficult to fabricate compared to conventional steels.",
    discipline: "bridge design",
    filter: ["materials"],
  },
  {
    term: "nominal",
    definition:
      "Referring to an approximate or standard value, typically used when the exact measurement may vary slightly but is considered close to the stated value.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "non-destructive testing (NDT)",
    definition:
      "A range of inspection techniques used to evaluate materials and welds without causing damage, including ultrasonic, radiographic, magnetic particle, and dye penetrant testing.",
    discipline: "bridge design",
    filter: ["acronyms", "NDT"],
  },
  {
    term: "nonredundant steel tension member (NSTM)",
    definition:
      "A primary steel member fully or partially in tension, and without load path redundancy, system redundancy, or internal redundancy, whose failure may cause a portion of or the entire bridge to collapse.",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms", "bridge", "NSTM"],
  },
  {
    term: "normal",
    definition:
      "A direction that is perpendicular to a surface or plane. In structural terms, it describes stress or force acting at a right angle to the face of a material.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["design"],
  },
  {
    term: "normal line",
    definition:
      "A line that is perpendicular to a surface at a given point, often used in geometry or structural analysis for defining angles and forces.",
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "normal pool",
    definition:
      "The usual or standard water level in a reservoir or river at a given time under typical flow conditions. The normal pool level is important in bridge design as it determines the height of the water under the structure and influences factors such as scour and clearance. This level may vary depending on seasonal fluctuations or operational factors.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "design"],
  },
  {
    term: "normal stress",
    definition:
      "The stress acting perpendicular to a surface, either in tension or compression. It is calculated by dividing the force by the area over which it acts.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["design", "NSTM"],
  },
  {
    term: "nosing",
    definition:
      "The rounded or beveled edge at the intersection of a joint, such as an expansion or contraction joint. It helps protect the joint from damage and wear, allowing for smoother transitions between sections and reducing the risk of cracking by distributing stress more evenly.",
    discipline: "bridge design",
    filter: ["components", "joints"],
  },
  {
    term: "NSTM inspection",
    definition: "A hands-on inspection of a nonredundant steel tension member.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "NSTM"],
  },

  // :::::

  {
    term: "off-ramp",
    definition: "A roadway that allows vehicles to exit a highway or freeway.",
    search: ``,
    discipline: "bridge design",
    letter: "letter-jump-o",
    filter: ["compounds", "roadway"],
  },
  {
    term: "OHWM (ordinary high water mark)",
    definition:
      "The elevation on the landscape that marks the sustained limit of regular surface water presence, typically corresponding to the normal high water level, as indicated by physical features such as staining, sediment deposits, scour, vegetation changes, or erosion patterns.",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms", "channel", "compounds", "design"],
  },
  {
    term: "on-ramp",
    definition: "A roadway that allows vehicles to enter a highway or freeway.",
    search: ``,
    discipline: "bridge design",
    filter: ["compounds", "roadway"],
  },
  {
    term: "open joint",
    definition:
      "A simple, unsealed joint that allows for unrestricted movement but leaves the bridge vulnerable to water and debris infiltration. Open joints are prone to water infiltration, debris accumulation, and additional structural stress due to the lack of sealing.",
    discipline: "bridge design",
    filter: ["bridge", "components", "joints"],
  },
  {
    term: "operating rating",
    definition:
      "The maximum permissible live load to which the structure may be subjected for the load configuration used in the load rating. Allowing unlimited numbers of vehicles to use the bridge at operating level may shorten the life of the bridge. Operating rating is a term used in either Allowable Stress or Load Factor Rating method.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "design"],
  },
  {
    term: "orthotropic deck",
    definition:
      "An orthotropic deck consists of a flat, thin steel plate stiffened by a series of closely spaced longitudinal ribs at right angles to the floor beams. The deck acts integrally with the steel superstructure.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "OSHA (Occupational Safety and Health Administration)",
    definition:
      "A federal agency that sets and enforces workplace safety standards, including regulations specific to construction, maintenance, and inspection of bridges. It mandates fall protection, confined space entry protocols, and other safety measures to protect workers from hazards commonly encountered on bridge projects.",
    discipline: "bridge design",
    filter: ["acronyms", "org"],
  },
  {
    term: "out-of-plane bending",
    definition:
      "Bending that occurs in a direction perpendicular to the plane of the structure, typically caused by loads or forces not aligned with the primary axis of the member. This type of bending can result in distortion, stress concentrations, and increased risk of fatigue failure, particularly at connections or changes in geometry.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects", "compounds", "design", "NSTM"],
  },
  {
    term: "out-to-out coping",
    definition:
      "The total width measured from the outer edges of the bridge coping, which includes the concrete or protective elements along the deck edges. This measurement helps define the full extent of the bridge deck, including safety barriers or parapets.",
    discipline: "bridge design",
    filter: ["bridge", "compounds", "design"],
  },
  {
    term: "out-to-out roadway",
    definition:
      "The total width of the bridge deck measured from the outermost edges, including all lanes, shoulders, and any barriers or railings. This dimension is critical for determining the available roadway space for vehicles and maintenance access.",
    discipline: "bridge design",
    filter: ["bridge", "compounds", "design"],
  },
  {
    term: "outlet",
    definition:
      "The downstream exit point of a culvert where flow exits the structure, often designed with features to control flow and prevent erosion.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "culvert"],
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
    term: "overpass",
    definition: "A bridge or elevated structure that allows a road, railway, or pedestrian path to cross over another roadway or obstacle.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "compounds", "roadway"],
  },

  // :::::

  {
    term: "parabolic offsets",
    definition:
      "Curved offsets used in guardrail and barrier systems to gradually redirect vehicles and reduce impact forces. The parabolic shape helps to guide the vehicle away from the hazard in a controlled manner, improving safety and minimizing the risk of severe collisions.",
    discipline: "bridge design",
    letter: "letter-jump-p",
    filter: ["design", "roadway"],
  },
  {
    term: "parallel",
    definition:
      "Describes two or more lines, surfaces, or structural members that maintain a constant distance apart without intersecting. Parallel alignment is critical for uniform load distribution and efficient design of multi-span structures.",
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },
  {
    term: "parapet",
    definition:
      "A low protective wall along the edge of a bridge, roadway, or structure, designed to prevent vehicles or pedestrians from falling off. It can be made of concrete, masonry, or metal and may also serve as a structural or aesthetic element.",
    discipline: "bridge design",
    filter: ["bridge", "components", "roadway"],
  },
  {
    term: "pattern cracking",
    definition:
      "The occurrence of a series of cracks that form a recognizable pattern, often due to external factors like temperature fluctuations, moisture changes, or material shrinkage. Pattern cracking is typically superficial but may require attention if it leads to further degradation of the material. It can affect both asphalt and concrete surfaces.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "peening",
    definition:
      "A process of mechanically working a weld surface using controlled hammering or blasting to reduce residual stresses and improve fatigue resistance.",
    discipline: "bridge design",
    filter: ["defects", "NSTM", "welds"],
  },
  {
    term: "perpendicular",
    definition:
      "Describes the relationship between two intersecting elements forming a 90-degree angle. Perpendicular connections ensure proper force transfer, stability, and alignment of components such as piers, beams, and deck joints.",
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },
  {
    term: "piecewise girders",
    definition:
      "A girder or beam line comprised of girders with a longitudinal axis that changes orientation at one or more supports. The girder line may be simply supported or continuous at supports.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "pier",
    definition:
      "A vertical support structure that transfers loads from the bridge superstructure to the foundation. Piers are typically located between abutments to support spans over water, roadways, or other obstacles.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "pier cap",
    definition: "The upper part of a bridge pier that distributes loads from the superstructure to the pier columns.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "pier wall",
    definition: "A vertical structural element that supports bridge spans and transfers loads to the foundation, often part of a pier system.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "pigeon",
    definition:
      "A colloquial term in bridge maintenance referring to a minor defect or issue that, while not critical, requires attention to prevent future deterioration.",
    search: ``,
    discipline: "bridge maintenance",
    filter: ["design"],
  },
  {
    term: "pile",
    definition:
      "A structural element driven or drilled into the ground to resist vertical and/or horizontal loads. Piles are usually rolled steel shapes, concrete, or timber.",
    search: `What is "Pile" in retaining wall design?`,
    discipline: "retaining wall design",
    filter: ["bridge", "components", "design"],
  },
  {
    term: "pile cap",
    definition: "A reinforced concrete slab that connects multiple foundation piles, distributing loads more effectively.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "pin-and-hanger assembly",
    definition:
      "A connection used to link two girders in the same beam line by suspending one from the other with steel hangers and transverse pins. The cantilevered girder supports a suspended girder through a set of plates and pins that allow rotation and limited longitudinal movement. This design accommodates expansion and contraction but introduces multiple fatigue-prone details. Pin-and-hanger assemblies are vulnerable to corrosion and failure from pack rust.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds", "design", "NSTM"],
  },

  {
    term: "pin-and-hinge assembly",
    definition:
      "A connection between two girders in the same beam line using a single transverse pin. One girder acts as a cantilever and supports the other, forming a hinge at the joint. The pin permits rotation but does not allow significant longitudinal movement while transferring load in shear and bearing. Unlike pin-and-hanger systems, this type does not use hangers and is more compact. Pin-and-hinge assemblies often have fatigue-prone details and are susceptible to failure from pack rust.",
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds", "design", "NSTM"],
  },
  {
    term: "piping",
    definition:
      "The process of erosion occurring beneath the exterior of a culvert, where water flows through the surrounding soil, potentially creating voids or channels under the structure. This can weaken the foundation and lead to structural failure if not addressed.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "defects"],
  },
  {
    term: "plan view",
    definition:
      "A top-down, horizontal view in architectural drawings that shows the layout and spatial arrangement of rooms, walls, doors, and other elements. It provides an overview of the structure’s footprint.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "planar discontinuity",
    definition:
      "A flaw within a material that lies along a flat or nearly flat plane, such as a crack, lack of fusion, or laminar tearing. These defects are critical because they create stress concentrations and can lead to fracture under load.",
    search: `what is planar discontinuity in steel fabrication`,
    discipline: "bridge fabrication",
    filter: ["defects", "NDT", "NSTM"],
  },
  {
    term: "plastic deformation",
    definition:
      "A permanent change in the shape of a material under stress, where the material does not return to its original shape after the load is removed.",
    search: ``,
    discipline: "materials engineering",
    filter: ["design", "defects", "NSTM"],
  },
  {
    term: "plug weld",
    definition:
      "A weld used to fuse two plates by filling a drilled hole in one piece of metal with weld metal. It is often used for alignment or to resist shear but does not perform well under fatigue. This type of weld lacks a defined AASHTO fatigue category and should not be used in tensioned members due to its tendency to crack under repeated stress.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "NSTM", "welds"],
  },

  {
    term: "point bar",
    definition: "A crescent-shaped deposit of sediment on the inside of a meander curve, formed by the slower flow of water.",
    discipline: "bridge design",
    filter: ["channel"],
  },
  {
    term: "polymer modified asphalt (LDI and PaveTech) joint",
    definition:
      "A flexible joint filled with polymer-modified asphalt to absorb movement and seal against water. Susceptible to UV degradation, cracking under load, and delayed curing, which can impact long-term performance and repair timing.",
    discipline: "bridge design",
    filter: ["acronyms", "joints"],
  },
  {
    term: "portal",
    definition:
      "The entrance or exit frame of a bridge, tunnel, or culvert, often consisting of a rigid frame structure that supports loads and resists lateral forces.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "positive bending moment",
    definition:
      "A moment that causes a beam to bend in a way that places the bottom fibers in tension and the top fibers in compression. This is the typical bending condition for simply supported beams.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["design", "NSTM"],
  },
  {
    term: "post-tensioned",
    definition:
      "A type of concrete construction where the concrete is tensioned after it has been poured, typically using steel tendons to enhance its strength.",
    search: ``,
    discipline: "bridge design",
    filter: ["compounds", "design"],
  },
  {
    term: "poured silicone (XJS) joint",
    definition:
      "A joint filled with a poured silicone material, often used for narrow-width joints that need flexibility and sealing properties. Poured silicone joints are limited to narrow-width applications, degrade under UV exposure, and may fail to bond properly if not installed correctly.",
    discipline: "bridge design",
    filter: ["acronyms", "joints"],
  },
  {
    term: "pressure head",
    definition:
      "The height of a water column above a specific point, representing the potential energy of the water due to gravity. It is used to quantify pressure in fluid dynamics, with higher pressure heads indicating greater potential energy available for flow.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "design"],
  },
  {
    term: "prestressed",
    definition:
      "A technique used in concrete structures where internal stresses are introduced to counteract potential external loads, improving the material’s overall strength and performance. Prestressing typically involves tensioning steel tendons embedded in the concrete before or during the curing process. This process enhances the durability and load-carrying capacity of bridge components, especially in long spans.",
    search: ``,
    discipline: "bridge design",
    filter: ["compounds", "design"],
  },
  {
    term: "prestressed concrete",
    definition:
      "Concrete that has been prestressed to improve its strength and performance under load. This is achieved by tensioning steel strands or cables within the concrete before it is poured, creating internal forces that help resist bending and shear. Prestressed concrete is commonly used in bridge construction for its ability to span large distances with minimal deflection.",
    search: ``,
    discipline: "bridge design",
    filter: ["components", "materials"],
  },
  {
    term: "private bridge",
    definition: "A bridge open to public travel and not owned by a public authority as defined in 23 U.S.C. 101.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "probability",
    definition:
      "Extent to which an event is likely to occur during a given interval. This may be based on the frequency of events, such as in the quantitative probability of failure, or on degree of belief or expectation. Degrees of belief about probability can be chosen using qualitative scales, ranks, or categories such as, remote, low, moderate, or high.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "procedures",
    definition:
      "Written documentation of policies, methods, considerations, criteria, and other conditions that direct the actions of personnel so that a desired end result is achieved consistently.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "procurement",
    definition:
      "The structured process of acquiring goods or services, often governed by regulations to ensure fairness, transparency, and cost-effectiveness in public or private sectors.",
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "profile",
    definition:
      "The shape or contour of a bridge, roadway, or other structure, typically when viewed from the side. The profile is critical in determining the elevation changes and slope along the length of the bridge, impacting drainage, structural load, and safety. It is often studied to ensure smooth transitions between different bridge spans and roadways.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "program manager",
    definition:
      "The individual in charge of the program, that has been assigned the duties and responsibilities for bridge inspection, reporting, and inventory, and has the overall responsibility to ensure the program conforms with the requirements of the NBIS as provided in 23 CFR 650 Subpart C. The program manager provides overall leadership and is available to inspection team leaders to provide guidance.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "public road",
    definition:
      "As defined in 23 U.S.C. 101(a)(21) as any road or street under the jurisdiction of and maintained by a public authority and open to public travel.",
    search: ``,
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "punched holes",
    definition:
      "A hole created by forcing a punch through the material instead of drilling. This method causes tearing and deformation around the edge of the hole, which can lead to cracking or fatigue over time. Punched holes are typically considered inferior to drilled holes for structural applications and have an AASHTO fatigue category D even when filled with a high-strength bolt.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects", "design", "NSTM", "connections"],
  },

  // :::::

  {
    term: "Q100 HW",
    definition:
      "The flow rate associated with the 100-year flood event, often used as a benchmark in hydrological analysis and floodplain management. It represents a flow rate that has a 1% probability of being exceeded in any given year. The Q100 HW value is critical for assessing the design and stability of bridges in flood-prone areas.",
    search: ``,
    discipline: "hydrology",
    letter: "letter-jump-q",
    filter: ["channel", "design"],
  },
  {
    term: "Q100 scour",
    definition:
      "The potential scour depth calculated based on the Q100 flood event, indicating the level of erosion around bridge foundations that could occur during a 100-year flood. Scour analysis at this flow rate is crucial for determining the necessary design of bridge foundations to ensure their stability in extreme flooding conditions. This value helps engineers plan for future flood risks and prevent structural damage.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "design"],
  },
  {
    term: "quality assurance (QA)",
    definition:
      "The use of sampling and other measures to assure the adequacy of quality control procedures in order to verify or measure the quality level of the entire bridge inspection and load rating program.",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms", "bridge"],
  },
  {
    term: "quality control (QC)",
    definition: "Procedures that are intended to maintain the quality of a bridge inspection and load rating at or above a specified level.",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms", "bridge"],
  },
  {
    term: "quenched and tempered (Q&T) steel",
    definition:
      "High-strength steel that has undergone a controlled heating and cooling process to improve mechanical properties. Susceptible to hydrogen embrittlement and requires strict quality control during fabrication.",
    discipline: "bridge design",
    filter: ["acronyms", "materials"],
  },

  // :::::

  {
    term: "radiographic testing (RT)",
    definition:
      "A non-destructive testing method using X-rays or gamma rays to detect internal flaws in welds by producing an image on a radiographic film or digital sensor.",
    discipline: "bridge design",
    letter: "letter-jump-r",
    filter: ["acronyms", "NDT"],
  },
  {
    term: "railroad",
    definition: "A system of tracks along which trains are guided, often including the associated infrastructure like stations and bridges.",
    search: ``,
    discipline: "bridge design",
    filter: ["compounds", "design", "roadway"],
  },
  {
    term: "railroad flat car",
    definition:
      "A salvaged flatbed railroad car used as a bridge superstructure, typically on low-volume roads. This type of bridge often has NSTMs.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "random cracking",
    definition:
      "Cracks that appear irregularly and without a specific pattern, often caused by random stresses, temperature changes, or moisture fluctuations. These cracks can appear in both concrete and asphalt surfaces and may be superficial or deeper, depending on the severity of the underlying cause. Although not typically severe, they may lead to further deterioration if left unaddressed.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "rebar",
    definition: "Short for 'reinforcing bar,' a steel bar used to strengthen concrete structures by providing tensile support.",
    search: ``,
    discipline: "bridge design",
    filter: ["components", "design", "materials"],
  },
  {
    term: "regulatory signs",
    definition:
      "Legally enforceable traffic controls that dictate specific actions or restrictions, often using a white background with black or red lettering.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "rehabilitation",
    definition:
      "The process of repairing or upgrading a structure to restore its functionality, structural integrity, and safety. Rehabilitation often involves addressing damage, corrosion, or wear, with the goal of extending the lifespan of the structure and improving its performance.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
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
    term: "relief joint",
    definition:
      "A joint designed to relieve internal stresses in a structure, often created to control cracking caused by shrinkage, thermal expansion, or other forces. It allows controlled movement or cracking at specific locations to prevent damage to the overall structure.",
    discipline: "bridge design",
    filter: ["bridge", "design", "joints"],
  },
  {
    term: "replacement",
    definition:
      "The process of completely removing a deteriorated or failed structure and constructing a new facility in its place, typically within the same location or traffic corridor. This involves full demolition and rebuilding to meet current standards and requirements.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "retaining wall",
    definition:
      "A permanent, relatively rigid structure that supports a soil mass at slopes steeper than their angle of rest to provide usable space both above and in front of the wall.",
    search: `What is "Retaining Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    filter: ["components", "wall"],
  },
  {
    term: "retention ponds",
    definition:
      "Permanent basins designed to hold stormwater runoff indefinitely, allowing pollutants to settle and water to be released through infiltration or controlled discharge.",
    discipline: "bridge design",
    filter: ["channel", "components", "design"],
  },
  {
    term: "retrofit",
    definition:
      "The process of modifying or upgrading an existing structure to improve its performance, safety, or compliance with current standards. Retrofit work on bridges may include adding new components, reinforcing weakened sections, or incorporating modern technology. This practice helps extend the life of a structure and ensures it can safely handle current and future loads.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "compounds", "design", "NSTM"],
  },
  {
    term: "revetment",
    definition: "A facing of masonry or stones to protect an embankment from erosion.",
    discipline: "bridge design",
    filter: ["channel", "components"],
  },
  {
    term: "revetment riprap",
    definition:
      "A form of erosion control using a layer of riprap placed along the base of a slope or shoreline. Revetment riprap acts as a protective armor to prevent undermining and scour by dissipating wave or water flow energy, typically used in more permanent applications.",
    discipline: "bridge design",
    filter: ["channel", "components", "design", "materials"],
  },
  {
    term: "rideability",
    definition:
      "A measure of surface smoothness based on how comfortably vehicles travel over it; influenced by bumps, dips, joint alignment, and pavement texture.",
    discipline: "bridge design",
    filter: ["defects", "roadway"],
  },

  {
    term: "right-of-way",
    definition:
      "The land designated for the roadway and its components, including the traveled way, shoulders, and any additional space required for construction and maintenance.",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms", "compounds", "design"],
  },
  {
    term: "rigid culvert",
    definition:
      "A culvert that derives its structural strength primarily from the material's inherent properties, such as concrete or other solid, non-flexible materials, without relying on the surrounding soil for support.",
    search: ``,
    discipline: "bridge design",
    filter: ["culvert"],
  },
  {
    term: "rigid overlay",
    definition:
      "A type of overlay used in bridge rehabilitation, where a rigid, often concrete, layer is applied over an existing surface to improve load distribution and extend the life of the structure. This overlay is designed to resist deformation and stress, providing additional strength to aging or damaged decks. It is particularly useful in preventing further deterioration of the underlying material.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "rill erosion",
    definition: "Shallow, small channels formed on the soil surface by the concentrated flow of water, often caused by rainfall or surface runoff.",
    discipline: "bridge design",
    filter: ["channel"],
  },
  {
    term: "riprap",
    definition: "Loose stone or rock material placed along embankments, shorelines, or riverbeds to prevent erosion.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "channel", "components", "compounds", "materials"],
  },
  {
    term: "rise",
    definition:
      "The vertical distance from the base of the arch to the highest point of the arch, influencing the curvature and load distribution of the arch.",
    discipline: "bridge design",
    filter: ["bridge", "design"],
  },
  {
    term: "risk",
    definition:
      "The exposure to the possibility of structural safety or serviceability loss during the interval between inspections. It is the combination of the probability of an event and its consequence.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "design"],
  },
  {
    term: "rivets",
    definition:
      "Permanent mechanical fasteners formed by inserting a heated metal shaft through aligned holes and deforming one end to create a second head, securing the connection without threads. Rivets no longer have an AASHTO fatigue category, but holes without high-strength bolts are category D.",
    discipline: "bridge design",
    filter: ["components", "design", "NSTM"],
  },
  {
    term: "roadside",
    definition: "The area adjacent to the edge of a roadway, often including shoulders, ditches, and vegetation.",
    search: ``,
    discipline: "bridge design",
    filter: ["compounds", "roadway"],
  },
  {
    term: "roadway",
    definition: "The portion of a highway, including shoulders, for vehicular use. A divided highway has two or more roadways.",
    search: ``,
    discipline: "bridge design",
    filter: ["compounds", "roadway"],
  },
  {
    term: "route",
    definition: "A specific road, highway, or travel way open to public travel.",
    search: ``,
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "routine inspection",
    definition:
      "Regularly scheduled comprehensive inspection consisting of observations and measurements needed to determine the physical and functional condition of the bridge and identify changes from previously recorded conditions.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "routine permit load",
    definition:
      "A live load, which has a gross weight, axle weight, or distance between axles not conforming with State statutes for legally configured vehicles, authorized for unlimited trips over an extended period of time to move alongside other heavy vehicles on a regular basis.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "design"],
  },
  {
    term: "runoff",
    definition:
      "Water that flows over the surface of the land, typically after rainfall or snowmelt, and is directed toward rivers, streams, or drainage systems. Runoff can carry pollutants and debris, impacting water quality and causing erosion along riverbanks or bridge foundations. Proper management of runoff is essential to prevent flooding and maintain the stability of surrounding infrastructure.",
    search: ``,
    discipline: "environmental engineering",
    filter: ["channel", "design", "defects"],
  },
  {
    term: "rust",
    definition:
      "The reddish-brown corrosion product formed on iron or steel due to prolonged exposure to moisture and oxygen, potentially leading to section loss and structural degradation.",
    discipline: "bridge design",
    filter: ["defects", "materials"],
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
    term: "rutting",
    definition:
      "The formation of depressions or grooves in the surface of a roadway or bridge deck, often caused by the repetitive passage of heavy vehicles. Rutting can result in a rough driving surface, posing a safety hazard to vehicles, and may lead to further damage if not repaired. It typically occurs in asphalt and can be exacerbated by extreme weather conditions or poor material quality.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },

  // :::::

  {
    term: "sacrificial concrete",
    definition:
      "A layer of concrete applied to protect more critical structural elements from environmental wear, chemical attack, or physical damage. This layer is intended to deteriorate over time, thereby preserving the integrity of the underlying structure. Sacrificial concrete is often used in aggressive environments, such as coastal areas or areas with high traffic loads.",
    search: ``,
    discipline: "bridge design",
    letter: "letter-jump-s",
    filter: ["bridge", "components", "design", "materials"],
  },
  {
    term: "safe load capacity",
    definition: "A live load that can safely utilize a bridge repeatedly over the duration of a specified inspection interval.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "design"],
  },
  {
    term: "safety metal end section (SMES)",
    definition:
      "A sloped, grated metal attachment installed at the end of a culvert to reduce the risk of vehicle snag or rollover during roadway departures. Matches the slope of the surrounding ground for a smoother transition over the culvert opening.",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms", "culvert", "design"],
  },
  {
    term: "sag vertical curve",
    definition:
      "A curve in the roadway profile that connects a descending grade to an ascending grade, typically used to smooth transitions at the bottom of a dip or valley.",
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },
  {
    term: "sand container",
    definition:
      "A container filled with sand, typically used in construction or highway safety applications. In guardrail systems, sand containers are sometimes used as impact-absorbing barriers or as part of a temporary protective system to help dissipate the energy of a vehicle during a collision.",
    discipline: "bridge design",
    filter: ["bridge", "components", "roadway"],
  },
  {
    term: "sawcut",
    definition:
      "A method of cutting concrete or asphalt using a saw, typically with a diamond blade, to create a clean, controlled crack or joint. Sawcutting is often used to create expansion joints or to remove damaged sections of a surface. This technique helps maintain the structural integrity of the material by preventing uncontrolled cracking and facilitating proper jointing.",
    search: ``,
    discipline: "bridge design",
    filter: ["compounds", "design", "joints"],
  },
  {
    term: "scaling",
    definition:
      "The breakdown of concrete surfaces due to chemical reactions or freeze-thaw cycles, which causes the outer layer of the material to peel or flake off, weakening the structure.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "scour",
    definition:
      "Localized erosion caused by the force of flowing water around structures like bridge piers, abutments, or embankments, often leading to foundation instability.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "defects"],
  },
  {
    term: "scour analysis",
    definition:
      "The process of evaluating the potential for erosion around a bridge’s foundation due to water flow. Scour analysis typically considers factors such as flow velocity, sediment type, and the shape of the riverbed. The goal of scour analysis is to predict areas at risk for foundation instability and to design bridges that can withstand the erosive forces of flowing water.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "channel", "design"],
  },
  {
    term: "scour appraisal",
    definition:
      "A risk-based and data-driven determination of a bridge’s vulnerability to scour, resulting from the least stable result of scour that is either observed, or estimated through a scour evaluation or a scour assessment.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "channel", "design"],
  },
  {
    term: "scour assessment",
    definition:
      "The determination of an existing bridge’s vulnerability to scour which considers stream stability and scour potential as described in HEC 20 and other scour-related data sources.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "channel", "design"],
  },
  {
    term: "scour critical bridge",
    definition: "A bridge with a foundation member that is unstable, or may become unstable, as determined by the scour appraisal.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "channel"],
  },
  {
    term: "scour hole",
    definition:
      "A depression or cavity formed in the bed of a river or stream due to the erosion caused by flowing water. Scour holes often develop around bridge foundations, increasing the risk of undermining the structural integrity of the bridge. Monitoring and mitigating scour holes is essential in areas prone to high water flow.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "defects"],
  },
  {
    term: "scour evaluation",
    definition:
      "The application of hydraulic analysis as described in HEC 18 and HEC 20 to estimate scour depths and determine bridge and substructure stability considering potential scour.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "channel", "design"],
  },
  {
    term: "scour monitoring inspection",
    definition:
      "An inspection performed during or after a triggering storm event as required by a Scour Plan of Action (POA), by personnel with qualifications required by the agency.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "channel"],
  },
  {
    term: "Scour Plan of Action (POA)",
    definition:
      "Procedures for bridge inspectors and engineers in managing each bridge determined to be scour critical or that has unknown foundations.",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms", "bridge", "channel"],
  },
  {
    term: "scour vulnerability",
    definition:
      "The susceptibility of a bridge foundation to erosion caused by flowing water, particularly during high-flow events such as floods. Scour vulnerability is influenced by factors such as water velocity, sediment type, and the shape of the riverbed. Proper assessment of scour vulnerability is critical for ensuring bridge stability and preventing potential failure due to undermined foundations.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "channel", "design"],
  },
  {
    term: "scupper",
    definition:
      "An opening in a bridge deck or parapet designed to drain water off the structure, preventing ponding and reducing the risk of deterioration caused by moisture buildup.",
    discipline: "bridge design",
    filter: ["bridge", "components", "design"],
  },
  {
    term: "secondary stresses",
    definition:
      "Stresses that develop from how a structure deforms rather than from the main applied loads. These are caused by restraint, geometry, or connection details and are not included in basic design calculations. Though typically smaller than primary stresses, they can still contribute to fatigue or cracking over time if not accounted for properly.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "NSTM"],
  },
  {
    term: "section loss",
    definition:
      "The reduction in thickness of steel caused by corrosion or other forms of degradation, leading to a weakening of the material and a potential loss of structural capacity.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "section view",
    definition:
      "A cut-through view from architectural drawings that shows the internal details of a structure, as if it were sliced along a plane. It reveals layers, materials, and dimensions inside the structure that are not visible from the exterior.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "sediment deposition",
    definition:
      "The process by which particles of sediment, such as sand, silt, or gravel, settle out of water or air and accumulate in a particular area. This can occur in rivers, lakes, or on land where the energy of the transporting medium (like water or wind) decreases, causing the particles to settle.",
    discipline: "bridge design",
    filter: ["channel", "defects"],
  },
  {
    term: "sediment-laden flow",
    definition:
      "A water flow that carries a significant amount of suspended particles such as sand, silt, and clay. These particles can erode materials like concrete or steel, affecting the stability of bridge foundations and structures, especially during high-flow events.",
    discipline: "channel design",
    filter: ["channel"],
  },
  {
    term: "semi-integral abutment",
    definition:
      "A type of bridge abutment design where the abutment is partially connected to the bridge deck but still allows for some independent movement. This design provides flexibility to accommodate thermal expansion and contraction while maintaining structural stability. It is often used in areas with high seismic or thermal loading conditions.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "serviceability",
    definition:
      "The ability of a structure to remain functional and comfortable for use under normal conditions without excessive deflection, cracking, or vibration. It focuses on performance rather than safety.",
    search: ``,
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "service inspection",
    definition:
      "An inspection to identify major deficiencies and safety issues, performed by personnel with general knowledge of bridge maintenance or bridge inspection.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "settlement",
    definition:
      "The downward movement of a structure or foundation due to the compression of underlying soil or materials. Settlement can occur gradually over time or more rapidly during a load increase or after construction. Excessive settlement can lead to structural misalignment, cracking, and potential failure if not properly monitored and addressed.",
    search: ``,
    discipline: "geotechnical engineering",
    filter: ["defects"],
  },
  {
    term: "severe critical finding",
    definition: "A critical finding that necessitates immediate action within 30 days.",
    discipline: "bridge inspection",
    filter: ["bridge", "defects"],
  },
  {
    term: "shale",
    definition:
      "A sedimentary rock composed of fine-grained clay minerals that can degrade when exposed to moisture, leading to foundation instability or material breakdown.",
    discipline: "bridge design",
    filter: ["materials"],
  },
  {
    term: "shear",
    definition:
      "A force that causes parts of a material to slide past one another in opposite directions. In structural elements, excessive shear stress can lead to cracking or failure, particularly in connections and supports.",
    discipline: "bridge design",
    filter: ["design", "NSTM"],
  },
  {
    term: "shear crack",
    definition:
      "A diagonal crack in a structural member caused by shear forces, often forming near supports and extending upward toward the midpoint of the member. Shear cracks indicate significant structural stress and can compromise the integrity of the member if not addressed.",
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "shear diagram",
    definition:
      "A graphical representation of how shear force varies along the length of a structural member. It helps identify where shear forces peak and influence design.",
    search: ``,
    discipline: "structural analysis",
    filter: ["design", "NSTM"],
  },
  {
    term: "shear key",
    definition:
      "A recessed or protruding element cast into concrete or built into structural joints to improve shear resistance and prevent movement between connected components.",
    discipline: "bridge design",
    filter: ["bridge", "components", "design"],
  },
  {
    term: "shear studs",
    definition:
      "Steel studs welded to the top of a bridge girder or deck to provide mechanical bonding between the concrete deck and the steel superstructure. These studs help transfer shear forces and improve the overall performance of the composite bridge system. They are particularly useful in bridges with prestressed or post-tensioned concrete decks.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "design"],
  },
  {
    term: "sheet pile",
    definition:
      "A long, thin structural member, typically made of steel, with interlocking edges driven into the ground to form a continuous wall. Used to retain earth or water and resist lateral pressure, it is commonly used for bridge abutments, cofferdams, channel protection, and temporary excavation support.",
    discipline: "bridge design",
    filter: ["channel", "components", "materials", "wall"],
  },
  {
    term: "sheet pile wall",
    definition:
      "A cantilever wall built using interlocking plate piles fabricated from pressed or molded steel sheet metal to provide structural resistance to lateral earth pressures. Such walls can be fully cantilevered or include anchors for additional resistance.",
    search: `What is "Sheet Pile Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    filter: ["wall"],
  },
  {
    term: "shelf plate",
    definition:
      "A horizontal plate welded or bolted to a main structural member, forming a structural ledge that supports the end of a beam, girder, or bracket. It acts as a bearing surface and transfers loads into the supporting element.",
    search: ``,
    discipline: "bridge construction",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "sidehill bridge",
    definition:
      "A structure built on a sloping terrain where one end is significantly higher than the other, often requiring asymmetric substructure and foundation adjustments.",
    discipline: "bridge design",
    filter: ["bridge", "compounds", "design"],
  },
  {
    term: "sidewalk",
    definition: "A paved path for pedestrians along the side of a roadway, typically made of concrete or asphalt.",
    search: ``,
    discipline: "bridge design",
    filter: ["components", "compounds"],
  },
  {
    term: "silt",
    definition:
      "Fine-grained soil particles smaller than sand but larger than clay, often problematic in foundation stability due to poor drainage and susceptibility to erosion.",
    discipline: "bridge design",
    filter: ["channel", "materials"],
  },
  {
    term: "silt fence",
    definition:
      "A temporary sediment control device made of geotextile fabric stretched between stakes, used to trap silt and prevent erosion during construction.",
    discipline: "bridge design",
    filter: ["channel", "components", "design"],
  },
  {
    term: "Silver Bridge",
    definition:
      "A suspension bridge built in 1928 that collapsed in 1967 over the Ohio River due to a fracture in an eyebar link. The failure began at a small crack caused by a manufacturing defect in the steel, which led to a fatigue crack too small to detect through inspection. The collapse killed 46 people and prompted the creation of the National Bridge Inspection Standards (NBIS), establishing formal bridge inspection requirements across the United States.",
    search: ``,
    discipline: "bridge history",
    filter: ["design", "NSTM"],
  },
  {
    term: "simple span",
    definition:
      "A bridge span that is supported at both ends without any intermediate supports. This design is commonly used for shorter spans and is often the most cost-effective solution for simple bridge crossings. Simple span bridges have a positive bending moment throughout with the maximum moment occuring at midspan.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "design", "NSTM"],
  },
  {
    term: "skew",
    definition:
      "The angle between the longitudinal axis of a bridge and the alignment of the road or railway that it crosses. Skewed bridges are often required when the road or waterway is not perpendicular to the supporting piers or abutments. The skew angle affects the load distribution and design of the bridge structure.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },
  {
    term: "slabbing",
    definition:
      "The deterioration of concrete surfaces, typically in curved sections, where the material begins to delaminate in thin layers, often accompanied by cracking and spalling.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "slag",
    definition:
      "A byproduct of metal refining and steel production, often used in construction materials such as aggregate or cement to enhance durability and performance.",
    discipline: "bridge design",
    filter: ["defects", "materials", "welds"],
  },
  {
    term: "slag inclusion",
    definition:
      "A welding defect where non-metallic slag becomes trapped within a weld, weakening the joint and potentially leading to structural failure if not properly addressed.",
    discipline: "bridge design",
    filter: ["defects", "welds"],
  },
  {
    term: "sliding steel plate joint",
    definition:
      "A joint system that uses steel plates that slide over each other to allow movement while maintaining a seal. Steel plates are prone to corrosion, require maintenance and lubrication to avoid jamming, and have limited movement capacity in extreme temperatures.",
    discipline: "bridge design",
    filter: ["joints"],
  },
  {
    term: "slipforming",
    definition:
      "A construction method where concrete is poured continuously into a form that is gradually moved upwards as the concrete hardens. This technique is commonly used for constructing barrier walls. Horizontal cracking can sometimes occur over time due to shrinkage, temperature changes, or the weight of the concrete during curing. If the curing process isn't properly controlled, or if there is uneven setting or stress distribution, it can lead to the formation of cracks along the horizontal plane of the wall.",
    search: ``,
    discipline: "barrier wall design",
    filter: ["compounds", "design", "defects", "roadway"],
  },
  {
    term: "slope",
    definition:
      "The degree of inclination or gradient of a surface, such as the ground or a bridge deck. Slope is measured as the ratio of vertical rise to horizontal distance and is crucial in determining drainage, load distribution, and structural stability. In bridge design, slope influences factors such as deck drainage and the alignment of approach roads.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "design", "roadway"],
  },
  {
    term: "slopewall",
    definition: "A protective concrete or riprap covering placed on embankments to prevent soil erosion near bridges and culverts.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds"],
  },
  {
    term: "sloughing",
    definition:
      "The downward movement or collapse of soil, rock, or embankment material due to erosion, saturation, or loss of support. Sloughing can occur on slopes, embankments, or channel banks, potentially compromising stability and requiring corrective measures such as drainage improvements, soil reinforcement, or protective armoring.",
    discipline: "bridge design",
    filter: ["channel", "defects"],
  },
  {
    term: "slump",
    definition:
      "A test used to measure the workability or consistency of fresh concrete. The slump test involves filling a cone-shaped mold with concrete and then removing it to see how much the concrete settles. A higher slump indicates a more fluid mix, while a lower slump indicates a stiffer mix, both of which affect the concrete's handling and strength characteristics.",
    search: ``,
    discipline: "concrete engineering",
    filter: ["design", "defects", "materials", "NDT"],
  },
  {
    term: "SNBI (Specifications for the National Bridge Inventory)",
    definition:
      "Provides standardized criteria for reporting data on highway bridges to the Federal Highway Administration. These specifications ensure consistency in bridge inspection and evaluation across the United States.",
    search: ``,
    discipline: "bridge inspection",
    filter: ["acronyms", "bridge"],
  },
  {
    term: "snowdrift",
    definition: "A deep accumulation of snow formed by wind movement and deposition.",
    search: ``,
    discipline: "bridge design",
    filter: ["compounds"],
  },
  {
    term: "snowplow",
    definition: "A vehicle or equipment used to remove snow from roadways and highways.",
    search: ``,
    discipline: "bridge design",
    filter: ["compounds"],
  },
  {
    term: "snowstorm",
    definition: "A weather event characterized by heavy snowfall and reduced visibility.",
    search: ``,
    discipline: "bridge design",
    filter: ["compounds"],
  },
  {
    term: "soil envelope",
    definition:
      "The layer of soil or backfill that surrounds a culvert structure, exerting pressure from the weight of the surrounding earth, which helps support the culvert and contributes to its structural stability.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "culvert"],
  },
  {
    term: "soil nails",
    definition:
      "Steel rods providing soil reinforcement into embankments that are either grouted into drilled holes or driven into soil at close spacing.",
    search: `What is "Soil Nails" in retaining wall design?`,
    discipline: "retaining wall design",
    filter: ["components", "design", "wall"],
  },
  {
    term: "soldier pile wall",
    definition:
      "A cantilever wall built using piles, typically rolled steel shapes and installed at regular intervals (nominally 6 to 10 foot spacings) to provide structural resistance to lateral earth pressures. Lagging is then placed between the soldier piles to both support and retain the soil material between piles and to transfer those lateral earth pressures to the soldier piles. Such walls can be fully cantilevered or include anchors for additional resistance.",
    search: `What is "Soldier Pile Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    filter: ["wall"],
  },
  {
    term: "some defects",
    definition: "Defect visibility is more than isolated and less than widespread.",
    search: `What are "Some Defects" in bridge inspection?`,
    discipline: "bridge design",
    order: 6,
    filter: ["defect classes"],
  },
  {
    term: "spalling",
    definition:
      "The breaking or flaking of concrete from its surface, typically caused by internal stresses such as freeze-thaw cycles or corrosion of embedded steel, leading to surface cracks and material loss.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "span",
    definition:
      "The horizontal distance between the supports of a bridge, typically measured from one end of the structure to the other. For an arch bridge, the span is the distance from springline to springline; for a simple span, it is measured from bent-to-bent or pier-to-pier. The span dimension directly influences the design and load-bearing capacity of the bridge.",
    discipline: "bridge design",
    filter: ["bridge", "design"],
  },
  {
    term: "spandrel wall",
    definition:
      "The vertical wall or partition that supports the arch ring and fills the space between the arch and the roadbed, providing additional stability to the structure.",
    discipline: "bridge design",
    filter: ["bridge", "components", "culvert"],
  },
  {
    term: "special inspection",
    definition:
      "An inspection scheduled at the discretion of the bridge owner, used to monitor a particular known or suspected deficiency, or to monitor special details or unusual characteristics of a bridge that does not necessarily have defects.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "splash erosion",
    definition: "Erosion caused by the impact of raindrops dislodging small soil particles, which are then carried away by water or wind.",
    discipline: "bridge design",
    filter: ["channel"],
  },
  {
    term: "splice plate",
    definition:
      "A steel plate used to join two structural members end-to-end, transferring loads across the connection and maintaining continuity in the structure.",
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "spread box beams",
    definition:
      "A type of beam used in bridge construction, typically made of reinforced concrete or pre-stressed concrete, where the beams are spaced wider apart than traditional box girders. These beams provide greater load distribution and are often used in situations where a bridge needs to accommodate wider spans without excessive weight. Spread box beams are popular in highway bridge design due to their versatility and efficiency.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds"],
  },
  {
    term: "springline",
    definition:
      "An imaginary horizontal line along the length of the arch barrel where the arch ring begins to curve away from the abutment. It marks the transition from the vertical support to the curved portion of the arch and serves as a key reference in design and construction.",
    search: ``,
    discipline: "arch design",
    filter: ["bridge", "compounds", "culvert"],
  },
  {
    term: "spurs",
    definition:
      "A river training countermeasure that extends from the bank to control flow direction and reduce erosion by deflecting water away from vulnerable areas.",
    discipline: "bridge design",
    filter: ["channel", "components"],
  },
  {
    term: "stainless steel",
    definition:
      "A corrosion-resistant steel alloy with high chromium content, sometimes used for bridge components in highly corrosive environments. More expensive than other steels and can suffer from stress corrosion cracking in certain conditions.",
    discipline: "bridge design",
    filter: ["materials"],
  },
  {
    term: "state",
    definition: "Any of the 50 States, the District of Columbia, or Puerto Rico.",
    search: ``,
    discipline: "bridge design",
    filter: ["org"],
  },
  {
    term: "state transportation department",
    definition: "That department, commission, board, or official of any State charged by its laws with the responsibility for highway construction.",
    search: ``,
    discipline: "bridge design",
    filter: ["org"],
  },
  {
    term: "stay-in-place forms",
    definition:
      "Permanent formwork, often made of steel or fiber-reinforced polymer, left in place after concrete placement to provide additional support and reduce construction time.",
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds", "design"],
  },
  {
    term: "steel girder",
    definition: "A large steel beam used to support a bridge deck and distribute loads to the substructure.",
    discipline: "bridge design",
    filter: ["materials"],
  },
  {
    term: "steel tube bridge railing",
    definition:
      "A bridge railing system made of steel tubes, designed to provide vehicle and pedestrian protection while maintaining visibility. Commonly used for its strength, durability, and ability to accommodate aesthetic or architectural designs.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "stiffener",
    definition:
      "A structural element, typically a plate or rib, used to reinforce and increase the rigidity of beams, girders, or other members to prevent deformation or buckling.",
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "stiffness",
    definition:
      "A measure of a material's resistance to deformation under load, defined as the ratio of applied force to the resulting displacement.",
    search: ``,
    discipline: "materials engineering",
    filter: ["design", "NSTM"],
  },
  {
    term: "stormwater",
    definition: "Water from precipitation that flows over surfaces and is managed through drainage systems to prevent flooding and erosion.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "compounds", "design", "culvert"],
  },
  {
    term: "strain",
    definition:
      "The deformation or displacement of material that results from an applied stress, expressed as the ratio of change in dimension to the original dimension.",
    search: ``,
    discipline: "materials engineering",
    filter: ["design", "NSTM"],
  },
  {
    term: "strand",
    definition:
      "A long, thin length of steel or other material used in bridge construction, particularly in prestressed concrete applications. Strands are often bundled together to create cables or tendons that provide tensile strength to bridge components. Prestressing strands allow the concrete to resist tensile forces and improve the overall durability and performance of the bridge.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "materials"],
  },
  {
    term: "Strategic Highway Network (STRAHNET) Connectors",
    definition: "Highways which provide access between major military installations and highways which are part of the Strategic Highway Network.",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms", "bridge", "roadway"],
  },
  {
    term: "Strategic Highway Network (STRAHNET)",
    definition:
      "A network of highways which are important to the United States' strategic defense policy and which provide defense access, continuity, and emergency capabilities for defense purposes.",
    search: ``,
    discipline: "bridge design",
    filter: ["acronyms", "bridge", "roadway"],
  },
  {
    term: "stress",
    definition:
      "The internal resistance offered by a material to an external force, measured as force per unit area. It quantifies the intensity of internal forces in a material.",
    search: ``,
    discipline: "materials engineering",
    filter: ["design", "NSTM"],
  },
  {
    term: "stress riser",
    definition:
      "A localized area where stress is concentrated due to a sudden change in geometry, such as a hole, notch, or weld end. These areas are more likely to initiate cracks under repeated loading.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["defects", "NSTM"],
  },
  {
    term: "stress-strain curve",
    definition:
      "A graphical representation of a material's response to applied stress, showing the relationship between stress and strain, and indicating properties like elasticity, yield strength, and tensile strength.",
    search: ``,
    discipline: "materials engineering",
    filter: ["design", "NSTM"],
  },
  {
    term: "stringer",
    definition:
      "A longitudinal beam in a bridge superstructure that supports the deck and distributes loads to transverse floorbeams. Stringers run parallel to the direction of traffic and are spaced to carry wheel loads from the deck. In typical bridge floor systems, stringers span between floorbeams, which in turn transfer loads to girders or trusses. Stringers are generally smaller than girders and floorbeams and serve as intermediate members in the load path from the deck to the main supporting structure.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "strip seal (SS) joint",
    definition:
      "A joint system consisting of a steel extrusion and a flexible neoprene gland that accommodates movement while maintaining a seal. Strip seals are effective at preventing water infiltration but have limited movement capacity. If the gland is damaged or dislodged, water intrusion can lead to deck deterioration. Improper installation or debris buildup can also compromise performance.",
    discipline: "bridge design",
    filter: ["acronyms", "joints"],
  },
  {
    term: "structural review",
    definition:
      "A review by a person qualified to evaluate the field-observed conditions and make a determination of the impacts of the conditions on the performance of the bridge member or entire bridge. Structural reviews may include a review of the field inspection notes and photographs, review of as-built plans, or analysis as deemed appropriate.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "design"],
  },
  {
    term: "structural steel",
    definition:
      "A category of steel used for making construction materials in various shapes. It is designed to have high strength and ductility, making it suitable for structural applications.",
    search: ``,
    discipline: "materials engineering",
    filter: ["materials"],
  },
  {
    term: "structurally deficient",
    definition:
      "A condition indicating deterioration in key load-bearing elements, often requiring repair, load restriction, or increased inspection frequency.",
    discipline: "bridge design",
    filter: ["bridge", "design"],
  },
  {
    term: "subdistrict",
    definition: "A smaller administrative division within a larger district, often used in transportation planning.",
    search: ``,
    discipline: "bridge design",
    link: `https://entapps.indot.in.gov/dotmaps/districtmaps/`,
    filter: ["compounds", "org"],
  },
  {
    term: "superelevation",
    definition: "The banking of the roadway at curves to counteract centrifugal force and improve vehicle stability.",
    search: ``,
    discipline: "bridge design",
    filter: ["roadway", "compounds", "design"],
  },
  {
    term: "superstructure",
    definition:
      "The structural portion of a bridge that supports the deck and transfers live and dead loads to the substructure. It typically includes beams, girders, trusses, or similar primary load-carrying elements. In bridge inspection, the deck is evaluated separately from the superstructure, except when the deck itself acts as the main load-bearing component, as in slab bridges.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds"],
  },
  {
    term: "supported bridge",
    definition:
      "A bridge with temporary shoring, supports, repairs, or supplemental members that are installed to keep the bridge open despite deficiencies in the permanent structure, pending future repairs or replacement.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "surface dulling",
    definition:
      "The gradual loss of surface texture or smoothness on a material, often caused by abrasion, weathering, or wear. In bridges, surface dulling can occur on the deck or other exposed parts, affecting aesthetics and potentially leading to decreased traction. While not always indicative of structural damage, surface dulling may require attention if it compromises safety or functionality.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "surface polishing",
    definition:
      "The process of smoothening or shining the surface of a material, typically to improve its appearance or durability. In bridge decks, surface polishing may result from repeated traffic wear, and it can reduce friction, making the surface more slippery. While surface polishing is primarily cosmetic, it could indicate the need for resurfacing if traction is significantly impacted.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "surface thinning",
    definition:
      "The reduction in the thickness of a material's surface layer, often due to erosion, abrasion, or chemical action. In bridges, surface thinning can affect the deck, barriers, or other components and may lead to a decrease in load-bearing capacity. It is a key indicator of wear and may necessitate repairs or resurfacing to maintain the bridge's integrity.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "suspension bridge",
    definition:
      "A type of bridge in which the deck is suspended from cables that are strung between towers. The main advantage of a suspension bridge is its ability to span long distances without the need for intermediate supports. This design is particularly effective for crossing wide water bodies or deep valleys where other bridge types would be less feasible.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "suspension cables",
    definition:
      "The main load-carrying elements in a suspension bridge. They support the deck by transferring its weight to towers and anchorages through tension.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "swales",
    definition:
      "Shallow, sloped channels designed to convey and filter stormwater, reducing runoff velocity and promoting infiltration. Often vegetated to enhance erosion control and water quality.",
    discipline: "bridge design",
    filter: ["channel", "components", "design"],
  },
  {
    term: "sway bracing",
    definition: "Bracing used to resist lateral forces that cause side-to-side movement of a structure, improving its stability.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "system redundancy",
    definition:
      "A redundancy that exists in a bridge system without load path redundancy, such that fracture of the cross-section at one location of a primary member will not cause a portion of or the entire bridge to collapse.",
    search: ``,
    discipline: "bridge design",
    filter: ["design", "NSTM"],
  },

  // :::::

  {
    term: "T1 steel (A514)",
    definition:
      "A high-strength, quenched-and-tempered alloy steel used for structural applications requiring high load capacity. It has excellent strength but can be challenging to weld due to its susceptibility to hydrogen cracking. Preheating and controlled welding procedures are required to prevent embrittlement.",
    search: `What is "T1 Steel" in bridge design?`,
    discipline: "bridge design",
    letter: "letter-jump-t",
    filter: ["materials", "NSTM"],
  },
  {
    term: "tack welds",
    definition:
      "A temporary weld used to hold parts in position before final welding. These small welds are not typically designed to carry load and are often left in place. If left in the finished structure, they act as uncategorized fatigue-prone details and typically fall into AASHTO fatigue category E or E'. Tack welds are allowed in modern design but must be incorporated into the main weld or removed.",
    search: "",
    discipline: "bridge design",
    filter: ["design", "NSTM", "welds"],
  },

  {
    term: "tangent line",
    definition:
      "A straight line that touches a curve at a single point without crossing it. Tangent lines define alignment transitions, guiding roadway curvature and structural layout for smooth vehicular movement.",
    discipline: "bridge design",
    filter: ["design"],
  },
  {
    term: "team leader",
    definition:
      "The on-site, nationally certified bridge inspector in charge of an inspection team and responsible for planning, preparing, performing, and reporting on bridge field inspections.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "temporary bridge",
    definition: "A bridge which is constructed to carry highway traffic until the permanent facility is built, repaired, rehabilitated, or replaced.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "design"],
  },
  {
    term: "temporary scour countermeasures",
    definition:
      "Short-term erosion control methods, often involving the use of loosely placed materials like riprap, gravel, or dumped rock, to protect vulnerable areas from scour and erosion until more permanent solutions can be implemented.",
    discipline: "bridge design",
    filter: ["bridge", "channel", "components"],
  },
  {
    term: "tendon",
    definition:
      "A pre-stressed steel cable or wire used in concrete structures to apply tension, enhancing their ability to resist bending or tension forces. Tendons are typically used in pre-stressed concrete bridges to improve strength and durability. They are either placed in tension before the concrete is poured or after the concrete has set, depending on the method of pre-stressing.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "materials"],
  },
  {
    term: "tensile strength",
    definition:
      "The maximum stress that a material can endure while being stretched or pulled before breaking. It indicates the material's resistance to tension.",
    search: ``,
    discipline: "materials engineering",
    filter: ["design", "NSTM"],
  },
  {
    term: "tension",
    definition:
      "A force that stretches or elongates a material, opposite of compression. In bridge design, tension forces act on elements such as cables, tendons, or beams under load. Proper tension management is essential for the structural integrity of suspension bridges, cables, and pre-stressed concrete components.",
    search: ``,
    discipline: "structural engineering",
    filter: ["design", "NSTM"],
  },
  {
    term: "tension zones",
    definition:
      "Regions in a structural element where forces act to pull the material apart. These areas are more vulnerable to cracking and require careful detail and reinforcement.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["design", "NSTM"],
  },
  {
    term: "terminal joint",
    definition: "A joint located at the end of a bridge deck or approach slab, designed to accommodate expansion and contraction.",
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "TGB transition",
    definition:
      "A guardrail transition system that connects rigid concrete bridge railings with W-Beam approach rails using a Thrie Beam segment. This transition ensures a smooth, safe connection between the rigid concrete barrier and the flexible W-Beam rail, while leveraging the Thrie Beam segment to accommodate the shift in barrier type.",
    search: `What is "Thrie Beam to W-Beam Transition" in bridge design?`,
    discipline: "bridge design",
    filter: ["acronyms", "bridge", "components", "roadway"],
  },
  {
    term: "thalweg",
    definition:
      "The line of lowest elevation within a channel, often following the natural flow path of water, marking the deepest part of the channel.",
    discipline: "bridge design",
    filter: ["channel", "design"],
  },
  {
    term: "thermal expansion",
    definition:
      "A specific type of expansion that occurs when a material is heated. Heat increases atomic movement, which causes materials to expand. Cooling causes contraction as atomic motion slows and spacing decreases. This thermal movement can affect alignment and stress in bridge components if not properly managed.",
    discipline: "bridge design",
    filter: ["design", "joints", "materials"],
  },
  {
    term: "thin deck overlay",
    definition:
      "A layer of material applied over a bridge deck to restore its surface and protect it from wear, weather, and traffic loads. Thin deck overlays are typically made of materials like asphalt or concrete and are designed to bond with the existing deck surface. They provide a cost-effective solution for addressing surface issues without requiring a full deck replacement.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "materials"],
  },
  {
    term: "thrie beam guardrail",
    definition: "A guardrail similar to the W-beam but with an additional flange for extra strength, used in higher-risk locations.",
    discipline: "bridge design",
    filter: ["components", "roadway"],
  },
  {
    term: "tie beam",
    definition:
      "A horizontal member that connects vertical columns above an open spandrel arch, helping to keep them aligned and share loads across the structure. It adds lateral stability but does not resist outward thrust between arch ends.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds"],
  },

  {
    term: "tie girder",
    definition:
      "A horizontal structural member that connects two or more vertical components, such as columns or supports, to maintain stability and prevent lateral movement. Tie girders are commonly used in bridges to tie together different parts of the structure and provide additional support. They help distribute forces and increase the overall rigidity of the bridge.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "tieback anchor",
    definition:
      "A structural element used in retaining walls, consisting of a high-strength tendon grouted into a drilled hole and anchored in stable soil. The tendon is then tensioned and connected to the wall to resist lateral earth pressures, preventing movement and enhancing stability.",
    search: `What is "Anchor" in retaining wall design?`,
    discipline: "retaining wall design",
    filter: ["components", "compounds", "design", "wall"],
  },
  {
    term: "tining",
    definition:
      "The process of creating a textured surface on concrete using specialized equipment, often in the form of tines or brushes. Tining is applied to bridge decks to provide better skid resistance and traction, especially in wet or icy conditions. It helps improve safety by reducing the likelihood of vehicles skidding on the bridge surface.",
    search: ``,
    discipline: "nridge design",
    filter: ["bridge", "design", "roadway"],
  },
  {
    term: "tooth (finger) joint",
    definition:
      "A mechanical joint where two interlocking finger-like projections fit together to accommodate relative movement between bridge sections. Finger joints can create noise under traffic, collect debris leading to clogging, and suffer from misalignment during installation, causing uneven wear.",
    discipline: "bridge design",
    filter: ["joints"],
  },
  {
    term: "torsion",
    definition:
      "A twisting force that causes a material or structure to rotate along its axis. In bridges, torsional forces may arise from uneven load distribution or external factors such as wind or traffic. Structural components, such as beams and girders, must be designed to resist torsion to prevent deformation or failure.",
    search: ``,
    discipline: "structural engineering",
    filter: ["design", "NSTM"],
  },
  {
    term: "tower",
    definition:
      "A tall vertical structure, often found in suspension or cable-stayed bridges, that supports the main cables or other load-bearing elements. Towers provide the necessary height and stability to allow the bridge to span long distances. In addition to their structural role, towers are often significant visual elements of the bridge design.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components"],
  },
  {
    term: "traffic barrier",
    definition: "A safety barrier used to separate lanes, protect vehicles, and prevent roadway departures.",
    discipline: "bridge design",
    filter: ["components", "design", "roadway"],
  },
  {
    term: "transition curve",
    definition: "A curve that gradually changes the curvature of the road to provide a smoother transition between straight and curved sections.",
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },
  {
    term: "transition railing",
    definition: "A section of guardrail used to smoothly transition between different types of guardrails, ensuring seamless vehicle redirection.",
    discipline: "bridge design",
    filter: ["components", "roadway"],
  },
  {
    term: "transverse connection plate",
    definition:
      "A plate used to connect transverse elements, such as diaphragms or cross bracing, to main girders. It transfers load between members and enhances structural stability across the width of the bridge. The end terminations in a transverse weld are classified as AASHTO fatigue category C'.",
    search: ``,
    discipline: "bridge construction",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "transverse cracking",
    definition:
      "Cracks that form perpendicular to the primary direction of stress or traffic flow in a bridge component. Transverse cracks can appear on decks, beams, or other structural elements and are typically caused by shrinkage, thermal cycling, or excessive load. If left unaddressed, transverse cracking can compromise the integrity of the structure, especially if it leads to water infiltration and corrosion.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "transverse stiffener",
    definition:
      "A stiffener placed perpendicular to the length of a structural member, typically in compression regions, to prevent web buckling under load. Transverse stiffeners enhance the stability of the member. The terminations in the stiffener's transverse welds are classified as AASHTO fatigue category C'.",
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "traveled way",
    definition: "The portion of roadway for the movement of vehicles, exclusive of shoulders.",
    search: ``,
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "triaxial restraint",
    definition:
      "A condition where a material is restrained from moving in three perpendicular directions, preventing elastic or plastic deformation. In bridge construction, this occurs when structural elements or welds tightly confine a component, increasing internal stress and raising the risk of fracture or other failure.",
    search: ``,
    discipline: "structural engineering",
    filter: ["design", "defects", "NSTM"],
  },
  {
    term: "triaxial stress",
    definition:
      "A state of stress where forces act in all three perpendicular directions. This occurs in confined materials under pressure, such as in geotechnical or high-pressure applications.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["design", "NSTM"],
  },
  {
    term: "tributary",
    definition:
      "The portion of a structure or area that contributes to the load on a specific point or component. In the context of bridge design, a tributary area refers to the section of a bridge deck or support that bears the load from the surrounding traffic or structural elements. Calculating the tributary area is essential for proper load distribution and ensuring that individual components are sized appropriately.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel"],
  },
  {
    term: "truss",
    definition:
      "A structural framework consisting of interconnected elements that form a series of triangular units. Trusses are commonly used in bridge design to support loads over large spans while minimizing material use. They are designed to efficiently distribute forces, making them an essential part of many long-span bridges, such as railroad or highway structures.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "turned-down end terminal",
    definition:
      "A type of guardrail end terminal designed with a downward-curved end to redirect vehicles safely upon impact. This design helps to reduce the risk of vehicle penetration or severe damage, allowing for a more controlled deceleration and safer collision outcome.",
    discipline: "bridge design",
    filter: ["components", "roadway"],
  },

  // :::::

  {
    term: "ultrasonic testing (UT)",
    definition:
      "A non-destructive testing method that uses high-frequency sound waves to detect internal flaws, discontinuities, and thickness variations in welds and structural components.",
    discipline: "bridge design",
    letter: "letter-jump-u",
    filter: ["acronyms", "NDT"],
  },
  {
    term: "underbridge truck",
    definition:
      "A specialized vehicle equipped with articulating booms and an inspection platform. It operates from the travel lanes and deploys over the side of the bridge, allowing operators to access the underside. The two main U.S. manufacturers are Aspen Aerials and Paxton-Mitchell.",
    discipline: "bridge design",
    filter: ["bridge", "design"],
  },
  {
    term: "undercutting",
    definition:
      "The erosion of the base of a channel's bank or bed, causing instability and leading to the collapse or sloughing of the bank material.",
    discipline: "bridge design",
    filter: ["channel", "defects"],
  },
  {
    term: "underdrain",
    definition: "A drainage system placed below the surface of the ground to remove excess water and prevent soil erosion or saturation.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "compounds"],
  },
  {
    term: "underfill bridge",
    definition:
      "A type of bridge where fill material is placed between the wearing surface and the structure. The fill helps distribute loads to the underlying structural elements, which may include beams, arches, or other systems. The design may or may not include a separate deck. Sometimes simply called an underfill.",
    discipline: "bridge design",
    filter: ["compounds", "materials"],
  },
  {
    term: "underfill concrete arch",
    definition:
      "A type of bridge structure where fill material is placed between the wearing surface and a concrete arch, contained within the spandrel walls. The fill supports the roadway and helps distribute loads to the arch. Loss of fill from behind the spandrel walls is a known failure mechanism, as it can compromise the stability of the structure.",
    discipline: "bridge design",
    filter: ["bridge", "culvert"],
  },
  {
    term: "undermining",
    definition:
      "The erosion process where material is removed from beneath a structure or support, leading to a loss of stability and potential failure of the overlying or surrounding elements. This commonly occurs around foundations, footings, or piers.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "defects"],
  },
  {
    term: "underpass",
    definition: "A passage that allows vehicles, pedestrians, or water to travel beneath a road, railway, or other obstruction.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "compounds", "roadway"],
  },
  {
    term: "underwater bridge inspector",
    definition:
      "A certified diver who conducts visual and tactile inspections of the underwater elements of a bridge, including substructure, piers, footings, scour areas, and embedded components, to assess condition, detect defects, and document maintenance needs.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "underwater inspection",
    definition:
      "Inspection of the underwater portion of a bridge substructure and the surrounding channel, which cannot be inspected visually at low water or by wading or probing, and generally requiring diving or other appropriate techniques.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "channel"],
  },
  {
    term: "uniaxial stress",
    definition:
      "A state of stress where force is applied in only one direction along a single axis. The material experiences tension or compression along that axis while other directions remain unstressed.",
    search: ``,
    discipline: "structural mechanics",
    filter: ["design", "NSTM"],
  },
  {
    term: "unknown foundations",
    definition:
      "Foundations of bridges over waterways where complete details are unknown because either the foundation type and depth are unknown, or the foundation type is known, but its depth is unknown, and therefore cannot be appraised for scour vulnerability.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge"],
  },
  {
    term: "upheaval",
    definition:
      "A localized rise in a surface often caused by expanding soils, frost heave, or subgrade movement, leading to irregular elevation changes.",
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "upper chord",
    definition:
      "The top horizontal component of a truss or structural frame, typically in tension, which resists downward forces. The upper chord works in conjunction with the lower chord and diagonals to form the triangular units that make up the truss. It plays a crucial role in distributing loads and maintaining the stability of the overall structure.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "upstream",
    definition:
      "The direction opposite to the flow of water in a river, stream, or drainage system, moving toward the source or higher elevation. In engineering, it refers to structures, impacts, or conditions occurring before the point of interest in the flow path.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "compounds"],
  },
  {
    term: "urgent critical finding",
    definition: "A critical finding that necessitates immediate action within 3 days.",
    discipline: "bridge inspection",
    filter: ["bridge"],
  },

  // :::::

  {
    term: "vertical alignment",
    definition: "The configuration of the roadway in the vertical plane, including grades, curves, and elevations.",
    discipline: "bridge design",
    letter: "letter-jump-v",
    filter: ["design", "roadway"],
  },
  {
    term: "vertical curve",
    definition: "A curve in the vertical alignment of the roadway, typically used to transition between different grades.",
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },
  {
    term: "vertical grade",
    definition: "The slope or incline of the roadway along the vertical plane, expressed as a percentage.",
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },
  {
    term: "vertical member",
    definition:
      "A structural component oriented upright to carry axial or bending loads. Vertical members in trusses, columns, and supports help transfer forces between horizontal elements and foundations.",
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "vertical offset",
    definition:
      "A measurable difference in elevation between two points that were originally intended to align. It indicates a displacement in the vertical direction and can result from various causes such as settlement, heave, thermal movement, impact, or construction error. The offset is the observed deviation and its cause must be determined through inspection or analysis.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },

  // :::::

  {
    term: "w-beam guardrail",
    definition:
      "A common guardrail type with a W-shaped cross-section, typically used on highways. It’s effective in absorbing impact and redirecting vehicles.",
    discipline: "bridge design",
    letter: "letter-jump-w",
    filter: ["roadway"],
  },
  {
    term: "warning signs",
    definition:
      "Visual indicators used to alert drivers to unexpected road conditions or hazards ahead, typically using a yellow background with black symbols or text.",
    discipline: "bridge design",
    filter: ["roadway"],
  },
  {
    term: "waterline",
    definition: "The elevation or mark indicating the typical level of water in a stream, river, or other water body near a structure.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "compounds"],
  },
  {
    term: "watershed",
    definition: "An area of land that drains all precipitation and runoff to a common outlet, such as a river, bay, or other body of water.",
    search: ``,
    discipline: "bridge design",
    filter: ["channel", "compounds", "design"],
  },
  {
    term: "wattle",
    definition:
      "A cylindrical erosion control device made from straw, coir, or synthetic material, placed along slopes or drainage areas to slow water flow and trap sediment.",
    discipline: "bridge design",
    filter: ["channel", "components", "design"],
  },
  {
    term: "wear",
    definition:
      "The gradual degradation of a material's surface due to friction, abrasion, or environmental factors. In bridges, wear can occur on surfaces like the deck, bearings, or expansion joints due to regular use and exposure to the elements. While some wear is inevitable, excessive wear can reduce the effectiveness of components, necessitating maintenance or replacement.",
    search: ``,
    discipline: "bridge design",
    filter: ["defects"],
  },
  {
    term: "weathering steel (Corten)",
    definition:
      "A high-strength, low-alloy steel designed to form a protective rust layer that reduces further corrosion. Susceptible to accelerated corrosion in environments with frequent moisture exposure, especially where water can collect.",
    discipline: "bridge design",
    filter: ["materials"],
  },
  {
    term: "web",
    definition:
      "The vertical or diagonal component of a structural element, such as a beam or truss, that connects the flanges and helps to resist shear forces. The web is typically the central portion of the beam or truss, designed to bear loads that act in the direction perpendicular to the element. In trusses, the web members are usually in compression or tension, depending on the load distribution.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "NSTM"],
  },
  {
    term: "web gap",
    definition:
      "The space between the end of a connection plate or diaphragm and the nearest flange in a girder web. This gap allows flexibility but can lead to out of plane deformation and distortion-induced fatigue. Cracks often initiate at the corners of the gap due to secondary stresses caused by unbalanced loading or stiffness differences at the connection.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "design", "NSTM"],
  },
  {
    term: "weep hole",
    definition:
      "A small drainage opening in retaining walls, bridge abutments, or concrete structures that allows trapped water to escape, reducing hydrostatic pressure.",
    discipline: "bridge design",
    filter: ["bridge", "components", "culvert", "wall"],
  },
  {
    term: "weld toe",
    definition:
      "The transition between the base metal and the weld, a critical area susceptible to fatigue cracking if not properly blended or inspected.",
    discipline: "bridge design",
    filter: ["defects", "welds"],
  },
  {
    term: "welds",
    definition:
      "Fused joints between metal components formed by applying heat and filler material, critical for structural integrity in steel bridges and components.",
    discipline: "bridge design",
    filter: ["components", "welds"],
  },
  {
    term: "WGB transition",
    definition:
      "A guardrail transition system used to connect rigid concrete bridge railings to W-beam approach rails. This transition ensures a smooth and safe shift between the more rigid concrete barrier and the flexible W-beam rail, enhancing vehicle containment and impact absorption.",
    search: `What is "W-Beam to Rigid Bridge Rail Transition" in bridge design?`,
    discipline: "bridge design",
    filter: ["acronyms", "roadway"],
  },
  {
    term: "wide-width cracks",
    definition: "Cracks wider than 0.06 inches that appear in the surface of concrete.",
    search: ``,
    discipline: "bridge deck maintenance",
    filter: ["defects"],
  },
  {
    term: "widening (channel)",
    definition: "The increase in the horizontal width of a channel, typically caused by bank erosion or undercutting.",
    discipline: "bridge design",
    filter: ["channel", "defects"],
  },
  {
    term: "widening (roadway)",
    definition:
      "The expansion of an existing roadway or bridge deck to increase capacity, improve safety, or accommodate additional lanes and traffic loads.",
    discipline: "bridge design",
    filter: ["design", "roadway"],
  },
  {
    term: "widespread defects",
    definition: "Defect is visible across many incident locations.",
    search: `What are "Widespread Defects" in bridge inspection?`,
    discipline: "bridge inspection",
    order: 7,
    filter: ["defect classes"],
  },
  {
    term: "wind erosion",
    definition:
      "The process by which wind removes or transports soil, sediment, or other materials from a surface. Wind erosion can affect bridges, especially in arid or coastal environments, by wearing down exposed components, such as embankments, abutments, or the bridge deck. Over time, wind erosion can weaken structural components and contribute to foundation instability or surface deterioration.",
    search: ``,
    discipline: "highway design",
    filter: ["channel"],
  },
  {
    term: "wingwall",
    definition:
      "A wall that extends from the sides of a bridge abutment at an angle, typically to retain soil and stabilize the embankment. It is sloped to follow the natural terrain and provides additional support along the approach to the bridge. Unlike cheek walls, wingwalls are not perpendicular to the abutment.",
    search: ``,
    discipline: "bridge design",
    filter: ["bridge", "components", "compounds", "culvert"],
  },
  {
    term: "work zone",
    definition:
      "An area of a roadway where construction, maintenance, or utility work is taking place and traffic conditions are altered as a result. It may include lane closures, detours, flaggers, barriers, and signs used to protect workers and guide drivers safely through or around the site.",
    search: ``,
    discipline: "bridge design",
    filter: ["compounds", "design"],
  },
  {
    term: "wrought iron",
    definition:
      "A tough, malleable form of iron with low carbon content, historically used in construction and decorative applications. It is characterized by its fibrous inclusions, giving it a grain resembling wood.",
    search: ``,
    discipline: "materials engineering",
    filter: ["materials"],
  },
  {
    term: "WT transition",
    definition:
      "A guardrail transition system designed to connect Thrie Beam bridge rail to W-Beam approach guardrail. This transition provides a smooth and safe connection between the rigid Thrie Beam barrier and the more flexible W-Beam rail, ensuring proper vehicle containment and impact resistance. This does not transition to a concrete barrier wall.",
    serach: `What is "Thrie Beam to W-Beam Transition" in bridge design?`,
    discipline: "bridge design",
    filter: ["components", "roadway"],
  },
  {
    term: "yield strength / yield point / elastic limit",
    definition:
      "The stress level where a material stops behaving elastically and begins to deform permanently. Up to this point, it returns to its original shape when unloaded. Beyond it, deformation becomes permanent. Yield strength measures this limit, yield point marks the exact transition, and elastic limit describes the highest fully recoverable stress.",
    search: ``,
    discipline: "materials engineering",
    filter: ["design", "NSTM"],
  },
];

const defectDefinitions = [
  {
    term: "inherent defect",
    definition:
      "Not indicative of damage or deterioration but is either a characteristic of the material or the result of normal construction practices. Examples include insignificant width fabrication, shrinkage, and temperature cracks, pop-outs, or shallow edge chips and spalls.",
    search: `What is an "Inherent Defect" in bridge design?`,
    discipline: "bridge design",
  },
  {
    term: "minor defect",
    definition:
      "Damage or deterioration has initiated but is not considered significant. Examples include minimal to moderate width cracks with no efflorescence or rust stains, shallow depth spalls with no exposed reinforcing steel, or speckled surface rust.",
    search: `What is a "Minor Defect" in bridge inspection?`,
    discipline: "bridge inspection",
  },
  {
    term: "moderate defect",
    definition:
      "Damage or deterioration is significant, but the strength or performance is not yet adversely affected. Examples include moderate width cracks with either efflorescence or rust stains, spalls with exposed reinforcing steel, or more pronounced surface rust and corrosion with either pitting or delamination. Defects or deterioration at this level may not yet warrant a structural or geotechnical review.",
    search: `What is a "Moderate Defect" in bridge inspection?`,
    discipline: "bridge inspection",
  },
  {
    term: "major defect",
    definition:
      "Damage or deterioration is significant, and the strength or performance is adversely affected. Examples would be similar in type to moderate defects but of greater magnitude and severity that, upon reporting, would require a structural or geotechnical review.",
    search: `What is a "Major Defect" in bridge inspection?`,
    discipline: "bridge inspection",
  },
  {
    term: "isolated defects",
    definition: "Defect is visible in one or few incident locations.",
    search: `What are "Isolated Defects" in bridge inspection?`,
    discipline: "bridge inspection",
  },
  {
    term: "some defects",
    definition: "Defect visibility is more than isolated and less than widespread.",
    search: `What are "Some Defects" in bridge inspection?`,
    discipline: "bridge design",
  },
  {
    term: "widespread defects",
    definition: "Defect is visible across many incident locations.",
    search: `What are "Widespread Defects" in bridge inspection?`,
    discipline: "bridge inspection",
  },
];

const indianaCounties = [
  { code: "01", description: "Adams" },
  { code: "02", description: "Allen" },
  { code: "03", description: "Bartholomew" },
  { code: "04", description: "Benton" },
  { code: "05", description: "Blackford" },
  { code: "06", description: "Boone" },
  { code: "07", description: "Brown" },
  { code: "08", description: "Carroll" },
  { code: "09", description: "Cass" },
  { code: "10", description: "Clark" },
  { code: "11", description: "Clay" },
  { code: "12", description: "Clinton" },
  { code: "13", description: "Crawford" },
  { code: "14", description: "Daviess" },
  { code: "15", description: "Dearborn" },
  { code: "16", description: "Decatur" },
  { code: "17", description: "Dekalb" },
  { code: "18", description: "Delaware" },
  { code: "19", description: "Dubois" },
  { code: "20", description: "Elkhart" },
  { code: "21", description: "Fayette" },
  { code: "22", description: "Floyd" },
  { code: "23", description: "Fountain" },
  { code: "24", description: "Franklin" },
  { code: "25", description: "Fulton" },
  { code: "26", description: "Gibson" },
  { code: "27", description: "Grant" },
  { code: "28", description: "Greene" },
  { code: "29", description: "Hamilton" },
  { code: "30", description: "Hancock" },
  { code: "31", description: "Harrison" },
  { code: "32", description: "Hendricks" },
  { code: "33", description: "Henry" },
  { code: "34", description: "Howard" },
  { code: "35", description: "Huntington" },
  { code: "36", description: "Jackson" },
  { code: "37", description: "Jasper" },
  { code: "38", description: "Jay" },
  { code: "39", description: "Jefferson" },
  { code: "40", description: "Jennings" },
  { code: "41", description: "Johnson" },
  { code: "42", description: "Knox" },
  { code: "43", description: "Kosciusko" },
  { code: "44", description: "LaGrange" },
  { code: "45", description: "Lake" },
  { code: "46", description: "LaPorte" },
  { code: "47", description: "Lawrence" },
  { code: "48", description: "Madison" },
  { code: "49", description: "Marion" },
  { code: "50", description: "Marshall" },
  { code: "51", description: "Martin" },
  { code: "52", description: "Miami" },
  { code: "53", description: "Monroe" },
  { code: "54", description: "Montgomery" },
  { code: "55", description: "Morgan" },
  { code: "56", description: "Newton" },
  { code: "57", description: "Noble" },
  { code: "58", description: "Ohio" },
  { code: "59", description: "Orange" },
  { code: "60", description: "Owen" },
  { code: "61", description: "Parke" },
  { code: "62", description: "Perry" },
  { code: "63", description: "Pike" },
  { code: "64", description: "Porter" },
  { code: "65", description: "Posey" },
  { code: "66", description: "Pulaski" },
  { code: "67", description: "Putnam" },
  { code: "68", description: "Randolph" },
  { code: "69", description: "Ripley" },
  { code: "70", description: "Rush" },
  { code: "71", description: "St. Joseph" },
  { code: "72", description: "Scott" },
  { code: "73", description: "Shelby" },
  { code: "74", description: "Spencer" },
  { code: "75", description: "Starke" },
  { code: "76", description: "Steuben" },
  { code: "77", description: "Sullivan" },
  { code: "78", description: "Switzerland" },
  { code: "79", description: "Tippecanoe" },
  { code: "80", description: "Tipton" },
  { code: "81", description: "Union" },
  { code: "82", description: "Vanderburgh" },
  { code: "83", description: "Vermillion" },
  { code: "84", description: "Vigo" },
  { code: "85", description: "Wabash" },
  { code: "86", description: "Warren" },
  { code: "87", description: "Warrick" },
  { code: "88", description: "Washington" },
  { code: "89", description: "Wayne" },
  { code: "90", description: "Wells" },
  { code: "91", description: "White" },
  { code: "92", description: "Whitley" },
];

const glossaryBIRM = [
  {
    term: "AASHTO",
    definition:
      "An organization that develops and publishes standards for transportation infrastructure, evolving from its earlier form, AASHO, to address broader highway and transportation needs.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "American Association of State Highway and Transportation Officials (AASHTO) Manual",
    definition:
      "A reference document outlining procedures and criteria for evaluating existing structures, recognized in federal regulation and used as a benchmark in condition assessments.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "abrasion",
    definition:
      "The progressive loss of material from a surface due to friction, commonly caused by particles carried by water, wind, or contact with other surfaces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "absorption",
    definition: "The process in which a liquid penetrates into a porous solid, influenced by the material’s permeability and the fluid’s properties.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "abutment",
    definition: "The end support of a span that transfers vertical and horizontal forces into the ground and anchors adjacent structural components.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "ADT",
    definition:
      "A statistical measure representing the average number of vehicles passing a point in both directions on a roadway over the span of a typical 24-hour day.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "ADTT",
    definition:
      "A metric tracking the average daily number of commercial or heavy trucks using a specific segment of roadway, often used in load-related evaluations.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "admixture",
    definition:
      "A supplementary material added to a concrete mix to modify properties such as workability, setting time, durability, or resistance to environmental factors.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "aggradation",
    definition:
      "A natural process where sediment builds up over time, raising the bed of a stream or river and potentially affecting water flow and channel stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "aggregate",
    definition:
      "A collection of mineral particles such as sand, gravel, or crushed stone, commonly used to enhance volume, strength, and durability in composite materials.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "air entrainment",
    definition:
      "The intentional inclusion of tiny air bubbles in a material mixture to increase resistance to freeze-thaw cycles and reduce cracking from thermal expansion.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "alkali silica reactivity (ASR)",
    definition:
      "A chemical reaction between alkalis and certain siliceous aggregates that produces a gel, which absorbs moisture and expands, leading to internal cracking.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "alignment",
    definition:
      "The geometric relationship between elements along horizontal and vertical planes, influencing fit, function, and overall continuity of connected components.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "alignment bearing",
    definition:
      "A fixed device placed to restrict lateral displacement and maintain positional integrity between structural parts under movement or load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "alligator cracking",
    definition:
      "A pattern of interconnecting surface cracks caused by structural fatigue or poor support conditions, typically forming rectangular or blocky segments.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "alloy",
    definition:
      "A uniform blend of metals or metal with other elements that results in enhanced strength, corrosion resistance, or other mechanical properties.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "anchorage",
    definition:
      "An integrated set of components embedded into stable material, designed to restrain or transfer forces and keep structural elements in place.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "anchor bolt",
    definition:
      "A steel rod embedded in concrete and fitted with hardware to secure connected parts, ensuring structural stability under load or vibration.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "anchor span",
    definition:
      "A counterbalancing segment that offsets the weight or moment of a cantilevered section, maintaining equilibrium across adjoining spans.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "angle",
    definition:
      "A structural shape featuring two flat legs joined at a right angle, offering resistance to bending and torsional forces in two planes.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "anisotropy",
    definition:
      "A material property indicating directional variation in strength or behavior, often resulting from internal structure or manufacturing processes.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "anode",
    definition:
      "The location within a corrosion system where metal loss occurs due to electrochemical oxidation, typically the sacrificial part of a circuit.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "anti-friction bearing",
    definition:
      "A mechanical device using rolling elements to minimize resistance between moving parts, improving motion and reducing wear under load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "appraisal rating",
    definition: "A comparative judgment used to assess how well a component meets current standards for function, geometry, or safety.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "approach",
    definition:
      "The transition segment of roadway immediately adjoining a structure, forming the connection between the main surface and the crossing feature.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "approach pavement",
    definition: "A surfaced section leading to a structure that blends into the existing roadway and accommodates shifts in elevation or width.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "approach slab",
    definition:
      "A reinforced platform bridging the transition from roadway to structure, designed to distribute loads and reduce settlement impacts.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "appurtenance",
    definition: "An accessory element that serves a supportive or functional role, often added to improve usability, safety, or site integration.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "apron",
    definition:
      "A protective surface placed to shield foundations or banks from scour, using durable materials to absorb or redirect erosive forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "arch",
    definition: "A curved load-carrying structure that redirects forces into compression along its length, reducing vertical thrust at its base.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "arch barrel",
    definition: "A continuous curved element spanning side to side, functioning as the load-carrying surface within a vaulted or arched system.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "arch rib",
    definition: "A primary curved component in open spandrel construction that supports vertical elements and carries thrust to the supports.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "armor",
    definition: "A reinforcing layer or cover installed to shield exposed components from wear, impact, or environmental degradation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "armoring countermeasures",
    definition: "Stabilization systems designed to resist erosive forces without redirecting flow, typically using fixed or durable materials.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "as-built plans",
    definition:
      "A record of the final construction layout showing all deviations from the original design, used to document actual field conditions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "asphalt",
    definition: "A petroleum-based binder used in pavement and waterproofing applications, valued for its durability and adhesive properties.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "ASTM",
    definition: "A standards organization that develops consensus-based specifications for materials, products, and systems used across industries.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "auger",
    definition:
      "A helical tool used to bore into soil or rock, typically in preparation for placing deep foundations or evaluating subsurface conditions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "axial",
    definition: "A directional term referring to alignment along the centerline of a member, used in describing stress or movement patterns.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "axial force",
    definition:
      "A push or pull that acts along the central axis of a component, creating either compression or tension depending on the load direction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "axle load",
    definition: "The total weight transmitted to the ground by all wheels on a single axle, affecting pavement wear and structural design limits.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "back",
    definition: "A reference to the outer surface of a curved element subjected to tensile forces, opposite the intrados or compressive face.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "backfill",
    definition:
      "A material used to refill excavated space around structures, providing support, drainage, or stability behind structural walls or foundations.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "backstay",
    definition:
      "A tensioned support line that counteracts overturning forces by transferring load to an anchorage point beyond the main support structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "backwall",
    definition:
      "The uppermost portion of a supporting structure that contains retained material and may limit movement or support adjacent elements.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "backwater",
    definition: "A condition where water accumulates upstream due to a downstream obstruction or narrowing, often increasing local water levels.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bank",
    definition:
      "A natural or constructed slope defining the edge of a channel, embankment, or roadway, typically angled to support drainage or load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bascule bridge",
    definition:
      "A movable span that pivots vertically to provide clearance for waterway traffic, using counterweights to balance the rotating section.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "base course",
    definition: "A compacted structural layer beneath pavement surfaces designed to distribute loads and provide support for the upper layers.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "base metal",
    definition: "The underlying material of a structural element or weld joint, onto which other materials or coatings may be applied or bonded.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "base plate",
    definition:
      "A flat steel component that spreads concentrated loads across a support surface and facilitates secure connection to structural members.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "batten plate",
    definition:
      "A flat connector fastened across paired elements in a built-up member, improving lateral stability and resisting buckling or twisting forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "batter",
    definition:
      "An intentional slope applied to a surface or structural face, often described as a horizontal-to-vertical ratio for layout or formwork control.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "battered pile",
    definition:
      "A deep foundation element driven at an angle to resist lateral or inclined loads, increasing overall resistance to movement or overturning.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bay",
    definition:
      "An area defined by repeating structural spacing between beams or frames, typically used to describe layout and distribution of loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "beam",
    definition:
      "A straight structural member that supports vertical loads across a span by resisting bending through internal tension and compression.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bearing",
    definition:
      "A mechanical device placed between connected components to allow controlled movement while transferring loads through a defined path.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bearing capacity",
    definition:
      "The maximum pressure that a material or surface can support before shear failure, excessive settlement, or other forms of instability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bearing failure",
    definition:
      "The crushing or deformation of material at a point of contact due to excessive load, typically seen where concentrated forces are applied.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bearing pile",
    definition: "A driven or cast element that transfers vertical loads to a stable stratum through end bearing, bypassing weaker soil layers above.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bearing plate",
    definition: "A flat steel component that evenly distributes concentrated forces from a structural member to a support surface below.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bearing pressure",
    definition: "The intensity of force per unit area transmitted through contact between structural elements and their supporting surfaces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bearing seat",
    definition: "A prepared flat surface that supports load-transferring devices, typically located on top of piers or abutments.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bearing stiffener",
    definition: "A vertical plate welded to the web of a beam or girder near a bearing to prevent local deformation or instability under load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bearing stress",
    definition: "The contact pressure between two surfaces under compression, typically measured at connection points or support areas.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bedding",
    definition: "A prepared base of soil or granular material used to support and distribute loads beneath buried structures like culverts or pipes.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bedrock",
    definition: "The solid, undisturbed geologic layer beneath soil or fill that provides a stable foundation for deep structural supports.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bench mark",
    definition: "A fixed reference point with known elevation or position used for surveying, monitoring movement, or establishing control.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bending moment",
    definition:
      "An internal force effect caused by external loads that results in curvature and a combination of tension and compression within a member.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bent",
    definition: "A transverse structural frame composed of vertical and horizontal elements used to support spans and transfer loads to the ground.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "berm",
    definition: "A horizontal ledge or narrow shelf formed along a slope or embankment, often used to control erosion or provide access.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "beveled washer",
    definition: "A sloped metal spacer used to compensate for angled surfaces in bolted connections, ensuring full contact and proper load transfer.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bitumen",
    definition:
      "A viscous, black hydrocarbon material used in pavement and waterproofing applications for its adhesive and water-resistant properties.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bituminous concrete",
    definition: "A compacted paving material made from asphalt binder and aggregate, valued for its flexibility, durability, and ease of repair.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "blanket",
    definition: "A protective layer placed over streambeds or foundations to resist erosion from flowing water and prevent scour near structures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "BMS",
    definition: "A digital or manual system used to track, evaluate, and prioritize infrastructure assets based on condition, risk, or performance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bolt",
    definition: "A cylindrical fastener with threads and a head, designed to join components through clamping force when paired with a nut.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bolster",
    definition: "A solid intermediate support placed between a bearing and its seat to distribute loads evenly or achieve proper elevation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bond",
    definition: "A mechanical or chemical grip that prevents relative movement between embedded materials, such as steel and hardened concrete.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bond stress",
    definition: "A localized shear force at the interface of embedded reinforcement and surrounding material resisting pullout or slippage.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bowstring truss",
    definition: "A structural form where a curved top chord and straight bottom chord create an arch-like profile with triangulated web members.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "box beam",
    definition:
      "A hollow structural member with a rectangular or trapezoidal cross-section, offering high torsional stiffness and efficient load distribution.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "box culvert",
    definition:
      "A rigid, rectangular conduit used to carry water under roadways or embankments, typically constructed from precast or cast-in-place concrete.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "box girder",
    definition: "A hollow main supporting member shaped to resist bending and twisting, often used in longer spans for its structural efficiency.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bracing",
    definition: "A secondary system of structural members arranged to prevent lateral movement, twisting, or buckling under applied loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bracket",
    definition: "A projecting support element used to connect and reinforce intersecting parts, often transferring load between members.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "breastwall",
    definition: "A vertical portion of a support structure that retains fill and resists loading from adjacent materials or structural elements.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bridge",
    definition: "A structure spanning an obstacle to carry traffic or services, designed to support loads and provide continuous passage.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bridge deficiency",
    definition: "A condition indicating reduced capacity, safety, or function due to damage, deterioration, or outdated configuration.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bridge elements",
    definition:
      "The individual structural or functional components that make up a full crossing system, typically inspected and rated independently.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bridge inspection experience",
    definition: "A history of performing, leading, or supporting condition evaluations, typically involving direct assessment and reporting duties.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bridge inspection refresher training",
    definition: "A structured review course intended to maintain consistency, update procedures, and reinforce key skills for field evaluations.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "Bridge Inspector's Reference Manual (BIRM)",
    definition:
      "A federal training manual covering the evaluation of in-service crossings, including procedures, terminology, and safety principles.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bridge pad",
    definition: "A leveled bearing area that transfers loads to the support structure below, sometimes raised or recessed to accommodate components.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bridge seat",
    definition: "The top surface of a support structure where the superstructure rests, designed to evenly transfer vertical and lateral forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bridge site",
    definition: "The specific physical location selected for construction of a crossing, including surrounding terrain and hydraulic features.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bridging",
    definition: "A system of lateral bracing between members that increases rigidity, reduces differential movement, and improves load distribution.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "brittle fracture",
    definition: "A sudden failure that occurs without significant deformation, typically under stress concentrations or low temperatures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "brittleness",
    definition: "The tendency of a material to fail with little or no plastic deformation when subjected to stress or impact.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "brush curb",
    definition: "A narrow barrier positioned along the deck edge to limit wheel overrun and protect pedestrians or parapet systems from contact.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "buckle",
    definition: "A form of instability where a member bends or collapses under compressive load due to loss of alignment or internal resistance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "buckle plate",
    definition: "An older deck type formed from curved steel plates designed to act compositely with fill but generally considered outdated.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "built-up member",
    definition: "A structural component fabricated from multiple elements fastened together to achieve greater strength or stiffness.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bulb t-girder",
    definition: "A reinforced concrete shape with a flared bottom section, designed to increase moment capacity while simplifying forming.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bulkhead",
    definition: "A retaining or cutoff structure that resists soil, water, or material movement, often formed from sheet piles or reinforced panels.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "buoyancy",
    definition: "An upward force acting on a submerged or partially submerged object, counteracting its weight and potentially affecting stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "butt joint",
    definition: "A connection formed when two components meet end to end in the same plane, typically requiring welding or mechanical fastening.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "buttress",
    definition: "A projecting support built against a wall to resist lateral forces, improve stability, and reduce risk of overturning.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "buttressed wall",
    definition: "A retaining wall system reinforced by perpendicular structural projections to enhance strength against earth pressure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "butt weld",
    definition: "A fusion process that joins two elements in the same plane by melting their edges and forming a continuous, solid connection.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cable",
    definition:
      "A tension element made from numerous strands twisted into a rope-like form, offering high strength and flexibility in long-span applications.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cable band",
    definition: "A clamping assembly used to attach vertical suspender lines to a main cable, ensuring fixed spacing and secure load transfer.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cable-stayed bridge",
    definition:
      "A structure with straight cables anchored to towers, directly supporting the deck and distributing loads without requiring main suspension cables.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "caddisfly",
    definition: "An aquatic insect whose larvae burrow into wet wood, often leaving small, clean holes in timber members submerged in water.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "caisson",
    definition: "A watertight chamber or box used during deep excavation to prevent inflow of groundwater or to provide a dry working space.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "camber",
    definition: "A slight upward curve intentionally built into a member to offset downward deflection under load or to improve visual appearance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cantilever",
    definition: "A projecting member supported only at one end, capable of resisting vertical loads and rotational forces without external bracing.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cantilever abutment",
    definition: "A retaining support structure where the vertical wall and horizontal footing act together to counter lateral earth pressure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cantilever bridge",
    definition: "A type of crossing where unsupported projecting spans extend from piers, often joined by a suspended center section.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cantilever span",
    definition: "A segment of a structure composed of one or more projecting arms, sometimes supporting a center span suspended between them.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cap",
    definition: "The uppermost component on a vertical support that distributes load to multiple columns or piles while maintaining alignment.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cap beam",
    definition: "A horizontal member at the top of a bent that connects and aligns columns while distributing vertical forces across them.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "capstone",
    definition: "The final top unit placed on a masonry structure, often larger or more decorative, used to protect or seal the upper edge.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "carbon steel",
    definition: "A type of steel where the primary alloying element is carbon, providing strength and hardness depending on content levels.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cast-in-place (C.I.P.)",
    definition: "A method of forming and curing concrete directly in its final position, using temporary molds for shaping and containment.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cast iron",
    definition: "A high-carbon iron alloy known for its brittleness and rigidity, often used in early infrastructure elements and utility casings.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "catch basin",
    definition: "A drainage box that collects surface runoff and debris, allowing water to enter storm pipes while trapping solids for removal.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "catchment area",
    definition: "The total land surface that contributes runoff to a single point in a drainage system, affecting water flow volume and timing.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "catenary",
    definition: "The natural curve formed by a uniform cable or chain suspended between two supports, used for load-efficient suspension geometry.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cathode",
    definition: "The negatively charged side of an electrochemical cell where reduction occurs, remaining protected while the anode corrodes.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cathodic protection",
    definition:
      "A corrosion control method using electrical current or sacrificial metals to shift electrochemical activity away from the protected surface.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "catwalk",
    definition:
      "A narrow, elevated walkway used to access otherwise unreachable parts of a structure for inspection, maintenance, or construction tasks.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "causeway",
    definition: "A raised roadway built across a low or wet area, often constructed on embankments or supported by culverts to allow water passage.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cellular abutment",
    definition:
      "A hollow abutment structure with internal voids or chambers that reduce material use while maintaining load-bearing and retaining capacity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cement mortar",
    definition: "A paste made of cement, fine aggregate, and water, used for binding masonry units or patching concrete surfaces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cement paste",
    definition: "The fluid mixture of cement and water that binds aggregates in concrete and initiates the chemical reaction for hardening.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "centerline of bearings",
    definition: "A reference line running horizontally through the centers of bearing devices, critical for alignment during layout and assembly.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "center of gravity",
    definition: "The single point in a body or system where the total mass is considered to be concentrated and balanced in all directions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "centroid",
    definition: "The geometric center of an area or shape where the distribution of its dimensions is uniform, often used in stress analysis.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "chain drag",
    definition: "A manual technique using loose chains pulled over a surface to audibly detect subsurface voids or delaminations in concrete.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "chamfer",
    definition: "An angled cut or beveled edge formed along a corner, typically to remove sharpness or to aid in form removal and finishing.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "channel",
    definition: "A natural or artificial watercourse or a structural steel member with a C-shaped cross-section used for framing or support.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "channel lining",
    definition: "A protective treatment applied to a waterway bed, using rigid or flexible materials to prevent erosion or scour.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "channel profile",
    definition: "A longitudinal cross-section that traces the slope and elevation changes along the centerline of a waterway.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "checks",
    definition: "Cracks that form along the grain of wood, often due to drying or stress, and may reduce strength or increase moisture penetration.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cheek wall",
    definition: "A short vertical wall adjoining an abutment or stair side, used for support or as a protective enclosure; also called a knee wall.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "chipping hammer",
    definition:
      "A hand tool with a pointed or chisel tip used to remove loose material, rust, or slag from surfaces during inspection or fabrication.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "chloride",
    definition: "A salt compound commonly used in deicing products, which can penetrate porous materials and initiate or accelerate corrosion.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "chloride contamination",
    definition: "The presence of residual salts that attract moisture and promote aggressive corrosion, especially in reinforced concrete systems.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "chord",
    definition: "A major linear member of a truss, typically forming its top or bottom edge, that carries axial forces and defines overall geometry.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "circular arch",
    definition: "An arch formed with a constant-radius curve, typically providing uniform load transfer and easy formwork in construction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "clearance",
    definition: "The unobstructed distance between two surfaces, important for maintaining vehicle, vessel, or structural separation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "clear headroom",
    definition: "The vertical space available beneath an overhead element, such as a bridge or sign, measured to the lowest projecting part.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "clear span",
    definition: "The unobstructed distance between support points or substructure elements, not including bearing lengths or overhangs.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "clip angle",
    definition: "A short L-shaped steel connector used to join members at right angles, often bolted or riveted for framing connections.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "closed spandrel arch",
    definition: "An arched structure where the area above the curve is filled or enclosed, providing solid support to the deck or roadway.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "coarse aggregate",
    definition: 'Stone or gravel-sized particles retained on a 5 mm (¼") sieve, used in concrete mixes for structural strength and bulk.',
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "coating",
    definition: "A protective or decorative layer applied to surfaces to resist corrosion, moisture, or abrasion, often forming a continuous film.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "coefficient of thermal expansion",
    definition: "A numerical value expressing how much a material's dimensions change in response to each degree of temperature variation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cofferdam",
    definition: "A temporary watertight enclosure built to allow construction work below the waterline by pumping out the enclosed area.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cold chisel",
    definition: "A hardened steel tool with a sharpened edge, used to cut or chip metal when struck with a hammer, especially in tight spaces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "collision damage",
    definition: "Structural harm caused by impact from vehicles, vessels, or debris, often resulting in deformation, cracks, or misalignment.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "column",
    definition: "A vertical load-carrying element designed to resist compression and often used to support beams, decks, or caps.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "column bent",
    definition: "A pier configuration consisting of multiple vertical columns connected by a horizontal member, supporting the structure above.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "compaction",
    definition: "The process of densifying soil or fill by mechanical force to improve strength, reduce settlement, and increase stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "complex bridge",
    definition: "A structure with atypical features, such as moveable spans, cable systems, or intricate geometry requiring specialized analysis.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "bridge component",
    definition: "A general term for a major part of a structure, such as the deck, superstructure, or substructure, typically assessed individually.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "composite action",
    definition: "The combined behavior of two or more materials acting as one unit through mechanical bonding or shear connection.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "composite construction",
    definition: "A technique where different materials, typically steel and concrete, are joined to act as a unified load-bearing system.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "comprehensive bridge inspection training",
    definition:
      "Formal instruction that covers all aspects of evaluation, documentation, and criteria interpretation, ensuring inspection proficiency.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "compression",
    definition: "A force that shortens or squeezes a material, producing internal stress directed toward the center of a member.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "compression failure",
    definition: "A structural breakdown caused by excessive compressive stress, resulting in crushing, buckling, or material collapse.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "compression flange",
    definition: "The top portion of a bending member that resists compressive stress when the beam is subjected to downward forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "compression seal joint",
    definition: "A preformed elastomeric seal installed in a joint opening, compressed to prevent water infiltration while accommodating movement.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "concentrated load",
    definition: "A force applied to a small area or point, resulting in high localized stress that must be accounted for in design and inspection.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "concrete",
    definition: "A hardened mixture of cement, aggregate, and water that forms a durable, stone-like material used in construction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "concrete beam",
    definition: "A horizontal member made of reinforced concrete, shaped to carry loads across a span through bending and shear resistance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "concrete pile",
    definition: "A long structural element made of reinforced or prestressed concrete, used to transfer loads to deeper, stable ground layers.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "concrete tee beam",
    definition: "A monolithic concrete section with a horizontal slab and vertical stem, shaped like a 'T', often used in cast-in-place decks.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "condition rating",
    definition: "A numerical or descriptive score reflecting the current physical state of a component compared to its original construction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "conductor",
    definition: "A material that allows electric current to flow freely, typically metallic, and used for grounding, bonding, or signal transfer.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "connection angle",
    definition: "A steel L-shaped plate used to connect members at joints, transferring force between components through bolts or welds.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "consolidation",
    definition: "The reduction in soil volume over time due to the expulsion of water under sustained load, affecting settlement and strength.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "construction joint",
    definition: "An interface between two concrete placements where bonding occurs through reinforcement or shear keys to maintain continuity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "continuous beam",
    definition: "A structural element that spans across multiple supports without hinges or joints, improving load distribution and stiffness.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "continuous bridge",
    definition: "A structure composed of spans that extend over intermediate supports without expansion joints, increasing continuity and strength.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "continuous footing",
    definition: "A type of foundation that runs beneath multiple columns or walls, spreading loads evenly along its entire length.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "continuous span",
    definition:
      "A structural configuration where adjacent spans are linked over intermediate supports, enabling moment redistribution and efficiency.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "continuous truss",
    definition:
      "A triangulated structure without hinges that spans uninterrupted across two or more supports, distributing live and dead loads efficiently.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "continuous weld",
    definition: "A seamless, uninterrupted weld that runs the full length of a joint, enhancing strength and reducing fatigue-prone gaps.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "contraction",
    definition: "A material response to cooling, where dimensional shrinkage occurs, often producing stress if movement is restrained.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "contraction scour",
    definition: "The erosion of bed material beneath a structure due to increased flow velocity from channel narrowing or constriction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "coping",
    definition: "The top surface or protective edge of a wall or pier, often sloped or shaped to shed water and prevent saturation of the core.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "corbel",
    definition: "A projecting element built into a wall or column to support weight above, transferring loads to the supporting face below.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "core",
    definition: "A sample extracted from a structure to examine internal condition or composition, often tested for strength or deterioration.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "corrosion",
    definition: "The electrochemical deterioration of metal caused by environmental exposure, leading to loss of section and reduced strength.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "corrugated",
    definition: "A wavy or ridged surface form that increases stiffness and strength, commonly used in metal pipe or sheeting.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "counter",
    definition: "A diagonal truss member that carries load in tension during specific live loading conditions and experiences stress reversal.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "counterfort",
    definition: "A rear-facing vertical wall used to reinforce a retaining structure by converting wall flexure into tension within the support.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "counterforted abutment",
    definition: "A reinforced configuration where interior supports stabilize the wall, allowing the face to act as a spanning slab.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "counterforted wall",
    definition: "A retaining structure strengthened by internal tie-walls that reduce bending stresses and resist overturning forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "counterweight",
    definition: "A mass used to balance the movement or rotation of a structural element, reducing required lifting force or preventing uplift.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "couplant",
    definition: "A gel or fluid applied to surfaces during ultrasonic testing to allow efficient transmission of sound waves into the material.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "couple",
    definition: "A pair of equal and opposite forces spaced apart that produce rotational motion without net linear force.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "coupon",
    definition: "A small test piece cut from a structural component, used to determine mechanical properties such as yield or tensile strength.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "course",
    definition: "A single, continuous horizontal layer of masonry units such as brick or stone placed in a wall or structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cover",
    definition: "The thickness of material between reinforcement and surface, protecting against corrosion or environmental exposure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "covered bridge",
    definition: "A timber span enclosed by a roof and siding to protect structural elements from the environment and extend lifespan.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cover plate",
    definition: "An additional flat steel plate welded to a flange to increase cross-sectional area and enhance load capacity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "crack",
    definition:
      "A visible or hidden fracture within a material where internal stress exceeds local strength, often indicating movement, aging, or stress.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "crack comparator card",
    definition: "A calibrated transparent tool used to visually match and measure surface crack widths, aiding in documentation and assessment.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cracking (reflection)",
    definition:
      "A surface flaw in overlays that follows the pattern of existing cracks beneath, often due to differential movement or stress transfer.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "crack initiation",
    definition: "The initial formation of a fissure at a point of stress concentration or material defect, often preceding visible deterioration.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "crack propagation",
    definition: "The expansion of a fracture over time due to stress cycling, environmental exposure, or load, which may lead to eventual failure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "creep",
    definition: "A time-dependent deformation that occurs under sustained loading, even at stress levels below the yield point.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "creosote",
    definition: "A dark, oily preservative distilled from tar, used to protect wood from decay, insects, and water intrusion.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "crevice corrosion",
    definition: "A localized form of corrosion occurring in tight gaps or shielded areas where moisture and salts become trapped.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "crib",
    definition: "A box-like support structure made of interlocking elements and filled with ballast to provide stable footing or retain material.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cribbing",
    definition: "A stacked framework of blocks or timbers used to temporarily support heavy loads or resist movement during construction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cribwork",
    definition: "A permanent or temporary open-grid foundation system constructed with cells filled with stone or concrete to resist loads or water.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "critical finding",
    definition: "A serious structural or safety issue requiring immediate attention to prevent risk to users or further damage to the asset.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cross",
    definition: "A lateral bracing system connecting longitudinal members to enhance rigidity, often synonymous with diaphragm or frame bracing.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cross frame",
    definition: "A diagonal steel assembly installed between parallel beams or girders to distribute load and control lateral deflection.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cross girders",
    definition: "Transverse members supported by bearings that span between main beams, distributing loads and supporting the deck.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cross-section",
    definition: "A two-dimensional shape created by cutting a component perpendicular to its length, used to determine area and geometry.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cross-sectional area",
    definition: "The total area of a cut surface through a structural member, critical for calculating stresses and capacity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "crown",
    definition: "The highest point on a curved surface, such as the center of a roadway or arch, designed to improve drainage or distribute load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "crown of roadway",
    definition: "The elevation difference between the centerline and the edge of a road surface, controlling water runoff and surface drainage.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "crushing",
    definition: "The failure of material due to excessive compressive stress, often occurring perpendicular to the grain in timber or at supports.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "culvert",
    definition: "A buried structure that allows water to pass beneath an embankment, typically composed of pipe, box, or arch segments.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "curb",
    definition: "A low barrier along the edge of a roadway or deck that guides vehicles and provides separation from sidewalks or railings.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "curb inlet",
    definition: "An opening in a curb that allows water to drain from the roadway into a stormwater collection system.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "curtain wall",
    definition: "A thin vertical surface placed between primary support members, typically non-load-bearing and used to enclose or protect.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "curvature",
    definition: "The amount by which a line or surface deviates from being straight, often expressed as a radius or rate of change.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "curved girder",
    definition: "A primary support member shaped to follow a horizontal arc, used when the bridge alignment curves laterally.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cutoff wall",
    definition: "A vertical barrier placed below a slab or apron to block water flow and prevent undermining by scour or seepage.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cutwater",
    definition:
      "A structure with a sharp edge designed to deflect flow and debris, protecting a component from the impact of moving water and obstructed materials.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "cyclic stress",
    definition:
      "Stress that fluctuates as a result of repeated forces, often due to varying load conditions over time, impacting material durability and structural integrity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "damage inspection",
    definition:
      "An unscheduled assessment conducted to evaluate the extent of structural harm caused by environmental factors or external actions, typically to identify critical issues that require immediate attention.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "dead load",
    definition:
      "A static load resulting from the weight of the structure itself, which remains constant over time and does not vary with use or environmental conditions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "debris",
    definition:
      "Materials, such as floating wood, trash, or suspended sediment, moved by the current of a flowing stream, often posing a hazard to structures or navigation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "decay",
    definition:
      "The degradation of organic material, caused by fungi that break down the cell walls, leading to the deterioration of the affected material over time.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "deck",
    definition:
      "The horizontal surface of a structure that directly supports traffic, providing a stable platform for vehicles and pedestrians to cross.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "deck arch",
    definition:
      "A type of arch bridge where the deck is positioned above the top of the arch, allowing for increased clearance and load distribution.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "deck bridge",
    definition:
      "A bridge where all supporting members are located beneath the roadway, often used to provide a clear span for traffic or to minimize structural interference.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "decking",
    definition:
      "Bridge flooring made up of individual panels or components, such as timber planks, that form the surface layer of the deck and support traffic load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "deck joint",
    definition:
      "A gap incorporated into the bridge deck to allow for rotation or horizontal movement between spans or the connection between the span and the approach.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "deficiency",
    definition:
      "A condition indicating that a structure does not meet the necessary standards, often reflecting a need for repairs or improvements to ensure safety and functionality.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "deflection",
    definition:
      "The elastic movement of a structural component when subjected to a load, often resulting in bending or shifting of the material under pressure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "deformation",
    definition:
      "The alteration in shape or size of a structural element under load, which can be either reversible (elastic) or permanent (inelastic).",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "deformed bars",
    definition:
      "Steel reinforcement bars featuring indentations or projections that enhance the bond between steel and concrete, increasing the strength and stability of the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "degradation",
    definition:
      "The gradual decline in quality of a material or structure due to environmental or chemical factors, leading to a loss of function or strength over time.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "delamination",
    definition:
      "The separation of a surface layer from the underlying material, often occurring in concrete or laminated timber due to stress, moisture, or chemical reactions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "design load",
    definition:
      "The maximum force or combination of forces for which a structure is designed to withstand, considering factors such as safety, durability, and performance under expected conditions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "distributed loads",
    definition:
      "Forces applied evenly across a large area of a structure, such as the weight of traffic or other environmental factors, which can affect the overall stability of the system.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "deterioration",
    definition:
      "The gradual decline in the condition of a structure, typically due to exposure to environmental elements, chemical reactions, or physical wear, leading to reduced strength and functionality.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "diagonal",
    definition:
      "A structural component that slopes at an angle, often used in truss systems or bracing to provide support and resist forces acting on the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "diagonal stay",
    definition:
      "A cable extending from the tower to the roadway in a suspension bridge, providing additional stiffness and reducing the deflections and vibrations caused by traffic or environmental forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "diagonal tension",
    definition:
      "The tensile force that arises from shear stresses in a structural component, especially in beams subjected to both vertical and horizontal forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "diaphragm",
    definition:
      "A transverse structural member placed within a framework to distribute forces, enhance stability, and improve the rigidity of the system, often used in combination with bracing.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "diaphragm wall",
    definition:
      "A vertical wall built across the centerline of an arch bridge to reinforce spandrel walls, support the floor system, and provide additional lateral strength.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "differential settlement",
    definition:
      "The uneven settling of different parts of a structure, which can cause tilting or distortion in the overall alignment, typically due to variations in foundation conditions or material loss.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "dike",
    definition:
      "An embankment built to control or redirect water flow, often used to prevent erosion or localized scour around structures, and guide stream currents away from critical areas.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "discharge",
    definition: "The rate at which fluid, such as water, flows through a pipe, channel, or other conduit, often measured in volume per unit of time.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "displacement induced stress",
    definition:
      "Stresses generated by differential movement between adjacent parts of a structure, resulting from uneven deflection or shifting under load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "distributed load",
    definition:
      "A load that is uniformly applied across the length of a structural element, such as a beam or deck, affecting the overall behavior and performance of the component.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "ditch",
    definition: "A shallow excavation made to collect and redirect surface water, often to prevent erosion or water accumulation near a structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "diver",
    definition:
      "A trained individual specializing in underwater inspections, responsible for evaluating the condition of submerged structural components and the surrounding environment.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "dolphin",
    definition: "A cluster of piles or a caisson positioned to protect structures from potential damage due to impact from marine or river traffic.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "double movable bridge",
    definition: "A type of bridge where two adjacent movable spans, such as swing or bascule spans, are joined to create a single navigable opening.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "dowel",
    definition: "A cylindrical rod embedded in two parts of a structure to connect them and facilitate the transfer of stress between them.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "drainage",
    definition:
      "A system designed to remove excess water from a structure, preventing water accumulation that could affect the integrity or functionality of the system.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "drainage area",
    definition: "The geographic area from which surface runoff is collected and directed into a drainage system, also known as a catchment area.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "drain hole",
    definition:
      "A hole placed in a structural component, such as a box girder or wall, to allow accumulated water or liquid to exit the system, preventing damage or deterioration.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "drain pipes",
    definition: "Pipes designed to carry stormwater away from a structure or surrounding area to prevent flooding or water damage.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "drawbridge",
    definition: "A type of bridge with a movable span that can be raised or lowered to allow the passage of vessels or vehicles.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "drift bolt",
    definition: "A short metal bar used to connect and secure wooden members, typically for alignment purposes or to resist movement in a structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "drift pin",
    definition: "A tapered steel pin used for aligning bolt holes in structural components during assembly or installation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "drip notch",
    definition:
      "A cast recess on the underside of a structure's overhang, designed to prevent water from flowing onto supporting components and causing damage.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "drop inlet",
    definition:
      "A type of inlet structure used to convey water from a higher elevation to a lower outlet, designed to allow smooth water flow without free fall at the discharge point.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "duct",
    definition: "A hollow passage or conduit used to house and protect prestressing tendons in post-tensioned concrete girders.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "ductile",
    definition:
      "A material property that allows a material to be deformed significantly without breaking, making it flexible and capable of absorbing stresses.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "ductile fracture",
    definition:
      "A type of fracture characterized by significant plastic deformation before failure, indicating that the material was able to absorb energy prior to breaking.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "ductility",
    definition:
      "The ability of a material to undergo significant deformation without breaking, often allowing it to withstand forces or stresses before failure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "dumbbell pier",
    definition:
      "A pier with two cylindrical or rectangular columns connected by an integral web, often used in structures where central support is necessary.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "dummy member",
    definition: "A truss component that does not carry primary loads but is included for structural bracing or aesthetic purposes.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "E",
    definition:
      "A material property that quantifies stiffness. It is used to describe the relationship between stress and strain in a material, indicating how much a material will deform under a given load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "efflorescence",
    definition:
      "A white, powdery deposit found on masonry surfaces caused by the migration of soluble salts within materials, which crystallize when moisture evaporates from the surface.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "elastic",
    definition:
      "The ability of a material to return to its original shape after being stretched or deformed, without permanent damage when the external forces are removed.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "elastic strain",
    definition:
      "A temporary deformation in a material under stress that is fully recoverable once the load is removed, without causing permanent changes to the material's structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "elastic deformation",
    definition:
      "A non-permanent distortion of a material that occurs under stress, which fully recovers its original shape once the applied load is removed.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "elasticity",
    definition:
      "The ability of a material to undergo reversible deformation when subjected to external forces, returning to its initial shape once the forces are no longer applied.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "elastomer",
    definition:
      "A type of polymer material with rubber-like properties, capable of large elastic deformations, often used for seals, bearings, and vibration-damping applications.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "elastomeric pad",
    definition:
      "A rubber-like material pad used in structural supports, designed to compress under load while allowing for movement, helping to manage forces such as expansion or vibration.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "electrolyte",
    definition:
      "A conductive medium, such as air, water, or soil, that facilitates the flow of ions between two metal electrodes, playing a critical role in corrosion and electrochemical processes.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "electrolytic cell",
    definition:
      "A system that allows for the process of electrolysis, using an electrolyte and electrodes to drive chemical reactions that would not occur spontaneously.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "electrolytic corrosion",
    definition:
      "A type of metal corrosion that occurs due to the flow of electric current through an electrolyte, accelerating the degradation of metal surfaces in contact with the medium.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "elevation view",
    definition:
      "A drawing that represents the side perspective of a structure, showing vertical dimensions and features that are not visible in plan view.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "elliptic arch",
    definition:
      "An arch with a shape based on the upper half of an elliptical cylinder, designed to distribute forces more efficiently across its structure compared to traditional curved arches.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "elongation",
    definition:
      "The extension or stretching of a material, typically due to applied forces, which may be reversible or permanent depending on the material's properties and the extent of deformation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "embankment",
    definition:
      "A raised mound of earth designed to carry roads or prevent water from spreading beyond a certain boundary, providing stability or protection from flooding.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "end block",
    definition:
      "A reinforced section at the end of a prestressed concrete beam, designed to anchor the post-tensioning steel and resist shear stresses for improved structural performance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "end post",
    definition:
      "A structural member that forms the end compression of a truss system, providing support between the top and bottom chords at the boundary of the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "end rotation",
    definition:
      "The deflection or twisting of a structure's end when subjected to external loads, leading to movement at the connection points of structural members.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "end section",
    definition:
      "A structural addition to the end of a culvert, used for hydraulic efficiency or structural anchorage, often improving flow control and reducing erosion risks.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "end span",
    definition:
      "The portion of a bridge that spans between the last support and the abutment, typically experiencing more movement due to temperature changes and load distribution.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "epoxy",
    definition:
      "A synthetic resin known for its strong adhesive properties, commonly used in bonding materials or providing surface protection through chemical hardening after mixing components.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "epoxy coated reinforcement",
    definition:
      "Steel reinforcement coated with a layer of epoxy to prevent corrosion, particularly in environments exposed to moisture or chemicals that could degrade the material's integrity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "equilibrium",
    definition:
      "A state in which the sum of forces and moments acting on a structure results in no movement or acceleration, ensuring stability in static conditions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "equivalent uniform load",
    definition:
      "A simplified representation of a variable live load, converted into a constant uniform load that results in the same structural effects, aiding in analysis and design efficiency.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "erosion",
    definition:
      "The gradual wearing away of soil or rock by natural forces like water or wind, not specifically related to a channel, but potentially affecting surrounding environments and structures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "expansion",
    definition:
      "The increase in the size or volume of a material or structure due to factors like temperature rise or internal pressure, often requiring mechanisms to accommodate the changes.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "expansion bearing",
    definition:
      "A structural component designed to accommodate the movement of a structure due to thermal expansion or other forces, allowing for the dissipation of horizontal stresses while maintaining support.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "expansion dam",
    definition:
      "A component of an expansion joint that prevents the structure from moving at the joint and provides a controlled space for concrete placement during construction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "expansion joint",
    definition:
      "A connection between structural elements that allows for movement due to changes in temperature, load, or other forces, preventing stress accumulation and potential damage to the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "expansion rocker",
    definition:
      "A bearing component designed to allow longitudinal movement caused by temperature variation and load, utilizing a tilting motion to accommodate shifts without transferring excessive horizontal force.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "expansion roller",
    definition:
      "A cylindrical device used in bearing systems that allows for the accommodation of movement due to expansion or contraction, typically in response to temperature or loading changes.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "expansion shoe",
    definition:
      "A metal component used in bearing systems to accommodate movements resulting from temperature changes and external forces, ensuring smooth operation and stability of the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "exterior girder",
    definition:
      "The outermost structural beams that support the bridge deck, providing stability and carrying the load from the deck to the supporting piers or abutments.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "extrados",
    definition:
      "The uppermost curve of an arch, typically referring to the exterior or outer surface, which plays a role in distributing forces across the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "eyebar",
    definition:
      "A structural member made from a rectangular bar with forged ends, designed to be connected using pins to form a tension member in suspension and other bridge types.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "failure",
    definition:
      "A condition where a structure reaches a limit state such as cracking or deflection, rendering it incapable of performing its intended function, potentially leading to collapse or fracture.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "falsework",
    definition:
      "A temporary framework, typically made of wood or metal, used to support the weight of a structure during construction until it becomes self-supporting.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fascia",
    definition:
      "An exterior covering element, often designed for architectural aesthetics, though it may also serve functional purposes such as providing additional protection or weather resistance.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fascia girder",
    definition:
      "The outermost exposed girder of a span, which may be treated architecturally for aesthetic purposes, contributing to the visual appeal of the structure.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fatigue",
    definition:
      "The tendency of a material or member to fail at stress levels lower than its yield point when subjected to repeated loading cycles, often leading to the initiation of cracks.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fatigue crack",
    definition:
      "A crack that forms due to repetitive, cyclic loading, typically occurring at stress levels below the material's yield point, which can compromise the integrity of the structure over time.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fatigue damage",
    definition:
      "The degradation of a structure due to repeated loading, often manifesting as crack formation, which progressively weakens the material or member involved.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fatigue life",
    definition:
      "The duration or number of loading cycles a material or member can withstand before experiencing failure due to fatigue, influenced by factors such as loading conditions and material properties.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fender",
    definition:
      "A protective structure designed to absorb and dissipate the energy of impacts from floating debris or waterborne traffic, preventing damage to exposed portions of a bridge.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fender pier",
    definition:
      "A structure similar to a pier but specifically designed to serve as a buffer against impact forces, providing additional protection to the bridge and its components.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "field coat",
    definition:
      "A layer of paint applied to a structure after assembly, typically part of the field erection process, providing additional protection and sometimes contributing to aesthetics.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fill",
    definition:
      "Earth or other material used to alter the surface contour of an area, commonly employed to build embankments or raise the elevation of a site for construction.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "filler",
    definition:
      "A piece or material used to fill gaps or spaces in structural connections, such as beneath a batten, splice plate, or stiffener, ensuring proper alignment and load transfer.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "filler metal",
    definition:
      "A metal material, such as wire, rod, or electrode, used in the welding process to fuse two metal pieces together, forming a joint and ensuring strength and integrity.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "filler plate",
    definition:
      "A type of filler used to close gaps or add material to structural elements, ensuring proper fit and function in connections like splices or gussets.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fillet",
    definition:
      "A curved junction formed between two surfaces that would otherwise meet at an angle, designed to facilitate a smooth transition and improve the structural connection.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fillet weld",
    definition:
      "A type of weld with a triangular cross-section, typically used to join two pieces of material at right angles, commonly found in structural connections.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "filling",
    definition:
      "Material used to close or seal gaps or voids in construction elements, often involving the addition of filler to improve fit or to reinforce structural components.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fine aggregate",
    definition:
      "Sand or fine-grained material used in concrete or mortar mixes, passing through a No. 4 sieve (4.75 mm), contributing to the material's strength and workability.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "finger dam",
    definition:
      "An expansion joint system that utilizes interlocking steel fingers or teeth to bridge the opening between two elements, allowing movement while maintaining structural integrity.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fish belly",
    definition:
      "A structural feature where the bottom flange or chord of a girder or truss is shaped with a convex curve downward, often for visual or structural purposes, enhancing load distribution.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fixed beam",
    definition:
      "A beam with a fixed end, restricting movement and rotation at that point, designed to carry loads and resist bending under applied forces.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fixed bearing",
    definition:
      "A bearing that allows rotation but restricts translational movement, ensuring stability while accommodating for changes in angle due to thermal or other forces.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fixed bridge",
    definition:
      "A bridge designed to remain stationary, typically without mechanisms to allow for adjustments to navigation clearance, often employed where no movement is needed.",
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fixed end",
    definition: "A condition where movement is restrained, typically by a structural element, preventing any displacement along a given axis.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fixed-ended arch",
    definition: "A structure where the ends are held immobile, transmitting forces without movement at the supports.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fixed span",
    definition: "A span of a superstructure that is fixed in place, with no ability to move, unlike a movable span which can adjust position.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fixed support",
    definition: "A support that restricts all movement except for rotation, preventing any longitudinal or transverse displacement.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "flange",
    definition:
      "The horizontal parts of a beam or girder extending across the top and bottom of the web, contributing to the structural integrity by providing lateral support.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "flange angle",
    definition:
      "An angled component used in the assembly of flanges for built-up members, providing structural strength and stability to girders or columns.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "floating bridge",
    definition:
      "A type of bridge supported by floating structures, typically used in bodies of water where other foundation options are impractical.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "floating foundation",
    definition:
      "A foundation system that distributes loads across a wide area, typically using low-pressure soil-supported elements like mats or rafts.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "flood frequency",
    definition: "The estimated average interval, in years, between occurrences of a flood with a specific magnitude, used in flood risk assessments.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "flood plain",
    definition: "The area adjacent to a river or stream that is prone to flooding, often covered by water during periods of high discharge.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "floor",
    definition: "The structural element that forms the bottom surface of a bridge, typically referred to as the deck in construction terminology.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "floorbeam",
    definition: "A horizontal member located across the span of a bridge, supporting the deck and transferring loads to the primary support system.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "floor system",
    definition: "The network of horizontal and vertical structural components that support the deck and distribute traffic loads across a bridge.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "flow capacity",
    definition:
      "The maximum volume of water or other fluid that can be effectively managed by a channel or culvert structure without causing overflow or blockage.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "flux",
    definition: "A substance used in welding to protect the molten material from oxidation, ensuring a cleaner bond during the fusion process.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "footbridge",
    definition: "A bridge designed exclusively for pedestrian traffic, typically spanning small distances such as over streams or roads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "footing",
    definition: "The lower part of a structure’s foundation that distributes the load to the underlying soil or pile system, ensuring stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "footing aprons",
    definition: "Protective layers or materials placed around a foundation to shield it from erosion, impact, or other external stresses.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "foot wall",
    definition: "A retaining wall located at the base of a structure to prevent erosion or movement of soil around the foundation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "force",
    definition:
      "An influence that causes an object to accelerate, decelerate, or change its direction, commonly quantified in terms of mass and acceleration.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "forms",
    definition:
      "Temporary molds used in the construction of concrete structures, ensuring that the material hardens into the desired shape and dimensions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "form work",
    definition:
      "A temporary structure used to mold and support materials, such as concrete, until they harden into the desired shape. It ensures the material maintains the correct form during curing and helps with the alignment and support of the final structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "foundation",
    definition:
      "The base layer that supports the load from a structure, transferring forces into the underlying soil or rock. It ensures stability by preventing settlement or tilting and provides resistance to various environmental and mechanical forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "foundation excavation",
    definition:
      "The process of removing soil or rock from a site to create space for a structural footing. This pit accommodates the foundation's base, ensuring proper alignment, load distribution, and stability for the structure above.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "foundation failure",
    definition:
      "The collapse or deformation of a foundation caused by differential settlement or shear failure of the supporting soil. This leads to structural instability, often resulting in cracking or tilting of the structure it supports.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "foundation grillage",
    definition:
      "A support system made up of horizontal layers of steel, timber, or concrete members arranged perpendicular to each other. These layers distribute heavy concentrated loads evenly across a larger area, typically used for heavy structures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "foundation load",
    definition:
      "The cumulative force exerted on a foundation by the weight of traffic, the superstructure, substructure, and surrounding elements. This load must be distributed evenly to prevent excessive settlement or structural failure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "foundation pile",
    definition:
      "A long, vertical structural element driven into the ground to support a foundation by transferring loads deep into the earth. It provides support where surface soils are inadequate to bear heavy loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "foundation pit",
    definition:
      "An excavation created to house the base of a structure’s foundation, often called a foundation excavation. This space is prepared to accommodate structural elements and ensure a stable base for the building.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "foundation seal",
    definition:
      "A mass of concrete placed within a cofferdam to block the entry of water, providing a watertight barrier for the base of a submerged structure. This ensures stability and prevents water from undermining the foundation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fracture",
    definition:
      "The breaking or cracking of a material, often due to stress, fatigue, or temperature extremes. This can lead to the failure of structural elements if not properly managed or repaired.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fracture critical member (FCM)",
    definition:
      "A critical structural component that, if it fails, could result in the collapse of a portion of or the entire structure. These members are typically under tension and are carefully inspected for damage or stress.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fracture critical member inspection",
    definition:
      "A thorough inspection process focused on evaluating the condition of critical structural components. The inspection may involve visual analysis and nondestructive testing to identify potential damage or weaknesses in key members.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "frame",
    definition:
      "A structural arrangement that transfers bending moments from horizontal beams to vertical or inclined supports through rigid connections. It provides stability and load distribution in various structures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "framing",
    definition:
      "The arrangement of structural elements, such as beams and columns, that work together to support the superstructure. It defines the strength and stability of the overall structure, ensuring proper load transfer.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "freeboard",
    definition:
      "The vertical distance between the design floodwater surface and the lowest point of a structure. This margin ensures that a structure remains above flood levels and accounts for potential wave action, surges, and debris.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "free end",
    definition:
      "The end of a structural element that is not restrained by a support, allowing movement. This end can expand, contract, or rotate without constraint, accommodating changes in temperature or load distribution.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "freeze-thaw",
    definition:
      "The process by which water within a material freezes and expands, then thaws and contracts, causing internal stress. Repeated cycles can damage materials, such as concrete, leading to cracking, scaling, or crumbling.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "fretting corrosion",
    definition:
      "A form of wear and corrosion that occurs when two components are in constant contact and subject to small movements or vibrations. This leads to the breakdown of material at the interface, often seen in elements like truss diagonals.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "friction pile",
    definition:
      "A type of pile that relies on friction between the pile's surface and the surrounding soil to provide support. This type of pile is used in soft or loose soils where deep anchoring is necessary for stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "friction roller",
    definition:
      "A component placed between structural members to reduce friction, allowing them to move relative to each other. This facilitates adjustments or shifts in position without creating excessive resistance or wear.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "frost heave",
    definition:
      "The upward movement of soil caused by the freezing of moisture retained in the ground. This phenomenon can cause damage to structures, foundations, and pavement if not properly mitigated.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "frost line",
    definition:
      "The maximum depth to which soil can freeze during winter conditions. This depth varies by region and is important for determining the minimum depth required for foundations to avoid frost-related issues.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "functionally obsolete",
    definition:
      "A designation for a structure whose design no longer meets current standards, such as for traffic capacity, load-bearing requirements, or clearance. The structure may still be in use, but its functionality is limited compared to modern criteria.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "gabion",
    definition:
      "A wire basket filled with rocks that provides structural support and controls erosion by stabilizing the soil and preventing surface runoff.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "galvanic action",
    definition:
      "The occurrence of electrical current flow between two different metals when they are in contact with each other, leading to corrosion in the more reactive metal.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "galvanize",
    definition:
      "The process of coating steel or iron with a layer of zinc to protect the metal from corrosion by creating a barrier and through sacrificial protection.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "gauge",
    definition:
      "A measurement used to determine the distance between parallel lines, such as rail tracks or rivet holes, or to describe the thickness of materials like sheet metal or wire.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "general scour",
    definition:
      "The process of streambed erosion around a structure, typically caused by flowing water, which may result in an uneven lowering of the riverbed in the vicinity of the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "geometry",
    definition:
      "The study of the shape, form, and spatial relationships between elements within a structure, which are crucial for determining its stability and functionality.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "girder",
    definition:
      "A primary structural component that provides horizontal support for a structure, typically made of steel, concrete, or wood, and is designed to resist bending and shear forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "girder bridge",
    definition:
      "A type of bridge where the superstructure consists of multiple girders supporting a separate floor system, providing stability through horizontal and vertical components.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "girder span",
    definition:
      "A bridge span supported primarily by girders as the major longitudinal components, providing strength and support across the gap or opening.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "glue laminated",
    definition:
      "A process of bonding layers of wood together using adhesive to create a composite member that is stronger and more stable than individual wood pieces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "grade",
    definition:
      "The slope or incline of a surface, typically expressed as a ratio or percentage, used to describe the rise or fall of roadways or other structures over a given horizontal distance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "grade crossing",
    definition:
      "The point at which two transportation routes, such as a roadway and railroad, intersect at the same level, commonly known as a level crossing.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "grade intersection",
    definition:
      "The point where two roadway slopes meet in profile, often requiring a vertical curve for a smooth transition between different road grades.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "grade separation",
    definition:
      "The design of roadways or railways at different elevations, allowing independent movement without interference, typically achieved by building overpasses or underpasses.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "gradient",
    definition:
      "The ratio of vertical rise to horizontal distance, typically expressed as a percentage, used to describe the slope of a surface or roadway.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "gravity abutment",
    definition:
      "A solid, weighty structure that resists horizontal earth pressure using its own mass and does not rely on active or passive resistance mechanisms.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "gravity wall",
    definition:
      "A type of retaining wall that prevents sliding or overturning through its own weight, without relying on external anchoring or support systems.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "grid flooring",
    definition:
      "A floor system made of steel or concrete arranged in a lattice or grid pattern, providing a strong, durable surface for the structure's support or pedestrian traffic.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "grillage",
    definition:
      "A foundation system consisting of parallel beams, typically steel or concrete, arranged in layers with alternating directions to distribute concentrated loads over a large area.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "groin",
    definition:
      "A structure built outward from a riverbank, designed to alter the direction of flow and prevent erosion or scour near the riverbank or bridge.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "grout",
    definition:
      "A cement-based mixture, often including water, sand, and other additives, used to fill gaps, secure anchor bolts, or seal masonry joints.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "grouting",
    definition: "The process of injecting grout into voids, cracks, or spaces to improve structural integrity, fill gaps, or seal connections.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "guard pier",
    definition:
      "A protective structure designed to shield a movable span from collisions with debris or passing vessels, often equipped with a latch to secure the span in its open position.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "guardrail",
    definition:
      "A safety feature that redirects errant vehicles away from hazardous areas, typically installed along roadways or at the edge of bridges.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "guide banks",
    definition:
      "Structures placed alongside a waterway opening to direct the flow of water through the bridge or culvert, often built from earth or stone.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "guide rail",
    definition: "A barrier used along roadways or bridges to redirect vehicles that veer off course, ensuring safety and preventing accidents.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "gunite",
    definition:
      "A process of applying mortar or concrete to a surface by spraying it with compressed air, often used for waterproofing or reinforcing structures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "gusset plate",
    definition: "A flat metal plate used to connect multiple structural components at a joint, providing stability and strength to the connection.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "gutter",
    definition:
      "A channel, often paved, designed to collect and direct water away from a roadway or bridge, helping to prevent flooding and erosion.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "guy",
    definition:
      "A tensioned cable used to anchor a structure, ensuring its stability and preventing movement caused by environmental forces such as wind or loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "H Loading",
    definition: "A specific combination of loads that represents a two-axle truck, used to simulate vehicle impact and stress on structures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "hairline cracks",
    definition:
      "Very narrow fractures that form in a surface due to stress or tension from applied loads, often visible only under close inspection.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "hammer",
    definition: "A hand tool used for sounding and inspecting surfaces by striking them to detect hidden flaws or hollow areas.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "hammerhead pier",
    definition: "A type of pier with a single shaft and a transverse cap, often used in structures where a cantilever design is beneficial.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "hand hole",
    definition: "An opening provided in a component to allow for interior access during construction or maintenance, usually covered with a plate.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "hand rail",
    definition: "A type of railing typically found on sidewalks, designed with a lattice, bars, or balusters to provide safety and prevent falls.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "hands-on",
    definition: "Inspection performed within arm's reach of a component, using visual techniques enhanced by non-destructive testing when necessary.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "hands-on access",
    definition: "Access to a component close enough for physical inspection, often allowing for tactile assessment and visual evaluation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "hanger",
    definition: "A tension member used to suspend a structure element, typically enabling expansion and movement between connected spans.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "haunch",
    definition: "An area where a member's depth increases, typically at the points of support, to provide added strength and resistance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "haunched girder",
    definition: "A beam with varying cross-sectional depth along its length, typically designed to optimize structural performance under load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "H-beam",
    definition: "A rolled steel section with an H-shaped cross-section, commonly used in foundation elements due to its high strength and stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "head",
    definition: "A measure of water pressure calculated based on the height of an equivalent column of water, often used in hydraulic calculations.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "head loss",
    definition: "The reduction in energy along the flow path of a fluid, primarily caused by friction, which results in a drop in water pressure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "headwall",
    definition: "A concrete structure placed at the end of a culvert, designed to support embankment slopes and prevent erosion.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "headwater",
    definition: "The source or upstream portion of a stream, where water begins to accumulate and flow towards downstream areas.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "heat treatment",
    definition: "A process involving controlled heating and cooling to alter the physical properties of metals, improving strength or ductility.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "heave",
    definition: "The upward movement of soil caused by external forces, such as changes in moisture content or temperature variations.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "heel",
    definition: "The portion of a footing that extends behind the vertical stem, contributing to stability by distributing load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "helical",
    definition: "A shape or structure that follows a spiral pattern, often used in screw threads or certain forms of reinforcement.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "high-carbon steel",
    definition: "A type of steel containing between 0.5% and 1.5% carbon, providing increased strength and hardness but reducing ductility.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "high-strength bolt",
    definition: "A bolt made from high-strength steel, typically used in applications requiring enhanced durability and resistance to loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "highway",
    definition: "A term encompassing roads, streets, tunnels, bridges, and related structures intended for vehicular traffic, often state-managed.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "hinge",
    definition: "A pivot point in a structure where a member is free to rotate, allowing for controlled movement under load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "hinged joint",
    definition:
      "A joint designed to allow rotational movement through a pin or other rotational device, often used to accommodate structural expansion.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "honeycomb",
    definition:
      "Areas in concrete where the mortar has failed to bond properly, leaving voids between aggregates, often due to improper mixing or placement.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "horizontal alignment",
    definition: "The arrangement of a roadway’s centerline in the horizontal plane, defining the path along which vehicles travel.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "horizontal curve",
    definition: "A curve in the roadway alignment that changes the direction of travel in the horizontal plane, defined by a specific radius.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "horizontal shear splits",
    definition: "Fractures that occur along the wood fibers parallel to the grain, typically caused by excessive loading or stress.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "Howe truss",
    definition: "A truss design characterized by vertical tension rods and an X-pattern of diagonals, commonly used for large span structures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "HS Loading",
    definition: "A load combination developed to represent the effect of a truck and trailer on a structure, as used in AASHTO standards.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "hybrid girder",
    definition:
      "A beam with flanges and a web made from different grades of steel, designed to optimize the structural performance and cost-effectiveness.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "hydraulic countermeasures",
    definition: "Man-made devices placed strategically to direct water flow and prevent soil erosion or scour from affecting structural integrity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "hydraulics",
    definition: "The science of fluid mechanics, focusing on the behavior and control of liquids, particularly water, in various environments.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "hydrology",
    definition:
      "The study of water distribution, movement, and properties in a given area, particularly focusing on precipitation, runoff, and groundwater.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "hydroplaning",
    definition: "A phenomenon where a vehicle loses traction with the road surface due to a layer of water, reducing braking and steering control.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "I-beam",
    definition:
      "A rolled or fabricated steel member with wide flanges and a narrow web, designed for high bending strength with minimal material use.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "ice guard",
    definition: "A protective device installed to shield structural components from impact or abrasion caused by drifting ice in water crossings.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "impact",
    definition: "A sudden or dynamic load effect from motion, vibration, or collision, requiring design allowances beyond static live loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "incomplete fusion",
    definition: "A weld defect where the filler metal fails to melt and combine fully with adjoining base surfaces, reducing structural integrity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "in-depth inspection",
    definition:
      "A detailed examination focusing on hard-to-detect flaws in structural members, often requiring direct contact and specialized tools.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "indeterminate stress",
    definition:
      "A force condition within a member that can’t be solved by static equilibrium alone, often requiring iterative or computational analysis.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "individual column footing",
    definition: "A concrete base designed to spread the load of a single vertical support over a wider area to prevent excessive soil pressure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "inelastic compression",
    definition: "A material condition where deformation continues beyond yield, no longer returning to original shape when load is removed.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "initial inspection",
    definition: "The first formal review of a structure used to establish condition baselines and collect all required inventory and appraisal data.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "inlet",
    definition: "A recessed opening that collects surface water and channels it into a pipe or conduit to manage runoff effectively.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "inspection frequency",
    definition: "The regular interval at which a structure is evaluated to monitor condition changes and identify potential safety issues.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "integral abutment",
    definition: "A unified end support cast with the deck structure to eliminate joints and simplify response to thermal expansion.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "integral deck",
    definition: "A monolithic upper slab permanently bonded to girders or beams, eliminating a defined joint between components.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "intercepting ditch",
    definition: "A surface trench placed to redirect runoff and prevent water from eroding slopes or pooling at critical points.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "interior girder",
    definition: "A primary load-carrying beam located between the outermost edge supports in a multi-girder system.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "interior span",
    definition: "A segment of a structure that rests between intermediate supports and carries distributed live and dead loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "intermittent weld",
    definition: "A spaced welding pattern used to reduce heat input or material use while maintaining necessary structural connectivity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "internal redundancy",
    definition: "A configuration where failure of one part does not lead to total member failure due to multiple load paths within the same element.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "internal steel corrosion",
    definition: "A degradation process where protective layers break down, allowing aggressive agents like chlorides to attack embedded steel.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "intrados",
    definition: "The inward-curving lower boundary of an arch profile, forming the concave inner face of the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "inventory item",
    definition: "A cataloged property recorded in a structure database, used for management, analysis, and decision-making.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "inventory rating",
    definition: "The safe load-carrying capacity determined for standard use conditions, reflecting long-term serviceability and material limits.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "invert elevation",
    definition: "The lowest point along the internal bottom surface of a conduit or pipe used for drainage or flow measurement.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "iron",
    definition: "A base element in many structural alloys, used historically and currently in both unrefined and engineered forms.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "isotropic",
    definition: "A material characteristic where mechanical properties are identical regardless of measurement direction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "jack arch",
    definition:
      "A shallow masonry or concrete arch built between steel beams, designed to span short distances by transferring load through compression rather than bending.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "jacking",
    definition:
      "The use of mechanical force, often hydraulic, to lift or reposition structural components, typically for load transfer, alignment, or temporary relief during repairs.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "jack stringer",
    definition:
      "The beam located along the outermost floor bay, often carrying less load than interior members but crucial for supporting edges and distributing deck forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "jacket",
    definition:
      "A surrounding layer applied to piles for protection or reinforcement, often used to shield against impact, corrosion, or environmental degradation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "jersey barrier",
    definition:
      "A modular concrete barrier with a sloped profile that redirects impacting vehicles while minimizing rollover risk and preserving traffic separation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "joint",
    definition:
      "A break in continuity between structural units that allows for movement, stress relief, or construction sequencing, common in both rigid and flexible systems.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "keeper plate",
    definition:
      "A steel restraint fixed near a bearing to prevent lateral displacement of a supported member, ensuring it remains seated during dynamic or thermal movement.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "key",
    definition:
      "A protruding shape formed in concrete to interlock with adjacent pours, enhancing shear transfer and preventing relative movement across joints.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "keystone",
    definition:
      "The final piece placed at the crown of an arch, locking the voussoirs into compression and completing structural continuity across the span.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "king-post",
    definition:
      "A vertical compression element used in simple truss systems to transfer load from the apex to the bottom chord, stabilizing two angled members.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "king-post truss",
    definition:
      "A basic triangular structural frame with a central vertical post connecting the apex to the base, often used for short spans or simple framing needs.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "kip",
    definition:
      "A unit of force equal to 1,000 pounds-force, commonly used in structural analysis to simplify large load values in calculations and design.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "knee brace",
    definition:
      "A diagonal stiffening component placed between intersecting members at an angle to reinforce the joint and reduce flexural deformation under load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "knee wall",
    definition:
      "A low return wall enclosing a seat on three sides to contain bearing assemblies and reduce exposure to runoff or debris from adjoining surfaces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "knife edge",
    definition:
      "A deterioration pattern where corrosion thins steel to a sharp ridge, increasing stress concentration and risk of fracture under load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "knuckle",
    definition:
      "A pivoting connection at the anchorage of a suspension system allowing slight motion to accommodate shifts in cable tension or alignment.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "knots",
    definition:
      "Natural wood defects formed when branches are enveloped by trunk growth, creating hard, circular grain interruptions that affect strength and appearance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "K-truss",
    definition:
      "A web configuration where diagonals and verticals form repeating 'K' shapes within each panel, balancing shear forces and minimizing buckling length.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "L-abutment",
    definition:
      "A cantilever configuration where the stem and footing form an L-shaped profile, offering resistance to lateral earth pressure while allowing direct load transfer into the footing.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "laced column",
    definition:
      "A built-up steel section using diagonal connectors to tie the main vertical elements together, enhancing lateral stability and distributing compressive forces more evenly.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "lacing",
    definition:
      "A system of slender cross-connecting elements that unify individual parts of a structural member, reducing buckling and helping maintain alignment under load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "lagging",
    definition:
      "A temporary or permanent barrier made of boards or panels placed between retaining supports to hold soil or concrete in place during excavation or forming.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "lamellar tear",
    definition:
      "A subsurface fracture aligned parallel to the rolled surface of steel, typically caused by through-thickness stress interacting with inclusions or segregation zones.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "laminated timber",
    definition:
      "An engineered wood element made by gluing multiple boards together in parallel, creating a stronger, more dimensionally stable unit resistant to warping or splitting.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "lane loading",
    definition:
      "A design simulation representing concentrated traffic forces along designated travel paths, accounting for vehicle spacing, axle weights, and lateral distribution.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "lap joint",
    definition:
      "A structural connection where two elements overlap and are fastened to ensure load transfer through shear or friction, commonly used in steel or timber assemblies.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "lateral",
    definition:
      "A secondary component oriented roughly perpendicular to a primary member, often serving to transfer shear, provide stability, or resist torsional effects.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "lateral bracing",
    definition:
      "An arrangement of members that limits sideways displacement and maintains geometric integrity, especially under wind, seismic, or dynamic loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "lateral stream migration",
    definition:
      "The gradual horizontal shift of a stream channel due to erosion and deposition along banks, potentially altering flow paths and affecting nearby structures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "lattice",
    definition:
      "A repetitive pattern of diagonally intersecting members that distribute load and maintain alignment, often used in lightweight or redundant support systems.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "lattice truss",
    definition:
      "A truss configuration utilizing interlaced diagonal systems without verticals, forming a dense mesh that disperses loads and offers redundancy in web resistance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "leaching",
    definition:
      "The process by which water removes soluble substances from materials, leading to degradation or change in material composition over time.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "lead line",
    definition:
      "A marked cord with a weighted end used to gauge water depth by lowering it until it touches bottom, historically used for navigation and site assessment.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "leaf",
    definition:
      "A pivoting or rotating span element in movable structures, allowing clearance for navigation or traffic below when raised or rotated.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "legal load",
    definition:
      "The maximum vehicle weight allowed by law for a specific roadway or structure, typically determined by axle configuration and jurisdictional regulations.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "lenticular truss",
    definition:
      "A curved truss form with opposing arches for top and bottom chords that meet at jointed ends, distributing loads efficiently through compression and tension.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "levee",
    definition: "An elongated earthen or concrete embankment constructed to prevent floodwaters from spreading into adjacent low-lying areas.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "leveling course",
    definition:
      "A preparatory asphalt or concrete layer used to smooth out surface irregularities before placing the final pavement or overlay system.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "light-weight concrete",
    definition:
      "A reduced-density mix achieved using specialized aggregates or void-forming techniques, offering lower dead load while maintaining structural performance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "link",
    definition:
      "A shaped metal component, typically with widened ends and a pinhole, used in assemblies where controlled rotation or tension transfer is required.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "link and roller",
    definition:
      "A compound mechanism combining pivoting links and rolling supports to manage structural movement, especially in swing or movable span systems.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "live load",
    definition:
      "A transient force from traffic, equipment, or temporary storage that changes in magnitude or location over time, often requiring dynamic analysis.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "load",
    definition:
      "A force applied to a structural component or system, encompassing weight, pressure, wind, or impact that induces stress or displacement.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "load factor design",
    definition:
      "A safety-based approach using amplified loads and material limits to ensure structures perform under worst-case scenarios without exceeding failure thresholds.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "load indicating washer",
    definition:
      "A specialized washer with crushable protrusions that flatten under bolt tension, providing a visual cue that correct tightening force has been reached.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "load path redundancy",
    definition:
      "A structural arrangement offering alternate routes for load transfer if one element fails, improving resilience against progressive collapse.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "load rating",
    definition:
      "An engineering evaluation determining the safe capacity for carrying live traffic, factoring in condition, design, and analysis method.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "load and resistance factor design (LRFD)",
    definition:
      "A probabilistic method incorporating load variability and material strength limitations, ensuring reliability through calibrated safety factors.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "local buckling",
    definition:
      "A failure mode where thin plate sections deform out of plane under compression, often preceding full member collapse in inadequately braced systems.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "local scour",
    definition:
      "A concentrated erosion pattern near structural obstructions caused by increased flow velocity and turbulence, often exposing foundations.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "longitudinal bracing",
    definition:
      "A system of aligned members running parallel to the primary span, counteracting longitudinal forces and maintaining spacing between transversely oriented elements.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "loss of prestress",
    definition:
      "A reduction in applied force within tendons due to factors like creep, shrinkage, friction, or relaxation, decreasing effective internal stress over time.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "low-carbon steel",
    definition:
      "A common form of mild steel with limited carbon content, offering high ductility, weldability, and ease of fabrication for general construction use.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "lower chord",
    definition:
      "The bottom horizontal element of a truss, typically subjected to tension forces, acting in concert with the top chord to resist bending.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "luminaire",
    definition:
      "A complete lighting unit including lamp, housing, reflector, and mounting hardware, designed to deliver and direct illumination efficiently.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "macadam",
    definition:
      "A type of pavement built with layers of crushed stone compacted into place, often open-graded and historically bound with tar or asphalt to improve cohesion and durability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "main beam",
    definition:
      "A primary horizontal support that transfers structural loads directly to piers, abutments, or other vertical elements within a span system.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "maintenance",
    definition:
      "The routine preservation or minor repair of a facility intended to sustain functionality and prevent further degradation or costly damage.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "maintenance and protection of traffic",
    definition:
      "The temporary arrangement of signs, barriers, signals, and lane shifts designed to guide and protect road users and workers during construction activities.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "marine borers",
    definition:
      "Organisms such as shipworms and gribbles that inhabit saltwater environments and cause structural damage by tunneling through submerged timber.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "masonry",
    definition:
      "The structural assembly of units like stone, brick, or block laid in bonded courses and typically joined with mortar to form stable load-bearing sections.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "masonry cement",
    definition: "A blend of portland cement and finely ground lime formulated for improved workability and bonding in mortar applications.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "masonry plate",
    definition:
      "A steel element used to distribute bearing loads from superstructure components across the surface of underlying stone or blockwork.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "mattress",
    definition:
      "A flexible scour control layer composed of interconnected elements like gabions, concrete units, or wood used to resist water-induced erosion.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "meander",
    definition:
      "A natural, sinuous flow path typically found in low-gradient streams across broad floodplains, often associated with sediment deposition and lateral migration.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "median",
    definition:
      "A designated separation between opposing lanes that may consist of a barrier, landscaping, or paved area to improve traffic safety and flow.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "member",
    definition: "An individual structural component such as a plate, angle, or beam that functions as part of a larger framework to resist loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "metal corrosion",
    definition:
      "The gradual deterioration of metal surfaces caused by electrochemical reactions with moisture and oxygen, often resulting in rust or pitting.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "midspan",
    definition: "The central point between two supports where bending moments typically reach their maximum in simple beam configurations.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "mild steel",
    definition: "A low-carbon alloy with good ductility and weldability commonly used for structural framing, plates, and reinforcement.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "military loading",
    definition:
      "A prescribed vehicle configuration used to simulate the effects of heavy tactical equipment crossing a structure during design evaluation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "mill scale",
    definition:
      "A hard, brittle oxide layer that forms on the surface of steel during hot rolling or forging, typically removed before painting or welding.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "modular joint",
    definition:
      "A multi-element expansion device designed for large movements, incorporating seal assemblies and steel edge beams to maintain deck continuity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "modulus of elasticity",
    definition: "The ratio of applied stress to elastic strain in a material, representing its stiffness and used to predict deformation under load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "moisture content",
    definition: "The percentage of water in a given material by weight, influencing strength, stability, and durability in structural components.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "moment",
    definition: "The rotational force generated by a load acting at a distance from a reference point, commonly analyzed in bending behavior.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "monolithic",
    definition: "Cast or constructed as a single, continuous mass without separation joints, typically enhancing uniformity and durability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "mortar",
    definition: "A workable paste of cementitious material, sand, and water used to bond masonry units and fill joints between them.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "movable bridge",
    definition: "A type of structure with one or more spans capable of being repositioned to allow the passage of marine traffic beneath.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "movable span",
    definition:
      "A structural segment that shifts or lifts from its service position to increase vertical or horizontal clearance for navigation or access.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "moving load",
    definition: "A dynamic force applied to a structure by vehicles, equipment, or pedestrians traveling across it in real time.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "MPT",
    definition: "An abbreviation for methods used to guide and protect traffic during work activities; see maintenance and protection of traffic.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "MSE",
    definition: "An abbreviation for mechanically stabilized earth; see reinforced earth.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "multi-centered arch",
    definition: "A curved structure composed of multiple tangent arcs with varying radii, creating a flattened profile suited for wide openings.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "nail laminated",
    definition:
      "A structural element made by fastening layers of timber face-to-face with nails, forming a solid section with improved load capacity and dimensional stability compared to individual planks.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "National Bridge Inspection Standards",
    definition:
      "The federal guidelines that govern how often inspections occur, who is qualified to perform them, how reports are formatted, and the procedures used to evaluate structural condition and safety.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "National Bridge Inventory",
    definition:
      "The official database used by federal and state agencies to track structural, geometric, and appraisal data for publicly owned bridges in compliance with federal reporting requirements.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "NCHRP",
    definition:
      "A research program administered by the Transportation Research Board that funds practical studies addressing transportation system needs, materials, and methods.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "NICET",
    definition:
      "A certification body that validates technical knowledge and field experience for engineering technicians across multiple disciplines through standardized exams and work history documentation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "NDE",
    definition: "A method for evaluating materials or components for flaws or deterioration without removing them from service or causing damage.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "NDT",
    definition:
      "A category of inspection techniques used to assess internal or surface-level flaws without altering or destroying the material being tested.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "necking",
    definition: "The local reduction in cross-sectional area that occurs in a material under tension, typically just before fracture.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "negative bending",
    definition:
      "A flexural condition where the surface nearest the load goes into tension and the opposite face into compression, usually near intermediate supports.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "negative moment",
    definition:
      "The bending action that results in compression at the bottom and tension at the top of a member, often occurring at the support of a continuous span.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "neoprene",
    definition:
      "A durable, synthetic elastomer resistant to weather, oil, and chemicals, commonly used where flexible movement and long-term performance are required.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "neutral axis",
    definition:
      "The theoretical line within a cross-section of a flexed member where fibers experience no strain, separating regions under tension from those under compression.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "non-homogeneous",
    definition:
      "Describes a material or structure composed of differing constituents or properties, resulting in varied strength, stiffness, or behavior throughout its volume.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "nose",
    definition: "A pointed upstream extension at the end of a pier that helps split flow, reduce scour, and minimize impact from floating debris.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "notch effect",
    definition:
      "The increase in localized stress caused by abrupt changes in geometry such as holes, grooves, or cracks, which can lead to early failure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "offset",
    definition:
      "A perpendicular measurement used to locate a point relative to a reference line, often for plotting or marking positions accurately during layout or surveying.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "on center",
    definition:
      "The typical spacing between repeated elements, measured from the central axis of one unit to the next, ensuring consistent alignment and load distribution.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "open spandrel arch",
    definition:
      "A type of arch structure where vertical or diagonal supports carry the deck, leaving the space between the arch and deck visually and structurally open.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "open spandrel ribbed arch",
    definition:
      "An arch composed of separate curved ribs connected by lateral braces, with vertical supports rising from the ribs to hold the deck above open voids.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "operating rating",
    definition:
      "The maximum safe live load that a structure can support under standard loading conditions, based on a higher stress threshold than for routine use.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "operator's house",
    definition:
      "A control structure equipped with mechanical and electrical systems that allow personnel to raise, lower, or rotate movable spans as needed.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "orthotropic",
    definition:
      "A material characteristic defined by directional dependence, where strength, stiffness, or elasticity varies based on the axis of applied force.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "outlet",
    definition:
      "The discharge point where water exits a pipe, culvert, or drainage system, often shaped or reinforced to control flow velocity and erosion.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "out-of-plane distortion",
    definition:
      "A form of deformation where a member bends or twists outside its intended load-resisting direction, often reducing stiffness and structural reliability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "overlay",
    definition:
      "A layer of material added over an existing surface to improve ride quality, restore elevation, or extend service life without full reconstruction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "overload",
    definition:
      "An imposed weight or force that exceeds the intended design capacity, potentially causing overstress, cracking, or permanent deformation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "overload damage",
    definition:
      "The condition resulting from excessive stress or weight, often indicated by cracking, deflection, or material failure in structural elements.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "overpass",
    definition:
      "A grade-separated crossing that allows one route to pass uninterrupted over another, improving traffic flow and reducing conflict points.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "overturning",
    definition: "The rotational failure mode caused by an unbalanced moment, where lateral forces push the structure beyond its stabilizing base.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "oxidation",
    definition:
      "A chemical reaction involving oxygen that alters a material’s composition, often resulting in surface corrosion, scaling, or weakened properties.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "oxidized steel",
    definition:
      "A metal surface that has reacted with oxygen and moisture to form rust, reducing both aesthetic appearance and mechanical strength over time.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pack",
    definition:
      "A steel shim used to close minor gaps between structural elements, ensuring tight fit-up and even load transfer across joined components.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pack rust",
    definition:
      "A corrosion product that forms between tightly pressed metal surfaces, expanding and forcing them apart, often leading to deformation or loss of bearing.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "paddleboard",
    definition:
      "A roadside marker shaped like a vertical paddle with diagonal stripes, placed in advance of narrow passages to signal reduced width or clearance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "panel",
    definition:
      "The structural bay between two adjacent joints along the length of a truss, bounded by vertical or diagonal members and the chords they connect.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "panel point",
    definition:
      "The location where vertical or diagonal elements intersect with the upper or lower boundary members, serving as a major load transfer node.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "parabolic arch",
    definition:
      "An arch shape optimized for uniform vertical loading, following the curve of a parabola to minimize bending and maximize axial compression.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "parabolic truss",
    definition:
      "A curved-frame truss layout with top members following a parabolic arc for efficient load distribution and lower members kept linear for simplicity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "parapet",
    definition:
      "A low protective barrier along the edge of a road or platform that prevents vehicles or pedestrians from accidentally leaving the surface.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pedestal",
    definition:
      "An intermediate block that elevates a bearing surface above its supporting seat, often used to provide a precise elevation for proper load transfer.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pedestal pier",
    definition:
      "A substructure component consisting of one or more piers built in a block-like form, sometimes connected by an integrally built web. When formed as a single, wide block-like structure, it may be referred to as a wall or solid pier.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pedestrian bridge",
    definition:
      "A structure designed for the safe passage of foot traffic over obstacles such as roads, rivers, or railways, often incorporating features like ramps, stairs, or suspension elements to ensure accessibility.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "penetration",
    definition:
      "The depth to which a substance, such as creosote oil, permeates a material. It can also refer to the distance a pile tip is driven into the ground during pile driving, contributing to the stability of the foundation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "permanent loads",
    definition:
      "Loads that remain constant over the life of the structure, typically including the weight of the structure itself and any other non-variable forces such as earth pressure or dead weight.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "physical testing",
    definition:
      "The process of evaluating the behavior and performance of bridge components in the field or laboratory under controlled conditions to assess their strength, durability, and safety.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pier",
    definition:
      "A vertical support structure used to bear the load of a bridge superstructure, typically positioned between the abutments to distribute the weight across the span.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pier cap",
    definition:
      "The horizontal structural element at the top of a pier, which serves to distribute loads from the bridge superstructure to the vertical pier supports beneath.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pile",
    definition:
      "A long, slender structural member driven deep into the ground to transfer loads to stable soil or rock strata, providing foundation support for structures such as bridges.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pile bent",
    definition:
      "A structural unit consisting of a series of piles driven into the ground, which are then connected at the top by a beam or pile cap, typically used to support a bridge superstructure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pile bridge",
    definition:
      "A type of bridge supported by piles or pile bents, with the piles serving as the main support structure beneath the superstructure to ensure stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pile cap",
    definition:
      "A thick concrete or steel slab placed atop piles, connecting them together laterally and transferring the loads from the bridge superstructure to the piles beneath.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pile foundation",
    definition:
      "A type of foundation where piles are driven into the ground to support a structure, providing stability by transferring loads to deeper, more solid soil or rock layers.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pile pier",
    definition:
      "A type of pier consisting of driven piles grouped together to support a pile cap, which in turn bears the load of the bridge superstructure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "piling",
    definition:
      "The collective term for a group of piles used in construction to provide deep foundation support by transferring loads to stable soil or rock.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pin",
    definition:
      "A cylindrical bar used to connect elements of a structure, allowing rotational movement between parts while maintaining structural integrity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pin-connected truss",
    definition:
      "A truss where the web and chord members are connected at each panel point by a pin, allowing rotational movement and simplifying the design.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pin and hanger",
    definition:
      "A connection detail that allows for expansion and rotation between structural elements, typically used in cantilevered and suspended spans to facilitate movement under load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pin joint",
    definition:
      "A joint in a structural frame where members are connected by a cylindrical pin, allowing rotation while transferring loads between components.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pin packing",
    definition:
      "The arrangement of structural members on a pin in a pinned joint, ensuring proper alignment and load distribution while allowing movement between connected parts.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pin plate",
    definition:
      "A rigid plate attached to the end of a member to ensure proper bearing on a pin, providing additional strength and rigidity to the connection.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pintle",
    definition:
      "A small steel pin that engages the rocker of an expansion bearing, typically used in a sole plate or masonry plate to prevent the sliding of the rocker.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pipe",
    definition: "A cylindrical hollow member used for transporting fluids or gases, commonly utilized in bridges for drainage systems or utilities.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "piping",
    definition:
      "The process where fine particles within a soil mass are carried away by flowing water, potentially affecting the stability of the foundation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "plain concrete",
    definition:
      "A material consisting primarily of cement, water, and aggregates, with minimal or no reinforcement, sometimes using light steel to reduce shrinkage and temperature cracking.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "plan and profile",
    definition:
      "A drawing that combines both the top view and elevation of a road or structure, providing a clear representation of its layout and vertical dimensions at the same scale.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "plan view",
    definition:
      "A drawing representing the top-down perspective of a road or structure, typically showing dimensions, alignment, and layout without vertical information.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "plastic deformation",
    definition:
      "A permanent change in the shape or size of a material that occurs when the applied stress exceeds the material’s elastic limit, causing irreversible distortion.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "plastic strain",
    definition:
      "The irreversible alteration of a material's shape due to stress beyond its elastic limit, which cannot be recovered once the load is removed.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "plate",
    definition:
      "A flat, thick sheet of metal commonly used in construction, thicker than sheet steel, often cut or welded into structural components.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "plate girder",
    definition:
      "A large beam used in structural applications, consisting of a solid web plate and flange plates, which are attached using fillet welds or flange angles.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "plug weld",
    definition: "A welding technique where metal is deposited into a hole cut through one or more members to join them, also known as slot welding.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "plumb bob",
    definition: "A weight attached to a cord, used to establish a true vertical reference point or line.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "plumb line",
    definition: "A reference line formed by the cord of a plumb bob, indicating a perfectly vertical direction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pneumatic caisson",
    definition:
      "A submerged, air-tight chamber used in underwater construction, where compressed air is used to keep the working area dry despite external water pressure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "point loads",
    definition:
      "Concentrated forces applied to a small, localized area, which can have a significant impact on the structural integrity of the material at that point.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pointing",
    definition:
      "The process of compacting mortar into the outer portion of a joint and smoothing the surface to ensure water-tightness or achieve a desired aesthetic effect.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "ponding",
    definition: "The accumulation of water in a localized area, typically due to poor drainage or surface irregularities.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pontoon bridge",
    definition:
      "A type of floating bridge supported by pontoons, which are moored to the riverbed, often designed for temporary use with parts removable to allow navigation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pony truss",
    definition:
      "A truss design where the top chord is not braced laterally, with the trusses arranged in a through configuration, typically used in short-span structures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pop-out",
    definition:
      "A defect in concrete where a small conical fragment breaks out of the surface due to pressure from reactive aggregate particles, typically caused by chemical reactions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "portable bridge",
    definition:
      "A bridge designed for easy assembly and disassembly, allowing it to be relocated for temporary transportation or communication purposes.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "portal",
    definition:
      "The clear, unobstructed opening in a through truss bridge, forming the entrance to the structure and providing space for vehicles or pedestrians to pass through.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "portal bracing",
    definition: "A system of lateral braces placed in the plane of the end posts of a truss, providing stability and preventing swaying under loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "portland cement",
    definition:
      "A finely ground powder derived from limestone that reacts chemically with water to form a solid mass, used as a primary ingredient in concrete.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "portland cement concrete",
    definition:
      "A mixture of aggregates, portland cement, water, and usually chemical admixtures, commonly used for construction due to its durability and strength.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "positive moment",
    definition:
      "A bending moment that results in compression at the top of a beam and tension at the bottom, typically caused by applied forces acting along the beam’s length.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "post",
    definition:
      "A vertical structural member used to resist compressive forces, often found in truss systems, and can sometimes be referred to interchangeably with a column.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "posting",
    definition:
      "A system of limitations placed on a bridge to ensure safe usage, indicating maximum allowable dimensions, speeds, or loads for the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "post-stressing",
    definition:
      "The process of applying stress to tendons in concrete after it has cured, in order to improve its ability to carry live loads effectively.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "posttensioning",
    definition:
      "A method of prestressing concrete by applying tension to tendons after the concrete has hardened, providing internal compression to improve load resistance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pot bearing",
    definition:
      "A bearing system that allows multi-dimensional rotation, typically using a piston supported by elastomer or spherical elements within a cylindrical 'pot' structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pot holes",
    definition:
      "Irregularly shaped, worn-out areas on a concrete or pavement surface, often caused by the failure of the top layer material under repeated traffic or environmental stress.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "Pratt truss",
    definition:
      "A truss design where vertical posts are connected by diagonal ties slanting outward and upward, forming a distinct 'X' pattern from the bottom chord to the truss ends.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "precast concrete",
    definition:
      "Concrete components that are cast and cured in a controlled factory environment before being transported and assembled at their final construction site.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "prestressed concrete",
    definition:
      "Concrete that is intentionally compressed using tendons or strands, which are stressed before the concrete is loaded to enhance its strength and durability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "prestressing",
    definition:
      "The application of forces to a structure to induce controlled deformation, thereby enhancing its ability to handle load stresses more effectively.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "pretensioning",
    definition:
      "A method of prestressing where tendons are stretched before concrete is poured, creating internal compression once the tendons are released after curing.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "primary member",
    definition:
      "A structural component designed to resist significant bending and shear forces, crucial for distributing live and dead loads across the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "priming coat",
    definition:
      "The initial layer of protective coating applied to a metal or other material, designed to enhance adhesion and prevent corrosion before further coating layers are added.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "probing",
    definition:
      "A technique used to examine submerged or concealed materials, typically involving a rod or tool to assess conditions such as decay or structural integrity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "Professional engineer (PE)",
    definition:
      "A licensed individual who has met educational, experience, and exam requirements, permitting them to legally provide engineering services to the public within their jurisdiction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "profile",
    definition:
      "A cross-sectional drawing of a road or waterway, showing ground levels before and after construction, providing a clear depiction of the terrain’s elevation changes.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "program manager",
    definition:
      "The individual responsible for overseeing the bridge inspection and reporting program, offering guidance and leadership to ensure compliance and effective operations.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "programmed repair",
    definition:
      "Repairs that are scheduled in advance as part of a planned maintenance program, typically based on anticipated needs rather than immediate or emergency actions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "protective system",
    definition:
      "A coating or treatment applied to materials to prevent deterioration caused by environmental factors, such as corrosion in steel or decay in timber.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "PS&E",
    definition:
      "Plans, Specifications, and Estimates; the final package of documents submitted by designers to the project owner, outlining detailed plans and costs for construction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "public road",
    definition:
      "A roadway maintained by a public authority and open for use by the general public, typically subject to regulations and standards for safety and accessibility.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "punching shear",
    definition:
      "A type of shear stress that occurs in slabs when a concentrated load is applied, causing localized failure at the point of contact between the load and the surface.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "quality assurance (QA)",
    definition:
      "A system that employs sampling and other techniques to ensure that quality control measures are properly applied and that the overall program adheres to established standards, verifying that the desired level of quality is met.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "quality control (QC)",
    definition:
      "A set of procedures designed to maintain and monitor the standards of a program, ensuring that the work performed meets the required specifications and consistently meets a specified quality level.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "queen-post truss",
    definition:
      "A truss type that features parallel chords with three panels, where the top chord is only present in the center panel. This configuration allows for a simplified structure while still distributing loads efficiently.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "railing",
    definition:
      "A protective barrier constructed at the outer edge of a roadway or walkway, designed to safeguard pedestrians and vehicles from falling off or driving off the edge of the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "rake",
    definition:
      "An angle formed between a surface and a vertical plane, typically used to describe the slant of a member or structure in relation to the vertical.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "ramp",
    definition:
      "An inclined pathway that connects different levels or elevations, often used to allow smooth transition between vertical or horizontal surfaces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "range of stress",
    definition:
      "The difference between the maximum and minimum stress levels experienced by a member during loading conditions, indicating the magnitude of stress variation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "raveling",
    definition:
      "The progressive loss of small aggregates from a surface due to the action of weather, traffic, or environmental factors, leading to surface degradation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "reaction",
    definition: "The opposing force exerted by a support in response to an applied load, maintaining equilibrium in the system.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "rebar",
    definition: "A steel bar used to reinforce concrete, providing tensile strength and improving durability in the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "redundancy",
    definition: "The presence of extra structural elements beyond what is necessary for stability, ensuring additional safety and load distribution.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "redundant member",
    definition:
      "An element in a structure that is not essential for stability but serves to reduce stresses on the primary elements, making the structure statically indeterminate.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "rehabilitation",
    definition:
      "Major repair or improvement work conducted to restore a structure to its original condition or enhance its functionality and safety.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "reinforced concrete",
    definition:
      "Concrete embedded with steel bars or mesh to increase its tensile strength and overall durability, allowing it to withstand greater loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "reinforced concrete pipe",
    definition:
      "Concrete pipes that are reinforced with steel bars or mesh to enhance their strength and ability to withstand internal and external pressures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "Reinforced Earth",
    definition:
      "A retaining structure composed of layers of steel strips interwoven with earth, connected to a concrete facing, providing stability and support.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "reinforcement",
    definition:
      "Steel rods or mesh incorporated within concrete to increase its tensile strength, enabling it to carry heavier loads and resist cracking.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "reinforcing bar",
    definition: "A steel bar, either smooth or deformed, that is embedded in concrete to improve its tensile strength and resistance to cracking.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "relaxation",
    definition:
      "A reduction in the internal stress of a material over time due to deformation under constant strain, often observed in materials under load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "residual stress",
    definition:
      "Internal stress that remains in a material after it has been formed or processed, potentially affecting its performance and stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "resistivity of soil",
    definition:
      "A measurement of a soil's ability to resist the flow of electrical current, which can indicate its potential for corrosion in structures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "resurfacing",
    definition:
      "The process of applying a new layer of material over a worn or damaged surface to restore its functionality and improve its performance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "Retained Earth",
    definition:
      "A system of retaining walls made from layers of geosynthetic materials and steel reinforcements, providing support for earth embankments.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "retaining wall",
    definition:
      "A structure designed to resist lateral pressure from soil or water, preventing the movement or erosion of earth in areas like slopes or embankments.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "retractile draw bridge",
    definition:
      "A bridge with a movable superstructure that can shift horizontally along rollers, opening to allow passage while maintaining support at the closed position.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "rib",
    definition:
      "A structural component used to support a curved surface or shape, often seen in arches or domes, to distribute loads more effectively.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "rigger",
    definition:
      "A professional who handles the setup, maintenance, and operation of scaffolding and other access equipment, ensuring safe working conditions for construction or inspection activities.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "rigid frame",
    definition:
      "A structural system where bending moments are transferred between horizontal and vertical elements, typically used to resist lateral forces such as wind or seismic activity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "rigid frame bridge",
    definition:
      "A bridge design in which the joints between the superstructure and vertical or inclined supports resist bending, allowing for better force distribution across the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "rigid frame pier",
    definition:
      "A type of pier constructed as a frame, combining vertical supports and horizontal beams to form a solid, monolithic structure that resists bending moments.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "riprap",
    definition:
      "A layer of stones, blocks of concrete, or other materials placed on river and stream beds, banks, or shores to mitigate erosion caused by water flow or wave action.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "river training structures",
    definition: "Devices constructed to modify the natural flow of a river, directing the water's path or improving navigability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "rivet",
    definition: "A metal fastener with a cylindrical shaft and forged heads at both ends, used to join materials together permanently.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "riveted joint",
    definition: "A connection formed by fastening materials together using rivets to create a secure and permanent bond.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "roadway",
    definition: "The portion of a road that is designed for vehicular traffic, typically consisting of lanes and shoulders.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "roadway shoulder",
    definition: "The area immediately adjacent to the traveled portion of the road, providing space for vehicles to stop or for emergency use.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "rocker bearing",
    definition: "A support system that allows a structure to expand and contract by tilting in response to temperature changes or applied loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "rocker bent",
    definition:
      "A structural component designed to allow for movement along the longitudinal axis, typically providing flexibility to accommodate temperature variations or heavy loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "rolled shape",
    definition:
      "Steel forms created by hot-rolling processes into specific cross-sectional shapes, such as 'I', 'H', 'C', or 'Z' for structural applications.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "rolled-steel section",
    definition:
      "A hot-rolled steel product available in various forms like wide flange shapes, channels, and angles, used for structural reinforcement.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "roller",
    definition: "A steel cylinder placed to facilitate the longitudinal movement of a structure through rolling contact.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "roller bearing",
    definition:
      "A device that uses a single or multiple rollers to allow a structure to move longitudinally while supporting its weight and minimizing friction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "roller nest",
    definition:
      "A set of steel cylinders arranged to permit smooth longitudinal movement of a structure in response to temperature changes or applied loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "rolling lift bridge",
    definition:
      "A bascule-type bridge designed to move horizontally on supporting girders in a rolling motion to open and close, providing clearance for vessels.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "routine inspection",
    definition:
      "A regularly scheduled inspection that assesses the condition of a structure, noting any changes from previous conditions to ensure it remains functional and safe.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "routine permit load",
    definition:
      "A live load exceeding legal weight or axle limits but authorized for repeated travel under specific conditions, typically for specialized transport of heavy goods.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "rubble",
    definition: "Unshaped, irregular stone pieces typically sourced from quarries, used in various construction applications.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "runoff",
    definition:
      "The amount of precipitation that flows over the surface of a catchment area and passes a given point, usually measured over a specified time frame.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sacrificial anode",
    definition:
      "A component used in a cathodic protection system designed to corrode instead of the protected material, thus prolonging the lifespan of the structure by reducing the effects of corrosion.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sacrificial coating",
    definition:
      "A protective layer applied to a base material to prevent corrosion; examples include galvanizing on steel and aluclading on aluminum, where the coating degrades instead of the underlying material.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sacrificial protection",
    definition:
      "Refers to the use of sacrificial anodes or coatings in a cathodic protection system, where a less noble material corrodes instead of the protected structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sacrificial thickness",
    definition:
      "An additional material thickness added to a structural element to extend its service life, particularly in environments prone to aggressive corrosion or wear.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "saddle",
    definition:
      "A structural component on a suspension bridge tower that provides a bearing surface for the catenary cable, allowing it to pass smoothly over the top.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "safe load",
    definition:
      "The maximum load that a structure can carry safely, calculated with a suitable factor of safety to account for uncertainties in material properties and loading conditions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "safety belt",
    definition:
      "A safety device worn with a safety line to prevent falls from heights. It is no longer compliant with current OSHA regulations for fall protection, which require full-body harnesses.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "safety curb",
    definition:
      "A curb between 9 and 24 inches wide, providing a refuge or walkway for pedestrians crossing a bridge, typically placed along bridge edges to enhance safety.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "safety factor",
    definition:
      "The ratio between the ultimate strength of a material or structure and the expected maximum load, providing a margin of safety against failure under design conditions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "safety harness",
    definition:
      "A fall protection device with straps for the shoulders, waist, and legs, used with appropriate lanyards and tie-off points to prevent workers from falling during high-altitude tasks.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sag",
    definition: "The downward deflection of a structure, such as a beam or cable, under load due to its own weight or external forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "scab",
    definition:
      "A reinforcing piece, such as a plank or metal section, attached to a timber or metal structure to strengthen or realign joints, or to resist penetration in certain applications.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "scaling",
    definition:
      "The gradual deterioration of concrete surfaces due to chemical attack or freeze-thaw cycles, leading to the flaking or peeling of the surface layer.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "scour",
    definition:
      "The erosion of a streambed or bank caused by the flow of water, often localized around bridge piers and abutments, which can undermine foundation stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "scour critical bridge",
    definition:
      "A bridge whose foundation is determined to be at risk of failure under evaluated scour conditions, posing a significant safety hazard.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "scour protection",
    definition:
      "Methods such as sheet piling, riprap, or concrete lining used to prevent the erosion of streambeds and banks around bridge foundations and piers.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "scuba",
    definition:
      "A portable self-contained underwater breathing apparatus used by divers for underwater exploration, inspection, and construction activities.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "scupper",
    definition:
      "An opening in a bridge deck designed to allow accumulated water to drain from the roadway, preventing flooding and water damage to the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "seam weld",
    definition:
      "A weld joining the edges of two members placed in contact, typically not intended to carry significant stresses but to provide alignment or sealing.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "seat",
    definition: "A structural base or support upon which a load-bearing member or component rests, ensuring stable distribution of forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "seat angle",
    definition:
      "A piece of angle iron or steel attached to a member to provide temporary or permanent support for another member, such as during erection or in the final structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "secondary member",
    definition:
      "A structural component that does not directly carry live loads, but serves functions such as bracing, lateral support, or stiffening of the main load-bearing members.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "section loss",
    definition:
      "The reduction in the cross-sectional area of a structural member, typically due to corrosion, decay, or wear, which can compromise the strength of the component.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "section view",
    definition: "An internal representation of a structure element as if a slice was made through the element to show the cross-sectional details.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "seepage",
    definition: "The slow movement of water through a porous material, often leading to moisture-related issues in substructures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "segmental",
    definition: "Constructed from individual pieces or segments that are joined together to form the complete structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "segmental arch",
    definition: "A circular arch in which the intrados is less than a full semi-circle, creating a partial curve.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "segregation",
    definition: "The separation of coarse aggregates from the concrete paste during placement, affecting the mixture's uniformity and strength.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "seismic",
    definition:
      "Relating to earthquakes or the forces they generate, often considered when designing bridges for structural integrity under seismic activity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "semi-stub abutment",
    definition:
      "A cantilever abutment, intermediate in size between a full-height abutment and a stub abutment, typically founded halfway up a slope.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "service load design",
    definition:
      "The method of design, as described by AASHTO, using working stress theory to ensure structures can carry specified service loads safely.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "settlement",
    definition: "The vertical movement of substructure elements due to changes in the properties of the underlying soil or ground conditions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shadow vehicle",
    definition:
      "A vehicle positioned to prevent traffic from entering a work zone, often placed in advance of a lane closure to block unintended access.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shakes",
    definition:
      "Wood separations occurring parallel to the grain, typically between the annual growth rings, which can affect timber strength and durability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shear",
    definition:
      "A load applied across a beam near its support, causing internal forces that tend to slide one section of the beam past the adjacent section.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shear connectors",
    definition:
      "Devices extending from the top flange of a beam and embedded in an overlying concrete slab, creating a composite action between the two.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shear force",
    definition:
      "Opposing forces acting across a beam that tend to slide one section past the adjacent section, usually near supports or points of concentrated load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shear spiral",
    definition:
      "A coiled component welded to a beam's top flange, used as a shear connector to provide bond between the beam and the concrete slab above.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shear stress",
    definition: "The shear force per unit area of cross-section, often referred to as diagonal tensile stress in the context of concrete beams.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shear stud",
    definition:
      "A type of shear connector, often a steel stud welded to a beam, which helps bond the beam to the concrete slab above it for composite action.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sheet pile cofferdam",
    definition:
      "A temporary structure formed by interlocking sheet piles to enclose an area for dewatering and excavation, typically used during foundation work.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sheet piles",
    definition:
      "Interlocking Z-shaped piles driven into the ground to prevent earth or water from entering an excavation or protect against erosion.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sheet piling",
    definition:
      "A term used collectively for a series of sheet piles installed to create barriers such as cofferdams or bulkheads for excavation and protection purposes.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sheet steel",
    definition:
      "A thin flat sheet or plate of steel, classified by thickness, and used in various construction applications including sheeting and formwork.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shelf angle",
    definition:
      "A steel angle member used to support a structure or serve as a support for masonry or other materials, typically placed on the exterior of a building.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shim",
    definition:
      "A thin plate inserted between two elements to adjust their position or to distribute bearing stress more evenly across the contact area.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shoe",
    definition:
      "A steel or iron member that transmits and distributes loads from the superstructure bearing to the substructure bearing area, often used in bridge foundations.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shop",
    definition: "A workshop or factory where bridge components are manufactured or fabricated according to design specifications.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shop drawings",
    definition:
      "Detailed drawings created from design drawings, used in the fabrication of bridge components, including precise measurements and construction instructions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shoring",
    definition:
      "A temporary structure used to support or stabilize a building or other structure, typically made of props or braces, until it can be permanently supported or repaired.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shoulder abutment",
    definition:
      "A type of support structure designed to extend from the road grade to the road overhead, often positioned beside the shoulder to bear loads while maintaining traffic flow.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shoulder area",
    definition:
      "The lateral strip of a roadway adjacent to the traffic lanes, designed to provide space for emergency stopping or for pedestrians and cyclists in some cases.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "shrinkage",
    definition:
      "The reduction in volume that occurs as moisture evaporates from materials like concrete or timber during the drying process, affecting their stability and strength.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sidewalk",
    definition:
      "A path or surface designated for pedestrian use, often located beside or on a bridge, providing safe passage across or along the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sidewalk bracket",
    definition:
      "A frame structure attached to the exterior of a bridge girder, designed to support components such as sidewalk stringers, floor sections, and railings or parapets.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sight distance",
    definition:
      "The visible distance along the road that a driver can clearly see ahead, critical for safe driving, particularly in areas of curves or changes in elevation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "silt",
    definition:
      "A fine-grained material, often made up of particles from siliceous rocks, that is transported by water and deposited in various environments like riverbeds or reservoirs.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "simple span",
    definition:
      "A type of structure supported by two fixed points without intermediate restraints, typically referring to beams or trusses used in basic bridge construction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "S-I-P forms",
    definition:
      "A method of forming concrete where the mold itself remains in place as part of the finished structure, typically used in the construction of decks and walls.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "skew angle",
    definition:
      "The angle formed between the longitudinal axis of a bridge and a line perpendicular to the substructure, affecting the geometry and design of the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "skewback",
    definition:
      "The sloped support at either end of an arch structure, designed to distribute the forces exerted by the arch to the supporting substructure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "skewback shoe",
    definition:
      "A component that transfers the thrust from an arch to the skewback, typically in the form of a cushion or pedestal used in stone or concrete arches.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "slab",
    definition:
      "A flat, broad section of material, typically concrete, that bears weight through flexural forces, commonly used in floors and decks of bridges for load distribution.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "slab bridge",
    definition:
      "A type of bridge with a deck composed of large concrete slabs, either as a continuous unit or as individual segments placed parallel to the roadway, spanning between supports.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "slide",
    definition:
      "A type of mass movement in which material such as soil or rock shifts down a slope, often triggered by changes in weight or support at the base of the slope.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "slip form",
    definition:
      "A technique used in concrete construction where a movable mold is advanced incrementally to form vertical structures such as walls and decks.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "slope",
    definition:
      "The steepness or incline of a surface, expressed as the ratio of vertical rise or fall to the horizontal distance over which the rise or fall occurs.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "slope protection",
    definition:
      "A method used to prevent the erosion or disintegration of a sloped surface, typically involving the application of materials like stone or concrete to stabilize the area.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "slot weld",
    definition:
      "A type of weld used to fill a slot or groove between two pieces of material, typically in structural applications, to create a secure joint.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "slump",
    definition:
      "A test used to measure the consistency or stiffness of fresh concrete, typically by observing the loss in height after a conical mold is removed.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "soffit",
    definition:
      "The underside surface of a bridge deck or arch, often critical for visual inspection and structural assessment of the bridge's integrity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "soldier beam",
    definition:
      "A vertical steel beam driven into the ground to provide temporary or permanent support, often used in retaining walls or other foundation applications.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "soldier pile wall",
    definition:
      "A retaining wall system consisting of vertical soldier beams and horizontal lagging used to support excavations or prevent soil movement.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "soil interaction structure",
    definition:
      "A type of subsurface structure that relies on the combined strength of both the soil surrounding it and the flexible nature of the structure itself to support loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sole plate",
    definition:
      "A steel plate attached to the bottom of a structural beam, distributing the load from the bearing to the beam and ensuring even pressure distribution.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "solid sawn beam",
    definition:
      "A beam made by cutting a log to size at a sawmill, as opposed to engineered wood products, providing natural strength and durability in construction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sounding",
    definition:
      "A method of measuring water depth using devices like echo sounders or lead lines, also refers to tapping surfaces to check for weaknesses like delaminations or decay.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "spall",
    definition:
      "A defect in concrete where a small section of the surface breaks off, usually caused by internal stresses, revealing fractures aligned with the surface.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "span",
    definition:
      "The distance between two supports of a bridge or structural beam, representing the space covered by the bridge or the distance across a gap.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "spandrel",
    definition:
      "The triangular space between the top of an arch and the horizontal structure above it, often filled with material to support the deck or additional load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "spandrel column",
    definition: "A column located on the rib of an arch, providing support for the bridge deck in open spandrel arch designs.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "spandrel fill",
    definition: "Material used to fill the spandrel space of an arch, providing additional support and strength to the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "spandrel tie",
    definition: "A structural element that connects the spandrel walls of an arch to prevent bulging and deformation, providing lateral stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "spandrel wall",
    definition: "A wall constructed above the arch of a bridge, often used to enclose the spandrel space and support the deck above.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "special inspection",
    definition:
      "An inspection conducted outside of regular schedules, often in response to specific concerns or to monitor known deficiencies in a structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "specifications",
    definition:
      "A detailed set of written requirements outlining the materials, methods, tolerances, and other construction parameters necessary for the completion of a project.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "spider",
    definition:
      "An access platform that moves vertically, typically suspended by wire ropes and powered by electric or compressed air motors, used in inspections and maintenance of elevated structures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "spillway",
    definition:
      "A structure designed to carry excess water from a slope or embankment to prevent erosion or flooding by diverting the flow to a safe outlet.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "splice",
    definition:
      "A joint used to connect two structural members together, often to extend their length or repair damaged sections, ensuring continuity of strength and stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "splits",
    definition:
      "Cracks or separations that extend completely through a piece of wood, often indicating stress or damage that could compromise its structural integrity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "spread footing",
    definition:
      "A type of foundation that spreads the load of a structure over a wide area, typically using a reinforced concrete slab to distribute the weight to the soil or rock below.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "spring line",
    definition:
      "The horizontal line at the base of an arch structure where the curve of the arch begins, marking the transition from the vertical support to the arch's curved shape.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "spurs",
    definition:
      "Projected structures, often placed near embankments or abutments, designed to prevent the erosion of the riverbed or support the structural integrity of the surrounding soil.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stage",
    definition:
      "A platform supported by horizontal wire-rope cables, used to move vertically along a structure. It typically measures 20 inches in width and comes in various lengths. The stage is slid to the desired position to provide access for inspection or maintenance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "staged construction",
    definition:
      "Construction performed in phases to allow for the continuous flow of traffic through a site, ensuring minimal disruption. The project is divided into separate sections, and each is completed in sequence, with parts of the structure being built while others remain operational.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "state transportation department",
    definition:
      "The government agency or official entity responsible for the development, construction, and maintenance of highways and transportation infrastructure within a state. This entity oversees public roadwork projects and enforces transportation-related regulations.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "statics",
    definition:
      "The branch of mechanics concerned with the study of forces and their effects on bodies that are in a state of rest or equilibrium. Statics involves analyzing the forces acting on stationary structures and ensuring they remain stable under load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "station",
    definition:
      "A unit of measurement used in surveying, typically equal to 100 feet (in U.S. customary units) or 100 meters (in metric units). It is often used to denote specific points or distances along a surveyed baseline.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stationing",
    definition:
      "A method of measuring distance along a baseline in terms of stations. This system helps in locating specific points or sections along a surveyed route, often used for design and construction planning.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stay-in-place forms",
    definition:
      "A corrugated metal sheet used to form concrete decks, which remains in place after the concrete has set. The forms do not contribute to the structural capacity of the deck once it has cured, but they serve as a temporary molding during construction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stay plate",
    definition:
      "A plate or brace used to prevent movement within a structure. It is typically used to provide additional stability and prevent shifting of components under load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "steel",
    definition:
      "An alloy primarily composed of iron and carbon, with additional elements added to enhance strength, ductility, or other properties. Steel is commonly used in the construction of structural components due to its high strength-to-weight ratio.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stem",
    definition:
      "The vertical wall portion of a retaining wall or pier, typically found in an abutment. It is responsible for providing stability and support for the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stiffener",
    definition:
      "A small structural element attached to a larger member to prevent buckling and to distribute stress more evenly. Stiffeners increase the structural integrity of a component by reinforcing weak points.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stiffening girder",
    definition:
      "A structural beam in suspension bridges that helps distribute traffic loads evenly among the suspenders. It minimizes deflections and ensures that the bridge remains stable under heavy traffic.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stiffening truss",
    definition:
      "A truss used in suspension bridges to enhance the distribution of traffic loads among the suspenders. It helps reduce deflections and ensures that the bridge maintains stability during use.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stirrup",
    definition:
      "A U-shaped bar used in timber and metal bridges, designed to resist diagonal tension or shear stresses. It connects various parts of the structure to maintain overall stability under load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stone masonry",
    definition:
      "A construction method involving stone blocks, typically arranged in courses and held together with mortar. It provides durability and strength, often used in traditional structures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "straight abutment",
    definition:
      "An abutment with a stem and wings that are aligned in the same plane or with a stem incorporated into a retaining wall. This design ensures structural efficiency and support.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "strain",
    definition:
      "The change in length or deformation of a material when external forces are applied. It is measured as the ratio of the change in length to the original length of the material.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "strain hardening",
    definition:
      "The phenomenon where a material becomes stronger and more resistant to further deformation after being subjected to plastic strain. This occurs as the material's internal structure becomes more resistant to stress.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "strand",
    definition:
      "A group of wires twisted together to form a larger, stronger unit. Strands are commonly used in the construction of cables for bridges and other large structures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "streambanks",
    definition:
      "The sloped sides of a river or stream channel. Streambanks help contain water flow and prevent erosion, stabilizing the surrounding landscape.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "streambed",
    definition:
      "The bottom of a river or stream channel, where water flows. The composition and stability of the streambed are crucial for maintaining water flow and preventing erosion.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "streamflow",
    definition:
      "The movement of water, suspended sediment, and debris through a river or stream channel. Streamflow is a key factor in determining water levels and erosion in the surrounding environment.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "strengthening",
    definition:
      "The process of increasing the load-bearing capacity of a structural element, typically by reinforcing or adding material to improve its performance under load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stress",
    definition:
      "The internal force per unit area within a material caused by external loads or forces. Stress is critical for analyzing the behavior of materials under different loading conditions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stress concentration",
    definition:
      "A localized increase in stress caused by a sudden change in the cross-sectional shape of a material. These areas are often points of failure if not properly addressed in the design process.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stress range",
    definition:
      "The variation in stress at a point, from initial dead load value to the maximum additional live load value and back. It measures how stress fluctuates over time as loads are applied and removed.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stress raiser",
    definition:
      "A detail or feature that causes localized increases in stress, typically due to a sudden change in geometry or a discontinuity in a structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stress reversal",
    definition:
      "The change in stress type at a point from tension to compression or vice versa. It occurs during cyclic loading, impacting material behavior and fatigue life.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stress sheet",
    definition:
      "A drawing that shows all computed stresses resulting from the application of various loads, detailing the design composition of members based on assumed unit stresses for the material being used.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stress-laminated timber",
    definition:
      "A construction method where multiple planks are mechanically clamped together to act as a single, integrated unit, enhancing strength and stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stringer",
    definition:
      "A longitudinal beam positioned between transverse floorbeams to support a deck. It is a key structural component in maintaining deck stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "strip seal joint",
    definition: "A joint featuring a thin neoprene seal fitted into the joint opening, designed to provide a flexible, weather-resistant barrier.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "structural analysis",
    definition:
      "The engineering process used to calculate the load-bearing capacity of a structure, ensuring it can support expected forces without failure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "structural member",
    definition:
      "An individual part, such as a beam or strut, that contributes to the overall structure's ability to resist loads and maintain stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "structural redundancy",
    definition:
      "The ability of a structure, particularly an interior continuous span, to resist total collapse by redistributing forces when one element fails.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "structural shapes",
    definition:
      "Various cross-sectional shapes of rolled iron and steel, such as flat, round, angle, channel, 'I', 'H', and 'Z', adapted for use in heavy construction.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "structural stability",
    definition: "The capacity of a structure to maintain its intended shape and resist tipping or collapsing under the effects of expected loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "structural tee",
    definition: "A rolled member shaped like a tee, created by cutting a wide flange longitudinally along the centerline of its web.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "structurally deficient",
    definition:
      "A classification for bridges where key load-bearing elements are in poor condition due to damage or deterioration, or when the waterway opening is inadequate, causing severe traffic disruption.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "structure",
    definition: "A designed and built system intended to support and carry loads, providing stability and strength to withstand external forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "strut",
    definition:
      "A structural member that resists axial compressive stress, typically serving as a secondary element to enhance stability and load resistance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "stub abutment",
    definition:
      "A small abutment found at the topmost part of an embankment or slope, typically supported by piles or spread footings, with limited vertical height.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "subbase",
    definition:
      "A layer of material placed between the base course and the subgrade to provide stability and support. It helps distribute loads and maintain the integrity of the upper layers of a pavement structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "subgrade",
    definition:
      "The natural earth layer beneath a roadway or pavement structure, serving as the foundation. Its properties directly affect the load-bearing capacity and the long-term performance of the pavement above it.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sub-panel",
    definition:
      "A truss panel that is divided into two parts by an intermediate web member, often a subdiagonal or hanger, which helps distribute forces more efficiently across the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "substructure",
    definition:
      "The part of a structure that supports the span, including the abutments and piers. It transfers loads from the superstructure to the foundation or natural ground.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "superelevation",
    definition:
      "The difference in elevation between the inside and outside edges of a roadway curve. It is designed to counteract centrifugal forces and improve vehicle stability on curves.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "superimposed dead load",
    definition:
      "The additional load applied to a structure after the initial construction, such as the weight of parapets or railings added after the main deck has cured.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "superstructure",
    definition:
      "The portion of a structure that directly supports and transfers traffic loads to the substructure. It includes elements like beams, decks, and girders.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "surface breakdown",
    definition:
      "A form of deterioration where the outer surface of a material begins to degrade, often seen as scaling. This process results in the loosening or flaking of surface layers.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "surface corrosion",
    definition:
      "The initial stage of rust formation, where the metal begins to oxidize but has not yet resulted in significant loss of material. It affects the surface appearance and integrity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "suspended span",
    definition:
      "A bridge span that is supported from the free ends of cantilevers. This design allows for longer spans with fewer supports along the deck.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "suspender",
    definition:
      "A vertical cable, rod, or bar that connects the catenary cable or arch rib to the bridge floor system. It helps transfer loads from the deck to the main structural members.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "suspension bridge",
    definition:
      "A type of bridge where the floor system is supported by catenary cables, which are hung from towers and anchored at their ends, allowing for longer spans over wide spaces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "suspension cable",
    definition: "A large catenary cable used to support the floor system of a suspension bridge, spanning between towers to carry traffic loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "swale",
    definition:
      "A drainage ditch with moderately sloping sides, often used to direct water runoff or to manage stormwater in landscaping and civil infrastructure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sway anchorage",
    definition:
      "A guy, stay cable, or chain attached to the floor system of a suspension bridge, anchored to an abutment or pier. It helps resist lateral movement of the suspension span.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sway bracing",
    definition:
      "Diagonal braces located at the top of a through truss, positioned transverse to the truss. These braces help resist lateral forces, providing stability against horizontal movement.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "sway frame",
    definition:
      "A complete panel or frame of sway bracing that helps resist transverse horizontal forces, contributing to the structural stability of the truss system.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "swedged anchor bolt",
    definition:
      "An anchor bolt designed with deformations to enhance bonding with concrete, improving the overall strength and stability of the anchor connection.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "swing span bridge",
    definition:
      "A movable bridge in which the span rotates horizontally on a pivot pier, allowing marine traffic to pass through by opening the bridge's path.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tack welds",
    definition:
      "Small welds used to temporarily hold parts in place during the fabrication or erection process. These welds are typically removed or incorporated into the final design as the full, permanent welds are applied.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tail water",
    definition:
      "Water that has accumulated below the outlet of a waterway, reducing the flow rate through the structure. The presence of tailwater affects the hydraulic capacity and water flow behavior of the waterway.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tape measure",
    definition:
      "A long, flexible strip of material, usually metal or fabric, marked with measurements at regular intervals. It is used to measure distances and dimensions, often in construction and inspection tasks.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "team leader",
    definition:
      "The individual responsible for managing an inspection team, overseeing the planning, preparation, and execution of field inspections, ensuring tasks are completed accurately and on schedule.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tee beam",
    definition:
      "A rolled steel section or reinforced concrete beam shaped like the letter 'T'. Its cross-sectional shape provides resistance to bending and supports vertical loads efficiently.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "temperature steel",
    definition:
      "Reinforcement used in concrete members to control the formation of cracks caused by temperature-induced stresses. It helps distribute thermal movements and prevents cracking.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "temporary bridge",
    definition:
      "A structure built for temporary or emergency use, designed to be removed or replaced after a relatively short period of service. It is often used during repairs or construction work.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tendon",
    definition:
      "A prestressing element, often a cable, strand, or bar, that is used to apply tension to concrete structures, helping them resist tensile forces and improve their load-carrying capacity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tensile force",
    definition:
      "A force that acts to stretch or pull apart a material, creating tension along the length of the member. It is a fundamental type of force in structural analysis.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tensile strength / ultimate strength",
    definition:
      "The highest amount of tensile stress a material can handle before breaking. This property is critical for evaluating the durability and performance of structural materials.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tension",
    definition:
      "The stress induced in a material when it is pulled apart. It results in elongation and is the opposite of compression in the behavior of structural elements.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "thalweg elevation",
    definition:
      "The lowest point of the streambed, often used in hydrological studies to describe the flow path of a river or stream. It is typically used to define the flow line of a watercourse.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "thermal movement",
    definition:
      "The expansion or contraction of materials due to temperature changes. This movement must be accounted for in the design to prevent structural damage or failure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "three-hinged arch",
    definition:
      "A type of arch that has hinges at both supports and at the crown, allowing for movement and reducing internal stresses. This design allows for more flexibility in accommodating loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "through arch",
    definition:
      "An arch bridge design where the deck passes through the arches, creating a clear span above the roadway for greater clearance and structural efficiency.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "through girder bridge",
    definition:
      "A bridge that uses two main girders to support the deck, with the deck placed between them. This simple design is often used for short spans and provides a clear pathway for traffic.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tie",
    definition:
      "A structural member that is designed to resist tension. It is often used in frames or trusses to transfer forces and maintain stability in a structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tie plate",
    definition:
      "A short, flat member used to carry tension forces across a transverse member, such as between floor beams. It is commonly used to connect structural components in frames and trusses.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tie rod",
    definition:
      "A rod-like member used in a frame to transmit tensile stress. It helps resist tension forces and maintain the overall stability of the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tie walls",
    definition:
      "Walls built at intervals above an arch ring to connect and support the spandrel walls. They prevent bulging and distortion by serving as restraining members.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "timber",
    definition:
      "Wood that is suitable for use in construction. It is chosen for its strength, durability, and ease of processing for structural and aesthetic purposes.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "toe",
    definition:
      "The front portion of a footing, located from the intersection of the wall face to the front edge. It helps distribute the load to the supporting ground.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "toe of slope",
    definition:
      "The point where the embankment slope intersects with the existing ground surface at a lower elevation. It marks the transition between the slope and the flat ground.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "toe wall",
    definition:
      "A low retaining wall placed at the toe of a slope to protect against erosion or to prevent the accumulation of debris, such as rocks or vegetation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "ton",
    definition: "A unit of weight equivalent to 2,000 pounds, used for measuring large masses in construction and engineering contexts.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "torque",
    definition:
      "The force that causes an object to rotate about an axis. It is measured as the product of force and the distance from the axis of rotation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "torque wrench",
    definition:
      "A tool used to apply a specific amount of torque to a fastener, ensuring that bolts or nuts are tightened to the correct specification without over-tightening.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "torsion",
    definition:
      "The twisting of a material or structural member caused by an applied torque. It is an important consideration in the design of beams and shafts subjected to rotational forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "torsional force",
    definition:
      "An external force that causes a member to twist about its longitudinal axis. This type of force is important when considering the stability and rigidity of structural elements.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "torsional rigidity",
    definition:
      "The capacity of a beam or member to resist twisting forces. A higher torsional rigidity results in greater resistance to deformation when subjected to rotational loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "toughness",
    definition:
      "A material property that indicates its ability to absorb energy and withstand deformation before breaking. It is a critical factor for assessing the durability of construction materials.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tower",
    definition:
      "A vertical structure that supports the main cables of a suspension bridge. It transfers the loads from the cables to the foundation or substructure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "traffic control",
    definition:
      "The modification of normal traffic patterns through the use of signs, barriers, cones, and flagmen to ensure safe flow and minimize disruptions during construction or maintenance.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "transducer",
    definition:
      "A device that converts one form of energy into another, often used in ultrasonic testing to transmit and receive sound waves. It is crucial for non-destructive testing techniques.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "transient loads",
    definition:
      "Loads that vary over time, such as moving traffic or wind gusts. These loads must be considered in the design to ensure the structure can withstand them without failure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "transverse bracing",
    definition:
      "A system of braces that engages the columns of supporting structures in planes perpendicular to the alignment of the structure. It resists forces that would otherwise cause lateral displacement and deformation of the vertical supports.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "transverse girder",
    definition:
      "A horizontal structural element placed perpendicular to the primary load-bearing beams. It supports loads from other components and distributes forces across the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "travel way",
    definition:
      "The designated path or area on a structure where vehicles or pedestrians pass. It is typically paved or otherwise prepared to accommodate the passage of traffic.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tremie",
    definition:
      "A device, typically a pipe or funnel, used to place concrete underwater. It allows the concrete to be delivered directly to the submerged area, preventing contamination by water.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "trestle",
    definition:
      "A framework consisting of braced towers or frames, designed to support spans above the ground. These structures are commonly used in areas with unstable soil or where large gaps must be spanned.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "truck loading",
    definition:
      "A load configuration designed to simulate the weight and distribution of a single vehicle as it travels over a structure. It is used to test and assess the structural capacity under vehicle traffic.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "truss",
    definition:
      "A structure composed of interconnected, rigid components arranged to form triangular units. It is designed to carry axial forces and is often used to distribute loads efficiently across its span.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "truss bridge",
    definition:
      "A type of bridge that incorporates a pair of trusses in its superstructure to bear the load. The trusses distribute forces and provide a stable framework for the deck and roadway.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "trussed beam",
    definition:
      "A beam reinforced with a tie-rod that helps reduce deflection. The tie-rod is held a short distance from the beam by struts, enhancing its stiffness and load-carrying capacity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "truss panel",
    definition:
      "A section of a truss, typically framed by multiple interconnected members, forming a triangular shape. These panels are the primary load-bearing units of a truss structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tubular sections",
    definition:
      "Structural steel components shaped as hollow tubes, which can be round, square, or rectangular. These sections provide strength while minimizing material usage and are commonly used in both compression and tension applications.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tubular truss",
    definition:
      "A type of truss where the chords and struts are made from cylindrical pipes or tubes. This construction method offers high strength while keeping the structure lightweight.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "tunnel",
    definition:
      "An underground passage that is open at both ends. Tunnels are typically used to facilitate transportation or utilities where surface routes are impractical or too costly.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "turnbuckle",
    definition:
      "A mechanical device consisting of a cylindrical nut with opposite hand threads at each end. It is used to adjust the tension in cables, rods, or bars, often in suspension or structural systems.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "two-hinged arch",
    definition:
      "A structure that forms an arch or frame with hinges at both ends, allowing movement at the supports. This design reduces internal stresses and accommodates thermal expansion or settlement.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "U-bolt",
    definition:
      "A fastener shaped like the letter 'U' with threaded ends. It is commonly used to secure pipes, cables, or rods to a surface by tightening nuts on the threads to hold components in place.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "ultimate strength",
    definition:
      "The maximum stress a material can endure before failure. It represents the material's resistance to breaking, stretching, or yielding under extreme conditions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "ultrasonic thickness gage",
    definition:
      "A device that measures the thickness of a material by emitting sound waves through it and analyzing the time it takes for the waves to return, determining the material’s thickness without causing damage.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "ultrasonic testing",
    definition:
      "A nondestructive testing method that uses high-frequency sound waves to assess the integrity of materials. It identifies flaws, thickness variations, and other defects within a structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "undermining",
    definition:
      "The erosion or removal of supporting material beneath a structure’s base, often caused by water flow. It can lead to instability if the foundation is compromised.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "underpass",
    definition:
      "A structure that allows traffic or pedestrians to pass beneath another road or railway. It is typically part of a grade-separated crossing where the lower level passes under the higher level.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "underwater diver bridge inspection training",
    definition:
      "A specialized course designed to teach divers the skills needed to inspect submerged bridge components. It covers safe diving practices and the ability to assess underwater structural conditions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "underwater inspection",
    definition:
      "The process of evaluating submerged sections of a structure, typically requiring diving or remote sensing methods, as the underwater elements cannot be accessed through typical visual inspection techniques.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "uniform load",
    definition:
      "A load that is evenly distributed along the length of a structural element. It applies constant force throughout the area, ensuring consistent stress distribution across the member.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "unit stress",
    definition:
      "The amount of force exerted per unit of surface area or cross-sectional area of a material. It is used to assess how much load a material can handle relative to its size.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "uplift",
    definition:
      "A force that acts upwards on a structure, often caused by pressure differences or load distributions, potentially lifting elements such as beams or foundations off their supports.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "upper chord",
    definition:
      "The topmost longitudinal element of a truss. It bears tension or compression forces and connects the truss’s vertical or diagonal members to form a complete load-bearing framework.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "vertical",
    definition:
      "Describes an axis that is perpendicular to a flat surface, typically used to reference alignment or positioning in relation to the horizon.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "vertical alignment",
    definition:
      "The configuration of a roadway’s centerline in the vertical plane, including changes in elevation, such as crests and depressions, to facilitate smooth traffic flow.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "vertical clearance",
    definition:
      "The vertical distance between the underside of a structure and the surface below, ensuring sufficient space for vehicles or other elements passing underneath.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "vertical curve",
    definition:
      "A transition curve, often parabolic, that connects two sections of a roadway with different gradients, used to create a smooth change in elevation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "vertical lift bridge",
    definition:
      "A bridge where the span is raised and lowered vertically to allow for passage of ships or other tall vehicles, while maintaining parallel alignment with the roadway.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "viaduct",
    definition:
      "A structure made up of multiple spans supported by piers placed at regular intervals, typically used to cross over valleys or other types of terrain.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "vibration",
    definition:
      "The process of agitating concrete to enhance its compaction, eliminating air pockets and ensuring more uniform consistency throughout the material.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "Vierendeel truss",
    definition:
      "A type of truss made solely from horizontal and vertical members connected with rigid joints, designed to carry bending moments rather than shear forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "voided slab",
    definition:
      "A precast concrete unit that incorporates cylindrical voids within its structure, reducing the overall dead load without compromising strength.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "voids",
    definition:
      "Empty or unfilled spaces within concrete, often created intentionally for reducing weight or improving the material's properties, such as thermal insulation.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "Voussoir",
    definition: "A wedge-shaped stone used in constructing an arch, typically forming part of the outer ring or voussoir course of a stone arch.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "voussoir arch",
    definition:
      "An arch made of interlocking wedge-shaped blocks, which distribute loads evenly across the structure, forming a curved shape that supports weight.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "wale, waler",
    definition:
      "Horizontal bracing elements used inside cofferdams or pits, providing support to prevent inward movement of sheet piles or walls under pressure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "Warren truss",
    definition:
      "A triangular truss design where sloping members are placed between top and bottom chords, and no vertical members are used, creating a W-shaped pattern.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "washer",
    definition:
      "A small metal ring placed under the nut or bolt head to distribute the load over a larger area and to prevent damage to the surface being fastened.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "water/cement ratio",
    definition: "The proportion of water to cement by weight in concrete, which significantly affects the material's strength and durability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "waterproofing membrane",
    definition:
      "A protective layer placed between the concrete deck and the wearing surface to prevent water penetration and protect the structure from corrosion.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "waterway area",
    definition:
      "The total open area beneath a bridge that facilitates the flow of water, essential for maintaining proper drainage and preventing flooding.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "waterway opening",
    definition:
      "The clear width beneath a bridge available for water flow, critical for ensuring adequate discharge capacity to prevent backwater or flooding.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "wear",
    definition: "The gradual erosion or abrasion of a surface due to repeated friction or mechanical action over time.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "wearing surface",
    definition:
      "The top layer of material applied to the roadway, designed to withstand traffic wear and protect the underlying structure from damage.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "web",
    definition:
      "The central part of a beam or truss, connecting the top and bottom flanges, often responsible for carrying shear forces within the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "web crippling",
    definition:
      "Damage occurring in a beam's web due to high compressive forces, typically from concentrated loads that exceed the material's capacity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "web members",
    definition:
      "The intermediate members of a truss or frame that are positioned between the end posts, typically carrying shear forces and contributing to the overall stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "web plate",
    definition:
      "The vertical or inclined plate that forms the web of a plate girder, providing shear resistance and transferring loads between the top and bottom flanges.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "web stiffener",
    definition: "A small structural member welded to the web of a beam or girder to prevent buckling under compressive forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "weephole",
    definition:
      "A small drainage hole built into a retaining or abutment wall to allow water to escape, preventing pressure buildup behind the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "weld",
    definition: "A permanent bond formed by melting the edges of metal pieces and fusing them together using heat or pressure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "weldability",
    definition: "The ability of a material to be welded successfully, determined by factors like its composition and the welding process used.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "welded bridge structure",
    definition:
      "A structure whose components are joined using welding techniques, as opposed to mechanical fasteners, to provide a continuous and often stronger connection.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "welded joint",
    definition: "A connection between two or more metal components created by welding, which forms a continuous bond once cooled and solidified.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "welding",
    definition:
      "The process of joining metal pieces by heating them to their melting point and applying pressure or filler material to create a solid bond.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "weld layer",
    definition:
      "A layer of weld metal deposited to join metal components, which can consist of multiple beads laid over one another to form a strong connection.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "weld metal",
    definition: "The filler metal added during the welding process, which melts and bonds with the base metal to form a durable joint.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "weld penetration",
    definition: "The depth to which the weld metal fuses with the base metal, indicating the strength and integrity of the joint.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "weld sequence",
    definition: "The order in which welds are made on a structure to minimize distortion and residual stresses, ensuring a stable and even joint.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "welding procedure specification (WPS)",
    definition:
      "A formal document detailing the welding parameters, techniques, and standards for a specific welding process, ensuring quality and consistency in welds.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "weld toe",
    definition:
      "The thin end of a taper in a fillet weld, positioned furthest from the center of the weld cross section, which can be prone to stress concentration and potential fatigue failure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "wheel guard",
    definition:
      "A raised curb or barrier placed along the outside edge of traffic lanes to prevent vehicles from straying off the roadway and colliding with structures or constructions outside the road's boundary.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "wheel load",
    definition:
      "The load transferred to a supporting structure by a single wheel of a traffic vehicle or equipment, influencing the design of foundations and supporting elements based on dynamic forces applied during movement.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "weep hole",
    definition:
      "A small drainage opening in a concrete structure that allows water to escape from behind it, typically used to prevent hydrostatic pressure buildup and subsequent damage to the structure.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "Whipple truss",
    definition:
      "A type of truss featuring double-intersecting diagonals that span across two panels, providing efficient load distribution and stability in long-span bridge structures.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "wide flange",
    definition:
      "A structural steel member with a wide, rectangular flange cross section, offering high strength and stability compared to tapered flanged sections, commonly used in large-load-bearing applications.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "wind bracing",
    definition:
      "A structural system designed to resist lateral forces caused by wind pressure, ensuring the stability and safety of elevated structures or bridges during strong winds.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "wind lock",
    definition:
      "A device used to laterally restrain and stabilize structural components, such as steel girders or trusses, preventing lateral displacement due to wind forces or other external loads.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "wingwall",
    definition:
      "A wall attached to the side of an abutment that helps retain and support the embankment or side slope of an approach roadway, preventing soil movement and maintaining the structure’s integrity.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "wire mesh reinforcement",
    definition:
      "A grid made of steel wires welded at their intersections, used to reinforce concrete and improve its tensile strength, commonly referred to as welded wire fabric.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "wire rope",
    definition:
      "A type of steel cable composed of multiple strands of steel wire twisted together, providing high tensile strength and flexibility, often used for suspension systems or load-bearing applications.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "working stress",
    definition:
      "The stress a material undergoes under normal service or design loads, typically representing the stress level in a member during operational conditions before any plastic deformation occurs.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "working stress design",
    definition:
      "A design approach that ensures safety by applying a factor of safety to the yield stress of materials, determining the maximum allowable stress levels during service conditions.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "wrought iron",
    definition:
      "A form of iron that has been refined by mechanical working to remove slag and excess carbon, resulting in a malleable, durable material often used in structural applications.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "wythe",
    definition:
      "A single layer of masonry units, such as brick or stone, laid in the thickness direction of a wall, often contributing to the wall’s strength and stability.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "X-ray testing",
    definition:
      "A nondestructive testing technique that uses X-rays to penetrate a material and reveal internal flaws or defects, providing valuable insights into the integrity of structural components.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "yield",
    definition:
      "The point at which a material undergoes permanent deformation due to stresses exceeding its elastic limit, resulting in a change in shape that does not revert upon load removal.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "yield point",
    definition:
      "The stress level at which a material experiences a sudden increase in strain, marking the onset of plastic deformation under gradually applied load.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "yield stress",
    definition:
      "The amount of stress required to cause noticeable, permanent deformation in a material, often used as a critical design limit to ensure structural safety.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "yield strength",
    definition:
      "The maximum stress a material can withstand without undergoing permanent deformation, serving as a key factor in ensuring the safety and durability of structural components.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },

  {
    term: "zee",
    definition:
      "A structural steel member shaped like a modified 'Z' in cross-section, often used for load-bearing applications due to its efficiency in resisting bending and torsion forces.",
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
];

const componentTerms = [
  {
    term: "approach roadway alignment",
    guidance:
      "Should be inspected for horizontal and vertical alignment changes that may influence driver behavior, approach speeds, and sight distance. Poor alignment can increase accident risk, cause uneven loading at the bridge entrance, and contribute to early wear of other components. Watch for sharp curves, sudden elevation changes, and inconsistent cross slopes.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "approach slabs",
    guidance:
      "Should be inspected for settlement, cracking, spalling, and differential movement at the joint with the pavement and abutment. Instability can lead to a bump or dip that affects rideability and transfers stress to the bridge components. Look for signs of voids, pumping, and misalignment at the interface points.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "bridge joints",
    guidance:
      "Should be inspected for leakage, tearing, misalignment, and loss of sealant and armor. Proper function is critical for allowing thermal movement and keeping water and debris off substructure and superstructure components. Deteriorated joints can accelerate damage to bearings, beams, and piers.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "terminal joints",
    guidance:
      "Should be inspected for separation, cracking, and misalignment that affects expansion performance and ride quality. These joints manage movement at the interface between approach slabs and pavement on integral and semi-integral structures. Focus on signs of heaving, differential settlement, and asphalt distress.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "bridge railings",
    guidance:
      "Should be inspected for impact damage, corrosion, loosened posts, and deformations that could impair the system’s ability to redirect errant vehicles. Focus on any breaks in continuity, material loss, and structural compromise that could allow penetration or detachment during a collision.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "bridge railing transitions",
    guidance:
      "Should be inspected for structural continuity, damage, and post integrity where a flexible roadside barrier connects to a more rigid bridge system. Deficiencies can compromise the gradual transfer of impact forces, causing vehicles to snag or penetrate at the transition. Look for missing components and excessive deflection.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "deck",
    guidance:
      "Should be inspected for cracking, delamination, spalling, scaling, and exposed reinforcement that could affect ride quality, water drainage, and structural performance. Surface defects may signal deeper problems. Underside rust staining, damp areas, efflorescence, or active dripping may indicate water moving through the deck. Check areas near scuppers and joints for concentrated deterioration.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },

  {
    term: "wearing surface",
    guidance:
      "Should be inspected for cracking, rutting, delamination, potholes, and loss of material. Defects reduce ride quality and allow water intrusion that may deteriorate the underlying deck. Distress patterns can reveal traffic effects and underlying deck issues. Focus on adhesion and thickness uniformity across the surface.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "superstructure",
    guidance:
      "Should be inspected for cracking, corrosion, deformation, section loss, and connection failures. The superstructure transfers loads from the deck to the supports and must maintain alignment and load path integrity. Watch for asymmetry, lateral distortion, and signs of overstress that could signal structural instability.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "paint",
    guidance:
      "Should be inspected for peeling, rust, discoloration, and adhesion loss. As a protective system, paint prevents corrosion on steel components. Coating failure can expose metal to moisture and accelerate section loss. Focus on coverage consistency and failure at connection points and edges.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "bearings",
    guidance:
      "Should be inspected for corrosion, displacement, binding, and structural damage. Bearings allow controlled movement and transfer loads to the substructure. Malfunctioning bearings can cause abnormal stress on the structure above. Look for frozen bearings, uplift, and signs of uneven wear.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "substructure",
    guidance:
      "Should be inspected for cracking, spalling, erosion, tilting, and settlement. These components support the entire structure and transfer loads to the ground. Deterioration can lead to instability and failure of the bridge system. Check contact points, footing conditions, and signs of undermining and shifting.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "slopewall",
    guidance:
      "Should be inspected for cracking, displacement, erosion, and vegetation overgrowth. The slopewall protects the abutment from runoff and prevents underfill loss. Failures can lead to undermining, drainage problems, and structural exposure. Watch for scouring at the toe and separation from adjacent structures.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "channel",
    guidance:
      "Should be inspected for alignment shifts, erosion, debris accumulation, and capacity restrictions. Channel health affects flow conditions and bridge stability. Misalignment and obstruction can increase scour and flooding risk. Check for lateral movement, sediment build-up, and changes in flow patterns.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "channel protection",
    guidance:
      "Should be inspected for displacement, deterioration, and voids beneath protective features such as riprap and concrete. These systems safeguard piers and abutments from erosion. Gaps and settling reduce their effectiveness. Focus on continuity, anchoring, and material condition across the protected zone.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "scour",
    guidance:
      "Should be inspected for exposed footings, voids, undermining, and loss of surrounding material. Scour can critically compromise the foundation. Active signs may include turbulence, sediment shifts, and unusual water patterns. Priority should be placed on known vulnerable locations and post-event inspections.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "scour vulnerability",
    guidance:
      "Should be evaluated based on soil type, foundation depth, flow velocity, and hydraulic characteristics. Vulnerability may exist even without visible scour. Consider historical data, design assumptions, and recent flow conditions. Focus on susceptibility indicators and how likely the bridge is to develop scour over time.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
  {
    term: "overtopping likelihood",
    guidance:
      "Should be evaluated based on channel geometry, bridge elevation, and hydraulic models. A high likelihood may indicate insufficient capacity during floods, leading to roadway submersion. Focus on freeboard, past overtopping events, and changes to watershed and upstream flow control.",
    discipline: "bridge design",
    filter: ["bridge component"],
  },
];
