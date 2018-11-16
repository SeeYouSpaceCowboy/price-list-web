import React from 'react'

export default ({ item: { name, price, unit, unitPrice, location, date, active } }) =>
  <div className='item'>
    <h2>{ name } $ { price }</h2>
    <p>${ unitPrice } per { unit }</p>
    <p>{ location }</p>
    <p>{ date }</p>
    <p>{ active }</p>
  </div>
