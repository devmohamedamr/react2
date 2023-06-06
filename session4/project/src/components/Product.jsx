import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    return (
        <>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text"></p>
                <a className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
  }
}
