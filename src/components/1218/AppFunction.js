import React, { useState, useEffect } from 'react'

function AppFunction(props) {
  const [total, setTotal] = useState(props.initValue)
  // total 是得到變數 settotal是設定 0是初始值
  useEffect(() => {
    setTotal(props.initValue)
  }, [props.initValue])
  return (
    <>
      <ul>
        <li key="a1">123</li>
        <li key="2">213</li>
        <li key="3">321</li>
      </ul>
    </>
  )
}

export default AppFunction
