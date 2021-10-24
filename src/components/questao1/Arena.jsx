import React from "react";
import Hero from './Hero'
import Enemy from "./Enemy";
import { Hero_url, Enemy_url } from "../questao2/caminhos";
const Arena = () =>{
    return(
        <div>
            <Hero name={"Homen Aranha"} url={Hero_url} alt={"Homen Aranha"}/>
            <Enemy name={"Doutor Octopus"} url={Enemy_url} alt={"Doutor Octopus"}/>
        </div>
    )
}

export default Arena