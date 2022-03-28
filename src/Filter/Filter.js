import React, { PureComponent } from 'react';

import "./Filter.css";


export class Filter extends PureComponent {
  render() {
    return (
      <div className="filter" >
          <div className='filterText'>
          <h4 className='coronaTxt'>Global and Country wise Cases of Corona virus</h4>
          <h2 className='optionText'>(For a particular select a Country from below)</h2>
          </div>
          <div className='filterContent'>
              <p>Filters : </p>
          </div>
      </div>
    )
  }
}

export default Filter
