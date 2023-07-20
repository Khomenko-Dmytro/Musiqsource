import React from "react";
import cn from "classnames";
import styles from "./main.module.scss";
import { audioMap } from "../UI/audios/audios";
import stylesGrid from "../../styles/grid.module.scss";
import TheSpiritOfAutumnEleven from "../UI/images/[Sparkless] The Spirit Of Autumn 11.jpeg";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className={cn(styles.wrapper, stylesGrid.wrapper)}>
      <section className={cn(styles.gallery__items, stylesGrid.gallery__items)}>
        <div
          className={cn(
            stylesGrid.gallery__item,
            stylesGrid.gallery__item_left
          )}
        >
          <Link to="/release">
            <img src={audioMap[0]["imageUrl"]} alt="" />
          </Link>
        </div>
        <div
          className={cn(
            stylesGrid.gallery__item,
            stylesGrid.gallery__item_left
          )}
        >
          <Link to="/release">
            <img src={audioMap[1]["imageUrl"]} alt="" />
          </Link>
        </div>
        <div
          className={cn(stylesGrid.gallery__item, stylesGrid.gallery__item_big)}
        >
          <Slider />
        </div>
        <div
          className={cn(
            stylesGrid.gallery__item,
            stylesGrid.gallery__item_right
          )}
        >
          <a
            href="https://soundcloud.com/spark-2/the-spirit-of-autumn-11-sparkless-in-da-mix"
            target="_blank"
          >
            <img src={TheSpiritOfAutumnEleven} alt="" />
          </a>
        </div>
        <div
          className={cn(
            stylesGrid.gallery__item,
            stylesGrid.gallery__item_right
          )}
        >
          <Link to="/release">
            <img src={audioMap[2]["imageUrl"]} alt="" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Main;
