import React, { useState } from 'react'
import axios from 'axios'
export default function About() {
    let [users,setUsers] = useState([])
  return (
    <>
        hi about
        <button onClick={getUsers}>click</button>
        <ul>
            {users.map((user)=> <li>{user.name}</li>)}
        </ul>
    </>
  )

  function getUsers(){

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log("fetch" ,json))
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
        setUsers(res.data)
        console.log("axios",res)
    })
  }

}
