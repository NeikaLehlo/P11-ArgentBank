import Logo from "../logo/Logo"
import SignInLink from "../signInLink/SignInLink"
import "./header.scss"

function Header({login, logout, userData}) {
    
    return (
        <header>
            <nav className="main-nav">
                <Logo />
                <SignInLink login={login} logout={logout} userData={userData}/>
            </nav>
        </header>
    )
}

export default Header