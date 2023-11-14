import Logo from "../logo/Logo"
import Login from "../login/Login"
import "../../main.scss"

function Header() {
    return (
        <nav className="main-nav">
            <Logo />
            <Login />
        </nav>
    )
}

export default Header