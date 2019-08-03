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
        name: "MK47_Mutant",
        baseDmg: 49
			},
      {
        name: "QBZ95",
        baseDmg: 41
			},
      {
        name: "SCAR-L",
        baseDmg: 41
			}
		]
	},
	gear: {
		helmets: [
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
	curWeapType: "ARs"
};

const reducer = (state = initState, action) => {
  /* switch (action.type) {
		case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
	default:  */ return state;
};

export default reducer;
