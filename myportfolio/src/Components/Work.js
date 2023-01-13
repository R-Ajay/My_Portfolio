import React from "react";
import { NavLink } from "react-router-dom";
import WorkCard from "./WorkCard";
import './Styles/WorkCard.css';
import WorkCardData from "./WorkCardData";
const Work=(props)=>{

    return(
        <div className="work-container">
           <h1 className="project-heading">PROJECTS</h1>
           <div className="project-container">
               {
                WorkCardData.map((val,ind)=>{
                    return <WorkCard key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text}></WorkCard>
                })
               }
           </div>
        </div>
    );
}

export default Work;