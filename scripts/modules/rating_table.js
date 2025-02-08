const alignmentRatingTable = [
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
];

const table20RatingTable = [
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
];

const terminalRatingTable = [
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
];

const jointsRatingTable = [
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
];

const approachRatingTable = [
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
];

const paintRatingTable = [
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
];

const channelRatingTable = [
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
];

const channelProRatingTable = [
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
];

const overtoppingRatingTable = [
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
];

const scourRatingTable = [
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
];

const vulnerabilityRatingTable = [
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
];

const slopewallsRatingTable = [
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
];

const swallowsRatingTable = [
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
];

const batsRatingTable = [
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
];
