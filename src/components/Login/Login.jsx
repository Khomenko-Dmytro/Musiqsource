import React from "react";
import styles from "./login.module.scss";
import cn from "classnames";
import { useState } from "react";
import { ImLock } from "react-icons/im";

const Login = ({ onClick, playlist, setLogWindow }) => {
  const [value, setValue] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div
      className={playlist ? cn(styles.wrapper__top) : cn(styles.wrapper)}
      onClick={onClick}
    >
      <div className={cn(styles.window)}>
        <div className={cn(styles.container)}>
          <div className={cn(styles.login__cont)}>
            <div className={cn(styles.lock__title)}>
              <ImLock className={cn(styles.lock)} />
              <h1 className={cn(styles.log__title)}>LOGIN TO YOUR ACCOUNT</h1>
            </div>
            <div className={cn(styles.email__username)}>Email or Username</div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className={cn(styles.password)}>Password</div>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <br />
            <input type="checkbox" /> Keep me logged in
            <br />
            <button className={cn(styles.login__btn)}>LOGIN</button>
          </div>
          <div className={cn(styles.singup__cont)}>
            <h1 className={cn(styles.singup__title)}>New?</h1>
            <div className={cn(styles.singup__subtitle)}>
              Become a Musiqsource member
            </div>
            {/* <br /> */}
            <button className={cn(styles.singup__btn)}>SING UP</button>
          </div>
          <div
            className={cn(styles.cancel)}
            onClick={() => setLogWindow(false)}
          >
            X
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
