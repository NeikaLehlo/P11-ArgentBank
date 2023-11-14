import { Link } from "react-router-dom"
import logo from "../../../../designs/img/argentBankLogo.png"
import "../../main.scss"

function Logo() {
    return (
        <>
            <Link to={`/`} className="main-nav-logo">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"></img>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
        </>
    )
}

export default Logo