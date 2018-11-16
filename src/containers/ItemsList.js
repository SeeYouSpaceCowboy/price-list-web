import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchItems } from '../actions/itemsActions'
import Item from '../components/Item'

class ItemsList extends Component {
  componentWillMount() {
    this.props.fetchItems()
  }

  render() {
    const { items } = this.props

    return (
      <div>
        <h2>Items</h2>
        <div>
          { items.map(item => <Item key={ item._id } item={ item }/>) }
        </div>
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
    fetchItems
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)
