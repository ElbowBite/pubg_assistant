import React from "react";
import { connect } from "react-redux";

import styles from "./Backdrop.module.css";
import * as actions from "../../../store/actions";

const Backdrop = props => {
  return props.showBackdrop ? (
    <div className={styles.Backdrop} onClick={props.onBackdropClicked} />
  ) : null;
};

const mapStateToProps = state => {
  return {
    showBackdrop: state.mobile.showBackdrop
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBackdropClicked: () => dispatch(actions.setBackdropState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Backdrop);
