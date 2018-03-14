import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBarFixed from './NavBarFixed.jsx';
import HomePage from './HomePage.jsx';
import Login from './Login.jsx';

//Application component, handles rendering of components on the page based on the route
//and activities of the user.

const RouteManager = () => (
  <div>
    <header>
      <Switch>
        <Route exact path='/'>
          <NavBarFixed  active ={'home'} />
        </Route>
		<Route exact path ='/home'>
			<NavBarFixed  active ={'disabled'} />
		</Route>
      </Switch>
    </header>

    <main>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/home' component={HomePage}/>
		<Route path='/dashboard' component={Login}/>
      </Switch>
    </main>
  </div>
)

export default RouteManager
