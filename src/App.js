import React, { Component } from 'react';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Updates from './components/Updates';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Feature />
        <Updates />
      </div>
    );
  }
}

export default App;
