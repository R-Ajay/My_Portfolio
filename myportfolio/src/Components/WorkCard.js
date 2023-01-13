import React from "react";
import { NavLink } from "react-router-dom";
import './Styles/WorkCard.css';
const WorkCard=(props)=>{


    return(
        <div className="project-card">
                   <img src={props.imgsrc} alt="Image"></img>
                   <h2 className="project-title">{props.title}</h2>
                   <div className="pro-details">
                     <p>{props.text}</p>
                     <div className="pro-btn">
                        <NavLink className='btn' to='url.com'>View</NavLink>
                        <NavLink className='btn' to='url.com'>Source</NavLink>
                     </div>
                   </div>
               </div>
    );
}

export default WorkCard;