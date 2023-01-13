import React from "react";
import Footer from "../Footer";
import HeroImage from "../HeroImage";
import Work from '../Work'
import Navbar from "../Navbar";


const Home=()=>{

    return(
        <div>
          <Navbar></Navbar>
          <HeroImage></HeroImage>
          <Work></Work>
          <Footer></Footer>
        </div>
    );
}

export default Home;