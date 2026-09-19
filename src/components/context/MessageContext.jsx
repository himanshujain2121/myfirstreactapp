import React, { createContext } from 'react'

export let messgaeContext = createContext()

let MessageProvider = ({children})=>{

    let messageData = "Hello World from message provider"
    return(
        <messgaeContext.Provider value={messageData}>
            {children}
        </messgaeContext.Provider>
    )
}

export default MessageProvider