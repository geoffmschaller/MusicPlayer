import React, {useEffect, useState} from 'react';
import styles from './Library.module.sass';
import LibraryItem from '../LibraryItem/LibraryItem';

const Library = props => {

	return (
		<div id='libraryMenu'
			className={[styles.library, props.menuMode ? '' : styles.closed].join(" ")}
			onMouseEnter={() => props.manageMouseTimer(false)}
			onMouseLeave={() => props.manageMouseTimer(true)}
		>
			<div className={styles.songList}>
				{
					props.songList.map((song, index) => {
						const isCurrentSong = index == props.currentSong
							? true
							: false
						return <LibraryItem
							current={isCurrentSong}
							song={song}
							key={song.id}
							click={() => props.changeSong(index, null)}
						/>
					})
				}
			</div>
		</div>
	)
}

export default Library;