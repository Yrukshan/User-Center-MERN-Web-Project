//User Details Dispaly and Delete
import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './User.css';

function User({user}) {

  const history = useNavigate(); //Delete // Move this to the top

  if (!user) return <p>Loading...</p>;

  const{_id,name,gmail,age,address} = user;   //Display

  //const history = useNavigate(); //Delete // Move this to the top //Unless display Error

  const deleteHandler = async () => {
    console.log("Attempting to delete user with ID:", _id);  // Debugging

    /*if (!_id) {
      console.error("Error: User ID is undefined");
      return;
    }*/

    try {
      await axios.delete(`http://localhost:5000/users/${_id}`);
      console.log("User deleted successfully!");
      history("/");
      history("/userdetails"); // ✅ Navigate only once
    } catch (error) {
      console.error("Error deleting user:", error.response?.data || error.message);
    }
      
    
  }

  return (
    <div className="user-container">
      <h1>User Display</h1>
      <br></br>
      <h4>ID:{_id}</h4>
      <h4>Name:{name}</h4>
      <h4>Gmail:{gmail}</h4>
      <h4>Age:{age}</h4>
      <h4>Address:{address}</h4>
      <Link to= {`/userdetails/${_id}`}><button className="update-btn">Update</button></Link>
      <button onClick={deleteHandler} className="delete-btn">Delete</button>
      <br></br><br></br>
    </div>
  )
}

export default User
