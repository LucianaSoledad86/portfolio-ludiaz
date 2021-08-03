import React from 'react'
import './Navbar.css';

const Navbar = ({ isScrolling }) => {

    const toTheTop = () => {
        window.scrollTo( {top:0, left: 0, behavior:'smooth'})
    }

    return (
        <div className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div onClick={toTheTop} className='navbar-logo'>
                Ezequiel Diaz
                
                    <a style={{marginLeft:'400px'}}>Luz / </a>
                    <a>Idioma / </a>
                    <a>Formal/Daily </a>
                
            </div>
        </div>
    )
}

export default Navbar
