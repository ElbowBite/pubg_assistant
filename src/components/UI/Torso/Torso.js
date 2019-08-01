import React from 'react';

import styles from './Torso.module.css';

const Torso = () => (
	<div className={styles.Torso}>
		<span className={styles.Head}>262.5</span>
		<span className={styles.Neck}>196.8</span>
		<span className={styles.Shoulder}>136.5</span>
		<span className={styles.UpperArm}>59.8</span>
		<span className={styles.Chest}>150.1</span>
		<span className={styles.LowerArm}>59.8</span>
		<span className={styles.Stomach}>136.5</span>
		<span className={styles.LowerStomach}>129.6</span>
		<span className={styles.Groin}>115.5</span>
		<span className={styles.Hand}>29.9</span>
		<span className={styles.Thigh}>59.8</span>
		<span className={styles.Calf}>49.8</span>
		<span className={styles.Foot}>29.9</span>
	</div>
)
 
export default Torso;