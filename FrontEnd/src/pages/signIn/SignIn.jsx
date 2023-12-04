import SignInForm from "../../components/signInForm/SignInForm"
import "./signIn.scss"

function SignIn({ onLogin }) {
    
    return (
        <>
            <main className="main bg-dark">
                <SignInForm onLogin={onLogin}/>
            </main>
        </>
    )
}

export default SignIn