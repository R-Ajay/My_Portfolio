import React from "react";
import { Link } from "react-router-dom";
import IntroBg from '../assests/intro-bg.jpg';
import './Styles/HeroImage.css';

const HeroImage=()=>{

    return(
        <div className="hero">
            <div className="mask">
              <img src={IntroBg} className="Introimg" alt='Introimg'></img>
            </div>
            <div className="content">
                <p>HI, I'M A FREELANCER.</p>
                <h1>REACT DEVELOPER.</h1>
                <div>
                  <Link to='/project' className="btn">PROJECT</Link>
                  <Link to='/contact' className="btn btn-light">CONTACT</Link>
                </div>
            </div>
        </div>
    );
}
export default HeroImage;