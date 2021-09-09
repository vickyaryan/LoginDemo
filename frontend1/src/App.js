import React from 'react'

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Login from './screen/Login'
import SignUp from './screen/Signup'
import Home from './screen/Home'
const App = () => {
  return (
        	<Switch>
        		<Route exact path="/" component={SignUp} />
        		<Route path="/login" component={Login} />
        		<Route path="/Home" component={Home} />
        	</Switch>
  )
}

export default App
