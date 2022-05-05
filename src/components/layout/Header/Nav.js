import styles from "./Nav.module.css";

export default function Nav(props) {
  return (
    <nav className={props.shown ? styles.shown : undefined}>
      <ul className={styles.nav__links}>
        <li>
          <a onClick={props.close} href="https://shrtco.de/X9VSBt">
            Features
          </a>
        </li>
        <li>
          <a onClick={props.close} href="https://shrtco.de/X9VSBt">
            Pricing
          </a>
        </li>
        <li>
          <a onClick={props.close} href="https://shrtco.de/X9VSBt">
            Resources
          </a>
        </li>
      </ul>
      <hr />
      <div className={styles.wrapper}>
        <button className={styles.login}>Login</button>
        <button className={styles.signup}>Sign Up</button>
      </div>
    </nav>
  );
}
