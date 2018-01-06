import React, { Component } from 'react';
import './App.css';
import Title from './Components/TitleComponent';
import City from './Components/CityComponent';
import State from './Components/StateComponent';
import GetWeather from './Components/GetWeatherComponent';
import RecentSearchesTitle from './Components/RecentSearchesTitleComponent';
import RecentSearches from './Components/RecentSearchesComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cityName: '',
      stateName: ''
    };

  }

  changeCity(cityName) {
    this.setState({
      cityName: encodeURI(cityName)
    });
  }

  changeState(stateName) {
    this.setState({
      stateName: encodeURI(stateName)
    });
  }

  render() {
    return (
      <div className="App">
        <Title />
        <City cityName={this.state.cityName} changeCity={this.changeCity.bind(this)}/>
        <br/>
        <br/>
        <State stateName={this.state.stateName} changeState={this.changeState.bind(this)} />
        <br/><br/>
        <GetWeather cityName={this.state.cityName} stateName={this.state.stateName} />
        <br/><br/>
{/*         
        <RecentSearchesTitle />
        <RecentSearches /> */}
      </div>
    );
  }
}

export default App;
