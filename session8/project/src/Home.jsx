import React, { useEffect, useState } from 'react'
import useApi from './Hooks/useApi'
export default function Home() {
  let data = useApi("https://jsonplaceholder.typicode.com/users")
  console.log(data)
  return (
    <>
        {/* <ul>
            {data.data.map((user)=><li>{user.name}</li>)}
        </ul> */}
    </>
  )


}
