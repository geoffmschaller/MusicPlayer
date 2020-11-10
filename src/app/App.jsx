import React, {useState} from 'react';
import MediaPlayer from '../components/MediaPlayer/MediaPlayer';
import SongInformation from '../components/SongInformation/SongInformation';
import Library from '../components/Library/Library';
import './App.sass';

import SongsData from '../data/Songs';

const App = () => {

	const [songList, setSongList] = useState(SongsData);
	const [currentSong, setCurrentSong] = useState(songList[0]);
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<div className="App">
			<Library songList={songList}/>
			<SongInformation currentSong={currentSong}/>
			<MediaPlayer
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
			/>
		</div>
	);
}

export default App;
