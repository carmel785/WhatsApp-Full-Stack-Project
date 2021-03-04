import '../App.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Users() {

  const [user,setUser] = useState({})

  const newUser = () =>
  {
    let obj = {
      Name: user,
      Phone: 123
    }
    axios.post("http://localhost:8000", obj)
    .then((resp)=> console.log(resp))
  }

  const getUser = async() =>
  {
    let obj = await axios.get("http://localhost:8000")
    console.log(obj)
  }

  return (
    <div className="App">
     <h2>Users</h2>
     Name: <input type = "text" onChange = {(e)=> setUser(e.target.value)}/>
     <button onClick = {newUser}>Add User</button>
     <button onClick = {getUser}>get Data</button><br/>
    {user.Name}
    </div>
  );
  
}

export default Users;
