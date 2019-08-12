import React from "react";
import { connect } from "react-redux";

import styles from "./Toolbar.module.css";
import * as actions from "../../../../store/actions";

const Toolbar = props => {
  return (
    <div className={styles.Toolbar}>
      <button onClick={() => props.onArmorClicked()}>Armor</button>
      <button onClick={() => props.onWeaponClicked()}>Weapons</button>
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
    onArmorClicked: () => dispatch(actions.setLeftToolsState()),
    onWeaponClicked: () => dispatch(actions.setRightToolsState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
