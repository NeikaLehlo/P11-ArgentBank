import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../redux/authUserSlice"
import { deleteUserData } from "../../redux/userSlice"
import "./signInLink.scss"


function SignInLink() {
    const token = useSelector((state) => state.authUser.token)
    const userData = useSelector((state) => state.user)
    const dispatch = useDispatch()

    return (
        <div>
            {token ? (
                <>
                    <Link className="main-nav-item" to={`/user`}>
                        <i className="fa fa-user-circle"></i>
                        <span> {userData.userName}</span>
                    </Link>
                    <Link 
                        className="main-nav-item" 
                        to={`/`} 
                        onClick={() => {
                            dispatch(logout())
                            dispatch(deleteUserData())
                            }
                        }
                    >
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