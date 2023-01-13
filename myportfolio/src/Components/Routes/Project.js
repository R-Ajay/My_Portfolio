import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import PricingDetails from '../PricingDetails'
import HeroImage2 from '../HeroImage2';
import Work from "../Work";

const Project = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroImage2 heading="PROJECTS" text="some of my most recent works"></HeroImage2>
            <Work></Work>
            <PricingDetails></PricingDetails>
            <Footer></Footer>
        </div>
    );
}

export default Project;