const defectDefinitions = [
  {
    term: "Inherent Defect",
    definition:
      "Not indicative of damage or deterioration but is either a characteristic of the material or the result of normal construction practices. Examples include insignificant width fabrication, shrinkage, and temperature cracks, pop-outs, or shallow edge chips and spalls.",
    search: `What is an "Inherent Defect" in bridge design?`,
    discipline: "bridge design",
    page: ["glossary-defects-tab"],
  },
  {
    term: "Minor Defect",
    definition:
      "Damage or deterioration has initiated but is not considered significant. Examples include minimal to moderate width cracks with no efflorescence or rust stains, shallow depth spalls with no exposed reinforcing steel, or speckled surface rust.",
    search: `What is a "Minor Defect" in bridge inspection?`,
    discipline: "bridge inspection",
    page: ["glossary-defects-tab"],
  },
  {
    term: "Moderate Defect",
    definition:
      "Damage or deterioration is significant, but the strength or performance is not yet adversely affected. Examples include moderate width cracks with either efflorescence or rust stains, spalls with exposed reinforcing steel, or more pronounced surface rust and corrosion with either pitting or delamination. Defects or deterioration at this level may not yet warrant a structural or geotechnical review.",
    search: `What is a "Moderate Defect" in bridge inspection?`,
    discipline: "bridge inspection",
    page: ["glossary-defects-tab"],
  },
  {
    term: "Major Defect",
    definition:
      "Damage or deterioration is significant, and the strength or performance is adversely affected. Examples would be similar in type to moderate defects but of greater magnitude and severity that, upon reporting, would require a structural or geotechnical review.",
    search: `What is a "Major Defect" in bridge inspection?`,
    discipline: "bridge inspection",
    page: ["glossary-defects-tab"],
  },
  {
    term: "Isolated Defects",
    definition: "Defect is visible in one or few incident locations.",
    search: `What are "Isolated Defects" in bridge inspection?`,
    discipline: "bridge inspection",
    page: ["glossary-defects-tab"],
  },
  {
    term: "Some Defects",
    definition: "Defect visibility is more than isolated and less than widespread.",
    search: `What are "Some Defects" in bridge inspection?`,
    discipline: "bridge design",
    page: ["glossary-defects-tab"],
  },
  {
    term: "Widespread Defects",
    definition: "Defect is visible across many incident locations.",
    search: `What are "Widespread Defects" in bridge inspection?`,
    discipline: "bridge inspection",
    page: ["glossary-defects-tab"],
  },
];

const glossaryTerms = [
  {
    term: "AASHTO Manual",
    definition:
      "The term 'AASHTO Manual' means the American Association of State Highway and Transportation Officials (AASHTO) 'Manual for Bridge Evaluation' with Sections 1.4, 2.2, 4.2, 6, and 8, excluding the 3rd paragraph in Article 6B.7.1.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "AASHTO MBEI",
    definition:
      "AASHTO Manual for Bridge Element Inspection is a reference for standardized element definitions, element quantity calculations, condition state definitions, element feasible actions, and inspection conventions. This manual is used for element descriptions, quantity calculations, and condition state definitions.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Annual Average Daily Traffic (AADT)",
    definition: "The total annual volume of traffic passing a point or segment of a highway in both directions divided by the number of days in a year.",
    search: `What is "Annual Average Daily Traffic" in transportation engineering?`,
    discipline: "transportation engineering",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Annual Average Daily Truck Traffic (AADTT)",
    definition: "The total annual volume of truck traffic passing a point or segment of a highway in both directions divided by the number of days in a year.",
    search: `What is "Annual Average Daily Truck Traffic" in transportation engineering?`,
    discipline: "transportation engineering",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Bridge",
    definition:
      "A structure including supports erected over a depression or an obstruction, such as water, highway, or railway, and having a track or passageway for carrying traffic or other moving loads, and having an opening measured along the center of the roadway of more than 20 feet between under copings of abutments or spring lines of arches, or extreme ends of openings for multiple boxes; it includes multiple pipes, where the clear distance between openings is less than half of the smaller contiguous opening.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Bridge Elements",
    definition:
      "Individual parts of a bridge that are subsets of bridge components, inventoried separately as functional groups. Elements inventoried on the bridge include: the total quantity for each element, and the element quantity that exists in each of four condition states reported to the NBI in accordance with 23 U.S.C. 144(d)(2).",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Bridge Inspector’s Reference Manual",
    definition:
      "A comprehensive FHWA manual on procedures and techniques for inspecting and evaluating a variety of in-service highway bridges. This manual is available at: https://www.fhwa.dot.gov/bridge/nbis.cfm.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Closed Median",
    definition: "A median in which the area between the two roadways on the structure is bridged over and is capable of supporting traffic.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Complex Feature",
    definition:
      "Bridge component(s) or member(s) with advanced or unique structural members or operational characteristics, construction methods, and/or requiring specific inspection procedures. This includes mechanical and electrical elements of movable spans and cable-related members of suspension and cable-stayed superstructures.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Culvert",
    definition:
      "A structure comprised of one or more barrels, beneath an embankment and designed structurally to account for soil-structure interaction. These structures are hydraulically and structurally designed to convey water, sediment, debris, and, in many cases, aquatic and terrestrial organisms through roadway embankments. Culvert barrels have many sizes and shapes and have inverts that are either integral or open, i.e. supported by spread or pile-supported footings. Many culverts take advantage of headwater submergence of the inlet to increase hydraulic efficiency and economy.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Damage Inspection",
    definition: "An unscheduled inspection to assess structural damage resulting from environmental factors or human actions.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Designated Lead State",
    definition:
      "The State responsible for reporting the full bridge record for a border bridge. The Designated Lead State and Neighboring State are determined through agreement between the two border States.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Divided Highway",
    definition: "A highway with separated roadways for traffic traveling in opposite directions.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Double Deck Bridge",
    definition:
      "A bridge consisting of two decks, tiers, or levels. These bridges may incorporate highway lanes on both levels or highway lanes on one level and other transportation modes on the other level.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Driver Expectation",
    definition:
      "Relates to the likelihood that a driver will respond to common situations in predictable ways that the driver has found successful in the past. A driver’s readiness to respond to situations, events, and information in predictable and successful ways.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Efflorescence",
    definition:
      "A deposit on concrete, brick, stone, or mortar caused by crystallization of carbonates brought to the surface by moisture in the masonry or concrete. Efflorescence is a combination of calcium carbonate leached out of the cement paste and other recrystallized carbonate and chloride compounds.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Element Level Bridge Inspection Data",
    definition: "Quantitative condition assessment data, collected during bridge inspections, that indicates the severity and extent of defects in bridge elements.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Engineered Wood",
    definition:
      "Products that utilize veneers, plywood, reconstituted wood panel products, or engineered wood assemblies. Some engineered wood products include glued laminated timber, I-joists, and laminated veneer lumber.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Federal Information Processing Series (FIPS)",
    definition:
      "A system of numeric and/or alphabetic coding issued by the National Institute of Standards and Technology (NIST), an agency of the US Department of Commerce. FIPS codes are assigned for a variety of geographic entities including American Indian and Alaska Native Areas, Hawaiian home lands, congressional districts, counties, county subdivisions, metropolitan areas, places, and states. FIPS codes were discontinued by NIST in 2005, but the Census Bureau continues to maintain and issue codes for the geographic entities covered.",
    source: "http://www.fhwa.dot.gov/bridge/nbi.cfm",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Federal Lands",
    definition:
      "Lands under the jurisdiction of Federal agencies. FHWA’s Federal Land Management Agency partners currently include: National Park Service (NPS); USDA Forest Service (Forest Service); U.S. Fish and Wildlife Service (USFWS); Bureau of Indian Affairs (BIA) and Tribal Governments; Bureau of Land Management (BLM); Department of Defense (DOD); U.S. Army Corps of Engineers (USACE); and Bureau of Reclamation (BOR).",
    source: "https://highways.dot.gov/federal-lands/about",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Ferry Transfer Bridge",
    definition: "A bridging structure that enables vehicular movement from a dock or approach roadway to a ferry.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Fiber Reinforced Polymer Composite (FRP)",
    definition:
      "Also known as fiberglass reinforced plastic, FRP is a composite made from glass fiber or carbon fiber reinforcement in a plastic (polymer) matrix. With reinforcement of the plastic matrix, a wide variety of physical strengths and properties can be designed into the material. Additionally, the type and configuration of the reinforcement can be selected, along with the type of polymer and additives within the matrix.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Floating Bridge",
    definition: "A bridge supported by floating on pontoons moored to the lakebed or riverbed; a portion may be removable to facilitate navigation.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Hands-On Inspection",
    definition: "Inspection within arm’s length of the member. Inspection uses visual techniques that may be supplemented by nondestructive evaluation techniques.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Highway",
    definition:
      "The term 'highway' includes: A) a road, street, and parkway; B) a right-of-way, bridge, railroad-highway crossing, tunnel, drainage structure, sign, guardrail, and protective structure, in connection with a highway; and C) a portion of any interstate or international bridge or tunnel and the approaches thereto, the cost of which is assumed by a State transportation department, including such facilities as may be required by the United States Customs and Immigration Services in connection with the operation of an international bridge or tunnel.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Highway Performance Monitoring System (HPMS)",
    definition:
      "A national level highway information system that includes data on the extent, condition, performance, use, and operating characteristics of the nation's highways.",
    source: "http://www.fhwa.dot.gov/policyinformation/hpms/fieldmanual/",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Hydraulic Review",
    definition:
      "A review by a person qualified to evaluate the field-observed hydraulic conditions and make a determination of the impacts of the conditions on the performance of the channel, channel protection, or when working with structural staff, determine the scour vulnerability of a bridge member or entire bridge. Hydraulic reviews may include a review of the field inspection notes and photographs, review of as-built plans, scour appraisals, and scour POAs, or performance of a hydraulic analysis as deemed appropriate.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "In-Depth Inspection",
    definition:
      "A close-up, detailed inspection of one or more bridge members located above or below water, using visual or nondestructive evaluation techniques as required to identify any deficiencies not readily detectable using routine inspection procedures. Hands-on inspection may be necessary at some locations. In-depth inspections may occur more or less frequently than routine inspections, as outlined in bridge-specific inspection procedures.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Initial Inspection",
    definition:
      "The first inspection of a new, replaced, or rehabilitated bridge. This inspection serves to record required bridge inventory data, establish baseline conditions, and establish the intervals for other inspection types.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Inspection Date",
    definition: "The date on which the field portion of the bridge inspection is completed.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Inspection Due Date",
    definition: "The last inspection date plus the current inspection interval.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Inspection Report",
    definition: "The document which summarizes the bridge inspection findings, recommendations, and identifies the team leader responsible for the inspection and report.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Internal Redundancy",
    definition:
      "A redundancy that exists within a primary member cross-section without load path redundancy, such that fracture of one component will not propagate through the entire member, is discoverable by the applicable inspection procedures, and will not cause a portion of or the entire bridge to collapse.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Inventory Data",
    definition: "All data reported to the National Bridge Inventory in accordance with the Specifications for the National Bridge Inventory.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Legal Load",
    definition:
      "The maximum load for each vehicle configuration, including the weight of the vehicle and its payload, permitted by law for the State in which the bridge is located.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Legal Load Rating",
    definition:
      "The maximum permissible legal load to which the structure may be subjected with the unlimited numbers of passages over the duration of a specified bridge evaluation period. Legal load rating is a term used in Load and Resistance Factor Rating method.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Legally Enforceable Load Posting",
    definition: "Posting of a load restriction sign (or signs) at a bridge in accordance with State law that is legally enforceable by law enforcement personnel.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Linear Referencing System (LRS)",
    definition:
      "Provides a geospatial representation of a road network through a set of procedures for determining and retaining a record of specific points along a highway. Typical methods used are mile point, milepost, reference point, or link node. LRS data are required for the annual Highway Performance Monitoring System (HPMS) data submittal from the States to FHWA.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Load Path Redundancy",
    definition:
      "A redundancy that exists based on the number of primary load-carrying members between points of support, such that fracture of the cross-section at one location of a member will not cause a portion of or the entire bridge to collapse.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Load Posting",
    definition:
      "Regulatory signs installed in accordance with the 'Manual on Uniform Traffic Control Devices' and State or local law which represent the maximum vehicular live load which the bridge may safely carry.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Load Rating",
    definition:
      "The analysis to determine the safe vehicular live load carrying capacity of a bridge using bridge plans and supplemented by measurements and other information gathered from an inspection.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Major Rehabilitation",
    definition: "The major work required to restore the structural integrity or serviceability of a bridge as well as work necessary to correct major safety defects.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Minor Rehabilitation",
    definition:
      "The minor work required to preserve or restore the structural integrity of a bridge or serviceability as well as the work necessary to correct minor safety defects.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Multi-level Interchange",
    definition:
      "A multilevel highway intersection or junction of intersecting roads and bridges arranged so that vehicles may move from one road to another without crossing the streams of traffic.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "National Bridge Inspection Standards (NBIS)",
    definition:
      "Federal regulations establishing national policy regarding bridge inspection organization, bridge inspection frequency, inspector qualifications, inventory requirements, report formats, and inspection and rating procedures, as described in 23 CFR 650 Subpart C.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "National Bridge Inventory (NBI)",
    definition:
      "An aggregation of State transportation department, Federal agency and Tribal government bridge and associated highway data maintained by the Federal Highway Administration (FHWA). The NBIS requires each State transportation department, Federal agency, and Tribal government to prepare and maintain a bridge inventory, which must be submitted to FHWA in accordance with these specifications on an annual basis or whenever requested.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "National Highway Freight Network (NHFN)",
    definition:
      "A national highway freight network established by FHWA to assist States in strategically directing resources toward improved movement of freight on highways. The NHFN consists of a Primary Highway Freight System, the portions of the Interstate System not designated as part of the Primary Highway Freight System, and Critical Rural Freight Corridors and Critical Urban Freight Corridors designated by states.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Nationally Certified Bridge Inspector",
    definition: "An individual meeting the team leader requirements of 23 CFR 650.309(b).",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Navigable Waterway",
    definition:
      "Navigable waterways are determined by the Commandant of the United States Coast Guard. Title 33 of the Code of Federal Regulations, Section 2.36, defines navigable waterways as consisting of territorial seas of the United States, internal waters subject to tidal influence, and internal waters not subject to tidal influence that are used for interstate or foreign commerce or determined capable of improvement for such use.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Neighboring State",
    definition:
      "The State responsible for reporting an abbreviated bridge record for a border bridge. The Designated Lead State and the Neighboring State are determined through agreement between the two border States.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Nonredundant Steel Tension Member (NSTM)",
    definition:
      "A primary steel member fully or partially in tension, and without load path redundancy, system redundancy, or internal redundancy, whose failure may cause a portion of or the entire bridge to collapse.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Nonredundant Steel Tension Member (NSTM) Inspection",
    definition: "A hands-on inspection of a nonredundant steel tension member.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Operating Rating",
    definition:
      "The maximum permissible live load to which the structure may be subjected for the load configuration used in the load rating. Allowing unlimited numbers of vehicles to use the bridge at operating level may shorten the life of the bridge. Operating rating is a term used in either Allowable Stress or Load Factor Rating method.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Orthotropic Deck",
    definition:
      "An orthotropic deck consists of a flat, thin steel plate stiffened by a series of closely spaced longitudinal ribs at right angles to the floor beams. The deck acts integrally with the steel superstructure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Private Bridge",
    definition: "A bridge open to public travel and not owned by a public authority as defined in 23 U.S.C. 101.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Procedures",
    definition:
      "Written documentation of policies, methods, considerations, criteria, and other conditions that direct the actions of personnel so that a desired end result is achieved consistently.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Probability",
    definition:
      "Extent to which an event is likely to occur during a given interval. This may be based on the frequency of events, such as in the quantitative probability of failure, or on degree of belief or expectation. Degrees of belief about probability can be chosen using qualitative scales, ranks, or categories such as, remote, low, moderate, or high.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Program Manager",
    definition:
      "The individual in charge of the program, that has been assigned the duties and responsibilities for bridge inspection, reporting, and inventory, and has the overall responsibility to ensure the program conforms with the requirements of the NBIS as provided in 23 CFR 650 Subpart C. The program manager provides overall leadership and is available to inspection team leaders to provide guidance.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Public Road",
    definition: "As defined in 23 U.S.C. 101(a)(21) as any road or street under the jurisdiction of and maintained by a public authority and open to public travel.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Quality Assurance (QA)",
    definition:
      "The use of sampling and other measures to assure the adequacy of quality control procedures in order to verify or measure the quality level of the entire bridge inspection and load rating program.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Quality Control (QC)",
    definition: "Procedures that are intended to maintain the quality of a bridge inspection and load rating at or above a specified level.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Railroad Flat Car",
    definition: "A salvaged flatbed railroad car used as a bridge superstructure, typically on low-volume roads. This type of bridge often has NSTMs.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Replacement",
    definition: "Total replacement of a bridge with a new facility constructed in the same general traffic corridor.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Risk",
    definition:
      "The exposure to the possibility of structural safety or serviceability loss during the interval between inspections. It is the combination of the probability of an event and its consequence.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Roadway",
    definition: "The portion of a highway, including shoulders, for vehicular use. A divided highway has two or more roadways.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Route",
    definition: "A specific road, highway, or travel way open to public travel.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Routine Inspection",
    definition:
      "Regularly scheduled comprehensive inspection consisting of observations and measurements needed to determine the physical and functional condition of the bridge and identify changes from previously recorded conditions.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Routine Permit Load",
    definition:
      "A live load, which has a gross weight, axle weight, or distance between axles not conforming with State statutes for legally configured vehicles, authorized for unlimited trips over an extended period of time to move alongside other heavy vehicles on a regular basis.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Safe Load Capacity",
    definition: "A live load that can safely utilize a bridge repeatedly over the duration of a specified inspection interval.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Scour",
    definition: "Erosion of streambed or bank material due to flowing water; often considered as being localized around piers and abutments of bridges.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Scour Appraisal",
    definition:
      "A risk-based and data-driven determination of a bridge’s vulnerability to scour, resulting from the least stable result of scour that is either observed, or estimated through a scour evaluation or a scour assessment.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Scour Assessment",
    definition:
      "The determination of an existing bridge’s vulnerability to scour which considers stream stability and scour potential as described in HEC 20 and other scour-related data sources.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Scour Critical Bridge",
    definition: "A bridge with a foundation member that is unstable, or may become unstable, as determined by the scour appraisal.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Scour Evaluation",
    definition:
      "The application of hydraulic analysis as described in HEC 18 and HEC 20 to estimate scour depths and determine bridge and substructure stability considering potential scour.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Scour Monitoring Inspection",
    definition:
      "An inspection performed during or after a triggering storm event as required by a Scour Plan of Action (POA), by personnel with qualifications required by the agency.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Scour Plan of Action (POA)",
    definition: "Procedures for bridge inspectors and engineers in managing each bridge determined to be scour critical or that has unknown foundations.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Service Inspection",
    definition: "An inspection to identify major deficiencies and safety issues, performed by personnel with general knowledge of bridge maintenance or bridge inspection.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Special Inspection",
    definition:
      "An inspection scheduled at the discretion of the bridge owner, used to monitor a particular known or suspected deficiency, or to monitor special details or unusual characteristics of a bridge that does not necessarily have defects.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "State",
    definition: "Any of the 50 States, the District of Columbia, or Puerto Rico.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "State Transportation Department",
    definition: "That department, commission, board, or official of any State charged by its laws with the responsibility for highway construction.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Strategic Highway Network (STRAHNET) Connectors",
    definition: "Highways which provide access between major military installations and highways which are part of the Strategic Highway Network.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Strategic Highway Network (STRAHNET)",
    definition:
      "A network of highways which are important to the United States' strategic defense policy and which provide defense access, continuity, and emergency capabilities for defense purposes.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Structural Review",
    definition:
      "A review by a person qualified to evaluate the field-observed conditions and make a determination of the impacts of the conditions on the performance of the bridge member or entire bridge. Structural reviews may include a review of the field inspection notes and photographs, review of as-built plans, or analysis as deemed appropriate.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Supported Bridge",
    definition:
      "A bridge with temporary shoring, supports, repairs, or supplemental members that are installed to keep the bridge open despite deficiencies in the permanent structure, pending future repairs or replacement.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "System Redundancy",
    definition:
      "A redundancy that exists in a bridge system without load path redundancy, such that fracture of the cross-section at one location of a primary member will not cause a portion of or the entire bridge to collapse.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Team Leader",
    definition:
      "The on-site, nationally certified bridge inspector in charge of an inspection team and responsible for planning, preparing, performing, and reporting on bridge field inspections.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Temporary Bridge",
    definition: "A bridge which is constructed to carry highway traffic until the permanent facility is built, repaired, rehabilitated, or replaced.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Traveled Way",
    definition: "The portion of roadway for the movement of vehicles, exclusive of shoulders.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Underwater Bridge Inspection Diver",
    definition: "The individual performing the inspection of the underwater portion of the bridge.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Underwater Inspection",
    definition:
      "Inspection of the underwater portion of a bridge substructure and the surrounding channel, which cannot be inspected visually at low water or by wading or probing, and generally requiring diving or other appropriate techniques.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Unknown Foundations",
    definition:
      "Foundations of bridges over waterways where complete details are unknown because either the foundation type and depth are unknown, or the foundation type is known, but its depth is unknown, and therefore cannot be appraised for scour vulnerability.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
];

const culvertTerms = [
  {
    term: "Abrasion",
    definition: "Wearing or grinding away of material by water containing sand, gravel, or stones.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Abrasive Condition",
    definition: "The presence of granular material accompanied with a stream gradient or flow sufficient to cause movement of the granular material in the streambed.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Barrel",
    definition: "The main body of a culvert structure that transports water beneath the roadway.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Blistering",
    definition: "Process of water infiltrating the first layer of a fiberglass-reinforced plastic large culvert structure causing bubbles to form near the surface.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  { term: "Channel", definition: "A waterway used to transport water from one location to another.", search: ``, discipline: "bridge design", page: ["glossary-culvert-tab"] },
  {
    term: "Corrosion",
    definition: "Deterioration or dissolution of a material by chemical or electrochemical reaction with the surrounding environment.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Cover",
    definition: "The depth of backfill present between the top of a culvert structure and the base layer of the roadway.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Culvert",
    definition:
      "A structure located beneath a roadway where it intersects with a waterway. The structure provides a structural function of support to the roadway above while allowing waterway movement through the embankment below.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Deflection",
    definition: "Change in the original or specified vertical or horizontal measurement of a culvert structure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Delamination",
    definition: "Separation of a layer of concrete generally through internal cracking parallel to the concrete surface.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Deterioration",
    definition: "Decline in quality over time due to chemical or physical wearing.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  { term: "Differential Settlement", definition: "Uneven settlement between footings or supports.", search: ``, discipline: "bridge design", page: ["glossary-culvert-tab"] },
  {
    term: "Efflorescence",
    definition: "Deposits of salts on the surface of a porous material caused by the migration of salt-laden water to the surface.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Embankment",
    definition: "Soil constructed above the natural ground surface that encases a culvert structure and supports a roadway.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  { term: "Erosion", definition: "The removal of a material or surface over time by flowing water.", search: ``, discipline: "bridge design", page: ["glossary-culvert-tab"] },
  {
    term: "Exfiltration",
    definition: "The process of water exiting a culvert structure and entering the surrounding soil through unintended openings.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Flexible Culvert",
    definition: "A culvert that relies on a consistent application of pressure from the surrounding soil envelope to develop structural strength.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  { term: "Galvanization", definition: "Application of zinc coating along the surface of a structure.", search: ``, discipline: "bridge design", page: ["glossary-culvert-tab"] },
  {
    term: "Infiltration",
    definition: "The process of water or backfill material entering the culvert structure through unintended openings.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  { term: "Inlet", definition: "The initial 5 ft of the upstream end of a culvert structure.", search: ``, discipline: "bridge design", page: ["glossary-culvert-tab"] },
  { term: "Invert", definition: "The bottom or lowest region along the internal surface of a pipe.", search: ``, discipline: "bridge design", page: ["glossary-culvert-tab"] },
  {
    term: "Joint",
    definition: "Connection where two sections of a culvert structure meet. Additional material may be present to ensure a watertight connection between sections.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Large Culvert",
    definition: "A culvert structure with a measured span length between 4 ft and 20 ft as measured perpendicular to the centerline of the parent roadway.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  { term: "Outlet", definition: "The final 5 ft of the downstream end of a culvert structure.", search: ``, discipline: "bridge design", page: ["glossary-culvert-tab"] },
  {
    term: "Piping",
    definition: "The process of erosion along the exterior perimeter of a culvert barrel.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  { term: "Pressure Head", definition: "Height of water above a plane or point of reference.", search: ``, discipline: "bridge design", page: ["glossary-culvert-tab"] },
  {
    term: "Rehabilitation",
    definition: "Repairing a culvert to return it to its initial condition or better.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  { term: "Replacement", definition: "Removal of existing structure and construction of a new culvert.", search: ``, discipline: "bridge design", page: ["glossary-culvert-tab"] },
  {
    term: "Rigid Culvert",
    definition: "A culvert that relies on internal material properties to develop structural strength.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Scaling",
    definition: "Disintegration of cement paste caused by chemical attacks or freeze-thaw cycles that erode the concrete surface.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Scour",
    definition: "Erosion of the streambed of a channel where it meets the inlet and outlet of a culvert structure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Section Loss",
    definition: "Loss of a material’s thickness caused by chemical or physical degradation.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Slabbing",
    definition: "Straightening of rounded concrete sections accompanied by cracking and/or spalls.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Soil Envelope",
    definition: "Soil or backfill encasing a culvert structure and applying pressure due to the weight of the soil.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  { term: "Spalling", definition: "Separation of surface concrete due to fractures within the material.", search: ``, discipline: "bridge design", page: ["glossary-culvert-tab"] },
  {
    term: "Spring Line",
    definition: "A line connecting the outermost points along the sides of a large culvert structure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Undermining",
    definition: "Erosion process that removes material from below and threatens the structural integrity of the above member; typically occurs around footings and other supports.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
  {
    term: "Vertical Offset",
    definition: "Displacement of an object from its original position in the vertical direction.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab"],
  },
];

const wallTerms = [
  {
    term: "Anchor",
    definition:
      "A tendon, tendon bundle, rod, or bar element that is installed into the ground through the wall and anchored into stable material well behind potentially unstable soil, then tensioned and attached to the wall to provide additional resistance to earth pressures. Anchors are also referred to as Tie-Backs or Ground Anchors.",
    search: `What is "Anchor" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Bin Wall",
    definition:
      "A type of gravity retaining wall consisting of bins typically fabricated from metal or concrete, filled with granular soil material, and then placed adjacent and atop of one another. The individual bins are typically placed in a non-interlocking manner.",
    search: `What is "Bin Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Cantilever Semi-Gravity",
    definition:
      "A type of retaining wall that has a vertical stem wall that is structurally connected to a base slab, or footing. The base slab may be either bearing directly on underlying foundation soil or supported on piles. The vertical stem wall is typically reinforced concrete or reinforced, solid-grouted concrete masonry block, while the base slab is reinforced concrete. The combined weight of the retaining wall itself and the soil mass on the base slab provides overall stability against earth pressures, while the stem wall behaves as a vertical cantilever member that is reinforced at the base of the wall providing cantilever resistance to lateral earth pressures.",
    search: `What is "Cantilever Semi-Gravity" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Crib Wall",
    definition:
      "A type of gravity retaining wall consisting of interlocking elements of timber, metal, or precast concrete arranged in the form of bins (or cribwork) and filled with granular soil material. Crib walls gain their stability not only from their weight but also to some extent from the strength of fill within the bins.",
    search: `What is "Crib Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Drilled Shaft",
    definition:
      "A structural element constructed using an auger to drill into a soil mass to remove soil and then filling the drilled void with concrete. Drilled shafts used for retaining wall construction are typically built as Secant Walls (consisting of overlapping or intersecting drilled shafts), Soldier Walls (consisting of spaced drilled shafts with lagging), or Tangent Walls (consisting of drilled shafts placed side-by-side and touching one another, but not overlapping).",
    search: `What is "Drilled Shaft" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Gabion",
    definition:
      "A cage, wire container, cylinder, or similar type box filled with rocks, broken concrete, or granular soil used in retaining wall and erosion control applications.",
    search: `What is "Gabion" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Gravity Wall",
    definition:
      "A wall typically built with stone masonry, mass concrete, or other heavy material that depends on its overall mass, or weight, to resist earth pressure from behind.",
    search: `What is "Gravity Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Lagging",
    definition:
      "Structural members that are typically timber, steel, or concrete that are installed behind, between or in front of piles or drilled shafts to support and retain the soil material between spaced piles. Timber lagging is typically used for temporary construction while steel or concrete lagging is typically used for permanent construction.",
    search: `What is "Lagging" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Mecahnically Stabilzed Earth (MSE) Wall",
    definition:
      "Mechanically stabilized earth, sometimes referred to as reinforced soil, is a soil mass embankment constructed with artificial reinforcing that typically consist of either geosynthetics or steel material. When used as retaining walls, MSE walls are designed as gravity walls built with multiple layers of horizontal reinforcing in granular backfill connected to wall face components.",
    search: `What is "MSE" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Modular Block Wall",
    definition:
      "A gravity wall built using interlocking blocks that are typically masonry, concrete, or concrete masonry units (CMU) to resist earth pressure from behind. Some modular block walls may also use artificial reinforcing similar to MSE walls.",
    search: `What is "Modular Block Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Pile",
    definition: "A structural element driven or drilled into the ground to resist vertical and/or horizontal loads. Piles are usually rolled steel shapes, concrete, or timber.",
    search: `What is "Pile" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Retaining Wall",
    definition:
      "A permanent, relatively rigid structure that supports a soil mass at slopes steeper than their angle of rest to provide usable space both above and in front of the wall.",
    search: `What is "Retaining Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Sheet Pile Wall",
    definition:
      "A cantilever wall built using interlocking plate piles fabricated from pressed or molded steel sheet metal to provide structural resistance to lateral earth pressures. Such walls can be fully cantilevered or include anchors for additional resistance.",
    search: `What is "Sheet Pile Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Soil Nails",
    definition: "Steel rods providing soil reinforcement into embankments that are either grouted into drilled holes or driven into soil at close spacing.",
    search: `What is "Soil Nails" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Soldier Pile Wall",
    definition:
      "A cantilever wall built using piles, typically rolled steel shapes and installed at regular intervals (nominally 6 to 10 foot spacings) to provide structural resistance to lateral earth pressures. Lagging is then placed between the soldier piles to both support and retain the soil material between piles and to transfer those lateral earth pressures to the soldier piles. Such walls can be fully cantilevered or include anchors for additional resistance.",
    search: `What is "Soldier Pile Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
];

const compoundTerms = [
  {
    term: "Arch Ring",
    definition: "The curved, topmost portion of an arch that carries the compressive load across the span of the bridge, ensuring structural stability.",
    search: ``,
    discipline: "arch design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Backfill",
    definition:
      "The material placed behind a bridge abutment or retaining wall to provide support, distribute loads, and aid in drainage. It is typically composed of soil, granular fill, or other engineered materials.",
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Backwall",
    definition: "The vertical wall at the rear of an abutment that retains the roadway fill behind a bridge.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Backwater",
    definition: "The increase in the upstream water elevation resulting from an obstruction to flow, such as a bridge and/or embankment placed in the floodplain.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Centerline",
    definition:
      "The yellow painted line, or the imaginary line, that separates traffic moving in opposite directions on a roadway. It serves as a visual guide for drivers, indicating the boundary between lanes of traffic going in opposite directions.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Clear Zone",
    definition: "The area along a roadway that is kept free of obstacles, designed to provide a safe space for vehicles that leave the road.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Crash Wall",
    definition: "A reinforced protective wall built around bridge piers or critical infrastructure to absorb and deflect vehicle impacts.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Cross Bracing",
    definition: "A system of diagonal braces used to strengthen and stabilize the bridge structure, typically placed between girders or beams.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Cross-Section",
    definition: "A view or diagram representing a vertical or horizontal cut through an object, structure, or terrain to show internal features.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Cross Slope",
    definition: "The slope of the roadway surface perpendicular to the direction of travel, designed to allow for proper drainage of water.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Crossover",
    definition:
      "A designated area or path, often a short roadway, that allows vehicles to cross a median or divider to access opposing roadways or areas. Crossovers are commonly found on divided highways or interstates to provide access between different sides of the road.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Crosswalk",
    definition:
      "A designated area on a road or street, marked to provide a safer path for pedestrians to cross. It typically consists of painted lines or markings to make the crossing more visible to drivers.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Downspout",
    definition: "A drainage component that directs water from the bridge deck to a designated drainage system.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Downstream",
    definition:
      "The direction in which water flows away from the source or higher elevation. In engineering, it refers to structures, impacts, or conditions occurring after the point of interest in the flow path.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Earthwork",
    definition: "The process of moving, excavating, or compacting soil, rock, or other materials to prepare a site for construction or engineering projects.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Eastbound, Westbound, Northbound, Southbound",
    definition: "Moving in the indicated direction, typically referring to traffic lanes or transportation routes.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Floodplain",
    definition: "The flat, often expansive area adjacent to a channel that is subject to periodic flooding, typically formed by sediment deposition during high-water events.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Flow Line",
    definition: "The lowest point within a channel, pipe, or culvert where water is expected to flow under normal conditions.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Freeboard",
    definition: "The clearance between the bottom of the superstructure and the design high-water elevation.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Groundwater",
    definition: "Water located beneath the Earth's surface in soil pores and rock formations, supplying wells and springs.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Headwall",
    definition: "A retaining wall at the end of a culvert or bridge opening that stabilizes the structure and prevents erosion.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Jobsite",
    definition: "A location where construction, maintenance, or engineering work is actively taking place.",
    search: ``,
    discipline: "transportation engineering",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Keystone",
    definition: "The central, topmost stone or concrete block of an arch that locks the other blocks or sections in place, crucial for the arch’s structural integrity.",
    search: ``,
    discipline: "arch design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "LaPorte",
    definition: "The INDOT district name and county name are written as one word with a capital P: LaPorte. The city name is written as two words: La Porte.",
    search: `INDOT LaPorte District`,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
    link: `https://entapps.indot.in.gov/dotmaps/districtmaps/`,
  },
  {
    term: "Line of Sight",
    definition: "The unobstructed view along the roadway, crucial for driver safety, allowing the driver to see upcoming curves or obstacles.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Load-Bearing",
    definition: "A structural element, such as a wall or beam, that supports and transfers loads from above to the foundation or other supporting members.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  { term: "Off-ramp", definition: "A roadway that allows vehicles to exit a highway or freeway.", search: ``, discipline: "bridge design", page: ["glossary-compounds-tab"] },
  { term: "On-ramp", definition: "A roadway that allows vehicles to enter a highway or freeway.", search: ``, discipline: "bridge design", page: ["glossary-compounds-tab"] },
  {
    term: "Overpass",
    definition: "A bridge or elevated structure that allows a road, railway, or pedestrian path to cross over another roadway or obstacle.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Post-Tensioned",
    definition: "A type of concrete construction where the concrete is tensioned after it has been poured, typically using steel tendons to enhance its strength.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Railroad",
    definition: "A system of tracks along which trains are guided, often including the associated infrastructure like stations and bridges.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Rebar",
    definition: "Short for 'reinforcing bar,' a steel bar used to strengthen concrete structures by providing tensile support.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Right-of-Way",
    definition:
      "The land designated for the roadway and its components, including the traveled way, shoulders, and any additional space required for construction and maintenance.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Riprap",
    definition: "Loose stone or rock material placed along embankments, shorelines, or riverbeds to prevent erosion.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Roadside",
    definition: "The area adjacent to the edge of a roadway, often including shoulders, ditches, and vegetation.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Sidewalk",
    definition: "A paved path for pedestrians along the side of a roadway, typically made of concrete or asphalt.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Slipforming",
    definition:
      "A construction method where concrete is poured continuously into a form that is gradually moved upwards as the concrete hardens. This technique is commonly used for constructing barrier walls. Horizontal cracking can sometimes occur over time due to shrinkage, temperature changes, or the weight of the concrete during curing. If the curing process isn't properly controlled, or if there is uneven setting or stress distribution, it can lead to the formation of cracks along the horizontal plane of the wall.",
    search: ``,
    discipline: "barrier wall design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Slopewall",
    definition: "A protective concrete or riprap covering placed on embankments to prevent soil erosion near bridges and culverts.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Snowdrift",
    definition: "A deep accumulation of snow formed by wind movement and deposition.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Snowplow",
    definition: "A vehicle or equipment used to remove snow from roadways and highways.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Snowstorm",
    definition: "A weather event characterized by heavy snowfall and reduced visibility.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Springline",
    definition:
      "The horizontal line at which the arch ring begins to curve from the abutment, marking the transition between the arch ring and the abutments. The horizontal distance between two springlines is the span distance.",
    search: ``,
    discipline: "arch design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Stormwater",
    definition: "Water from precipitation that flows over surfaces and is managed through drainage systems to prevent flooding and erosion.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Subdistrict",
    definition: "A smaller administrative division within a larger district, often used in transportation planning.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
    link: `https://entapps.indot.in.gov/dotmaps/districtmaps/`,
  },
  {
    term: "Superelevation",
    definition: "The banking of the roadway at curves to counteract centrifugal force and improve vehicle stability.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Underdrain",
    definition: "A drainage system placed below the surface of the ground to remove excess water and prevent soil erosion or saturation.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Underground",
    definition: "Refers to structures or utilities located below the surface, such as tunnels, pipelines, or electrical wiring.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Underpass",
    definition: "A passage that allows vehicles, pedestrians, or water to travel beneath a road, railway, or other obstruction.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Upstream",
    definition:
      "The direction opposite to the flow of water in a river, stream, or drainage system, moving toward the source or higher elevation. In engineering, it refers to structures, impacts, or conditions occurring before the point of interest in the flow path.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Waterline",
    definition: "The elevation or mark indicating the typical level of water in a stream, river, or other water body near a structure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Watershed",
    definition: "An area of land that drains all precipitation and runoff to a common outlet, such as a river, bay, or other body of water.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Wingwall",
    definition: "A sidewall extending from an abutment or headwall that helps retain soil and direct water flow away from a bridge or culvert.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
];

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
  {
    term: "Shear Crack",
    definition:
      "A diagonal crack in a structural member caused by shear forces, often forming near supports and extending upward toward the midpoint of the member. Shear cracks indicate significant structural stress and can compromise the integrity of the member if not addressed.",
  },
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

// List of needs: Welds,
/* 

Approach Span
Asphalt
Beam
Bearing
Bent
Berm
Box Beam
Built-Up Member
Cantilever
Cantilevered Span
Chalking
Compression
Concrete Girder
Construction Joint
Continuous Span
Corbel
Core Sample
Crack Arrest Hole
Cross-Section
Cut / Fill
Datum
Dead Load
Discharge
Elevation
Expansion
Eyebar
Fatigue
Fatigue Categories
Fatigue Crack
Flange
Fracture
Fracture Critical Member (FCM)
Geotextile
Girder
Grade
Hands-On
Hanger
Heave
Historic
Honeycombing
I-Beam
Integral Abutment
Interior Piers
Lateral Bracing
Latex-Modified Overlay
Live Load
Local Public Agency (LPA)
Local Scour
Longitudinal Cracking
Lower Chord
Map Cracking
Minor-Width Cracking
Moderate-Width Cracking
Moment
Normal Pool
Pattern Cracking
Prestressed
Prestressed Concrete
Profile
Q100 HW
Q100 Scour
Random Cracking
Relief Joint
Retrofit
Rigid Overlay
Runoff
Rutting
Sacrificial Concrete
Sawcut
Scour Analysis 
Scour Hole
Scour Vulnerability 
Semi-Integral Abutment 
Settlement
Shear Force
Shear Studs
Simple Span
Skew
Slope
Spread Box Beams 
Strand
Stringer
Superstructure
Surface Dulling
Surface Polishing 
Surface Thinning 
Suspension Bridge
Tendon
Tension
Thin Deck Overlay 
Tie Girder
Tining
Torsion
Tower
Transverse Cracking
Triaxial Restraint
Tributary
Truss
Upper Chord
Wear
Web
Wide Cracking
Wind Erosion

*/

const words = [
  {
    term: "Local Public Agency (LPA)",
    definition:
      "A government entity at the local level, such as a city, county, or municipality, responsible for the planning, design, construction, and maintenance of transportation infrastructure, including roads and bridges. LPAs handle more localized projects, often with funding or coordination from state or federal agencies.",
  },
  { term: "Live Load", definition: "The dynamic loads on a bridge caused by vehicles, pedestrians, wind, and other temporary forces." },
  { term: "Road School", definition: "A formal program or event focused on transportation and roadway engineering education." },

  // Channel Stuff
  { term: "Local Scour", definition: "The localized erosion around bridge piers, abutments, or other structures due to the flow of water, often weakening the foundation." },
  {
    term: "Streambed Scour",
    definition: "Erosion of the bed of a stream or river due to the force of flowing water, often exacerbated by the presence of bridge supports or other structures.",
  },
  { term: "Gully Erosion", definition: "The development of deep, wide channels (gullies) as a result of continuous water flow, often from rill erosion." },
];

const glossaryAllTerms = [
  {
    term: "AASHTO Manual",
    definition:
      "The term 'AASHTO Manual' means the American Association of State Highway and Transportation Officials (AASHTO) 'Manual for Bridge Evaluation' with Sections 1.4, 2.2, 4.2, 6, and 8, excluding the 3rd paragraph in Article 6B.7.1.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "AASHTO MBEI",
    definition:
      "AASHTO Manual for Bridge Element Inspection is a reference for standardized element definitions, element quantity calculations, condition state definitions, element feasible actions, and inspection conventions. This manual is used for element descriptions, quantity calculations, and condition state definitions.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Abrasion",
    definition: "Wearing or grinding away of material by water containing sand, gravel, or stones.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Abrasive Condition",
    definition: "The presence of granular material accompanied with a stream gradient or flow sufficient to cause movement of the granular material in the streambed.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Abutment",
    definition: "A structure that supports the end of a bridge and transfers loads to the foundation.",
    discipline: "bridge design",
    page: ["bridge-sub-pg9", "bridge-culvert-pg6"],
  },
  {
    term: "Adhesion",
    definition: "The ability of a sealant or material to bond to a surface and remain attached under stress or movement.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Aggradation",
    definition: "The process of sediment deposition that raises the level of a riverbed or streambed, often due to reduced water flow or velocity.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Anchor",
    definition:
      "A tendon, tendon bundle, rod, or bar element that is installed into the ground through the wall and anchored into stable material well behind potentially unstable soil, then tensioned and attached to the wall to provide additional resistance to earth pressures. Anchors are also referred to as Tie-Backs or Ground Anchors.",
    search: `What is "Anchor" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Annual Average Daily Traffic (AADT)",
    definition: "The total annual volume of traffic passing a point or segment of a highway in both directions divided by the number of days in a year.",
    search: `What is "Annual Average Daily Traffic" in transportation engineering?`,
    discipline: "transportation engineering",
    page: ["glossary-bridge-tab", "bridge-alignment-pg5"],
  },
  {
    term: "Annual Average Daily Truck Traffic (AADTT)",
    definition: "The total annual volume of truck traffic passing a point or segment of a highway in both directions divided by the number of days in a year.",
    search: `What is "Annual Average Daily Truck Traffic" in transportation engineering?`,
    discipline: "transportation engineering",
    page: ["glossary-bridge-tab", "bridge-alignment-pg5"],
  },
  {
    term: "Approach Roadway Alignment",
    definition:
      "The portion of the roadway leading up to a bridge, consisting of horizontal and vertical curves and grades. It provides a predictable path for drivers and ensures a smooth, safe transition to the bridge. Properly constructed approach roadways minimize abrupt changes in direction or slope, maintaining vehicle comfort and safety.",
    discipline: "bridge design",
    page: ["bridge-alignment-pg5"],
  },
  {
    term: "Approach Slab",
    definition: "A reinforced concrete slab that provides a smooth transition between the roadway and the bridge deck.",
    discipline: "bridge design",
    page: ["bridge-approach-pg7"],
  },
  {
    term: "Approach Span",
    definition:
      "A section of a bridge that extends from the abutment to the main structure, providing a transition for vehicles or pedestrians. It typically carries traffic over smaller obstacles before reaching the primary spans. These sections may experience differential settlement due to varying support conditions.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Arch Crown",
    definition: "The highest point of the arch, located at the center of the span, which experiences compressive forces that help distribute loads across the arch structure.",
    discipline: "bridge design",
    page: ["bridge-culvert-pg6"],
  },
  {
    term: "Arch Ring",
    definition: "The curved, topmost portion of an arch that carries the compressive load across the span of the bridge, ensuring structural stability.",
    search: ``,
    discipline: "arch design",
    page: ["glossary-compounds-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Arch Springing",
    definition: "The point or line at which the arch ring meets the abutments, where the arch begins to support the load from the bridge.",
    discipline: "bridge design",
    page: ["bridge-culvert-pg6"],
  },
  {
    term: "Armor (Two Steel Angles) Joint",
    definition:
      "A joint made of two steel angles designed to provide a protective barrier and allow some movement while maintaining a seal. Steel angles can suffer from corrosion, lack flexibility, and may lead to leakage if the sealant is improperly applied.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Armoring",
    definition:
      "The process of applying protective materials, such as riprap, concrete, or steel, to embankments, shorelines, or structures to prevent erosion. Armoring aims to resist the forces of water, wind, or ice, protecting the surface from degradation and maintaining stability.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Articulating Concrete Blocks",
    definition: "Pre-cast, interlocking concrete units used to form erosion-resistant surfaces.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Asphalt",
    definition:
      "A mixture of aggregates and bitumen used for paving roads and bridge decks. It provides a durable and flexible surface capable of withstanding heavy traffic loads. Over time, it can deteriorate due to weathering, UV exposure, and traffic stress.",
    search: ``,
    discipline: "highway design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Asphalt Plug Joint",
    definition: "A joint system that uses a flexible asphalt-based material to accommodate small movements while providing a smooth riding surface.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Asymmetric Barrier Design",
    definition:
      "A barrier design in which the shape, size, or orientation of the guardrail or barrier varies on each side to account for differing road conditions, clear zones, or traffic flow. Asymmetric barriers are commonly used in situations where one side of the barrier faces a more hazardous area, such as a steep drop-off, requiring enhanced protection.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Attenuators",
    definition: "Crash barriers designed to absorb and dissipate the energy of an impacting vehicle, reducing the severity of collisions.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Backfill",
    definition:
      "The material placed behind a bridge abutment or retaining wall to provide support, distribute loads, and aid in drainage. It is typically composed of soil, granular fill, or other engineered materials.",
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-sub-pg9", "bridge-culvert-pg6"],
  },
  {
    term: "Backwall",
    definition: "The vertical wall at the rear of an abutment that retains the roadway fill behind a bridge.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-sub-pg9"],
  },
  {
    term: "Backwater",
    definition: "The increase in the upstream water elevation resulting from an obstruction to flow, such as a bridge and/or embankment placed in the floodplain.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-channel-pg8"],
  },
  {
    term: "Barrel (Arch)",
    definition: "The curved, continuous part of an arch bridge, typically referring to the overall length or span of the arch that supports the load.",
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Barrel (Culvert)",
    definition: "The main body of a culvert structure that transports water beneath the roadway.",
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Beam",
    definition:
      "A long, horizontal structural element used to support loads. Beams are typically supported at their ends by columns, piers, or walls, and they carry loads across a span. They come in various shapes, including I-beams and box beams, and are crucial in bridge design.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Bearing",
    definition:
      "A component that supports the weight of a structure and allows it to transfer loads to a foundation. Bearings are essential in bridges, enabling the movement of elements due to temperature changes, settling, or traffic loads. They come in various forms, such as elastomeric or roller bearings.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Bearing Pad",
    definition: "A pad placed between the bridge superstructure and substructure to accommodate movement and distribute loads.",
    discipline: "bridge design",
    page: ["bridge-bearings-pg6"],
  },
  {
    term: "Bedload",
    definition: "The sediment that moves along the bottom of a river or streambed, contributing to scour and erosion.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Bedrock",
    definition: "The solid rock layer beneath soil, sand or silt.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Bendway Weirs",
    definition: "A type of river training structure used to guide water flow along a river bend, reducing bank erosion and scour.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Bent",
    definition:
      "A support structure typically composed of columns or piers that hold up a bridge or other similar structures. Bents are spaced at intervals along the length of a bridge to support beams or girders. They help distribute vertical and horizontal loads to the foundation.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Berm",
    definition:
      "A raised area of land or a narrow strip of earth, often used for drainage or to stabilize embankments. Berms are commonly found near bridge approaches or alongside roads to control water runoff. They can also serve as barriers for traffic safety.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Bin Wall",
    definition:
      "A type of gravity retaining wall consisting of bins typically fabricated from metal or concrete, filled with granular soil material, and then placed adjacent and atop of one another. The individual bins are typically placed in a non-interlocking manner.",
    search: `What is "Bin Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Bituminous",
    definition:
      "A material derived from petroleum or coal that is used primarily for road surfacing and in the construction of pavements and bridges. Bituminous materials, such as asphalt, are commonly used for their adhesive properties and ability to withstand heavy traffic loads. In bridge construction, bituminous materials can also be used for waterproofing or as part of the wearing surface.",
    search: ``,
    discipline: "materials engineering",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Blistering",
    definition: "Process of water infiltrating the first layer of a fiberglass-reinforced plastic large culvert structure causing bubbles to form near the surface.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },

  {
    term: "Breakaway Cable Terminal",
    definition:
      "A safety device used in guardrail systems designed to absorb impact energy by allowing the terminal to break away upon vehicle collision. It typically consists of a cable system that slows and redirects the vehicle, minimizing injury and damage while preventing the guardrail from becoming a rigid obstruction.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Box Beam",
    definition:
      "A type of beam that has a hollow rectangular or square cross-section, commonly used in bridge construction. Box beams are typically made of concrete or steel and are valued for their strength and ability to handle heavy loads. They are often used for highway or railroad bridges.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Breakaway Wooden Posts",
    definition:
      "Wooden posts used in guardrail systems designed to break away upon impact. These posts help to reduce the transfer of energy during a collision, minimizing vehicle damage and injury risk. Typically found in areas with low traffic volume where flexibility and safety are prioritized.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Bridge",
    definition:
      "A structure including supports erected over a depression or an obstruction, such as water, highway, or railway, and having a track or passageway for carrying traffic or other moving loads, and having an opening measured along the center of the roadway of more than 20 feet between under copings of abutments or spring lines of arches, or extreme ends of openings for multiple boxes; it includes multiple pipes, where the clear distance between openings is less than half of the smaller contiguous opening.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  { term: "Bridge Deck", definition: "The roadway surface of a bridge, typically made of concrete or steel.", discipline: "bridge design", page: ["bridge-deck-pg11"] },
  {
    term: "Bridge Elements",
    definition:
      "Individual parts of a bridge that are subsets of bridge components, inventoried separately as functional groups. Elements inventoried on the bridge include: the total quantity for each element, and the element quantity that exists in each of four condition states reported to the NBI in accordance with 23 U.S.C. 144(d)(2).",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Bridge Inspector’s Reference Manual",
    definition:
      "A comprehensive FHWA manual on procedures and techniques for inspecting and evaluating a variety of in-service highway bridges. This manual is available at: https://www.fhwa.dot.gov/bridge/nbis.cfm.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Bridge Railing",
    definition:
      "A protective barrier installed on bridges to prevent vehicles and pedestrians from leaving the structure. Designed to meet specific structural and safety requirements, it balances impact resistance, visibility, and load considerations.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Bridge Seat",
    definition: "The upper surface of an abutment or pier where bridge bearings rest, providing support for the superstructure.",
    discipline: "bridge design",
    page: ["bridge-sub-pg9"],
  },
  {
    term: "Built-Up Member",
    definition:
      "A structural component that is assembled from multiple smaller elements, such as plates or shapes, to form a larger unit. Built-up members are often used when single solid pieces are too large or impractical. They are common in steel bridge construction and provide flexibility in design.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Cable Barrier System",
    definition:
      "A flexible guardrail system consisting of multiple strands of tensioned steel cable supported by posts. Designed to absorb impact by deflecting vehicles, it is often more cost-effective and easier to repair than rigid barriers, making it a common choice for medians and roadsides.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Cantilever",
    definition:
      "A structural element that is supported at only one end, with the other end extending freely. It is used to support loads without requiring additional support at the free end. Cantilevers are common in bridge construction and allow for longer spans without intermediate supports.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Cantilever Semi-Gravity",
    definition:
      "A type of retaining wall that has a vertical stem wall that is structurally connected to a base slab, or footing. The base slab may be either bearing directly on underlying foundation soil or supported on piles. The vertical stem wall is typically reinforced concrete or reinforced, solid-grouted concrete masonry block, while the base slab is reinforced concrete. The combined weight of the retaining wall itself and the soil mass on the base slab provides overall stability against earth pressures, while the stem wall behaves as a vertical cantilever member that is reinforced at the base of the wall providing cantilever resistance to lateral earth pressures.",
    search: `What is "Cantilever Semi-Gravity" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Cantilevered Span",
    definition:
      "A bridge span that is supported at only one end, with the other end projecting out into space. This design allows for longer spans without needing support at the mid-point. Cantilevered spans are commonly used in bridges where supporting piers are difficult to place.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Cavitation",
    definition:
      "The formation of vapor bubbles in the water that collapse near a surface, leading to localized erosion, often seen around hydraulic structures like gates or valves.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Centerline",
    definition:
      "The yellow painted line, or the imaginary line, that separates traffic moving in opposite directions on a roadway. It serves as a visual guide for drivers, indicating the boundary between lanes of traffic going in opposite directions.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-alignment-pg5"],
  },
  {
    term: "Chalking",
    definition:
      "The formation of a powdery residue on the surface of materials, typically due to the degradation of a paint or coating. It occurs as a result of weathering, chemical reactions, or exposure to UV light. This residue can reduce the effectiveness of the coating and may require surface cleaning or repainting.",
    search: ``,
    discipline: "bridge paint",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Channel",
    definition: "A waterway used to transport water from one location to another.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Channel Bed",
    definition: "The bottom surface of a channel, often composed of rock, sediment, or soil, through which the flow of water moves.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Channel Migration",
    definition:
      "The natural process by which a river or stream shifts its course over time, typically due to erosion on one bank and deposition on the opposite bank. This movement can alter the shape and location of the channel, impacting surrounding areas.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Channel Profile",
    definition:
      "The shape and elevation of the riverbed or stream channel along its length, typically viewed in a cross-sectional view. It is an important factor in hydraulic engineering, as it helps determine the flow characteristics and stability of the channel. A channel profile can be influenced by factors such as sediment transport, erosion, and human interventions like dam construction or dredging.",
    search: ``,
    discipline: "hydraulic engineering",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Check Dams",
    definition: "Small structures used in rivers or streams to slow the flow of water and reduce erosion.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Clear Zone",
    definition: "The area along a roadway that is kept free of obstacles, designed to provide a safe space for vehicles that leave the road.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Closed Median",
    definition: "A median in which the area between the two roadways on the structure is bridged over and is capable of supporting traffic.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Complex Feature",
    definition:
      "Bridge component(s) or member(s) with advanced or unique structural members or operational characteristics, construction methods, and/or requiring specific inspection procedures. This includes mechanical and electrical elements of movable spans and cable-related members of suspension and cable-stayed superstructures.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Compression",
    definition:
      "A force that acts to reduce the size of a material or structural element. In bridge design, compression is typically applied to beams, columns, or other load-bearing elements. Materials subjected to compression may deform or buckle if the force exceeds their capacity.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Compression Seal (BS) Joint",
    definition:
      "A joint system that uses a flexible seal material that compresses to close the gap between two bridge sections. This joint prevents water and debris infiltration by maintaining a tight seal during movement. Over time, compression seals can lose flexibility, accumulate debris, and suffer from misalignment, leading to ineffective sealing and water leakage.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Concrete Barrier Wall",
    definition:
      "A rigid, high-impact-resistant concrete structure used to separate traffic or protect roadways and bridges. Common types include the New Jersey barrier, F-shape barrier, and single-slope barrier, each designed to manage vehicle impact and reduce rollover risk.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Concrete Girder",
    definition:
      "A reinforced concrete beam used to support loads in bridge construction. Concrete girders are typically pre-cast or cast in place and are known for their strength and durability. They are often used in conjunction with other structural elements, such as beams and piers.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Concrete Slope Paving",
    definition: "A protective layer of concrete used to stabilize slopes and prevent erosion.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Confluence",
    definition: "The point at which two or more streams or rivers meet, often forming a larger channel or river.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Construction Joint",
    definition:
      "A joint used in the construction process to separate different phases of work, typically where two sections of a structure meet. It allows for the continuation of construction while providing a defined break between sections, but may require additional treatment to prevent movement or water infiltration.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Continuous Span",
    definition:
      "A type of bridge span that extends over multiple supports, allowing the structure to distribute loads across more than one support. Continuous spans are often used for longer bridges and can reduce the overall deflection of the structure. They are more efficient than simple spans, particularly for longer distances.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Corbel",
    definition:
      "A projecting structure, typically made of masonry or concrete, used to support a beam or other horizontal element. Corbels are commonly found in bridges and buildings where a load-bearing surface is needed without a direct vertical support. They are often used in arches and bridge superstructures.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Core Sample",
    definition:
      "A sample of material, often concrete or soil, that is extracted from a structure or the ground for testing purposes. Core samples are used to determine the composition, strength, and quality of the material. They are especially important in bridge inspection to assess the condition of foundations and materials.",
    search: ``,
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Corrosion",
    definition: "Deterioration or dissolution of a material by chemical or electrochemical reaction with the surrounding environment.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Cover",
    definition: "The depth of backfill present between the top of a culvert structure and the base layer of the roadway.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Cover Plate",
    definition: "A steel plate welded or bolted to the flange of a beam or girder to increase its load-carrying capacity and reduce stress in high-moment regions.",
    discipline: "bridge design",
    page: ["bridge-super-pg9"],
  },
  {
    term: "Crack Arrest Hole",
    definition:
      'A drilled hole placed at the end of a crack to prevent it from propagating further. This method is commonly used in bridges and other structures to halt crack growth and prevent further structural damage. A 2" hole is recommended to capture the crack and prevent the crack from reinitiating.',
    search: ``,
    discipline: "bridge repair",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Crash Wall",
    definition: "A reinforced protective wall built around bridge piers or critical infrastructure to absorb and deflect vehicle impacts.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-sub-pg9"],
  },
  {
    term: "Creep",
    definition:
      "The gradual, long-term deformation of materials under a constant load. Creep is particularly relevant in concrete and steel structures, where continuous stress over time causes slow but permanent changes in shape. In bridge components, creep can lead to deflections or misalignments that, if not accounted for, may affect the bridge's overall performance and longevity.",
    search: ``,
    discipline: "material science",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Crest Vertical Curve",
    definition: "A curve in the roadway profile that connects an ascending grade to a descending grade, typically used to smooth transitions at the crest of a hill.",
    discipline: "bridge design",
    page: ["bridge-alignment-pg5"],
  },
  {
    term: "Crib Wall",
    definition:
      "A type of gravity retaining wall consisting of interlocking elements of timber, metal, or precast concrete arranged in the form of bins (or cribwork) and filled with granular soil material. Crib walls gain their stability not only from their weight but also to some extent from the strength of fill within the bins.",
    search: `What is "Crib Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Cross Bracing",
    definition: "A system of diagonal braces used to strengthen and stabilize the bridge structure, typically placed between girders or beams.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-super-pg9"],
  },
  {
    term: "Cross-Section",
    definition:
      "The shape and size of a structure or roadway as seen from a perpendicular viewpoint. In bridge design, the cross-section is used to analyze the overall geometry, including lane widths, shoulder sizes, and structural elements. It is critical for ensuring proper load distribution and safe vehicle movement.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Cross-Section",
    definition: "A view or diagram representing a vertical or horizontal cut through an object, structure, or terrain to show internal features.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Cross Slope",
    definition: "The slope of the roadway surface perpendicular to the direction of travel, designed to allow for proper drainage of water.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-alignment-pg5"],
  },
  {
    term: "Crossover",
    definition:
      "A designated area or path, often a short roadway, that allows vehicles to cross a median or divider to access opposing roadways or areas. Crossovers are commonly found on divided highways or interstates to provide access between different sides of the road.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-alignment-pg5"],
  },
  {
    term: "Crosswalk",
    definition:
      "A designated area on a road or street, marked to provide a safer path for pedestrians to cross. It typically consists of painted lines or markings to make the crossing more visible to drivers.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-alignment-pg5"],
  },
  {
    term: "Crumb Rubber",
    definition: "Recycled rubber from scrap tires, often used as an additive in asphalt to enhance flexibility and durability.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Culvert",
    definition:
      "A structure comprised of one or more barrels, beneath an embankment and designed structurally to account for soil-structure interaction. These structures are hydraulically and structurally designed to convey water, sediment, debris, and, in many cases, aquatic and terrestrial organisms through roadway embankments. Culvert barrels have many sizes and shapes and have inverts that are either integral or open, i.e. supported by spread or pile-supported footings. Many culverts take advantage of headwater submergence of the inlet to increase hydraulic efficiency and economy.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab", "glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Curtain Wall",
    definition:
      "A vertical barrier on a bridge, typically positioned perpendicular to the beams, designed to protect the interior of the bridge structure from debris, water, or other external elements. It is commonly used in areas like piers or abutments.",
    discipline: "bridge design",
    page: ["bridge-super-pg9"],
  },
  {
    term: "Curve Length",
    definition: "The length of a curved section of the roadway or bridge, typically measured along the centerline.",
    discipline: "bridge design",
    page: ["bridge-alignment-pg5"],
  },
  {
    term: "Cut / Fill",
    definition:
      "The process of removing soil (cut) or adding material (fill) to adjust the level of the ground to support a structure. In bridge construction, cut and fill are used to level the ground for foundations, approaches, and embankments. This process is crucial in creating a stable base for bridge supports.",
    search: ``,
    discipline: "bridge construction",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Cut Bank",
    definition: "The outer bank of a meander, where erosion is most active, often forming steep, vertical walls.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Damage Inspection",
    definition: "An unscheduled inspection to assess structural damage resulting from environmental factors or human actions.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Datum",
    definition:
      "A reference point or surface used for measurement in bridge design and construction. A datum allows engineers to establish consistent and accurate measurements for elevation, alignment, and other key factors. It serves as the baseline for determining the height and location of components.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Dead Load",
    definition:
      "The permanent, static load that a structure carries due to its own weight, including the weight of the bridge itself and any other permanent components. Dead loads are critical in bridge design as they must be accounted for in the overall load calculations to ensure stability and safety.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Deck Joint",
    definition: "A joint in the bridge deck that allows for expansion, contraction, and movement due to temperature changes or load variations.",
    discipline: "bridge design",
    page: ["bridge-deck-pg11"],
  },
  {
    term: "Deck Slab",
    definition: "The reinforced concrete slab forming the bridge deck, providing structural support for traffic loads.",
    discipline: "bridge design",
    page: ["bridge-deck-pg11"],
  },
  {
    term: "Deflection",
    definition: "Change in the original or specified vertical or horizontal measurement of a culvert structure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Deflector Plate",
    definition:
      "A plate installed on guardrails or barriers designed to direct or deflect the impact of a vehicle away from a hazard or obstruction. Typically used to redirect a vehicle’s path and reduce the risk of injury or damage during a collision.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Degradation",
    definition: "The process of erosion or removal of sediment from the riverbed or streambed, leading to a lowering of the watercourse or shoreline.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Delamination",
    definition: "Separation of a layer of concrete generally through internal cracking parallel to the concrete surface.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Delineators",
    definition:
      "Reflective markers mounted on flexible or rigid posts to guide drivers by indicating road alignment, lane boundaries, or hazards. They are commonly used along curves, ramps, and medians for enhanced nighttime and low-visibility conditions.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Designated Lead State",
    definition:
      "The State responsible for reporting the full bridge record for a border bridge. The Designated Lead State and Neighboring State are determined through agreement between the two border States.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Designed Scour Countermeasures",
    definition:
      "Engineered channel armoring specifically designed to address scour vulnerability. These measures use materials like concrete blocks, gabions, or riprap, carefully planned and calculated based on flow rate, water velocity, soil properties, and site conditions to effectively mitigate erosion and protect vulnerable areas.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Deterioration",
    definition: "Decline in quality over time due to chemical or physical wearing.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Diaphragm",
    definition: "A structural element that distributes loads across the width of a bridge, preventing distortion or movement of the deck.",
    discipline: "bridge design",
    page: ["bridge-super-pg9"],
  },
  {
    term: "Differential Settlement",
    definition: "Uneven settlement between footings or supports.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Discharge",
    definition:
      "The flow rate of water passing through a given point, typically measured in cubic feet per second (cfs) or cubic meters per second (cms). In the context of bridges, discharge refers to the volume of water that flows under or around a bridge, affecting its stability and potential for flooding.",
    search: ``,
    discipline: "bridge hydraulics",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Divided Highway",
    definition: "A highway with separated roadways for traffic traveling in opposite directions.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Double Deck Bridge",
    definition:
      "A bridge consisting of two decks, tiers, or levels. These bridges may incorporate highway lanes on both levels or highway lanes on one level and other transportation modes on the other level.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Downspout",
    definition: "A drainage component that directs water from the bridge deck to a designated drainage system.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-deck-pg11"],
  },
  {
    term: "Downstream",
    definition:
      "The direction in which water flows away from the source or higher elevation. In engineering, it refers to structures, impacts, or conditions occurring after the point of interest in the flow path.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Drilled Shaft",
    definition:
      "A structural element constructed using an auger to drill into a soil mass to remove soil and then filling the drilled void with concrete. Drilled shafts used for retaining wall construction are typically built as Secant Walls (consisting of overlapping or intersecting drilled shafts), Soldier Walls (consisting of spaced drilled shafts with lagging), or Tangent Walls (consisting of drilled shafts placed side-by-side and touching one another, but not overlapping).",
    search: `What is "Drilled Shaft" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Driver Expectation",
    definition:
      "Relates to the likelihood that a driver will respond to common situations in predictable ways that the driver has found successful in the past. A driver’s readiness to respond to situations, events, and information in predictable and successful ways.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Drop Structures",
    definition: "A river training feature that is placed in the channel to control the flow of water and reduce scouring effects on the streambed.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Earthwork",
    definition: "The process of moving, excavating, or compacting soil, rock, or other materials to prepare a site for construction or engineering projects.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Eastbound, Westbound, Northbound, Southbound",
    definition: "Moving in the indicated direction, typically referring to traffic lanes or transportation routes.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Efflorescence",
    definition:
      "A deposit on concrete, brick, stone, or mortar caused by crystallization of carbonates brought to the surface by moisture in the masonry or concrete. Efflorescence is a combination of calcium carbonate leached out of the cement paste and other recrystallized carbonate and chloride compounds.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab", "glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Element Level Bridge Inspection Data",
    definition: "Quantitative condition assessment data, collected during bridge inspections, that indicates the severity and extent of defects in bridge elements.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Elevation",
    definition:
      "The vertical height of a point or structure relative to a given reference, often the mean sea level or a local datum. Elevation is a key consideration in bridge design, ensuring that the structure is above potential flood levels and aligns with surrounding landforms. It affects the overall profile of the bridge.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Embankment",
    definition: "Soil constructed above the natural ground surface that encases a culvert structure and supports a roadway.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "End Treatment",
    definition: "Specially designed components at the end of guardrails that minimize the risk of injury or vehicle damage during impact.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Engineered Wood",
    definition:
      "Products that utilize veneers, plywood, reconstituted wood panel products, or engineered wood assemblies. Some engineered wood products include glued laminated timber, I-joists, and laminated veneer lumber.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Erosion",
    definition: "The gradual removal of soil, rock, or other surface materials by natural forces such as wind, water, or ice. Scour is a type of erosion.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6", "bridge-channel-pg8"],
  },
  {
    term: "Exfiltration",
    definition: "The process of water exiting a culvert structure and entering the surrounding soil through unintended openings.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Expansion",
    definition:
      "The increase in size of materials or structural components due to temperature changes, moisture variation, or other environmental factors. Expansion must be accounted for in bridge design to prevent damage such as buckling or cracking. Expansion joints are commonly used to accommodate these changes.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Expansion Joint",
    definition:
      "A joint designed to accommodate movement in a structure due to thermal expansion, contraction, or other forces, preventing damage by allowing parts of the structure to shift independently.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9", "bridge-deck-pg11"],
  },
  {
    term: "Extrados",
    definition: "The outer surface of the arch ring, which is under tension and provides the structural shape for the arch.",
    discipline: "bridge design",
    page: ["bridge-culvert-pg6"],
  },
  {
    term: "Eyebar",
    definition:
      "A flat steel bar, often used in suspension bridges, which is connected at its ends to form a link in the structure. Eyebars are typically used in tension members where high strength is required to support loads. They are often seen in the main cables of suspension bridges.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Fatigue",
    definition:
      "The weakening of material over time due to repeated loading cycles. In bridges, fatigue can lead to crack formation and eventual failure of critical components. Fatigue is a major concern in areas subject to heavy traffic or fluctuating loads, requiring careful design and material selection.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Fatigue Categories",
    definition:
      "Classification of materials and structural components based on their resistance to fatigue. These categories help engineers determine the expected life span of a bridge component under repeated loading conditions. Higher categories indicate better resistance to fatigue and longer durability under cyclic loading.",
    search: ``,
    discipline: "FHWA",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Fatigue Crack",
    definition:
      "A crack that forms in a material due to repeated stress or load cycles, even when the stress levels are below the material's ultimate tensile strength. Fatigue cracks are a common cause of failure in bridges, particularly in high-stress regions such as welds or joints.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Federal Information Processing Series (FIPS)",
    definition:
      "A system of numeric and/or alphabetic coding issued by the National Institute of Standards and Technology (NIST), an agency of the US Department of Commerce. FIPS codes are assigned for a variety of geographic entities including American Indian and Alaska Native Areas, Hawaiian home lands, congressional districts, counties, county subdivisions, metropolitan areas, places, and states. FIPS codes were discontinued by NIST in 2005, but the Census Bureau continues to maintain and issue codes for the geographic entities covered.",
    source: "http://www.fhwa.dot.gov/bridge/nbi.cfm",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Federal Lands",
    definition:
      "Lands under the jurisdiction of Federal agencies. FHWA’s Federal Land Management Agency partners currently include: National Park Service (NPS); USDA Forest Service (Forest Service); U.S. Fish and Wildlife Service (USFWS); Bureau of Indian Affairs (BIA) and Tribal Governments; Bureau of Land Management (BLM); Department of Defense (DOD); U.S. Army Corps of Engineers (USACE); and Bureau of Reclamation (BOR).",
    source: "https://highways.dot.gov/federal-lands/about",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Ferry Transfer Bridge",
    definition: "A bridging structure that enables vehicular movement from a dock or approach roadway to a ferry.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Fiber Reinforced Polymer Composite (FRP)",
    definition:
      "Also known as fiberglass reinforced plastic, FRP is a composite made from glass fiber or carbon fiber reinforcement in a plastic (polymer) matrix. With reinforcement of the plastic matrix, a wide variety of physical strengths and properties can be designed into the material. Additionally, the type and configuration of the reinforcement can be selected, along with the type of polymer and additives within the matrix.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Flange",
    definition:
      "A projecting edge or lip that extends from a structural element, typically a beam or girder. The flange provides additional strength and stability to the element by resisting bending and shear forces. In bridges, flanges are commonly found on I-beams and other structural members.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Flare",
    definition:
      "A curved or angled section of a guardrail system at the end of a barrier, designed to gradually direct traffic away from the hazard or prevent vehicles from impacting the end of the guardrail. Commonly used at the ends of roadways, ramps, or bridges for safer transitions.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Flexible Culvert",
    definition: "A culvert that relies on a consistent application of pressure from the surrounding soil envelope to develop structural strength.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Floating Bridge",
    definition: "A bridge supported by floating on pontoons moored to the lakebed or riverbed; a portion may be removable to facilitate navigation.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Floodplain",
    definition: "The flat, often expansive area adjacent to a channel that is subject to periodic flooding, typically formed by sediment deposition during high-water events.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-channel-pg8"],
  },
  {
    term: "Flow Line",
    definition: "The lowest point within a channel, pipe, or culvert where water is expected to flow under normal conditions.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-channel-pg8"],
  },
  { term: "Footing", definition: "The foundation element of a bridge that distributes loads to the ground.", discipline: "bridge design", page: ["bridge-sub-pg9"] },
  {
    term: "Fracture",
    definition:
      "The breaking or cracking of a material under stress, often resulting in a loss of structural integrity. In bridges, fractures can occur in critical components due to excessive loading, fatigue, or environmental factors. Proper monitoring and maintenance are necessary to prevent fractures from leading to failure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Fracture Critical Member (FCM)",
    definition:
      "A bridge component whose failure would lead to the collapse of the entire structure. FCMs are typically non-redundant elements that do not have backup support in case of failure. These members require special attention during inspections and maintenance to ensure the safety of the bridge. FCMs are now called Nonredundant Steel Tension Members (NSTMs).",
    search: ``,
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Freeboard",
    definition: "The clearance between the bottom of the superstructure and the design high-water elevation.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-channel-pg8"],
  },
  {
    term: "Gabion",
    definition:
      "A cage, wire container, cylinder, or similar type box filled with rocks, broken concrete, or granular soil used in retaining wall and erosion control applications.",
    search: `What is "Gabion" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Gabion Mattresses",
    definition: "A riverbank protection system made of mesh baskets filled with rocks, providing stability and preventing erosion.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Galvanization",
    definition: "Application of zinc coating along the surface of a structure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Geotextile",
    definition:
      "A synthetic material used in geotechnical engineering to reinforce soil, separate materials, or provide drainage. Geotextiles are often used in bridge approaches, embankments, and foundations to improve the stability of the structure. They help control erosion and prevent soil movement under load.",
    search: ``,
    discipline: "bridge construction",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Girder",
    definition:
      "A horizontal structural element used to support the load of a bridge, typically made of steel, concrete, or composite materials. Girders are one of the primary load-bearing components in bridge design, often placed parallel to the span of the bridge. They are supported by piers and abutments, distributing the weight to other structural elements.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  { term: "Girder Line", definition: "The alignment of girders supporting the bridge deck.", discipline: "bridge design", page: ["bridge-super-pg9"] },
  {
    term: "Grade",
    definition:
      "The slope or incline of a road, bridge, or other surface. In bridge construction, grade refers to the angle of the roadway relative to the horizontal plane. Proper grading ensures water drainage and provides safe, efficient movement for vehicles.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Gravity Wall",
    definition:
      "A wall typically built with stone masonry, mass concrete, or other heavy material that depends on its overall mass, or weight, to resist earth pressure from behind.",
    search: `What is "Gravity Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Groundwater",
    definition: "Water located beneath the Earth's surface in soil pores and rock formations, supplying wells and springs.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Grout-Filled Mats",
    definition: "A protective matting system filled with grout to stabilize riverbanks and prevent erosion.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Grouted Riprap",
    definition: "A type of riprap that is bonded together with grout to form a more stable, cohesive surface.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Guardrail Post",
    definition: "Vertical supports that hold the rail in place, typically made of steel, wood, or concrete and anchored in the ground.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Guardrail Rail",
    definition: "The main horizontal part of the guardrail that absorbs the force of a collision. It can be W-beam, box beam, or thrie beam, depending on the type.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Guide Banks",
    definition: "A type of river training countermeasure designed to direct flow away from the banks and toward the center of the channel.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Guide Rail Brackets",
    definition: "Attach the rail to the posts, allowing for flexing and movement to absorb impact.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Hairline Cracks",
    definition:
      "Very fine, narrow cracks typically less than or equal to 0.016 inches wide that appear in the surface of concrete. These cracks are often the result of shrinkage, temperature changes, or minor surface stress. While generally not structurally significant, hairline cracks may allow water infiltration, which could lead to further deterioration if not addressed.",
    search: ``,
    discipline: "bridge deck maintenance",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Hands-On",
    definition:
      "An approach or technique involving direct involvement with physical tasks rather than relying on theoretical knowledge or remote actions. In the context of bridge inspections, a hands-on approach includes physically examining components, performing tests, and conducting repairs rather than relying on visual or computational analysis alone.",
    search: ``,
    discipline: "bridge inspection",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Hands-On Inspection",
    definition: "Inspection within arm’s length of the member. Inspection uses visual techniques that may be supplemented by nondestructive evaluation techniques.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Hanger",
    definition:
      "A structural element used to support a bridge component, typically a suspension or cable-stayed bridge's cable or beam. The hanger transfers the load from the bridge deck to the main supporting cables or structure. They are designed to withstand tensile forces and are usually made from steel or other durable materials.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Headcutting",
    definition: "The erosion of the upstream end of a channel, often occurring when a sudden drop in elevation (such as a waterfall) leads to rapid erosion and deepening.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Headwall",
    definition: "A retaining wall at the end of a culvert or bridge opening that stabilizes the structure and prevents erosion.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-sub-pg9"],
  },
  {
    term: "Heave",
    definition:
      "The upward movement or displacement of a bridge or road surface, typically caused by soil expansion or freezing. Heave can lead to misalignment of bridge components and affect the ride quality of the bridge deck. It is usually related to changes in soil moisture or temperature.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Highway",
    definition:
      "The term 'highway' includes: A) a road, street, and parkway; B) a right-of-way, bridge, railroad-highway crossing, tunnel, drainage structure, sign, guardrail, and protective structure, in connection with a highway; and C) a portion of any interstate or international bridge or tunnel and the approaches thereto, the cost of which is assumed by a State transportation department, including such facilities as may be required by the United States Customs and Immigration Services in connection with the operation of an international bridge or tunnel.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Highway Performance Monitoring System (HPMS)",
    definition:
      "A national level highway information system that includes data on the extent, condition, performance, use, and operating characteristics of the nation's highways.",
    source: "http://www.fhwa.dot.gov/policyinformation/hpms/fieldmanual/",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Historic",
    definition:
      "A designation for a bridge or structure that has significant historical, cultural, or architectural value. Historic bridges are often subject to preservation guidelines to maintain their integrity for future generations. These structures are sometimes exempt from modern standards but are carefully monitored to ensure safety.",
    search: ``,
    discipline: "bridge preservation",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Honeycombing",
    definition: "The appearance of voids or gaps within concrete due to improper mixing or poor compaction. It often occurs near the surface of poured concrete.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Horizontal Alignment",
    definition: "The layout of the roadway in the horizontal plane, including curves, tangents, and transitions.",
    discipline: "bridge design",
    page: ["bridge-alignment-pg5"],
  },
  {
    term: "Horizontal Curve Radius",
    definition: "The radius of a curve in the roadway or bridge, determining the sharpness or gentleness of the curve.",
    discipline: "bridge design",
    page: ["bridge-alignment-pg5"],
  },
  {
    term: "Hot Mix Asphalt (HMA)",
    definition: "A combination of asphalt binder and aggregates heated and mixed to form a durable pavement material.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Hydraulic Review",
    definition:
      "A review by a person qualified to evaluate the field-observed hydraulic conditions and make a determination of the impacts of the conditions on the performance of the channel, channel protection, or when working with structural staff, determine the scour vulnerability of a bridge member or entire bridge. Hydraulic reviews may include a review of the field inspection notes and photographs, review of as-built plans, scour appraisals, and scour POAs, or performance of a hydraulic analysis as deemed appropriate.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "I-Beam",
    definition:
      "A structural beam with a cross-section resembling the letter 'I.' I-beams are commonly used in bridge design due to their strength and efficiency in carrying loads. The vertical web resists shear forces, while the horizontal flanges resist bending moments.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "In-Depth Inspection",
    definition:
      "A close-up, detailed inspection of one or more bridge members located above or below water, using visual or nondestructive evaluation techniques as required to identify any deficiencies not readily detectable using routine inspection procedures. Hands-on inspection may be necessary at some locations. In-depth inspections may occur more or less frequently than routine inspections, as outlined in bridge-specific inspection procedures.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Indiana Type 5 Aluminum Bridge Railing",
    definition:
      "An aluminum bridge railing system used in Indiana, featuring horizontal aluminum rails supported by vertical posts. Designed for durability, corrosion resistance, and visibility, it provides both vehicular and pedestrian protection while maintaining a lightweight structure.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Infiltration",
    definition: "The process of water or backfill material entering the culvert structure through unintended openings.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Inherent Defect",
    definition:
      "Not indicative of damage or deterioration but is either a characteristic of the material or the result of normal construction practices. Examples include insignificant width fabrication, shrinkage, and temperature cracks, pop-outs, or shallow edge chips and spalls.",
    search: `What is an "Inherent Defect" in bridge design?`,
    discipline: "bridge design",
    page: ["glossary-defects-tab"],
  },
  {
    term: "Initial Inspection",
    definition:
      "The first inspection of a new, replaced, or rehabilitated bridge. This inspection serves to record required bridge inventory data, establish baseline conditions, and establish the intervals for other inspection types.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Inlet",
    definition: "The initial 5 ft of the upstream end of a culvert structure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Inspection Date",
    definition: "The date on which the field portion of the bridge inspection is completed.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Inspection Due Date",
    definition: "The last inspection date plus the current inspection interval.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Inspection Report",
    definition: "The document which summarizes the bridge inspection findings, recommendations, and identifies the team leader responsible for the inspection and report.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Instability",
    definition: "The condition in which a channel or bank is prone to failure due to erosion, over saturation, or improper structural design.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Integral Abutment",
    definition:
      "A type of abutment that is directly connected to the bridge deck, eliminating the need for expansion joints between the deck and the abutment. Integral abutments allow for movement due to thermal expansion and contraction, reducing maintenance needs and improving structural integrity.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Integral Abutment (IA or 1A) Joint",
    definition:
      "A design where the abutment and superstructure are connected without a physical joint, often functioning as a construction joint. While it minimizes maintenance, it may not accommodate thermal expansion or contraction, potentially leading to cracking and structural deformation over time.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Interior Piers",
    definition:
      "The piers located between the abutments that support the span of a bridge. Interior piers are typically used in multi-span bridges and are designed to withstand compressive forces from the superstructure. Proper design of interior piers is essential for maintaining bridge stability and load distribution.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Internal Redundancy",
    definition:
      "A redundancy that exists within a primary member cross-section without load path redundancy, such that fracture of one component will not propagate through the entire member, is discoverable by the applicable inspection procedures, and will not cause a portion of or the entire bridge to collapse.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Intrados",
    definition: "The inner surface of the arch ring, which is in compression and typically carries the load from the bridge deck.",
    discipline: "bridge design",
    page: ["bridge-culvert-pg6"],
  },
  {
    term: "Inventory Data",
    definition: "All data reported to the National Bridge Inventory in accordance with the Specifications for the National Bridge Inventory.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Invert",
    definition: "The bottom or lowest region along the internal surface of a pipe.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Isolated Defects",
    definition: "Defect is visible in one or few incident locations.",
    search: `What are "Isolated Defects" in bridge inspection?`,
    discipline: "bridge inspection",
    page: ["glossary-defects-tab"],
  },
  {
    term: "Jacking Frame",
    definition:
      "A diaphragm, typically found on a steel beam or steel girder bridge, designed to accommodate the loads required to support the bridge during bearing replacement. These are typically only included at support locations and will be more robust than a typical diaphragm.",
    discipline: "bridge design",
    page: ["bridge-super-pg9"],
  },
  {
    term: "Jobsite",
    definition: "A location where construction, maintenance, or engineering work is actively taking place.",
    search: ``,
    discipline: "transportation engineering",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Joint",
    definition: "Connection where two sections of a culvert structure meet. Additional material may be present to ensure a watertight connection between sections.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Joint Sealant",
    definition: "A material used to fill and seal joints to prevent water infiltration and debris accumulation.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Keystone",
    definition: "The central, topmost stone or concrete block of an arch that locks the other blocks or sections in place, crucial for the arch’s structural integrity.",
    search: ``,
    discipline: "arch design",
    page: ["glossary-compounds-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Lagging",
    definition:
      "Structural members that are typically timber, steel, or concrete that are installed behind, between or in front of piles or drilled shafts to support and retain the soil material between spaced piles. Timber lagging is typically used for temporary construction while steel or concrete lagging is typically used for permanent construction.",
    search: `What is "Lagging" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "LaPorte",
    definition: "The INDOT district name and county name are written as one word with a capital P: LaPorte. The city name is written as two words: La Porte.",
    search: `INDOT LaPorte District`,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
    link: `https://entapps.indot.in.gov/dotmaps/districtmaps/`,
  },
  {
    term: "Large Culvert",
    definition: "A culvert structure with a measured span length between 4 ft and 20 ft as measured perpendicular to the centerline of the parent roadway.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Lateral Bracing",
    definition:
      "Structural elements used to resist lateral forces, such as wind or seismic loads, that may cause a bridge to sway or shift horizontally. Lateral bracing provides stability by tying together various parts of the bridge structure. It helps prevent lateral buckling and ensures the overall safety of the bridge under dynamic loads.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Latex-Modified Overlay",
    definition:
      "A type of concrete overlay that uses latex additives to improve bonding strength and durability. Latex-modified overlays are applied to bridge decks to protect against wear, water infiltration, and freeze-thaw damage. They enhance the longevity of the surface while maintaining the structural integrity of the bridge deck.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Legal Load",
    definition:
      "The maximum load for each vehicle configuration, including the weight of the vehicle and its payload, permitted by law for the State in which the bridge is located.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Legal Load Rating",
    definition:
      "The maximum permissible legal load to which the structure may be subjected with the unlimited numbers of passages over the duration of a specified bridge evaluation period. Legal load rating is a term used in Load and Resistance Factor Rating method.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Legally Enforceable Load Posting",
    definition: "Posting of a load restriction sign (or signs) at a bridge in accordance with State law that is legally enforceable by law enforcement personnel.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Line of Sight",
    definition: "The unobstructed view along the roadway, crucial for driver safety, allowing the driver to see upcoming curves or obstacles.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-alignment-pg5"],
  },
  {
    term: "Linear Referencing System (LRS)",
    definition:
      "Provides a geospatial representation of a road network through a set of procedures for determining and retaining a record of specific points along a highway. Typical methods used are mile point, milepost, reference point, or link node. LRS data are required for the annual Highway Performance Monitoring System (HPMS) data submittal from the States to FHWA.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Live Load",
    definition:
      "The dynamic load that a structure experiences due to the weight of vehicles, pedestrians, or other moving elements. Live loads vary based on traffic volume, vehicle types, and environmental factors. They are an essential consideration in bridge design, influencing the size and strength of structural components.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Load-Bearing",
    definition: "A structural element, such as a wall or beam, that supports and transfers loads from above to the foundation or other supporting members.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Load Path Redundancy",
    definition:
      "A redundancy that exists based on the number of primary load-carrying members between points of support, such that fracture of the cross-section at one location of a member will not cause a portion of or the entire bridge to collapse.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Load Posting",
    definition:
      "Regulatory signs installed in accordance with the 'Manual on Uniform Traffic Control Devices' and State or local law which represent the maximum vehicular live load which the bridge may safely carry.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Load Rating",
    definition:
      "The analysis to determine the safe vehicular live load carrying capacity of a bridge using bridge plans and supplemented by measurements and other information gathered from an inspection.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Local Public Agency (LPA)",
    definition:
      "An entity, such as a city, county, or local government agency, responsible for managing public infrastructure, including bridges, within a defined geographic area. LPAs typically oversee the planning, funding, and maintenance of bridge projects. They work within federal and state guidelines to ensure safe and functional transportation systems.",
    search: ``,
    discipline: "bridge management",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Local Scour",
    definition:
      "The localized erosion of riverbed or streambed material around bridge foundations, typically caused by water flow. Local scour can undermine the stability of a bridge foundation, potentially leading to structural failure if not addressed. Monitoring and mitigating local scour are essential in bridge design and maintenance, especially in waterways with strong currents.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Longitudinal Cracking",
    definition:
      "Cracks that form parallel to the direction of the bridge deck or roadway, often due to temperature fluctuations, shrinkage, or movement of the underlying structure. These cracks can lead to water infiltration and further deterioration of the bridge's surface. They require monitoring and sometimes repair to prevent further structural damage.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Longitudinal Stiffener",
    definition: "A stiffener placed parallel to the length of a structural member to improve its resistance to bending and buckling under load.",
    discipline: "bridge design",
    page: ["bridge-super-pg9"],
  },
  {
    term: "Major Defect",
    definition:
      "Damage or deterioration is significant, and the strength or performance is adversely affected. Examples would be similar in type to moderate defects but of greater magnitude and severity that, upon reporting, would require a structural or geotechnical review.",
    search: `What is a "Major Defect" in bridge inspection?`,
    discipline: "bridge inspection",
    page: ["glossary-defects-tab"],
  },
  {
    term: "Major Rehabilitation",
    definition: "The major work required to restore the structural integrity or serviceability of a bridge as well as work necessary to correct major safety defects.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Map Cracking",
    definition:
      "A pattern of shallow, interconnected cracks in the surface of concrete, resembling a map or network. These cracks are often caused by drying shrinkage, temperature changes, or improper curing. While map cracking does not usually compromise structural integrity, it can affect the appearance and durability of the surface.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Meander",
    definition: "A curve or bend in a channel, typically occurring in low-gradient rivers or streams, where the water flow erodes one bank and deposits sediment on the other.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Mecahnically Stabilzed Earth (MSE) Wall",
    definition:
      "Mechanically stabilized earth, sometimes referred to as reinforced soil, is a soil mass embankment constructed with artificial reinforcing that typically consist of either geosynthetics or steel material. When used as retaining walls, MSE walls are designed as gravity walls built with multiple layers of horizontal reinforcing in granular backfill connected to wall face components.",
    search: `What is "MSE" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab", "bridge-sub-pg9"],
  },
  {
    term: "Minor Defect",
    definition:
      "Damage or deterioration has initiated but is not considered significant. Examples include minimal to moderate width cracks with no efflorescence or rust stains, shallow depth spalls with no exposed reinforcing steel, or speckled surface rust.",
    search: `What is a "Minor Defect" in bridge inspection?`,
    discipline: "bridge inspection",
    page: ["glossary-defects-tab"],
  },
  {
    term: "Minor Rehabilitation",
    definition:
      "The minor work required to preserve or restore the structural integrity of a bridge or serviceability as well as the work necessary to correct minor safety defects.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Minor-Width Cracks",
    definition: "Cracks between 0.02 and 0.03 inches in width that appear in the surface of concrete.",
    search: ``,
    discipline: "bridge deck maintenance",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Moderate Defect",
    definition:
      "Damage or deterioration is significant, but the strength or performance is not yet adversely affected. Examples include moderate width cracks with either efflorescence or rust stains, spalls with exposed reinforcing steel, or more pronounced surface rust and corrosion with either pitting or delamination. Defects or deterioration at this level may not yet warrant a structural or geotechnical review.",
    search: `What is a "Moderate Defect" in bridge inspection?`,
    discipline: "bridge inspection",
    page: ["glossary-defects-tab"],
  },
  {
    term: "Moderate-Width Cracks",
    definition: "Cracks between 0.04 and 0.06 inches in width that appear in the surface of concrete.",
    search: ``,
    discipline: "bridge deck maintenance",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Modular Block Wall",
    definition:
      "A gravity wall built using interlocking blocks that are typically masonry, concrete, or concrete masonry units (CMU) to resist earth pressure from behind. Some modular block walls may also use artificial reinforcing similar to MSE walls.",
    search: `What is "Modular Block Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Modular Joint",
    definition:
      "A joint system made of prefabricated components designed to allow movement while maintaining a seal, often used in large bridges with high movement requirements. Modular joints are complex systems with many moving parts, making them more prone to malfunction and requiring expensive installation and maintenance.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Moment",
    definition:
      "A measure of the rotational force or bending caused by external loads applied to a structure, such as a bridge. The moment acts to bend or rotate a structural element, such as a beam or girder, and is crucial in determining the strength and design requirements of bridge components. It is typically expressed in units of force multiplied by distance.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Multi-Level Interchange",
    definition:
      "A multilevel highway intersection or junction of intersecting roads and bridges arranged so that vehicles may move from one road to another without crossing the streams of traffic.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "National Bridge Inspection Standards (NBIS)",
    definition:
      "Federal regulations establishing national policy regarding bridge inspection organization, bridge inspection frequency, inspector qualifications, inventory requirements, report formats, and inspection and rating procedures, as described in 23 CFR 650 Subpart C.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "National Bridge Inventory (NBI)",
    definition:
      "An aggregation of State transportation department, Federal agency and Tribal government bridge and associated highway data maintained by the Federal Highway Administration (FHWA). The NBIS requires each State transportation department, Federal agency, and Tribal government to prepare and maintain a bridge inventory, which must be submitted to FHWA in accordance with these specifications on an annual basis or whenever requested.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "National Highway Freight Network (NHFN)",
    definition:
      "A national highway freight network established by FHWA to assist States in strategically directing resources toward improved movement of freight on highways. The NHFN consists of a Primary Highway Freight System, the portions of the Interstate System not designated as part of the Primary Highway Freight System, and Critical Rural Freight Corridors and Critical Urban Freight Corridors designated by states.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Nationally Certified Bridge Inspector",
    definition: "An individual meeting the team leader requirements of 23 CFR 650.309(b).",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Navigable Waterway",
    definition:
      "Navigable waterways are determined by the Commandant of the United States Coast Guard. Title 33 of the Code of Federal Regulations, Section 2.36, defines navigable waterways as consisting of territorial seas of the United States, internal waters subject to tidal influence, and internal waters not subject to tidal influence that are used for interstate or foreign commerce or determined capable of improvement for such use.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Neighboring State",
    definition:
      "The State responsible for reporting an abbreviated bridge record for a border bridge. The Designated Lead State and the Neighboring State are determined through agreement between the two border States.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Nominal",
    definition: "Referring to an approximate or standard value, typically used when the exact measurement may vary slightly but is considered close to the stated value.",
    search: ``,
    discipline: "bridge design",
    page: ["bridge-deck-pg11"],
  },
  {
    term: "Nonredundant Steel Tension Member (NSTM)",
    definition:
      "A primary steel member fully or partially in tension, and without load path redundancy, system redundancy, or internal redundancy, whose failure may cause a portion of or the entire bridge to collapse.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Nonredundant Steel Tension Member (NSTM) Inspection",
    definition: "A hands-on inspection of a nonredundant steel tension member.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Normal Pool",
    definition:
      "The usual or standard water level in a reservoir or river at a given time under typical flow conditions. The normal pool level is important in bridge design as it determines the height of the water under the structure and influences factors such as scour and clearance. This level may vary depending on seasonal fluctuations or operational factors.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Nosing",
    definition:
      "The rounded or beveled edge at the intersection of a joint, such as an expansion or contraction joint. It helps protect the joint from damage and wear, allowing for smoother transitions between sections and reducing the risk of cracking by distributing stress more evenly.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Off-Ramp",
    definition: "A roadway that allows vehicles to exit a highway or freeway.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-alignment-pg5"],
  },
  {
    term: "On-Ramp",
    definition: "A roadway that allows vehicles to enter a highway or freeway.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-alignment-pg5"],
  },
  {
    term: "Open Joint",
    definition:
      "A simple, unsealed joint that allows for unrestricted movement but leaves the bridge vulnerable to water and debris infiltration. Open joints are prone to water infiltration, debris accumulation, and additional structural stress due to the lack of sealing.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Operating Rating",
    definition:
      "The maximum permissible live load to which the structure may be subjected for the load configuration used in the load rating. Allowing unlimited numbers of vehicles to use the bridge at operating level may shorten the life of the bridge. Operating rating is a term used in either Allowable Stress or Load Factor Rating method.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Orthotropic Deck",
    definition:
      "An orthotropic deck consists of a flat, thin steel plate stiffened by a series of closely spaced longitudinal ribs at right angles to the floor beams. The deck acts integrally with the steel superstructure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Outlet",
    definition: "The final 5 ft of the downstream end of a culvert structure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Overpass",
    definition: "A bridge or elevated structure that allows a road, railway, or pedestrian path to cross over another roadway or obstacle.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Parabolic Offsets",
    definition:
      "Curved offsets used in guardrail and barrier systems to gradually redirect vehicles and reduce impact forces. The parabolic shape helps to guide the vehicle away from the hazard in a controlled manner, improving safety and minimizing the risk of severe collisions.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },

  {
    term: "Parapet",
    definition:
      "A low protective wall along the edge of a bridge, roadway, or structure, designed to prevent vehicles or pedestrians from falling off. It can be made of concrete, masonry, or metal and may also serve as a structural or aesthetic element.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Pattern Cracking",
    definition:
      "The occurrence of a series of cracks that form a recognizable pattern, often due to external factors like temperature fluctuations, moisture changes, or material shrinkage. Pattern cracking is typically superficial but may require attention if it leads to further degradation of the material. It can affect both asphalt and concrete surfaces.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Pier",
    definition:
      "A vertical support structure that transfers loads from the bridge superstructure to the foundation. Piers are typically located between abutments to support spans over water, roadways, or other obstacles.",
    discipline: "bridge design",
    page: ["bridge-culvert-pg6"],
  },
  {
    term: "Pier Cap",
    definition: "The upper part of a bridge pier that distributes loads from the superstructure to the pier columns.",
    discipline: "bridge design",
    page: ["bridge-sub-pg9"],
  },
  {
    term: "Pier Wall",
    definition: "A vertical structural element that supports bridge spans and transfers loads to the foundation, often part of a pier system.",
    discipline: "bridge design",
    page: ["bridge-sub-pg9"],
  },
  {
    term: "Pile",
    definition: "A structural element driven or drilled into the ground to resist vertical and/or horizontal loads. Piles are usually rolled steel shapes, concrete, or timber.",
    search: `What is "Pile" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab", "bridge-sub-pg9"],
  },
  {
    term: "Pile Cap",
    definition: "A reinforced concrete slab that connects multiple foundation piles, distributing loads more effectively.",
    discipline: "bridge design",
    page: ["bridge-sub-pg9"],
  },
  {
    term: "Piping",
    definition: "The process of erosion along the exterior perimeter of a culvert barrel.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6", "bridge-channel-pg8"],
  },
  {
    term: "Point Bar",
    definition: "A crescent-shaped deposit of sediment on the inside of a meander curve, formed by the slower flow of water.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Polymer Modified Asphalt (LDI and PaveTech) Joint",
    definition:
      "A joint filled with polymer-modified asphalt, designed to accommodate movement while providing sealing and protection against water infiltration. Polymer-modified asphalt can degrade over time from UV exposure, crack under stress, and take longer to cure, delaying repairs.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Post-Tensioned",
    definition: "A type of concrete construction where the concrete is tensioned after it has been poured, typically using steel tendons to enhance its strength.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Poured Silicone (XJS) Joint",
    definition:
      "A joint filled with a poured silicone material, often used for narrow-width joints that need flexibility and sealing properties. Poured silicone joints are limited to narrow-width applications, degrade under UV exposure, and may fail to bond properly if not installed correctly.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Pressure Head",
    definition: "Height of water above a plane or point of reference.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6", "bridge-channel-pg8"],
  },
  {
    term: "Prestressed",
    definition:
      "A technique used in concrete structures where internal stresses are introduced to counteract potential external loads, improving the material’s overall strength and performance. Prestressing typically involves tensioning steel tendons embedded in the concrete before or during the curing process. This process enhances the durability and load-carrying capacity of bridge components, especially in long spans.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Prestressed Concrete",
    definition:
      "Concrete that has been prestressed to improve its strength and performance under load. This is achieved by tensioning steel strands or cables within the concrete before it is poured, creating internal forces that help resist bending and shear. Prestressed concrete is commonly used in bridge construction for its ability to span large distances with minimal deflection.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Private Bridge",
    definition: "A bridge open to public travel and not owned by a public authority as defined in 23 U.S.C. 101.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Probability",
    definition:
      "Extent to which an event is likely to occur during a given interval. This may be based on the frequency of events, such as in the quantitative probability of failure, or on degree of belief or expectation. Degrees of belief about probability can be chosen using qualitative scales, ranks, or categories such as, remote, low, moderate, or high.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Procedures",
    definition:
      "Written documentation of policies, methods, considerations, criteria, and other conditions that direct the actions of personnel so that a desired end result is achieved consistently.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Profile",
    definition:
      "The shape or contour of a bridge, roadway, or other structure, typically when viewed from the side. The profile is critical in determining the elevation changes and slope along the length of the bridge, impacting drainage, structural load, and safety. It is often studied to ensure smooth transitions between different bridge spans and roadways.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Program Manager",
    definition:
      "The individual in charge of the program, that has been assigned the duties and responsibilities for bridge inspection, reporting, and inventory, and has the overall responsibility to ensure the program conforms with the requirements of the NBIS as provided in 23 CFR 650 Subpart C. The program manager provides overall leadership and is available to inspection team leaders to provide guidance.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Public Road",
    definition: "As defined in 23 U.S.C. 101(a)(21) as any road or street under the jurisdiction of and maintained by a public authority and open to public travel.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Q100 HW",
    definition:
      "The flow rate associated with the 100-year flood event, often used as a benchmark in hydrological analysis and floodplain management. It represents a flow rate that has a 1% probability of being exceeded in any given year. The Q100 HW value is critical for assessing the design and stability of bridges in flood-prone areas.",
    search: ``,
    discipline: "hydrology",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Q100 Scour",
    definition:
      "The potential scour depth calculated based on the Q100 flood event, indicating the level of erosion around bridge foundations that could occur during a 100-year flood. Scour analysis at this flow rate is crucial for determining the necessary design of bridge foundations to ensure their stability in extreme flooding conditions. This value helps engineers plan for future flood risks and prevent structural damage.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Quality Assurance (QA)",
    definition:
      "The use of sampling and other measures to assure the adequacy of quality control procedures in order to verify or measure the quality level of the entire bridge inspection and load rating program.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Quality Control (QC)",
    definition: "Procedures that are intended to maintain the quality of a bridge inspection and load rating at or above a specified level.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Railroad",
    definition: "A system of tracks along which trains are guided, often including the associated infrastructure like stations and bridges.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Railroad Flat Car",
    definition: "A salvaged flatbed railroad car used as a bridge superstructure, typically on low-volume roads. This type of bridge often has NSTMs.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Random Cracking",
    definition:
      "Cracks that appear irregularly and without a specific pattern, often caused by random stresses, temperature changes, or moisture fluctuations. These cracks can appear in both concrete and asphalt surfaces and may be superficial or deeper, depending on the severity of the underlying cause. Although not typically severe, they may lead to further deterioration if left unaddressed.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Rebar",
    definition: "Short for 'reinforcing bar,' a steel bar used to strengthen concrete structures by providing tensile support.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Rehabilitation",
    definition: "Repairing a culvert to return it to its initial condition or better.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Relief Joint",
    definition:
      "A joint designed to relieve internal stresses in a structure, often created to control cracking caused by shrinkage, thermal expansion, or other forces. It allows controlled movement or cracking at specific locations to prevent damage to the overall structure.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Replacement",
    definition: "Total replacement of a structure with a new facility constructed in the same general traffic corridor.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab", "glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Retaining Wall",
    definition:
      "A permanent, relatively rigid structure that supports a soil mass at slopes steeper than their angle of rest to provide usable space both above and in front of the wall.",
    search: `What is "Retaining Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab", "bridge-sub-pg9"],
  },
  {
    term: "Retrofit",
    definition:
      "The process of modifying or upgrading an existing structure to improve its performance, safety, or compliance with current standards. Retrofit work on bridges may include adding new components, reinforcing weakened sections, or incorporating modern technology. This practice helps extend the life of a structure and ensures it can safely handle current and future loads.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Revetment",
    definition: "A facing of masonry or stones to protect an embankment from erosion.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Revetment Riprap",
    definition:
      "A form of erosion control using a layer of riprap placed along the base of a slope or shoreline. Revetment riprap acts as a protective armor to prevent undermining and scour by dissipating wave or water flow energy, typically used in more permanent applications.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Right-of-Way",
    definition:
      "The land designated for the roadway and its components, including the traveled way, shoulders, and any additional space required for construction and maintenance.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-alignment-pg5"],
  },
  {
    term: "Rigid Culvert",
    definition: "A culvert that relies on internal material properties to develop structural strength.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Rigid Overlay",
    definition:
      "A type of overlay used in bridge rehabilitation, where a rigid, often concrete, layer is applied over an existing surface to improve load distribution and extend the life of the structure. This overlay is designed to resist deformation and stress, providing additional strength to aging or damaged decks. It is particularly useful in preventing further deterioration of the underlying material.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Rill Erosion",
    definition: "Shallow, small channels formed on the soil surface by the concentrated flow of water, often caused by rainfall or surface runoff.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Riprap",
    definition: "Loose stone or rock material placed along embankments, shorelines, or riverbeds to prevent erosion.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-channel-pg8"],
  },
  {
    term: "Rise",
    definition: "The vertical distance from the base of the arch to the highest point of the arch, influencing the curvature and load distribution of the arch.",
    discipline: "bridge design",
    page: ["bridge-culvert-pg6"],
  },
  {
    term: "Risk",
    definition:
      "The exposure to the possibility of structural safety or serviceability loss during the interval between inspections. It is the combination of the probability of an event and its consequence.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Roadside",
    definition: "The area adjacent to the edge of a roadway, often including shoulders, ditches, and vegetation.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Roadway",
    definition: "The portion of a highway, including shoulders, for vehicular use. A divided highway has two or more roadways.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Route",
    definition: "A specific road, highway, or travel way open to public travel.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Routine Inspection",
    definition:
      "Regularly scheduled comprehensive inspection consisting of observations and measurements needed to determine the physical and functional condition of the bridge and identify changes from previously recorded conditions.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Routine Permit Load",
    definition:
      "A live load, which has a gross weight, axle weight, or distance between axles not conforming with State statutes for legally configured vehicles, authorized for unlimited trips over an extended period of time to move alongside other heavy vehicles on a regular basis.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Runoff",
    definition:
      "Water that flows over the surface of the land, typically after rainfall or snowmelt, and is directed toward rivers, streams, or drainage systems. Runoff can carry pollutants and debris, impacting water quality and causing erosion along riverbanks or bridge foundations. Proper management of runoff is essential to prevent flooding and maintain the stability of surrounding infrastructure.",
    search: ``,
    discipline: "environmental engineering",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Rutting",
    definition:
      "The formation of depressions or grooves in the surface of a roadway or bridge deck, often caused by the repetitive passage of heavy vehicles. Rutting can result in a rough driving surface, posing a safety hazard to vehicles, and may lead to further damage if not repaired. It typically occurs in asphalt and can be exacerbated by extreme weather conditions or poor material quality.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Sacrificial Concrete",
    definition:
      "A layer of concrete applied to protect more critical structural elements from environmental wear, chemical attack, or physical damage. This layer is intended to deteriorate over time, thereby preserving the integrity of the underlying structure. Sacrificial concrete is often used in aggressive environments, such as coastal areas or areas with high traffic loads.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Safe Load Capacity",
    definition: "A live load that can safely utilize a bridge repeatedly over the duration of a specified inspection interval.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Sag Vertical Curve",
    definition: "A curve in the roadway profile that connects a descending grade to an ascending grade, typically used to smooth transitions at the bottom of a dip or valley.",
    discipline: "bridge design",
    page: ["bridge-alignment-pg5"],
  },
  {
    term: "Sand Container",
    definition:
      "A container filled with sand, typically used in construction or highway safety applications. In guardrail systems, sand containers are sometimes used as impact-absorbing barriers or as part of a temporary protective system to help dissipate the energy of a vehicle during a collision.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Sawcut",
    definition:
      "A method of cutting concrete or asphalt using a saw, typically with a diamond blade, to create a clean, controlled crack or joint. Sawcutting is often used to create expansion joints or to remove damaged sections of a surface. This technique helps maintain the structural integrity of the material by preventing uncontrolled cracking and facilitating proper jointing.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Scaling",
    definition: "Disintegration of cement paste caused by chemical attacks or freeze-thaw cycles that erode the concrete surface.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Scour",
    definition: "Localized erosion caused by the force of flowing water around structures like bridge piers, abutments, or embankments, often leading to foundation instability.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab", "glossary-culvert-tab", "bridge-culvert-pg6", "bridge-channel-pg8"],
  },
  {
    term: "Scour Analysis",
    definition:
      "The process of evaluating the potential for erosion around a bridge’s foundation due to water flow. Scour analysis typically considers factors such as flow velocity, sediment type, and the shape of the riverbed. The goal of scour analysis is to predict areas at risk for foundation instability and to design bridges that can withstand the erosive forces of flowing water.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Scour Appraisal",
    definition:
      "A risk-based and data-driven determination of a bridge’s vulnerability to scour, resulting from the least stable result of scour that is either observed, or estimated through a scour evaluation or a scour assessment.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Scour Assessment",
    definition:
      "The determination of an existing bridge’s vulnerability to scour which considers stream stability and scour potential as described in HEC 20 and other scour-related data sources.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Scour Critical Bridge",
    definition: "A bridge with a foundation member that is unstable, or may become unstable, as determined by the scour appraisal.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Scour Hole",
    definition:
      "A depression or cavity formed in the bed of a river or stream due to the erosion caused by flowing water. Scour holes often develop around bridge foundations, increasing the risk of undermining the structural integrity of the bridge. Monitoring and mitigating scour holes is essential in areas prone to high water flow.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Scour Evaluation",
    definition:
      "The application of hydraulic analysis as described in HEC 18 and HEC 20 to estimate scour depths and determine bridge and substructure stability considering potential scour.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Scour Monitoring Inspection",
    definition:
      "An inspection performed during or after a triggering storm event as required by a Scour Plan of Action (POA), by personnel with qualifications required by the agency.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Scour Plan of Action (POA)",
    definition: "Procedures for bridge inspectors and engineers in managing each bridge determined to be scour critical or that has unknown foundations.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Scour Vulnerability",
    definition:
      "The susceptibility of a bridge foundation to erosion caused by flowing water, particularly during high-flow events such as floods. Scour vulnerability is influenced by factors such as water velocity, sediment type, and the shape of the riverbed. Proper assessment of scour vulnerability is critical for ensuring bridge stability and preventing potential failure due to undermined foundations.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Scupper",
    definition:
      "An opening in a bridge deck or parapet designed to drain water off the structure, preventing ponding and reducing the risk of deterioration caused by moisture buildup.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Section Loss",
    definition: "Loss of a material’s thickness caused by chemical or physical degradation.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Sediment Deposition",
    definition: "The accumulation of eroded materials such as sand, silt, or gravel within a channel, typically occurring when the flow velocity decreases.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Semi-Integral Abutment",
    definition:
      "A type of bridge abutment design where the abutment is partially connected to the bridge deck but still allows for some independent movement. This design provides flexibility to accommodate thermal expansion and contraction while maintaining structural stability. It is often used in areas with high seismic or thermal loading conditions.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Service Inspection",
    definition: "An inspection to identify major deficiencies and safety issues, performed by personnel with general knowledge of bridge maintenance or bridge inspection.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Settlement",
    definition:
      "The downward movement of a structure or foundation due to the compression of underlying soil or materials. Settlement can occur gradually over time or more rapidly during a load increase or after construction. Excessive settlement can lead to structural misalignment, cracking, and potential failure if not properly monitored and addressed.",
    search: ``,
    discipline: "geotechnical engineering",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Shear Crack",
    definition:
      "A diagonal crack in a structural member caused by shear forces, often forming near supports and extending upward toward the midpoint of the member. Shear cracks indicate significant structural stress and can compromise the integrity of the member if not addressed.",
    discipline: "bridge design",
    page: ["bridge-super-pg9"],
  },
  {
    term: "Shear Force",
    definition:
      "A force that causes a material to slide or deform in parallel layers. In bridge structures, shear force is typically experienced in the beams and girders under load. Proper design and analysis of shear forces are essential to ensure that structural members can resist these forces without failing.",
    search: ``,
    discipline: "structural engineering",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Shear Key",
    definition:
      "A recessed or protruding element cast into concrete or built into structural joints to improve shear resistance and prevent movement between connected components.",
    discipline: "bridge design",
    page: ["bridge-super-pg9"],
  },
  {
    term: "Shear Studs",
    definition:
      "Steel studs welded to the top of a bridge girder or deck to provide mechanical bonding between the concrete deck and the steel superstructure. These studs help transfer shear forces and improve the overall performance of the composite bridge system. They are particularly useful in bridges with prestressed or post-tensioned concrete decks.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Sheet Pile",
    definition:
      "A long, thin structural member, typically made of steel, with interlocking edges driven into the ground to form a continuous wall. Used to retain earth or water and resist lateral pressure, it is commonly used for bridge abutments, cofferdams, channel protection, and temporary excavation support.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Sheet Pile Wall",
    definition:
      "A cantilever wall built using interlocking plate piles fabricated from pressed or molded steel sheet metal to provide structural resistance to lateral earth pressures. Such walls can be fully cantilevered or include anchors for additional resistance.",
    search: `What is "Sheet Pile Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Sidewalk",
    definition: "A paved path for pedestrians along the side of a roadway, typically made of concrete or asphalt.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Simple Span",
    definition:
      "A bridge span that is supported at both ends without any intermediate supports. This design is commonly used for shorter spans and is often the most cost-effective solution for simple bridge crossings. Simple span bridges are relatively easy to construct but may require more frequent maintenance for longer spans.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Skew",
    definition:
      "The angle between the longitudinal axis of a bridge and the alignment of the road or railway that it crosses. Skewed bridges are often required when the road or waterway is not perpendicular to the supporting piers or abutments. The skew angle affects the load distribution and design of the bridge structure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Slabbing",
    definition: "Straightening of rounded concrete sections accompanied by cracking and/or spalls.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Sliding Steel Plate Joint",
    definition:
      "A joint system that uses steel plates that slide over each other to allow movement while maintaining a seal. Steel plates are prone to corrosion, require maintenance and lubrication to avoid jamming, and have limited movement capacity in extreme temperatures.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Slipforming",
    definition:
      "A construction method where concrete is poured continuously into a form that is gradually moved upwards as the concrete hardens. This technique is commonly used for constructing barrier walls. Horizontal cracking can sometimes occur over time due to shrinkage, temperature changes, or the weight of the concrete during curing. If the curing process isn't properly controlled, or if there is uneven setting or stress distribution, it can lead to the formation of cracks along the horizontal plane of the wall.",
    search: ``,
    discipline: "barrier wall design",
    page: ["glossary-compounds-tab", "bridge-railings-pg9"],
  },
  {
    term: "Slope",
    definition:
      "The degree of inclination or gradient of a surface, such as the ground or a bridge deck. Slope is measured as the ratio of vertical rise to horizontal distance and is crucial in determining drainage, load distribution, and structural stability. In bridge design, slope influences factors such as deck drainage and the alignment of approach roads.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Slopewall",
    definition: "A protective concrete or riprap covering placed on embankments to prevent soil erosion near bridges and culverts.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-sub-pg9"],
  },
  {
    term: "Sloughing",
    definition:
      "The downward movement or collapse of soil, rock, or embankment material due to erosion, saturation, or loss of support. Sloughing can occur on slopes, embankments, or channel banks, potentially compromising stability and requiring corrective measures such as drainage improvements, soil reinforcement, or protective armoring.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Slump",
    definition:
      "A test used to measure the workability or consistency of fresh concrete. The slump test involves filling a cone-shaped mold with concrete and then removing it to see how much the concrete settles. A higher slump indicates a more fluid mix, while a lower slump indicates a stiffer mix, both of which affect the concrete's handling and strength characteristics.",
    search: ``,
    discipline: "concrete engineering",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Snowdrift",
    definition: "A deep accumulation of snow formed by wind movement and deposition.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Snowplow",
    definition: "A vehicle or equipment used to remove snow from roadways and highways.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Snowstorm",
    definition: "A weather event characterized by heavy snowfall and reduced visibility.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Soil Envelope",
    definition: "Soil or backfill encasing a culvert structure and applying pressure due to the weight of the soil.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Soil Nails",
    definition: "Steel rods providing soil reinforcement into embankments that are either grouted into drilled holes or driven into soil at close spacing.",
    search: `What is "Soil Nails" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Soldier Pile Wall",
    definition:
      "A cantilever wall built using piles, typically rolled steel shapes and installed at regular intervals (nominally 6 to 10 foot spacings) to provide structural resistance to lateral earth pressures. Lagging is then placed between the soldier piles to both support and retain the soil material between piles and to transfer those lateral earth pressures to the soldier piles. Such walls can be fully cantilevered or include anchors for additional resistance.",
    search: `What is "Soldier Pile Wall" in retaining wall design?`,
    discipline: "retaining wall design",
    page: ["glossary-wall-tab"],
  },
  {
    term: "Some Defects",
    definition: "Defect visibility is more than isolated and less than widespread.",
    search: `What are "Some Defects" in bridge inspection?`,
    discipline: "bridge design",
    page: ["glossary-defects-tab"],
  },
  {
    term: "Spalling",
    definition: "Separation of surface concrete due to fractures within the material.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Span",
    definition: "The horizontal distance between the supports (abutments) of the arch, determining the size and shape of the arch structure.",
    discipline: "bridge design",
    page: ["bridge-culvert-pg6"],
  },
  {
    term: "Spandrel Wall",
    definition: "The vertical wall or partition that supports the arch ring and fills the space between the arch and the roadbed, providing additional stability to the structure.",
    discipline: "bridge design",
    page: ["bridge-culvert-pg6"],
  },
  {
    term: "Special Inspection",
    definition:
      "An inspection scheduled at the discretion of the bridge owner, used to monitor a particular known or suspected deficiency, or to monitor special details or unusual characteristics of a bridge that does not necessarily have defects.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Splash Erosion",
    definition: "Erosion caused by the impact of raindrops dislodging small soil particles, which are then carried away by water or wind.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Splice Plate",
    definition: "A steel plate used to join two structural members end-to-end, transferring loads across the connection and maintaining continuity in the structure.",
    discipline: "bridge design",
    page: ["bridge-super-pg9"],
  },
  {
    term: "Spread Box Beams",
    definition:
      "A type of beam used in bridge construction, typically made of reinforced concrete or pre-stressed concrete, where the beams are spaced wider apart than traditional box girders. These beams provide greater load distribution and are often used in situations where a bridge needs to accommodate wider spans without excessive weight. Spread box beams are popular in highway bridge design due to their versatility and efficiency.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Springline",
    definition:
      "The horizontal line at which the arch ring begins to curve from the abutment, marking the transition between the arch ring and the abutments. The horizontal distance between two springlines is the span distance.",
    search: ``,
    discipline: "arch design",
    page: ["glossary-culvert-tab", "glossary-compounds-tab", "bridge-culvert-pg6"],
  },
  {
    term: "Spurs",
    definition: "A river training countermeasure that extends from the bank to control flow direction and reduce erosion by deflecting water away from vulnerable areas.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "State",
    definition: "Any of the 50 States, the District of Columbia, or Puerto Rico.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "State Transportation Department",
    definition: "That department, commission, board, or official of any State charged by its laws with the responsibility for highway construction.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Steel Girder",
    definition: "A large steel beam used to support a bridge deck and distribute loads to the substructure.",
    discipline: "bridge design",
    page: ["bridge-super-pg9"],
  },
  {
    term: "Steel Tube Bridge Railing",
    definition:
      "A bridge railing system made of steel tubes, designed to provide vehicle and pedestrian protection while maintaining visibility. Commonly used for its strength, durability, and ability to accommodate aesthetic or architectural designs.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Stiffener",
    definition:
      "A structural element, typically a plate or rib, used to reinforce and increase the rigidity of beams, girders, or other members to prevent deformation or buckling.",
    discipline: "bridge design",
    page: ["bridge-super-pg9"],
  },
  {
    term: "Stormwater",
    definition: "Water from precipitation that flows over surfaces and is managed through drainage systems to prevent flooding and erosion.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Strand",
    definition:
      "A long, thin length of steel or other material used in bridge construction, particularly in prestressed concrete applications. Strands are often bundled together to create cables or tendons that provide tensile strength to bridge components. Prestressing strands allow the concrete to resist tensile forces and improve the overall durability and performance of the bridge.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Strategic Highway Network (STRAHNET) Connectors",
    definition: "Highways which provide access between major military installations and highways which are part of the Strategic Highway Network.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Strategic Highway Network (STRAHNET)",
    definition:
      "A network of highways which are important to the United States' strategic defense policy and which provide defense access, continuity, and emergency capabilities for defense purposes.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Stringer",
    definition:
      "A horizontal structural member that supports the deck of a bridge and transmits loads to the main supporting beams or girders. Stringers run parallel to the length of the bridge and are commonly used in both timber and steel bridge designs. They play a key role in distributing the load across the bridge deck and supporting traffic loads.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Strip Seal (SS) Joint",
    definition:
      "A joint system consisting of a steel extrusion and a flexible neoprene gland that accommodates movement while maintaining a seal. Strip seals are effective at preventing water infiltration but have limited movement capacity. If the gland is damaged or dislodged, water intrusion can lead to deck deterioration. Improper installation or debris buildup can also compromise performance.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Structural Review",
    definition:
      "A review by a person qualified to evaluate the field-observed conditions and make a determination of the impacts of the conditions on the performance of the bridge member or entire bridge. Structural reviews may include a review of the field inspection notes and photographs, review of as-built plans, or analysis as deemed appropriate.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Subdistrict",
    definition: "A smaller administrative division within a larger district, often used in transportation planning.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
    link: `https://entapps.indot.in.gov/dotmaps/districtmaps/`,
  },
  {
    term: "Superelevation",
    definition: "The banking of the roadway at curves to counteract centrifugal force and improve vehicle stability.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-alignment-pg5", "bridge-super-pg9"],
  },
  {
    term: "Superstructure",
    definition:
      "The portion of a bridge or other structure that is above the foundation, including the deck, beams, girders, and other supporting components. The superstructure bears the load of the traffic or other forces acting on the bridge. Proper design and maintenance of the superstructure are essential for ensuring the safety and functionality of the bridge.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Superstructure Span",
    definition: "The portion of the bridge above the substructure that supports traffic loads.",
    discipline: "bridge design",
    page: ["bridge-super-pg9"],
  },
  {
    term: "Supported Bridge",
    definition:
      "A bridge with temporary shoring, supports, repairs, or supplemental members that are installed to keep the bridge open despite deficiencies in the permanent structure, pending future repairs or replacement.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Surface Dulling",
    definition:
      "The gradual loss of surface texture or smoothness on a material, often caused by abrasion, weathering, or wear. In bridges, surface dulling can occur on the deck or other exposed parts, affecting aesthetics and potentially leading to decreased traction. While not always indicative of structural damage, surface dulling may require attention if it compromises safety or functionality.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Surface Polishing",
    definition:
      "The process of smoothening or shining the surface of a material, typically to improve its appearance or durability. In bridge decks, surface polishing may result from repeated traffic wear, and it can reduce friction, making the surface more slippery. While surface polishing is primarily cosmetic, it could indicate the need for resurfacing if traction is significantly impacted.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Surface Thinning",
    definition:
      "The reduction in the thickness of a material's surface layer, often due to erosion, abrasion, or chemical action. In bridges, surface thinning can affect the deck, barriers, or other components and may lead to a decrease in load-bearing capacity. It is a key indicator of wear and may necessitate repairs or resurfacing to maintain the bridge's integrity.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Suspension Bridge",
    definition:
      "A type of bridge in which the deck is suspended from cables that are strung between towers. The main advantage of a suspension bridge is its ability to span long distances without the need for intermediate supports. This design is particularly effective for crossing wide water bodies or deep valleys where other bridge types would be less feasible.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Sway Bracing",
    definition: "Bracing used to resist lateral forces that cause side-to-side movement of a structure, improving its stability.",
    discipline: "bridge design",
    page: ["bridge-super-pg9"],
  },
  {
    term: "System Redundancy",
    definition:
      "A redundancy that exists in a bridge system without load path redundancy, such that fracture of the cross-section at one location of a primary member will not cause a portion of or the entire bridge to collapse.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Team Leader",
    definition:
      "The on-site, nationally certified bridge inspector in charge of an inspection team and responsible for planning, preparing, performing, and reporting on bridge field inspections.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Temporary Bridge",
    definition: "A bridge which is constructed to carry highway traffic until the permanent facility is built, repaired, rehabilitated, or replaced.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Temporary Scour Countermeasures",
    definition:
      "Short-term erosion control methods, often involving the use of loosely placed materials like riprap, gravel, or dumped rock, to protect vulnerable areas from scour and erosion until more permanent solutions can be implemented.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Tendon",
    definition:
      "A pre-stressed steel cable or wire used in concrete structures to apply tension, enhancing their ability to resist bending or tension forces. Tendons are typically used in pre-stressed concrete bridges to improve strength and durability. They are either placed in tension before the concrete is poured or after the concrete has set, depending on the method of pre-stressing.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Tension",
    definition:
      "A force that stretches or elongates a material, opposite of compression. In bridge design, tension forces act on elements such as cables, tendons, or beams under load. Proper tension management is essential for the structural integrity of suspension bridges, cables, and pre-stressed concrete components.",
    search: ``,
    discipline: "structural engineering",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Terminal Joint",
    definition: "A joint located at the end of a bridge deck or approach slab, designed to accommodate expansion and contraction.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "TGB Transition",
    definition:
      "A guardrail transition system that connects rigid concrete bridge railings with W-Beam approach rails using a Thrie Beam segment. This transition ensures a smooth, safe connection between the rigid concrete barrier and the flexible W-Beam rail, while leveraging the Thrie Beam segment to accommodate the shift in barrier type.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Thalweg",
    definition: "The line of lowest elevation within a channel, often following the natural flow path of water, marking the deepest part of the channel.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Thin Deck Overlay",
    definition:
      "A layer of material applied over a bridge deck to restore its surface and protect it from wear, weather, and traffic loads. Thin deck overlays are typically made of materials like asphalt or concrete and are designed to bond with the existing deck surface. They provide a cost-effective solution for addressing surface issues without requiring a full deck replacement.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Thrie Beam Guardrail",
    definition: "A guardrail similar to the W-beam but with an additional flange for extra strength, used in higher-risk locations.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Tie Girder",
    definition:
      "A horizontal structural member that connects two or more vertical components, such as columns or supports, to maintain stability and prevent lateral movement. Tie girders are commonly used in bridges to tie together different parts of the structure and provide additional support. They help distribute forces and increase the overall rigidity of the bridge.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Tining",
    definition:
      "The process of creating a textured surface on concrete using specialized equipment, often in the form of tines or brushes. Tining is applied to bridge decks to provide better skid resistance and traction, especially in wet or icy conditions. It helps improve safety by reducing the likelihood of vehicles skidding on the bridge surface.",
    search: ``,
    discipline: "nridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Tooth (Finger) Joint",
    definition:
      "A mechanical joint where two interlocking finger-like projections fit together to accommodate relative movement between bridge sections. Finger joints can create noise under traffic, collect debris leading to clogging, and suffer from misalignment during installation, causing uneven wear.",
    discipline: "bridge design",
    page: ["bridge-joints-pg9"],
  },
  {
    term: "Torsion",
    definition:
      "A twisting force that causes a material or structure to rotate along its axis. In bridges, torsional forces may arise from uneven load distribution or external factors such as wind or traffic. Structural components, such as beams and girders, must be designed to resist torsion to prevent deformation or failure.",
    search: ``,
    discipline: "structural engineering",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Tower",
    definition:
      "A tall vertical structure, often found in suspension or cable-stayed bridges, that supports the main cables or other load-bearing elements. Towers provide the necessary height and stability to allow the bridge to span long distances. In addition to their structural role, towers are often significant visual elements of the bridge design.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Traffic Barrier",
    definition: "A safety barrier used to separate lanes, protect vehicles, and prevent roadway departures.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Transition Curve",
    definition: "A curve that gradually changes the curvature of the road to provide a smoother transition between straight and curved sections.",
    discipline: "bridge design",
    page: ["bridge-alignment-pg5"],
  },
  {
    term: "Transition Railing",
    definition: "A section of guardrail used to smoothly transition between different types of guardrails, ensuring seamless vehicle redirection.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Transverse Cracking",
    definition:
      "Cracks that form perpendicular to the primary direction of stress or traffic flow in a bridge component. Transverse cracks can appear on decks, beams, or other structural elements and are typically caused by shrinkage, thermal cycling, or excessive load. If left unaddressed, transverse cracking can compromise the integrity of the structure, especially if it leads to water infiltration and corrosion.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Transverse Stiffener",
    definition: "A stiffener installed perpendicular to the length of a structural member to resist web buckling and improve shear capacity.",
    discipline: "bridge design",
    page: ["bridge-super-pg9"],
  },
  {
    term: "Traveled Way",
    definition: "The portion of roadway for the movement of vehicles, exclusive of shoulders.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Triaxial Restraint",
    definition:
      "A condition in which a material is constrained in three perpendicular directions, often leading to internal stresses. In bridge construction, triaxial restraint can occur when a material is tightly confined by surrounding components, such as welds or other structural elements. This restraint can lead to sudden failures or material distress.",
    search: ``,
    discipline: "structural engineering",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Tributary",
    definition:
      "The portion of a structure or area that contributes to the load on a specific point or component. In the context of bridge design, a tributary area refers to the section of a bridge deck or support that bears the load from the surrounding traffic or structural elements. Calculating the tributary area is essential for proper load distribution and ensuring that individual components are sized appropriately.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Truss",
    definition:
      "A structural framework consisting of interconnected elements that form a series of triangular units. Trusses are commonly used in bridge design to support loads over large spans while minimizing material use. They are designed to efficiently distribute forces, making them an essential part of many long-span bridges, such as railroad or highway structures.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Turned-Down End Terminal",
    definition:
      "A type of guardrail end terminal designed with a downward-curved end to redirect vehicles safely upon impact. This design helps to reduce the risk of vehicle penetration or severe damage, allowing for a more controlled deceleration and safer collision outcome.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Undercutting",
    definition: "The erosion of the base of a channel's bank or bed, causing instability and leading to the collapse or sloughing of the bank material.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Underdrain",
    definition: "A drainage system placed below the surface of the ground to remove excess water and prevent soil erosion or saturation.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Underfill Concrete Arch",
    definition:
      "A type of bridge structure consisting of a concrete arch with a fill material placed underneath the arch to support and distribute the load, providing stability and reducing the amount of material required for the arch.",
    discipline: "bridge design",
    page: ["bridge-culvert-pg6"],
  },
  {
    term: "Underfill Material",
    definition: "A material, such as compacted soil or granular aggregate, placed beneath the arch ring to help distribute loads evenly and enhance the bridge’s stability.",
    discipline: "bridge design",
    page: ["bridge-culvert-pg6"],
  },
  {
    term: "Underground",
    definition: "Refers to structures or utilities located below the surface, such as tunnels, pipelines, or electrical wiring.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Undermining",
    definition:
      "The erosion process where material is removed from beneath a structure or support, leading to a loss of stability and potential failure of the overlying or surrounding elements. This commonly occurs around foundations, footings, or piers.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6", "bridge-channel-pg8"],
  },
  {
    term: "Underpass",
    definition: "A passage that allows vehicles, pedestrians, or water to travel beneath a road, railway, or other obstruction.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Underwater Bridge Inspection Diver",
    definition: "The individual performing the inspection of the underwater portion of the bridge.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Underwater Inspection",
    definition:
      "Inspection of the underwater portion of a bridge substructure and the surrounding channel, which cannot be inspected visually at low water or by wading or probing, and generally requiring diving or other appropriate techniques.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Unknown Foundations",
    definition:
      "Foundations of bridges over waterways where complete details are unknown because either the foundation type and depth are unknown, or the foundation type is known, but its depth is unknown, and therefore cannot be appraised for scour vulnerability.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-bridge-tab"],
  },
  {
    term: "Upper Chord",
    definition:
      "The top horizontal component of a truss or structural frame, typically in tension, which resists downward forces. The upper chord works in conjunction with the lower chord and diagonals to form the triangular units that make up the truss. It plays a crucial role in distributing loads and maintaining the stability of the overall structure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Upstream",
    definition:
      "The direction opposite to the flow of water in a river, stream, or drainage system, moving toward the source or higher elevation. In engineering, it refers to structures, impacts, or conditions occurring before the point of interest in the flow path.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Vertical Alignment",
    definition: "The configuration of the roadway in the vertical plane, including grades, curves, and elevations.",
    discipline: "bridge design",
    page: ["bridge-alignment-pg5"],
  },
  {
    term: "Vertical Curve",
    definition: "A curve in the vertical alignment of the roadway, typically used to transition between different grades.",
    discipline: "bridge design",
    page: ["bridge-alignment-pg5"],
  },
  {
    term: "Vertical Grade",
    definition: "The slope or incline of the roadway along the vertical plane, expressed as a percentage.",
    discipline: "bridge design",
    page: ["bridge-alignment-pg5"],
  },
  {
    term: "Vertical Offset",
    definition: "Displacement of an object from its original position in the vertical direction.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-culvert-tab", "bridge-culvert-pg6"],
  },
  {
    term: "W-Beam Guardrail",
    definition: "A common guardrail type with a W-shaped cross-section, typically used on highways. It’s effective in absorbing impact and redirecting vehicles.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Waterline",
    definition: "The elevation or mark indicating the typical level of water in a stream, river, or other water body near a structure.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-channel-pg8"],
  },
  {
    term: "Watershed",
    definition: "An area of land that drains all precipitation and runoff to a common outlet, such as a river, bay, or other body of water.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab"],
  },
  {
    term: "Wear",
    definition:
      "The gradual degradation of a material's surface due to friction, abrasion, or environmental factors. In bridges, wear can occur on surfaces like the deck, bearings, or expansion joints due to regular use and exposure to the elements. While some wear is inevitable, excessive wear can reduce the effectiveness of components, necessitating maintenance or replacement.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Web",
    definition:
      "The vertical or diagonal component of a structural element, such as a beam or truss, that connects the flanges and helps to resist shear forces. The web is typically the central portion of the beam or truss, designed to bear loads that act in the direction perpendicular to the element. In trusses, the web members are usually in compression or tension, depending on the load distribution.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "WGB Transition",
    definition:
      "A guardrail transition system used to connect rigid concrete bridge railings to W-beam approach rails. This transition ensures a smooth and safe shift between the more rigid concrete barrier and the flexible W-beam rail, enhancing vehicle containment and impact absorption.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
  {
    term: "Wide-Width Cracks",
    definition: "Cracks wider than 0.06 inches that appear in the surface of concrete.",
    search: ``,
    discipline: "bridge deck maintenance",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Widening",
    definition: "The increase in the horizontal width of a channel, typically caused by bank erosion or undercutting.",
    discipline: "bridge design",
    page: ["bridge-channel-pg8"],
  },
  {
    term: "Widespread Defects",
    definition: "Defect is visible across many incident locations.",
    search: `What are "Widespread Defects" in bridge inspection?`,
    discipline: "bridge inspection",
    page: ["glossary-defects-tab"],
  },
  {
    term: "Wind Erosion",
    definition:
      "The process by which wind removes or transports soil, sediment, or other materials from a surface. Wind erosion can affect bridges, especially in arid or coastal environments, by wearing down exposed components, such as embankments, abutments, or the bridge deck. Over time, wind erosion can weaken structural components and contribute to foundation instability or surface deterioration.",
    search: ``,
    discipline: "highway design",
    page: ["glossary-additional-tab"],
  },
  {
    term: "Wingwall",
    definition: "A sidewall extending from an abutment or headwall that helps retain soil and direct water flow away from a bridge or culvert.",
    search: ``,
    discipline: "bridge design",
    page: ["glossary-compounds-tab", "bridge-sub-pg9"],
  },
  {
    term: "WT Transition",
    definition:
      "A guardrail transition system designed to connect Thrie Beam bridge rail to W-Beam approach guardrail. This transition provides a smooth and safe connection between the rigid Thrie Beam barrier and the more flexible W-Beam rail, ensuring proper vehicle containment and impact resistance.",
    discipline: "bridge design",
    page: ["bridge-railings-pg9"],
  },
];

// "glossary-bridge-tab", "glossary-culvert-tab", "glossary-defects-tab", "glossary-wall-tab", "glossary-compounds-tab"
// "bridge-alignment-pg5", "bridge-approach-pg7", "bridge-joints-pg9", "bridge-railings-pg9", "bridge-deck-pg11", "bridge-super-pg9"
// "bridge-bearings-pg6", "bridge-sub-pg9", "bridge-culvert-pg6", "bridge-channel-pg8", "bridge-additional-tab"
