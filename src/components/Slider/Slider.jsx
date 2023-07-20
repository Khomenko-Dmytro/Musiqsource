import React from "react";
import styles from "./slider.module.scss";
import { useState, useEffect } from "react";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { sliderMap } from "../UI/audios/audios";
import cn from "classnames";
import uuid4 from "uuid4";
import { Link } from "react-router-dom";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [slidePause, setSlidePause] = useState(false);

  const [release, setRelease] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/release")
  //     .then((res) => res.json())
  //     .then((data) => setRelease(data));
  // }, []);

  const nextSlide = () => {
    if (slideIndex !== sliderMap.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderMap.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sliderMap.length);
    }
  };

  if (!slidePause) {
    setTimeout(nextSlide, 4000);
  }

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div
      className={cn(styles.container__slider)}
      onMouseEnter={() => setSlidePause(true)}
      onMouseLeave={() => setSlidePause(false)}
    >
      {sliderMap.map((obj, index) => {
        return (
          <Link to={`/release/${obj.title}`} key={obj.id}>
            <img
              src={obj.imageUrl}
              className={
                slideIndex === index + 1
                  ? cn(styles.slide__anim)
                  : cn(styles.slide)
              }
            />
          </Link>
        );
      })}
      {slidePause && (
        <BsChevronCompactLeft
          className={cn(styles.btn__slide, styles.left)}
          onClick={prevSlide}
        />
      )}
      {slidePause && (
        <BsChevronCompactRight
          className={cn(styles.btn__slide, styles.right)}
          onClick={nextSlide}
        />
      )}
      {slidePause && (
        <div className={cn(styles.container__dots)}>
          {Array.from({ length: 10 }).map((item, index) => (
            <div
              key={uuid4()}
              onClick={() => moveDot(index + 1)}
              className={
                slideIndex === index + 1
                  ? cn(styles.dot__active)
                  : cn(styles.dot)
              }
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
