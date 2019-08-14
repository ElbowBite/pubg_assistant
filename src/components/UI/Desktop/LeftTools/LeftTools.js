import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import styles from "./LeftTools.module.css";
import * as actions from "../../../../store/actions";

const LeftTools = props => {
  const {
    current: { helmet, vest, view }
  } = props;
  const viewTypes = ["DMG", "HTK", "TTK"];
  const viewTypeSelector = viewTypes.map(v => {
    return (
      <button
        key={v}
        className={classNames(
          styles.ViewType,
          v === props.current.view && styles.ViewType_active
        )}
        onClick={() => (view === v ? {} : props.onSelectCurrent({ view: v }))}
      >
        {v}
      </button>
    );
  });
  /* Forming list of helmets */
  const helmetList = props.gear.helmets.map(h => {
    let imgUrl = require(`../../../../assets/images/main/gear/helmets/${h.name}h.png`);
    if (props.current.helmet === h.name) {
      imgUrl = require(`../../../../assets/images/main/gear/selected/helmets/${h.name}h.png`);
    }
    let styleObj = { backgroundImage: `url(${imgUrl})` };

    return (
      <button
        key={h.name}
        style={styleObj}
        className={styles.Helmet}
        onClick={() =>
          helmet === h.name ? {} : props.onSelectCurrent({ helmet: h.name })
        }
      />
    );
  });
  /* Forming list of vests */
  const vestList = props.gear.vests.map(v => {
    let imgUrl = require(`../../../../assets/images/main/gear/vests/${v.name}v.png`);
    if (props.current.vest === v.name) {
      imgUrl = require(`../../../../assets/images/main/gear/selected/vests/${v.name}v.png`);
    }
    let styleObj = { backgroundImage: `url(${imgUrl})` };

    return (
      <button
        key={v.name}
        style={styleObj}
        className={styles.Vest}
        onClick={() =>
          vest === v.name ? {} : props.onSelectCurrent({ vest: v.name })
        }
      />
    );
  });

  return (
    <div
      className={classNames(
        styles.LeftTools,
        props.mobile.showLeftTools ? styles.Open : styles.Close
      )}
    >
      <p className={styles.ArmorSelectionLabel}>
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
    current: state.current,
    mobile: state.mobile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectCurrent: payload => dispatch(actions.setCurrentProps(payload)),
    onSelectView: newView => dispatch(actions.setView(newView))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftTools);
