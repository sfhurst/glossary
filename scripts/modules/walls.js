const wallsRatingTable = [
  {
    code: "9",
    condition: "EXCELLENT",
    description: "None or isolated inherent defects. Appears stable.",
  },
  {
    code: "8",
    condition: "VERY GOOD",
    description: "Some inherent defects. Appears stable.",
  },
  {
    code: "7",
    condition: "GOOD",
    description: "Some minor defects. Appears stable. Isolated insignificant movements, separations, or distortions.",
  },
  {
    code: "6",
    condition: "SATISFACTORY",
    description: "Widespread minor or isolated moderate defects. Appears stable, but widespread insignificant or isolated minor movements, separations, or distortions visible.",
  },
  {
    code: "5",
    condition: "FAIR",
    description: "Some moderate defects. Some minor movements, separations, or distortions visible. Overall apparent strength and functionality of the wall is not affected.",
  },
  {
    code: "4",
    condition: "POOR",
    description:
      "Widespread moderate or isolated major defects. Widespread movements, separations, or distortions are visible. Overall apparent strength and functionality of the wall is affected.",
  },
  {
    code: "3",
    condition: "SERIOUS",
    description:
      "Widespread major defects. Widespread movements, separations, or distortions visible. Strength and functionality detrimentally affected and local failure appears likely.",
  },
  {
    code: "2",
    condition: "CRITICAL",
    description:
      "Strength and functionality detrimentally affected and isolated local failures present. Restrictions behind or in front of wall either warranted or in place, and corrective actions needed to keep wall in service.",
  },
  {
    code: "1",
    condition: "IMMINENT FAILURE",
    description:
      "Wall essentially failed. Areas behind and in front of wall must be closed off due to serious material movement and loss of retainment. Repair or rehabilitation may return wall to service.",
  },
  {
    code: "0",
    condition: "FAILED",
    description:
      "Wall failed. Areas behind and in front of wall must be closed off due to serious material movement and loss of retainment. Wall is beyond corrective action and must be replaced to restore service.",
  },
];

const walls_secondaryRatingTable = [
  {
    code: "7",
    condition: "GOOD",
    description:
      "Appears predominantly sound, intact, and functioning as intended with little to no visible deterioration, defects, movements, or adverse issues. Drainage where visible appear open and functioning. Ground surfaces well graded with no visible deformation or erosion. Little to no vegetation growth either adversely affecting the wall or prohibiting access for inspection.",
  },
  {
    code: "5",
    condition: "FAIR",
    description:
      "Appears predominantly sound and functional. Minor to moderate deterioration, defects, local minor movement and rotation, or issues visible that are consistent with the wall age. Drainage where visible appear open and functioning with little drainage erosion. Ground surfaces exhibit some minor to moderate erosion or heave. Vegetation growth is measurable but is not visibly affecting the wall or prohibiting access for inspection.",
  },
  {
    code: "4",
    condition: "POOR",
    description:
      "Widespread deterioration, defects, or issues visible such that the apparent strength and functionality is adversely affected. Major movement or rotation visible. Drainage visibly damaged or not functioning. Backfill leaking from behind the wall. Ground surfaces noticeably deformed, heaved, or eroded. Vegetation growth is measurable and visibly affecting the wall or prohibiting access for inspection.",
  },
  {
    code: "3",
    condition: "SERIOUS",
    description:
      "Significant deterioration and issues; major movement or rotation visible; apparent strength and functionality are detrimentally affected and local failures either appear likely or are already present. Major loss of backfill apparent. Drainage not functional. Ground surface exhibiting significant distortion, heave, or erosion. Vegetation growth is excessive, impacting wall serviceability, or prohibiting inspection access.",
  },
  {
    code: "N",
    condition: "NOT APPLICABLE",
    description: "Retaining wall component is not present.",
  },
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
  { code: "O", wall: "O", type: "Other" },
];

const primaryWallMaterialKey = [
  { code: "PC", material: "Precast Concrete" },
  { code: "CIP", material: "Cast-in-Place Concrete" },
  { code: "STL", material: "Steel" },
  { code: "MB", material: "Masonry Block" },
  { code: "ST", material: "Stone" },
  { code: "TM", material: "Timber" },
  { code: "O", material: "Other" },
];
