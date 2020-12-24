import React, { useState, useEffect, useRef } from 'react'
import MyNavbar from './components/1223/MyNavbar'
import MyFooter from './components/1223/MyFooter'
import MainContent from './components/1223/MainContent'

import { data } from './data/data'

function App() {
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  //compenerDidMount()
  useEffect(() => {
    //開始載入資料
    setIsLoading(true)

    //從伺服器得到資料，然後設定到students
    setStudents(data)

    //最後關起spinner
    setTimeout(() => {
      setIsLoading(false)
    }, 15000)
  }, [])

  const spinner = (
    <>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  )
  const display = (
    <table className="table table-bordered">
      <thead>
        <th>座號</th>
        <th>姓名</th>
        <th>生日</th>
        <th></th>
      </thead>
      <tbody>
        {students.map((v, i) => (
          <tr key={i}>
            <td>{v.id}</td>
            <td>{v.name}</td>
            <td>{v.birth}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
  return (
    <>
      <MyNavbar />
      <MainContent>{isLoading ? spinner : display}</MainContent>
      <MyFooter />
    </>
  )
}
export default App
