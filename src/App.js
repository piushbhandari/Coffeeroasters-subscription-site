import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Nav from "./components/header/Nav";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
