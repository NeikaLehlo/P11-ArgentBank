import { Link } from "react-router-dom"
import "../../main.scss"

function SignInLink() {
    return (
        <div>
            <Link className="main-nav-item" to={`./sign-in`}>
                <i className="fa fa-user-circle"></i>
                  <span> Sign In</span>
            </Link>
        </div>
    )
}

export default SignInLink