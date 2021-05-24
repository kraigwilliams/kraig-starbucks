import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './app/components/HomeScreen';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import {Fade} from 'react-awesome-reveal'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header/>

          <HomeScreen>

</HomeScreen>
          </Route>
          <Route path=''></Route>
          <Footer/>
        </Switch>
      </Router>
      
  </div>
  );
}

export default App;
