import InfosUsuario from "./InfosUsuario";

export default function CardVideo(props){
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return(
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={props.imagemCard} alt="Miniatura do Vídeo" />
      <h4>{props.titulo}</h4>
      <InfosUsuario imagemUsuario={props.imagemUsuario} nomeDoUsuario={props.nomeDoUsuario} />
    </div>
  )
}

