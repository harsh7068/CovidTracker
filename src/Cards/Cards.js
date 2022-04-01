import React, { PureComponent } from 'react';

import "./Cards.css";


export class Cards extends React.Component {
  state= {
        
  };

  async componentDidMount() {
      const url = "https://api.covid19api.com/summary";
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data.Global);
      this.setState({NewConfirmed : data.Global.NewConfirmed});
      this.setState({TotalConfirmed : data.Global.TotalConfirmed});
      this.setState({NewDeaths : data.Global.NewDeaths});
      this.setState({NewRecovered : data.Global.NewRecovered});
      this.setState({TotalDeaths : data.Global.TotalDeaths});
      this.setState({TotalRecovered : data.Global.TotalRecovered});
      this.setState({Date: data.Global.Date});
  }
  render() {
    return (
      
      <div className="cards">
          <div className='RowCard'>          
         <div className='firstCard'>
            <h3>New Confirmed</h3>
            <h2>{this.state.NewConfirmed}</h2>
            <h4>Last Update at : {this.state.Date}</h4>
            <h3>Number of new confirmed cases </h3>
          </div>
          <div className='secondCard'>
              <h3>New Deaths</h3>
              <h2>{this.state.NewDeaths}</h2>
              <h4>Last Update at : {this.state.Date}</h4>
            <h3>Number of new deaths </h3>
          </div>
          <div className='thirdCard'>
              <h3>New Recovered</h3>
              <h2>{this.state.NewRecovered}</h2>
              <h4>Last Update at : {this.state.Date}</h4>
            <h3>Number of new recovered</h3>
          </div>
          </div>
          <div className='RowCard'>
          <div className='firstCard'>
                
                <h3>Total Confirmed</h3>
                <h2>{this.state.TotalConfirmed}</h2>
                <h4>Last Update at : {this.state.Date}</h4>
            <h3>Number of total confirmed cases </h3>
        </div>
        <div className='secondCard'>
                <h3>Total Deaths</h3>
                <h2>{this.state.TotalDeaths}</h2>
                <h4>Last Update at : {this.state.Date}</h4>
            <h3>Number of total deaths </h3>
        </div>
        <div className='thirdCard'>
            <h3>Total Recovered</h3>
            <h2>{this.state.TotalRecovered}</h2>
            <h4>Last Update at : {this.state.Date}</h4>
            <h3>Number of total recovered </h3>
        </div>
          </div>

      </div>
      
    )
  }
}

export default Cards
