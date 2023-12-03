import { Link } from "react-router-dom"
import "./signInLink.scss"

function SignInLink({ isAuthenticated, onLogout}) {
    return (
        <div>
            {isAuthenticated ?(
                <Link className="main-nav-item" to={`/`} onClick={onLogout}>
                        <i className="fa fa-user-circle"></i>
                </Link>
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