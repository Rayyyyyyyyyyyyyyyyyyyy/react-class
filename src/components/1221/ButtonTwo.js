import React, { useState } from 'react'

function ButtonTwo(props) {
  const [twoData, setTwoData] = useState('Two')
  return (
    <>
      {/* 子女->子女：利用父母元件傳來的props呈現資料 */}
      <h1>ButtonTwo(oneToTwoData):{props.oneToTwoData}</h1>
      {/* 子女->父母：利用父母元件傳來的setter來傳自己的狀態資料給父母 */}
      <button onClick={() => props.setChildData(twoData)}>Two</button>
    </>
  )
}

export default ButtonTwo
