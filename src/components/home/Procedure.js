import React from "react";
import { Link } from "react-router-dom";
import styles from "./Procedure.module.css";
const Procedure = () => {
  return (
    <section
      className={styles.procedure}
      aria-labelledby="procedure"
      role="contentinfo"
    >
      <div className={styles.container}>
        <h2 className={styles.title} id="procedure">
          How it works
        </h2>
        <div className={styles.stepbox}>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
          <div className={styles.circle}></div>
        </div>
        <ul className={styles.steps}>
          <li className={styles.step}>
            <p className={styles.stepNumber}>01</p>
            <p className={styles.stepTitle}>Pick your coffee</p>
            <p className={styles.desc}>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </li>
          <li className={styles.step}>
            <p className={styles.stepNumber}>03</p>
            <p className={styles.stepTitle}>Choose the frequency</p>
            <p className={styles.desc}>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </li>
          <li className={styles.step}>
            <p className={styles.stepNumber}>03</p>
            <p className={styles.stepTitle}>Receive and enjoy!</p>
            <p className={styles.desc}>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </li>
        </ul>
        <Link to="/" className={styles.cta}>
          Create your plan
        </Link>
      </div>
    </section>
  );
};

export default Procedure;
