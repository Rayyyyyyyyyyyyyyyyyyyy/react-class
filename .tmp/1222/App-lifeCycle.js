import React, { useState } from 'react'
import ClassLifeCycle from './components/1222/classLifeCycle'

function App() {
  const [show, setShow] = useState(true)
  return (
    <>
      <button onClick={() => setShow(!show)}>切換Class元件</button>
      {show && <ClassLifeCycle />}
      <hr />
    </>
  )
}

export default App
