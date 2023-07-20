import React from "react";
import styles from "./styles/app.module.css";
import cn from "classnames";
import { useState } from "react";
import Singup from "./components/Singup/Singup";
import ReleasePage from "./Pages/ReleasePage/Release.jsx";
import stylesLogin from "./components/Login/login.module.scss";
import { allTracksMap } from "./components/UI/audios/audios";

import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "./Pages/Homepage/Homepage";
import ArtistPage from "./Pages/ArtistPage/ArtistPage.jsx";

function App() {
  //LOGIN WINDOW STATE
  const [logWindow, setLogWindow] = useState(false);

  //PLAYER STATE
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlist, setPlaylist] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(allTracksMap);

  //ADD TO PLAYLIST
  const handleAddToPlaylist = (item) => {
    if (selectedTrack === allTracksMap) {
      setSelectedTrack([item]);
      setPlaylist([item]);
    } else {
      setPlaylist([...new Set(playlist), item]);
    }
  };

  //ADD & PLAY
  const handlePlayAndAddToPlaylist = (item) => {
    setSelectedTrack([item]);
    setPlaylist([...new Set(playlist), item]);
    setIsPlaying(true);
  };

  //LOGIN WINDOW / DISABLE
  function handlerChangeLogin(event) {
    const classLogin = document.querySelector(`.${stylesLogin.wrapper}`);
    const classLoginTop = document.querySelector(
      `.${stylesLogin.wrapper__top}`
    );
    if (event.target === classLogin || event.target === classLoginTop) {
      setLogWindow(!logWindow);
    }
  }

  return (
    <div className={cn(styles.wrapper)}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              playlist={playlist}
              setPlaylist={setPlaylist}
              selectedTrack={selectedTrack}
              setSelectedTrack={setSelectedTrack}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              setLogWindow={setLogWindow}
              logWindow={logWindow}
              handlerChangeLogin={handlerChangeLogin}
            />
          }
        >
          <Route
            index
            element={
              <Homepage
                playlist={playlist}
                selectedTrack={selectedTrack}
                setSelectedTrack={setSelectedTrack}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                handleAddToPlaylist={handleAddToPlaylist}
                handlePlayAndAddToPlaylist={handlePlayAndAddToPlaylist}
              />
            }
          />
          <Route path="singup" element={<Singup playlist={playlist} />} />
          {/* <Route path="release" element={<audios />} /> */}
          <Route
            path="release/:id"
            element={<ReleasePage playlist={playlist} />}
          />
          <Route
            path="artist/:id"
            element={<ArtistPage playlist={playlist} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
