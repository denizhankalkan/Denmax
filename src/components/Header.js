import React, { Component } from 'react'
import "./ProductList.css";


export default class Header extends Component {
  render() {
    return (
        <div className="header">
          <h1 className='title'>{"Choose your travel destination! We will plan for you."}</h1>
        </div>
      );
  }
}
