import React from 'react'
import styles from '../styles/About.module.css'
import Image from "../media/lu.jpeg"



const About = () => {
    return (
      <div className={styles.conteiner}>
        <div className={styles.desc}>
          <p>
            Hola, 👋🏻 voy a contarte sobre mí;
            <br />
            soy DESARROLLADORA FULL STACK, programando en prácticas y proyectos
            enfocados al sector e-commerce y como desarrolladora web, en el
            bootcamp de{" "}
            <a
              className={styles.henry}
              href="https://www.soyhenry.com/"
              target="_blank"
              rel="noreferrer"
            >
              Soy Henry{" "}
              <img
                src="https://assets.soyhenry.com/henry-landing/assets/emojis/rocket.png"
                alt="css3"
                width="20"
                height="20"
              />
            </a>
            , remoto a tiempo completo. <br />
            <br />
            Soy organizada, responsable, con una mirada ágil, creativa e
            innovadora.
            <br />
            Me interesa seguir desarrollandome profesionalmente en una empresa u
            organización, acrecentando mis competencias relacionadas a la
            planificación, afrontando nuevos retos y formación continua
            &#128155;
            <br />
            <br />
            <h3>Mis skills:</h3>
            <div>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="50"
                  height="50"
                />
              </a>{" "}
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="50"
                  height="50"
                />
              </a>{" "}
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/ijsto/reactnextjssnippets/master/images/logo02.png"
                  alt="css3"
                  width="50"
                  height="50"
                />
              </a>{" "}
              <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="redux"
                  width="50"
                  height="50"
                />
              </a>{" "}
              <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                  alt="nodejs"
                  width="50"
                  height="50"
                />
              </a>{" "}
              <a
                href="https://www.postgresql.org"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="postgresql"
                  width="50"
                  height="50"
                />
              </a>{" "}
              <a href="https://expressjs.com" target="_blank">
                <img
                  src="https://www.nextontop.com/assets/img/services/web/expressjs.svg"
                  background-color="#ffffff"
                  alt="express"
                  width="60"
                  height="60"
                />
              </a>{" "}
              <a href="https://sequelize.org/" target="_blank">
                <img
                  src="https://static-00.iconduck.com/assets.00/file-type-sequelize-icon-443x512-ck0z81j3.png"
                  alt="kotlin"
                  width="50"
                  height="50"
                />
              </a>{" "}
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="60"
                  height="60"
                />
              </a>
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="60"
                  height="60"
                />
              </a>
              <br />
            </div>
          </p>
          <br />
        </div>
        <div className={styles.aboutImg}>
          <img src={Image} alt="about"></img>
        </div>
      </div>
    );
}

export default About