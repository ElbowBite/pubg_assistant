import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import styles from "./Torso.module.css";

const Torso = props => {
  let helmetSpan = null;
  let vestSpan = null;
  let restSpan = null;
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
  /* Pulling fire rate of a currently selected weapon from state.weapons */
  const curFireRate = props.weapons[props.current.WeaponType].reduce(
    (pv, cv) => {
      if (cv.name === props.current.Weapon) {
        return cv.fireRate;
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
    multiplierToUse = "Crossbow";
  } else {
    multiplierToUse = props.current.WeaponType;
  }
  /* Forming list of spans with damage dealt to area */
  const dmgAreas = props.dmgMulitpliers[multiplierToUse].map(multiplier => {
    /* Calculating damage before armor */
    const dmgBeforeArmor = damagBeforeArmor(
      multiplier.multiplier,
      baseAreaDmgMulitpliers[multiplier.name],
      curBaseDmg
    ).toFixed(1);
    /* Calculating damage with helmet multiplier */
    const dmgWithHelmet = (dmgBeforeArmor * curHelmetDmgMultiplier).toFixed(1);
    /* Calculating damage with vest multiplier */
    const dmgWithVest = (dmgBeforeArmor * curVestDmgMultiplier).toFixed(1);
    /* Calculating number of hits to kill */
    const htkBeforeArmor = Math.ceil(100 / dmgBeforeArmor).toString(10);
    const htkWithHelmet = Math.ceil(100 / dmgWithHelmet).toString(10);
    const htkWithVest = Math.ceil(100 / dmgWithVest).toString(10);
    /* Defining what to show on torso */
    if (props.current.WeaponType === "SGs") {
      const curNumberOfPellets = props.weapons[props.current.WeaponType].reduce(
        (pv, cv) => {
          if (cv.name === props.current.Weapon) {
            return cv.numberOfPellets;
          }
          return pv;
        },
        ""
      );
      if (props.current.View === "DMG") {
        helmetSpan = (
          <>
            {dmgWithHelmet}
            <span className={styles.Pellets}>x{curNumberOfPellets}</span>
          </>
        );
        vestSpan = (
          <>
            {dmgWithVest}
            <span className={styles.Pellets}>x{curNumberOfPellets}</span>
          </>
        );
        restSpan = (
          <>
            {dmgBeforeArmor}
            <span className={styles.Pellets}>x{curNumberOfPellets}</span>
          </>
        );
      }
    } else {
      helmetSpan = dmgWithHelmet;
      vestSpan = dmgWithVest;
      restSpan = dmgBeforeArmor;
    }
    if (props.current.View === "HTK") {
      if (props.current.WeaponType === "SGs") {
        const curNumberOfPellets = props.weapons[
          props.current.WeaponType
        ].reduce((pv, cv) => {
          if (cv.name === props.current.Weapon) {
            return cv.numberOfPellets;
          }
          return pv;
        }, "");
        helmetSpan = (
          <>
            {htkWithHelmet}
            <span className={styles.Pellets}>/{curNumberOfPellets}</span>
          </>
        );
        vestSpan = (
          <>
            {htkWithVest}
            <span className={styles.Pellets}>/{curNumberOfPellets}</span>
          </>
        );
        restSpan = (
          <>
            {htkBeforeArmor}
            <span className={styles.Pellets}>/{curNumberOfPellets}</span>
          </>
        );
      } else {
        helmetSpan = htkWithHelmet;
        vestSpan = htkWithVest;
        restSpan = htkBeforeArmor;
      }
    }
    if (props.current.View === "TTK") {
      if (props.current.WeaponType === "SGs") {
        helmetSpan = (Math.floor(htkWithHelmet / 9) * curFireRate).toFixed(2);
        vestSpan = (Math.floor(htkWithVest / 9) * curFireRate).toFixed(2);
        restSpan = (Math.floor(htkBeforeArmor / 9) * curFireRate).toFixed(2);
      } else {
        helmetSpan = ((htkWithHelmet - 1) * curFireRate).toFixed(2);
        vestSpan = ((htkWithVest - 1) * curFireRate).toFixed(2);
        restSpan = ((htkBeforeArmor - 1) * curFireRate).toFixed(2);
      }
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
              styles["HitsToKill_" + htkWithHelmet]
            )}
          >
            {helmetSpan}
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
              styles["HitsToKill_" + htkWithVest]
            )}
          >
            {vestSpan}
          </span>
        );
      default:
        return (
          <span
            key={multiplier.name}
            className={classNames(
              styles[multiplier.name],
              styles["HitsToKill_" + htkBeforeArmor]
            )}
          >
            {restSpan}
          </span>
        );
    }
  });

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
