import React, { Component } from 'react';
import Product from './Product'
export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      products:[
        "product 1 ",
        "product 2 ",
        "product 3"
      ]
    }
  }
  render() {
    let {products} = this.state;
    let res =  products.map((p)=> <Product title={p} />)
    return (
      <>
        {res}
      </>
    );
  }
}
