import React from 'react';
import styles from './LibraryItem.module.sass';

const LibraryItem = props => {

	return (
		<div className={[styles.libraryItem, props.current ? styles.active : styles.inactive].join(' ')} onClick={props.click}>
			<img
				src={props.song.cover}
				alt=""
				style={{
					'WebkitBoxShadow': `5px 5px 15px 5px ${props.song.color[0]}`,
					'boxShadow': `5px 5px 15px 5px ${props.song.color[0]}`
				}}
			/>
			<div className={styles.description}>
				<div className={styles.name}>{props.song.name}</div>
				<div className={styles.artist}>{props.song.artist}</div>
				{
					props.current
						? <div className={styles.playing}>Playing...</div>
						: null
				}
			</div>
		</div>
	)
}

export default LibraryItem;