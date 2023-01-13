import React from "react";
import { Link } from "react-router-dom";
import react1 from '../assests/react1.jpg';
import react2 from '../assests/react2.webp';
import './Styles/AboutContent.css';
const AboutContent = () => {

    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I</h1>
                <p>I am a React Front-end developer. I create
                    responsive seure website for my client.</p>
                <Link to='./Routes/Contact'>
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={react1} alt="Image" className="img"></img>
                    </div>
                    <div className="img-stack bottom">
                        <img src={react2} alt="Image" className="img"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutContent;