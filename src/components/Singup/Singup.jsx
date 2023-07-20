import cn from "classnames";
import styles from "./singup.scss";
import stylesApp from "../../styles/app.module.css";
import { useState } from "react";
import { ImLock } from "react-icons/im";

const Singup = ({ playlist }) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div id="wrap" className={cn(styles.wrap)}>
      <div id="singup" className={cn(styles.singup)}>
        <p>SINGUP</p>
        <ImLock className={cn(styles.lock)} id="lock" />
      </div>
      <div id="container">
        <div className={cn(styles.welcome__text)} id="welcome__text">
          <h2>Welcome to Musiqsource</h2>
          <p>
            Registration is simple and provides you instant access to the worlds
            finest selection of underground music.
          </p>
        </div>
        <div className={cn(styles.reg__cont)} id="reg__cont">
          <p>Please fill in all fields...</p>
          <form className={cn(styles.singup__form)} id="singup__form">
            <div className={cn(styles.frm__row)} id="frm__row">
              <div className={cn(styles.frm__cell)} id="frm__cell">
                <span>*</span> Username:
              </div>
              <div className={cn(styles.frm__cell, styles.inp)}>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className={cn(styles.frm__row)} id="frm__row">
              <div className={cn(styles.frm__cell)} id="frm__cell">
                <span>*</span> Password:
              </div>
              <div className={cn(styles.frm__cell, styles.inp)} id="frm__cell">
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
            </div>
            <div className={cn(styles.frm__row)} id="frm__row">
              <div className={cn(styles.frm__cell)} id="frm__cell">
                <span>*</span> Confirm Password:
              </div>
              <div className={cn(styles.frm__cell, styles.inp)} id="frm__cell">
                <input
                  type="password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
              </div>
            </div>
            <div className={cn(styles.frm__row)} id="frm__row">
              <div className={cn(styles.frm__cell)} id="frm__cell">
                <span>*</span> Email:
              </div>
              <div className={cn(styles.frm__cell, styles.inp)} id="frm__cell">
                <input
                  type="email"
                  value={email}
                  style={{ width: "210px" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className={cn(styles.frm__row)} id="frm__row">
              <div className={cn(styles.frm__cell)} id="frm__cell">
                <span>*</span> Confirm Email:
              </div>
              <div className={cn(styles.frm__cell, styles.inp)} id="frm__cell">
                <input
                  type="email"
                  value={confirmEmail}
                  style={{ width: "210px" }}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                />
              </div>
            </div>
            <div className={cn(styles.frm__row)} id="frm__row">
              <div className={cn(styles.frm__cell)} id="frm__cell">
                <span>*</span> First Name:
              </div>
              <div className={cn(styles.frm__cell, styles.inp)} id="frm__cell">
                <input
                  type="text"
                  value={firstname}
                  style={{ width: "188px" }}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
            </div>
            <div className={cn(styles.frm__row)} id="frm__row">
              <div className={cn(styles.frm__cell)} id="frm__cell">
                <span>*</span> Last Name:
              </div>
              <div className={cn(styles.frm__cell, styles.inp)} id="frm__cell">
                <input
                  type="text"
                  value={lastname}
                  style={{ width: "188px" }}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className={cn(styles.frm__row)} id="frm__row">
              <div className={cn(styles.frm__cell)} id="frm__cell">
                <span>*</span> Country/Region:
              </div>
              <div className={cn(styles.frm__cell, styles.inp)} id="frm__cell">
                <input
                  type="country"
                  value={country}
                  style={{ width: "337px" }}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
            <div className={cn(styles.frm__row)} id="frm__row">
              <div className={cn(styles.frm__cell)} id="frm__cell">
                Recovery Phone:
              </div>
              <div className={cn(styles.frm__cell, styles.inp)} id="frm__cell">
                <input
                  type="tel"
                  value={phone}
                  style={{ width: "200px" }}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </form>
          <button className={cn(styles.btn)}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Singup;
