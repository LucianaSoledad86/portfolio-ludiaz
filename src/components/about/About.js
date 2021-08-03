import React from 'react'
import "./About.css"
import fotoEquiel from "../../media/fotoEquiel.jpg"


const About = () => {
    return (
        
        <div className="about-conteiner">
            
            <div className="about-desc">
                <h3>Let me tell you something about me</h3>
                <p>Córdoba, Argentina. 23 años.</p>
            </div>
            <div className="about-img">
                <img src={fotoEquiel} alt='about'></img>
            </div>
        </div>
    )
}

export default About
