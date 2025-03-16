import React, { useState } from "react";
//import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';
//import Footer from "../Footer/Footer";
import "./Register.css";

function Register() {
  const history = useNavigate();

  const [user, setUser] = useState({ name: "", gmail: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest()
      .then(() => {
        alert("Register Success");
        history("/mainhome");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/register", {
      name: String(user.name),
      gmail: String(user.gmail), // Fixed from "gmail"
      password: String(user.password),
    });
  };

  return (
    <div>
      {/*<Nav />*/}
      <br /><br />
      <h1>Register Page</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input type="text" name="name" value={user.name} onChange={handleInputChange} required />
        <br /><br />

        <label>Gmail :</label>
        <input type="text" name="gmail" value={user.gmail} onChange={handleInputChange} required />
        <br /><br />

        <label>Password :</label>
        <input type="password" name="password" value={user.password} onChange={handleInputChange} required />
        <br /><br />

        <button type="submit">Register</button>
        <li className = "home-li">
            <Link to ="/log" className = "active home-a">
            <button style={{ backgroundColor: "hsl(65, 82.90%, 48.00%)"}}>Login</button>
            </Link>
        </li>
      </form>

      {/*<Footer /> {/* Add Footer Here */} 

    </div>
  );
}

export default Register;
