const defectDefinitions = {
  InherentDefect: {
    term: "Inherent Defect",
    definition:
      "Not indicative of damage or deterioration but is either a characteristic of the material or the result of normal construction practices. Examples include insignificant width fabrication, shrinkage, and temperature cracks, pop-outs, or shallow edge chips and spalls.",
  },
  MinorDefect: {
    term: "Minor Defect",
    definition:
      "Damage or deterioration has initiated but is not considered significant. Examples include minimal to moderate width cracks with no efflorescence or rust stains, shallow depth spalls with no exposed reinforcing steel, or speckled surface rust.",
  },
  ModerateDefect: {
    term: "Moderate Defect",
    definition:
      "Damage or deterioration is significant, but the strength or performance is not yet adversely affected. Examples include moderate width cracks with either efflorescence or rust stains, spalls with exposed reinforcing steel, or more pronounced surface rust and corrosion with either pitting or delamination. Defects or deterioration at this level may not yet warrant a structural or geotechnical review.",
  },
  MajorDefect: {
    term: "Major Defect",
    definition:
      "Damage or deterioration is significant, and the strength or performance is adversely affected. Examples would be similar in type to moderate defects but of greater magnitude and severity that, upon reporting, would require a structural or geotechnical review.",
  },
  Isolated: {
    term: "Isolated",
    definition: "Defect is visible in one or few incident locations.",
  },
  Widespread: {
    term: "Widespread",
    definition: "Defect is visible across many incident locations.",
  },
  Some: {
    term: "Some",
    definition: "Defect visibility is more than isolated and less than widespread.",
  },
};

const glossaryTerms = {
  AASHTOManual: {
    term: "AASHTO Manual",
    definition:
      "The term 'AASHTO Manual' means the American Association of State Highway and Transportation Officials (AASHTO) 'Manual for Bridge Evaluation' with Sections 1.4, 2.2, 4.2, 6, and 8, excluding the 3rd paragraph in Article 6B.7.1. (23 CFR 650.317(a)(1))",
  },
  AASHTOMBEI: {
    term: "AASHTO MBEI",
    definition:
      "AASHTO Manual for Bridge Element Inspection is a reference for standardized element definitions, element quantity calculations, condition state definitions, element feasible actions, and inspection conventions. This manual is used for element descriptions, quantity calculations, and condition state definitions. (23 CFR 650.317(a)(2))",
  },
  AADT: {
    term: "Annual Average Daily Traffic (AADT)",
    definition: "The total annual volume of traffic passing a point or segment of a highway in both directions divided by the number of days in a year.",
  },
  AADTT: {
    term: "Annual Average Daily Truck Traffic (AADTT)",
    definition: "The total annual volume of truck traffic passing a point or segment of a highway in both directions divided by the number of days in a year.",
  },
  Bridge: {
    term: "Bridge",
    definition:
      "A structure including supports erected over a depression or an obstruction, such as water, highway, or railway, and having a track or passageway for carrying traffic or other moving loads, and having an opening measured along the center of the roadway of more than 20 feet between under copings of abutments or spring lines of arches, or extreme ends of openings for multiple boxes; it includes multiple pipes, where the clear distance between openings is less than half of the smaller contiguous opening. (23 CFR 650.305)",
  },
  BridgeElements: {
    term: "Bridge Elements",
    definition:
      "Individual parts of a bridge that are subsets of bridge components, inventoried separately as functional groups. Elements inventoried on the bridge include: the total quantity for each element, and the element quantity that exists in each of four condition states reported to the NBI in accordance with 23 U.S.C. 144(d)(2).",
  },
  BridgeInspectorsReferenceManual: {
    term: "Bridge Inspector’s Reference Manual",
    definition:
      "A comprehensive FHWA manual on procedures and techniques for inspecting and evaluating a variety of in-service highway bridges. This manual is available at: https://www.fhwa.dot.gov/bridge/nbis.cfm. (23 CFR 650.305)",
  },
  ClosedMedian: {
    term: "Closed Median",
    definition: "A median in which the area between the two roadways on the structure is bridged over and is capable of supporting traffic.",
  },
  ComplexFeature: {
    term: "Complex Feature",
    definition:
      "Bridge component(s) or member(s) with advanced or unique structural members or operational characteristics, construction methods, and/or requiring specific inspection procedures. This includes mechanical and electrical elements of movable spans and cable-related members of suspension and cable-stayed superstructures. (23 CFR 650.305)",
  },
  Culvert: {
    term: "Culvert",
    definition:
      "A structure comprised of one or more barrels, beneath an embankment and designed structurally to account for soil-structure interaction. These structures are hydraulically and structurally designed to convey water, sediment, debris, and, in many cases, aquatic and terrestrial organisms through roadway embankments. Culvert barrels have many sizes and shapes and have inverts that are either integral or open, i.e. supported by spread or pile-supported footings. Many culverts take advantage of headwater submergence of the inlet to increase hydraulic efficiency and economy.",
  },
  DamageInspection: {
    term: "Damage Inspection",
    definition: "An unscheduled inspection to assess structural damage resulting from environmental factors or human actions. (23 CFR 650.305)",
  },
  DesignatedLeadState: {
    term: "Designated Lead State",
    definition:
      "The State responsible for reporting the full bridge record for a border bridge. The Designated Lead State and Neighboring State are determined through agreement between the two border States.",
  },
  DividedHighway: {
    term: "Divided Highway",
    definition: "A highway with separated roadways for traffic traveling in opposite directions.",
  },
  DoubleDeckBridge: {
    term: "Double Deck Bridge",
    definition:
      "A bridge consisting of two decks, tiers, or levels. These bridges may incorporate highway lanes on both levels or highway lanes on one level and other transportation modes on the other level.",
  },
  DriverExpectation: {
    term: "Driver Expectation",
    definition:
      "Relates to the likelihood that a driver will respond to common situations in predictable ways that the driver has found successful in the past. A driver’s readiness to respond to situations, events, and information in predictable and successful ways.",
  },
  Efflorescence: {
    term: "Efflorescence",
    definition:
      "A deposit on concrete, brick, stone, or mortar caused by crystallization of carbonates brought to the surface by moisture in the masonry or concrete. Efflorescence is a combination of calcium carbonate leached out of the cement paste and other recrystallized carbonate and chloride compounds.",
  },
  ElementLevelBridgeInspectionData: {
    term: "Element Level Bridge Inspection Data",
    definition:
      "Quantitative condition assessment data, collected during bridge inspections, that indicates the severity and extent of defects in bridge elements. (23 CFR 650.305)",
  },
  EngineeredWood: {
    term: "Engineered Wood",
    definition:
      "Products that utilize veneers, plywood, reconstituted wood panel products, or engineered wood assemblies. Some engineered wood products include glued laminated timber, I-joists, and laminated veneer lumber.",
  },
  federalInformationProcessingSeries: {
    term: "Federal Information Processing Series (FIPS)",
    definition:
      "A system of numeric and/or alphabetic coding issued by the National Institute of Standards and Technology (NIST), an agency of the US Department of Commerce. FIPS codes are assigned for a variety of geographic entities including American Indian and Alaska Native Areas, Hawaiian home lands, congressional districts, counties, county subdivisions, metropolitan areas, places, and states. FIPS codes were discontinued by NIST in 2005, but the Census Bureau continues to maintain and issue codes for the geographic entities covered.",
    source: "http://www.fhwa.dot.gov/bridge/nbi.cfm",
  },
  federalLands: {
    term: "Federal Lands",
    definition:
      "Lands under the jurisdiction of Federal agencies. FHWA’s Federal Land Management Agency partners currently include: National Park Service (NPS); USDA Forest Service (Forest Service); U.S. Fish and Wildlife Service (USFWS); Bureau of Indian Affairs (BIA) and Tribal Governments; Bureau of Land Management (BLM); Department of Defense (DOD); U.S. Army Corps of Engineers (USACE); and Bureau of Reclamation (BOR).",
    source: "https://highways.dot.gov/federal-lands/about",
  },
  ferryTransferBridge: {
    term: "Ferry Transfer Bridge",
    definition: "A bridging structure that enables vehicular movement from a dock or approach roadway to a ferry.",
  },
  fiberReinforcedPolymerComposite: {
    term: "Fiber Reinforced Polymer Composite (FRP)",
    definition:
      "Also known as fiberglass reinforced plastic, FRP is a composite made from glass fiber or carbon fiber reinforcement in a plastic (polymer) matrix. With reinforcement of the plastic matrix, a wide variety of physical strengths and properties can be designed into the material. Additionally, the type and configuration of the reinforcement can be selected, along with the type of polymer and additives within the matrix.",
  },
  floatingBridge: {
    term: "Floating Bridge",
    definition: "A bridge supported by floating on pontoons moored to the lakebed or riverbed; a portion may be removable to facilitate navigation.",
  },
  handsOnInspection: {
    term: "Hands-on Inspection",
    definition: "Inspection within arm’s length of the member. Inspection uses visual techniques that may be supplemented by nondestructive evaluation techniques.",
    source: "23 CFR 650.305",
  },
  highway: {
    term: "Highway",
    definition:
      "The term 'highway' includes: A) a road, street, and parkway; B) a right-of-way, bridge, railroad-highway crossing, tunnel, drainage structure, sign, guardrail, and protective structure, in connection with a highway; and C) a portion of any interstate or international bridge or tunnel and the approaches thereto, the cost of which is assumed by a State transportation department, including such facilities as may be required by the United States Customs and Immigration Services in connection with the operation of an international bridge or tunnel.",
    source: "23 U.S.C. 101(a)",
  },
  highwayPerformanceMonitoringSystem: {
    term: "Highway Performance Monitoring System (HPMS)",
    definition:
      "A national level highway information system that includes data on the extent, condition, performance, use, and operating characteristics of the nation's highways.",
    source: "http://www.fhwa.dot.gov/policyinformation/hpms/fieldmanual/",
  },
  hydraulicReview: {
    term: "Hydraulic Review",
    definition:
      "A review by a person qualified to evaluate the field-observed hydraulic conditions and make a determination of the impacts of the conditions on the performance of the channel, channel protection, or when working with structural staff, determine the scour vulnerability of a bridge member or entire bridge. Hydraulic reviews may include a review of the field inspection notes and photographs, review of as-built plans, scour appraisals, and scour POAs, or performance of a hydraulic analysis as deemed appropriate.",
  },
  inDepthInspection: {
    term: "In-Depth Inspection",
    definition:
      "A close-up, detailed inspection of one or more bridge members located above or below water, using visual or nondestructive evaluation techniques as required to identify any deficiencies not readily detectable using routine inspection procedures. Hands-on inspection may be necessary at some locations. In-depth inspections may occur more or less frequently than routine inspections, as outlined in bridge-specific inspection procedures.",
    source: "23 CFR 650.305",
  },
  initialInspection: {
    term: "Initial Inspection",
    definition:
      "The first inspection of a new, replaced, or rehabilitated bridge. This inspection serves to record required bridge inventory data, establish baseline conditions, and establish the intervals for other inspection types.",
    source: "23 CFR 650.305",
  },
  inspectionDate: {
    term: "Inspection Date",
    definition: "The date on which the field portion of the bridge inspection is completed.",
    source: "23 CFR 650.305",
  },
  inspectionDueDate: {
    term: "Inspection Due Date",
    definition: "The last inspection date plus the current inspection interval.",
    source: "23 CFR 650.305",
  },
  inspectionReport: {
    term: "Inspection Report",
    definition: "The document which summarizes the bridge inspection findings, recommendations, and identifies the team leader responsible for the inspection and report.",
    source: "23 CFR 650.305",
  },
  internalRedundancy: {
    term: "Internal Redundancy",
    definition:
      "A redundancy that exists within a primary member cross-section without load path redundancy, such that fracture of one component will not propagate through the entire member, is discoverable by the applicable inspection procedures, and will not cause a portion of or the entire bridge to collapse.",
    source: "23 CFR 650.305",
  },
  inventoryData: {
    term: "Inventory Data",
    definition: "All data reported to the National Bridge Inventory in accordance with the Specifications for the National Bridge Inventory.",
    source: "23 CFR 650.317(b)(1)",
  },
  legalLoad: {
    term: "Legal Load",
    definition:
      "The maximum load for each vehicle configuration, including the weight of the vehicle and its payload, permitted by law for the State in which the bridge is located.",
    source: "23 CFR 650.305",
  },
  legalLoadRating: {
    term: "Legal Load Rating",
    definition:
      "The maximum permissible legal load to which the structure may be subjected with the unlimited numbers of passages over the duration of a specified bridge evaluation period. Legal load rating is a term used in Load and Resistance Factor Rating method.",
    source: "23 CFR 650.305",
  },
  loadPathRedundancy: {
    term: "Load Path Redundancy",
    definition:
      "A redundancy that exists based on the number of primary load-carrying members between points of support, such that fracture of the cross section at one location of a member will not cause a portion of or the entire bridge to collapse.",
  },
  loadPosting: {
    term: "Load Posting",
    definition:
      "Regulatory signs installed in accordance with the 'Manual on Uniform Traffic Control Devices' and State or local law which represent the maximum vehicular live load which the bridge may safely carry. (23 CFR 650.305)",
  },
  legallyEnforceableLoadPosting: {
    term: "Legally Enforceable Load Posting",
    definition: "Posting of a load restriction sign (or signs) at a bridge in accordance with State law that is legally enforceable by law enforcement personnel.",
  },
  linearReferencingSystem: {
    term: "Linear Referencing System (LRS)",
    definition:
      "Provides a geospatial representation of a road network through a set of procedures for determining and retaining a record of specific points along a highway. Typical methods used are mile point, milepost, reference point, or link node. LRS data are required for the annual Highway Performance Monitoring System (HPMS) data submittal from the States to FHWA.",
  },
  loadRating: {
    term: "Load Rating",
    definition:
      "The analysis to determine the safe vehicular live load carrying capacity of a bridge using bridge plans and supplemented by measurements and other information gathered from an inspection. (23 CFR 650.305)",
  },
  majorRehabilitation: {
    term: "Major Rehabilitation",
    definition: "The major work required to restore the structural integrity or serviceability of a bridge as well as work necessary to correct major safety defects.",
  },
  minorRehabilitation: {
    term: "Minor Rehabilitation",
    definition:
      "The minor work required to preserve or restore the structural integrity of a bridge or serviceability as well as the work necessary to correct minor safety defects.",
  },
  multiLevelInterchange: {
    term: "Multi-level Interchange",
    definition:
      "A multilevel highway intersection or junction of intersecting roads and bridges arranged so that vehicles may move from one road to another without crossing the streams of traffic.",
  },
  nationalBridgeInspectionStandards: {
    term: "National Bridge Inspection Standards (NBIS)",
    definition:
      "Federal regulations establishing national policy regarding bridge inspection organization, bridge inspection frequency, inspector qualifications, inventory requirements, report formats, and inspection and rating procedures, as described in 23 CFR 650 Subpart C.",
  },
  nationalBridgeInventory: {
    term: "National Bridge Inventory (NBI)",
    definition:
      "An aggregation of State transportation department, Federal agency and Tribal government bridge and associated highway data maintained by the Federal Highway Administration (FHWA). The NBIS requires each State transportation department, Federal agency, and Tribal government to prepare and maintain a bridge inventory, which must be submitted to FHWA in accordance with these specifications on an annual basis or whenever requested. (23 CFR 650.315)",
  },
  nationalHighwayFreightNetwork: {
    term: "National Highway Freight Network (NHFN)",
    definition:
      "A national highway freight network established by FHWA to assist States in strategically directing resources toward improved movement of freight on highways. The NHFN consists of a Primary Highway Freight System, the portions of the Interstate System not designated as part of the Primary Highway Freight System, and Critical Rural Freight Corridors and Critical Urban Freight Corridors designated by states.",
  },
  nationallyCertifiedBridgeInspector: {
    term: "Nationally Certified Bridge Inspector",
    definition: "An individual meeting the team leader requirements of 23 CFR 650.309(b).",
  },
  navigableWaterway: {
    term: "Navigable Waterway",
    definition:
      "Navigable waterways are determined by the Commandant of the United States Coast Guard. Title 33 of the Code of Federal Regulations, Section 2.36, defines navigable waterways as consisting of territorial seas of the United States, internal waters subject to tidal influence, and internal waters not subject to tidal influence that are used for interstate or foreign commerce or determined capable of improvement for such use.",
  },
  neighboringState: {
    term: "Neighboring State",
    definition:
      "The State responsible for reporting an abbreviated bridge record for a border bridge. The Designated Lead State and the Neighboring State are determined through agreement between the two border States.",
  },
  nonredundantSteelTensionMember: {
    term: "Nonredundant Steel Tension Member (NSTM)",
    definition:
      "A primary steel member fully or partially in tension, and without load path redundancy, system redundancy, or internal redundancy, whose failure may cause a portion of or the entire bridge to collapse. (23 CFR 650.305)",
  },
  nstmInspection: {
    term: "Nonredundant Steel Tension Member (NSTM) Inspection",
    definition: "A hands-on inspection of a nonredundant steel tension member. (23 CFR 650.305)",
  },
  operatingRating: {
    term: "Operating Rating",
    definition:
      "The maximum permissible live load to which the structure may be subjected for the load configuration used in the load rating. Allowing unlimited numbers of vehicles to use the bridge at operating level may shorten the life of the bridge. Operating rating is a term used in either Allowable Stress or Load Factor Rating method. (23 CFR 650.305)",
  },
  orthotropicDeck: {
    term: "Orthotropic Deck",
    definition:
      "An orthotropic deck consists of a flat, thin steel plate stiffened by a series of closely spaced longitudinal ribs at right angles to the floor beams. The deck acts integrally with the steel superstructure.",
  },
  privateBridge: {
    term: "Private Bridge",
    definition: "A bridge open to public travel and not owned by a public authority as defined in 23 U.S.C. 101. (23 CFR 650.305)",
  },
  procedures: {
    term: "Procedures",
    definition:
      "Written documentation of policies, methods, considerations, criteria, and other conditions that direct the actions of personnel so that a desired end result is achieved consistently. (23 CFR 650.305)",
  },
  probability: {
    term: "Probability",
    definition:
      "Extent to which an event is likely to occur during a given interval. This may be based on the frequency of events, such as in the quantitative probability of failure, or on degree of belief or expectation. Degrees of belief about probability can be chosen using qualitative scales, ranks, or categories such as, remote, low, moderate, or high. (23 CFR 650.305)",
  },
  programManager: {
    term: "Program Manager",
    definition:
      "The individual in charge of the program, that has been assigned the duties and responsibilities for bridge inspection, reporting, and inventory, and has the overall responsibility to ensure the program conforms with the requirements of the NBIS as provided in 23 CFR 650 Subpart C. The program manager provides overall leadership and is available to inspection team leaders to provide guidance. (23 CFR 650.305)",
  },
  publicRoad: {
    term: "Public Road",
    definition:
      "As defined in 23 U.S.C. 101(a)(21) as any road or street under the jurisdiction of and maintained by a public authority and open to public travel. (23 CFR 650.305)",
  },
  qualityAssurance: {
    term: "Quality Assurance (QA)",
    definition:
      "The use of sampling and other measures to assure the adequacy of quality control procedures in order to verify or measure the quality level of the entire bridge inspection and load rating program. (23 CFR 650.305)",
  },
  qualityControl: {
    term: "Quality Control (QC)",
    definition: "Procedures that are intended to maintain the quality of a bridge inspection and load rating at or above a specified level. (23 CFR 650.305)",
  },
  railroadFlatCar: {
    term: "Railroad Flat Car",
    definition: "A salvaged flatbed railroad car used as a bridge superstructure, typically on low-volume roads. This type of bridge often has NSTMs.",
  },
  replacement: {
    term: "Replacement",
    definition: "Total replacement of a bridge with a new facility constructed in the same general traffic corridor.",
  },
  risk: {
    term: "Risk",
    definition:
      "The exposure to the possibility of structural safety or serviceability loss during the interval between inspections. It is the combination of the probability of an event and its consequence. (23 CFR 650.305)",
  },
  roadway: {
    term: "Roadway",
    definition: "The portion of a highway, including shoulders, for vehicular use. A divided highway has two or more roadways.",
  },
  route: {
    term: "Route",
    definition: "A specific road, highway, or travel way open to public travel.",
  },
  routineInspection: {
    term: "Routine Inspection",
    definition:
      "Regularly scheduled comprehensive inspection consisting of observations and measurements needed to determine the physical and functional condition of the bridge and identify changes from previously recorded conditions. (23 CFR 650.305)",
  },
  routinePermitLoad: {
    term: "Routine Permit Load",
    definition:
      "A live load, which has a gross weight, axle weight, or distance between axles not conforming with State statutes for legally configured vehicles, authorized for unlimited trips over an extended period of time to move alongside other heavy vehicles on a regular basis. (23 CFR 650.305)",
  },
  safeLoadCapacity: {
    term: "Safe Load Capacity",
    definition: "A live load that can safely utilize a bridge repeatedly over the duration of a specified inspection interval. (23 CFR 650.305)",
  },
  scour: {
    term: "Scour",
    definition: "Erosion of streambed or bank material due to flowing water; often considered as being localized around piers and abutments of bridges. (23 CFR 650.305)",
  },
  scourAppraisal: {
    term: "Scour Appraisal",
    definition:
      "A risk-based and data-driven determination of a bridge’s vulnerability to scour, resulting from the least stable result of scour that is either observed, or estimated through a scour evaluation or a scour assessment. (23 CFR 650.305)",
  },
  scourAssessment: {
    term: "Scour Assessment",
    definition:
      "The determination of an existing bridge’s vulnerability to scour which considers stream stability and scour potential as described in HEC 20 and other scour-related data sources. (23 CFR 650.305)",
  },
  scourCriticalBridge: {
    term: "Scour Critical Bridge",
    definition: "A bridge with a foundation member that is unstable, or may become unstable, as determined by the scour appraisal. (23 CFR 650.305)",
  },
  scourEvaluation: {
    term: "Scour Evaluation",
    definition:
      "The application of hydraulic analysis as described in HEC 18 and HEC 20 to estimate scour depths and determine bridge and substructure stability considering potential scour. (23 CFR 650.305)",
  },
  scourMonitoringInspection: {
    term: "Scour Monitoring Inspection",
    definition:
      "An inspection performed during or after a triggering storm event as required by a Scour Plan of Action (POA), by personnel with qualifications required by the agency.",
  },
  scourPlanOfAction: {
    term: "Scour Plan of Action (POA)",
    definition: "Procedures for bridge inspectors and engineers in managing each bridge determined to be scour critical or that has unknown foundations. (23 CFR 650.305)",
  },
  serviceInspection: {
    term: "Service Inspection",
    definition:
      "An inspection to identify major deficiencies and safety issues, performed by personnel with general knowledge of bridge maintenance or bridge inspection. (23 CFR 650.305)",
  },
  specialInspection: {
    term: "Special Inspection",
    definition:
      "An inspection scheduled at the discretion of the bridge owner, used to monitor a particular known or suspected deficiency, or to monitor special details or unusual characteristics of a bridge that does not necessarily have defects. (23 CFR 650.305)",
  },
  state: {
    term: "State",
    definition: "Any of the 50 States, the District of Columbia, or Puerto Rico. (23 U.S.C. 101(a))",
  },
  stateTransportationDepartment: {
    term: "State Transportation Department",
    definition: "That department, commission, board, or official of any State charged by its laws with the responsibility for highway construction. (23 U.S.C. 101(a))",
  },
  strahnetConnectors: {
    term: "Strategic Highway Network (STRAHNET) Connectors",
    definition: "Highways which provide access between major military installations and highways which are part of the Strategic Highway Network.",
  },
  strahnet: {
    term: "Strategic Highway Network (STRAHNET)",
    definition:
      "A network of highways which are important to the United States' strategic defense policy and which provide defense access, continuity, and emergency capabilities for defense purposes.",
  },
  structuralReview: {
    term: "Structural Review",
    definition:
      "A review by a person qualified to evaluate the field-observed conditions and make a determination of the impacts of the conditions on the performance of the bridge member or entire bridge. Structural reviews may include a review of the field inspection notes and photographs, review of as-built plans, or analysis as deemed appropriate.",
  },
  supportedBridge: {
    term: "Supported Bridge",
    definition:
      "A bridge with temporary shoring, supports, repairs, or supplemental members that are installed to keep the bridge open despite deficiencies in the permanent structure, pending future repairs or replacement.",
  },
  systemRedundancy: {
    term: "System Redundancy",
    definition:
      "A redundancy that exists in a bridge system without load path redundancy, such that fracture of the cross section at one location of a primary member will not cause a portion of or the entire bridge to collapse. (23 CFR 650.305)",
  },
  teamLeader: {
    term: "Team Leader",
    definition:
      "The on-site, nationally certified bridge inspector in charge of an inspection team and responsible for planning, preparing, performing, and reporting on bridge field inspections. (23 CFR 650.305)",
  },
  temporaryBridge: {
    term: "Temporary Bridge",
    definition: "A bridge which is constructed to carry highway traffic until the permanent facility is built, repaired, rehabilitated, or replaced. (23 CFR 650.305)",
  },
  traveledWay: {
    term: "Traveled Way",
    definition: "The portion of roadway for the movement of vehicles, exclusive of shoulders.",
  },
  underwaterBridgeInspectionDiver: {
    term: "Underwater Bridge Inspection Diver",
    definition: "The individual performing the inspection of the underwater portion of the bridge. (23 CFR 650.305)",
  },
  underwaterInspection: {
    term: "Underwater Inspection",
    definition:
      "Inspection of the underwater portion of a bridge substructure and the surrounding channel, which cannot be inspected visually at low water or by wading or probing, and generally requiring diving or other appropriate techniques. (23 CFR 650.305)",
  },
  unknownFoundations: {
    term: "Unknown Foundations",
    definition:
      "Foundations of bridges over waterways where complete details are unknown because either the foundation type and depth are unknown, or the foundation type is known, but its depth is unknown, and therefore cannot be appraised for scour vulnerability. (23 CFR 650.305)",
  },
};

const bridgeTerms = [
  { term: "Abutment", definition: "A structure that supports the end of a bridge and transfers loads to the ground." },
  { term: "Approach Span", definition: "A span that connects the main structure of a bridge to the roadway at either end." },
  { term: "Arch Bridge", definition: "A bridge with a curved structure that transfers weight outward along the curve to supports at each end." },
  { term: "Beam Bridge", definition: "A simple bridge design with horizontal beams supported at each end." },
  { term: "Bent", definition: "A substructure unit that consists of columns and a cap, supporting the bridge superstructure." },
  { term: "Berm", definition: "A flat strip of land, raised bank, or terrace bordering a river or road, often supporting bridge abutments." },
  { term: "Borehole", definition: "A deep, narrow hole drilled into the ground to evaluate soil or rock conditions." },
  { term: "Bearing", definition: "A device placed between the bridge superstructure and substructure to allow controlled movement." },
  { term: "Bearing Seat", definition: "The portion of a substructure that supports a bearing." },
  { term: "Bridge Deck", definition: "The roadway surface of a bridge." },
  { term: "Cable-Stayed Bridge", definition: "A bridge where the deck is supported by cables anchored directly to towers." },
  { term: "Cantilever", definition: "A projecting beam or structure supported only at one end." },
  { term: "Cap", definition: "The top horizontal member of a bent that distributes the load to the supporting columns or piles." },
  { term: "Compression", definition: "A force that squeezes a material together." },
  { term: "Concrete Girder", definition: "A horizontal structural member made of reinforced or prestressed concrete." },
  { term: "Corbel", definition: "A bracket or projection from a wall or column used to support beams." },
  { term: "Cross Bracing", definition: "Diagonal members used to stiffen and stabilize a structure." },
  { term: "Deck Joint", definition: "An expansion or contraction joint in the bridge deck allowing for movement." },
  { term: "Deck Slab", definition: "The concrete or steel plate forming the bridge deck." },
  { term: "Diaphragm", definition: "A transverse structural element that distributes loads and stiffens the bridge." },
  { term: "Expansion Joint", definition: "A gap in a structure allowing for movement due to temperature changes." },
  { term: "Eyebar", definition: "A flat metal bar with a hole at each end, used in pin-connected truss bridges." },
  { term: "Footing", definition: "The lower portion of a foundation that spreads the load over a larger area." },
  { term: "Girder", definition: "A large beam that supports the deck of a bridge." },
  { term: "Gusset Plate", definition: "A thick sheet of steel used to connect members in a truss." },
  { term: "Hanger", definition: "A vertical cable or rod that connects the deck to the main structure." },
  { term: "Pier", definition: "A vertical support between the ends of a bridge span." },
  { term: "Pile", definition: "A long, slender column driven into the ground to support the bridge structure." },
  { term: "Post-Tensioning", definition: "A technique where steel tendons are tensioned after the concrete has hardened." },
  { term: "Precast Concrete", definition: "Concrete components cast and cured off-site before installation." },
  { term: "Prestressed Concrete", definition: "Concrete that has been pre-tensioned or post-tensioned to improve strength." },
  { term: "Shear Crack", definition: "A diagonal crack in a structural member caused by shear forces, often near supports or high-stress areas." },
  { term: "Stringer", definition: "A longitudinal beam supporting the deck and transferring load to the main girders." },
  { term: "Substructure", definition: "The part of a bridge below the deck, including piers, abutments, and foundations." },
  { term: "Superstructure", definition: "The part of the bridge above the substructure, including the deck and supporting elements." },
  { term: "Suspension Bridge", definition: "A bridge with the deck suspended from cables hung from towers." },
  { term: "Tendon", definition: "A high-strength steel cable or rod used in prestressed concrete." },
  { term: "Tie", definition: "A tension member in a truss or arch bridge." },
  { term: "Tower", definition: "A tall vertical structure supporting cables in cable-stayed and suspension bridges." },
  { term: "Truss", definition: "A framework of beams forming a rigid structure." },
  { term: "Web", definition: "The vertical portion of a girder between the top and bottom flanges." },
  { term: "Dead Load", definition: "The weight of the bridge itself." },
  { term: "Live Load", definition: "The weight of traffic, pedestrians, and other temporary loads." },
  { term: "Dynamic Load", definition: "Load that varies over time, such as vehicles and wind." },
  { term: "Fatigue", definition: "The weakening of materials due to repeated stress cycles." },
  { term: "Shear Force", definition: "A force that acts parallel to a surface, causing layers to slide past each other." },
  { term: "Tension", definition: "A force that stretches a material." },
  { term: "Torsion", definition: "A twisting force applied to a structural element." },
  { term: "Bearing Failure", definition: "The breakdown of a bridge bearing due to excessive load or wear." },
  { term: "Bridge Scour", definition: "The removal of sediment around bridge foundations due to water flow." },
  { term: "Corrosion", definition: "The deterioration of metal components due to chemical reactions." },
  { term: "Deflection", definition: "The bending or movement of a bridge under load." },
  { term: "Fracture Critical Member (FCM)", definition: "A bridge component whose failure would cause collapse." },
  { term: "Load Rating", definition: "The maximum safe load a bridge can carry." },
  { term: "Settlement", definition: "The downward movement of a bridge foundation due to soil compression." },
  { term: "Spalling", definition: "The flaking or chipping of concrete due to freeze-thaw cycles or corrosion." },
];

const nstmBridgeComponents = [
  { component: "Transverse Stiffeners (Unattached to Flange)", fatigueCategory: "B" },
  { component: "Bolted Splice in Flange or Web", fatigueCategory: "B" },
  { component: "Welded Flange to Web Connection", fatigueCategory: "B" },
  { component: "Transverse Butt Welds (Full Penetration)", fatigueCategory: "B" },
  { component: "Longitudinal Butt Welds (Full Penetration)", fatigueCategory: "B" },
  { component: "Shear Studs on Top Flange", fatigueCategory: "B" },
  { component: "Stringer to Floorbeam Connection (Bolted)", fatigueCategory: "B" },
  { component: "Transverse Stiffeners (Attached to Flange)", fatigueCategory: "C" },
  { component: "Longitudinal Stiffeners", fatigueCategory: "C" },
  { component: "Web Gaps in Cross Frames/Diaphragms", fatigueCategory: "C" },
  { component: "Welded Transverse Stiffener Termination", fatigueCategory: "C" },
  { component: "Base Metal Adjacent to Transverse Stiffener Weld", fatigueCategory: "C" },
  { component: "Base Metal Adjacent to Shear Stud Welds", fatigueCategory: "C" },
  { component: "Cross-Frame and Diaphragm Members", fatigueCategory: "C" },
  { component: "Stringer to Floorbeam Connection (Welded)", fatigueCategory: "C" },
  { component: "Fillet Welds in Non-Load Carrying Attachments", fatigueCategory: "D" },
  { component: "Cover Plate Termination", fatigueCategory: "E" },
  { component: "Fillet Welds in Load-Carrying Attachments", fatigueCategory: "E" },
  { component: "Hanger or Pin and Link Connection", fatigueCategory: "E" },
  { component: "Base Metal Adjacent to Welded Cover Plate Termination", fatigueCategory: "E′" },
];

const indianaCounties = [
  { number: 1, name: "Adams" },
  { number: 2, name: "Allen" },
  { number: 3, name: "Bartholomew" },
  { number: 4, name: "Benton" },
  { number: 5, name: "Blackford" },
  { number: 6, name: "Boone" },
  { number: 7, name: "Brown" },
  { number: 8, name: "Carroll" },
  { number: 9, name: "Cass" },
  { number: 10, name: "Clark" },
  { number: 11, name: "Clay" },
  { number: 12, name: "Clinton" },
  { number: 13, name: "Crawford" },
  { number: 14, name: "Daviess" },
  { number: 15, name: "Dearborn" },
  { number: 16, name: "Decatur" },
  { number: 17, name: "Dekalb" },
  { number: 18, name: "Delaware" },
  { number: 19, name: "Dubois" },
  { number: 20, name: "Elkhart" },
  { number: 21, name: "Fayette" },
  { number: 22, name: "Floyd" },
  { number: 23, name: "Fountain" },
  { number: 24, name: "Franklin" },
  { number: 25, name: "Fulton" },
  { number: 26, name: "Gibson" },
  { number: 27, name: "Grant" },
  { number: 28, name: "Greene" },
  { number: 29, name: "Hamilton" },
  { number: 30, name: "Hancock" },
  { number: 31, name: "Harrison" },
  { number: 32, name: "Hendricks" },
  { number: 33, name: "Henry" },
  { number: 34, name: "Howard" },
  { number: 35, name: "Huntington" },
  { number: 36, name: "Jackson" },
  { number: 37, name: "Jasper" },
  { number: 38, name: "Jay" },
  { number: 39, name: "Jefferson" },
  { number: 40, name: "Jennings" },
  { number: 41, name: "Johnson" },
  { number: 42, name: "Knox" },
  { number: 43, name: "Kosciusko" },
  { number: 44, name: "LaGrange" },
  { number: 45, name: "Lake" },
  { number: 46, name: "LaPorte" },
  { number: 47, name: "Lawrence" },
  { number: 48, name: "Madison" },
  { number: 49, name: "Marion" },
  { number: 50, name: "Marshall" },
  { number: 51, name: "Martin" },
  { number: 52, name: "Miami" },
  { number: 53, name: "Monroe" },
  { number: 54, name: "Montgomery" },
  { number: 55, name: "Morgan" },
  { number: 56, name: "Newton" },
  { number: 57, name: "Noble" },
  { number: 58, name: "Ohio" },
  { number: 59, name: "Orange" },
  { number: 60, name: "Owen" },
  { number: 61, name: "Parke" },
  { number: 62, name: "Perry" },
  { number: 63, name: "Pike" },
  { number: 64, name: "Porter" },
  { number: 65, name: "Posey" },
  { number: 66, name: "Pulaski" },
  { number: 67, name: "Putnam" },
  { number: 68, name: "Randolph" },
  { number: 69, name: "Ripley" },
  { number: 70, name: "Rush" },
  { number: 71, name: "St. Joseph" },
  { number: 72, name: "Scott" },
  { number: 73, name: "Shelby" },
  { number: 74, name: "Spencer" },
  { number: 75, name: "Starke" },
  { number: 76, name: "Steuben" },
  { number: 77, name: "Sullivan" },
  { number: 78, name: "Switzerland" },
  { number: 79, name: "Tippecanoe" },
  { number: 80, name: "Tipton" },
  { number: 81, name: "Union" },
  { number: 82, name: "Vanderburgh" },
  { number: 83, name: "Vermillion" },
  { number: 84, name: "Vigo" },
  { number: 85, name: "Wabash" },
  { number: 86, name: "Warren" },
  { number: 87, name: "Warrick" },
  { number: 88, name: "Washington" },
  { number: 89, name: "Wayne" },
  { number: 90, name: "Wells" },
  { number: 91, name: "White" },
  { number: 92, name: "Whitley" },
];

const culvertTerms = [
  { term: "Abrasion", definition: "Wearing or grinding away of material by water containing sand, gravel, or stones." },
  {
    term: "Abrasive Condition",
    definition: "The presence of granular material accompanied with a stream gradient or flow sufficient to cause movement of the granular material in the streambed.",
  },
  { term: "Barrel", definition: "The main body of a culvert structure that transports water beneath the roadway." },
  {
    term: "Blistering",
    definition: "Process of water infiltrating the first layer of a fiberglass-reinforced plastic large culvert structure causing bubbles to form near the surface.",
  },
  { term: "Channel", definition: "A waterway used to transport water from one location to another." },
  { term: "Corrosion", definition: "Deterioration or dissolution of a material by chemical or electrochemical reaction with the surrounding environment." },
  { term: "Cover", definition: "The depth of backfill present between the top of a culvert structure and the base layer of the roadway." },
  {
    term: "Culvert",
    definition:
      "A structure located beneath a roadway where it intersects with a waterway. The structure provides a structural function of support to the roadway above while allowing waterway movement through the embankment below.",
  },
  { term: "Deflection", definition: "Change in the original or specified vertical or horizontal measurement of a culvert structure." },
  { term: "Delamination", definition: "Separation of a layer of concrete generally through internal cracking parallel to the concrete surface." },
  { term: "Deterioration", definition: "Decline in quality over time due to chemical or physical wearing." },
  { term: "Differential Settlement", definition: "Uneven settlement between footings or supports." },
  { term: "Efflorescence", definition: "Deposits of salts on the surface of a porous material caused by the migration of salt-laden water to the surface." },
  { term: "Embankment", definition: "Soil constructed above the natural ground surface that encases a culvert structure and supports a roadway." },
  { term: "Erosion", definition: "The removal of a material or surface over time by flowing water." },
  { term: "Exfiltration", definition: "The process of water exiting a culvert structure and entering the surrounding soil through unintended openings." },
  { term: "Flexible Culvert", definition: "A culvert that relies on a consistent application of pressure from the surrounding soil envelope to develop structural strength." },
  { term: "Galvanization", definition: "Application of zinc coating along the surface of a structure." },
  { term: "Infiltration", definition: "The process of water or backfill material entering the culvert structure through unintended openings." },
  { term: "Inlet", definition: "The initial 5 ft of the upstream end of a culvert structure." },
  { term: "Invert", definition: "The bottom or lowest region along the internal surface of a pipe." },
  {
    term: "Joint",
    definition: "Connection where two sections of a culvert structure meet. Additional material may be present to ensure a watertight connection between sections.",
  },
  {
    term: "Large Culvert",
    definition: "A culvert structure with a measured span length between 4 ft and 20 ft as measured perpendicular to the centerline of the parent roadway.",
  },
  { term: "Outlet", definition: "The final 5 ft of the downstream end of a culvert structure." },
  { term: "Piping", definition: "The process of erosion along the exterior perimeter of a culvert barrel." },
  { term: "Pressure Head", definition: "Height of water above a plane or point of reference." },
  { term: "Rehabilitation", definition: "Repairing a culvert to return it to its initial condition or better." },
  { term: "Replacement", definition: "Removal of existing structure and construction of a new culvert." },
  { term: "Rigid Culvert", definition: "A culvert that relies on internal material properties to develop structural strength." },
  { term: "Scaling", definition: "Disintegration of cement paste caused by chemical attacks or freeze-thaw cycles that erode the concrete surface." },
  { term: "Scour", definition: "Erosion of the streambed of a channel where it meets the inlet and outlet of a culvert structure." },
  { term: "Section Loss", definition: "Loss of a material’s thickness caused by chemical or physical degradation." },
  { term: "Slabbing", definition: "Straightening of rounded concrete sections accompanied by cracking and/or spalls." },
  { term: "Soil Envelope", definition: "Soil or backfill encasing a culvert structure and applying pressure due to the weight of the soil." },
  { term: "Spalling", definition: "Separation of surface concrete due to fractures within the material." },
  { term: "Spring Line", definition: "A line connecting the outermost points along the sides of a large culvert structure." },
  {
    term: "Undermining",
    definition: "Erosion process that removes material from below and threatens the structural integrity of the above member; typically occurs around footings and other supports.",
  },
  { term: "Vertical Offset", definition: "Displacement of an object from its original position in the vertical direction." },
];

const words = [
  { term: "Abutment", definition: "A structure that supports the end of a bridge and transfers loads to the foundation." },
  { term: "Approach Slab", definition: "A reinforced concrete slab that provides a smooth transition between the roadway and the bridge deck." },
  { term: "Backwall", definition: "The vertical wall at the rear of an abutment that retains the roadway fill behind a bridge." },
  { term: "Bearing Pad", definition: "A pad placed between the bridge superstructure and substructure to accommodate movement and distribute loads." },
  { term: "Bridge Deck", definition: "The roadway surface of a bridge, typically made of concrete or steel." },
  { term: "Centerline", definition: "A continuous line marking the center of a roadway, dividing opposing lanes of traffic." },
  { term: "Crossover", definition: "A temporary or permanent roadway connection allowing traffic to switch between lanes or directions, often used in construction zones." },
  { term: "Deck Joint", definition: "A joint in the bridge deck that allows for expansion, contraction, and movement due to temperature changes or load variations." },
  { term: "Deck Slab", definition: "The reinforced concrete slab forming the bridge deck, providing structural support for traffic loads." },
  { term: "Downspout", definition: "A drainage component that directs water from the bridge deck to a designated drainage system." },
  { term: "Downspouts", definition: "Pipes or channels that direct water from a bridge deck to the drainage system below, preventing water accumulation." },
  { term: "Expansion Joint", definition: "A structural joint that allows movement caused by thermal expansion, contraction, or other forces." },
  { term: "Flow Line", definition: "The lowest point within a channel, pipe, or culvert where water is expected to flow under normal conditions." },
  { term: "Footing", definition: "The foundation element of a bridge that distributes loads to the ground." },
  { term: "Girder Line", definition: "The alignment of girders supporting the bridge deck." },
  { term: "Headwall", definition: "A retaining wall at the end of a culvert or bridge opening that stabilizes the structure and prevents erosion." },
  { term: "Jobsite", definition: "A location where construction, maintenance, or engineering work is actively taking place." },
  { term: "LaPorte", definition: "The INDOT district name and county name are written as one word with a capital P: LaPorte. The city name is written as two words: La Porte." },
  { term: "Live Load", definition: "The dynamic loads on a bridge caused by vehicles, pedestrians, wind, and other temporary forces." },
  { term: "Off-ramp", definition: "A roadway that allows vehicles to exit a highway or freeway." },
  { term: "On-ramp", definition: "A roadway that allows vehicles to enter a highway or freeway." },
  { term: "Parapet", definition: "A low protective barrier along the edge of a bridge, designed to prevent vehicles or pedestrians from falling off." },
  { term: "Passerby", definition: "A person who passes by a specific location, such as a roadway or construction site." },
  { term: "Passersby", definition: "Plural of passerby; multiple people passing by a location." },
  { term: "Pier Cap", definition: "The upper part of a bridge pier that distributes loads from the superstructure to the pier columns." },
  { term: "Pile Cap", definition: "A reinforced concrete slab that connects multiple foundation piles, distributing loads more effectively." },
  { term: "Retaining Wall", definition: "A wall designed to resist soil pressure and prevent erosion or collapse of embankments." },
  { term: "Right-of-Way", definition: "The legal right to pass over or use a specific section of land for transportation purposes." },
  { term: "Riprap", definition: "Layered rock or concrete placed along shorelines, slopes, or embankments to prevent erosion." },
  { term: "Road School", definition: "A formal program or event focused on transportation and roadway engineering education." },
  { term: "Scour Hole", definition: "An erosion pit or depression formed by the movement of water around a bridge foundation." },
  { term: "Shear Crack", definition: "A diagonal crack in a bridge component, typically caused by excessive shear stress near supports." },
  { term: "Slopewall", definition: "A protective concrete or riprap covering placed on embankments to prevent soil erosion near bridges and culverts." },
  { term: "Snowdrift", definition: "A deep accumulation of snow formed by wind movement and deposition." },
  { term: "Snowplow", definition: "A vehicle or equipment used to remove snow from roadways and highways." },
  { term: "Snowstorm", definition: "A weather event characterized by heavy snowfall and reduced visibility." },
  { term: "Steel Girder", definition: "A large steel beam used to support a bridge deck and distribute loads to the substructure." },
  { term: "Subdistrict", definition: "A smaller administrative division within a larger district, often used in transportation planning." },
  { term: "Superstructure Span", definition: "The portion of the bridge above the substructure that supports traffic loads." },
  { term: "Traffic Barrier", definition: "A safety barrier used to separate lanes, protect vehicles, and prevent roadway departures." },
  { term: "Waterline", definition: "The elevation or mark indicating the typical level of water in a stream, river, or other water body near a structure." },
  { term: "Wingwall", definition: "A sidewall extending from an abutment or headwall that helps retain soil and direct water flow away from a bridge or culvert." },
  { term: "Jacking Frame", definition: "A structural frame used to support and distribute loads when lifting or lowering bridge components during maintenance or construction." },
  {
    term: "Curtain Wall",
    definition: "A non-load-bearing exterior wall or barrier designed to protect structures from environmental elements while allowing for controlled drainage.",
  },
  { term: "Crash Wall", definition: "A reinforced protective wall built around bridge piers or critical infrastructure to absorb and deflect vehicle impacts." },
  { term: "Pier Wall", definition: "A vertical structural element that supports bridge spans and transfers loads to the foundation, often part of a pier system." },
  { term: "Bridge Seat", definition: "The upper surface of an abutment or pier where bridge bearings rest, providing support for the superstructure." },

  { term: "Diaphragm", definition: "A structural element that distributes loads across the width of a bridge, preventing distortion or movement of the deck." },
  { term: "Cross Bracing", definition: "A system of diagonal braces used to strengthen and stabilize the bridge structure, typically placed between girders or beams." },
  { term: "Sway Bracing", definition: "Bracing used to resist lateral forces that cause side-to-side movement of a structure, improving its stability." },
  { term: "Springline", definition: "The point on an arch where the curve begins to rise from the supports, marking the transition from the span to the abutments." },
  { term: "Keystone", definition: "The central, topmost stone in an arch that locks all other stones into place and allows the arch to bear weight." },
  {
    term: "Freeboard",
    definition: "The vertical distance between the water surface and the lowest structural component of a bridge, ensuring clearance during high water levels.",
  },
  { term: "Flow Line", definition: "The lowest point within a channel, pipe, or culvert where water is expected to flow under normal conditions." },
  { term: "Waterline", definition: "The elevation or mark indicating the typical level of water in a stream, river, or other water body near a structure." },
  { term: "Thalweg", definition: "The deepest continuous line within a river or channel, representing the path of fastest water flow and natural sediment transport." },
  { term: "Aggradation", definition: "The process of sediment deposition that raises the level of a riverbed or streambed, often due to reduced water flow or velocity." },
  { term: "Degradation", definition: "The process of erosion or removal of sediment from the riverbed or streambed, leading to a lowering of the watercourse or shoreline." },
  { term: "Local Scour", definition: "The localized erosion around bridge piers, abutments, or other structures due to the flow of water, often weakening the foundation." },
  {
    term: "Scour",
    definition: "The erosion of sediment from the riverbed or streambed caused by the movement of water, which can undermine the stability of structures like bridges.",
  },
  { term: "Erosion", definition: "The gradual removal of soil, rock, or other surface materials by natural forces such as wind, water, or ice." },
  { term: "Scour Hole", definition: "A depression or pit formed by erosion around a bridge foundation or other submerged structure due to water movement." },
  {
    term: "Streambed Scour",
    definition: "Erosion of the bed of a stream or river due to the force of flowing water, often exacerbated by the presence of bridge supports or other structures.",
  },
  { term: "Bedload", definition: "The sediment that moves along the bottom of a river or streambed, contributing to scour and erosion." },
  {
    term: "Hydraulic Scour",
    definition: "Scour caused by changes in water flow, velocity, or pressure around structures, leading to the erosion of sediment in the surrounding area.",
  },
  { term: "Surface Erosion", definition: "The gradual wearing away of the top layer of soil or material by natural forces like water, wind, or ice." },
  { term: "Splash Erosion", definition: "Erosion caused by the impact of raindrops dislodging small soil particles, which are then carried away by water or wind." },
  { term: "Rill Erosion", definition: "Shallow, small channels formed on the soil surface by the concentrated flow of water, often caused by rainfall or surface runoff." },
  { term: "Gully Erosion", definition: "The development of deep, wide channels (gullies) as a result of continuous water flow, often from rill erosion." },
  { term: "Bank Erosion", definition: "Erosion along the banks of rivers, streams, or lakes, where water removes soil and weakens the stability of the shoreline or embankments." },
  { term: "Coastal Erosion", definition: "The erosion of shorelines due to the action of waves, tides, and currents, often impacting coastal infrastructure and habitats." },
  { term: "Wind Erosion", definition: "The erosion of soil or sand caused by wind forces, typically in arid or semi-arid regions." },
  {
    term: "Hydraulic Erosion",
    definition: "Erosion caused by the pressure and flow of water, leading to the displacement of soil or material, especially around riverbeds and structures.",
  },
  {
    term: "Freeze-Thaw Erosion",
    definition: "Erosion that occurs when water enters cracks in materials, freezes and expands, and then thaws, causing the material to break apart.",
  },
  {
    term: "Saline Erosion",
    definition: "Erosion resulting from the accumulation of salts in soil, often due to irrigation practices, leading to soil degradation and reduced fertility.",
  },
  {
    term: "Scour",
    definition: "Localized erosion caused by the force of flowing water around structures like bridge piers, abutments, or embankments, often leading to foundation instability.",
  },
  { term: "Channel Bed", definition: "The bottom surface of a channel, often composed of rock, sediment, or soil, through which the flow of water moves." },
  { term: "Channel Banks", definition: "The sides of a channel that confine and direct the flow of water, typically made of soil, rock, or vegetation." },
  { term: "Channel Slope", definition: "The gradient or steepness of a channel, typically measured as the rise over run, influencing the velocity and flow of water." },
  { term: "Thalweg", definition: "The line of lowest elevation within a channel, often following the natural flow path of water, marking the deepest part of the channel." },
  { term: "Channel Width", definition: "The horizontal distance between the banks of a channel, which can vary depending on the water flow and surrounding landscape." },
  { term: "Channel Depth", definition: "The vertical distance from the channel bed to the water surface, typically varying depending on flow conditions and sediment deposition." },
  {
    term: "Floodplain",
    definition: "The flat, often expansive area adjacent to a channel that is subject to periodic flooding, typically formed by sediment deposition during high-water events.",
  },
  {
    term: "Meander",
    definition: "A curve or bend in a channel, typically occurring in low-gradient rivers or streams, where the water flow erodes one bank and deposits sediment on the other.",
  },
  { term: "Point Bar", definition: "A crescent-shaped deposit of sediment on the inside of a meander curve, formed by the slower flow of water." },
  { term: "Cut Bank", definition: "The outer bank of a meander, where erosion is most active, often forming steep, vertical walls." },
  { term: "Confluence", definition: "The point at which two or more streams or rivers meet, often forming a larger channel or river." },
  { term: "Sloughing", definition: "The gradual removal or collapse of soil, rock, or vegetation from the banks or bed of a channel due to erosion or instability." },
  {
    term: "Bank Erosion",
    definition: "The process where the banks of a channel are worn away by the flow of water, leading to the loss of material and potential widening of the channel.",
  },
  { term: "Undercutting", definition: "The erosion of the base of a channel's bank or bed, causing instability and leading to the collapse or sloughing of the bank material." },
  { term: "Scour", definition: "The erosion of material from the bed or banks of a channel caused by the force of flowing water, often around structures like bridge piers." },
  {
    term: "Sediment Deposition",
    definition: "The accumulation of eroded materials such as sand, silt, or gravel within a channel, typically occurring when the flow velocity decreases.",
  },
  { term: "Instability", definition: "The condition in which a channel or bank is prone to failure due to erosion, over saturation, or improper structural design." },
  { term: "Widening", definition: "The increase in the horizontal width of a channel, typically caused by bank erosion or undercutting." },
  {
    term: "Headcutting",
    definition: "The erosion of the upstream end of a channel, often occurring when a sudden drop in elevation (such as a waterfall) leads to rapid erosion and deepening.",
  },
  {
    term: "Piping",
    definition: "The erosion caused by the flow of water through soil or sediment, creating underground channels and leading to the collapse of the surface material.",
  },
  {
    term: "Cavitation",
    definition:
      "The formation of vapor bubbles in the water that collapse near a surface, leading to localized erosion, often seen around hydraulic structures like gates or valves.",
  },
  {
    term: "Underfill Concrete Arch",
    definition:
      "A type of bridge structure consisting of a concrete arch with a fill material placed underneath the arch to support and distribute the load, providing stability and reducing the amount of material required for the arch.",
  },
  { term: "Arch Ring", definition: "The curved, topmost portion of an arch that carries the compressive load across the span of the bridge, ensuring structural stability." },
  {
    term: "Keystone",
    definition: "The central, topmost stone or concrete block of an arch that locks the other blocks or sections in place, crucial for the arch’s structural integrity.",
  },
  {
    term: "Spandrel Wall",
    definition: "The vertical wall or partition that supports the arch ring and fills the space between the arch and the roadbed, providing additional stability to the structure.",
  },
  {
    term: "Underfill Material",
    definition: "A material, such as compacted soil or granular aggregate, placed beneath the arch ring to help distribute loads evenly and enhance the bridge’s stability.",
  },
  {
    term: "Abutment",
    definition: "A support structure at either end of the bridge that holds the ends of the arch in place and transfers the loads from the bridge to the ground.",
  },
  {
    term: "Abutment Backfill",
    definition: "The material placed behind the abutment, typically soil or granular fill, that helps support the weight of the bridge and ensures the arch remains stable.",
  },
  { term: "Rise", definition: "The vertical distance from the base of the arch to the highest point of the arch, influencing the curvature and load distribution of the arch." },
  { term: "Span", definition: "The horizontal distance between the supports (abutments) of the arch, determining the size and shape of the arch structure." },
  {
    term: "Hinge",
    definition:
      "A structural component in some concrete arches that allows slight movement or rotation due to changes in temperature or load variations, typically placed at the base or supports of the arch.",
  },
  {
    term: "Springline",
    definition: "The horizontal line at which the arch ring begins to curve from the abutment, marking the transition between the arch and the supporting structure.",
  },
  {
    term: "Arch Crown",
    definition: "The highest point of the arch, located at the center of the span, which experiences compressive forces that help distribute loads across the arch structure.",
  },
  { term: "Intrados", definition: "The inner surface of the arch ring, which is in compression and typically carries the load from the bridge deck." },
  { term: "Extrados", definition: "The outer surface of the arch ring, which is under tension and provides the structural shape for the arch." },
  { term: "Arch Springing", definition: "The point or line at which the arch ring meets the abutments, where the arch begins to support the load from the bridge." },
  { term: "Pier", definition: "A vertical support structure located in the water or at the midspan of the arch bridge, used to provide additional support for the arch." },
  {
    term: "Barrel",
    definition: "The curved, continuous part of an arch bridge, typically referring to the overall length or span of the arch that supports the load.",
  },
];

const channelProtectionItems = [
  {
    term: "Spurs",
    definition: "A river training countermeasure that extends from the bank to control flow direction and reduce erosion by deflecting water away from vulnerable areas.",
  },
  { term: "Bendway Weirs", definition: "A type of river training structure used to guide water flow along a river bend, reducing bank erosion and scour." },
  { term: "Guide Banks", definition: "A type of river training countermeasure designed to direct flow away from the banks and toward the center of the channel." },
  { term: "Drop Structures", definition: "A river training feature that is placed in the channel to control the flow of water and reduce scouring effects on the streambed." },
  { term: "Check Dams", definition: "Small structures used in rivers or streams to slow the flow of water and reduce erosion." },
  { term: "Riprap", definition: "Loose stone or rock material placed along embankments, shorelines, or riverbeds to prevent erosion." },
  { term: "Grouted Riprap", definition: "A type of riprap that is bonded together with grout to form a more stable, cohesive surface." },
  { term: "Concrete Slope Paving", definition: "A protective layer of concrete used to stabilize slopes and prevent erosion." },
  { term: "Articulating Concrete Blocks", definition: "Pre-cast, interlocking concrete units used to form erosion-resistant surfaces." },
  { term: "Gabion Mattresses", definition: "A riverbank protection system made of mesh baskets filled with rocks, providing stability and preventing erosion." },
  { term: "Grout-Filled Mats", definition: "A protective matting system filled with grout to stabilize riverbanks and prevent erosion." },
];
