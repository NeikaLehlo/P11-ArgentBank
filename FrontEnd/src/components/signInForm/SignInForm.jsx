import {useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./signInForm.scss"

//VOIR CONTEXTE

function SignInForm(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const navigate = useNavigate();

    async function connection(event, email, password){
    event.preventDefault()
    try{

        const login = {
            "email": email,
            "password": password
        };

        const loginJson= JSON.stringify(login);

        console.log("===");
        console.log("body:");
        console.log(loginJson);
        console.log("===");

        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body : loginJson
        });

        console.log("===");
        console.log("Requête API ok");
        console.log("===");

        const loginResponse = await response.json();

        const token = loginResponse.body.token

        console.log("===");
        console.log("loginResponse:");
        console.log(loginResponse.body.token);
        console.log("===");

        if(!token) {
            console.log("===");
            console.log("Email et/ou Mot de Passe incorrect");
            console.log("===");
            throw new Error("Email et/ou Mot de Passe incorrect");
        } else {
            if (rememberMe) {
                localStorage.setItem("token",token);
            }
            navigate("/user")
            console.log("Connexion réussie !!")
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
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                {/* <a href="./user" className="sign-in-button">Sign In</a> */}
                <button className="sign-in-button" type="submit">Sign In</button>
            </form>
        </section>
    )
}

export default SignInForm