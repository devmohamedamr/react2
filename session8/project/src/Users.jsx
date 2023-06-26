import React , {useContext} from 'react'
import { DataContext } from './Context/DataContextProvider'
export default function Users() {
    let {data} = useContext(DataContext)
  return (
    <div>
        <h1>users component</h1>
        {data.map((user)=><li>{user.name}</li>)}
    </div>
  )
}
