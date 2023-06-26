import React , {useContext} from 'react'
import { DataContext } from './Context/DataContextProvider'

export default function Category() {
    let {data} = useContext(DataContext)

  return (
    <div>
        <h1>category component</h1>
        {data.map((user)=><li>{user.email}</li>)}
    </div>
  )
}
