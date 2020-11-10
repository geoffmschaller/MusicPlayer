import React from 'react';
import styles from './Library.module.sass';
import LibraryItem from '../LibraryItem/LibraryItem';

const Library = props => {
	return (
		<div className={styles.library}>
			<div className={styles.title}>LIBRARY</div>
			<div className={styles.songList}>
				{
					props.songList.map((song) => {
						return <LibraryItem song={song} key={song.id}/>
					})
				}
			</div>
		</div>
	)
}

export default Library;