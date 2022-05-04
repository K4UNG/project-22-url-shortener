import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.about__intro}>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statisics dashboard
          </p>
        </div>

        <div className={styles.about__container}>
          <div className={styles.about__line}></div>
          <div className={styles.about__card}>
            <div className={styles.about__icon}>
              <img src="./images/icon-brand-recognition.svg" alt="icons" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className={styles.about__card}>
            <div className={styles.about__icon}>
              <img src="./images/icon-detailed-records.svg" alt="icons" />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decision.
            </p>
          </div>

          <div className={styles.about__card}>
            <div className={styles.about__icon}>
              <img src="./images/icon-fully-customizable.svg" alt="icons" />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.boost}>
        <img src="./images/bg-boost-mobile.svg" alt="background image" />
        <div>
          <h3>Boost your links today</h3>
          <button className={styles.boost__btn}>Get Started</button>
        </div>
      </div>
    </>
  );
}
