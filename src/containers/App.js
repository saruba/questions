import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Question from './question';
import NewQuestion from './new_question';
import Search from './search';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route path="/new" component={NewQuestion} />
          <Route path="/question/:id" component={Question} />
        </div>
      </Router>
    );
  }
}

export default App;
