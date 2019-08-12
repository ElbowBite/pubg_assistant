import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import styles from "./RightTools.module.css";
import * as actions from "../../../../store/actions";

const RightTools = props => {
  const {
    current: { WeaponType, Weapon }
  } = props;
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
  /* Weapon types buttons generation */
  const weapTypesSelector = weapTypes.map(weapType => {
    return (
      <button
        key={weapType}
        className={classNames(
          styles.WeapType,
          weapType === props.current.WeaponType && styles.WeapType_active
        )}
        onClick={() =>
          WeaponType === weapType
            ? {}
            : props.onSelectCurrent({ WeaponType: weapType })
        }
      >
        {weapType}
      </button>
    );
  });

  const curWeapList = props.weapons[props.current.WeaponType].map(weapon => {
    return (
      <button
        key={weapon.name}
        className={classNames(
          styles.Weapons,
          styles[weapon.name],
          weapon.name === props.current.Weapon &&
            styles[weapon.name + "_active"]
        )}
        onClick={() =>
          Weapon === weapon.name
            ? {}
            : props.onSelectCurrent({ Weapon: weapon.name })
        }
      >
        {weapon.name.replace(/_/g, " ")}
      </button>
    );
  });

  return (
/*     <div
      className={classNames(
        styles.RightTools,
        props.mobile.showRightTools ? styles.Open : styles.Close
      )}
		> */
		<>
      <div onClick={() => props.onWeaponTypeSelected()}>
        <p className={styles.WeaponSelectionLabel}>Select weapon</p>
        <div className={classNames(styles.WeaponTypeSelector, props.mobile.showRightTools ? styles.Open : styles.Close)}>{weapTypesSelector}</div>
      </div>
      <div className={classNames(styles.WeaponList, props.mobile.showRightTools ? styles.Open : styles.Close)}>{curWeapList}</div>
		</>
    /* </div> */
  );
};

const mapStateToProps = state => {
  return {
    weapons: state.weapons,
    current: state.current,
    mobile: state.mobile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectCurrent: payload => dispatch(actions.setCurrentProps(payload)),
    onWeaponTypeSelected: () => dispatch(actions.setRightToolsContent())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightTools);
