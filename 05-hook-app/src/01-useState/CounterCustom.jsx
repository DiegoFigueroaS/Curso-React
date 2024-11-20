import React from 'react'
import { useCounter } from '../Hooks/useCounter'

const CounterCustom = () => {

    const {counter, decrement, increment, reset} = useCounter();

  return (
    <div>
      <h1>Counter with HOok: {counter} </h1>
      <hr />
      <button onClick={() => increment(2)} className='btn'>+1</button>
      <button className='btn' onClick={reset}>reset</button>
      <button className='btn' onClick={decrement}>-1</button>
    </div>
  )
}

export default CounterCustom
