import React from "react";
import styles from "./Footer.module.css";
import logo from "./../../assets/shared/desktop/logo copy.svg";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.flexbox}>
          <img src={logo} alt="another logo" />
          <ul className={styles.footerLinks}>
            <li className={styles.footerLink}>
              <Link to="/" className={styles.navLinks}>
                home
              </Link>
            </li>
            <li className={styles.footerLink}>
              <Link to="/" className={styles.navLinks}>
                about us
              </Link>
            </li>
            <li className={styles.footerLink}>
              <Link to="/" className={styles.navLinks}>
                Create your plan
              </Link>
            </li>
          </ul>
          <ul className={styles.socialLinks}>
            <li className={styles.socialLink}>
              <Link to="/" className={styles.socialIcon}>
                <AiFillFacebook />
              </Link>
            </li>
            <li className={styles.socialLink}>
              <Link to="/" className={styles.socialIcon}>
                <AiOutlineTwitter />
              </Link>
            </li>
            <li className={styles.socialLink}>
              <Link to="/" className={styles.socialIcon}>
                <AiOutlineInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
