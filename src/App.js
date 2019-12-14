import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import EventNumber from './EventNumber';
import { getEvents } from './api';


class App extends Component {

  state = {
   events: [],
  numberOfEvents: 32


  }

  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then(events => this.setState({ events }));
  }



  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents}/>
        <EventNumber />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;