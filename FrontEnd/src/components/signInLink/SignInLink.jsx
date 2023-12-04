import { Link } from "react-router-dom"
import "./signInLink.scss"

function SignInLink({login, logout, userData}) {
  
    return (
        <div>
            {login ? (
                <>
                    <Link className="main-nav-item" to={`/user`}>
                        <i className="fa fa-user-circle"></i>
                        <span> {userData.firstName}</span>
                    </Link>
                    <Link className="main-nav-item" to={`/`} onClick={logout}>
                            <i className="fa fa-sign-out"></i>
                            <span> Sign Out</span>
                    </Link>
                </>
                ) : (
                    <Link className="main-nav-item" to={`/sign-in`}>
                        <i className="fa fa-user-circle"></i>
                        <span> Sign In</span>
                    </Link>
                )
            }
        </div>
    )
}

export default SignInLink