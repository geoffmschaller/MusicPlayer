import React, {useState} from 'react';
import MediaPlayer from '../components/MediaPlayer/MediaPlayer';
import SongInformation from '../components/SongInformation/SongInformation';
import Library from '../components/Library/Library';
import './App.sass';

import SongsData from '../data/Songs';

const App = () => {

	const [songList, setSongList] = useState(SongsData);
	const [currentSongIndex, setCurrentSongIndex] = useState(0);

	const changeSongHandler = (newSongIndex, incrementAmount) => {
		if (newSongIndex != null) return setCurrentSongIndex(newSongIndex);
		let adjustedSongIndex = currentSongIndex + incrementAmount;
		if (adjustedSongIndex >= songList.length) adjustedSongIndex = 0;
		if (adjustedSongIndex < 0) adjustedSongIndex = songList.length - 1;
		setCurrentSongIndex(adjustedSongIndex);
	}

	return (
		<div className="App">
			<Library
				songList={songList}
				currentSong={currentSongIndex}
				changeSong={changeSongHandler}
			/>
			<SongInformation
				currentSong={songList[currentSongIndex]}
			/>
			<MediaPlayer
				currentSong={songList[currentSongIndex]}
				changeSong={changeSongHandler}
			/>
		</div>
	);
}

export default App;
