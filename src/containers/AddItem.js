import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createItem } from '../actions/itemsActions'

class AddItem extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      price: "",
      unitAmount: "",
      unit: "",
      location: "",
      date: ""
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.clearAll = this.clearAll.bind(this)
  }

  render() {
    return (
      <div>
        <h2>Add an Item</h2>
        <form id="itemAddForm" action="index.html" method="post" onSubmit={ this.onSubmit }>
          <input type="text" name="name" value={ this.state.name } placeholder="Item name" onChange={ this.onChange }/><br/>

          <input type="text" name="price" value={ this.state.price } placeholder="Price" onChange={ this.onChange }/><br/>

          <input type="text" name="unitAmount" value={ this.state.unitAmount } placeholder="How many units?" onChange={ this.onChange }/><br/>

          <input type="text" name="unit" value={ this.state.unit } placeholder="Unit" onChange={ this.onChange }/><br/>

          <input type="text" name="location" value={ this.state.location } placeholder="Location" onChange={ this.onChange }/><br/>

          <input type="text" name="date" value={ this.state.date } placeholder="Date" onChange={ this.onChange }/><br/>

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  onChange(e) {
    let state = this.state
    let field = e.target.name

    state[field] = e.target.value
    this.setState({ state })
  }

  onSubmit(e) {
    e.preventDefault()

    this.props.createItem(this.state)
    this.clearAll()
  }

  clearAll() {
    let state = this.state

    for(var key in state) {
      state[key] = ""
    }

    this.setState({ state })
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    createItem
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddItem)
