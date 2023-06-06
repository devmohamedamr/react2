import React, { useState } from 'react'

export default function Count() {
    let [count,setCount] = useState(0)
  return (
        <>
            <h1>count is : {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={change}>changeColor</button>
        </>
  )

  function increment(){
    setCount(30)
  }


  function change(){

  }
}
