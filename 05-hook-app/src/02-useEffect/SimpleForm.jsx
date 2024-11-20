import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Message from './Message'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: ''
    })

    const {username, email} = formState

    const onInputChange = ({target}) => {
        const { name, value } = target
        
        setFormState({
            ...formState,
            [name] : value
        })
    }

    

    //CADA VEZ Q MI FORM SE ACTUALICE SE LLAMA SIEMPRE QUE NO LE MANDAMOS DEPENDENCIAS
    // useEffect(() => {
    //   console.log('use effect called')
    
    //   return () => {
    //     1
    //   }
    // }, [])

    // //Se recomienda tener varios useEffect no uno solo gigante
    // useEffect(() => {
    //     console.log('formstate changed')
      
    //     return () => {
    //       1
    //     }
    // }, [formState])

    // useEffect(() => {
    //     console.log('emails changed')
      
    //     //Cleanup
    //     return () => {
    //       1
    //     }
    // }, [email])
    

  return (
    <div>
      <h1>Formulario simple</h1>
      <hr />

      <input className='form-control' 
        placeholder='Username'
        name='username'
        type='text'
        value={username}
        onChange={onInputChange}
      />
      <input className='form-control mt-2' 
        placeholder='Username'
        name='email'
        type='email'
        value={email}
        onChange={onInputChange}
      />

      {
        username === 'Diego' ? <Message /> : ''
      }
    </div>
  )
}

export default SimpleForm
