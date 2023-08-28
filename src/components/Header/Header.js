import React, { Component } from 'react'
import "./header.css";

export default class Header extends Component {
  render() {
    return (

      <header className='header'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ marginRight: '20px' }}>Contact</h1>
        <h1 style={{ marginRight: '20px' }}>Destinations</h1>
        <h1>Tours</h1>
      </div>

        
    </header>

        // <div className="header">
        //  <div className="top-header">
        //  <div>Destinations</div>
        //  <div>Tours</div>
        //  <div>Deals</div>
        //  <span>Contact</span>
        //  </div>
        //  <div className='image-grid'>
        //   image
        //  </div>
        // <div>
        // <h1 className='title'>{"Choose your travel destination! We will plan for you."}</h1>
        // </div>
        // </div>
      );
  }
}
