import React, { createContext, useState } from 'react'

import Button from './Button/Button'
import Header from './Header/Header'
export const linkcontext = createContext()
function App() {
  const [links, setLinks] = useState('')
  return (
    <div>
      <linkcontext.Provider value={{ links, setLinks }}>
        <Button />
        <Header />
      </linkcontext.Provider>
    </div>
  )
}

export default App




