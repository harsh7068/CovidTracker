import React, { PureComponent, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "./Filter.css";


export class Filter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      startDate : new Date()
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  
  
  async componentDidMount() {
    const url = "https://api.covid19api.com/summary";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({Global : data.Global});
    const element = new Array();
    
    for (let i = 0; i < data.Countries.length; i++) {
        element[element.length]= data.Countries[i].Country;
        //console.log(element[element.length-1]);
      
      this.setState({element :element});
      
    }
    
    console.log(this.state.element);
    //console.log(data.Countries[180].Country);
    this.setState({Global : data.Global});
   
   // this.setState({country : data.Countries});
   
}

  render() {
    return (
      
      <div className="filter" >
          <div className='filterText'>
          <h4 className='coronaTxt'>Global and Country wise Cases of Corona virus</h4>
          <h2 className='optionText'>(For a particular select a Country from below)</h2>
          
          { <Box className="box">
            <FormControl >
               <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Country
             </InputLabel>
             <NativeSelect
               defaultValue={1}
               inputProps={{
                
            }}
             >
          <option value={1}>Global</option>
          {/* {this.state.element.map(displaydata => (
            <option>{displaydata}</option>
          ))} */}
           <option>{this.state.element}</option>
           <option>{this.state.element}</option>
        </NativeSelect>
      </FormControl>
    </Box>}  
    <form onSubmit={this.onFormSubmit}>
      <div className='form-group'>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          name="startDate"
          dateFormat="MM/dd/yyyy"></DatePicker>
      </div>
    </form>
          </div>
          <div className='filterContent'>
              <p>Filters : </p>
          </div>
      </div>
    )
  }
}

export default Filter
