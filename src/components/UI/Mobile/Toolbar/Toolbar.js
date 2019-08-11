import React from "react";
import { connect } from "react-redux";

import styles from "./Toolbar.module.css";
import * as actions from "../../../../store/actions";

const Toolbar = props => {
  return (
    <div className={styles.Toolbar}>
      <button onClick={() => props.onWeaponClicked()}>Weapon</button>
      <button onClick={() => props.onArmorClicked()}>Armor</button>
      <button>Settings</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    showRightTools: state.mobile.showRightTools
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onWeaponClicked: () => dispatch(actions.setRightToolsState()),
    onArmorClicked: () => dispatch(actions.setLeftToolsState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
