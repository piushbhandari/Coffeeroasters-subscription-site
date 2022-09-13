import React from "react";
import styles from "./Collection.module.css";
import espresso from "./../../assets/home/desktop/image-gran-espresso.png";
import planalto from "./../../assets/home/desktop/image-planalto.png";
import piccollo from "./../../assets/home/desktop/image-piccollo.png";
import danche from "./../../assets/home/desktop/image-danche.png";

const Collection = () => {
  return (
    <section
      className={styles.collection}
      aria-labelledby="collection"
      role="contentinfo"
    >
      <div className={styles.container}>
        <h2 id="collection" className={styles.title}>
          our collection
        </h2>

        <ul className={styles.items}>
          <li className={styles.item}>
            <div className={styles.imgBox}>
              <img src={espresso} alt="espresso" className="fit-image" />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.subtitle}>Gran Espresso</h3>
              <p className={styles.desc}>
                Light and flavorful blend with cocoa and black pepper for an
                intense experience.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.imgBox}>
              <img src={planalto} alt="espresso" className="fit-image" />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.subtitle}>Planalto</h3>
              <p className={styles.desc}>
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.imgBox}>
              <img src={piccollo} alt="espresso" className="fit-image" />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.subtitle}>Piccollo</h3>
              <p className={styles.desc}>
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.imgBox}>
              <img src={danche} alt="espresso" className="fit-image" />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.subtitle}>Danche</h3>
              <p className={styles.desc}>
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Collection;
