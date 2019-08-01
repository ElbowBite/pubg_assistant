import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import styles from "./LeftTools.module.css";

const LeftTools = props => {
  return (
    <div style={{ display: "inline-block"}}>
      <div>
        <button className={classNames(styles.Helmet, styles.lvl1h)} />
        <button className={classNames(styles.Helmet, styles.lvl2h)} />
        <button className={classNames(styles.Helmet, styles.lvl3h)} />
      </div>
      <div>
        <button className={classNames(styles.Vest, styles.lvl1v)} />
        <button className={classNames(styles.Vest, styles.lvl2v)} />
        <button className={classNames(styles.Vest, styles.lvl3v)} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    gear: state.gear
  };
};

export default connect(mapStateToProps)(LeftTools);
