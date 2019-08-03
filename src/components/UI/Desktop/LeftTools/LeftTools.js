import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import styles from "./LeftTools.module.css";

const HELMETS = [
  {
    id: 0,
    style: styles.lvl0h,
    activeStyle: styles.lvl0hActive
  },
  {
    id: 1,
    style: styles.lvl1h,
    activeStyle: styles.lvl1hActive
  },
  {
    id: 2,
    style: styles.lvl2h,
    activeStyle: styles.lvl2hActive
  },
  {
    id: 3,
    style: styles.lvl3h,
    activeStyle: styles.lvl3hActive
  }
];

const VESTS = [
  {
    id: 0,
    style: styles.lvl0v,
    activeStyle: styles.lvl0vActive
  },
  {
    id: 1,
    style: styles.lvl1v,
    activeStyle: styles.lvl1vActive
  },
  {
    id: 2,
    style: styles.lvl2v,
    activeStyle: styles.lvl2vActive
  },
  {
    id: 3,
    style: styles.lvl3v,
    activeStyle: styles.lvl3vActive
  }
];

const LeftTools = props => {
  const [helmType, setHelmType] = React.useState(0);
  const [vestType, setVestType] = React.useState(0);
  return (
    <div className={styles.LeftTools}>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        Select helmet and vest levels.
      </p>
      <div>
        {HELMETS.map(helm => (
          <button
            className={classNames(
              styles.Helmet,
              helm.style,
              helm.id === helmType && helm.activeStyle
            )}
            key={helm.id}
            onClick={() => setHelmType(helm.id)}
          />
        ))}
      </div>
      <div>
        {VESTS.map(vest => (
          <button
            className={classNames(
              styles.Vest,
              vest.style,
              vest.id === vestType && vest.activeStyle
            )}
            key={vest.id}
            onClick={() => setVestType(vest.id)}
          />
        ))}
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
