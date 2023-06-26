import React from 'react'
import useApi from './Hooks/useApi'
export default function About() {
    let data = useApi("https://jsonplaceholder.typicode.com/posts")
    return (
    <>
        <ul>
            {data.map((post)=><li>{post.title}</li>)}
        </ul>
    </>
  )
}
