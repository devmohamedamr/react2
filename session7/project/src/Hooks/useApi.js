import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function useApi(url) {
  let [data,setData] = useState([])
  useEffect(()=>{
    axios.get(url).then((res)=>{
        setData(res.data)
    })
  },[data])
    return data
}
