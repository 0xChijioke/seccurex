import React from 'react';
import Home from './pages/Home';
//import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Error from './pages/Error';
import Login from './pages/Login';
import { Route, Switch } from 'react-router-dom';
import User from './pages/UserAccount';
import SingleRoom from './pages/SingleRoom';
import Navbar from './components/Navbar';
import Rooms from './pages/Rooms';

import './App.css';

function App() {
  return (
    <div>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path='/AboutUs' component={AboutUs}/>
        <Route exact path='/Rooms' component={Rooms} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/UserAccount' component={User} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        <Route  component={Error} />
      </Switch>
    
    </div>
    )
}

export default App;
