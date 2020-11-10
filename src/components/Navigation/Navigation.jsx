import React from 'react';
import styles from './Navigation.module.sass';

const Navigation = props => {
	return (
		<div className={styles.navigation}>
			<div className={styles.title}>Music Player</div>
			<i className="fal fa-music" onClick={props.setMenuMode}/>
		</div>
	)
}

export default Navigation;