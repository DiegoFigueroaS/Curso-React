import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (n) => setCounter(counter + n)
    const decrement = () => setCounter(counter - 1)
    const reset = () => setCounter(initialValue)

    return {
        counter:counter,
        increment:increment,
        decrement,
        reset
    }
}