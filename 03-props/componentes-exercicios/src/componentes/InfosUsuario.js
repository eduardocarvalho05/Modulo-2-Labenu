import React from "react";

export default function InfosUsuario(props) {
  
  return(
    <>
      <div className="info-usuario"> 
        <img className="imagem" src={props.imagemUsuario}/>
        <p>Nome do usuário: {props.nomeDoUsuario}</p>
      </div>
    </>
  )
}