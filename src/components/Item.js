import React from 'react'

export default ({ item: { _id, name, price, unit, unitPrice, location, date, active }, remove }) =>
  <div className='item'>
    <h2>{ name } $ { price }</h2>
    <p>${ unitPrice } per { unit }</p>
    <p>{ location }</p>
    <p>{ date }</p>
    <p>{ active }</p>
    <button onClick={ () => remove(_id) }>Remove</button>
  </div>
