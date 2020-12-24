import React, { useState } from 'react'
import ButtonOne from './components/1221/ButtonOnee'
import ButtonTwo from './components/1221/ButtonTwoo'

function App() {
  const [life, setLife] = useState(true)

  return (
    <>
      <ButtonOne life={life} setLife={setLife} />
      <ButtonTwo setLife={setLife} />
    </>
  )
}

export default App
