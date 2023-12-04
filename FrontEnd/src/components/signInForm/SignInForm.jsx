import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../../redux/authUserSlice"
import "./signInForm.scss"

function SignInForm(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    async function connection(event, email, password){
        event.preventDefault()
        try{
            const loginFetch = {
                "email": email,
                "password": password
            };
            const loginJson= JSON.stringify(loginFetch);

            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body : loginJson
            });

            const loginResponse = await response.json();
            const token = loginResponse.body.token
            dispatch(login({token}))
            navigate("/user")

            if(!token) {
                throw new Error("Email et/ou Mot de Passe incorrect");
            } 

        } catch (error) {
            console.error("Erreur lors de la connexion :", error.message);
        }
    }

    return(
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={(event) => connection(event, username, password)}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-remember">
                    <input 
                        type="checkbox" 
                        id="remember-me" 
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" type="submit">Sign In</button>
            </form>
        </section>
    )
}

export default SignInForm