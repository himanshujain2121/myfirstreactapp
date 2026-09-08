import React, { useRef } from 'react'

const RefWithFunction = () => {

    let inputRef = useRef()

    let handleInput = () => {
        console.log(inputRef.current.value)
    }

  return (
    <div>
      <label htmlFor="">Email</label>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Submit</button>
    </div>
  )
}

export default RefWithFunction
