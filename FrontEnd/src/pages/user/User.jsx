import { useState, useEffect } from "react"
import UserAccount from "../../components/userAccount/UserAccount"
import UserHeader from "../../components/userHeader/UserHeader"
import "./user.scss"

function User({onUserData}) {
    const token= localStorage.getItem("token");
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const fetchUserData = async() => {
            try{
                const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })

                const userDataResponse = await response.json();
                const userDataResponseBody= userDataResponse.body
                setUserData(userDataResponseBody)
                onUserData(userDataResponseBody)
                localStorage.setItem("user",userDataResponse);

            } catch (error) {
                console.error("Erreur lors de la récupération des données utilisateur :", error.message);
            }
        }
        fetchUserData();
    },[token])

    return (
        <>
            <main className="main bg-dark">
                { userData &&(
                <UserHeader
                    userName={userData.userName}
                    firstName={userData.firstName}
                    lastName={userData.lastName}
                />
                ) }
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
        </>
    )
}

export default User