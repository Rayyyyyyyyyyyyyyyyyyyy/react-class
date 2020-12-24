import React, { useState } from 'react'
// 需要額外安裝用 `yarn add prop-types`
import PropTypes from 'prop-types'

function Title(props) {
  return (
    <>
      <h1 style={{ color: props.color }}>{props.text}</h1>
    </>
  )
}

// props的類型檢查用
Title.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}

// 預設的props值(沒給定時)
Title.defaultProps = {
  text: '沒文字',
  color: 'blue',
}

export default Title
