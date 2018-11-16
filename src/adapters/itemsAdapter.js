// This Adapter uses Fetch instead of Axios to display an understanding of Fetch
const baseUrl = 'http://localhost:4001/api/v1'

export const itemsAdapter = {
  fetchItems: () => {
    return fetch(`${ baseUrl }/items`)
      .then(response => response.json())
      .then(items => items)
      .catch(error => error)
  }
}
