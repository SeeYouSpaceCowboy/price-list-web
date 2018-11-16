import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

import ItemsContainer from './components/ItemsContainer'

export default (
  <BrowserRouter>
    <Switch id='routes'>
      <Route exact path='/' render={ () => <ItemsContainer/> }/>
      <Route path='/tests' component={ () => <div>Testing Path<br/><Link to="/">Back Home</Link></div> }/>
    </Switch>
  </BrowserRouter>
)

const loggedIn = () => !!sessionStorage['jwt']

const logout = () => {
  if(sessionStorage['jwt']) sessionStorage.removeItem('jwt')

  return <Redirect to="/login"/>
}
