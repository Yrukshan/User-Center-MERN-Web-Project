
import React from 'react';
import './App.css';
import Home from "./Component/Home/Home";
import { Route, Routes } from 'react-router-dom';
import AddUser from './Component/Add User/AddUser';
import Users from "./Component/User Details/Users";
import UpdateUser from './Component/Update User/UpdateUser';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';




function App() {

  return (
    <div>
      <React.Fragment>
        <Routes>
        <Route path ="/" element={<Login/>}/>
            <Route path ="/mainhome" element={<Home/>}/>
            <Route path ="/adduser" element={<AddUser/>}/>
            <Route path ="/userdetails" element={<Users/>}/>
            <Route path ="/register" element={<Register/>}/>
            <Route path ="/log" element={<Login/>}/>
            <Route path ="/userdetails/:id" element={<UpdateUser/>}/>
        </Routes>
      </React.Fragment>
      
    </div>
  );
}

export default App;
