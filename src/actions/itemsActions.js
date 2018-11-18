import { itemsAdapter } from '../adapters/itemsAdapter'

const baseUrl = 'http://localhost:4001/api/v1'

// Below are two all items fetch methods doing the same thing. Except one uses
// promise, the other uses thunk
export const fetchItemsPromise = () => {
  const response = itemsAdapter.fetchItems()

  return {
    type: 'FETCH_ITEMS',
    payload: response
  }
}

export const fetchItems = () => {
  return dispatch => {
    fetch(`${ baseUrl }/items`)
      .then(response => response.json())
      .then(items => {
        dispatch({
            type: 'FETCH_ITEMS',
            payload: items
        })
      })
      .catch(err => err)
  }
}

export const createItem = item => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  }

  return dispatch => {
    fetch(`${ baseUrl }/items`, data)
      .then(response => response.json())
      .then(item => dispatch({
        type: 'CREATE_ITEM',
        payload: item
      }))
      .catch(err => err)
  }
}

export const deleteItem = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/items/${ id }`, data)
      .then(response => response.json())
      .then(item => dispatch({
        type: 'DELETE_ITEM',
        payload: item
      }))
      .catch(err => err)
  }
}
