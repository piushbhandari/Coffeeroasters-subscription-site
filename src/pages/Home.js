import React from "react";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Procedure from "../components/home/Procedure";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <Features />
      <Procedure />
    </main>
  );
};

export default Home;
