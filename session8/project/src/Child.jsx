import React , {useContext} from 'react'
import {CounterContext} from './Context/CounterContextProvider' 
export default function Child() {
    let {number,increment} = useContext(CounterContext)
  return (
    <>
          <h1>child</h1>
        <h2>{number}</h2>
        <button onClick={increment}>increment</button>
    </>
  )
}
