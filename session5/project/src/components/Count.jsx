import React, { useEffect, useState } from 'react'

export default function Count() {
    let [count,setCount] = useState(0)
    useEffect(()=>{
      console.log("two")
    })
    console.log("one")
  return (
    <>
        <h1>count is : {count}</h1>
        <button onClick={() => setCount(++count)}>increment</button>
    </>
  )
}
