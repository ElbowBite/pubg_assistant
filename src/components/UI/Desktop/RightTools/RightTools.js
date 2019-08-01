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

  return (
    <div style={{ display: "inline-block", width: "360px"}}>
      <div>
        <button className={classNames(styles.Weapons, styles.AKM)} />
        <button className={classNames(styles.Weapons, styles.AUG_A3)} />
        <button className={classNames(styles.Weapons, styles.G36C)} />
        <button className={classNames(styles.Weapons, styles.Groza)} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    weapons: state.weapons
  };
};

export default connect(mapStateToProps)(RightTools);
