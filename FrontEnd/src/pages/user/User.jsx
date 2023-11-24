import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import UserAccount from "../../components/userAccount/UserAccount"
import UserHeader from "../../components/userHeader/UserHeader"
import "./user.scss"


function User() {
    return (
        <>
            <Header />
            <main className="main bg-dark">
                <UserHeader
                    firstname="Chloé"
                    lastname="Neika"
                />
                <h2 className="sr-only">Accounts</h2>
                <UserAccount 
                    title="Argent Bank Checking (x8349)"
                    amount="$2,082.79"
                    description="Available Balance"
                />
                <UserAccount 
                    title="Argent Bank Saving (x6712)"
                    amount="$10,928.42"
                    description="Available Balance"
                />
                <UserAccount 
                    title="Argent Bank Credit Card (x8349)"
                    amount="$184.30"
                    description="Current Balance"
                />
            </main>
            <Footer />
        </>
    )
}

export default User