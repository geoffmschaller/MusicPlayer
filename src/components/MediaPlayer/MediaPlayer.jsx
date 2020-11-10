import React, {useRef, useState, useEffect} from 'react';
import styles from './MediaPlayer.module.sass';

const MediaPlayer = props => {

	const [isPlaying, setIsPlaying] = useState(false);
	const [songInformation, setSongInformation] = useState({
		current: 0,
		duration: 1800
	});

	useEffect(() => {
		audioRef.current.play();
		setIsPlaying(true);
	}, [props.currentSong]);

	const audioRef = useRef(null);

	const playSongHandler = () => {
		if (isPlaying) {
			setIsPlaying(false);
			audioRef.current.pause();
			return
		}
		audioRef.current.play();
		setIsPlaying(true);
	}

	const timeUpdateHandler = (e) => {
		setSongInformation({
			...songInformation,
			current: e.target.currentTime,
			duration: e.target.duration
		});
		if (songInformation.current >= songInformation.duration && !isNaN(e.target.duration)) {
			props.changeSong(null, 1);
		}
	}

	const dragHandler = (e) => {
		audioRef.current.currentTime = e.target.value;
		setSongInformation({
			...songInformation,
			current: e.target.value
		});
	}

	const formatTime = (time) => isNaN(time)
		? "--:--"
		: Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2);

	return (
		<div className={styles.mediaPlayer}>
			<div className={styles.timeControl}>
				<p>{formatTime(songInformation.current)}</p>
				<input
					type='range'
					min='0'
					max={
						!isNaN(songInformation.duration)
							? songInformation.duration
							: '18000'
					}
					value={songInformation.current}
					onChange={dragHandler}
				/>
				<p>{formatTime(songInformation.duration)}</p>
			</div>
			<div className={styles.playControl}>
				<i className="fas fa-chevron-double-left" onClick={() => props.changeSong(null, -1)}/>
				{
					isPlaying
						? <i className="far fa-pause" onClick={playSongHandler} />
						: <i className="far fa-play" onClick={playSongHandler}/>
				}
				<i className="fas fa-chevron-double-right" onClick={() => props.changeSong(null, 1)}/>
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