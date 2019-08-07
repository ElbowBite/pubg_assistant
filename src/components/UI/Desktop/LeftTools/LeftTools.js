import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import styles from "./LeftTools.module.css";
import * as actions from "../../../../store/actions";

const LeftTools = props => {
  const viewTypes = ["DMG", "HTK", "TTK"];
  const viewTypeSelector = viewTypes.map(view => {
    return (
      <button
        className={classNames(
          styles.ViewType,
          view === props.current.View && styles.ViewType_active
				)}
				onClick={() => props.onSelectView(view)}
      >
        {view}
      </button>
    );
  });
  /* Forming list of helmets */
  const helmetList = props.gear.helmets.map(helm => (
    <button
      key={helm.name}
      className={classNames(
        styles.Helmet,
        styles[helm.name + "h"],
        helm.name === props.current.Helmet && styles[helm.name + "h_active"]
      )}
      onClick={() => props.onSelectHelmet(helm.name)}
    />
  ));
  /* Forming list of vests */
  const vestList = props.gear.vests.map(vest => (
    <button
      key={vest.name}
      className={classNames(
        styles.Vest,
        styles[vest.name + "v"],
        vest.name === props.current.Vest && styles[vest.name + "v_active"]
      )}
      onClick={() => props.onSelectVest(vest.name)}
    />
  ));

  return (
    <div className={styles.LeftTools}>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        Select helmet and vest levels
      </p>
      <div name="helmetSelector">{helmetList}</div>
      <div name="vestSelector">{vestList}</div>
      <div name="viewTypeSelector">{viewTypeSelector}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    gear: state.gear,
    current: state.current
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectHelmet: newHelmet => dispatch(actions.setHelmet(newHelmet)),
		onSelectVest: newVest => dispatch(actions.setVest(newVest)),
		onSelectView: newView => dispatch(actions.setView(newView))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftTools);
