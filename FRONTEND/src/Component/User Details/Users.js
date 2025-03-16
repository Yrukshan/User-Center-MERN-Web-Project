import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import axios from "axios";
import User from '../User/User';
import Footer from '../Footer/Footer';
import "./Users.css";

const URL ="http://localhost:5000/Users";

const fetchHandler = async () =>{

  return await axios.get(URL).then((res) => res.data);
}

function Users() {

  const [Users, setUsers] = useState([]);

  useEffect(()=>{
    fetchHandler().then((data) => setUsers(data.Users));

  },[])

    //Search Function
  const [searchQuery , setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers = data.Users.filter((user) =>
        Object.values(user).some((field) =>
          String(field).toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setUsers(filteredUsers);
      setNoResults(filteredUsers.length === 0);
    });
  };
  

  return (
    <div>
        <Nav/>
      <br></br>
      <h1><b>User Details Display Page</b></h1>

      <div className="search-container">
      <input onChange= {(e)=> setSearchQuery(e.target.value)} //Search 
      type="text"
      name="search"
      placeholder="Search Users Details"
      ></input>

      <button className="Search-Btn" onClick={handleSearch}>Search</button>

      </div>

      {noResults ? (

          <div>

            <p>No User Found</p>
          </div>

      ): ( // Search )} move below under  first </div>

      <div >
      {Users && Users.map((user, i) => (

        <div key={i}>
          <User  user={user}/>
        </div>
      ))}
      </div> 
        )}   

      <Footer /> {/* Add Footer here */}

    </div>
  )
}

export default Users
