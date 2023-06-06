import React, { Component } from 'react';

export default class Child extends Component {
  constructor(){
    super()
    console.log("one")
  }

  render() {
    console.log("two")

    return (
      <div> Child </div>
    );
  }


}
