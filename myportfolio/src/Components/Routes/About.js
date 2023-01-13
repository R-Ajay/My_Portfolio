import React from "react";
import Footer from "../Footer";
import AboutContent from '../AboutContent';
import HeroImage2 from "../HeroImage2";
import Navbar from "../Navbar";

const About=()=>{
    return(
        <div>
            <Navbar></Navbar>
            <HeroImage2 heading='ABOUT' text="I am a friendly front end developer"></HeroImage2>
            <AboutContent></AboutContent>
            <Footer></Footer>
        </div>
    );
}

export default About;