import React, { useState } from 'react'

function Bmiii(props) {
  const [tall, setTall] = useState('')
  const [kg, setKg] = useState('')
  const [bmi, setBmi] = useState('')

  const calcBMI = (h, w) =>
    h > 0 && w > 0 ? (w / Math.pow(h / 100, 2)).toFixed(1) : 0

  return (
    <>
      你目前的身高（公分）：
      <br />
      <input
        type="text"
        value={tall}
        onChange={(e) => setTall(e.target.value)}
      />
      <br />
      你目前的體重（公斤）：
      <br />
      <input type="text" value={kg} onChange={(e) => setKg(e.target.value)} />
      <br />
      <button onClick={() => setBmi(calcBMI(+tall, +kg))}>計算</button>
      <br />
      BMI：{bmi}
    </>
  )
}
export default Bmiii
