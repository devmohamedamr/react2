import React, { Component } from 'react';
import Button from './Button';

export default class Parent extends Component {
  render() {
    return (
      <>
          <Button name='go' />
          <Button name='click' />
          <Button name='hi' />
      </>
    );
  }
}
