import React, { Component } from 'react';

export default class City extends Component {

  handleChange(event) {
    let cityName = event.target.value;
    this.props.changeCity(cityName);
    console.log(event.target.value);
    
  }
  
  
  render() {
    return (
      <input type="text" name="chosenCity" id="cityInput" placeholder="City" onChange={ event => this.handleChange(event) }/>
    );
  }
}
