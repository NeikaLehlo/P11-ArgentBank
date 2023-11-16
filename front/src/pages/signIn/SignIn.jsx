import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import SignInForm from "../../components/signInForm/SignInForm"
import "../../main.scss"


function SignIn() {
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