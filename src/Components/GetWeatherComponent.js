import React, { Component } from 'react';
import axios from 'axios';
import EnterCityTitle from './EnterCityTitleComponent';
import RecentSearchesTitle from './RecentSearchesTitleComponent';

export default class GetWeather extends Component {
  constructor() {
    super();
    this.state = {
      dayOneName: '',
      dayOneDescription: '',
      dayOneHigh: '',
      dayOneLow: '',
      dayOneIcon: '',
      dayTwoName: '',
      dayTwoDescription: '',
      dayTwoHigh: '',
      dayTwoLow: '',
      dayTwoIcon: '',
      dayThreeName: '',
      dayThreeDescription: '',
      dayThreeHigh: '',
      dayThreeLow: '',
      dayThreeIcon: '',
      dayFourName: '',
      dayFourDescription: '',
      dayFourHigh: '',
      dayFourLow: '',
      dayFourIcon: '',
      dayFiveName: '',
      dayFiveDescription: '',
      dayFiveHigh: '',
      dayFiveLow: '',
      dayFiveIcon: '',
      shouldHide: true,
      places: []
    };
  }

  componentWillMount() {
    axios.get(`/api/places`)
    .then(res => {
        console.log(res.data);  
        this.setState({places: res.data});
    })
    .catch(err => console.log(err));
  }

  componentDidUpdate() {
    axios.get(`/api/places`)
    .then(res => {
        console.log(res.data);  
        this.setState({places: res.data});
    })
    .catch(err => console.log(err));
  }

  handleClick(event) {
    let cityName = this.props.cityName;
    axios.post(`/api/places`, {city: cityName})
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));

    axios.get(`http://api.wunderground.com/api/b7e15dcd1fa3f799/forecast10day/q/${this.props.stateName}/${this.props.cityName}.json`)
      .then(res => {
        console.log(res.data.forecast.simpleforecast.forecastday);
        this.setState({
          dayOneName: res.data.forecast.simpleforecast.forecastday[1].date.weekday,
          dayOneDescription: res.data.forecast.simpleforecast.forecastday[1].conditions,
          dayOneHigh: res.data.forecast.simpleforecast.forecastday[1].high.fahrenheit,
          dayOneLow: res.data.forecast.simpleforecast.forecastday[1].low.fahrenheit,
          dayOneIcon: res.data.forecast.simpleforecast.forecastday[1].icon_url,
          dayTwoName: res.data.forecast.simpleforecast.forecastday[2].date.weekday,
          dayTwoDescription: res.data.forecast.simpleforecast.forecastday[2].conditions,
          dayTwoHigh: res.data.forecast.simpleforecast.forecastday[2].high.fahrenheit,
          dayTwoLow: res.data.forecast.simpleforecast.forecastday[2].low.fahrenheit,
          dayTwoIcon: res.data.forecast.simpleforecast.forecastday[2].icon_url,
          dayThreeName: res.data.forecast.simpleforecast.forecastday[3].date.weekday,
          dayThreeDescription: res.data.forecast.simpleforecast.forecastday[3].conditions,
          dayThreeHigh: res.data.forecast.simpleforecast.forecastday[3].high.fahrenheit,
          dayThreeLow: res.data.forecast.simpleforecast.forecastday[3].low.fahrenheit,
          dayThreeIcon: res.data.forecast.simpleforecast.forecastday[3].icon_url,
          dayFourName: res.data.forecast.simpleforecast.forecastday[4].date.weekday,
          dayFourDescription: res.data.forecast.simpleforecast.forecastday[4].conditions,
          dayFourHigh: res.data.forecast.simpleforecast.forecastday[4].high.fahrenheit,
          dayFourLow: res.data.forecast.simpleforecast.forecastday[4].low.fahrenheit,
          dayFourIcon: res.data.forecast.simpleforecast.forecastday[4].icon_url,
          dayFiveName: res.data.forecast.simpleforecast.forecastday[5].date.weekday,
          dayFiveDescription: res.data.forecast.simpleforecast.forecastday[5].conditions,
          dayFiveHigh: res.data.forecast.simpleforecast.forecastday[5].high.fahrenheit,
          dayFiveLow: res.data.forecast.simpleforecast.forecastday[5].low.fahrenheit,
          dayFiveIcon: res.data.forecast.simpleforecast.forecastday[5].icon_url,
          shouldHide: false,
          places: []
        });
      })
      .catch(err => console.log(err));
  }
  
  render() {
    const places = this.state.places.slice(0,3).map( place => {
      return (
              <div key={ place.id } >
              <h2>{decodeURI(place.city)}</h2>
              </div>            
      )
    });


    return (
      <div>
      <button onClick={event => this.handleClick(event)}>Get Weather</button>
      <div className={!this.state.shouldHide ? 'hidden' : ''}>
        <EnterCityTitle />
      </div>
      <div className={this.state.shouldHide ? 'hidden' : ''}>
      <h4>5 Day Forecast</h4>
      <div className="forecast">
      <div id="dayOne" className="forecastPanel">
        <p>{this.state.dayOneName}</p>
        <p>{this.state.dayOneDescription}</p>
        <p>High {this.state.dayOneHigh}</p>
        <p>Low {this.state.dayOneLow}</p>
        <img src={this.state.dayOneIcon}/>
      </div>
      <div id="dayTwo" className="forecastPanel">
        <p>{this.state.dayTwoName}</p>
        <p>{this.state.dayTwoDescription}</p>
        <p>High {this.state.dayTwoHigh}</p>
        <p>Low {this.state.dayTwoLow}</p>
        <img src={this.state.dayTwoIcon}/>
      </div>
      <div id="dayThree" className="forecastPanel">
        <p>{this.state.dayThreeName}</p>
        <p>{this.state.dayThreeDescription}</p>
        <p>High {this.state.dayThreeHigh}</p>
        <p>Low {this.state.dayThreeLow}</p>
        <img src={this.state.dayThreeIcon}/>
      </div>
      <div id="dayFour" className="forecastPanel">
        <p>{this.state.dayFourName}</p>
        <p>{this.state.dayFourDescription}</p>
        <p>High {this.state.dayFourHigh}</p>
        <p>Low {this.state.dayFourLow}</p>
        <img src={this.state.dayFourIcon}/>
      </div>
      <div id="dayFive" className="forecastPanel">
        <p>{this.state.dayFiveName}</p>
        <p>{this.state.dayFiveDescription}</p>
        <p>High {this.state.dayFiveHigh}</p>
        <p>Low {this.state.dayFiveLow}</p>
        <img src={this.state.dayFiveIcon}/>
      </div>
      </div>
      </div>
        <RecentSearchesTitle />
        <div className="forecast">
          {places}
        </div>
      </div>
    );
  }
}




