import React, { useState } from 'react'
import ButtonOne from './components/1221/ButtonOne'
import ButtonTwo from './components/1221/ButtonTwo'

function App() {
  const [appData, setAppData] = useState('App')

  // 子女->父母 準備接收子女的內部狀態用的
  const [childData, setChildData] = useState('')

  // 子女->子女 One 到 Two
  const [oneToTwoData, setOneToTwoData] = useState('')

  return (
    <>
      {/* 子女->父母：來自Two的資料 */}
      <h1>App: {childData}</h1>
      {/* 父母->子女：直接透過props傳自己的資料給子女元件 */}
      <ButtonOne appData={appData} setOneToTwoData={setOneToTwoData} />

      {/* 子女->父母：傳一個setter函式給子女元件 */}
      <ButtonTwo oneToTwoData={oneToTwoData} setChildData={setChildData} />
    </>
  )
}

export default App
