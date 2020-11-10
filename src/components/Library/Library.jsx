import React from 'react';
import styles from './Library.module.sass';
import LibraryItem from '../LibraryItem/LibraryItem';

const Library = props => {
	return (
		<div className={styles.library}>
			<div className={styles.title}>LIBRARY</div>
			<div className={styles.songList}>
				{
					props.songList.map((song, index) => {
						const isCurrentSong = index == props.currentSong
							? true
							: false
						return <LibraryItem current={isCurrentSong} song={song} key={song.id} click={() => props.changeSong(index, null)}/>
					})
				}
			</div>
		</div>
	)
}

export default Library;