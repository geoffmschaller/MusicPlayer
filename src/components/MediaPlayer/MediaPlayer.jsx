import React, {useRef, useState} from 'react';
import styles from './MediaPlayer.module.sass';

const MediaPlayer = props => {

	const [songInformation, setSongInformation] = useState({
		current: 0,
		duration: 0
	});
	const audioRef = useRef(null);

	const playSongHandler = () => {
		if (props.isPlaying) {
			props.setIsPlaying(false);
			audioRef.current.pause();
			return
		}
		audioRef.current.play();
		props.setIsPlaying(true);
	}

	const timeUpdateHandler = (e) => {
		setSongInformation({
			...songInformation,
			current: e.target.currentTime,
			duration: e.target.duration
		});
	}

	const dragHandler = (e) => {
		audioRef.current.currentTime = e.target.value;
		setSongInformation({
			...songInformation,
			current: e.target.value
		});
	}

	const formatTime = (time) => Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2);

	return (
		<div className={styles.mediaPlayer}>
			<div className={styles.timeControl}>
				<p>{formatTime(songInformation.current)}</p>
				<input
					type='range'
					min='0'
					max={songInformation.duration}
					value={songInformation.current}
					onChange={dragHandler}
				/>
				<p>{formatTime(songInformation.duration)}</p>
			</div>
			<div className={styles.playControl}>
				<i className="fas fa-chevron-double-left" />
				{
					props.isPlaying
						? <i className="far fa-pause" onClick={playSongHandler} />
						: <i className="far fa-play" onClick={playSongHandler}/>
				}
				<i className="fas fa-chevron-double-right"/>
			</div>
			<audio
				onTimeUpdate={timeUpdateHandler}
				ref={audioRef}
				src={props.currentSong.audio}
				onLoadedMetadata={timeUpdateHandler}
			/>
		</div>
	);
}

export default MediaPlayer;