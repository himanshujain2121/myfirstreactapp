import React, { useRef, useState } from 'react'

const UseRefWithInput = () => {

    let inputValue = useRef()
    let [showValue,setShowValue] = useState();

    let handle =()=>{
        console.log(inputValue.current.value)
        
        setShowValue(showValue = inputValue.current.value)
    }

  return (
    <div>
      UseRefWithInput
      <label htmlFor="Email"></label>
      <input type="text" ref={inputValue} onChange={handle} />
      <button >Click</button>
      {showValue}
    </div>
  )
}

export default UseRefWithInput
