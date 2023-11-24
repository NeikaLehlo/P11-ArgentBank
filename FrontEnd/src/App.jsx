import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/home/Home"
import SignIn from "./pages/signIn/SignIn"
import User from "./pages/user/User"
import "./app.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </React.StrictMode>
  )