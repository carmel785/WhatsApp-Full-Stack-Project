import '../App.css';
import React, {useEffect, useState} from 'react'

function Users() {

  const [user,setUser] = useState({name: ""})


  const getUser = () =>
  {
    console.log(user)
  }

  return (
    <div className="App">
     <h2>Users</h2>
     Name: <input type = "text" onChange = {(e)=> setUser({name: e.target.value})}/>
     <button >Add User</button>
     <button onClick = {getUser}>get Data</button>

    </div>
  );
  
}

export default Users;
