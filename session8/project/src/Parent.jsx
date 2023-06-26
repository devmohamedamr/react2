import React , {useContext} from 'react'
import {CounterContext} from './Context/CounterContextProvider' 

export default function Parent() {
    let {number,increment} = useContext(CounterContext)

  return (
    <>
        <h1>parent</h1>
        <h2>{number}</h2>
        <button onClick={increment}>increment</button>
    </>
  )
}
