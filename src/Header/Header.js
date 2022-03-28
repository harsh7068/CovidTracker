import React, { PureComponent } from 'react';
import corona from "../image/corona.jpg";
import "./Header.css";
import live from "../image/live.mp4";

export class Header extends PureComponent {
  render() {
    return (
      <div className="navigation" >
        <img src={corona} alt="logo" className="corona"></img>
        <p className='covidText'>Live COVID-19 Tracking Application</p>
        <video loop autoPlay className='live'> <source src={live}  /></video>
        
      </div>
    )
  }
}

export default Header
