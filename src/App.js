import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import EventNumber from './EventNumber';
import { getEvents } from './api';


class App extends Component {

  

  state = {
  events: [],
  page: null,
  lat: null,
  lon: null

  }
  componentDidMount () {
    getEvents().then(events => this.setState({ events }));
  }

 

  updateEvents = (lat, lon, page) => {
    if(lat && lon) {
      getEvents(lat, lon, this.state.page).then(response => this.setState({ events: response.events, lat: response.city.lat, lon: response.city.lon }));
    }
    else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(response => this.setState({ events: response.events, page: page }));
    }
    else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(response => this.setState({ events: response.events }));
    }
  }

   



  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents}/>
        <EventNumber updateEvents={this.updateEvents}/>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;