import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
export default function Userdetails() {
    const {id} = useParams()
    let [person,setPerson] = useState([])
    useEffect(()=>{
        getuser()
    },[])
  return (
        <>
            <h1>hi {person.name}</h1>
            <h2>{person.email}</h2>

        </>
  )

  function getuser(){
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>{
        setPerson(res.data)
        console.log(res)
    })
  }
}
