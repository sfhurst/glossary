const wallsRatingTable = [
  {
    code: "9",
    condition: "EXCELLENT",
    description: "None or isolated inherent defects. Appears stable."
  },
  {
    code: "8",
    condition: "VERY GOOD",
    description: "Some inherent defects. Appears stable."
  },
  {
    code: "7",
    condition: "GOOD",
    description: "Some minor defects. Appears stable. Isolated insignificant movements, separations, or distortions."
  },
  {
    code: "6",
    condition: "SATISFACTORY",
    description: "Widespread minor or isolated moderate defects. Appears stable, but widespread insignificant or isolated minor movements, separations, or distortions visible."
  },
  {
    code: "5",
    condition: "FAIR",
    description: "Some moderate defects. Some minor movements, separations, or distortions visible. Overall apparent strength and functionality of the wall is not affected."
  },
  {
    code: "4",
    condition: "POOR",
    description: "Widespread moderate or isolated major defects. Widespread movements, separations, or distortions are visible. Overall apparent strength and functionality of the wall is affected."
  },
  {
    code: "3",
    condition: "SERIOUS",
    description: "Widespread major defects. Widespread movements, separations, or distortions visible. Strength and functionality detrimentally affected and local failure appears likely."
  },
  {
    code: "2",
    condition: "CRITICAL",
    description: "Strength and functionality detrimentally affected and isolated local failures present. Restrictions behind or in front of wall either warranted or in place, and corrective actions needed to keep wall in service."
  },
  {
    code: "1",
    condition: "IMMINENT FAILURE",
    description: "Wall essentially failed. Areas behind and in front of wall must be closed off due to serious material movement and loss of retainment. Repair or rehabilitation may return wall to service."
  },
  {
    code: "0",
    condition: "FAILED",
    description: "Wall failed. Areas behind and in front of wall must be closed off due to serious material movement and loss of retainment. Wall is beyond corrective action and must be replaced to restore service."
  }
];

const walls_secondaryRatingTable = [
  {
    code: "7",
    condition: "GOOD",
    description: "Appears predominantly sound, intact, and functioning as intended with little to no visible deterioration, defects, movements, or adverse issues. Drainage where visible appear open and functioning. Ground surfaces well graded with no visible deformation or erosion. Little to no vegetation growth either adversely affecting the wall or prohibiting access for inspection."
  },
  {
    code: "5",
    condition: "FAIR",
    description: "Appears predominantly sound and functional. Minor to moderate deterioration, defects, local minor movement and rotation, or issues visible that are consistent with the wall age. Drainage where visible appear open and functioning with little drainage erosion. Ground surfaces exhibit some minor to moderate erosion or heave. Vegetation growth is measurable but is not visibly affecting the wall or prohibiting access for inspection."
  },
  {
    code: "4",
    condition: "POOR",
    description: "Widespread deterioration, defects, or issues visible such that the apparent strength and functionality is adversely affected. Major movement or rotation visible. Drainage visibly damaged or not functioning. Backfill leaking from behind the wall. Ground surfaces noticeably deformed, heaved, or eroded. Vegetation growth is measurable and visibly affecting the wall or prohibiting access for inspection."
  },
  {
    code: "3",
    condition: "SERIOUS",
    description: "Significant deterioration and issues; major movement or rotation visible; apparent strength and functionality are detrimentally affected and local failures either appear likely or are already present. Major loss of backfill apparent. Drainage not functional. Ground surface exhibiting significant distortion, heave, or erosion. Vegetation growth is excessive, impacting wall serviceability, or prohibiting inspection access."
  },
  {
    code: "N",
    condition: "NOT APPLICABLE",
    description: "Retaining wall component is not present."
  }
];

const wallTypeKey = [
  { code: "MSE", wall: "MSE", type: "Mechanically Stabilized Earth (MSE)" },
  { code: "CSG", wall: "CSG", type: "Cantilever Semi-Gravity" },
  { code: "G", wall: "G", type: "Gravity" },
  { code: "CDS", wall: "CDS", type: "Cantilever Drilled Shaft" },
  { code: "ADS", wall: "ADS", type: "Anchored Drilled Shaft" },
  { code: "CSH", wall: "CSH", type: "Cantilever Sheet Pile" },
  { code: "ASH", wall: "ASH", type: "Anchored Sheet Pile" },
  { code: "CSP", wall: "CSP", type: "Cantilever Soldier Pile" },
  { code: "ASP", wall: "ASP", type: "Anchored Soldier Pile" },
  { code: "MBW", wall: "MBW", type: "Modular Block Wall" },
  { code: "BN", wall: "BN", type: "Bin" },
  { code: "CB", wall: "CB", type: "Crib" },
  { code: "O", wall: "O", type: "Other" }
];

const primaryWallMaterialKey = [
  { code: "PC", material: "Precast Concrete" },
  { code: "CIP", material: "Cast-in-Place Concrete" },
  { code: "STL", material: "Steel" },
  { code: "MB", material: "Masonry Block" },
  { code: "ST", material: "Stone" },
  { code: "TM", material: "Timber" },
  { code: "O", material: "Other" }
];

const wallTypes = {
  Anchor: {
    name: "Anchor",
    definition: "A tendon, tendon bundle, rod, or bar element that is installed into the ground through the wall and anchored into stable material well behind potentially unstable soil, then tensioned and attached to the wall to provide additional resistance to earth pressures. Anchors are also referred to as Tie-Backs or Ground Anchors."
  },
  BinWall: {
    name: "Bin Wall",
    definition: "A type of gravity retaining wall consisting of bins typically fabricated from metal or concrete, filled with granular soil material, and then placed adjacent and atop of one another. The individual bins are typically placed in a non-interlocking manner."
  },
  CantileverSemiGravity: {
    name: "Cantilever Semi-Gravity",
    definition: "A type of retaining wall that has a vertical stem wall that is structurally connected to a base slab, or footing. The base slab may be either bearing directly on underlying foundation soil or supported on piles. The vertical stem wall is typically reinforced concrete or reinforced, solid-grouted concrete masonry block, while the base slab is reinforced concrete. The combined weight of the retaining wall itself and the soil mass on the base slab provides overall stability against earth pressures, while the stem wall behaves as a vertical cantilever member that is reinforced at the base of the wall providing cantilever resistance to lateral earth pressures."
  },
  CribWall: {
    name: "Crib Wall",
    definition: "A type of gravity retaining wall consisting of interlocking elements of timber, metal, or precast concrete arranged in the form of bins (or cribwork) and filled with granular soil material. Crib walls gain their stability not only from their weight but also to some extent from the strength of fill within the bins."
  },
  DrilledShaft: {
    name: "Drilled Shaft",
    definition: "A structural element constructed using an auger to drill into a soil mass to remove soil and then filling the drilled void with concrete. Drilled shafts used for retaining wall construction are typically built as Secant Walls (consisting of overlapping or intersecting drilled shafts), Soldier Walls (consisting of spaced drilled shafts with lagging), or Tangent Walls (consisting of drilled shafts placed side-by-side and touching one another, but not overlapping)."
  },
  Gabion: {
    name: "Gabion",
    definition: "A cage, wire container, cylinder, or similar type box filled with rocks, broken concrete, or granular soil used in retaining wall and erosion control applications."
  },
  GravityWall: {
    name: "Gravity Wall",
    definition: "A wall typically built with stone masonry, mass concrete, or other heavy material that depends on its overall mass, or weight, to resist earth pressure from behind."
  },
  Lagging: {
    name: "Lagging",
    definition: "Structural members that are typically timber, steel, or concrete that are installed behind, between or in front of piles or drilled shafts to support and retain the soil material between spaced piles. Timber lagging is typically used for temporary construction while steel or concrete lagging is typically used for permanent construction."
  },
  ModularBlockWall: {
    name: "Modular Block Wall",
    definition: "A gravity wall built using interlocking blocks that are typically masonry, concrete, or concrete masonry units (CMU) to resist earth pressure from behind. Some modular block walls may also use artificial reinforcing similar to MSE walls."
  },
  MSE: {
    name: "MSE",
    definition: "Mechanically stabilized earth, sometimes referred to as reinforced soil, is a soil mass embankment constructed with artificial reinforcing that typically consist of either geosynthetics or steel material. When used as retaining walls, MSE walls are designed as gravity walls built with multiple layers of horizontal reinforcing in granular backfill connected to wall face components."
  },
  Pile: {
    name: "Pile",
    definition: "A structural element driven or drilled into the ground to resist vertical and/or horizontal loads. Piles are usually rolled steel shapes, concrete, or timber."
  },
  RetainingWall: {
    name: "Retaining Wall",
    definition: "A permanent, relatively rigid structure that supports a soil mass at slopes steeper than their angle of rest to provide usable space both above and in front of the wall."
  },
  SheetPileWall: {
    name: "Sheet Pile Wall",
    definition: "A cantilever wall built using interlocking plate piles fabricated from pressed or molded steel sheet metal to provide structural resistance to lateral earth pressures. Such walls can be fully cantilevered or include anchors for additional resistance."
  },
  SoilNails: {
    name: "Soil Nails",
    definition: "Steel rods providing soil reinforcement into embankments that are either grouted into drilled holes or driven into soil at close spacing."
  },
  SoldierPileWall: {
    name: "Soldier Pile Wall",
    definition: "A cantilever wall built using piles, typically rolled steel shapes and installed at regular intervals (nominally 6 to 10 foot spacings) to provide structural resistance to lateral earth pressures. Lagging is then placed between the soldier piles to both support and retain the soil material between piles and to transfer those lateral earth pressures to the soldier piles. Such walls can be fully cantilevered or include anchors for additional resistance."
  }
};


