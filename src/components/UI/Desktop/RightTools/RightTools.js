import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import styles from "./RightTools.module.css";
import * as actions from "../../../../store/actions";

const RightTools = props => {
  const {
    current: { weaponType, weapon }
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
          weapType === props.current.weaponType && styles.WeapType_active
        )}
        onClick={() =>
          weaponType === weapType
            ? {}
            : props.onSelectCurrent({ weaponType: weapType })
        }
      >
        {weapType}
      </button>
    );
  });

  const curWeapList = props.weapons[props.current.weaponType].map(weap => {
    let imgUrl = require(`../../../../assets/images/main/weapons/${props.current.weaponType}/${weap.name}.png`);
    if (props.current.weapon === weap.name) {
      imgUrl = require(`../../../../assets/images/main/weapons/selected/${props.current.weaponType}/${weap.name}.png`);
    }
    let styleObj = { backgroundImage: `url(${imgUrl})` };

    return (
      <button
        key={weap.name}
        style={styleObj}
        className={styles.Weapons}
        onClick={() =>
          weapon === weap.name
            ? {}
            : props.onSelectCurrent({ weapon: weap.name })
        }
      >
        {weap.name.replace(/_/g, " ")}
      </button>
    );
  });

  return (
    <div className={styles.RightTools}>
      <div>
        <p className={styles.WeaponSelectionLabel}>Select weapon</p>
        <div
          className={classNames(
            styles.WeaponTypeSelector,
            props.mobile.showRightTools ? styles.Open : styles.Close
          )}
        >
          {weapTypesSelector}
        </div>
      </div>
      <div
        className={classNames(
          styles.WeaponList,
          props.mobile.showRightTools ? styles.Open : styles.Close
        )}
      >
        {curWeapList}
      </div>
    </div>
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
    onSelectCurrent: payload => dispatch(actions.setCurrentProps(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightTools);
