import styles from "./release.scss";
import stylesApp from "../../styles/app.module.css";
import cn from "classnames";
import { useParams } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import { sliderMap } from "../../components/UI/audios/audios";

const Release = () => {
  const { id } = useParams();
  const [release, setRelease] = useState(null);

  useLayoutEffect(() => {
    let res = sliderMap.filter((elem) => elem.title === id);

    setRelease(res);
  }, [id]);

  console.log(release);
  // console.log(id);

  return (
    <div className={cn(styles.container)} id="wrapper">
      {release && (
        <>
          <div className={cn(styles.release)} id="release">
            <div className={cn(styles.image)} id="image">
              <img src={release.imageUrl} alt="" />
            </div>
            <div className={cn(styles.info)} id="info">
              <div className={cn(styles.active__title)} id="active__title">
                {release.title}
              </div>
              <div className={cn(styles.active__artist)} id="active__artist">
                {release.artist}
              </div>
              <div className={cn(styles.active__label)} id="active__label">
                {release.label}
              </div>
            </div>
          </div>
          <div id="trk__list">
            <div id="trk__row"></div>
            <div id="trk__row"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Release;
