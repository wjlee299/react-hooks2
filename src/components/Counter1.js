import React from 'react'
import useCounter from './useCounter'

function Counter1() {

  const [count, increment, decrement, reset] = useCounter()

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default Counter1