import React from "react";

const Hero = (props) =>{
     return(
          <div>
          <p>{props.name}</p>
          <img src = {props.url} alt={props.alt}/>
          </div>
          )
}
   
export default Hero
