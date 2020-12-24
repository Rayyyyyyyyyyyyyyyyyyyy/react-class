import React, { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)
  // total 是得到變數 settotal是設定 0是初始值
  const [total2, setTotal2] = useState(0)
  const [total3, setTotal3] = useState(0)

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
      <h1
        onClick={() => {
          setTotal2(total2 + 1)
        }}
      >
        {total2}
      </h1>
      <h1
        onClick={() => {
          setTotal3(total3 + 1)
        }}
      >
        {total3}
      </h1>
    </>
  )
}

export default App
