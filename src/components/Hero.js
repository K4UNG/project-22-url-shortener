import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img
        className={styles["hero__img"]}
        src="./images/illustration-working.svg"
        alt="hero image"
      />

      <div className={styles.wrapper}>
        <div className={styles["hero__text"]}>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
        </div>
        <button className={styles["hero__btn"]}>Get Started</button>
      </div>
    </section>
  );
}
