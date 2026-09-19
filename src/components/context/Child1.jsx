import React, { useContext } from 'react'
import { messgaeContext } from './MessageContext';

const Child1 = () => {
    // 1. Consume the context using useContext
  const message = useContext(messgaeContext);
  return (
    <div>
      Child1
      <h2>{message}</h2>
    </div>
  )
}

export default Child1
