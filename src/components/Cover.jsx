import React from 'react'
import coverVideo from "../media/coverVideo.mp4";

import styles from '../styles/Cover.module.css'
import '../styles/Animation.css'

const Cover = () => {
    return (
      <div className={styles.container}>
        <video className={styles.video} src={coverVideo} autoPlay loop muted />
        <h1 className={styles.luciana}>Luciana Diaz</h1>
        <h3 className={styles.luciana}>Córdoba, Argentina</h3>
        <br />
        <span className="animation">FullStack web developer</span>
        <h2 className={styles.luciana}>&#129147;</h2>
      </div>
    );
}

export default Cover
