import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchItems, deleteItem } from '../actions/itemsActions'
import Item from '../components/Item'

class ItemsList extends Component {
  constructor() {
    super()

    this.state = {
      search: ''
    }

    this.renderItems = this.renderItems.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentWillMount() {
    this.props.fetchItems()
  }

  onChange(e) {
    let field = e.target.name
    let state = this.state

    state[field] = e.target.value
    this.setState({ state })
  }

  renderItems(items) {
    if(this.state.search === "") return items.map(item => <Item key={ item._id } item={ item } remove={ this.props.deleteItem }/>)

    let filteredItems = items.filter(item => item.name.toLowerCase().includes(this.state.search.toLowerCase()))

    return filteredItems.map(item => <Item key={ item._id } item={ item } remove={ this.props.deleteItem }/>)
  }

  render() {
    const { items } = this.props

    return (
      <div>
        <h2>Items</h2>
        <input name='search' value={ this.state.search } placeholder='search' onChange={ this.onChange }/>
        <div>{ this.renderItems(items) }</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.all
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchItems,
    deleteItem
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)
