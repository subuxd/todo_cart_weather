import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import img3 from "../assets/5.jpg";

const Services = () => {
    return (
        <div>
            <Carousel infiniteLoop autoPlay showStatus={false} showIndicators={false}>
                <div>
                    <img src={img1} alt="item1" />
                    <p>Full Stack</p>
                </div>
                <div>
                    <img src={img2} alt="item2" />
                    <p>Senior Manager</p>
                </div>
                <div>
                    <img src={img3} alt="item3" />
                    <p>Sales</p>
                </div>
            </Carousel>
        </div>
    );
}

export default Services