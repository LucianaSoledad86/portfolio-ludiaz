import React from "react";
import Carousel,  { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <p className="proyectos">MIS PROYECTOS</p>
        <p className="proyectosII">Aplicando metodología SCRUM.</p>
        <br />
        <p className="proyectosII">Usando diariamente herramientas: </p>
        <br />
        <div className="proyectosII">
          <a href="https://postman.com" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              width="50"
              height="50"
            />
          </a>{" "}
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="50"
              height="50"
            />
          </a>
          <a href="https://docs.github.com/es" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/github/github-icon.svg "
              alt="git"
              width="50"
              height="50"
            />
          </a>{" "}
          <a href="https://docs.github.com/es" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/slack/slack-icon.svg"
              alt="git"
              width="45"
              height="45"
            />
          </a>{" "}
          <a href="https://docs.github.com/es" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg"
              alt="git"
              width="45"
              height="45"
            />
          </a>{" "}
          <a href="https://docs.github.com/es" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/discordapp/discordapp-icon.svg"
              alt="git"
              width="45"
              height="45"
            />
          </a>{" "}
          <a href="https://docs.github.com/es" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/trello/trello-icon.svg"
              alt="git"
              width="45"
              height="45"
            />
          </a>{" "}
        </div>
      </div>
      <Carousel
        plugins={[
          "infinite",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        arrows
        slidesPerPage={3}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: false,
            itemWidth: 250,
          },
        }}
      />
    </div>
  );
};

export default Slider;