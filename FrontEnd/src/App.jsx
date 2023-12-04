import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import SignIn from "./pages/signIn/SignIn"
import User from "./pages/user/User"
import "./app.scss"

function App() {
  const token = useSelector((state) => state.authUser.token)
  
  return (
    <>
      <Header />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/user" element={token ? <User /> : <Navigate to="/sign-in" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App