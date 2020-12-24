import React, { useState } from 'react'

function ButtonTwoo(props) {
  return (
    <>
      <button onClick={() => props.setLife(true)}>復活吧！</button>
    </>
  )
}

export default ButtonTwoo
