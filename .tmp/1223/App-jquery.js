import React, { useState, useEffect } from 'react'
import MyNavbar from './components/1223/MyNavbar'
import MyFooter from './components/1223/MyFooter'
import MainContent from './components/1223/MainContent'
// 要先安裝jquery 模組
// yarn add jquery或npm instal jquery
import $ from 'jquery'

function App() {
  const [textdata, setTextData] = useState('hello')

  // 模擬componentDidMount
  useEffect(() => {
    // jQuery程式碼需要寫在這裡
    //先用$函式轉為Jquery使用的DOM擴充元素，才能使用jquery

    $('#one').click(() => alert('textdata is ' + textdata))
  }, [textdata])

  return (
    <>
      <MyNavbar />
      <MainContent>
        <h1 className="mt-5">Sticky footer with fixed navbar</h1>
        <p className="lead">
          Pin a footer to the bottom of the viewport in desktop browsers with
          this custom HTML and CSS. A fixed navbar has been added with{' '}
          <code>padding-top: 60px;</code> on the{' '}
          <code>main &gt; .container</code>.
        </p>
        <button id="one">click me</button>
        <button onClick={() => setTextData('你好')}>
          change textdata to '你好'
        </button>
      </MainContent>
      <MyFooter />
    </>
  )
}
export default App
