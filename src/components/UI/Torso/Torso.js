import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import styles from "./Torso.module.css";

const Torso = props => {
  /* Defining base hit area damage multipliers */
  const baseAreaDmgMulitpliers = {
    Head: 1,
    Neck: 0.75,
    Shoulder: 1,
    UpperArm: 0.6,
    Chest: 1.1,
    LowerArm: 0.5,
    Stomach: 1,
    LowerStomach: 0.95,
    Groin: 1,
    Hand: 0.3,
    Thigh: 0.6,
    Calf: 0.5,
    Foot: 0.3
  };
  /* Pulling base damage of a currently selected weapon from state.weapons */
  const curBaseDmg = props.weapons[props.current.WeaponType].reduce(
    (pv, cv) => {
      if (cv.name === props.current.Weapon) {
        return cv.baseDmg;
      }
      return pv;
    },
    ""
  );
  /* Pulling damage multiplier of a currently selected helmet */
  const curHelmetDmgMultiplier = props.gear.helmets.reduce((pv, cv) => {
    if (cv.name === props.current.Helmet) {
      return cv.dmgMulitplier;
    }
    return pv;
  }, "");
  /* Pulling damage multiplier of a currently selected vest */
  const curVestDmgMultiplier = props.gear.vests.reduce((pv, cv) => {
    if (cv.name === props.current.Vest) {
      return cv.dmgMulitplier;
    }
    return pv;
  }, "");
  /* Damage w/o armor multiplier */
  const damagBeforeArmor = (
    areaMultiplier,
    baseAreaMultiplier,
    weapBaseDmg
  ) => {
    return areaMultiplier * baseAreaMultiplier * weapBaseDmg;
	};
	/* Checking if current weapon is a crossbow and needs its own dmg multiplier to be used */
	let multiplierToUse = null;
	if (props.current.Weapon === "Crossbow") {
		multiplierToUse = "Crossbow"
	} else {
		multiplierToUse = props.current.WeaponType
	};
  /* Forming list of spans with damage dealt to area */
  const dmgAreas = props.dmgMulitpliers[multiplierToUse].map(
    multiplier => {
			/* Calculating damage before armor */
			let dmgBeforeArmor = damagBeforeArmor(
				multiplier.multiplier,
				baseAreaDmgMulitpliers[multiplier.name],
				curBaseDmg
			);
      /* Calculating damage with helmet multiplier */
      let dmgWithHelmet = (dmgBeforeArmor * curHelmetDmgMultiplier).toFixed(1);
      /* Calculating damage with vest multiplier */
			let dmgWithVest = (dmgBeforeArmor * curVestDmgMultiplier).toFixed(1);
			/* Checking currently selected view type */
			if (props.current.View === "HTK") {
				dmgBeforeArmor = Math.ceil(100 / dmgBeforeArmor).toString(10);
				dmgWithHelmet = Math.ceil(100 / dmgWithHelmet).toString(10);
				dmgWithVest = Math.ceil(100 / dmgWithVest).toString(10);
			}
      /* Outputing spans with damage */
      switch (multiplier.name) {
        case "Head":
        case "Neck":
          return (
            <span
              key={multiplier.name}
              className={classNames(
                styles[multiplier.name],
                styles[
                  "HitsToKill_" + Math.ceil(100 / dmgWithHelmet).toString(10)
                ]
              )}
            >
              {dmgWithHelmet}
            </span>
          );
        case "Shoulder":
        case "Chest":
        case "Stomach":
        case "LowerStomach":
        case "Groin":
          return (
            <span
              key={multiplier.name}
              className={classNames(
                styles[multiplier.name],
                styles[
                  "HitsToKill_" + Math.ceil(100 / dmgWithVest).toString(10)
                ]
              )}
            >
              {dmgWithVest}
            </span>
          );
        default:
          return (
            <span
              key={multiplier.name}
              className={classNames(
                styles[multiplier.name],
                styles[
                  "HitsToKill_" + Math.ceil(100 / dmgBeforeArmor).toString(10)
                ]
              )}
            >
              {dmgBeforeArmor.toFixed(1)}
            </span>
          );
      }
    }
  );

  return <div className={styles.Torso}>{dmgAreas}</div>;
};

const mapStateToProps = state => {
  return {
    dmgMulitpliers: state.dmgMulitpliers,
    current: state.current,
    weapons: state.weapons,
    gear: state.gear
  };
};

export default connect(mapStateToProps)(Torso);
