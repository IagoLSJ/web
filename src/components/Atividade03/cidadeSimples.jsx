import React, { useState, useEffect } from "react";

export default props => {
 const [fortaleza, setforta] = useState(0)
 const [quixada, setQuixada] = useState(0)
 const [jericoacoara, setJeri] = useState(0)
 const [limoeiro, setLimo] = useState(0)
 const [maior, setMaior] = useState("")
 const [menor, setMenor] = useState("")
 const [somaVotos, setSomaVotos] = useState(0)

 useEffect(()=>{
     //Soma de todos os votos
    setSomaVotos(fortaleza + quixada + jericoacoara + limoeiro)
    // Verificar qual o maior 
    if(fortaleza > quixada && fortaleza > jericoacoara && fortaleza > limoeiro){
        setMaior("Fortaleza")
    }else if(quixada > fortaleza && quixada > jericoacoara && quixada > limoeiro){
        setMaior("Quixadá")
    }else if(jericoacoara > fortaleza && jericoacoara > quixada && jericoacoara > limoeiro){
        setMaior("Jericoacoara")
    }else if(limoeiro > fortaleza && limoeiro > quixada && limoeiro > jericoacoara){
        setMaior("Limoeiro")
    }
    //Verifica o menor 
    if(fortaleza < quixada && fortaleza < jericoacoara && fortaleza < limoeiro){
        setMenor("Fortaleza")
    }else if(quixada < fortaleza && quixada < jericoacoara && quixada < limoeiro){
        setMenor("Quixadá")
    }else if(jericoacoara < fortaleza && jericoacoara < quixada && jericoacoara > limoeiro){
        setMenor("Jericoacoara")
    }else if(limoeiro < fortaleza && limoeiro < quixada && limoeiro < jericoacoara){
        setMenor("Limoeiro")
    }
 })
 return (
    <div>
        <button onClick={() =>{setforta(fortaleza + 1)}}>
          Fortaleza: {fortaleza}
        </button>
        <button onClick={() => setQuixada(quixada + 1)}>
            Quixadá: {quixada}
        </button>
        <button onClick={() => setJeri(jericoacoara + 1)}>
          Jericoacoara: {jericoacoara}
        </button>
        <button onClick={() => setLimo(limoeiro + 1)}>
          Limoeiro do Norte: {limoeiro}
        </button>
        <h1>Maior: {maior}</h1>
        <h1>Menor: {menor}</h1>
        <h1>Total de votos: {somaVotos}</h1>
      </div>
    );
  }

