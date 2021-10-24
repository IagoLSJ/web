import React from "react";

const Enemy = (props) =>{
     return(
          <div>
          <p>{props.name}</p>
          <img src={props.url} alt={props.alt}/>
          </div>
          )
}
   
export default Enemy
