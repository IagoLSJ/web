import React from "react";


const Arena = (props) =>{
    return(
        <div>
            <h1>{props.arena}</h1>
            {React.Children.map(props.children, filho =>{
                return React.cloneElement(filho, {arena: props.arena})
            })}
        </div>
    )
}

export default Arena