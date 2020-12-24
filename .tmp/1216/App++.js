import React from 'react'

// function App() {
//   const [total, setTotal] = useState(0)
//   // total 是得到變數 settotal是設定 0是初始值

//   return <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0, //init value
      total2: 0,
      total3: 0,
    }
  }
  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({
              total: this.state.total + 1,
              total2: this.state.total2 + 2,
              total3: this.state.total3 + 5,
            })
          }}
        >
          {this.state.total}
        </h1>
        <h1>{this.state.total2}</h1>
        <h1>{this.state.total3}</h1>
      </>
    )
  }
}

export default App
