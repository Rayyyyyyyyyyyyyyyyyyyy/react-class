import React, { useState } from 'react'

function ButtonOnee(props) {
  return (
    <>
      {props.life && (
        <button onClick={() => props.setLife(false)}>我想要從世界上消失</button>
      )}
    </>
  )
}

export default ButtonOnee
