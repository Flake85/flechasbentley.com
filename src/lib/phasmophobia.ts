export interface Evidence {
  id: number;
  name: string;
}

export interface Ghost {
  id: number;
  name: string;
  evidence: Evidence[];
  weakness: string;
  strength: string;
}

export const evidence = {
  EMF5: {
    name: "EMF 5",
    id: 0
  },
  SpiritBox: {
    name: "Spirit Box",
    id: 1
  },
  FingerPrints: {
    name: "Finger Prints",
    id: 2
  },
  GhostOrbs: {
    name: "Ghost Orbs",
    id: 3
  },
  GhostWriting: {
    name: "Ghost Writing",
    id: 4
  },
  FreezingTemps: {
    name: "Freezing Temps",
    id: 5
  },
  DOTSProjector: {
    name: "DOTS Projector",
    id: 6
  }
};

export const ghosts = [
  {
    id: 0,
    name: "Spirit",
    evidence: [evidence.EMF5, evidence.SpiritBox, evidence.GhostWriting],
    weakness: "Smudge Sticks stop hunting for a long time.",
    strength: "None."
  },
  {
    id: 1,
    name: "Wraith",
    evidence: [evidence.EMF5, evidence.SpiritBox, evidence.DOTSProjector],
    weakness: "Salt.",
    strength: "No footprints."
  },
  {
    id: 2,
    name: "Phantom",
    evidence: [
      evidence.SpiritBox,
      evidence.FingerPrints,
      evidence.DOTSProjector
    ],
    weakness: "Taking photos will make it disappear.",
    strength: "Sanity will drop fast if you look at it."
  },
  {
    id: 3,
    name: "Poltergeist",
    evidence: [
      evidence.SpiritBox,
      evidence.FingerPrints,
      evidence.GhostWriting
    ],
    weakness: "Empty rooms.",
    strength: "Throws lots of objects at once."
  },
  {
    id: 4,
    name: "Banshee",
    evidence: [
      evidence.FingerPrints,
      evidence.GhostOrbs,
      evidence.DOTSProjector
    ],
    weakness: "Crucifix makes them less active.",
    strength: "Targets one person at a time"
  },
  {
    id: 5,
    name: "Jinn",
    evidence: [evidence.EMF5, evidence.FingerPrints, evidence.FreezingTemps],
    weakness: "Turning off power blocks their ability",
    strength: "Travels fast if target is far away."
  },
  {
    id: 6,
    name: "Mare",
    evidence: [evidence.SpiritBox, evidence.GhostOrbs, evidence.GhostWriting],
    weakness: "Turning lights on.",
    strength: "Darkness!"
  },
  {
    id: 7,
    name: "Revenant",
    evidence: [
      evidence.GhostOrbs,
      evidence.GhostWriting,
      evidence.FreezingTemps
    ],
    weakness: "Hiding will slow the ghost down",
    strength: "Fast and can't be outran"
  },
  {
    id: 8,
    name: "Shade",
    evidence: [evidence.EMF5, evidence.GhostWriting, evidence.FreezingTemps],
    weakness: "Won't hunt if too many people are around.",
    strength: "Shy and hard to find."
  },
  {
    id: 9,
    name: "Demon",
    evidence: [
      evidence.FingerPrints,
      evidence.GhostWriting,
      evidence.FingerPrints
    ],
    weakness: "Sanity can't be lowered by using Ouija Board.",
    strength: "Attacks frequently."
  },
  {
    id: 10,
    name: "Yurei",
    evidence: [
      evidence.GhostOrbs,
      evidence.FreezingTemps,
      evidence.DOTSProjector
    ],
    weakness: "Smudging the room delays ghost movement.",
    strength: "Sanity drops fast."
  },
  {
    id: 11,
    name: "Oni",
    evidence: [evidence.EMF5, evidence.FreezingTemps, evidence.DOTSProjector],
    weakness: "More people around = easier to find.",
    strength: "More people around = more activity."
  },
  {
    id: 12,
    name: "Yokai",
    evidence: [evidence.SpiritBox, evidence.GhostOrbs, evidence.DOTSProjector],
    weakness: "It only hears close voices when hunting.",
    strength: "Talking near it angers the ghost."
  },
  {
    id: 13,
    name: "Hantu",
    evidence: [
      evidence.FingerPrints,
      evidence.GhostOrbs,
      evidence.FreezingTemps
    ],
    weakness: "Moves slower in warmer areas.",
    strength: "Moves faster in colder areas."
  },
  {
    id: 14,
    name: "Myling",
    evidence: [evidence.EMF5, evidence.FingerPrints, evidence.GhostWriting],
    weakness: "Makes paranormal sounds more often.",
    strength: "Quieter when hunting."
  },
  {
    id: 15,
    name: "Goryo",
    evidence: [evidence.EMF5, evidence.FingerPrints, evidence.DOTSProjector],
    weakness: "Rarely seen far from its room.",
    strength: "Only shows itself when nobody is near."
  }
];

export const getGhostById = (ghosts: Ghost[], id: number): Ghost => {
  const res = ghosts.find(ghost => ghost.id === id);
  if (res) return res;
  throw new Error("ghost id was invalid");
};
