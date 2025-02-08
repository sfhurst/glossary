// export { objModal };
var i = 0;

const linkArray = []; // Holds an array of objects.
linkArray[0] = {
  linkList: "Main",
  name: "SNBI",
  link: "https://www.fhwa.dot.gov/bridge/snbi/snbi_march_2022_publication.pdf",
};
linkArray[1] = {
  linkList: "Main",
  name: "INDOT BIM",
  link: "https://www.in.gov/dot/div/contracts/standards/bridge_inspection/inspector_manual/index.htm",
};
linkArray[2] = {
  linkList: "Main",
  name: "Coding Guide",
  link: "https://www.in.gov/dot/div/contracts/standards/bridge_inspection/pubs/1995%20Recording%20and%20Coding%20Guide%20for%20the%20Structural%20Inventory%20and%20Appraisal%20of%20the%20Nations%20Bridges.pdf",
};
linkArray[3] = {
  linkList: "BIM",
  name: "INDOT BIM - Part 7",
  link: "https://www.in.gov/dot/div/contracts/standards/bridge_inspection/inspector_manual/Part7-Wearing%20Surfaces_REV_05182022.pdf",
};
linkArray[4] = {
  linkList: "BIM",
  name: "FHWA Hydraulics",
  link: "http://www.fhwa.dot.gov/engineering/hydraulics/index.cfm",
};
linkArray[5] = {
  linkList: "BIM",
  name: "Protected Species Guidance",
  link: "https://www.in.gov/indot/engineering/files/INDOT-Protected-Species-Guidance-March-2021.pdf",
};
linkArray[6] = {
  linkList: "BIM",
  name: "INDOT BIM - Part 9",
  link: "https://www.in.gov/dot/div/contracts/standards/bridge_inspection/inspector_manual/Part9-Enviromental%20Concerns.pdf",
};
linkArray[7] = {
  linkList: "BIM",
  name: "Design Memo 19-10",
  link: "https://www.in.gov/dot/div/contracts/standards/memos/2019/19-10%20ta%20Terminal%20Joints.pdf",
};
linkArray[8] = {
  linkList: "BIM",
  name: "Standards & Specifications",
  link: "https://www.in.gov/dot/div/contracts/standards/",
};

const objModal = [];
objModal[0] = {
  BAP01: {
    // Alignment
    name: `Approach Roadway Alignment (B.AP.01)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Approach Roadway Alignment (B.AP.01)</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Approach Roadway Alignment:</p>
        <p>Do not consider speed reductions due to the bridge width or intersecting highways when reporting this item.</p><br>
        <p>The operating speed reduction is in comparison to the posted speed limit for the highway segment:</p>
        <ul class="ulModal"><li>Use code G when the operating speed is no different at the bridge than the rest of the highway segment that crosses the bridge.</li>
        <li>Use code F when the operating speed is noticeably different at the bridge than the rest of the highway segment that crosses the bridge.</li>
        <li>Use code P when the operating speed is substantially different at the bridge than the rest of the highway segment that crosses the bridge.</li></ul>`,
      `<p class="pModalExamples">No speed reduction necessary. </p>
        <p class="pModalExamples">A minor reduction of speed is expected due to the roadway geometry. </p>
        <p class="pModalExamples">Nearby roadway features cause changes in acceleration at the bridge. </p>
        <p class="pModalExamples">There is an intersection at the north approach. </p>
        <p class="pModalExamples">The bridge is at a traffic light and carries a portion of the queue. </p>
        <p class="pModalExamples">The bridge is in a horizontal curve that is superelevated on the west side. </p>
        <p class="pModalExamples">The bridge is in a sag vertical curve. </p>
        <p class="pModalExamples">The bridge is in a crest vertical curve. </p>`,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}#page=318">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BMAD04: {
    // Terminal Joints
    name: `Terminal Joints (B.MAD.04)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Terminal Joints (B.MAD.04)</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Terminal Joints Condition Rating:</p>
        <p>Terminal joints are designed to accommodate thermal movements of integral and semi-integral abutments by allowing expansion to occur between the approach slabs and the approach pavement. Terminal joints are only required for integral or semi-integral bridges.</p><br>
        <p>Previous terminal joint design details for Portland Cement Concrete Pavement (PCCP) used 2 feet of asphalt at the ends of the approach, and there was no design detail for HMA pavement adjacent to bridges with approach slabs having integral or semi-integral abutments. Both cases have proven problematic, so to improve functionality, new terminal joint design details were introduced in September 2019 with Design Memo 19-10, RSP 503-R-692, and RPD 503-R-692d (now E 503-BATJ series). </p><br>
        <p>Consider the pavement roughness and ride at the transition between the approach slabs and the approach pavement. </p>
        `,
      `<p class="pModalExamples">The terminal joints are in good condition. </p>
        <p class="pModalExamples">The terminal joints present a rough transition to the bridge. </p>
        <p class="pModalExamples">There are no terminal joints at either end. </p>`,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[7].link}">${linkArray[7].name}</a>
        `,
  },

  BMAD01: {
    // Approach Slabs
    name: `Approach Slabs (B.MAD.01)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Approach Slabs (B.MAD.01)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Approach Slabs Condition Rating:</p>
        <p>Use destructive or non-destructive testing results or visual condition indicators of materials covering the surfaces being assessed when top is not visible for assessment. Past inspection reports and repair records may also provide supplemental information to aid in the determination of the condition rating.</p><br>
        <p>Consider the settlement of the approach slab. Use any indicators present to determine the stability of the soil beneath the slab. </p><br>
        <p>Consider the roughness and ride provided by the approach slab. </p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">There are no deficiencies to report. </p>
        <p class="pModalExamples">The approach slabs are in good condition. </p>
        <p class="pModalExamples">The approach slabs have been covered with bituminous material. </p>
        <p class="pModalExamples">There are sealed cracks in the approach slabs. </p>
        <p class="pModalExamples">There are sound concrete patches in the approach slabs. </p>
        <p class="pModalExamples">There is a bituminous patch in the north approach slab. </p>
        <p class="pModalExamples">There is a void under the south approach slab at the southwest corner of the bridge. </p>
        <p class="pModalExamples">There is minor settlement of the approach slabs. </p>
        <p class="pModalExamples">No significant settlement has occurred. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BC08: {
    // Bridge Joints
    name: `Bridge Joints (B.C.08)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Bridge Joints (B.C.08)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Bridge Joints Condition Rating:</p>
        <p>This item addresses the condition of all types and shapes of bridge deck joints. The condition assessment includes all aspects of the joints such as any seals, headers (metal or concrete), connections, and other metal members.</p><br>
        <p>When a joint is designed as an open joint, leakage or lack of a seal is not considered a defect.</p><br>
        <p>Do not consider the condition of protective coatings and other protection systems when determining the condition rating code for this item, except to the extent that problems with the protective coating system are indicative of problems with the underlying joint material.</p><br>
        <p>In cases where the joint is not visible, the condition can be assessed based on other indirect indicators of the condition.</p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">There are no deficiencies to report. </p>
        <p class="pModalExamples">The bridge has integral abutments. </p>
        <p class="pModalExamples">The bridge has semi-integral abutments. </p>
        <p class="pModalExamples">There are minor- to moderate-width, diagonal cracks propagating from the joint areas. </p>
        <p class="pModalExamples">The joints are partially full of debris. </p>
        <p class="pModalExamples">There are areas of the joints that have been repaired with pourable material. </p>
        <p class="pModalExamples">The joints are leaking. </p>
        <p class="pModalExamples">The joints are leaking throughout. </p>
        <p class="pModalExamples">There are several punctures and a loss of adhesion with the nosing in both the north and south joints. </p>
        <p class="pModalExamples">The joints have multiple areas that have lost adhesion. </p>
        <p class="pModalExamples">The joints have a loss of adhesion throughout. </p>
        <p class="pModalExamples">The joints are full of debris. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}#page=275">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BMAD02: {
    // Wearing Surface
    name: `Wearing Surface (B.MAD.02)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Wearing Surface (B.MAD.02)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Wearing Surface Condition Rating:</p>
        <p>The type of wearing surface must be considered in order to determine the appropriate condition rating. Please follow the guidance on wearing surfaces provided in Part 7 of the INDOT Bridge Inspection Manual (BIM) linked below.</p><br>
        <p><a class="aBodyLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[3].link}">${linkArray[3].name}</a></p>
        `,
      `
        <p>6 | There is a transverse crack across the wearing surface at Pier #2. There are 2 spalls in EBL. Patched areas are in good condition.<br> Jessica Waggoner | 01/03/2022</p><br>
        <p>6 | There is a transverse crack across the wearing surface at pier #2. There are 2 2'x2' spalls in span a at the center line. The previously mentioned spalls have been patched. The patches are in good condition.<br> Jessica Waggoner | 01/08/2020</p><br>
        <p>6 | There is a transverse crack across the wearing surface at pier #2. There are 2 2'x2' spalls in span a at the center line. The previously mentioned spalls have been patched. The patches are in good condition.<br> Stephen Hurst | 01/11/2018</p><br>
        <p>6 | There is a transverse crack across the wearing surface at pier #2. The previously mentioned spalls have been patched. The patches are in good condition.<br> Chris Everman | 05/05/2016</p><br>
        `,
      `
        <p class="pModalExamples">The wearing surface is monolithic with the deck. See deck comments. </p>
        <p class="pModalExamples">There are no deficiencies to report. </p>
        <p class="pModalExamples">There are isolated, inherent shrinkage cracks in the latex-modified wearing surface. </p>
        <p class="pModalExamples">There are sealed cracks in the wearing surface. </p>
        <p class="pModalExamples">There is map cracking throughout the bituminous wearing surface. </p>
        <p class="pModalExamples">There are unsealed cracks visible across less than 10% of the total surface area. </p>
        <p class="pModalExamples">There are isolated areas of minor peeling in the epoxy overlay. </p>
        <p class="pModalExamples">There is a 2' by 2', shallow-depth spall in the center of the wearing surface. </p>
        <p class="pModalExamples">There is a 1' longitudinal by 6" transverse, deep spall in the southbound lane of Span B. </p>
        <p class="pModalExamples">There are numerous areas of bituminous and concrete patching throughout the wearing surface. </p>
        <p class="pModalExamples">There is no waterproofing membrane between the deck and the wearing surface, therefore the wearing surface must be rated a 4 or less. </p>
        <p class="pModalExamples">There are scattered areas of peeling in less than 5% of the total surface area. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[3].link}">${linkArray[3].name}</a>
        `,
  },

  BC01: {
    // Deck
    name: `Deck (B.C.01)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Deck (B.C.01)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Deck Condition Rating:</p>
        <p>Use destructive or non-destructive testing results or visual condition indicators of materials covering the surfaces being assessed when top, underside or both surfaces are not visible for assessment. Past inspection reports and repair records may also provide supplemental information to aid in the determination of the condition rating.</p><br>
        <p>Do not consider the condition of non-monolithic wearing surfaces (i.e. overlays), stay-in-place deck forms, joint assemblies, expansion devices, bridge rails, or scuppers when determining the condition rating code for this item, except insofar as they indicate the condition of the deck itself.</p><br>
        <p>Consider the condition of a joint header only when the deck serves as a joint header. For bridges with integral decks/top flanges (e.g. rigid frames, decked girders or tee beams, voided slab beams, box girders, etc.), the deck condition may affect the superstructure condition rating; however, the superstructure condition does not affect the deck condition rating.</p><br>
        <p>The deck and superstructure condition ratings are the same for slab bridges.</p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">There are no deficiencies to report. </p>
        <p class="pModalExamples">The top of the deck is covered by an epoxy overlay. </p>
        <p class="pModalExamples">No deficiencies are showing through the overlay. </p>
        <p class="pModalExamples">The deck underside is concealed by stay-in-place forms and the copings are protected from runoff by concrete barrier walls. </p>
        <p class="pModalExamples">The deck underside is concealed by stay-in-place forms and the top of the deck by an epoxy overlay. </p>
        <p class="pModalExamples">No corrosion was found in the stay-in-place forms and the copings are in good condition. </p>
        <p class="pModalExamples">The copings are exposed to runoff beneath the metal guardrail. </p>
        <p class="pModalExamples">The copings have isolated hairline cracks and isolated areas of staining. </p>
        <p class="pModalExamples">There is minor- to moderate-depth delamination in the underside of the deck in Span A between Beams 2 and 3. </p>
        <p class="pModalExamples">There are scattered areas of minor corrosion in the stay-in-place forms. </p>
        <p class="pModalExamples">There are moderate spalls, delamination, and exposed rebar around the deck drains. </p>
        <p class="pModalExamples">There is heavy spalling with multiple layers of exposed rebar exhibiting moderate section loss along the north coping in all spans. </p>
        <p class="pModalExamples">There are large areas of deep spalling with exposed rebar exhibiting moderate section loss on the underside of the deck. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}#page=260">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BC02: {
    // Super
    name: `Superstructure (B.C.02)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Superstructure (B.C.02)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Superstructure Condition Rating:</p> 
        <p>Consider primary load carrying members when determining the condition rating code for this item, which includes cross-frames and diaphragms for curved girder bridges. Consider secondary members only if they adversely impact the primary members. Visual assessments may be supplemented with non-destructive or destructive testing results.</p><br>
        <p>The superstructure includes:</p>
        <ul class="ulModal"><li>members above the bearings for bridges with non-integral superstructure and substructure;</li><li>girders/beams for integral superstructures;</li><li>members above the spring line for arch bridges;</li><li>slabs of concrete rigid frame bridges; and</li><li>legs, knees and girders for concrete and steel rigid K-Frame or Delta-Frame bridges.
        </li></ul><br>
        <p>Consider the condition of integral headwalls and wingwalls to the first expansion joint.</p><br>
        <p>Do not consider the condition of bearings when determining the condition rating code for this item except to the extent that the bearings are causing distress in the superstructure.</p><br>
        <p>Do not consider the condition of protective coating systems when determining the condition rating code for this item except to the extent that problems with the protective coating system are indicative of problems with the underlying superstructure material. A well-formed patina on weathering steel is considered a protective coating and is not considered a defect.</p><br>
        <p>Do not consider the presence of drift, debris, and soil accumulation when determining the condition rating code for this item, except to the extent that these items are causing distress in the superstructure.</p><br>
        <p>Superstructure types without substructures may be affected by scour. When observed conditions are not consistent with the scour design or the assumptions used in the scour appraisal, scour is considered when reporting the code for this item. In this case, observed conditions also indicate a need to reevaluate Item B.AP.03 (Scour Vulnerability). Observed scour that is less than the tolerable limit determined in the scour appraisal does not affect this item.</p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">There are no deficiencies to report. </p>
        <p class="pModalExamples">The superstructure is a deck/slab. See the deck comments. </p>
        <p class="pModalExamples">There is minor cracking and delamination in the beam ends at the abutments beneath the joints. </p>
        <p class="pModalExamples">There are scattered areas of minor pitting in the steel beams. </p>
        <p class="pModalExamples">There is heavy section loss and rust scale in the beam ends at the abutments under the joints. </p>
        <p class="pModalExamples">There is a moderate perforation in the web of Beam 1 at the west abutment. </p>
        <p class="pModalExamples">There are exposed strands in Beam 1 at the west abutment. </p>
        <p class="pModalExamples">There is a large spall in the load path of Beam 1 at the west abutment. </p>
        <p class="pModalExamples">There is a moderate, diagonal crack running up toward the center of the beam (indicating shear failure). </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}#page=263">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BC07: {
    // Bridge Bearings
    name: `Bridge Bearings (B.C.07)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Bridge Bearings (B.C.07)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Bridge Bearings Condition Rating:</p> 
        <p>This item addresses the condition of all types and shapes of bridge bearings.</p><br>
        <p>Do not consider the condition of protective coatings and other protection systems when determining the condition rating code for this item, except to the extent that problems with the protective coating system are indicative of problems with the underlying bearing material.</p><br>
        <p>In cases where the bearing device is not visible, the condition can be assessed based on alignment, grade across the joint, or other indirect indicators of the condition.</p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">The bearings are adequately positioned beneath the bridge beams and fully supported by the substructure. </p>
        <p class="pModalExamples">There is minor corrosion in the bearings at the abutments. </p>
        <p class="pModalExamples">There is moderate corrosion in the bearings at the abutments. </p>
        <p class="pModalExamples">There is heavy corrosion in the bearings at the abutments. </p>
        <p class="pModalExamples">There is minor pitting in the bearings at the abutments. </p>
        <p class="pModalExamples">There is minor pitting in the bearings at the abutments that has been painted over. </p>
        <p class="pModalExamples">There is moderate pack rust and heavy corrosion in the bearings at the abutments. </p>
        <p class="pModalExamples">There is rust (lamellar) scaling between the bottom of the bearings and the masonry plates at the bearings under the abutments. </p>
        <p class="pModalExamples">There is a missing bolt in the masonry plate at bearing 1 under Beam 1 at the west abutment. </p>
        <p class="pModalExamples">The bearing at Beam 1 at the west abutment has good bearing but is slightly misaligned. </p>
        <p class="pModalExamples">The rockers at the abutments are leaning toward the backwalls. The temperature was in the 80's at the time of inspection. </p>
        <p class="pModalExamples">The bridge has integral abutments. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}#page=273">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BMAD03: {
    // Paint
    name: `Paint (B.MAD.03)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Paint (B.MAD.03)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Paint Condition Rating:</p> 
        <p>Consider surface dulling, chalking, rust and peeling when evaluating the condition rating. </p><br>
        <p>At stages of advanced deterioration, consider any section loss in the painted material.</p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">There is minor chalking and surface dulling throughout. </p>
        <p class="pModalExamples">There are scattered areas of light rust and minor peeling. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BC03: {
    // Sub
    name: `Substructure (B.C.03)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Substructure (B.C.03)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Substructure Condition Rating:</p> 
        <p>For bridges that have substructures not visible for inspection, use appropriate visual condition indicators from the superstructure or surrounding foundation materials to determine the applicable code. Visual assessments may be supplemented with non-destructive or destructive testing results.</p><br>

        <p>Consider the condition of integral abutment wingwalls to the first construction or expansion joint when determining the condition rating code for this item.</p><br>

        <p>Do not consider the condition of protective coatings, fenders and other substructure protection systems when determining the condition rating code for this item, except to the extent that these items indicate distress of the substructure, or adversely affect its condition.</p><br>

        <p>Do not consider the presence of drift, debris, and soil accumulation when determining the condition rating code for this item, except to the extent that these items are causing distress in the substructure.</p><br>

        <p>The substructure includes:</p>
        <ul class="ulModal"><li>backwalls and the members below the bearings for bridges with non-integral superstructure and substructure;</li>
        <li>members below the girders/beams for integral superstructures;</li>
        <li>thrust blocks and other members below the spring line for arch bridges;</li>
        <li>legs of concrete rigid frame bridges;</li>
        <li>abutments and footings/foundations below the leg bearings for concrete and steel rigid K-Frame or Delta-Frame bridges; and</li>
        <li>foundation piles exposed by erosion or scour.</li></ul><br>

        <p>When observed conditions are not consistent with the scour design or the assumptions used in the scour appraisal, scour is considered in the coding of this item. In this case, observed conditions also indicate a need to reevaluate Item B.AP.03 (Scour Vulnerability). Observed scour that is less than the tolerable limit determined in the scour appraisal does not affect this item.</p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">There are no deficiencies to report. </p>
        <p class="pModalExamples">There is minor staining on the interior piers and in the abutment backwalls. </p>
        <p class="pModalExamples">There is light scaling throughout the interior piers. </p>
        <p class="pModalExamples">There are isolated, minor-width, vertical cracks in the interior piers and in the abutment backwalls. </p>
        <p class="pModalExamples">There are several, shallow-depth spalls in the piers and abutments. </p>
        <p class="pModalExamples">There is an area of moderate spalling in the Pier 2 pier cap near the bearing area of Beams 1 and 2. There is still good bearing beneath the beams. </p>
        <p class="pModalExamples">There is a wide-width, horizontal crack (indicating settlement) running the length of the west abutment. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}#page=266">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BMAD05: {
    // Slopewall
    name: `Slopewall (B.MAD.05)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Slopewall (B.MAD.05)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Slopewall Condition Rating:</p> 
        <p></p><br>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">The slopewalls are in good condition. </p>
        <p class="pModalExamples">The east slopewall has wide cracking. </p>
        <p class="pModalExamples">There is moderate erosion under the east slopewall. </p>
        <p class="pModalExamples">The structure has MSE walls. </p>
        <p class="pModalExamples">There are no obvious structural deficiencies in the MSE walls. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BC04: {
    // Culvert
    name: `Culvert (B.C.04)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Culvert (B.C.04)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Culvert Condition Rating:</p> 
        <p>For culverts that have components not visible for inspection, use appropriate visual condition indicators from the roadway or surrounding foundation materials to determine the applicable code. Visual assessments may be supplemented with non-destructive or destructive testing results.</p><br>

        <p>Consider the condition of integral wingwalls and headwalls to the first construction or expansion joint when determining the condition rating code for this item.</p><br>

        <p>Do not consider the condition of protective coatings and other culvert protection systems when determining the condition rating code for this item, except to the extent that these items indicate distress of the culvert, or adversely affect its condition.</p><br>

        <p>Do not consider the presence of drift, debris, and soil accumulation when determining the condition rating code for this item, except to the extent that these items are causing distress in the culvert.</p><br>

        <p>The culvert includes:</p>
        <ul class="ulModal"><li>buried pipe or box;</li>
        <li>footings below the walls of a 3-sided box; and</li>
        <li>foundation piles exposed by erosion or scour. </li></ul><br>

        <p>When observed conditions are not consistent with the scour design or the assumptions used in the scour appraisal, scour is considered in the coding of this item. In this case, observed conditions also indicate a need to reevaluate Item B.AP.03 (Scour Vulnerability). Observed scour that is less than the tolerable limit determined in the scour appraisal does not affect this item.</p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">There are no deficiencies to report. </p>
        <p class="pModalExamples">There is minor corrosion in the flow line. </p>
        <p class="pModalExamples">There is moderate corrosion with minor pitting in the invert. </p>
        <p class="pModalExamples">No perforations are visible. </p>
        <p class="pModalExamples">There are minor deformations to the pipe shape. </p>
        <p class="pModalExamples">There are minor perforations with rust scaling throughout the flow line. </p>
        <p class="pModalExamples">There is complete section loss in the pipe invert on the north end for 20'. </p>
        <p class="pModalExamples">The pipe is pulling fill. </p>
        <p class="pModalExamples">There is minor sediment in the bottom of the pipe. </p>
        <p class="pModalExamples">The pipe has been lined. </p>
        <p class="pModalExamples">The liner is in good condition. </p>
        <p class="pModalExamples">The culvert is a concrete box widened by CMPs. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}#page=268">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BC09: {
    // Channel
    name: `Channel (B.C.09)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Channel (B.C.09)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Channel Condition Rating:</p> 
        <p>This item is used to provide a condition rating for the channel at the bridge. Consider the channel upstream and downstream only insofar as it threatens the bridge and approach roadway.</p><br>

        <p>The condition of channel protection devices is addressed under a separate item. Refer to Item B.C.10 (Channel Protection Condition Rating).</p><br>

        <p>For concrete lined channels, channel defects typically do not apply, except for Aggradation and Debris. The condition of the channel lining would be addressed by Item B.C.10 (Channel Protection Condition Rating).</p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">There are no deficiencies to report. </p>
        <p class="pModalExamples">The bridge is not over water. </p>
        <p class="pModalExamples">The channel condition is not impacting the roadway or the bridge. </p>
        <p class="pModalExamples">Under normal conditions the shallow, low-velocity channel flows from south to north through Span B. </p>
        <p class="pModalExamples">Under normal conditions the wide, deep, low-velocity channel flows from north to south through Span B. </p>
        <p class="pModalExamples">Under normal conditions the channel cannot be entered without additional precautions. </p>
        <p class="pModalExamples">Flow direction varies with rising and receding water levels. </p>
        <p class="pModalExamples">The channel is protected with riprap. </p>
        <p class="pModalExamples">The banks of the channel are protected with riprap. </p>
        <p class="pModalExamples">The banks are well vegetated. </p>
        <p class="pModalExamples">Most of the riprap under Spans A and C has washed away. </p>
        <p class="pModalExamples">There are localized areas of minor erosion. </p>
        <p class="pModalExamples">There is erosion in the west bank under Span A. </p>
        <p class="pModalExamples">There is degradation of the channel under Span B. </p>
        <p class="pModalExamples">There is channel aggradation and sediment deposits on the east side of Pier 2 under Span B. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}#page=278">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BC10: {
    // Channel Protection
    name: `Channel Protection (B.C.10)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Channel Protection (B.C.10)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Channel Protection Condition Rating:</p> 
        <p>This item is used to provide a condition rating for channel protection devices.</p><br>

        <p>Evaluate the condition and effectiveness of channel protection devices installed on banks or in the stream to mitigate channel issues that may impact the bridge. When reporting this item, consider erosion and scour, damage (unraveling, displacement, separation, and sagging), and material defects (scaling, abrasion, spalling, corrosion, cracking, splitting, and decay).</p><br>

        <p>Channel protection devices are considered countermeasures that control, inhibit, delay, or minimize stream instability and scour problems, including river training and armoring countermeasures.</p><br>

        <p>River training countermeasures may include: spurs, bendway weirs, guide banks, drop structures, and check dams. Additional river training countermeasures can be found in HEC-23 and elsewhere.</p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">There are no deficiencies to report. </p>
        <p class="pModalExamples">The bridge is not over water. </p>
        <p class="pModalExamples">The channel condition is not impacting the roadway or the bridge. </p>
        <p class="pModalExamples">Under normal conditions the shallow, low-velocity channel flows from south to north through Span B. </p>
        <p class="pModalExamples">Under normal conditions the wide, deep, low-velocity channel flows from north to south through Span B. </p>
        <p class="pModalExamples">Under normal conditions the channel cannot be entered without additional precautions. </p>
        <p class="pModalExamples">Flow direction varies with rising and receding water levels. </p>
        <p class="pModalExamples">The channel is protected with riprap. </p>
        <p class="pModalExamples">The banks of the channel are protected with riprap. </p>
        <p class="pModalExamples">The banks are well vegetated. </p>
        <p class="pModalExamples">Most of the riprap under Spans A and C has washed away. </p>
        <p class="pModalExamples">There are localized areas of minor erosion. </p>
        <p class="pModalExamples">There is erosion in the west bank under Span A. </p>
        <p class="pModalExamples">There is degradation of the channel under Span B. </p>
        <p class="pModalExamples">There is channel aggradation and sediment deposits on the east side of Pier 2 under Span B. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}#page=280">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BAP02: {
    // Overtopping Likelihood
    name: `Overtopping Likelihood (B.AP.02)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Overtopping Likelihood (B.AP.02)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Overtopping Likelihood:</p> 
        <p>An overtopping occurrence is when the waterway overtops the riding surface carried on the bridge.</p><br>

        <p>Bridge overtopping likelihood, since the year built (B.W.01), is typically determined from historical bridge inspection or maintenance records, hydraulic studies, local residents/landowners, and/or site indicators including highwater marks on the bridge or its surroundings, debris remains on bridge upper members, etc.</p><br>

        <p>For newer bridges with limited historical inspection or maintenance information, hydraulic design information can be used to establish an overtopping likelihood.</p><br>

        <p>This item does not apply to the likelihood of the waterway overtopping approach roadways.</p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">The Q100/HW elevation is significantly below the low structure elevation. </p>
        <p class="pModalExamples">The Q100/HW elevation is below the low structure elevation. </p>
        <p class="pModalExamples">The Q100/HW elevation is above the low structure elevation. </p>
        <p class="pModalExamples">The Q100/HW elevation is 582.2' and 4.3' below the low structure elevation of 586.5'. </p>
        <p class="pModalExamples">There is nothing to indicate overtopping has ever occurred. </p>
        <p class="pModalExamples">There is drift and debris deposited on the superstructure. </p>
        <p class="pModalExamples">Based on the surrounding terrain, overtopping is unlikely. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}#page=319">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BC11: {
    // Scour
    name: `Scour (B.C.11)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Scour (B.C.11)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Scour Condition Rating:</p> 
        <p>Refer to Item B.AP.03 (Scour Vulnerability) to verify if the bridge has been determined to be stable or unstable for appraised scour conditions.</p><br>

        <p>Consider design scour depth and critical scour depth, commonly found in hydraulic designs, scour evaluations, and POAs, when determining the scour condition ratings.</p><br>

        <p>When observed conditions are not consistent with the scour design or the assumptions used in the scour appraisal, this indicates a need to reevaluate Item B.AP.03 (Scour Vulnerability). </p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">There is no scour present. </p>
        <p class="pModalExamples">There is minor localized scour at the interior piers. </p>
        <p class="pModalExamples">The designed countermeasures are in good condition. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}#page=282">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BAP03: {
    // Scour Vulnerability
    name: `Scour Vulnerability (B.AP.03)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Scour Vulnerability (B.AP.03)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Scour Vulnerability:</p> 
        <p>The intent of this item is to report the status and vulnerability determination from scour appraisals required by the NBIS.</p><br>

        <p>The codes for this item are based on the appraised scour vulnerability as described in HEC-18, Evaluating Scour at Bridges; HEC-23, Bridge Scour and Stream Instability Countermeasures; and HEC-20, Stream Stability at Highway Structures.</p><br>

        <p>Scour appraisals are typically performed by a multidisciplinary team of hydraulic, geotechnical, and structural engineers (Scour Appraisal Team).</p><br>

        <p>FHWA Hydraulic Technical Advisories, manuals, and software can be found at: <a class="aBodyLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[4].link}">http://www.fhwa.dot.gov/engineering/hydraulics/index.cfm</a>.</p><br>

        <p>Refer to item B.C.11 (Scour Condition Rating) in the Component Condition Ratings subsection to address field observed scour conditions and the effect on bridge components.</p><br>

        <p>Use code B when designed, installed, and functioning countermeasures are used to address potential scour and to maintain bridge stability for new or existing bridges, or bridges with unknown foundations.</p><br>

        <p>Use code B when the Scour Appraisal Team determines that the in-place, non-designed countermeasures are fully functioning and are appropriate to mitigate the risk of scour.</p><br>

        <p>Use code C for bridges that could become unstable for the potential scour, and temporary countermeasures are installed that were not designed.</p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">There is no scour present. </p>
        <p class="pModalExamples">There is minor localized scour at the interior piers. </p>
        <p class="pModalExamples">The designed countermeasures are in good condition. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}#page=320">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[4].link}">${linkArray[4].name}</a>
        `,
  },

  BC05: {
    // Bridge Railings
    name: `Bridge Railings (B.C.05)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Bridge Railings (B.C.05)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Bridge Railings Condition Rating:</p> 
        <p>This item addresses the condition of all types and shapes of bridge railings (parapets, median barriers, or structure mounted) located on the bridge or that cross over buried structures. The condition assessment includes the portions of the railings, posts, blocking, and curbs that are part of the bridge railing system.</p><br>

        <p>Do not consider pedestrian railings when coding this item, except to the extent that the pedestrian railing is integral to the traffic barrier.</p><br>

        <p>Do not consider the condition of protective coatings and other protection systems when determining the condition rating code for this item, except to the extent that problems with the protective coating system are indicative of problems with the underlying railing material.</p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">There is no scour present. </p>
        <p class="pModalExamples">There is minor localized scour at the interior piers. </p>
        <p class="pModalExamples">The designed countermeasures are in good condition. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}#page=271">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BC06: {
    // Bridge Railing Transitions
    name: `Bridge Railing Transitions (B.C.06)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Bridge Railing Transitions (B.C.06)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Bridge Railing Transitions Condition Rating:</p> 
        <p>This item addresses the condition of the transition from the bridge railing to the approach guardrail. The condition assessment includes the portions of the railings, posts, blocking, and curbs that are part of the bridge railing transitions.</p><br>

        <p>Do not consider the condition of protective coatings and other protection systems when determining the condition rating code for this item, except to the extent that problems with the protective coating system are indicative of problems with the underlying railing transition material.</p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">There is no scour present. </p>
        <p class="pModalExamples">There is minor localized scour at the interior piers. </p>
        <p class="pModalExamples">The designed countermeasures are in good condition. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}#page=272">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        `,
  },

  BMAD06: {
    // Swallows
    name: `Swallows (B.MAD.06)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Swallows (B.MAD.06)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Swallows Condition Rating:</p> 
        <p>Information on swallows can be found in Part 9 of the INDOT BIM and in the INDOT Protected Species Guidance. Both documents are linked below and in the footer.</p><br>
        <p><a class="aBodyLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[6].link}">${linkArray[6].name}</a></p>
        <p><a class="aBodyLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[5].link}#page=18">${linkArray[5].name}</a></p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">No swallows or nests were observed. </p>
        <p class="pModalExamples">Swallows and/or nests were observed. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[6].link}">${linkArray[6].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[5].link}#page=18">${linkArray[5].name}</a>
        `,
  },

  BMAD07: {
    // Bats
    name: `Bats (B.MAD.07)`,
    header: `
        <h3><button id="headerStart" class="buttonModalHeader buttonActiveModalHeader" type="button">Bats (B.MAD.07)</button>
        <button class="buttonModalHeader" type="button">Comment History</button>
        <button class="buttonModalHeader" type="button">Example Comments</button></h3>
        `,
    tabs: [
      `
        <p class="pModalHeadings">Bats Condition Rating:</p> 
        <p>Information on bats can be found in Part 9 of the INDOT BIM and in the INDOT Protected Species Guidance. Both documents are linked below and in the footer.</p><br>
        <p><a class="aBodyLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[6].link}">${linkArray[6].name}</a></p>
        <p><a class="aBodyLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[5].link}#page=8">${linkArray[5].name}</a></p>
        `,
      `
        <p>there are some minor deficiences in the webs</p>
        <p>Inspected from the ground.</p>
        `,
      `
        <p class="pModalExamples">No bats were seen or heard. </p>
        <p class="pModalExamples">Bats and/or guano were observed. </p>
        <p class="pModalExamples">Bats heard nesting at bridge or inside bridge components. </p>
        `,
    ],
    footer: `
        <h3 class="h3Footer">Links:</h3> 
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[0].link}">${linkArray[0].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[1].link}">${linkArray[1].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[2].link}">${linkArray[2].name}</a>
        <a class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[6].link}">${linkArray[6].name}</a>
        <a id="footerStop" class="aModalFooterLink" rel="noopener noreferrer" target=”_tab” href="${linkArray[5].link}#page=8">${linkArray[5].name}</a>
        `,
  },
};
