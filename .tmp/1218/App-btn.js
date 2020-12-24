import React, { useState } from 'react'
import AppFunction from './components/AppFunction'
import AppClass from './components/AppClass'

function App() {
  const [baseValue, setBaseValue] = useState(0)

  return (
    <>
      <AppFunction initValue={baseValue + 99} />
      <AppClass initValue={baseValue + 88} />
      <button onClick={() => setBaseValue(100)}>重設基準值+100</button>
    </>
  )
}

export default App
