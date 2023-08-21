import RedesSociais from './Redes-sociais'
import Copyright from "./Copyright"


export default function Footer() {

    return (
        <>
            <footer>
                <div class="footer">
                    <div>
                        <RedesSociais />
                    </div>
                </div>
                <div class="copyright">
                    <Copyright />
                </div>
            </footer>

        </>
    )
}