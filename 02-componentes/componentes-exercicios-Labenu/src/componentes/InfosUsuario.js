import React from 'react';
import imagem from "../imagem/6.jpg"

function InfosUsuario() {
    return (
        <div className="infos-usuario">
            <img src={imagem} alt="Imagem do usuário" />
            <p>Nome do Usuário</p>
        </div>
    );
}

export default InfosUsuario;