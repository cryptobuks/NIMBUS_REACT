import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBarFixed from './NavBarFixed.jsx';
import HomePage from './HomePage.jsx';

const App = () => (
  <div>
    <header>
      <Switch>
        <Route exact path='/'>
          <NavBarFixed  active ={'home'} />
        </Route>
        <Route exact path='/home'>
          <NavBarFixed  active ={'link'} />
        </Route>
      </Switch>
    </header>

    <main>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/home' component={HomePage}/>
      </Switch>
    </main>
  </div>
)

export default App
