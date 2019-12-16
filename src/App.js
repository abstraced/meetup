import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import EventNumber from './EventNumber';
import { getEvents } from './api';


class App extends Component {

  state = {
  events: [],
  numberOfEvents: 32,
  lat: null,
  lon: null

  }
  componentDidMount () {
   
getEvents().then(events => this.setState({ events }));
  }

 

  updateEvents = (lat, lon,page) => {
    if (lat && lon) {
    getEvents(lat, lon, this.state.numberOfEvents).then(events => this.setState({ events })).then(this.setState({lat: lat,
      lon: lon}));
    else {
      getEvents(this.state.lat, this.state.lon,page).then(events => this.setState({ events })).then(this.setState({page: page}));

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