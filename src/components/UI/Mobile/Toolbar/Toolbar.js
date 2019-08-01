import React, { Component } from "react";

import styles from "./Toolbar.module.css";
import WeaponSelection from "./WeaponSelection/WeaponSelection";

class Toolbar extends Component {
  state = {
    openWeaps: false
  };

  weapsClicked = () => {
    this.setState(prevState => {
      return { openWeaps: !prevState.openWeaps };
    });
  };

  render() {
    return (
      <>
        <WeaponSelection openWeaps={this.state.openWeaps} />
        <div className={styles.Toolbar}>
          <button onClick={this.weapsClicked}>Weapon</button>
          <button>Armor</button>
          <button>Settings</button>
        </div>
      </>
    );
  }
}

export default Toolbar;
