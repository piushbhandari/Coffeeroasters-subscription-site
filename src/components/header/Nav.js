import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import Logo from "./../../assets/shared/desktop/logo.svg";
import ham from "./../../assets/shared/mobile/icon-hamburger.svg";
import exit from "./../../assets/shared/mobile/icon-close.svg";
import { Link, useLocation } from "react-router-dom";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  function handleMobileBtn(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <img src={Logo} alt="coffeeroasters logo" />
        <nav className={styles.nav}>
          <ul className={`${styles.navlinks} ${isOpen && styles.openNav}`}>
            <li className={styles.navlink}>
              <Link className={styles.link} to="/">
                home
              </Link>
            </li>
            <li className={styles.navlink}>
              <Link className={styles.link} to="/about">
                about us
              </Link>
            </li>
            <li className={styles.navlink}>
              <Link className={styles.link} to="/">
                create your plan
              </Link>
            </li>
          </ul>
          <button className={styles.mobileBtn} onClick={handleMobileBtn}>
            <img
              src={isOpen ? exit : ham}
              alt={isOpen ? "hamburger icon" : "exit icon"}
            />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
