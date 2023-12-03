import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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

// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/header/Header";
// import Home from "./pages/home/Home";
// import SignIn from "./pages/signIn/SignIn";
// import User from "./pages/user/User";
// import "./app.scss";

// const App = () => {
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   const handleLogin = (token) => {
//     setToken(token);
//   };

//   const handleLogout = () => {
//     setToken(null);
//     localStorage.removeItem("token");
//   };

//   return (
//     <div>
//       <Router>
//         <Header isAuthenticated={!!token} onLogout={handleLogout} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/sign-in"
//             element={<SignIn onLogin={handleLogin} />}
//           />
//           <Route
//             path="/user"
//             element={<User isAuthenticated={!!token} token={token} />}
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
