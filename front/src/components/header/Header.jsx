import Logo from "../logo/Logo"
import SignInLink from "../signInLink/SignInLink"
import "../../main.scss"

function Header() {
    return (
        <header>
            <nav className="main-nav">
                <Logo />
                <SignInLink />
            </nav>
        </header>
    )
}

export default Header