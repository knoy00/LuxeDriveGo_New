import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const ScreenContext = createContext()

function ScreenProvider({children}) {

  const [isNodeOpen, setIsNodeOpen] = useState(false)
  return (
    <ScreenContext.Provider value={{isNodeOpen, setIsNodeOpen}}>
      {children}
    </ScreenContext.Provider>
  )
}

export default ScreenProvider
