import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Message from './Message'
import useForm from '../Hooks/useForm'

const CustomForm = () => {

    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
      username : 'Diego',
      email : '',
      password : '123',
    })    

  return (
    <div>
      <h1>Formulario Custom</h1>
      <hr />

      <input className='form-control' 
        placeholder='Username'
        name='username'
        type='text'
        value={username}
        onChange={onInputChange}
      />
      <input className='form-control mt-2' 
        placeholder='Email'
        name='email'
        type='email'
        value={email}
        onChange={onInputChange}
      />

      <input className='form-control mt-2' 
        placeholder='Contraseña'
        name='password'
        type='password'
        value={password}
        onChange={onInputChange}
      />

      <button className='btn btn-primary mt-2' onClick={() => onResetForm()}>Borrar</button>
    </div>
  )
}

export default CustomForm
