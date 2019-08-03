import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import styles from "./RightTools.module.css";

const RightTools = props => {
  /* const name = "AKM";		//Dynamic rendering based on state contents
  const value = props.weapons.ARs.reduce((pv, cv) => {
    if (cv.name === name) {
      return cv.baseDmg;
    }
    return pv;
  }, "");
  console.log(value);
	return <button className={styles.lvl1h} />;	//Wrong styling */

  //Array of weapon types. TO replace with state.weapons[***] from reducer !!!
  const weapTypes = [
    "ARs",
    "SRs",
    "DMRs",
    "SMGs",
    "LMGs",
    "SGs",
    "Pistols",
    "Melee"
  ];
  //Weapon types buttons generation
  const weapTypesSelector = weapTypes.map(weapType => {
    return (
      <button key={weapType} className={styles.WeapType} name={weapType}>
        {weapType}
      </button>
    );
  });

  const curWeapList = props.weapons[props.curWeapType].map((weapon, index) => {
    return (
      <button
        key={weapon.name}
        className={classNames(styles.Weapons, styles[weapon.name])}
      />
    );
  });

  return (
    <div className={styles.RightTools}>
      <div>
        <p style={{ textAlign: "center", fontSize: "20px" }}>Select weapon</p>
        {weapTypesSelector}
      </div>
      <div>{curWeapList}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    weapons: state.weapons,
    curWeapType: state.curWeapType
  };
};

export default connect(mapStateToProps)(RightTools);
