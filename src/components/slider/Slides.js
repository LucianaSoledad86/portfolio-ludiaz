import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    // src: "https://i.ibb.co/f1HgskM/lmp1.jpg",
    src: "https://i.ibb.co/pZCM1K5/af042efd-4d52-4dde-a9e3-86931e3f4591.jpg",
    alt: "lmpGaming",
    site: "https://lmpgaming.com/",
    desc: "LMP Gaming",
  },
  {
    // src: "https://i.ibb.co/88Gppx7/8ceda22b-fa7b-4950-88cf-8a6a9091e278.jpg",
    src: "https://i.ibb.co/pZCM1K5/af042efd-4d52-4dde-a9e3-86931e3f4591.jpg",
    alt: "E-Commerce Henry",
    site: "https://www.google.com.ar",
    desc: "E-Commerce Henry",
  },
  {
    src: "https://i.ibb.co/pZCM1K5/af042efd-4d52-4dde-a9e3-86931e3f4591.jpg",
    alt: "Countries-flags Project Practice",
    site: "https://www.google.com.ar",
    desc: "Flags App",
  },
  {
    // src: "https://i.ibb.co/xMgrsyK/citas1.jpg",
    src: "https://i.ibb.co/pZCM1K5/af042efd-4d52-4dde-a9e3-86931e3f4591.jpg",
    alt: "vettapoint",
    desc: "Date Controller",
  },
  {
    // src: "https://dayamartinez-developer.web.app/static/media/henryapp.496b4a5f.jpg",
    src: "https://i.ibb.co/pZCM1K5/af042efd-4d52-4dde-a9e3-86931e3f4591.jpg",
    alt: "HenryApp",
    desc: "Henry App",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
