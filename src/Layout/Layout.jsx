// import React from "react";

import { Outlet } from "react-router-dom";
import cn from "classnames";
import styles from "../styles/app.module.css";
import stylesLayout from "./layout.module.scss";
import Header from "../components/Header/Header";
import Player from "../components/Player/Player";
import Login from "../components/Login/Login";
import Footer from "../components/Footer/Footer";

const Layout = ({
  playlist,
  setPlaylist,
  selectedTrack,
  setSelectedTrack,
  isPlaying,
  setIsPlaying,
  logWindow,
  setLogWindow,
  handlerChangeLogin,
}) => {
  return (
    <>
      {playlist && (
        <Player
          playlist={playlist}
          setPlaylist={setPlaylist}
          url={selectedTrack[0].audioUrl}
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}

      {/* <Player
        playlist={playlist}
        setPlaylist={setPlaylist}
        url={selectedTrack[0].audioUrl}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        // className={cn(stylesLayout.player__on)}
        // style={playlist ? { display: "block" } : { display: "none" }}
      /> */}

      <Header
        onClick={() => setLogWindow(!logWindow)}
        selectedTrack={selectedTrack}
        playlist={playlist}
      />

      <main
        className={cn(styles.main, stylesLayout.content)}
        style={playlist ? { top: "124px" } : { top: "60px" }}
      >
        <Outlet />
      </main>

      <Footer playlist={playlist} />
      {logWindow && (
        <Login
          onClick={handlerChangeLogin}
          playlist={playlist}
          setLogWindow={setLogWindow}
        />
      )}
    </>
  );
};

export default Layout;
