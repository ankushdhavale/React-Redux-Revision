import React from 'react'
import { useSelector } from 'react-redux'

import './UserList.css'
const UserList = () => {
    const user = useSelector((state)=>state.user)
    console.log(user);
    
    
    
  return (
    <div className='user-list'>
        <h1>User List</h1>
       {user?.map((item,index)=>{
            return <div>
                        <p>Name: {item.name}</p>
                        <p>Email: {item.email}</p>
                  </div>
       })}
    </div>
  )
}

export default UserList
