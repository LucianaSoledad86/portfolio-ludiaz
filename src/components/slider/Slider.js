import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import "@brainhubeu/react-carousel/lib/style.css"

const Slider = () => {
    return (
        <div className="carouselContainer">
            <div className="caarousel-title">
             <Carousel 
                arrows
                slidesPerPage={3}
                infinite
                animationSpeed={200}
                centered
                offset={50}
                itemWidth={400}
             />
            </div>
        </div>
    )
}

export default Slider
