import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/UI/Calculator';
import './App.css';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Navbar from './components/UI/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/calculator">
            <div className="App">
              <Calculator />
            </div>
          </Route>

          <Route path="*">
            <Quote />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
