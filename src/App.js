import React, { Component } from 'react';
import IndexComponent from './components/IndexComponent/IndexComponent';
import {Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  
  render() {

    return (

      <div className="App">
          <Route exact = {true} path ="/" component={IndexComponent} />
      </div>

    );
  }
}

export default App;
