import React from 'react'

const StateInFunction = () => {
  let [count,setCount] = React.useState(0)

  let inc = () => {
    setCount(count + 1)
  }

  let dec = () => {
    setCount(count - 1)
  }

  let reset = () => {
    setCount(0)
  }

  return (
    <>
    <div>StateInFunction</div>
    <h1>Count : {count}</h1>
    <button onClick={inc}>Add</button>
    <button onClick={dec}>Dec</button>
    <button onClick={reset}>Reset</button>
    <button onClick={reset}>Reset</button>
    </>
    
  )
}

export default StateInFunction
