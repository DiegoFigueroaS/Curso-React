import { useState } from "react"

const CounterApp = () => {
    const [{counter1, counter2}, setCounter] = useState({
        counter1: 10,
        counter2: 20,
    })
  return (
    <div>
        <h1>Counter: {counter1} - {counter2} </h1>
        <hr />
        <button className="btn" onClick={() => setCounter((e) => {
            return {...e, counter1 : counter1+1}
        })} >+1</button>
    </div>
  )
}

export default CounterApp
