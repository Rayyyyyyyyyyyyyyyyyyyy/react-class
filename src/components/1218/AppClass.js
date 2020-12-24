import React from 'react'

class AppClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: props.initValue, //init value
      //   不要用props初始化 會失去可變性
    }
  }
  componentDidMount() {
    this.setState({
      total: this.props.initValue,
    })
  }

  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({
              total: this.state.total + 3,
            })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default AppClass
