import React, { useState } from 'react'

function ColorTitle(props) {
  console.log(props)

  return (
    <>
      <h1 style={{ color: props.color }}>{props.children}</h1>
    </>
  )
}

export default ColorTitle
