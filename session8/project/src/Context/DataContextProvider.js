import React , {createContext, useEffect, useState} from 'react'
import axios from 'axios'
export let DataContext = createContext()
export default function DataContextProvider(props) {
    let [data,setData] = useState([])
    useEffect(()=>{
        getdata()
    },[])
    function getdata(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setData(res.data)
        })
    }
  return <DataContext.Provider value={{data}}>
    {props.children}
  </DataContext.Provider>
}
