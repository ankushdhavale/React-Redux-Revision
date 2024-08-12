import React, { useState } from 'react';
import "./User.css"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from './Silces/UserSlice';

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  

  const submitHandeler = () =>{
    dispatch(addUser({
      name:name,
      email:email,
    }))  
    navigate("/user-list")
    console.log("Hello");
    
  }
  
  return (
    <div className='user-container'>
      <h1>Add User</h1>
      <div>
          <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' />
          <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email' />
      </div>
      <button onClick={submitHandeler}>Add</button>
    </div>
  )
}

export default User
