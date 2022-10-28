import React, { useState, useEffect } from "react";
import "./App.css";

import Cover from "./components/Cover";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Slider from "./components/slider/Slider";
import Footer from "./components/Footer";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Cover />
      <Navbar isScrolling={scrollHeight} />
      <About />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
