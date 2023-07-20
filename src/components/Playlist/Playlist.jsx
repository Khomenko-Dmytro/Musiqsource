import React from "react";
import cn from "classnames";
import styles from "./playlist.module.scss";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import stylesPlayer from "../Player/player.module.scss";
import { allTracksMap } from "../UI/audios/audios";

const Playlist = ({
  selectedTrack,
  visiblePlaylist,
  setVisiblePlaylist,
  list,
  setSelectedTrack,
  setPlaylist,
}) => {
  const removeItem = (item) => {
    setPlaylist((existingTracks) => {
      return existingTracks.filter((elem) => elem !== item);
    });
  };

  const playlistMap = list.map((item, index) => {
    return (
      <ul key={item.id}>
        <li>
          <div
            className={
              selectedTrack[0].id === item.id
                ? cn(styles.playlist__item_active)
                : cn(styles.playlist__item)
            }
            onClick={() => setSelectedTrack([item])}
          >
            <div className={cn(styles.tk__thumb)}>
              <img src={item.imageUrl} />
            </div>
            <div className={cn(styles.tk__info)}>
              <div className={cn(styles.tk__title)}>{item.title}</div>
              <div className={cn(styles.tk__artist)}>{item.artist}</div>
              <div className={cn(styles.tk__label)}>{item.label}</div>
              <div
                className={cn(styles.tk__del)}
                onClick={() => removeItem(item)}
              >
                X
              </div>
            </div>
          </div>
        </li>
      </ul>
    );
  });

  return (
    <div
      className={cn(styles.wrapper, stylesPlayer.playlist__container)}
      style={visiblePlaylist ? { height: "503px" } : { height: "0px" }}
    >
      {/* ACTIVE TRACK */}

      <div className={cn(styles.window)}>
        <div className={cn(styles.active__track)}>
          <GrPrevious className={cn(styles.prev)} />
          <div className={cn(styles.title)}>
            <div className={cn(styles.image)}>
              <img src={selectedTrack[0].imageUrl} alt="" />
            </div>
            <div className={cn(styles.info)}>
              <div className={cn(styles.active__title)}>
                {selectedTrack[0].title}
              </div>
              <div className={cn(styles.active__artist)}>
                {selectedTrack[0].artist}
              </div>
              <div className={cn(styles.active__label)}>
                {selectedTrack[0].label}
              </div>
            </div>
          </div>
          <GrNext className={cn(styles.next)} />
        </div>

        {/* PLAYLIST MASSIVE */}

        <div className={cn(styles.playlist__content)}>
          <div className={cn(styles.item)}>
            <div className={cn(styles.item__title)}>TITLE</div>
            <div className={cn(styles.item__artist)}>ARTIST</div>
            <div className={cn(styles.item__label)}>LABEL</div>
            <div className={cn(styles.item__void)}></div>
          </div>
          <div className={cn(styles.jp__playlist)}>{playlistMap}</div>

          {/* PLAYLIST FOOTER */}

          <div className={cn(styles.playlist__footer)}>
            <div className={cn(styles.sum__tracks)}>
              {list.length} Tracks in Playlist
            </div>
            <div className={cn(styles.clear__container)}>
              <div
                className={cn(styles.clear__playlist)}
                onClick={() => setPlaylist(null)}
                // onClick={() => setVisiblePlaylist(false)}
              >
                Clear Playlist
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
