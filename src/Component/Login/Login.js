import React, { useState } from "react";
//import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';
//import Footer from "../Footer/Footer";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ gmail: "", password: "" }); // Fixed

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRequest();
      if (response.data.status === "ok") {
        alert("Login Success");
        navigate("/mainhome");
      } else {
        alert("Login Error: " + (response.data.err || "Unknown error"));
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const sendRequest = async () => {
    return await axios.post("http://localhost:5000/login", user);
  };

  return (
    <div>
      {/*<Nav />*/}
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Gmail :</label>
        <input type="text" name="gmail" value={user.gmail} onChange={handleInputChange} required />
        <br /><br />
        <label>Password :</label>
        <input type="password" name="password" value={user.password} onChange={handleInputChange} required />
        <br /><br />
        <button className="log-btn" type="submit">Login</button>
        <li className = "home-li">
            <Link to ="/register" className = "active home-a">
            <button style={{ backgroundColor: "hsl(65, 82.90%, 48.00%)"}}>Register</button>
            </Link>
        </li>
      </form>

      {/*<Footer /> {/* Add Footer Here */}

    </div>
  );
}

export default Login;
