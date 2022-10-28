import styles from '../styles/Footer.module.css'
import Image1 from '../media/github.svg'
import Image2 from "../media/email.svg";
import Image3 from "../media/linkedin.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h5 className={styles.title}>
          CONTACTO
        </h5>

        <button className={styles.button}>
          <a href="https://github.com/LucianaSoledad86">
            <img src={Image1} alt="GitHub" width={50} height={45} />
            <p>/LucianaSoledad86</p>
          </a>
        </button>

        <button className={styles.button}>
          <a href="mailto:luciana.diaz1337@outlook.com">
            <img src={Image2} alt="Mail" width={50} height={45} />
            <p>luciana.diaz1337@outlook.com</p>
          </a>
        </button>

        <button className={styles.button}>
          <a href="https://www.linkedin.com/in/luciana-soledad-diaz-712065215/">
            <img src={Image3} alt="Linkedin" width={50} height={45} />
            <p>/luciana-soledad-diaz</p>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Footer


  