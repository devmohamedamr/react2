import React, { Component } from 'react';

export default class Home extends Component {
    
    constructor(){
        super()
        this.state = {
            name:"abdo",
            colors:[
                "red",
                "green"
            ]
        }
    }

  render() {
    let {name,colors} = this.state
    let res = colors.map((x)=> <li>{x}</li>)
    return (
        <>
            <h1>{name}</h1>
            <ul>
                {res}
            </ul>
        </>
    );
  }
}
