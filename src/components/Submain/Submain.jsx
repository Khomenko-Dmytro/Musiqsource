import React from "react";
import cn from "classnames";
import styles from "./submain.module.scss";
import stylesGrid from "../../styles/grid.module.scss";
import { audioMap, newTrackMap, playlistMassive } from "../UI/audios/audios";
import { BiDotsHorizontal } from "react-icons/bi";
import { BiPlay } from "react-icons/bi";
import { BiListUl } from "react-icons/bi";
import { useState } from "react";
//collections massive
const allTracksMap = audioMap.concat(newTrackMap);

const Submain = ({
  selectedTrack,
  setSelectedTrack,
  songs,
  isPlaying,
  setIsPlaying,
  handlePlayAndAddToPlaylist,
  handleAddToPlaylist,
}) => {
  const [visibleBtn, setVisibleBtn] = useState("");
  // const [playlistSt, setPlaylistSt] = useState(playlistMassive);

  // const addToPlaylistHandler = (id) => {
  //   if (newTrackMap.id === id) {
  //     setPlaylistSt(playlistSt.shift(newTrackMap.id));
  //   }
  // };

  // const addToLastHandler = (id) => {
  //   if (newTrackMap.id === id) {
  //     setPlaylistSt(playlistSt.push(newTrackMap));
  //   }
  // };

  const newTracksData = newTrackMap.map((elem, index) => {
    return (
      <div
        className={cn(styles.track__item)}
        key={index}
        onMouseEnter={() => setVisibleBtn(elem.id)}
        onMouseLeave={() => setVisibleBtn("")}
      >
        <div
          className={cn(styles.image)}
          // onClick={function () {
          //   if (!isPlaying) {
          //     setIsPlaying(!isPlaying);
          //   } else {
          //     setIsPlaying(isPlaying);
          //   }
          //   setSelectedTrack(songs[index]);
          // }}
        >
          <img src={elem.imageUrl} alt="icon" />

          <div
            className={
              visibleBtn === elem.id
                ? cn(styles.fly__btn_touch)
                : cn(styles.fly__btn)
            }
          >
            <BiPlay
              className={cn(styles.play__now)}
              onClick={() => handlePlayAndAddToPlaylist(elem)}
            />
            <BiListUl
              className={cn(styles.play__next)}
              onClick={() => handleAddToPlaylist(elem)}
            />
          </div>
        </div>
        <div className={cn(styles.info)}>
          <p className={cn(styles.title)}>{elem.title}</p>
          <p className={cn(styles.artist)}>{elem.artist}</p>
          <p className={cn(styles.label)}>{elem.label}</p>
        </div>
        <div className={cn(styles.btn)}>
          <BiDotsHorizontal className={cn(styles.dots)} />
        </div>
      </div>
    );
  });
  return (
    <div className={cn(styles.container, stylesGrid.container)}>
      <div className={cn(styles.grid__hdr, stylesGrid.grid__hdr)}>
        <div className={cn(styles.grid__title, stylesGrid.grid__title)}>
          WHAT'S HOT
        </div>
        <div className={cn(styles.track__items, stylesGrid.track__items)}>
          {newTracksData}
        </div>
      </div>
    </div>
  );
};

export default Submain;
