import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Home() {
    let [users,setUsers] = useState([])
    useEffect(()=>{
        getdata()
    },[])
  return (
    <>
        <h1>test</h1>
        <ul>
            {users.map((user)=><li><Link to={`/user/${user.id}`}>{user.name}</Link></li>)}
        </ul>
    </>
  )
    function getdata(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setUsers(res.data)
            // console.log(res)
        })
    }
}
