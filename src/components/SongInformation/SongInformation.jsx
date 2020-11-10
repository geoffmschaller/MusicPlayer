import React from 'react';
import styles from './SongInformation.module.sass';

const SongInformation = props => {
	return (
		<div className={styles.songInformation}>
			<img
				src={props.currentSong.cover}
				alt=""
				style={{
					'WebkitBoxShadow': `5px 5px 20px 1px ${props.currentSong.color[0]}`,
					'boxShadow': `5px 5px 20px 1px ${props.currentSong.color[0]}`
				}}
			/>
			<div className={styles.name}>{props.currentSong.name}</div>
			<div className={styles.artist}>{props.currentSong.artist}</div>
		</div>
	);
}

export default SongInformation;