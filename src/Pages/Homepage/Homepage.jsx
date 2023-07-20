import Maincontent from "../../components/Main/Main";
import Submain from "../../components/Submain/Submain";
import Sidebar from "../../components/Sidebar/Sidebar";
import cn from "classnames";
import stylesGrid from "../../styles/grid.module.scss";
import styles from "../../styles/app.module.css";

const Homepage = ({
  playlist,
  selectedTrack,
  setSelectedTrack,
  isPlaying,
  setIsPlaying,
  handleAddToPlaylist,
  handlePlayAndAddToPlaylist,
}) => {
  return (
    <div className={cn(stylesGrid.main)}>
      <Sidebar
        setSelectedTrack={setSelectedTrack}
        selectedTrack={selectedTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        handlePlayAndAddToPlaylist={handlePlayAndAddToPlaylist}
        handleAddToPlaylist={handleAddToPlaylist}
      />
      <Maincontent />
      <Submain
        handlePlayAndAddToPlaylist={handlePlayAndAddToPlaylist}
        selectedTrack={selectedTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSelectedTrack={setSelectedTrack}
        handleAddToPlaylist={handleAddToPlaylist}
      />
    </div>
  );
};

export default Homepage;
