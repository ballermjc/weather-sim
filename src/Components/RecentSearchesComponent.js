import React, { Component } from 'react';
import axios from 'axios';

export default class RecentSearches extends Component {

    constructor() {
        super();
        this.state = {
            places: []
        }
    }

    componentDidMount() {
        axios.get(`/api/places`)
        .then(res => {
            console.log(res.data);  
            this.setState({places: res.data});
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
        <div className="forecast">
            {places}
        </div>
    );
  }
}