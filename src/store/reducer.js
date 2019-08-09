import * as actionTypes from "./actionTypes";

const initState = {
  weapons: {
    ARs: [
      {
        name: "AKM",
        baseDmg: 47,
        fireRate: 0.1
      },
      {
        name: "AUG_A3",
        baseDmg: 41,
        fireRate: 0.086
      },
      {
        name: "G36C",
        baseDmg: 41,
        fireRate: 0.086
      },
      {
        name: "Groza",
        baseDmg: 47,
        fireRate: 0.08
      },
      {
        name: "HK416",
        baseDmg: 41,
        fireRate: 0.086
      },
      {
        name: "M16A4",
        baseDmg: 43,
        fireRate: 0.1
      },
      {
        name: "M762_Beryl",
        baseDmg: 46,
        fireRate: 0.086
      },
      {
        name: "Mk47_Mutant",
        baseDmg: 49,
        fireRate: 0.1
      },
      {
        name: "QBZ95",
        baseDmg: 41,
        fireRate: 0.092
      },
      {
        name: "SCAR-L",
        baseDmg: 41,
        fireRate: 0.096
      }
    ],
    DMRs: [
      {
        name: "Mini14",
        baseDmg: 46,
        fireRate: 0.1
      },
      {
        name: "Mk14",
        baseDmg: 61,
        fireRate: 0.09
      },
      {
        name: "QBU",
        baseDmg: 48,
        fireRate: 0.1
      },
      {
        name: "SKS",
        baseDmg: 53,
        fireRate: 0.1
      },
      {
        name: "SLR",
        baseDmg: 58,
        fireRate: 0.1
      },
      {
        name: "VSS",
        baseDmg: 41,
        fireRate: 0.086
      }
    ],
    LMGs: [
      {
        name: "DP_28",
        baseDmg: 51,
        fireRate: 0.109
      },
      {
        name: "M249",
        baseDmg: 45,
        fireRate: 0.075
      }
    ],
    Melee: [
      {
        name: "Crowbar",
        baseDmg: 60,
        fireRate: 0.75
      },
      {
        name: "Machete",
        baseDmg: 60,
        fireRate: 0.75
      },
      {
        name: "Pan",
        baseDmg: 80,
        fireRate: 0.75
      },
      {
        name: "Sickle",
        baseDmg: 60,
        fireRate: 0.75
      },
      {
        name: "Jump_punch",
        baseDmg: 38,
        fireRate: 1
      },
      {
        name: "Punch",
        baseDmg: 18,
        fireRate: 0.33
      }
    ],
    Pistols: [
      {
        name: "Deagle",
        baseDmg: 62,
        fireRate: 0.25
      },
      {
        name: "P18C",
        baseDmg: 23,
        fireRate: 0.06
      },
      {
        name: "P92",
        baseDmg: 35,
        fireRate: 0.135
      },
      {
        name: "P1911",
        baseDmg: 41,
        fireRate: 0.11
      },
      {
        name: "R45",
        baseDmg: 55,
        fireRate: 0.25
      },
      {
        name: "R1895",
        baseDmg: 55,
        fireRate: 0.4
      },
      {
        name: "Skorpion",
        baseDmg: 22,
        fireRate: 0.071
      }
    ],
    SGs: [
      {
        name: "S12K",
        numberOfPellets: 9,
        baseDmg: 24,
        fireRate: 0.25
      },
      {
        name: "S686",
        numberOfPellets: 9,
        baseDmg: 26,
        fireRate: 0.2
      },
      {
        name: "S1897",
        numberOfPellets: 9,
        baseDmg: 26,
        fireRate: 0.75
      },
      {
        name: "Sawed_off",
        numberOfPellets: 8,
        baseDmg: 22,
        fireRate: 0.25
      }
    ],
    SMGs: [
      {
        name: "MP5K",
        baseDmg: 33,
        fireRate: 0.067
      },
      {
        name: "PP-19_Bizon",
        baseDmg: 35,
        fireRate: 0.086
      },
      {
        name: "Thompson",
        baseDmg: 40,
        fireRate: 0.086
      },
      {
        name: "UMP",
        baseDmg: 39,
        fireRate: 0.092
      },
      {
        name: "UZI",
        baseDmg: 26,
        fireRate: 0.048
      },
      {
        name: "Vector",
        baseDmg: 31,
        fireRate: 0.054
      }
    ],
    SRs: [
      {
        name: "AWM",
        baseDmg: 105,
        fireRate: 1.85
      },
      {
        name: "Kar98k",
        baseDmg: 79,
        fireRate: 1.9
      },
      {
        name: "M24",
        baseDmg: 75,
        fireRate: 1.8
      },
      {
        name: "Win94",
        baseDmg: 79,
        fireRate: 0.6
      },
      {
        name: "Crossbow",
        baseDmg: 105,
        fireRate: 3.55
      }
    ]
  },
  gear: {
    helmets: [
      {
        name: "lvl0",
        dmgMulitplier: 1
      },
      {
        name: "lvl1",
        dmgMulitplier: 0.7
      },
      {
        name: "lvl2",
        dmgMulitplier: 0.6
      },
      {
        name: "lvl3",
        dmgMulitplier: 0.45
      }
    ],
    vests: [
      {
        name: "lvl0",
        dmgMulitplier: 1
      },
      {
        name: "lvl1",
        dmgMulitplier: 0.7
      },
      {
        name: "lvl2",
        dmgMulitplier: 0.6
      },
      {
        name: "lvl3",
        dmgMulitplier: 0.45
      }
    ]
  },
  current: {
    Helmet: "lvl0",
    Vest: "lvl0",
    WeaponType: "ARs",
    Weapon: "AKM",
    View: "DMG"
  },
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
  },
  mobile: {
    showBackdrop: false,
    showRightTools: false
  }
};

const updateCurrentState = (oldObj, newProps) => {
  return {
    ...oldObj,
    current: {
      ...oldObj.current,
      ...newProps
		},
		mobile: {
			...oldObj.mobile,
			showBackdrop: false,
			showRightTools: false
		}
  };
};

const updateMobileState = (oldObj, newProps) => {
  return {
    ...oldObj,
    mobile: {
      ...oldObj.current,
      ...newProps
    }
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_PROPS:
			return {
				...state,
				current: {
					...state.current,
					...action.payload
				},
				mobile: {
					...state.mobile,
					showBackdrop: false,
					showRightTools: false
				}
			}
    case actionTypes.SET_VIEW:
      return updateCurrentState(state, { View: action.newView });
    case actionTypes.SET_BACKDROP_STATE:
      return updateMobileState(state, {
        showBackdrop: !state.mobile.showBackdrop,
        showRightTools: !state.mobile.showRightTools
      });
    case actionTypes.SET_RIGHT_TOOLS_STATE:
      return updateMobileState(state, {
        showBackdrop: !state.mobile.showBackdrop,
        showRightTools: !state.mobile.showRightTools
      });
    default:
      return state;
  }
};

export default reducer;
