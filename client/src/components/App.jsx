import React from 'react';
import Overview from './Overview/Overview.jsx';
import StarRating from './Overview/StarRating.jsx';
import './app.css';

class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div id='container'>
      <h1>To be changed into a nav bar</h1>
      <Overview />
      </div>
    );
  }
};

export default App;