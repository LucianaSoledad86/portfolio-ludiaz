import React from "react";
import "./Slider.css";

//IMAGENES
import ImageII from "../../media/myproyects/PIdogs.png";
import ImageIII from "../../media/myproyects/CriptoReact.png";
import ImageIV from "../../media/myproyects/PIfoods.png"
import ImageV from "../../media/myproyects/Coffee.png"

const slidesInfo = [
  {
    src: ImageII,
    alt: "Henry Labs PI Dogs",
    site: "https://pi-dogs-green-five.vercel.app/",
    desc: "Project Practice PI-Dogs (Henry-Labs)",
  },
  {
    src: ImageIII,
    alt: "CRIPTO-React Project Practice",
    site: "https://cripto-react-nu.vercel.app/",
    desc: "CRIPTO-React Project Practice - Udemy",
  },
  {
    src: ImageIV,
    alt: "Henry Labs PI Foods",
    site: "http://pi-food-seven-omega.vercel.app",
    desc: "PI-Foods Henry Labs",
  },
  {
    src: ImageV,
    alt: "Henry App",
    site: "http://coffeemainapp.vercel.app",
    desc: "Final Project - 'Coffee´s Order' (Henry-App)",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.site}>
      <img src={slide.src} alt={slide.alt} />
    </a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
