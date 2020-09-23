import React from "react";
import { Carousel } from "antd";
import gifts1 from "./imgs/gifts1-resized.jpg";
import gifts4 from "./imgs/gifts4-resized.jpg";
import hohoho from "./imgs/hohoho-resized.jpg";
import "./style.css";

function CarouselPage() {
    return (
        <Carousel autoplay>
            <div>
            <img className="contentStyle" src={hohoho} alt="friends" />
            </div>
            <div>
            <img className="contentStyle" src={gifts1} alt="friends"/>
            </div>
            <div>
            <img className="contentStyle" src={gifts4} alt="friends"/>
            </div>
        </Carousel>
        // mountNode,    
    );
}  

export default CarouselPage;