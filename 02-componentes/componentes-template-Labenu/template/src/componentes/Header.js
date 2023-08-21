import Logo from "../img/logo.png";



export default function Header() {

    return (
        <>
            <header>
                <div>
                    <img src={Logo} alt="Descrição da imagem" title="logo" />
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Contato</li>
                    </ul>
                </div>
                <button>Entrar</button>

            </header>
        </>
    )
}


