import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import styles from "./LeftTools.module.css";
import * as actions from "../../../../store/actions";

const LeftTools = props => {
  const helmetList = props.gear.helmets.map(helm => (
    <button
      key={helm.name}
      className={classNames(
        styles.Helmet,
        styles[helm.name + "h"],
        helm.name === props.curHelmet && styles[helm.name + "h_active"]
      )}
      onClick={() => props.onSelectHelmet(helm.name)}
    />
  ));

  const vestList = props.gear.vests.map(vest => (
    <button
      key={vest.name}
      className={classNames(
        styles.Vest,
        styles[vest.name + "v"],
        vest.name === props.curVest && styles[vest.name + "v_active"]
      )}
      onClick={() => props.onSelectVest(vest.name)}
    />
  ));

  return (
    <div className={styles.LeftTools}>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        Select helmet and vest levels
      </p>
      <div>{helmetList}</div>
      <div>{vestList}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    gear: state.gear,
    curHelmet: state.curHelmet,
    curVest: state.curVest
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectHelmet: newHelmet => dispatch(actions.setHelmet(newHelmet)),
    onSelectVest: newVest => dispatch(actions.setVest(newVest))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftTools);
