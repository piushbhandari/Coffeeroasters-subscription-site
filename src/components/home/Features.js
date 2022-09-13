import React from "react";
import styles from "./Features.module.css";
import bean from "./../../assets/home/desktop/icon-coffee-bean.svg";
import gift from "./../../assets/home/desktop/icon-gift.svg";
import truck from "./../../assets/home/desktop/icon-truck.svg";
const Features = () => {
  return (
    <section
      className={styles.features}
      arial-labelledby="features"
      role="contentinfo"
    >
      <div className={styles.container}>
        <div className={styles.row1}>
          <div className={styles.textbox}>
            <h2 id="features">Why choose us?</h2>
            <p>
              A large part of our role is choosing which particular coffees will
              be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level.
            </p>
          </div>
        </div>

        <ul className={styles.cards}>
          <li className={styles.card}>
            <img src={bean} alt="bean" />
            <div className={styles.cardTextbox}>
              <h3>Best quality</h3>
              <p>
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </li>
          <li className={styles.card}>
            <img src={gift} alt="bean" />
            <div className={styles.cardTextbox}>
              <h3>Exclusive benefits</h3>
              <p>
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </li>
          <li className={styles.card}>
            <img src={truck} alt="bean" />
            <div className={styles.cardTextbox}>
              <h3>Free shipping</h3>
              <p>
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
