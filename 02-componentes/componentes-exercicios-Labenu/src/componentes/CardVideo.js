import React from 'react';
import InfosUsuario from './InfosUsuario.js'; // Importando o componente InfosUsuario

function CardVideo() {
    return (
        <div className="card">
            {/* Conteúdo do card de vídeo */}
            <InfosUsuario />
        </div>
    );
}

export default CardVideo;
