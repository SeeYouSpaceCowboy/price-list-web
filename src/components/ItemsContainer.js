import React from 'react'

import ItemsList from '../containers/ItemsList'
import AddItem from '../containers/AddItem'

export default () =>
  <div id="items-container">
    <ItemsList/>
    <AddItem/>
  </div>
