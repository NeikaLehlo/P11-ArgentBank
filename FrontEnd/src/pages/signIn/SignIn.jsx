import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import SignInForm from "../../components/signInForm/SignInForm"
import "./signIn.scss"
import { useNavigate } from "react-router-dom"


function SignIn({onLogin}) {
    const navigate = useNavigate();
    if(onLogin){
        navigate("./user")
    }
    return (
        <>
            <Header />
            <main className="main bg-dark">
                <SignInForm />
            </main>
            <Footer />
        </>
    )
}

export default SignIn