import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment} from './Redux/CounterSlice'
export default function Contact() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  
  return (
    <>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>button</button>
    </>
  )
}
