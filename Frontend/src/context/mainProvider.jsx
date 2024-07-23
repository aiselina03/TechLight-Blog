import React from 'react'
import UserProvider from './userContext'

function MainProvider({children}) {
  return (
   <UserProvider>{children}</UserProvider>
  )
}

export default MainProvider