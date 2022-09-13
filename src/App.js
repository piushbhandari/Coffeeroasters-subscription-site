import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Nav from "./components/header/Nav";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
