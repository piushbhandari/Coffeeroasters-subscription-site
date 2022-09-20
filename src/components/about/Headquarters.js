import React from "react";
import styles from "./Headquarters.module.css";
import img from "./../../assets/about/desktop/image-quality.jpg";
import img__tab from "./../../assets/about/tablet/image-quality.jpg";
import img__mobile from "./../../assets/about/mobile/image-quality.jpg";
const Headquarters = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textbox}>
          <h2>Uncompromising quality</h2>
          <p>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
        <div className={styles.imgbox}>
          <img src={img} className="fit-image" />
        </div>
      </div>
    </section>
  );
};

export default Headquarters;
