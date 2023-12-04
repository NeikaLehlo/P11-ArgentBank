import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import SignIn from "./pages/signIn/SignIn"
import User from "./pages/user/User"
import "./app.scss"

function App() {
  const [login, setLogin] = useState();
  const [userData, setUserData] = useState({})

  console.log("===")
  console.log("login: ")
  console.log(login)
  console.log("===")
  console.log("userData: ")
  console.log(userData)
  console.log("===")

  const onLogin = (login) => {
    setLogin(login);
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setLogin();
    setUserData({});
  }

  const onUserData = (userData) => {
    setUserData(userData);
  }

  return (
    <>
      <Header login={login} logout={logout} userData={userData}/>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn onLogin={onLogin} />} />
            <Route path="/user" element={login ? <User onUserData={onUserData} /> : <Navigate to="/sign-in" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//       <Router>
        
//       </Router>
//     </React.StrictMode>
//   )
