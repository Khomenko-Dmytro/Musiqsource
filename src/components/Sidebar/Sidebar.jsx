import React from "react";
import cn from "classnames";
import styles from "./sidebar.module.scss";
import stylesGrid from "../../styles/grid.module.scss";
import { BiDotsVertical } from "react-icons/bi";
import { audioMap } from "../UI/audios/audios.jsx";
import { useState } from "react";
import { BiPlay } from "react-icons/bi";
import { BiListUl } from "react-icons/bi";

const Sidebar = ({
  selectedTrack,
  setSelectedTrack,
  songs,
  isPlaying,
  setIsPlaying,
  handlePlayAndAddToPlaylist,
  handleAddToPlaylist,
}) => {
  const [tabs, setTabs] = useState(1);
  const [visibleBtn, setVisibleBtn] = useState("");

  const tracksData = audioMap.map((elem, index) => {
    return (
      <div
        className={cn(styles.item)}
        key={index}
        onMouseEnter={() => setVisibleBtn(elem.id)}
        onMouseLeave={() => setVisibleBtn("")}
      >
        <div className={cn(styles.position)}>{elem.position}</div>
        <div
          className={cn(styles.image)}
          onClick={function () {
            // if (!isPlaying) {
            //   setIsPlaying(!isPlaying);
            // } else {
            //   setIsPlaying(isPlaying);
            // }
            // setSelectedTrack(songs[index]);
          }}
        >
          <img src={elem.imageUrl} alt="icon" />
          {visibleBtn === elem.id && (
            <div className={cn(styles.fly__btn)}>
              <BiPlay
                className={cn(styles.play__now)}
                onClick={() => handlePlayAndAddToPlaylist(elem)}
              />
              <BiListUl
                className={cn(styles.play__next)}
                onClick={() => handleAddToPlaylist(elem)}
              />
            </div>
          )}
        </div>
        <div className={cn(styles.info)}>
          <p className={cn(styles.title)}>{elem.title}</p>
          <p className={cn(styles.artist)}>{elem.artist}</p>
          <p className={cn(styles.label)}>{elem.label}</p>
        </div>
        <div className={cn(styles.btn)}>
          <BiDotsVertical className={cn(styles.dots)} />
        </div>
      </div>
    );
  });
  // const tracksData2 = audioMap2.map((elem, index) => {
  //   return (
  //     <div className={cn(styles.item)} key={index}>
  //       <div className={cn(styles.position)}>{elem.position}</div>
  //       <div
  //         className={cn(styles.image)}
  //         onClick={function () {
  //           if (!isPlaying) {
  //             setIsPlaying(!isPlaying);
  //           } else {
  //             setIsPlaying(isPlaying);
  //           }
  //           setSelectedTrack(songs[index]);
  //         }}
  //       >
  //         <img src={elem.imageUrl} alt="icon" />
  //         <BiPlay className={cn(styles.play__now)} />
  //         <BiListUl className={cn(styles.play__next)} />
  //       </div>
  //       <div className={cn(styles.info)}>
  //         <p className={cn(styles.title)}>{elem.title}</p>
  //         <p className={cn(styles.artist)}>{elem.artist}</p>
  //         <p className={cn(styles.label)}>{elem.label}</p>
  //       </div>
  //       <div className={cn(styles.btn)}>
  //         <BiDotsVertical className={cn(styles.dots)} />
  //       </div>
  //     </div>
  //   );
  // });

  const handleTab = (ind) => {
    setTabs(ind);
  };

  return (
    <div className={cn(styles.grid__cont, stylesGrid.grid__cont)}>
      <div className={cn(styles.top__ten)}>
        <span>MUSIQSOURCE</span>TOP 10
      </div>
      <div className={cn(styles.topTenTab)}>
        <a
          href="#"
          className={tabs === 1 ? cn(styles.active) : ""}
          onClick={() => handleTab(1)}
        >
          1996
        </a>
        <a
          href="#"
          className={tabs === 2 ? cn(styles.active) : ""}
          onClick={() => handleTab(2)}
        >
          2000
        </a>
        <a
          href="#"
          className={tabs === 3 ? cn(styles.active) : ""}
          onClick={() => handleTab(3)}
        >
          2004
        </a>
        <a
          href="#"
          className={tabs === 4 ? cn(styles.active) : ""}
          onClick={() => handleTab(4)}
        >
          2023
        </a>
      </div>
      <div className={cn(styles.list__cont)}>
        {tabs === 1 && tracksData}
        {/* {tabs === 2 && tracksData2}
        {tabs === 3 && tracksData3}
        {tabs === 4 && tracksData4} */}
      </div>
    </div>
  );
};

export default Sidebar;
