import React, { useState } from 'react'
import PropTypes from 'prop-types'


//Creamos los functional components 
export const CounterApp = ({value}) => {

    //HOOKS
    const [counter, setCounter] = useState(value)

  return (


    //! CADA CAMBIO DE ESTADO RENDERIZA DENUEVO TODO EL COMPONENTE

    <div>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={() => setCounter((e) => e + 1)}>
            +1
        </button>
        <button onClick={() => setCounter((e) => e - 1)}>-1</button>
        <button onClick={() => setCounter(value)}>reset</button>
    </div>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 10
}