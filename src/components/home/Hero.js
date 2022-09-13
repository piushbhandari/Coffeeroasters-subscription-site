import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.textbox}>
          <h1>Great coffee made simple.</h1>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <a href="#">Create your plan</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
