import React, { Component } from 'react';
import IndexComponent from './components/IndexComponent/IndexComponent.jsx';
import {Route} from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/DefaultBody/HeaderComponent.jsx';
import FooterComponent from './components/DefaultBody/FooterComponent.jsx';

class App extends Component {
  
  render() {

    return (

   

      <div className="App">
          <HeaderComponent />

          <Route exact = {true} path ="/" component={IndexComponent} />

          <FooterComponent/>
      </div>

    );
  }
}

export default App;
