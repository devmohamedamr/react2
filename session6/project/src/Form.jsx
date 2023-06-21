import React from 'react'
import {useForm} from 'react-hook-form'
export default function Form() {
    let {register,handleSubmit,formState:{errors}} = useForm()
  return (
    <>
        <form onSubmit={handleSubmit(send)}>
            <input type='text' {...register("name",{required:{value:true,message:"name is required"},minLength:{value:2,message:"min is 2"}})} />
            { errors.name && <span>{errors.name.message}</span> }

            <input type='text' {...register("email",{required:true})} />
            { errors.email && <span>email is required</span> }

            <input type='submit' />
        </form>
    </>
  )


  function send(data){
    console.log(data)
  }
}
