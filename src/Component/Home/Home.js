import React from "react";
import "./Home.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <div className="home-container">
        <h1>🏡 Welcome to User Center!</h1>
        <p>
          User Center is a seamless platform for managing users efficiently. Easily register, log in, and access user details in a secure environment. 
          Admins can add and manage users effortlessly with a clean, responsive interface. 
          Join User Hub today for a smarter user management experience! 🚀
        </p>
      </div>
      <Footer /> {/* Add Footer Here */}
    </div>
  );
}

export default Home;
