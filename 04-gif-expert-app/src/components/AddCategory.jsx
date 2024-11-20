import React from 'react'
import { useState } from 'react'



const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onChange = ({target}) => setInputValue(target.value)
    

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        setInputValue('')
        onAddCategory(inputValue)
        
    }

  return (
    <form onSubmit={(event => onSubmit(event))}>
        <input
            type='text'
            placeholder='Buscar gift'
            value={inputValue}
            onChange={onChange}
        />

    </form>
  )
}

export default AddCategory