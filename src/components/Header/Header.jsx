import React from "react";
import cn from "classnames";
import styles from "./header.module.scss";
import { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { RiSearch2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { audioMap, newTrackMap } from "../UI/audios/audios";
import { Link, useParams } from "react-router-dom";
import Singup from "../Singup/Singup";
import Logo from "../UI/images/logo.png";

//collect massive
const allTracksMap = audioMap.concat(newTrackMap);

const Header = ({ onClick, selectedTrack, playlist }) => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [searchActive, setSearchActive] = useState(false);
  const [burger, setBurger] = useState(false);
  const { id } = useParams;

  //Autocomplete
  const filteredAtrist = allTracksMap.filter((object) => {
    return object.artist.toLowerCase().includes(value.toLowerCase());
  });
  const uniqueArtist = filteredAtrist.map((elem) => {
    return elem.artist;
  });
  //Arr whitout dublicate
  const uniqueArr = [...new Set(uniqueArtist)];

  const itemClickHandler = (e) => {
    setValue(e.target.textContent);
    setIsOpen(!isOpen);
  };
  const inputClickHandler = () => {
    setIsOpen(true);
  };
  const onClickSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <header
      className={cn(styles.header)}
      style={playlist ? { top: "64px" } : { top: "0" }}
    >
      <div className={cn(styles.container)}>
        <Link to="/" className={cn(styles.logo)}>
          <img src={Logo} alt="logo" />
          <p className={cn(styles.logo__text)}>MUSIQSOURCE</p>
        </Link>
        {/* <Link to="/" className={cn(styles.logo)}></Link> */}
        <div className={cn(styles.search)}>
          <VscSearch className={cn(styles.icon)} />
          <input
            className={cn(styles.input)}
            value={value}
            placeholder="NEW SEARCH..."
            onChange={(e) => setValue(e.target.value)}
            onClick={inputClickHandler}
          />
          <ul className={cn(styles.autocomplete)}>
            {value && isOpen
              ? uniqueArr.map((object, index) => {
                  return (
                    <li
                      key={index}
                      className={cn(styles.autocomplete__item)}
                      onClick={itemClickHandler}
                      // <NavLink><NavLink/>
                    >
                      <Link to={`/artist/${object}`}>{object}</Link>
                    </li>
                  );
                })
              : null}
          </ul>
          <div className={cn(styles.cancel)}>
            <a href="#" onClick={() => setSearchActive(false)}>
              CANCEL
            </a>
          </div>
        </div>
        <div className={cn(styles.search__small)}>
          <RiSearch2Line
            className={cn(styles.icon__small)}
            onClick={onClickSearch}
          />
        </div>
        <div className={cn(styles.login)} onClick={onClick}>
          LOG IN
        </div>
        <Link to="/singup" className={cn(styles.singup)}>
          SING UP
        </Link>
        <div className={cn(styles.menu__btn)}>
          <GiHamburgerMenu onClick={() => setBurger(!burger)} />
        </div>
        <div
          className={
            burger ? cn(styles.burger__list) : cn(styles.burger__list_unvisible)
          }
        >
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
