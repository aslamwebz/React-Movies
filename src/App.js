import React from 'react';
import Main from './components/App'
import './App.css';
import {Router  , Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Search from './components/Search'
import history from './components/history'
import MovieDetails from './components/MovieDetails'

function App() {
  return (
    <div className="App">
        <Router history={history}>
            <Navbar />
            <Main />
            <Switch>
                <Route exact path='/React-Movies' component={Main}/>
                <Route path='/search/:query' component={Search}   />
                <Route path='/movie/:id' component={MovieDetails}   />
            </Switch>
        </Router >
    </div>
  );
}

export default App;
