import React, { useState } from 'react'
import { countries, townships, postcodes } from '../../data/index'

function ZipCode() {
  const [country, setCountry] = useState(-1)
  const [township, setTownships] = useState(-1)

  return (
    <>
      <h1>台灣郵遞區號下拉選單</h1>
      <select
        value={country}
        onChange={(event) => {
          setCountry(+event.target.value)
          setTownships(-1)
        }}
      >
        <option value={-1}>縣市?</option>
        {countries.map((v, i) => (
          <option value={i} key={i}>
            {v}
          </option>
        ))}
      </select>

      <select
        value={township}
        onChange={(event) => {
          setTownships(+event.target.value)
        }}
      >
        <option value={-1}>區域?</option>

        {country > -1 &&
          townships[country].map((v, i) => (
            <option value={i} key={i}>
              {v}
            </option>
          ))}
      </select>
      <span>
        {country > -1 && township > -1 && postcodes[country][township]}
      </span>
    </>
  )
}

export default ZipCode
