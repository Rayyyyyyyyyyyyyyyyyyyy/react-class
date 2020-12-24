import React, { useState } from 'react'

function ButtonOne(props) {
  const [oneData, setOneData] = useState('One')

  return (
    <>
      {/* 父母->子女：單向資料流，父母傳給子女 */}
      <h1>ButtonOne(appData): {props.appData}</h1>

      {/* 子女->子女：利用父母元件傳來的setter來傳自己的狀態資料給父母 */}
      <button onClick={() => props.setOneToTwoData(oneData)}>One</button>
    </>
  )
}

export default ButtonOne
