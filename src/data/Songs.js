import { v4 as uuidv4 } from "uuid";
import BeaverCreekSong from '../assets/songs/Beaver Creek.mp3';
import DaylightSong from '../assets/songs/Daylight.mp3';
import KeepGoingSong from '../assets/songs/Keep Going.mp3';
import NightfallSong from '../assets/songs/Nightfall.mp3';
import ReflectionSong from '../assets/songs/Reflection.mp3';
import UnderTheCityStarsSong from '../assets/songs/Under the City Stars.mp3';

const Songs = [
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: BeaverCreekSong,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: DaylightSong,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: KeepGoingSong,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: NightfallSong,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: ReflectionSong,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: UnderTheCityStarsSong,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
    }
];

export default Songs;