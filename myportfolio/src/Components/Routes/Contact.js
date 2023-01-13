import React from "react";
import Footer from "../Footer";
import Form from "../Form";
import HeroImage2 from "../HeroImage2";
import Navbar from "../Navbar";

const Contact=()=>{
    return(
        <div>
            <Navbar></Navbar>
            <HeroImage2 heading="CONTACT" text="Lets have a chat"></HeroImage2>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
}

export default Contact;