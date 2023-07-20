import cn from "classnames";
import styles from "./player.module.scss";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { TbPlayerSkipBackFilled } from "react-icons/tb";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { ImVolumeMute } from "react-icons/im";
import { useRef, useState, useEffect, useCallback } from "react";
import WaveSurfer from "wavesurfer.js";
import Playlist from "../Playlist/Playlist";
// import { GrPrevious } from "react-icons/gr";
// import { GrNext } from "react-icons/gr";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: [
    "rgb(128, 127, 127)",
    "rgb(128, 127, 127)",
    "rgb(185, 183, 183)",
    "rgb(185, 183, 183)",
    "rgb(128, 127, 127)",
  ],
  progressColor: [
    "rgb(12, 126, 255)",
    "rgb(12, 126, 255)",
    "rgba(12, 126, 255, 0.7)",
    "rgba(12, 126, 255, 0.7)",
    "rgb(12, 126, 255)",
  ],
  cursorColor: "black",
  barWidth: 0,
  barRadius: 0,
  responsive: true,
  height: 52,
  normalize: true,
  partialRender: true,
});

const Player = ({
  url,
  selectedTrack,
  setSelectedTrack,
  isPlaying,
  setIsPlaying,
  playlist,
  setPlaylist,
}) => {
  const waveformRef = useRef();
  const wavesurfer = useRef(null);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [dynamic, setDynamic] = useState(true);
  const [visiblePlaylist, setVisiblePlaylist] = useState(false);

  useEffect(() => {
    setIsPlaying(true);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(url);
    wavesurfer.current.on("ready", function () {
      if (wavesurfer.current) {
        wavesurfer.current.playPause();
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });

    return () => wavesurfer.current.destroy();
  }, [url]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    wavesurfer.current.playPause();
  };

  const onVolumeChange = (e) => {
    const { target } = e;
    const newVolume = +target.value;

    if (newVolume) {
      setVolume(newVolume);
      wavesurfer.current.setVolume(newVolume || 1);
    }
  };

  //------------------------

  const skipBack = () => {
    const index = playlist.findIndex((x) => x.title == selectedTrack.title);
    // if (index == 0) {
    //   setSelectedTrack(playlist[playlist.length - 1]);
    // } else {
    //   setSelectedTrack(playlist[index - 1]);
    // }
    // wavesurfer.current.currentTime = 0;
  };

  // const skipNext = () => {
  //   const index = playlist.findIndex((x) => x.title == selectedTrack.title);

  //   if (index == playlist.length - 1) {
  //     setSelectedTrack(playlist[0]);
  //   } else {
  //     setSelectedTrack(playlist[index + 1]);
  //   }
  //   wavesurfer.current.currentTime = 0;
  // };
  // ___________________________

  const handlerPlaylist = () => {
    setVisiblePlaylist(!visiblePlaylist);
  };

  return (
    <div
      className={cn(styles.container)}
      style={playlist ? { top: "0" } : { top: "-64px" }}
    >
      <div className={cn(styles.navigation)}>
        {/* Navigation */}
        <div className={cn(styles.controls)}>
          <TbPlayerSkipBackFilled
            className={cn(styles.btn__prev)}
            onClick={skipBack}
          />
          {isPlaying ? (
            <TbPlayerPauseFilled
              className={cn(styles.btn__pp)}
              onClick={handlePlayPause}
            />
          ) : (
            <TbPlayerPlayFilled
              className={cn(styles.btn__pp)}
              onClick={handlePlayPause}
            />
          )}

          <TbPlayerSkipForwardFilled
            className={cn(styles.btn__next)}
            // onClick={skipNext}
          />
        </div>
        {/* Player */}
        <div
          id="waveform"
          ref={waveformRef}
          className={
            !visiblePlaylist ? cn(styles.progress) : cn(styles.progress__fscr)
          }
        >
          {/* <div className={cn(styles.microtitle)}>
            <div>{selectedTrack[0].title}</div>
            <div>{selectedTrack[0].artist}</div>
          </div> */}
        </div>

        {/* PLAYLIST */}

        {playlist && (
          <Playlist
            setPlaylist={setPlaylist}
            setSelectedTrack={setSelectedTrack}
            selectedTrack={selectedTrack}
            list={playlist}
            visiblePlaylist={visiblePlaylist}
            setVisiblePlaylist={setVisiblePlaylist}
          />
        )}

        {/* VOLUME */}

        <div
          className={
            !visiblePlaylist ? cn(styles.volume) : cn(styles.volume__fscr)
          }
        >
          <ImVolumeMute onClick={() => setDynamic(false)} />
          {!dynamic ? (
            <div
              className={
                !visiblePlaylist
                  ? cn(styles.vol__control)
                  : cn(styles.vol__control_fscr)
              }
              onMouseLeave={() => setDynamic(true)}
            >
              <input
                type="range"
                id="volInp"
                name="volume"
                min="0.01"
                max="1"
                step=".025"
                onChange={onVolumeChange}
                defaultValue={volume}
              />
            </div>
          ) : null}
        </div>

        {/* PLAYER TITLE INFO */}

        <div
          className={
            !visiblePlaylist ? cn(styles.track) : cn(styles.track__fscr)
          }
        >
          <div className={cn(styles.img)}>
            <img src={selectedTrack[0].imageUrl} alt="" />
          </div>
          <div className={cn(styles.info)}>
            <div className={cn(styles.title)}>
              <p>{selectedTrack[0].title}</p>
            </div>
            <div className={cn(styles.artist)}>
              <p>{selectedTrack[0].artist}</p>
            </div>
            <div className={cn(styles.label)}>
              <p>{selectedTrack[0].label}</p>
            </div>
          </div>
        </div>

        {/* Playlist Button */}

        {!visiblePlaylist ? (
          <FaChevronDown
            className={cn(styles.playlist__btn)}
            onClick={handlerPlaylist}
          />
        ) : (
          <FaChevronUp
            className={cn(styles.playlist__btn)}
            onClick={handlerPlaylist}
          />
        )}
      </div>
    </div>
  );
};

export default Player;
