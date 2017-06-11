import React, { Component } from 'react';
import './App.css';
import Test from './test';


class App extends Component {
    constructor() {
     super();
   this.state ={
       counter : 12
   }

    }
componentWillMount(){
    this.setState({
        heading : 'Welcome to React'
    })
}
  render() {
      const {heading} =  this.state;
    return (
      <div className="App">
        <div className="App-header">

          <h2>{heading}</h2>
        </div>

          <Test />
      </div>


    );
  }
}

export default App;
