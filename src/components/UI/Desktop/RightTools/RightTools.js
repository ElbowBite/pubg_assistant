import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import styles from "./RightTools.module.css";
import * as actions from "../../../../store/actions";

const RightTools = props => {
  const { current: { WeaponType, Weapon } } = props;
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
      <button
        key={weapType}
        className={classNames(
          styles.WeapType,
          weapType === props.current.WeaponType && styles.WeapType_active
        )}
        onClick={() =>
          WeaponType === weapType
            ? {}
            : props.onSelectCurrent({ WeaponType: weapType, Weapon: props.weapons[weapType][0].name })
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
				{weapon.name.replace(/_/g, ' ')}
			</button>
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
    current: state.current
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectCurrent: payload => dispatch(actions.setCurrentProps(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightTools);
