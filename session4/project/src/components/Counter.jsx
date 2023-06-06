import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
  render() {
    console.log("render")
    return (
      <>
        <h2>count is : {this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
      </>
    );
  }

  increment = ()=>{
        this.setState({count:++this.state.count})
  }


}
