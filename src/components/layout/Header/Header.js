import { useState } from "react";
import styles from "./Header.module.css";
import Nav from './Nav'

export default function Header() {
  const [shown, setShown] = useState(false);

  function burgerHandler() {
    setShown(prev => !prev)
  }

  function close() {
    setShown(false)
  }

  return (
    <header>
      <div>
        <img className={styles.logo} src="./images/logo.svg" />
      </div>
      <Nav shown={shown} close={close} />
      <button
        aria-label="menu button"
        onClick={burgerHandler}
        className={`${styles.burger} ${shown && styles["burger--shown"]}`}
      >
        <div className={styles.line2}></div>
        <div className={styles.line1}></div>
        <div className={styles.line3}></div>
      </button>
    </header>
  );
}
