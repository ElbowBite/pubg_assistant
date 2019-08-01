import React, { Component } from "react";

import styles from "./WeaponSelection.module.css";

/* 		<button>Assault Rifles</button>
		<button>Sniper Rifles</button>
		<button>Designated Marksman Rifles</button>
		<button>Submachine Guns</button>
		<button>Light Machine Guns</button>
		<button>Shotguns</button>
		<button>Pistols</button>
		<button>Melee</button> */

class WeaponSelection extends Component {
  state = {
    ARs: [
      "SCAR-L",
      "M16A4",
      "Groza",
      "AKM",
      "AUG_A3",
      "M416",
      "QBZ95",
      "Beryl_M762",
      "Mk47_Mutant",
      "G36C"
    ]
  };

  render() {
    let attachedStyles = [styles.WeaponSelection, styles.Close];
    if (this.props.openWeaps) {
      attachedStyles = [styles.WeaponSelection, styles.Open];
    }

    return (
      <div className={attachedStyles.join(" ")}>
        {this.state.ARs.map(weap => (
          <button key={weap}>{weap}</button>
        ))}
      </div>
    );
  }
}

export default WeaponSelection;
