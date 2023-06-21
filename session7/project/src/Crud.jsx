import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
export default function Crud() {
    let {register,handleSubmit} = useForm()
    let [users,setUsers] = useState([
        {id:1,name:"mohamed",email:"mohamed@amit.com"},
        {id:2,name:"amr",email:"amr@amit.com"},
        {id:3,name:"fayrouz",email:"fayrouz@amit.com"}
    ])
  return (
    <>
        <h1>crud</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=> 
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                )}
            </tbody>
        </table>

        <form onSubmit={handleSubmit(save)}>
            <input type='text' {...register("name")} placeholder='name'/>
            <input type='text' {...register("email")} placeholder='email' />
            <input type='submit' value="send" />
        </form>    
    </>
  )

  function save(data){
    let id = users.length+1
    data['id'] = id 
    // 1 - copy
    let newusers = [...users]
    // 2- push -> copy
    newusers.push(data)
    // 3 copy set state 
    setUsers(newusers)
  }
}
