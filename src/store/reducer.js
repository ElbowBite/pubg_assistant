import * as actionTypes from "./actionTypes";
import { updateObject } from "../shared/utility";

const initState = {
  weapons: {
    ARs: [
      {
        name: "AKM",
        baseDmg: 47
      },
      {
        name: "AUG_A3",
        baseDmg: 41
      },
      {
        name: "G36C",
        baseDmg: 41
      },
      {
        name: "Groza",
        baseDmg: 47
      },
      {
        name: "HK416",
        baseDmg: 41
      },
      {
        name: "M16A4",
        baseDmg: 43
      },
      {
        name: "M762_Beryl",
        baseDmg: 46
      },
      {
        name: "Mk47_Mutant",
        baseDmg: 49
      },
      {
        name: "QBZ95",
        baseDmg: 41
      },
      {
        name: "SCAR_L",
        baseDmg: 41
      }
    ],
    DMRs: [
      {
        name: "Mini14",
        baseDmg: 46
      },
      {
        name: "Mk14",
        baseDmg: 61
      },
      {
        name: "QBU",
        baseDmg: 48
      },
      {
        name: "SKS",
        baseDmg: 53
      },
      {
        name: "SLR",
        baseDmg: 58
      },
      {
        name: "VSS",
        baseDmg: 41
      }
    ],
    LMGs: [
      {
        name: "DP_28",
        baseDmg: 51
      },
      {
        name: "M249",
        baseDmg: 45
      }
    ],
    Melee: [
      {
        name: "Crowbar",
        baseDmg: 60
      },
      {
        name: "Machete",
        baseDmg: 60
      },
      {
        name: "Pan",
        baseDmg: 80
      },
      {
        name: "Sickle",
        baseDmg: 60
      }
    ],
    Pistols: [
      {
        name: "Deagle",
        baseDmg: 62
      },
      {
        name: "Flare_gun",
        baseDmg: 0
      },
      {
        name: "P18C",
        baseDmg: 23
      },
      {
        name: "P92",
        baseDmg: 35
      },
      {
        name: "P1911",
        baseDmg: 41
      },
      {
        name: "R45",
        baseDmg: 55
      },
      {
        name: "R1895",
        baseDmg: 55
      },
      {
        name: "Skorpion",
        baseDmg: 22
      }
    ],
    SGs: [
      {
        name: "S12K",
        baseDmg: 24
      },
      {
        name: "S686",
        baseDmg: 26
      },
      {
        name: "S1897",
        baseDmg: 26
      },
      {
        name: "Sawed_off",
        baseDmg: 22
      }
    ],
    SMGs: [
      {
        name: "MP5K",
        baseDmg: 33
      },
      {
        name: "PP-19_Bizon",
        baseDmg: 35
      },
      {
        name: "Thompson",
        baseDmg: 40
      },
      {
        name: "UMP",
        baseDmg: 39
      },
      {
        name: "UZI",
        baseDmg: 26
      },
      {
        name: "Vector",
        baseDmg: 31
      }
    ],
    SRs: [
      {
        name: "AWM",
        baseDmg: 105
      },
      {
        name: "Kar98k",
        baseDmg: 79
      },
      {
        name: "M24",
        baseDmg: 75
      },
      {
        name: "Win94",
        baseDmg: 79
      },
      {
        name: "Crossbow",
        baseDmg: 105
      }
    ]
  },
  curWeapType: "ARs",
  curWeapon: "AKM",
  gear: {
    helmets: [
			{
				name: "lvl0",
				dmgMulitplier: 1
			},
      {
        name: "lvl1",
        dmgMulitplier: 0.3
      },
      {
        name: "lvl2",
        dmgMulitplier: 0.4
      },
      {
        name: "lvl3",
        dmgMulitplier: 0.55
      }
    ],
    vests: [
			{
				name: "lvl0",
				dmgMulitplier: 1
			},
      {
        name: "lvl1",
        dmgMulitplier: 0.3
      },
      {
        name: "lvl2",
        dmgMulitplier: 0.4
      },
      {
        name: "lvl3",
        dmgMulitplier: 0.55
      }
    ]
  },
  curHelmet: "lvl0",
	curVest: "lvl0",
	dmgMulitpliers: {
		ARs: [
			{
				name: "Head",
				multiplier: 2.35
			},
			{
				name: "Neck",
				multiplier: 2.35
			},
			{
				name: "Shoulder",
				multiplier: 1
			},
			{
				name: "UpperArm",
				multiplier: 0.9
			},
			{
				name: "Chest",
				multiplier: 1
			},
			{
				name: "LowerArm",
				multiplier: 0.9
			},
			{
				name: "Stomach",
				multiplier: 1
			},
			{
				name: "LowerStomach",
				multiplier: 1
			},
			{
				name: "Groin",
				multiplier: 1
			},
			{
				name: "Hand",
				multiplier: 0.9
			},
			{
				name: "Thigh",
				multiplier: 0.9
			},
			{
				name: "Calf",
				multiplier: 0.9
			},
			{
				name: "Foot",
				multiplier: 0.9
			}
		],
		DMRs: [
			{
				name: "Head",
				multiplier: 2.35
			},
			{
				name: "Neck",
				multiplier: 2.35
			},
			{
				name: "Shoulder",
				multiplier: 1.05
			},
			{
				name: "UpperArm",
				multiplier: 0.95
			},
			{
				name: "Chest",
				multiplier: 1.05
			},
			{
				name: "LowerArm",
				multiplier: 0.95
			},
			{
				name: "Stomach",
				multiplier: 1.05
			},
			{
				name: "LowerStomach",
				multiplier: 1.05
			},
			{
				name: "Groin",
				multiplier: 1.05
			},
			{
				name: "Hand",
				multiplier: 0.95
			},
			{
				name: "Thigh",
				multiplier: 0.95
			},
			{
				name: "Calf",
				multiplier: 0.95
			},
			{
				name: "Foot",
				multiplier: 0.95
			}
		],
		LMGs: [
			{
				name: "Head",
				multiplier: 2.35
			},
			{
				name: "Neck",
				multiplier: 2.35
			},
			{
				name: "Shoulder",
				multiplier: 1
			},
			{
				name: "UpperArm",
				multiplier: 0.9
			},
			{
				name: "Chest",
				multiplier: 1
			},
			{
				name: "LowerArm",
				multiplier: 0.9
			},
			{
				name: "Stomach",
				multiplier: 1
			},
			{
				name: "LowerStomach",
				multiplier: 1
			},
			{
				name: "Groin",
				multiplier: 1
			},
			{
				name: "Hand",
				multiplier: 0.9
			},
			{
				name: "Thigh",
				multiplier: 0.9
			},
			{
				name: "Calf",
				multiplier: 0.9
			},
			{
				name: "Foot",
				multiplier: 0.9
			}
		],
		Melee: [
			{
				name: "Head",
				multiplier: 1.5
			},
			{
				name: "Neck",
				multiplier: 1.5
			},
			{
				name: "Shoulder",
				multiplier: 1
			},
			{
				name: "UpperArm",
				multiplier: 1.2
			},
			{
				name: "Chest",
				multiplier: 1
			},
			{
				name: "LowerArm",
				multiplier: 1.2
			},
			{
				name: "Stomach",
				multiplier: 1
			},
			{
				name: "LowerStomach",
				multiplier: 1
			},
			{
				name: "Groin",
				multiplier: 1
			},
			{
				name: "Hand",
				multiplier: 1.2
			},
			{
				name: "Thigh",
				multiplier: 1.2
			},
			{
				name: "Calf",
				multiplier: 1.2
			},
			{
				name: "Foot",
				multiplier: 1.2
			}
		],
		Pistols: [
			{
				name: "Head",
				multiplier: 2
			},
			{
				name: "Neck",
				multiplier: 2
			},
			{
				name: "Shoulder",
				multiplier: 1
			},
			{
				name: "UpperArm",
				multiplier: 1
			},
			{
				name: "Chest",
				multiplier: 1
			},
			{
				name: "LowerArm",
				multiplier: 1
			},
			{
				name: "Stomach",
				multiplier: 1
			},
			{
				name: "LowerStomach",
				multiplier: 1
			},
			{
				name: "Groin",
				multiplier: 1
			},
			{
				name: "Hand",
				multiplier: 1
			},
			{
				name: "Thigh",
				multiplier: 1
			},
			{
				name: "Calf",
				multiplier: 1
			},
			{
				name: "Foot",
				multiplier: 1
			}
		],
		SGs: [
			{
				name: "Head",
				multiplier: 1.5
			},
			{
				name: "Neck",
				multiplier: 1.5
			},
			{
				name: "Shoulder",
				multiplier: 1
			},
			{
				name: "UpperArm",
				multiplier: 0.9
			},
			{
				name: "Chest",
				multiplier: 1
			},
			{
				name: "LowerArm",
				multiplier: 0.9
			},
			{
				name: "Stomach",
				multiplier: 1
			},
			{
				name: "LowerStomach",
				multiplier: 1
			},
			{
				name: "Groin",
				multiplier: 1
			},
			{
				name: "Hand",
				multiplier: 0.9
			},
			{
				name: "Thigh",
				multiplier: 0.9
			},
			{
				name: "Calf",
				multiplier: 0.9
			},
			{
				name: "Foot",
				multiplier: 0.9
			}
		],
		SMGs: [
			{
				name: "Head",
				multiplier: 1.8
			},
			{
				name: "Neck",
				multiplier: 1.8
			},
			{
				name: "Shoulder",
				multiplier: 1.05
			},
			{
				name: "UpperArm",
				multiplier: 1.3
			},
			{
				name: "Chest",
				multiplier: 1.05
			},
			{
				name: "LowerArm",
				multiplier: 1.3
			},
			{
				name: "Stomach",
				multiplier: 1.05
			},
			{
				name: "LowerStomach",
				multiplier: 1.05
			},
			{
				name: "Groin",
				multiplier: 1
			},
			{
				name: "Hand",
				multiplier: 1.3
			},
			{
				name: "Thigh",
				multiplier: 1.3
			},
			{
				name: "Calf",
				multiplier: 1.3
			},
			{
				name: "Foot",
				multiplier: 1.3
			}
		],
		SRs: [
			{
				name: "Head",
				multiplier: 2.5
			},
			{
				name: "Neck",
				multiplier: 2.5
			},
			{
				name: "Shoulder",
				multiplier: 1.3
			},
			{
				name: "UpperArm",
				multiplier: 0.95
			},
			{
				name: "Chest",
				multiplier: 1.3
			},
			{
				name: "LowerArm",
				multiplier: 0.95
			},
			{
				name: "Stomach",
				multiplier: 1.3
			},
			{
				name: "LowerStomach",
				multiplier: 1.3
			},
			{
				name: "Groin",
				multiplier: 1.1
			},
			{
				name: "Hand",
				multiplier: 0.95
			},
			{
				name: "Thigh",
				multiplier: 0.95
			},
			{
				name: "Calf",
				multiplier: 0.95
			},
			{
				name: "Foot",
				multiplier: 0.95
			}
		],
		Crossbow: [
			{
				name: "Head",
				multiplier: 2.3
			},
			{
				name: "Neck",
				multiplier: 2.3
			},
			{
				name: "Shoulder",
				multiplier: 1.4
			},
			{
				name: "UpperArm",
				multiplier: 1.2
			},
			{
				name: "Chest",
				multiplier: 1.4
			},
			{
				name: "LowerArm",
				multiplier: 1.2
			},
			{
				name: "Stomach",
				multiplier: 1.4
			},
			{
				name: "LowerStomach",
				multiplier: 1.4
			},
			{
				name: "Groin",
				multiplier: 1.4
			},
			{
				name: "Hand",
				multiplier: 1.2
			},
			{
				name: "Thigh",
				multiplier: 1.2
			},
			{
				name: "Calf",
				multiplier: 1.2
			},
			{
				name: "Foot",
				multiplier: 1.2
			}
		]
	}
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_WEAPON_TYPE:
      return updateObject(state, { curWeapType: action.newWeapType });
    case actionTypes.SET_WEAPON:
      return updateObject(state, { curWeapon: action.newWeapon });
    case actionTypes.SET_HELMET:
      return updateObject(state, { curHelmet: action.newHelmet });
    case actionTypes.SET_VEST:
      return updateObject(state, { curVest: action.newVest });
    default:
      return state;
  }
};

export default reducer;
