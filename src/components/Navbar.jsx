import React from 'react'

import styles from '../styles/Navbar.module.css'

const Navbar = ({ isScrolling }) => {

    const toTheTop = () => {
        window.scrollTo( {top:0, left: 0, behavior:'smooth'})
    }


    return (
      <div
        className={`${styles.navbar} ${
          isScrolling > 20 ? styles.scrolling : null
        }`}
      >
        <div onClick={toTheTop} className={styles.logo}>
          DIAZ Luciana Soledad
        </div>
      </div>
    );
}

export default Navbar
